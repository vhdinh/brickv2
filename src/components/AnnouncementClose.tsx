"use client";

import { DISMISSED_KEY } from "@/data/announcements";
import { CloseIcon } from "./icons";
import styles from "./AnnouncementBar.module.css";

/** Hides the bar and remembers the choice on this device. */
export default function AnnouncementClose({ id }: { id: string }) {
  const close = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bar = e.currentTarget.closest<HTMLElement>("[data-announcement]");
    if (bar) bar.hidden = true;
    try {
      const list: string[] = JSON.parse(localStorage.getItem(DISMISSED_KEY) || "[]");
      if (!list.includes(id)) list.push(id);
      // Keep the list short; old ids don't matter once they're out of announcements.ts
      localStorage.setItem(DISMISSED_KEY, JSON.stringify(list.slice(-20)));
    } catch {
      // Private mode / storage blocked: the bar just comes back on the next visit.
    }
  };

  return (
    <button type="button" className={styles.close} aria-label="Dismiss announcement" onClick={close}>
      <CloseIcon size={22} />
    </button>
  );
}
