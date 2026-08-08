import { ImageResponse } from "next/og";

export const alt = "낯선 도시의 가장 빛나는 순간, Cagayan De Oro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#416f45",
        color: "#fffdf2",
        padding: "58px 68px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "#f4cf45",
          right: 55,
          top: 52,
          border: "1px solid rgba(18,55,42,.25)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", zIndex: 2, width: 810 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 18, fontWeight: 700, letterSpacing: 3 }}>
          <span style={{ width: 38, height: 2, background: "#fffdf2" }} />
          CAGAYAN DE ORO · PHILIPPINES
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 58, fontSize: 82, lineHeight: .98, fontWeight: 800, letterSpacing: -5 }}>
          <span>낯선 도시의</span>
          <span>가장 빛나는 순간.</span>
        </div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 24, lineHeight: 1.55, fontWeight: 500 }}>
          산과 강, 바다 모든 곳이 어우러진<br />힐링과 모험의 숨은 여행지
        </div>
        <div style={{ display: "flex", marginTop: "auto", fontSize: 15, fontWeight: 800, letterSpacing: 2 }}>
          CAGAYAN DE ORO · FAM TOUR 2026
        </div>
      </div>
    </div>,
    size,
  );
}
