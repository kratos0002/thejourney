import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Language Families — The Great Language Trees | The Journey";
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
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, #0f1a2e 0%, #0a0a14 70%)",
          position: "relative",
        }}
      >
        {/* Decorative tree branches */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Central trunk */}
          <line
            x1="600"
            y1="520"
            x2="600"
            y2="320"
            stroke="rgba(212, 165, 116, 0.2)"
            strokeWidth="3"
          />
          {/* Branches spreading out */}
          <line
            x1="600"
            y1="320"
            x2="300"
            y2="200"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2"
          />
          <line
            x1="600"
            y1="320"
            x2="500"
            y2="180"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2"
          />
          <line
            x1="600"
            y1="320"
            x2="700"
            y2="180"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2"
          />
          <line
            x1="600"
            y1="320"
            x2="900"
            y2="200"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2"
          />
          {/* Branch tip dots */}
          <circle cx="300" cy="200" r="6" fill="rgba(212, 165, 116, 0.4)" />
          <circle cx="500" cy="180" r="6" fill="rgba(212, 165, 116, 0.4)" />
          <circle cx="700" cy="180" r="6" fill="rgba(212, 165, 116, 0.4)" />
          <circle cx="900" cy="200" r="6" fill="rgba(212, 165, 116, 0.4)" />
          {/* Root glow */}
          <circle cx="600" cy="520" r="10" fill="rgba(212, 165, 116, 0.5)" />
          <circle
            cx="600"
            cy="520"
            r="24"
            fill="none"
            stroke="rgba(212, 165, 116, 0.12)"
            strokeWidth="2"
          />
        </svg>

        {/* Label */}
        <div
          style={{
            fontSize: "15px",
            color: "rgba(168, 164, 160, 0.5)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            display: "flex",
            marginBottom: "16px",
          }}
        >
          Language Families
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            color: "rgba(240, 237, 230, 0.9)",
            fontFamily: "serif",
            fontWeight: 300,
            display: "flex",
            marginBottom: "16px",
          }}
        >
          The Great Language Trees
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(212, 165, 116, 0.6)",
            fontFamily: "serif",
            fontStyle: "italic",
            display: "flex",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Explore how the world&apos;s languages are connected
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
