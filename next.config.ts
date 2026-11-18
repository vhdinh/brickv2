import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old Squarespace URLs -> new pages, so existing Google results and links keep working
  // (permanent redirects pass the old pages' ranking to the new ones).
  async redirects() {
    return [
      { source: "/drink", destination: "/drinks", permanent: true },
      { source: "/happyhour", destination: "/happy-hour", permanent: true },
      { source: "/eat", destination: "/food", permanent: true },
      { source: "/visit", destination: "/#visit", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
