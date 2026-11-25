import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b1218", borderRadius: 14 }}>
        <div style={{ width: 26, height: 26, border: "4px solid #2ec4a0", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 8, height: 8, background: "#2ec4a0" }} />
        </div>
      </div>
    ),
    size,
  );
}
