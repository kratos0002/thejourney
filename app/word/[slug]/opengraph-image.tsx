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
          backgroundImage: "linear-gradient(180deg, #0a0a14 0%, #0f1a2e 50%, #0a0a14 100%)",
          padding: "60px",
        }}
      >
        {/* Subtle decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(212, 165, 116, 0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(212, 165, 116, 0.05)",
            display: "flex",
          }}
        />

        {/* Word in original script */}
        <div
          style={{
            fontSize: "96px",
            color: "#f0ede6",
            fontFamily: "serif",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          {word.word}
        </div>

        {/* Romanization */}
        <div
          style={{
            fontSize: "36px",
            color: "#d4a574",
            fontFamily: "serif",
            fontStyle: "italic",
            marginBottom: "12px",
            display: "flex",
          }}
        >
          {word.romanization}
        </div>

        {/* Language */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(168, 164, 160, 0.7)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          {word.language}
        </div>

        {/* Hook */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(168, 164, 160, 0.6)",
            fontFamily: "serif",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          &ldquo;{word.hook}&rdquo;
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(107, 104, 102, 0.6)",
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
