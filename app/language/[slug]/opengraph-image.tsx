import { ImageResponse } from "next/og";
import { getLanguageBySlug } from "@/data/languages";

export const runtime = "edge";
export const alt = "Language History — The Journey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const language = getLanguageBySlug(slug);

  if (!language) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a14",
            color: "#f0ede6",
            fontSize: 48,
            fontFamily: "serif",
          }}
        >
          The Journey
        </div>
      ),
      { ...size }
    );
  }

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
            "radial-gradient(ellipse at 50% 50%, #0f1a2e 0%, #0a0a14 70%)",
          position: "relative",
        }}
      >
        {/* Decorative timeline */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Horizontal timeline */}
          <line
            x1="150"
            y1="480"
            x2="1050"
            y2="480"
            stroke="rgba(212, 165, 116, 0.15)"
            strokeWidth="2"
            strokeDasharray="8,12"
          />
          {/* Phase dots along the timeline */}
          {language.phases.slice(0, 6).map((_, i) => {
            const x = 200 + (i * 750) / Math.max(language.phases.length - 1, 1);
            return (
              <circle
                key={i}
                cx={x}
                cy={480}
                r={i === 0 ? 7 : i === language.phases.length - 1 ? 7 : 4}
                fill={`rgba(212, 165, 116, ${i === 0 ? 0.6 : 0.3})`}
              />
            );
          })}
          {/* Glow on first dot */}
          <circle
            cx="200"
            cy="480"
            r="18"
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
            marginBottom: "12px",
          }}
        >
          Language History
        </div>

        {/* Script */}
        <div
          style={{
            fontSize: "72px",
            color: "rgba(240, 237, 230, 0.85)",
            fontFamily: "serif",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          {language.script}
        </div>

        {/* Language name */}
        <div
          style={{
            fontSize: "48px",
            color: "#d4a574",
            fontFamily: "serif",
            display: "flex",
            marginBottom: "12px",
          }}
        >
          {language.language}
        </div>

        {/* Family info */}
        <div
          style={{
            fontSize: "16px",
            color: "rgba(168, 164, 160, 0.4)",
            display: "flex",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <span style={{ display: "flex" }}>
            {language.languageFamily}
          </span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>
            {language.parentFamily}
          </span>
        </div>

        {/* Hook */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(240, 237, 230, 0.6)",
            fontFamily: "serif",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          {language.hook}
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
