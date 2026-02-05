import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Language Histories — Explore How Languages Evolved | The Journey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  // Sample scripts representing language diversity
  const scripts = [
    { text: "संस्कृतम्", label: "Sanskrit" },
    { text: "فارسی", label: "Persian" },
    { text: "Ελληνικά", label: "Greek" },
    { text: "العربية", label: "Arabic" },
    { text: "日本語", label: "Japanese" },
  ];

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
        {/* Background scripts — scattered and faded */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "100px 80px",
          }}
        >
          {scripts.map((script, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                opacity: 0.12,
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  color: "#d4a574",
                  fontFamily: "serif",
                  display: "flex",
                }}
              >
                {script.text}
              </div>
            </div>
          ))}
        </div>

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
          Language Histories
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "60px",
            color: "rgba(240, 237, 230, 0.9)",
            fontFamily: "serif",
            fontWeight: 300,
            display: "flex",
            marginBottom: "16px",
          }}
        >
          How Languages Evolved
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
          10 languages, millennia of stories
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
