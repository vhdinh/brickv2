import type { Section } from "./types";

// Wine and beer lists are placeholders until the real lists are dropped in.
export const drinkMenu: Section[] = [
  {
    id: "cocktails",
    title: "Cocktails",
    items: [
      {
        name: "YuSoFresh",
        description: "milk washed rum, lime, and mint topped with a housemade brazilian kiwi limeade foam",
        price: "$17",
        image: "/images/YuSoFresh.jpg",
      },
      {
        name: "Everest",
        description: "lemongrass-infused gin, blueberries, amaro nonnino, and lime",
        price: "$16",
        image: "/images/Everest.jpg",
      },
      {
        name: "Zenith (Pho Spice Moscow Mule)",
        description: "pho spiced-infused vodka, basil, lime, ginger beer",
        price: "$16",
        image: "/images/Zenith.jpg",
      },
      {
        name: "Audrey",
        description: "whiskey yuzu sour with egg whites & a hibiscus tea float",
        price: "$16",
        image: "/images/Audrey.jpg",
      },
      {
        name: "Stinging Bee",
        description: "thai hili infused gin, honey, lemon, topped with thai basil air",
        price: "$15",
        image: "/images/StingingBee.jpg",
      },
      {
        name: "1988",
        description: "clarified lime margarity with dragonfruit foam, served with a dried dragonfruit",
        price: "$16",
        image: "/images/1988.jpg",
      },
      {
        name: "Lana's Love Potion",
        description: "vodka, cranberry, lemon, and rose water (contains calpico (light asian dairy drink))",
        price: "$16",
        image: "/images/LanasLovePotion.jpg",
      },
      {
        name: "Hot & Unbothered",
        description: "mezcal, tequila, lime, grapefruit, jalepeno, honey, served with a flaming lime wheel",
        price: "$17",
        image: "/images/HotUnbothered.jpg",
      },
      {
        name: "The Geisha",
        description: "jasmine tea infused vodka, lychee, sake (contains calpico (light asian dairy drink))",
        price: "$16",
        image: "/images/Geisha.jpg",
      },
      {
        name: "Mai Wake Up Call",
        description: "coffee infused vodka, fresh vietnamese coffee, coffee liqueur, topped with torched egg custard foam (contains caffeine & egg)",
        price: "$16",
        image: "/images/MaiWakeUpCall.jpg",
      },
    ],
  },
  {
    id: "old_fashioned",
    title: "Old Fashioned",
    items: [
      {
        name: "Shenron",
        description: "coconut washed bourbon, house made pandan & roasted rice syrup",
        price: "$17",
        image: "/images/Shenron.jpg"
      },
      {
        name: "Into the Forrest",
        description: "smoked rye bourbon, roange & angostura bitters, rosemary",
        price: "$16",
        image: "/images/IntoTheForrest.jpg",
      },
      { name: "Smaug", description: "brown butter washed whiskey & black walnut bitters", price: "$17", image: "/images/Smaug.jpg" },
      { name: "Onyx", description: "vietnamese coffee infused whiskey & chocolate bitters", price: "$16", image: "/images/Onyx.png" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    items: [
      { name: "House Cabernet (Red)", description: "Glass / bottle", price: "$10 / $28" },
      { name: "House Red Blend (Red)", description: "Glass / bottle", price: "$10 / $28" },
      { name: "House Pinot Noir (Red)", description: "Glass / bottle", price: "$11 / $30" },
      { name: "House Chardonnay (White)", description: "Glass / bottle", price: "$10 / $28" },
      { name: "House Pinot Grigio (White)", description: "Glass / bottle", price: "$10 / $28" },
      { name: "House Sauvignon Blanc (White)", description: "Glass / bottle", price: "$11 / $30" },
      { name: "La Bella Prosecco", description: "Glass", price: "$12" },

    ],
  },
  {
    id: "bottle_can",
    title: "Bottles/Cans",
    items: [
      { name: "Modelo", description: "", price: "$4" },
      { name: "Coors Light", description: "", price: "$5" },
      { name: "Corona", description: "", price: "$5" },
      { name: "Heinekin", description: "", price: "$5" },
      { name: "White Claw", description: "Mango, Black Cherry, Peach, Blackberry, Pineapple, Blood Orange", price: "$6" },

    ],
  },
  {
    id: "soju",
    title: "Soju",
    items: [
      {
        name: "Soju By The Bottle",
        description: "Korean alcoholc beverage with a clean taste.",
        options: "Available in: Fresh, Strawberry, Green Grape, Peach, or Grapefruit",
        price: "$16"
      },
      {
        name: "Yogurt Soju",
        description: "Flavored Korean soju cocktail mixture that serves 4 (contains diary)",
        options: "Available in: Strawberry, Green Grape, Lychee, Grapefruit or Peach",
        price: "$22"
      }
    ]
  },
  {
    id: "nonalcoholic",
    title: "Non-Alcoholic",
    items: [
      {
        name: "Soda",
        description: "Coke, Sprite, Diet Coke, Root Beer",
        price: "$5"
      },
      {
        name: "Juice",
        description: "Pineapple, Cranberry, Orange Juice",
        price: "$5"
      },
      {
        name: "Tea",
        description: "Goold Peaks Unsweetened Ice Tea",
        price: "$5"
      },
      {
        name: "Beer",
        description: "Heineken Non Alcoholic",
        price: "$5"
      },
      {
        name: "Coffee",
        description: "Vietnamese Ice Coffee",
        options: "add egg yolk cream for $1**",
        price: "$5"
      },
    ]
  }
];
