/**
 * Site-wide announcement bar, shown above the header on every page.
 *
 * - Only ONE announcement shows at a time: the first one in this list that is
 *   inside its date window and hasn't been closed by the visitor.
 * - Put time-limited ones (events, closures) ABOVE the always-on happy hour bar
 *   so they take over while they're active, then it comes back automatically.
 * - Visitors who close a bar won't see it again on that device. To show a changed
 *   announcement to everyone again, give it a new `id`.
 * - Dates are ISO strings with the Pacific offset: -08:00 in winter, -07:00 in summer.
 */
/** localStorage key holding the ids a visitor has closed. */
export const DISMISSED_KEY = "brick:dismissed-announcements";

export type Announcement = {
  /** Unique key; also what's remembered when a visitor closes it. */
  id: string;
  /** primary = brick red, event = dark brown, notice = light sand */
  variant: "primary" | "event" | "notice";
  icon: "megaphone" | "calendar" | "info";
  /** Bold lead-in, e.g. "Happy Hour:" */
  title: string;
  /** Main message. Shown on every screen size (truncated on phones if long). */
  text: string;
  /** Extra info after a divider. Desktop / tablet only. */
  details?: string;
  /**
   * Optional link.
   *  - "button": outlined button on the right (event style)
   *  - "inline": underlined text after the message (notice style)
   *  - "bar":    no visible label; the whole bar is clickable (label is read by screen readers)
   * On phones every style becomes "bar", so the whole strip is tappable.
   */
  link?: { label: string; href: string; style?: "button" | "inline" | "bar" };
  /** Show from this moment (inclusive). Omit to show immediately. */
  startsAt?: string;
  /** Stop showing at this moment. Omit to show indefinitely. */
  endsAt?: string;
};

export const announcements: Announcement[] = [
  // ── Examples for the other two styles. Uncomment, edit, and set dates. ──
  //
  // {
  //   id: "live-music-2026-11-20",
  //   variant: "event",
  //   icon: "calendar",
  //   title: "Live Music This Friday!",
  //   text: "Join us at 7 PM for local favorites.",
  //   link: { label: "Learn More", href: "https://www.instagram.com/thebrickrenton", style: "button" },
  //   startsAt: "2026-11-16T00:00:00-08:00",
  //   endsAt: "2026-11-21T00:00:00-08:00",
  // },
  // {
  //   id: "thanksgiving-2026",
  //   variant: "notice",
  //   icon: "info",
  //   title: "Holiday Hours:",
  //   text: "We will be closed on Thanksgiving (Nov 26).",
  //   link: { label: "See our updated hours.", href: "/#visit", style: "inline" },
  //   startsAt: "2026-11-19T00:00:00-08:00",
  //   endsAt: "2026-11-27T00:00:00-08:00",
  // },
  // {
  //   id: "happy-hour",
  //   variant: "primary",
  //   icon: "megaphone",
  //   title: "Happy Hour:",
  //   text: "Mon – Fri, 3 PM – 6 PM",
  //   details: "$4 Bottles • $8 House Wines • $9 Wells • $3 Off Signature Cocktails",
  //   link: { label: "See happy hour specials", href: "/happy-hour", style: "bar" },
  // },
];
