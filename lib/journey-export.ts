import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { JourneyStop } from "@/data/word-types";

export interface ExportOptions {
  word: string;
  romanization: string;
  language: string;
  hook: string;
  journey: JourneyStop[];
  onProgress: (percent: number) => void;
}

const WIDTH = 1080;
const HEIGHT = 1920; // Vertical video (9:16)
const BG_COLOR = "#0a0a14";
const LAND_COLOR = "#1a1a24";
const LAND_STROKE = "#2a2a3a";
const AMBER = "#d4a574";
const MOONLIGHT = "#f0ede6";
const MIST = "#a8b0b8";
const FOG = "#6b7280";

const MAP_AREA = { x: 40, y: 260, width: 1000, height: 600 };
const CARD_AREA = { x: 60, y: 920, width: 960, height: 260 };

// GSAP power2.inOut equivalent
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// GSAP power2.out equivalent
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 2);
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

async function loadWorldData() {
  const worldData = await import("world-atlas/land-110m.json");
  const topo = worldData as unknown as Topology<{ land: GeometryCollection }>;
  return topojson.feature(topo, topo.objects.land);
}

function setupProjection(journey: JourneyStop[]) {
  const coords = journey.map(s => s.coordinates as [number, number]);
  const multiPoint: GeoJSON.MultiPoint = { type: "MultiPoint", coordinates: coords };

  return d3.geoNaturalEarth1()
    .fitSize([MAP_AREA.width, MAP_AREA.height], multiPoint);
}

function drawBackground(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawTitle(
  ctx: CanvasRenderingContext2D,
  word: string,
  romanization: string,
  language: string,
  opacity: number
) {
  ctx.save();
  ctx.globalAlpha = opacity;

  ctx.font = "56px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = MOONLIGHT;
  ctx.textAlign = "center";
  ctx.fillText(word, WIDTH / 2, 110);

  ctx.font = "32px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = AMBER;
  ctx.fillText(romanization, WIDTH / 2, 165);

  ctx.font = "18px system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.fillText(language, WIDTH / 2, 205);

  ctx.restore();
}

function drawLand(
  ctx: CanvasRenderingContext2D,
  landGeoJSON: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  panOffset: [number, number]
) {
  const path = d3.geoPath(projection).context(ctx);

  ctx.save();
  ctx.translate(MAP_AREA.x + panOffset[0], MAP_AREA.y + panOffset[1]);

  ctx.beginPath();
  path(landGeoJSON as unknown as d3.GeoPermissibleObjects);
  ctx.fillStyle = LAND_COLOR;
  ctx.fill();
  ctx.strokeStyle = LAND_STROKE;
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.restore();
}

function drawArc(
  ctx: CanvasRenderingContext2D,
  source: [number, number],
  target: [number, number],
  projection: d3.GeoProjection,
  progress: number,
  color: string,
  panOffset: [number, number]
) {
  const interpolator = d3.geoInterpolate(source, target);
  const numPoints = 50;
  const drawPoints = Math.floor(numPoints * progress);
  if (drawPoints < 2) return;

  ctx.save();
  ctx.translate(MAP_AREA.x + panOffset[0], MAP_AREA.y + panOffset[1]);

  ctx.beginPath();
  for (let i = 0; i <= drawPoints; i++) {
    const t = i / numPoints;
    const point = interpolator(t);
    const projected = projection(point);
    if (!projected) continue;
    if (i === 0) ctx.moveTo(projected[0], projected[1]);
    else ctx.lineTo(projected[0], projected[1]);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.shadowBlur = 8;
  ctx.shadowColor = color;
  ctx.globalAlpha = 0.3;
  ctx.stroke();

  ctx.restore();
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  coord: [number, number],
  projection: d3.GeoProjection,
  color: string,
  opacity: number,
  isActive: boolean,
  panOffset: [number, number]
) {
  const projected = projection(coord);
  if (!projected) return;

  const x = projected[0] + MAP_AREA.x + panOffset[0];
  const y = projected[1] + MAP_AREA.y + panOffset[1];

  ctx.save();
  ctx.globalAlpha = opacity;

  if (isActive) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 24);
    gradient.addColorStop(0, color + "60");
    gradient.addColorStop(1, color + "00");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
  }

  const radius = isActive ? 7 : 4;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = MOONLIGHT;
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawStopCard(
  ctx: CanvasRenderingContext2D,
  stop: JourneyStop,
  stopIndex: number,
  totalStops: number,
  opacity: number
) {
  ctx.save();
  ctx.globalAlpha = opacity;

  const { x, y, width, height } = CARD_AREA;
  const color = stop.color || AMBER;

  // Card background
  const radius = 16;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fillStyle = "#12121e";
  ctx.fill();
  ctx.strokeStyle = color + "40";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Step indicator line
  const indicatorY = y + 24;
  const stepWidth = (width - 80) / totalStops;
  for (let i = 0; i < totalStops; i++) {
    const sx = x + 40 + i * stepWidth;
    ctx.fillStyle = i <= stopIndex ? color : FOG + "40";
    ctx.beginPath();
    ctx.roundRect(sx, indicatorY, stepWidth - 4, 3, 2);
    ctx.fill();
  }

  // Form (the word at this stage)
  ctx.font = "bold 36px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = MOONLIGHT;
  ctx.textAlign = "left";
  const formText = stop.script ? `${stop.form}  ${stop.script}` : stop.form;
  ctx.fillText(formText, x + 40, y + 80);

  // Location + period
  ctx.font = "18px system-ui, sans-serif";
  ctx.fillStyle = color;
  ctx.fillText(`${stop.location}  ·  ${stop.period}`, x + 40, y + 120);

  // Context (word wrap)
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillStyle = MIST;
  const maxWidth = width - 80;
  const words = (stop.context || "").split(" ");
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    const test = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = test;
    }
  }
  if (currentLine) lines.push(currentLine);
  lines.slice(0, 3).forEach((line, i) => {
    ctx.fillText(line, x + 40, y + 160 + i * 24);
  });

  // Stop number
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.textAlign = "right";
  ctx.fillText(`${stopIndex + 1} / ${totalStops}`, x + width - 40, y + 40);

  ctx.restore();
}

