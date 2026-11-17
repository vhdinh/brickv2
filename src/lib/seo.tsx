import type { Metadata } from "next";
import { site } from "@/data/site";
import type { Section } from "@/data/types";

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/**
 * Per-page metadata with a canonical URL and matching Open Graph / Twitter tags.
 * The share image itself comes from the route's opengraph-image.tsx file.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/* ---------------- Structured data (JSON-LD) ---------------- */

const RESTAURANT_ID = `${site.url}/#restaurant`;
const WEBSITE_ID = `${site.url}/#website`;

/** Restaurant + WebSite, rendered once on every page from the root layout. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: site.url,
        name: site.name,
        alternateName: [site.shortName, "The Brick Renton", "the BRICK Kitchen + Lounge"],
        inLanguage: "en-US",
        publisher: { "@id": RESTAURANT_ID },
      },
      {
        "@type": "Restaurant",
        "@id": RESTAURANT_ID,
        name: site.name,
        alternateName: site.shortName,
        description: site.description,
        url: site.url,
        image: [absoluteUrl("/opengraph-image"), absoluteUrl("/images/brickHero.jpg")],
        logo: absoluteUrl("/apple-icon"),
        telephone: site.phone.e164,
        email: site.email,
        priceRange: site.priceRange,
        servesCuisine: site.cuisine,
        currenciesAccepted: "USD",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        areaServed: [
          { "@type": "Place", name: site.address.neighborhood },
          { "@type": "City", name: "Renton, WA" },
        ],
        hasMap: site.address.mapsUrl,
        openingHoursSpecification: site.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.dayOfWeek,
          opens: h.opens,
          closes: h.closes,
        })),
        hasMenu: [absoluteUrl("/menu"), absoluteUrl("/drinks"), absoluteUrl("/happy-hour")],
        sameAs: [site.instagram, site.facebook, site.yelp],
        potentialAction: {
          "@type": "OrderAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: site.orderUrl,
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
    ],
  };
}

/** "$17" -> "17", "$10 / $28" -> "10" (glass price). Returns undefined if no number. */
const parsePrice = (price?: string) => price?.match(/\d+(?:\.\d{1,2})?/)?.[0];
const cleanName = (name: string) => name.replace(/\*+/g, "").trim();

type MenuJsonLdInput = {
  name: string;
  path: string;
  description?: string;
  sections: Pick<Section, "title" | "items">[];
};

/** schema.org Menu built straight from the same data the page renders. */
export function menuJsonLd({ name, path, description, sections }: MenuJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${absoluteUrl(path)}#menu`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-US",
    provider: { "@id": RESTAURANT_ID },
    hasMenuSection: sections.map((s) => ({
      "@type": "MenuSection",
      name: s.title,
      hasMenuItem: s.items.map((item) => {
        const price = parsePrice(item.price);
        return {
          "@type": "MenuItem",
          name: cleanName(item.name),
          ...(item.description ? { description: item.description } : {}),
          ...(item.image ? { image: absoluteUrl(item.image) } : {}),
          ...(price
            ? { offers: { "@type": "Offer", price, priceCurrency: "USD" } }
            : {}),
        };
      }),
    })),
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}

/** Renders one or more JSON-LD objects. `<` is escaped so data can never close the tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
