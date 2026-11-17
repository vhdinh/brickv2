#!/usr/bin/env node
/**
 * Shrinks everything in public/images so the repo stays small and first loads stay fast.
 *
 *   npm run images
 *
 * What it does for each image in public/images:
 *   1. Moves the full-size original to image-originals/ (git-ignored, your master copies).
 *   2. Applies the phone's EXIF rotation, then caps the size:
 *        - hero / banner photos (HERO list below): 2000px on the longest side
 *        - everything else (menu photos):          1200px on the longest side
 *   3. Saves it in the right format with a lowercase extension:
 *        - truly transparent PNGs  -> optimized .png (keeps transparency)
 *        - everything else         -> .jpg at quality 80 (white-background PNGs included)
 *   4. Rewrites every "/images/..." reference in src/ to the new file name,
 *      matching case-insensitively (so "brick_cocktail.jpg" -> "brick_cocktail.JPG" gets fixed too).
 *
 * Images already processed (listed in image-originals/manifest.json) are skipped, so it is
 * safe to re-run after adding new photos. To redo one, delete its entry from the manifest
 * and copy its original back into public/images.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES = path.join(ROOT, "public", "images");
const ORIGINALS = path.join(ROOT, "image-originals");
const MANIFEST = path.join(ORIGINALS, "manifest.json");
const SRC = path.join(ROOT, "src");

// Large, full-width photos. Match is on the file name without extension, case-insensitive.
const HERO = [
  "brickHero",
  "brick_food",
  "brick_cocktail",
  "brick_happyhour",
  "DrinksSpread",
  "ShrimpPoBoy",
  "HHFood",
  "HH_Drinks",
  "hero-happy",
  "hero-home",
  "hero-menu",
  "hero-drink",
  "brick-wall",
].map((n) => n.toLowerCase());

const HERO_MAX = 2000;
const MENU_MAX = 1200;
const JPEG_QUALITY = 80;
const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?|heic|avif)$/i;

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;
const mb = (b) => `${(b / 1024 / 1024).toFixed(1)} MB`;

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

/** True only if the image has an alpha channel AND actually uses it. */
async function hasRealTransparency(file) {
  const img = sharp(file);
  const { hasAlpha } = await img.metadata();
  if (!hasAlpha) return false;
  const { channels } = await img.stats();
  return channels[3].min < 250;
}

async function listSourceFiles(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listSourceFiles(p)));
    else if (/\.(tsx?|jsx?|css|mdx?)$/.test(entry.name)) out.push(p);
  }
  return out;
}

async function main() {
  await fs.mkdir(ORIGINALS, { recursive: true });
  const manifest = (await exists(MANIFEST))
    ? JSON.parse(await fs.readFile(MANIFEST, "utf8"))
    : {};
  const done = new Set(Object.values(manifest).map((m) => m.output.toLowerCase()));

  const files = (await fs.readdir(IMAGES)).filter((f) => IMAGE_EXT.test(f));
  const renames = new Map(); // old name (lowercase) -> new name
  const claimed = new Set(files.filter((f) => done.has(f.toLowerCase())).map((f) => f.toLowerCase()));
  let before = 0;
  let after = 0;
  let processed = 0;

  for (const name of files) {
    if (done.has(name.toLowerCase())) continue;

    const base = name.replace(IMAGE_EXT, "");
    const inPublic = path.join(IMAGES, name);
    const original = path.join(ORIGINALS, name);

    const transparent = await hasRealTransparency(inPublic);
    const outName = `${base}${transparent ? ".png" : ".jpg"}`;
    if (claimed.has(outName.toLowerCase())) {
      console.warn(`! skipped ${name}: another image already became ${outName}`);
      continue;
    }
    claimed.add(outName.toLowerCase());

    // Keep the master copy, then write the optimized one in its place.
    await fs.rename(inPublic, original);
    const max = HERO.includes(base.toLowerCase()) ? HERO_MAX : MENU_MAX;

    let pipeline = sharp(original)
      .rotate() // honour phone EXIF orientation before metadata is stripped
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true });

    pipeline = transparent
      ? pipeline.png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
      : pipeline.flatten({ background: "#ffffff" }).jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    await pipeline.toFile(path.join(IMAGES, outName));

    const [{ size: s0 }, { size: s1 }] = await Promise.all([
      fs.stat(original),
      fs.stat(path.join(IMAGES, outName)),
    ]);
    before += s0;
    after += s1;
    processed++;
    manifest[name] = { output: outName, maxSize: max };
    if (name !== outName) renames.set(name.toLowerCase(), outName);
    console.log(`✓ ${name.padEnd(32)} ${kb(s0).padStart(9)} → ${kb(s1).padStart(7)}  ${outName}`);
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  // Point every reference in src/ at the real file name (and catch broken ones).
  const actual = new Map(
    (await fs.readdir(IMAGES)).map((f) => [f.toLowerCase(), f])
  );
  const missing = new Set();
  let edited = 0;

  for (const file of await listSourceFiles(SRC)) {
    const text = await fs.readFile(file, "utf8");
    const next = text.replace(/\/images\/([A-Za-z0-9_.\-]+\.[A-Za-z]+)/g, (match, ref) => {
      const key = ref.toLowerCase();
      const target = renames.get(key) ?? actual.get(key);
      if (!target) {
        missing.add(`${ref}  (${path.relative(ROOT, file)})`);
        return match;
      }
      return `/images/${target}`;
    });
    if (next !== text) {
      await fs.writeFile(file, next);
      edited++;
    }
  }

  console.log(
    processed
      ? `\n${processed} image(s): ${mb(before)} → ${mb(after)}. Updated references in ${edited} file(s).`
      : `\nNothing new to optimize. Updated references in ${edited} file(s).`
  );
  if (missing.size) {
    console.log("\nReferenced in src/ but not found in public/images:");
    for (const m of missing) console.log(`  - ${m}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
