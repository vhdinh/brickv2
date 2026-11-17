import type { Metadata, Viewport } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/allura/400.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Renton, WA`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "A neighborhood kitchen and lounge in Renton, WA serving comforting food, thoughtfully crafted cocktails, and good company.",
};

export const viewport: Viewport = {
  themeColor: "#241a15",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
