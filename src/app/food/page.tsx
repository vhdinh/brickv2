import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import { foodMenu } from "@/data/food";
import { JsonLd, breadcrumbJsonLd, menuJsonLd, pageMetadata } from "@/lib/seo";

const description =
  "The Brick's Asian fusion food menu in the Renton Highlands: smash burgers, garlic noodles, garlic chicken bao, bulgogi cheesesteak, panang curry salmon, crab rangoon tacos, wings and desserts.";

export const metadata = pageMetadata({
  title: "Food Menu in Renton, WA",
  description,
  path: "/food",
});

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={[
          menuJsonLd({ name: "Food Menu", path: "/food", description, sections: foodMenu }),
          breadcrumbJsonLd("Food", "/food"),
        ]}
      />
      <PageHero
        eyebrow={["Fresh Ingredients", "Bold Flavors"]}
        title="Our Menu"
        subtitle="Asian fusion comfort food, made fresh in the Renton Highlands."
        image="/images/FoodIcon.jpg"
      />
      <MenuList sections={foodMenu} />
    </>
  );
}
