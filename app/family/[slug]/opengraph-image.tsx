import { ImageResponse } from "next/og";
import { getFamilyBySlug, countLanguages } from "@/data/language-families";

export const runtime = "edge";
export const alt = "Language Family — The Journey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);

  if (!family) {
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

  const langCount = countLanguages(family.tree);
  const branches = family.tree.children || [];

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
        {/* Decorative tree radiating from center */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Branch lines radiating from center-bottom */}
          {branches.slice(0, 8).map((branch, i) => {
            const angle = ((i - branches.slice(0, 8).length / 2 + 0.5) * Math.PI) / (branches.slice(0, 8).length + 1);
            const endX = 600 + Math.sin(angle) * 350;
            const endY = 480 - Math.cos(angle) * 280;
            return (
              <line
                key={branch.id}
                x1="600"
                y1="500"
                x2={endX}
                y2={endY}
                stroke={`${branch.displayColor || "rgba(212, 165, 116)"}40`}
                strokeWidth="2"
              />
            );
          })}
          {/* Root dot */}
          <circle cx="600" cy="500" r="8" fill="rgba(212, 165, 116, 0.5)" />
          <circle
            cx="600"
            cy="500"
            r="20"
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
          Language Family
        </div>

        {/* Family name */}
        <div
          style={{
            fontSize: "68px",
            color: "rgba(240, 237, 230, 0.9)",
            fontFamily: "serif",
            fontWeight: 300,
            display: "flex",
            marginBottom: "12px",
          }}
        >
          {family.name}
        </div>

        {/* Hook */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(212, 165, 116, 0.6)",
            fontFamily: "serif",
            fontStyle: "italic",
            display: "flex",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            marginBottom: "24px",
          }}
        >
          {family.hook}
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "16px",
            color: "rgba(168, 164, 160, 0.4)",
          }}
        >
          <span style={{ display: "flex" }}>
            {branches.length} branches
          </span>
          <span style={{ display: "flex" }}>
            {langCount} languages
          </span>
          <span style={{ display: "flex" }}>
            {family.totalSpeakers} speakers
          </span>
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
