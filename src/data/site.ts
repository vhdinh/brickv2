export const site = {
  name: "The Brick Kitchen + Lounge",
  shortName: "The Brick",
  tagline: "Good food. Great drinks. Better together.",
  /** Production URL. Override with NEXT_PUBLIC_SITE_URL (e.g. for a preview domain). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thebrickrenton.com").replace(/\/$/, ""),
  description:
    "Asian fusion kitchen and cocktail lounge in the Renton Highlands. Smash burgers, garlic noodles, bao, tacos, signature cocktails, soju and a weekday happy hour.",
  cuisine: ["Asian Fusion", "American", "Cocktail Bar"],
  priceRange: "$$",
  email: "info@thebrickrenton.com",
  address: {
    line1: "1190 NE Sunset Blvd Ste. E",
    line2: "Renton, WA 98056",
    street: "1190 NE Sunset Blvd Ste. E",
    city: "Renton",
    region: "WA",
    postalCode: "98056",
    country: "US",
    neighborhood: "Renton Highlands",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1190+NE+Sunset+Blvd+Ste+E+Renton+WA+98056",
  },
  directions: [
    "Take exit 5 off I-405 and head east for half a mile.",
    "We're 1 mile east of The Landing, up the hill in the Renton Highlands, in the Highlands Center at Sunset Blvd & Edmonds Ave.",
    "Extra parking is available on the street and behind the building.",
  ],
  phone: { display: "425.264.5220", href: "tel:+14252645220", e164: "+14252645220" },
  /** `days`/`time` are displayed; `dayOfWeek`/`opens`/`closes` (24h) feed Google's structured data. */
  hours: [
    {
      days: "Mon – Thu",
      time: "12:00 PM – 9:00 PM",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "21:00",
    },
    {
      days: "Fri – Sat",
      time: "12:00 PM – 10:00 PM",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      days: "Sun",
      time: "12:00 PM – 9:00 PM",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  happyHour: {
    label: "Monday – Friday, 3:00 PM – 6:00 PM",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "15:00",
    closes: "18:00",
  },
  giftCardUrl: "https://order.toasttab.com/egiftcards/the-brick-kitchen-lounge-1190-sunset-blvd-ne",
  orderUrl: "https://order.toasttab.com/online/the-brick-kitchen-lounge-1190-sunset-blvd-ne",
  instagram: "https://www.instagram.com/thebrickrenton",
  facebook: "https://www.facebook.com/thebrickrenton/",
  yelp: "https://www.yelp.com/biz/the-brick-kitchen-lounge-renton-2",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/drinks", label: "Drink" },
  { href: "/happy-hour", label: "Happy Hour" },
];
