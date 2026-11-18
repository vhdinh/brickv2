import { announcements, DISMISSED_KEY, type Announcement } from "@/data/announcements";
import { CalendarIcon, InfoIcon, MegaphoneIcon } from "./icons";
import AnnouncementClose from "./AnnouncementClose";
import styles from "./AnnouncementBar.module.css";

const icons = { megaphone: MegaphoneIcon, calendar: CalendarIcon, info: InfoIcon };

const inWindow = (a: Announcement, now: number) =>
  (!a.startsAt || now >= Date.parse(a.startsAt)) && (!a.endsAt || now < Date.parse(a.endsAt));

/**
 * Pages are pre-rendered at build time, so this tiny script re-checks in the visitor's
 * browser, before anything paints: it hides announcements that were closed on this
 * device or are outside their date window, and shows only the first one left.
 */
const pickScript = `(function(){var d=[];try{d=JSON.parse(localStorage.getItem(${JSON.stringify(
  DISMISSED_KEY
)})||"[]")}catch(e){}var n=Date.now(),f=0;document.querySelectorAll("[data-announcement]").forEach(function(el){var s=el.getAttribute("data-start"),e=el.getAttribute("data-end"),ok=!f&&d.indexOf(el.getAttribute("data-id"))<0&&(!s||n>=Date.parse(s))&&(!e||n<Date.parse(e));el.hidden=!ok;if(ok)f=1})})();`;

export default function AnnouncementBar() {
  if (announcements.length === 0) return null;

  // Build-time pick, used if JavaScript is off; the script above refines it per visitor.
  const firstActive = announcements.find((a) => inWindow(a, Date.now()))?.id;

  return (
    <>
      {announcements.map((a) => {
        const Icon = icons[a.icon];
        const linkStyle = a.link?.style ?? "inline";
        return (
          <aside
            key={a.id}
            className={`${styles.bar} ${styles[a.variant]}`}
            aria-label="Announcement"
            data-announcement=""
            data-id={a.id}
            data-start={a.startsAt}
            data-end={a.endsAt}
            hidden={a.id !== firstActive}
            suppressHydrationWarning
          >
            <div className={`container ${styles.inner}`}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.divider} aria-hidden />

              <p className={styles.message}>
                <strong>{a.title}</strong> {a.text}
                {a.details && (
                  <>
                    <span className={styles.sep} aria-hidden>
                      |
                    </span>
                    <span className={styles.details}>{a.details}</span>
                  </>
                )}
                {a.link && linkStyle === "inline" && (
                  <>
                    {" "}
                    <a href={a.link.href} className={`${styles.link} ${styles.inlineLink}`}>
                      <span className={styles.linkLabel}>{a.link.label}</span>
                    </a>
                  </>
                )}
              </p>

              {a.link && linkStyle === "button" && (
                <a href={a.link.href} className={`${styles.link} ${styles.button}`}>
                  <span className={styles.linkLabel}>{a.link.label}</span>
                </a>
              )}
              {a.link && linkStyle === "bar" && (
                <a href={a.link.href} className={`${styles.link} ${styles.barLink}`}>
                  <span className="sr-only">{a.link.label}</span>
                </a>
              )}

              <AnnouncementClose id={a.id} />
            </div>
          </aside>
        );
      })}
      <script dangerouslySetInnerHTML={{ __html: pickScript }} />
    </>
  );
}
