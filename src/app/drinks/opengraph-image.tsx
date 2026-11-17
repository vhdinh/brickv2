import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Signature cocktails at The Brick Kitchen + Lounge in Renton, WA";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Signature Cocktails",
    kicker: "Cocktails · Soju · Wine · Beer",
    image: "/images/DrinksSpread.jpg",
  });
}
