import { site } from "@/data/site";
import { ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, YelpIcon } from "./icons";
import styles from "./ContactDetails.module.css";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.social} ${className}`}>
      <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon size={22} />
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <FacebookIcon size={22} />
      </a>
      <a href={site.yelp} target="_blank" rel="noreferrer" aria-label="Yelp">
        <YelpIcon size={21} />
      </a>
    </div>
  );
}

/** Address, hours and phone. `layout="row"` is the horizontal info bar; `"stack"` is vertical. */
export default function ContactDetails({
  layout = "stack",
  showSocial = true,
}: {
  layout?: "row" | "stack";
  showSocial?: boolean;
}) {
  return (
    <div className={`${styles.details} ${styles[layout]}`}>
      <a className={styles.item} href={site.address.mapsUrl} target="_blank" rel="noreferrer">
        <PinIcon />
        <span>
          {site.address.line1}
          <br />
          {site.address.line2}
        </span>
      </a>
      <div className={styles.item}>
        <ClockIcon />
        <dl className={styles.hours}>
          {site.hours.map((h) => (
            <div key={h.days}>
              <dt>{h.days}</dt>
              <dd>{h.time}</dd>
            </div>
          ))}
        </dl>
      </div>
      <a className={styles.item} href={site.phone.href}>
        <PhoneIcon />
        <span>{site.phone.display}</span>
      </a>
      {showSocial && <SocialLinks />}
    </div>
  );
}
