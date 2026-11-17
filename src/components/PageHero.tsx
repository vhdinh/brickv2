import Image from "next/image";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string[];
  title: string;
  subtitle?: string;
  italicSubtitle?: boolean;
  image: string;
  /** "photo" = image fades in from the right; "ambient" = full-bleed background. */
  variant?: "photo" | "ambient";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  italicSubtitle,
  image,
  variant = "photo",
}: Props) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={styles.media}>
        {/* Lazy + high priority: loads right away on desktop, but never on mobile,
            where the hero is hidden (browsers skip lazy images that aren't rendered). */}
        <Image
          src={image}
          alt=""
          fill
          loading="lazy"
          fetchPriority="high"
          sizes={variant === "photo" ? "(min-width: 768px) 62vw, 1px" : "(min-width: 768px) 100vw, 1px"}
        />
      </div>
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