function drawHook(ctx: CanvasRenderingContext2D, hook: string, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.font = "italic 20px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = MIST;
  ctx.textAlign = "center";

  const maxWidth = WIDTH - 120;
  const words = hook.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const test = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = test;
    }
  }
  if (currentLine) lines.push(currentLine);

  const startY = 1280;
  lines.slice(0, 3).forEach((line, i) => {
    ctx.fillText(line, WIDTH / 2, startY + i * 30);
  });

  ctx.restore();
}

function drawWatermark(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalAlpha = 0.25;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.textAlign = "center";

  const y = HEIGHT - 60;
  const text = "The Journey";
  const tw = ctx.measureText(text).width;
  const lineW = 40;
  const gap = 12;

  ctx.strokeStyle = FOG;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - tw / 2 - gap - lineW, y - 4);
  ctx.lineTo(WIDTH / 2 - tw / 2 - gap, y - 4);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 + tw / 2 + gap, y - 4);
  ctx.lineTo(WIDTH / 2 + tw / 2 + gap + lineW, y - 4);
  ctx.stroke();

  ctx.fillText(text, WIDTH / 2, y);
  ctx.restore();
}

function calculatePanOffset(
  journey: JourneyStop[],
  activeIndex: number,
  projection: d3.GeoProjection,
  progress: number
): [number, number] {
  if (activeIndex < 0) return [0, 0];

  const coord = journey[activeIndex].coordinates as [number, number];
  const projected = projection(coord);
  if (!projected) return [0, 0];

  const centerX = MAP_AREA.width / 2;
  const centerY = MAP_AREA.height / 2;

  const dx = (centerX - projected[0]) * 0.35 * easeInOut(progress);
  const dy = (centerY - projected[1]) * 0.35 * easeInOut(progress);

  return [dx, dy];
}

// Timing constants matching JourneyMap.tsx GSAP animation
const TIMING = {
  TITLE_FADE_IN: 0.8,        // Title fade duration (seconds)
  MAP_START: 1.0,            // When map animation starts
  FIRST_NODE_DELAY: 0.5,     // First node appears at this time after map start
  STOP_SPACING: 0.6,         // Time between each stop
  ARC_DURATION: 1.0,         // Duration for arc to draw
  NODE_FADE_DURATION: 0.4,   // Node fade in duration
  LABEL_DELAY: 0.15,         // Label appears after node
  HOOK_FADE_IN: 0.8,         // Hook fade duration
  END_PAUSE: 1.5,            // Pause at end before video ends
};

