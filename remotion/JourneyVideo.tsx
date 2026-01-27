import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import type { Word, JourneyStop } from "../data/word-types";

// Color palette matching the app
const COLORS = {
  background: "#0a0a14",
  surface: "#12121e",
  moonlight: "#f0ede6",
  amber: "#d4a574",
  mist: "#a8b0b8",
  fog: "#6b6866",
};

export interface JourneyVideoProps {
  word: Word;
  [key: string]: unknown;
}

// Title sequence component
const TitleSequence: React.FC<{ word: Word; frame: number; fps: number }> = ({
  word,
  frame,
  fps,
}) => {
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, 25], [40, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
  });

  const hookOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 120,
      }}
    >
      {/* Main word in native script */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontSize: 120,
          fontFamily: "Georgia, serif",
          color: COLORS.moonlight,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {word.word}
      </div>

      {/* Romanization */}
      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 48,
          fontFamily: "Georgia, serif",
          color: COLORS.amber,
          marginTop: 16,
        }}
      >
        {word.romanization}
      </div>

      {/* Language */}
      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 24,
          fontFamily: "system-ui, sans-serif",
          color: COLORS.fog,
          marginTop: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {word.language}
      </div>

      {/* Hook quote */}
      <div
        style={{
          opacity: hookOpacity,
          fontSize: 32,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          color: COLORS.mist,
          marginTop: 60,
          maxWidth: 900,
          textAlign: "center",
          lineHeight: 1.5,
          padding: "0 60px",
        }}
      >
        "{word.hook}"
      </div>
    </AbsoluteFill>
  );
};

// Journey stop card component
const StopCard: React.FC<{
  stop: JourneyStop;
  index: number;
  total: number;
  progress: number;
  isActive: boolean;
}> = ({ stop, index, total, progress, isActive }) => {
  const opacity = interpolate(progress, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 0.3], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  const color = stop.color || COLORS.amber;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180,
        left: 60,
        right: 60,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 24,
          padding: 40,
          border: `2px solid ${color}40`,
        }}
      >
        {/* Progress indicator */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: i <= index ? color : `${COLORS.fog}40`,
              }}
            />
          ))}
        </div>

        {/* Script if available */}
        {stop.script && (
          <div
            style={{
              fontSize: 56,
              fontFamily: "Georgia, serif",
              color: COLORS.moonlight,
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            {stop.script}
          </div>
        )}

        {/* Form */}
        <div
          style={{
            fontSize: 42,
            fontFamily: "Georgia, serif",
            color: stop.script ? COLORS.amber : COLORS.moonlight,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          {stop.form}
        </div>

        {/* Location and period */}
        <div
          style={{
            fontSize: 24,
            fontFamily: "system-ui, sans-serif",
            color,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {stop.location} · {stop.period}
        </div>

        {/* Context */}
        <div
          style={{
            fontSize: 22,
            fontFamily: "system-ui, sans-serif",
            color: COLORS.mist,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {stop.context}
        </div>
      </div>
    </div>
  );
};

// Simple map visualization
const MapVisualization: React.FC<{
  journey: JourneyStop[];
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ journey, activeIndex, frame, fps }) => {
  // Simple world map background
  const mapOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 400,
        left: 40,
        right: 40,
        height: 500,
        opacity: mapOpacity,
        background: `linear-gradient(180deg, ${COLORS.surface}00 0%, ${COLORS.surface}80 100%)`,
        borderRadius: 24,
        overflow: "hidden",
      }}
    >
      {/* Journey path visualization */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 500"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Draw connecting lines */}
        {journey.slice(0, activeIndex + 1).map((stop, i) => {
          if (i === 0) return null;
          const prev = journey[i - 1];
          // Simple mapping: longitude to x, latitude to y
          const x1 = ((prev.coordinates[0] + 180) / 360) * 1000;
          const y1 = ((90 - prev.coordinates[1]) / 180) * 500;
          const x2 = ((stop.coordinates[0] + 180) / 360) * 1000;
          const y2 = ((90 - stop.coordinates[1]) / 180) * 500;

          const lineProgress = interpolate(
            activeIndex,
            [i - 1, i],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x1 + (x2 - x1) * lineProgress}
              y2={y1 + (y2 - y1) * lineProgress}
              stroke={prev.color || COLORS.amber}
              strokeWidth={3}
              strokeLinecap="round"
              opacity={0.8}
            />
          );
        })}

        {/* Draw nodes */}
        {journey.slice(0, activeIndex + 1).map((stop, i) => {
          const x = ((stop.coordinates[0] + 180) / 360) * 1000;
          const y = ((90 - stop.coordinates[1]) / 180) * 500;
          const isActive = i === activeIndex;
          const color = stop.color || COLORS.amber;

          return (
            <g key={i}>
              {/* Glow */}
              {isActive && (
                <circle
                  cx={x}
                  cy={y}
                  r={30}
                  fill={`${color}40`}
                />
              )}
              {/* Node */}
              <circle
                cx={x}
                cy={y}
                r={isActive ? 12 : 8}
                fill={color}
              />
              {/* Center dot */}
              <circle
                cx={x}
                cy={y}
                r={3}
                fill={COLORS.moonlight}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Watermark component
const Watermark: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        opacity: 0.4,
      }}
    >
      <div
        style={{
          width: 40,
          height: 1,
          background: COLORS.fog,
        }}
      />
      <div
        style={{
          fontSize: 16,
          fontFamily: "system-ui, sans-serif",
          color: COLORS.fog,
          letterSpacing: 2,
        }}
      >
        THE JOURNEY
      </div>
      <div
        style={{
          width: 40,
          height: 1,
          background: COLORS.fog,
        }}
      />
    </div>
  );
};

// Main video component
export const JourneyVideo: React.FC<JourneyVideoProps> = ({ word }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const journey = word.journey || [];
  const stopCount = journey.length;

  // Timing structure
  const TITLE_DURATION = 90; // 3 seconds for title
  const STOP_DURATION = Math.floor((durationInFrames - TITLE_DURATION - 60) / stopCount);

  // Calculate active stop index
  const journeyFrame = Math.max(0, frame - TITLE_DURATION);
  const activeIndex = Math.min(
    Math.floor(journeyFrame / STOP_DURATION),
    stopCount - 1
  );

  // Progress within current stop
  const stopProgress = (journeyFrame % STOP_DURATION) / STOP_DURATION;

  // Show title for first 3 seconds
  const showTitle = frame < TITLE_DURATION + 30;
  const titleFadeOut = interpolate(
    frame,
    [TITLE_DURATION, TITLE_DURATION + 30],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Title sequence */}
      {showTitle && (
        <div style={{ opacity: frame < TITLE_DURATION ? 1 : titleFadeOut }}>
          <TitleSequence word={word} frame={frame} fps={fps} />
        </div>
      )}

      {/* Map visualization */}
      {frame >= TITLE_DURATION && (
        <MapVisualization
          journey={journey}
          activeIndex={activeIndex}
          frame={frame}
          fps={fps}
        />
      )}

      {/* Stop card */}
      {frame >= TITLE_DURATION && journey[activeIndex] && (
        <StopCard
          stop={journey[activeIndex]}
          index={activeIndex}
          total={stopCount}
          progress={stopProgress}
          isActive={true}
        />
      )}

      {/* Watermark */}
      <Watermark />
    </AbsoluteFill>
  );
};
