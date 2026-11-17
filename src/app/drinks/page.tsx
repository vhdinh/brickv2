import PageHero from "@/components/PageHero";
import MenuList from "@/components/MenuList";
import { drinkMenu } from "@/data/drinks";
import { JsonLd, breadcrumbJsonLd, menuJsonLd, pageMetadata } from "@/lib/seo";

const description =
  "Signature cocktails in Renton, WA: pho-spiced Moscow mule, Vietnamese coffee old fashioned, milk-washed rum and more, plus soju, wine and beer at The Brick Kitchen + Lounge.";

export const metadata = pageMetadata({
  title: "Cocktails, Soju & Wine in Renton",
  description,
  path: "/drinks",
});

export default function DrinksPage() {
  return (
    <>
      <JsonLd
        data={[
          menuJsonLd({ name: "Drinks Menu", path: "/drinks", description, sections: drinkMenu }),
          breadcrumbJsonLd("Drink", "/drinks"),
        ]}
      />
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
