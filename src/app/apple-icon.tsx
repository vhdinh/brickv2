import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

/** Home-screen icon (iOS) and the logo referenced in structured data. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const playfairBold = await readFile(
    path.join(process.cwd(), "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff")
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#241a15",
          color: "#fff",
          fontFamily: "Playfair",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 1 }}>THE</div>
        <div style={{ fontSize: 50, marginTop: 2 }}>BRICK</div>
        <div style={{ width: 70, height: 3, background: "#a65e43", marginTop: 12 }} />
      </div>
    ),
    { ...size, fonts: [{ name: "Playfair", data: playfairBold, weight: 700, style: "normal" }] }
  );
}