function calculateAnimationDuration(stopCount: number): number {
  // Total = title + first node delay + (N-1) * stop spacing + last arc settle + hook + pause
  return TIMING.MAP_START +
         TIMING.FIRST_NODE_DELAY +
         (stopCount - 1) * TIMING.STOP_SPACING +
         TIMING.ARC_DURATION +
         TIMING.HOOK_FADE_IN +
         TIMING.END_PAUSE;
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  timeSeconds: number,
  totalDuration: number,
  landGeoJSON: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  journey: JourneyStop[],
  word: string,
  romanization: string,
  language: string,
  hook: string
) {
  drawBackground(ctx);

  const stopCount = journey.length;

  // Title fade-in: 0 to TITLE_FADE_IN seconds
  const titleOpacity = clamp(timeSeconds / TIMING.TITLE_FADE_IN, 0, 1);
  drawTitle(ctx, word, romanization, language, easeOut(titleOpacity));

  // Map animation starts at MAP_START
  const mapTime = timeSeconds - TIMING.MAP_START;

  // Calculate which stop is active based on timeline
  let activeIndex = -1;
  for (let i = 0; i < stopCount; i++) {
    const nodeAppearTime = TIMING.FIRST_NODE_DELAY + i * TIMING.STOP_SPACING;
    if (mapTime >= nodeAppearTime) {
      activeIndex = i;
    }
  }

  // Calculate pan offset based on active node
  const panOffset = calculatePanOffset(journey, activeIndex, projection, activeIndex >= 0 ? 1 : 0);

  // Draw land
  if (mapTime >= 0) {
    drawLand(ctx, landGeoJSON, projection, panOffset);
  }

  // Draw arcs and nodes with precise timing matching JourneyMap
  for (let i = 0; i < stopCount; i++) {
    const nodeAppearTime = TIMING.FIRST_NODE_DELAY + i * TIMING.STOP_SPACING;
    const nodeTime = mapTime - nodeAppearTime;

    if (nodeTime < 0) continue;

    // Arc from previous node (draws with GSAP-like timing)
    if (i > 0) {
      const arcStartTime = TIMING.FIRST_NODE_DELAY + (i - 1) * TIMING.STOP_SPACING + 0.1;
      const arcTime = mapTime - arcStartTime;
      const arcProgress = clamp(arcTime / TIMING.ARC_DURATION, 0, 1);

      if (arcProgress > 0) {
        const color = journey[i - 1].color || AMBER;
        drawArc(
          ctx,
          journey[i - 1].coordinates as [number, number],
          journey[i].coordinates as [number, number],
          projection,
          easeInOut(arcProgress),
          color,
          panOffset
        );
      }
    }

    // Node appearance with GSAP power2.out timing
    const nodeOpacity = clamp(nodeTime / TIMING.NODE_FADE_DURATION, 0, 1);
    const isActive = i === activeIndex;
    const color = journey[i].color || AMBER;

    drawNode(
      ctx,
      journey[i].coordinates as [number, number],
      projection,
      color,
      easeOut(nodeOpacity),
      isActive,
      panOffset
    );
  }

  // Stop card — shows current active stop with smooth transitions
  if (activeIndex >= 0) {
    const cardAppearTime = TIMING.FIRST_NODE_DELAY + activeIndex * TIMING.STOP_SPACING;
    const cardTime = mapTime - cardAppearTime;
    const cardOpacity = clamp(cardTime / 0.3, 0, 1);
    drawStopCard(ctx, journey[activeIndex], activeIndex, stopCount, easeOut(cardOpacity));
  }

  // Hook fade-in at the end
  const hookStartTime = totalDuration - TIMING.HOOK_FADE_IN - TIMING.END_PAUSE;
  const hookTime = timeSeconds - hookStartTime;
  const hookOpacity = clamp(hookTime / TIMING.HOOK_FADE_IN, 0, 1);
  drawHook(ctx, hook, easeOut(hookOpacity));

  drawWatermark(ctx);
}

export async function exportJourneyAnimation(options: ExportOptions): Promise<Blob> {
  const { word, romanization, language, hook, journey, onProgress } = options;

  const canvas = new OffscreenCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d")!;

  const landGeoJSON = await loadWorldData();
  const projection = setupProjection(journey);

  onProgress(5);

  // Calculate duration matching online animation timing
  const totalDurationSeconds = calculateAnimationDuration(journey.length);

  // Use 60fps for smooth playback matching display refresh rate
  const fps = 60;
  const totalFrames = Math.ceil(totalDurationSeconds * fps);

  // Dynamic import mp4-muxer to keep it out of the main bundle
  const { Muxer, ArrayBufferTarget } = await import("mp4-muxer");

  const target = new ArrayBufferTarget();
  const muxer = new Muxer({
    target,
    video: {
      codec: "avc",
      width: WIDTH,
      height: HEIGHT,
    },
    fastStart: "in-memory",
  });

  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta ?? undefined),
    error: (e) => console.error("[Journey] VideoEncoder error:", e),
  });

  // Use higher profile for better quality at 60fps
  encoder.configure({
    codec: "avc1.640028", // High profile, level 4.0 for better quality
    width: WIDTH,
    height: HEIGHT,
    bitrate: 8_000_000, // Higher bitrate for 60fps smooth playback
    bitrateMode: "variable",
    framerate: fps,
  });

  onProgress(10);

  // Render and encode all frames
  for (let i = 0; i < totalFrames; i++) {
    const timeSeconds = i / fps;
    drawFrame(
      ctx as unknown as CanvasRenderingContext2D,
      timeSeconds,
      totalDurationSeconds,
      landGeoJSON,
      projection,
      journey,
      word,
      romanization,
      language,
      hook
    );

    const frame = new VideoFrame(canvas, {
      timestamp: (i * 1_000_000) / fps, // microseconds
      duration: 1_000_000 / fps,
    });

    const keyFrame = i % fps === 0; // Keyframe every second for smoother seeking
    encoder.encode(frame, { keyFrame });
    frame.close();

    // Yield to UI every 15 frames to keep progress bar updating
    if (i % 15 === 0) {
      onProgress(10 + (i / totalFrames) * 85);
      await new Promise(r => setTimeout(r, 0));
    }
  }

  // Flush encoder and finalize MP4
  await encoder.flush();
  encoder.close();
  muxer.finalize();

  onProgress(100);

  return new Blob([target.buffer], { type: "video/mp4" });
}
