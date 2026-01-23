import { ImageResponse } from "next/og";
import { getWordBySlug } from "@/data/words";

export const runtime = "edge";
export const alt = "The Journey - Word Etymology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const word = getWordBySlug(slug);

  if (!word) {
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
          backgroundImage: "radial-gradient(ellipse at 50% 40%, #0f1a2e 0%, #0a0a14 70%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top: word in original script + romanization */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "rgba(240, 237, 230, 0.9)",
              fontFamily: "serif",
              display: "flex",
            }}
          >
            {word.word}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#d4a574",
              fontFamily: "serif",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            {word.romanization}
          </div>
        </div>

        {/* Language tag */}
        <div
          style={{
            position: "absolute",
            top: "115px",
            fontSize: "13px",
            color: "rgba(168, 164, 160, 0.5)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {word.language}
        </div>

        {/* Hero: The hook — the intriguing question */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(240, 237, 230, 0.85)",
            fontFamily: "serif",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          {`\u201C${word.hook}\u201D`}
        </div>

        {/* CTA hint */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            fontSize: "18px",
            color: "rgba(212, 165, 116, 0.6)",
            display: "flex",
            letterSpacing: "1px",
          }}
        >
          Trace the journey →
        </div>

        {/* Footer branding */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "rgba(107, 104, 102, 0.5)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          The Journey
        </div>
      </div>
    ),
    { ...size }
  );
}
