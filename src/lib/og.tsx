import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/** Shared 1200×630 share-card renderer used by every opengraph-image.tsx. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontFile = (pkg: string, file: string) =>
  readFile(path.join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

const imageDataUrl = async (publicPath: string) => {
  const buf = await readFile(path.join(process.cwd(), "public", publicPath));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
};

export async function renderOgImage({
  title,
  kicker,
  image,
}: {
  /** Big heading, e.g. "Happy Hour" */
  title: string;
  /** Small line above the title, e.g. "Mon – Fri · 3 – 6 PM" */
  kicker: string;
  /** Path under /public, e.g. "/images/brickHero.jpg" */
  image: string;
}) {
  const [playfair, playfairBold, montserrat, photo] = await Promise.all([
    fontFile("playfair-display", "playfair-display-latin-400-normal.woff"),
    fontFile("playfair-display", "playfair-display-latin-700-normal.woff"),
    fontFile("montserrat", "montserrat-latin-500-normal.woff"),
    imageDataUrl(image),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#241a15" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, rgba(36,26,21,0.96) 0%, rgba(36,26,21,0.85) 50%, rgba(36,26,21,0.2) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
            color: "#fff",
          }}
        >
          {/* Wordmark */}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontFamily: "Playfair", fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>THE</div>
            <div style={{ fontFamily: "Playfair", fontWeight: 700, fontSize: 58, marginTop: -4 }}>BRICK</div>
            <div style={{ fontFamily: "Montserrat", fontSize: 15, letterSpacing: 5, marginTop: 6 }}>
              KITCHEN + LOUNGE
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div style={{ fontFamily: "Montserrat", fontSize: 22, letterSpacing: 5, opacity: 0.9 }}>
              {kicker.toUpperCase()}
            </div>
            <div style={{ fontFamily: "Playfair", fontSize: 84, lineHeight: 1.05, marginTop: 14 }}>{title}</div>
            <div style={{ display: "flex", marginTop: 26, fontFamily: "Montserrat", fontSize: 24, opacity: 0.92 }}>
              <div style={{ width: 48, height: 3, background: "#a65e43", marginRight: 18, marginTop: 14 }} />
              {site.address.street} · {site.address.city}, {site.address.region}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Playfair", data: playfair, weight: 400, style: "normal" },
        { name: "Playfair", data: playfairBold, weight: 700, style: "normal" },
        { name: "Montserrat", data: montserrat, weight: 500, style: "normal" },
      ],
    }
  );
}
