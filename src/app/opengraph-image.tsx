import { ImageResponse } from "next/og";

export const alt = "Softilect, software development company for web, mobile, AI and Web3";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #f7fafb 0%, #e6f2ee 100%)",
          color: "#0d151c",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em" }}>
          Softilect
          <div style={{ width: 14, height: 14, background: "#2ec4a0", transform: "rotate(45deg)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 30, color: "#1f8a70", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Software development company</div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>Code with a pulse.</div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#1f8a70" }}>Products with a premiere.</div>
        </div>
        <div style={{ fontSize: 28, color: "#3b4754" }}>Web · Mobile · AI · Web3 · UX/UI · SaaS · Ecommerce</div>
      </div>
    ),
    size,
  );
}
