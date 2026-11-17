import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import { drinkMenu } from "@/data/drinks";

export const metadata: Metadata = {
  title: "Drink",
  description: "Crafted cocktails, wine and beer at The Brick Kitchen + Lounge.",
};

export default function DrinksPage() {
  return (
    <>
      <PageHero
        eyebrow={["Crafted Cocktails", "Fine Spirits"]}
        title="Drink"
        subtitle="Thoughtfully crafted. Always refreshing."
        italicSubtitle
        image="/images/DrinksSpread.jpg"
      />
      <MenuList sections={drinkMenu} />
    </>
  );
}
