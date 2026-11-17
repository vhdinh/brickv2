import styles from "./Logo.module.css";

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <span className={`${styles.logo} ${size === "lg" ? styles.lg : ""}`}>
      <span className={styles.the}>The</span>
      <span className={styles.brick}>Brick</span>
      <span className={styles.sub}>Kitchen + Lounge</span>
    </span>
  );
}
