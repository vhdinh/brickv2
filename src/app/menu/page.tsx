import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import { foodMenu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Starters, mains, salads and desserts at The Brick Kitchen + Lounge.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow={["Fresh Ingredients", "Bold Flavors"]}
        title="Our Menu"
        image="/images/ShrimpPoBoy.jpg"
      />
      <MenuList sections={foodMenu} />
    </>
  );
}
