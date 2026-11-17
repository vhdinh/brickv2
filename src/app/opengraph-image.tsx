import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "The Brick Kitchen + Lounge, an Asian fusion restaurant and cocktail lounge in Renton, WA";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Asian Fusion Kitchen & Lounge",
    kicker: "Renton Highlands · Food · Cocktails",
    image: "/images/brickHero.jpg",
  });
}
