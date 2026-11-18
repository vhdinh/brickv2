import Link from "next/link";
import { navLinks, site } from "@/data/site";
import Logo from "./Logo";
import ContactDetails from "./ContactDetails";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo />
          {/* <p>A neighborhood kitchen and lounge in Renton, WA.</p> */}
        </div>
        {/* <nav className={styles.links} aria-label="Footer">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <a href={site.orderUrl}>Order Online</a>
        </nav> */}
        <ContactDetails />
      </div>
      <div className={`container ${styles.legal}`}>
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
