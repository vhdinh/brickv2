"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import Logo from "./Logo";
import ContactDetails from "./ContactDetails";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + close on Escape while drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" aria-label={`${site.name} home`} className={styles.logoLink}>
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.navLink}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href={site.orderUrl} className={`btn ${styles.order}`}>
            Order Online
          </a>
          <a href={site.orderUrl} className={`btn ${styles.order}`}>
            Buy Gift Card
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.logoLink}>
            <Logo size="lg" />
          </Link>
          <button
            type="button"
            className={styles.toggle}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className={`container ${styles.drawerBody}`}>
          <nav className={styles.drawerNav} aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={site.orderUrl} className={`btn ${styles.drawerOrder}`}>
            Order Online
          </a>
          <a href={site.orderUrl} className={`btn ${styles.drawerOrder}`}>
            Buy Gift Card
          </a>
          <hr className={styles.rule} />
          <ContactDetails />
        </div>
      </div>
    </header>
  );
}
