import type { Section } from "./types";

let imagePath = "/images/"
// Items marked "placeholder" are stand-ins until the real menu is dropped in.
export const foodMenu: Section[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        name: "Thai Chicken Lettuce Wrap",
        description: "seasoned & minced chicken breast sautéed with bell pepper, mushroom, and Thai basil, topped with crushed peanuts, green onions, and served with radish, cucumber, butter lettuce, and peanut sauce. Fresh tofu available for substitution",
        price: "$17",
        image: "/images/ThaiChickenLettuceWrap.jpg",
      },
      {
        name: "Garlic Chicken Baos (2 per order)",
        description: "steamed baos with Thai garlic glazed fried chicken, sriracha aioli, cucumber, fried garlic, pickled red onion, and crispy thai basil",
        price: "$15",
        image: "/images/GarlicChickenBaos.jpg",
      },
      {
        name: "Fried Chicken Tenders",
        description: "tossed in choice of honey sriracha, gochujang, garlic parm furikake, mango habanero, buffalo or fish sauce, served with shoestring fries",
        price: "$15",
        image: "/images/tenders.jpg",
      },
      {
        name: "Brick Wings (6 pieces)",
        description: "wings tossed in your choice of honey sriracha, gochujang, garlic parm furikake, mango habanero, buffalo, or fish sauce",
        price: "$15",
        image: "/images/wings.jpg",
      },
      {
        name: "Bulgogi Loaded Tots",
        description: "marinated beef over crispy tater tots, topped with gochujang aioli, cilantro lime crema, green onions, pickled jalapeños, toasted sesame seeds and pico de gallo",
        price: "$16",
        image: "/images/bulgogiTots.jpg",
      },
      {
        name: "Honey Sriracha Brussels Sprouts",
        description: "fried brussels sprouts tossed in a honey sriracha glaze topped with fried onions & lemon wedge",
        price: "$15",
        image: "/images/BrusselsSprouts.jpg",
      },
      {
        name: "Fried Calamari",
        description: "calamari tubes and tentacles battered and fried, served with sriracha aioli",
        price: "$15",
        image: "/images/calamari.jpg",
      },
      {
        name: "Crab Rangoon Tacos (3 per order)",
        description: "corn tortillas filled with cream cheese, mozzarella, snow crab, imitation crab, garlic and chives, fried to golden crisp & drizzled w/ creamy sweet chili sauce",
        price: "$12",
        image: "/images/CrabRangoonTacos.jpg",
      },
      {
        name: "Furikake Fries",
        description: "shoestring fries tossed in a buttery garlic sauce, topped with fresh parmesan and furikake",
        price: "$8",
        image: "/images/FurikakeFries.jpg",
      },
      {
        name: "Shoestring Fries",
        description: "served with choice of dipping sauce",
        price: "$6",
        image: "/images/Fries.jpg",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Honey Soy Salmon Salad",
        description: "grilled salmon glazed in house honey soy, mixed greens, edamame, radish, avocado, tomatoes, & pickled onions served with a miso marinaded salmon, tossed in house soy ginger vinaigrette",
        price: "$22",
        // image: "/images/calamari.jpg",
      },
      {
        name: "Grilled Miso Caesar Salad",
        description: "grilled whole romaine hearts, house made Miso Caesar dressing, crispy garlic, crumbled croutons, parmesan cheese and lemon. Choice of grilled chicken or fried tofu",
        price: "$17",
        options: "upgrade to salmon $8; steak $7; prawns $6",
        image: "/images/GrilledMisoCaesarSalad.jpg",
      },
      {
        name: "Peanut Noodle Salad",
        description: "rice noodles, mixed greens, red onions, cherry tomatoes, cucumber, Thai basil and cilantro, tossed in zesty peanut butter dressing, and topped with crushed peanuts, fried shallots, crispy rice noodles. Choice of grilled chicken or fried tofu",
        price: "$18",
        options: "upgrade to salmon $8; steak $7; prawns $6",
        image: "/images/PeanutNoodleSalad.jpg",
      },
      {
        name: "Crispy Chicken Slaw",
        description: "cabbage, carrots, mandarin oranges, red onion, tomato, cilantro, sliced almonds, fried onions, fried chicken, tossed in an Asian sweet and savory dressing",
        price: "$17",
        // image: "/images/calamari.jpg",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    description: "Add fries $3; Add side salad $4; Add patty $3; Sub Beyond patty $2",
    items: [
      {
        name: "Super Smash Burger",
        description: "smashed beef patty, pickles, lettuce, caramelized onions, brick sauce, american cheese, brioche bun",
        price: "$13",
        image: "/images/BurgerSmash.jpg",
      },
      {
        name: "Hawaiian Smash Burger",
        description: "smashed beef patty, teriyaki glaze, provolone cheese, grilled pineapple, lettuce, tomato, red onion, mayo, brioche bun",
        price: "$13",
        image: "/images/BurgerHawaiian.jpg",
      },
      {
        name: "Bulgogi Smash Burger",
        description: "seasoned beef patty topped with bulgogi marinated beef, provolone cheese, Korean pickled radish, lettuce, green onion, sesame, coleslaw, gochujang aioli, brioche bun",
        price: "$15",
      },
      {
        name: "Thai Sausage Burger",
        description: "¼oz Thai beef sausage burger, namprik mayo, cucumber, lettuce, red onions, cilantro, and house peanut sauce",
        price: "$15",
      },
    ],
  },

  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      {
        name: "Honey Soy Salmon Sandwich**",
        description: "grilled salmon fillet, sriracha aioli, cabbage, carrots & green onion slaw, avocado, brioche bun, served with waffle fries",
        price: "$20",
      },
      {
        name: "Shrimp Po'Boy",
        description: "battered fried shrimp, bang bang sauce, arugula, tomato, French bagette or hoagie rolls, served with shoestring fries",
        price: "$19",
        image: "/images/ShrimpPoBoy.jpg",
      },
      {
        name: "Bulgogi Cheesesteak",
        description: "marinated beef, melted cheese, bell peppers, mushrooms, gochujang aioli, green onions, toasted sesame seeds, hoagie, served with shoestring fries",
        price: "$19",
        image: "/images/BulgogiCheesesteak.jpg",
      },
      {
        name: "Fried Chicken Sandwich",
        description: "hand breaded, marinaded chicken thigh, cabbage, carrot & green onion slaw, sriracha aioli, pickles, brioche bun, and waffle fries",
        price: "$19",
        image: "/images/ChickenSandwich.jpg",
      },
      {
        name: "Lemongrass Tofu Sandwich",
        description: "fried tofu marinaded in lemongrass and coconut milk, peanut sauce, lettuce, tomato, red onion, avocado, chimichurri, on a vegan brioche bun served with waffle fries",
        price: "$18",
      },
      {
        name: "Chicken Miso Caesar Wrap",
        description: "romaine, spring lettuce mix, pickled onion, crouton crumbles, and fried garlic tossed in miso cesar dressing with your choice of fried or grilled chicken, wrapped in a spinach tortilla, served with shoestring fries",
        price: "$18",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrees",
    items: [
      {
        name: "Crispy Fish Tacos",
        description: "Vietnamese beer battered fish, fish sauce dressing, mango pico de gallo, cabbage, pickled red onions sweet & tangy sauce cilantro, lime wedge (2 tacos per order)",
        price: "$18",
        image: "/images/CrispyFishTacos.jpg",
      },
      {
        name: "Crispy Garlic Chicken Bowl",
        description: "double fried chicken glazed in Thai crispy garlic sauce, Jasmine rice, sriracha aioli, cucumber, radish, edamame, fried garlic, pickled onions, fried Thai basil, lime wedge",
        price: "$18",
        image: "/images/CrispyGarlicChickenBowl.jpg",
      },
      {
        name: "Garlic Noodles",
        description: "spaghetti noodles sauteed in garlic sauce with bunashimeji mushrooms, topped with fried garlic, green onions and parmesan cheese. Choice of grilled chicken or fried tofu",
        price: "$16",
        options: "upgrade to salmon $8; steak $7; prawns $6",
        image: "/images/GarlicNoodles.jpg",
      },
      {
        name: "Lomo Saltado",
        description: "sautéed cubed steak with bell peppers, tomatoes, onions, fries, served over furikake rice, chef’s special chimichurri and sunny side up egg",
        price: "$21",
        image: "/images/LomoSaltado.jpg",
      },
      {
        name: "Grilled Salmon Panang Curry**",
        description: "grilled salmon served with panang curry over rice topped w/fried garlic and sautéed vegetables",
        price: "$22",
        image: "/images/GrilledSalmonPanangCurry.jpg",
      },
      {
        name: "Creamy Udon",
        description: "udon noodles in creamy cheese sauce with bunashimeji mushrooms, topped with furikake and sunny side up egg. Choice of grilled chicken or fried tofu",
        price: "$18",
        options: "upgrade to salmon $8; steak $7; prawns $6",
        image: "/images/CreamyUdon.jpg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Cheesecake cloud",
        description: "Classic cheesecake on a graham cracker crust, passion fruit curd, chocolate cookie crumbles, and fresh fruit",
        price: "$15",
        image: "/images/CheesecakeCloud.jpg",
      },
      {
        name: "Tiramisu",
        description: "Chiffon soaked in espresso syrup with mascarpone mousse dusted with cocoa powder",
        price: "$15",
        image: "/images/Tiramisu.jpg",
      },
      {
        name: "Coconut affogato",
        description: "Coconut ice cream with real shredded coconut, condensed milk, Vietnamese espresso",
        price: "$15",
        image: "/images/CoconutAffogato.jpg"
      },
      {
        name: "Mango Mochi Cake",
        description: "A soft, chewy mochi cake infused with ripe mango, offering a lightly sweet, tropical flavor and a satisfyingly bouncy texture",
        price: "$15",
      },
    ],
  },
];
