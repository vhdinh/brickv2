"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Section } from "@/data/types";
import styles from "./MenuList.module.css";

/**
 * Sticky category tabs + every section rendered in one scrolling list.
 * Tabs jump to a section and highlight whichever section is in view.
 */
export default function MenuList({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const clickLock = useRef(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band just under the sticky header + tabs
      { rootMargin: "-140px 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active tab visible in the horizontally-scrollable tab bar
  useEffect(() => {
    const bar = tabsRef.current;
    const tab = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!bar || !tab) return;
    const left = tab.offsetLeft - bar.offsetLeft;
    if (left < bar.scrollLeft || left + tab.offsetWidth > bar.scrollLeft + bar.clientWidth) {
      bar.scrollTo({ left: left - 16, behavior: "smooth" });
    }
  }, [active]);

  const go = (id: string) => {
    setActive(id);
    clickLock.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    window.setTimeout(() => (clickLock.current = false), 800);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.tabsBar}>
        <div className={`container ${styles.tabs}`} ref={tabsRef} role="tablist">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              data-id={s.id}
              aria-selected={active === s.id}
              className={styles.tab}
              onClick={() => go(s.id)}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className={`container ${styles.sections}`}>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className={styles.section} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`} className={styles.sectionTitle}>
              {s.title}
            </h2>
            {s.description && <h3 id={`${s.id}-d`} className={styles.sectionDescription}>
              {s.description}
            </h3>}
            <ul className={styles.list}>
              {s.items.map((item) => (
                <li key={item.name} className={`${styles.item} ${item.image ? "" : styles.noImage}`}>
                  {item.image && (
                    <div className={`${styles.thumb} ${s.id === 'cocktails' || s.id === 'old_fashioned' ? styles.drinks : ''} `}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 768px) 180px, 110px"
                      />
                    </div>
                  )}
                  <div className={styles.text}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.desc}>{item.description}</p>
                    {item.options && <p className={styles.option}>{item.options}</p>}
                  </div>
                  <span className={styles.price}>{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p>
          *Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of food borne illness, especially if you have certain medical conditions.
        </p>
        <p>* Gratuity of 20% will be added to all parties of 6 or more
        </p>
      </div>
    </div>
  );
}
