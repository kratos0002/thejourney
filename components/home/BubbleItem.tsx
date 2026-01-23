"use client";

import { useRef, useMemo } from "react";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";

interface BubbleItemProps {
  word: Word;
  lat: number;
  lon: number;
  radius: number;
  dimmed?: boolean;
  wasDrag: () => boolean;
  sphereRotation: { x: number; y: number };
}

const SIZE = 70;

export default function BubbleItem({
  word,
  lat,
  lon,
  radius,
  dimmed,
  wasDrag,
  sphereRotation,
}: BubbleItemProps) {
  const { navigateToWord } = useTransition();
  const ref = useRef<HTMLButtonElement>(null);

  // Compute if this point faces the camera (z > 0 after rotation)
  const visibility = useMemo(() => {
    const latRad = (lat * Math.PI) / 180;
    const lonRad = (lon * Math.PI) / 180;
    const rx = (sphereRotation.x * Math.PI) / 180;
    const ry = (sphereRotation.y * Math.PI) / 180;

    // Point on unit sphere
    let x = Math.cos(latRad) * Math.cos(lonRad);
    let y = Math.sin(latRad);
    let z = Math.cos(latRad) * Math.sin(lonRad);

    // Apply Y rotation
    const x1 = x * Math.cos(ry) + z * Math.sin(ry);
    const z1 = -x * Math.sin(ry) + z * Math.cos(ry);

    // Apply X rotation
    const y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
    const z2 = y * Math.sin(rx) + z1 * Math.cos(rx);

    // z2 > 0 means facing camera, z2 < 0 means on the back
    return z2;
  }, [lat, lon, sphereRotation.x, sphereRotation.y]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dimmed || wasDrag() || visibility < 0.1) return;
    const rect = ref.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    navigateToWord(word.slug, word.word, origin);
  };

  // Items on the back of the sphere are hidden
  const isFacing = visibility > -0.1;
  const opacity = dimmed ? 0.05 : Math.max(0, Math.min(1, (visibility + 0.1) * 1.2));
  const scale = Math.max(0.3, 0.5 + visibility * 0.5);

  if (!isFacing && !dimmed) {
    return null; // Cull backface items
  }

  return (
    <button
      ref={ref}
      data-bubble
      className="absolute group flex flex-col items-center justify-center"
      style={{
        width: SIZE,
        height: SIZE,
        left: "50%",
        top: "50%",
        marginLeft: -SIZE / 2,
        marginTop: -SIZE / 2,
        transformStyle: "preserve-3d",
        transform: `rotateY(${lon}deg) rotateX(${-lat}deg) translateZ(${radius}px)`,
        opacity,
        pointerEvents: dimmed || visibility < 0.2 ? "none" : "auto",
        cursor: dimmed || visibility < 0.2 ? "default" : "pointer",
      }}
      onClick={handleClick}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
      aria-hidden={dimmed || visibility < 0}
      tabIndex={dimmed || visibility < 0.2 ? -1 : 0}
    >
      {/* Counter-rotate so text faces the camera */}
      <div
        style={{
          transform: `rotateX(${lat}deg) rotateY(${-lon}deg) scale(${scale})`,
          transition: "transform 0.1s ease-out, opacity 0.15s ease-out",
        }}
        className="flex flex-col items-center justify-center"
      >
        {/* Circle background */}
        <div className="absolute inset-0 rounded-full bg-ink/80 border border-moonlight/12 group-hover:border-amber-glow/50 group-hover:bg-ink/95 transition-all duration-200" style={{ width: SIZE, height: SIZE }} />

        {/* Hover glow */}
        <div className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-glow/10 blur-lg" style={{ width: SIZE + 10, height: SIZE + 10, left: -5, top: -5 }} />

        {/* Word in original script */}
        <span
          className="relative z-10 font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-200 leading-tight text-center"
          style={{
            fontSize: 15,
            maxWidth: SIZE - 12,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {word.word}
        </span>

        {/* Romanization */}
        {visibility > 0.4 && (
          <span
            className="relative z-10 text-mist/60 group-hover:text-mist font-body transition-colors duration-200 mt-0.5"
            style={{ fontSize: 9 }}
          >
            {word.romanization}
          </span>
        )}
      </div>
    </button>
  );
}
