import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Happy Hour",
  description: "Happy hour Monday–Friday, 3–6 PM at The Brick Kitchen + Lounge.",
};

const specials = [
  {
    title: "Drink Specials",
    items: [
      ["$4", "Bottles", "Corona, Heineken, Coors Light, White Claw"],
      ["$8", "Wines", "House Cabernet, House Chardonnay"],
      ["$9", "Wells", "Vodka, Tequila, Gin, Whiskey, Rum"],
      ["$11", "Sake Bottles", "Sho Chiku Bai Ginjo Sake, Mio Sparkling Sake"],
      ["$3", "off all signature cocktails"],
      ["$10", "bottle of beer or seltzer + a shot of well"],

    ],
  },
  {
    title: "Food Specials",
    items: [
      ["$12", "Garlic Chicken Baos (2per order)", "steamed baos stuffed with Tai garlic glazed fried chicken, Sriracha Aioli, cucumber, fried garlic, pickled red onion, and crispy Thai basil"],
      ["$12", "Wings (6pcs)", "wings tossed in choice of honey sriracha, gochujang, garlic parmesan, mango habanero, buffalo, or fish sauce"],
      ["$7", "Crab Rangoon Tacos (2  per order)", "corn tortillas filled with cream cheese, mozzeralla, snow crab, imitation crab, garlic and chives, fried to golen crisp & drizzled w/ creamy sweet chili sauce"],
      ["$15", "Shrimp Tacos (2 per order)", "grilled shrimp, cabbage slaw, cilantro lime crema, grilled pineapple, pico de gallo, flour tortillas, lime wedge"],
      ["$13", "Bulgogi Tacos (2 per order)", "bulgogi beef, cabbage slaw, cilantro lime crema, pico de gallo, flour tortillas, lime wedge"],
      ["$10", "Grilled Miso Caesar Salad", "grilled whole romaine hearts, house made Miso Caesar dressing, crispy garlic, crumbled crutons, parmesan cheese and lemon"],
      ["$10", "Brussels Sprouts", "fried brussels sprouts tossed in honey Sriracha glaze and fried onions"],
      ["$6", "Furikake Fries", "skinny fries tossed in a buttery garlic sauce, topped with fresh parmesan and furikake"],
    ],
  },
];

export default function HappyHourPage() {
  return (
    <>
      <PageHero
        variant="ambient"
        eyebrow={["Good Drinks", "Good Food", "Good Times"]}
        title="Happy Hour"
        subtitle="Great food, cold drinks, and good company. Because happy hour is always a good idea."
        image="/images/brick_happyhour.jpg"
        mobileImage="/images/DrinksSpread.jpg"
      />

      <section className={`container ${styles.layout}`}>
        <div className={styles.photos}>
          <div className={styles.photo}>
            <Image src="/images/HH_Drinks.jpg" alt="Happy Hour beers" fill sizes="40vw" />
          </div>
          <div className={styles.photo}>
            <Image src="/images/HHFood.jpg" alt="Happy Hour Spread" fill sizes="40vw" />
          </div>
        </div>

        <div className={styles.details}>
          <p className={styles.when}>
            Monday – Friday
            <br />
            3:00 PM – 6:00 PM
          </p>

          {specials.map((group) => (
            <div key={group.title} className={styles.group}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              <ul className={styles.list}>
                {group.items.map(([price, name, type]) => (
                  <li key={name} className={styles.item}>
                    <span className={styles.price}>{price}</span>
                    <span><span className={styles.hh_name}>{name}</span> <br />
                      {type}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className={styles.signoff}>See you at The Brick!</p>
        </div>
      </section>
    </>
  );
}
