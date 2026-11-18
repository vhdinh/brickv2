import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Asian fusion dishes from the menu at The Brick Kitchen + Lounge in Renton, WA";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Our Menu",
    kicker: "Asian Fusion Comfort Food",
    image: "/images/brick_food.jpg",
  });
}
