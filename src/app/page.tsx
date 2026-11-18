import Image from "next/image";
import Link from "next/link";
import ContactDetails from "@/components/ContactDetails";
import { ChevronIcon } from "@/components/icons";
import { site } from "@/data/site";
import styles from "./page.module.css";

const features = [
  {
    href: "/food",
    title: "Food",
    label: "Great Food",
    description: "Fresh ingredients, bold flavors.",
    image: "/images/brick_food.jpg",
  },
  {
    href: "/drinks",
    title: "Drinks",
    label: "Crafted Cocktails",
    description: "Crafted cocktails, wine, and more.",
    image: "/images/brick_cocktail.jpg",
  },
  {
    href: "/happy-hour",
    title: "Happy Hour",
    label: "Happy Hour",
    description: "Great deals on food and drinks.",
    image: "/images/brick_happyhour.jpg",
    mobileImage: "/images/brick_happyhour.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/brickHero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={`container ${styles.heroContent}`}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span className={styles.eyebrowDesktop}>Good Food · Great Drinks · Neighbors</span>
            <span className={styles.eyebrowMobile}>The Brick · Renton, WA</span>
          </p>
          <h1 className={styles.title}>
            <span className={styles.titleDesktop}>
              The Brick
              <br />
              Kitchen + Lounge
            </span>
            <span className={styles.titleMobile}>
              Good Food.
              <br />
              Great Drinks.
              <br />
              Better Together.
            </span>
          </h1>
          <p className={styles.lede}>
            A neighborhood Asian fusion kitchen and lounge in the Renton Highlands, serving
            comforting food, thoughtfully crafted cocktails, and nights worth staying a little
            longer.
          </p>
          <Link href="/menu" className="btn">
            View Menu
          </Link>
        </div>
      </section>

      <section className={`container ${styles.features}`} aria-label="Explore">
        {features.map((f) => (
          <Link key={f.href} href={f.href} className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 120px"
                className={f.mobileImage ? styles.desktopOnly : undefined}
              />
              {f.mobileImage && (
                <Image src={f.mobileImage} alt="" fill sizes="120px" className={styles.mobileOnly} />
              )}
            </div>
            <span className={styles.cardLabel}>{f.label}</span>
            <span className={styles.cardText}>
              <span className={styles.cardTitle}>{f.title}</span>
              <span className={styles.cardDesc}>{f.description}</span>
            </span>
            <span className={styles.chevron}>
              <ChevronIcon />
            </span>
          </Link>
        ))}
      </section>

      <section id="visit" className={`container ${styles.info}`} aria-labelledby="visit-h">
        <div className={styles.visitIntro}>
          <h2 id="visit-h" className={styles.visitTitle}>
            Visit us in the Renton Highlands
          </h2>
          <ul className={styles.directions}>
            {site.directions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <ContactDetails layout="row" />
      </section>
    </>
  );
}
