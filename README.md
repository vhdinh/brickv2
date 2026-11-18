# The Brick Kitchen + Lounge — Next.js site

Responsive (mobile + desktop) rebuild of thebrickrenton.com, based on the redesign mockups.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Routes

| Route         | Page        |
| ------------- | ----------- |
| `/`           | Home        |
| `/food`       | Food menu (Starters / Mains / Salads / Desserts) |
| `/drinks`     | Drinks (Cocktails / Wine / Beer) |
| `/happy-hour` | Happy Hour  |

## Where to edit things

- `src/data/site.ts` — address, phone, hours, **Order Online URL**, Instagram/Facebook/Yelp links, nav
- `src/data/food.ts` — food menu (items without `image` render as text-only rows)
- `src/data/drinks.ts` — drinks menu
- `src/app/happy-hour/page.tsx` — happy hour specials
- `src/app/globals.css` — brand colors and fonts (Brick #A65E43, Warm Brown #4B3A2E, Cream #F6F1E9, Sand #E9DED0, Charcoal #282828; Playfair Display / Montserrat / Allura)

## Images

Everything in `public/images/` is cropped from the design mockups as a placeholder.
They're low resolution — swap in real photography using the same file names
(roughly 1600px wide for heroes, 800px for menu thumbnails).

Items marked `// placeholder` in the data files (some mains, salads, desserts, wine, beer)
aren't on the mockups and should be replaced with the real menu.

## Structure

```
src/
  app/            layout, pages (/, /food, /drinks, /happy-hour)
  components/     Header (sticky nav + mobile drawer), Footer, PageHero,
                  MenuList (sticky category tabs + scroll-spy), ContactDetails, Logo, icons
  data/           site info + menu content
```
