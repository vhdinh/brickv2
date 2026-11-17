import Image from "next/image";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string[];
  title: string;
  subtitle?: string;
  italicSubtitle?: boolean;
  image: string;
  /** Optional different image for small screens (e.g. Happy Hour sliders). */
  mobileImage?: string;
  /** "photo" = image fades in from the right; "ambient" = full-bleed background. */
  variant?: "photo" | "ambient";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  italicSubtitle,
  image,
  mobileImage,
  variant = "photo",
}: Props) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={`${styles.media} ${mobileImage ? styles.desktopOnly : ""}`}>
        <Image src={image} alt="" fill priority sizes="(min-width: 768px) 60vw, 100vw" />
      </div>
      {mobileImage && (
        <div className={`${styles.media} ${styles.mobileOnly}`}>
          <Image src={mobileImage} alt="" fill priority sizes="100vw" />
        </div>
      )}
      <div className={`container ${styles.content}`}>
        {eyebrow && (
          <p className={`eyebrow ${styles.eyebrow}`}>
            {eyebrow.map((e, i) => (
              <span key={e}>
                {i > 0 && <span aria-hidden> · </span>}
                {e}
              </span>
            ))}
          </p>
        )}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && (
          <p className={`${styles.subtitle} ${italicSubtitle ? styles.italic : ""}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
