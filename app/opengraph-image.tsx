import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Journey — Where Every Word Began";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#0a0a14",
          backgroundImage: "radial-gradient(ellipse at 50% 40%, #0f1a2e 0%, #0a0a14 70%)",
          position: "relative",
        }}
      >
        {/* Decorative journey path */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M 200 420 Q 400 320 600 300 Q 800 280 1000 200"
            fill="none"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2.5"
            strokeDasharray="8,12"
          />
          <circle cx="200" cy="420" r="10" fill="rgba(212, 165, 116, 0.5)" />
          <circle cx="200" cy="420" r="22" fill="none" stroke="rgba(212, 165, 116, 0.12)" strokeWidth="2" />
          <circle cx="450" cy="350" r="6" fill="rgba(212, 165, 116, 0.25)" />
          <circle cx="600" cy="300" r="7" fill="rgba(212, 165, 116, 0.3)" />
          <circle cx="780" cy="260" r="6" fill="rgba(212, 165, 116, 0.25)" />
          <circle cx="1000" cy="200" r="10" fill="rgba(212, 165, 116, 0.5)" />
          <circle cx="1000" cy="200" r="22" fill="none" stroke="rgba(212, 165, 116, 0.12)" strokeWidth="2" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            color: "rgba(240, 237, 230, 0.9)",
            fontFamily: "serif",
            fontWeight: 300,
            display: "flex",
            marginBottom: "16px",
          }}
        >
          The Journey
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(212, 165, 116, 0.7)",
            fontFamily: "serif",
            fontStyle: "italic",
            display: "flex",
            marginBottom: "40px",
          }}
        >
          Where every word began
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(168, 164, 160, 0.5)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: 1.6,
            display: "flex",
          }}
        >
          An immersive exploration of words and their etymological journeys across languages, cultures, and centuries.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "35px",
            fontSize: "15px",
            color: "rgba(107, 104, 102, 0.5)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          etymology.life
        </div>
      </div>
    ),
    { ...size }
  );
}
