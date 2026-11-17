export const site = {
  name: "The Brick Kitchen + Lounge",
  shortName: "The Brick",
  tagline: "Good food. Great drinks. Better together.",
  address: {
    line1: "1190 NE Sunset Blvd Ste. E",
    line2: "Renton, WA 98056",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1190+NE+Sunset+Blvd+Ste+E+Renton+WA+98056",
  },
  phone: { display: "425.264.5220", href: "tel:+14252645220" },
  hours: [
    { days: "Mon – Thu", time: "12:00 PM – 9:00 PM" },
    { days: "Fri – Sat", time: "12:00 PM – 10:00 PM" },
    { days: "Sun", time: "12:00 PM – 9:00 PM" },
  ],
  // TODO: replace with the real online-ordering and social URLs
  giftCardUrl: "https://order.toasttab.com/egiftcards/the-brick-kitchen-lounge-1190-sunset-blvd-ne",
  orderUrl: "https://order.toasttab.com/online/the-brick-kitchen-lounge-1190-sunset-blvd-ne",
  instagram: "https://www.instagram.com/thebrickrenton",
  facebook: "https://www.facebook.com/thebrickrenton/",
  yelp: "https://www.yelp.com/biz/the-brick-kitchen-lounge-renton-2"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/drinks", label: "Drink" },
  { href: "/happy-hour", label: "Happy Hour" },
];
