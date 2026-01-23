import { ImageResponse } from "next/og";
import { getWordBySlug } from "@/data/words";

export const runtime = "edge";
export const alt = "The Journey - Word Etymology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function projectCoords(journey: { coordinates: [number, number] }[]) {
  if (journey.length === 0) return [];

  const lons = journey.map(j => j.coordinates[0]);
  const lats = journey.map(j => j.coordinates[1]);

  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);

  // Add padding and scale to image region (bottom portion, behind the text)
  const padX = 150;
  const padY = 180;
  const areaW = 1200 - padX * 2;
  const areaH = 630 - padY * 2;

  const lonRange = Math.max(maxLon - minLon, 20);
  const latRange = Math.max(maxLat - minLat, 10);

  return journey.map(j => ({
    x: padX + ((j.coordinates[0] - minLon) / lonRange) * areaW,
    y: padY + ((maxLat - j.coordinates[1]) / latRange) * areaH, // invert Y
  }));
}

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

  const points = projectCoords(word.journey);

  // Build SVG path for the journey line
  const pathD = points.length > 1
    ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    : "";

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
          backgroundImage: "radial-gradient(ellipse at 50% 50%, #0f1a2e 0%, #0a0a14 70%)",
          position: "relative",
        }}
      >
        {/* Journey path visualization — dots and lines */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Connecting line */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="rgba(212, 165, 116, 0.2)"
              strokeWidth="2.5"
              strokeDasharray="8,10"
            />
          )}
          {/* Journey dots */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === 0 ? 8 : i === points.length - 1 ? 8 : 5}
              fill={i === 0 ? "rgba(212, 165, 116, 0.7)" : i === points.length - 1 ? "rgba(212, 165, 116, 0.6)" : "rgba(212, 165, 116, 0.35)"}
            />
          ))}
          {/* Glow on first and last dot */}
          {points.length > 0 && (
            <circle
              cx={points[0].x}
              cy={points[0].y}
              r="18"
              fill="none"
              stroke="rgba(212, 165, 116, 0.15)"
              strokeWidth="2.5"
            />
          )}
          {points.length > 1 && (
            <circle
              cx={points[points.length - 1].x}
              cy={points[points.length - 1].y}
              r="18"
              fill="none"
              stroke="rgba(212, 165, 116, 0.15)"
              strokeWidth="2.5"
            />
          )}
        </svg>

        {/* Word + romanization at top */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            display: "flex",
            alignItems: "baseline",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              color: "rgba(240, 237, 230, 0.9)",
              fontFamily: "serif",
              display: "flex",
            }}
          >
            {word.word}
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#d4a574",
              fontFamily: "serif",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            {word.romanization}
          </div>
        </div>

        {/* Language */}
        <div
          style={{
            position: "absolute",
            top: "120px",
            fontSize: "15px",
            color: "rgba(168, 164, 160, 0.5)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {word.language}
        </div>

        {/* Hook — hero text */}
        <div
          style={{
            fontSize: "38px",
            color: "rgba(240, 237, 230, 0.9)",
            fontFamily: "serif",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "950px",
            lineHeight: 1.45,
            display: "flex",
            position: "relative",
          }}
        >
          {`\u201C${word.hook}\u201D`}
        </div>

        {/* CTA */}
        <div
          style={{
            position: "absolute",
            bottom: "65px",
            fontSize: "20px",
            color: "rgba(212, 165, 116, 0.6)",
            display: "flex",
            letterSpacing: "1px",
          }}
        >
          Trace the journey →
        </div>

        {/* Branding */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            fontSize: "15px",
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
