import { site } from "@/lib/site";

// Shared design for the Open Graph and Twitter preview images.
// Rendered with next/og ImageResponse, which supports a subset of CSS:
// every element that has more than one child needs display: flex.
export function ShareCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px",
        background: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
        Prime
        <span style={{ color: "#99f6e4" }}>Bridge</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Medical Billing &amp; Credentialing
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#ccfbf1" }}>{site.tagline}</div>
      </div>

      <div style={{ display: "flex", fontSize: 26, color: "#ccfbf1" }}>{new URL(site.url).host}</div>
    </div>
  );
}
