import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Happy hour food and drink specials at The Brick Kitchen + Lounge in Renton, WA";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Happy Hour",
    kicker: "Monday – Friday · 3 – 6 PM",
    image: "/images/brick_happyhour.jpg",
  });
}
