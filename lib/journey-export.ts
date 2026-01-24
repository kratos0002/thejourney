import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { JourneyStop } from "@/data/word-types";

export type ExportFormat = "video" | "gif";

export interface ExportOptions {
  format: ExportFormat;
  word: string;
  romanization: string;
  language: string;
  hook: string;
  journey: JourneyStop[];
  onProgress: (percent: number) => void;
}

const WIDTH = 1080;
const HEIGHT = 1080;
const MAP_AREA = { x: 60, y: 220, width: 960, height: 530 };
const BG_COLOR = "#0a0a14";
const LAND_COLOR = "#1a1a24";
const LAND_STROKE = "#2a2a3a";
const AMBER = "#d4a574";
const MOONLIGHT = "#f0ede6";
const MIST = "#a8b0b8";
const FOG = "#6b7280";

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
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

  // Word title
  ctx.font = "48px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = MOONLIGHT;
  ctx.textAlign = "center";
  ctx.fillText(word, WIDTH / 2, 80);

  // Romanization
  ctx.font = "28px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = AMBER;
  ctx.fillText(romanization, WIDTH / 2, 130);

  // Language
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.fillText(language, WIDTH / 2, 165);

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

  // Glow effect
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
  label: string,
  sublabel: string,
  panOffset: [number, number],
  labelBelow: boolean
) {
  const projected = projection(coord);
  if (!projected) return;

  const x = projected[0] + MAP_AREA.x + panOffset[0];
  const y = projected[1] + MAP_AREA.y + panOffset[1];

  ctx.save();
  ctx.globalAlpha = opacity;

  // Outer glow
  if (isActive) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
    gradient.addColorStop(0, color + "60");
    gradient.addColorStop(1, color + "00");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  // Main dot
  const radius = isActive ? 6 : 4;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  // Inner bright dot
  ctx.fillStyle = MOONLIGHT;
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();

  // Labels
  if (opacity > 0.3) {
    ctx.globalAlpha = opacity * 0.9;
    const labelY = labelBelow ? y + 22 : y - 22;

    ctx.font = "bold 13px Georgia, 'Times New Roman', serif";
    ctx.fillStyle = MOONLIGHT;
    ctx.textAlign = "center";
    ctx.fillText(label, x, labelY);

    ctx.font = "10px system-ui, sans-serif";
    ctx.fillStyle = FOG;
    ctx.fillText(sublabel, x, labelBelow ? labelY + 14 : labelY - 14);
  }

  ctx.restore();
}

function drawHook(ctx: CanvasRenderingContext2D, hook: string, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.font = "italic 18px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = MIST;
  ctx.textAlign = "center";

  // Wrap text if too long
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

  const startY = 810;
  lines.slice(0, 3).forEach((line, i) => {
    ctx.fillText(line, WIDTH / 2, startY + i * 26);
  });

  ctx.restore();
}

function drawWatermark(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalAlpha = 0.25;
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.textAlign = "center";

  const y = HEIGHT - 40;
  const text = "The Journey";
  const tw = ctx.measureText(text).width;
  const lineW = 40;
  const gap = 12;

  // Left line
  ctx.strokeStyle = FOG;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - tw / 2 - gap - lineW, y - 4);
  ctx.lineTo(WIDTH / 2 - tw / 2 - gap, y - 4);
  ctx.stroke();

  // Right line
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

  const dx = (centerX - projected[0]) * 0.4 * easeInOut(progress);
  const dy = (centerY - projected[1]) * 0.4 * easeInOut(progress);

  return [dx, dy];
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  t: number,
  landGeoJSON: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  journey: JourneyStop[],
  word: string,
  romanization: string,
  language: string,
  hook: string
) {
  drawBackground(ctx);

  // Title fade-in: 0-0.1
  const titleOpacity = clamp(t / 0.1, 0, 1);
  drawTitle(ctx, word, romanization, language, titleOpacity);

  // Map animation: 0.1-0.9
  const mapStart = 0.1;
  const mapEnd = 0.9;
  const mapT = clamp((t - mapStart) / (mapEnd - mapStart), 0, 1);

  const stopCount = journey.length;
  const timePerStop = 1 / stopCount;

  // Determine active stop and per-stop progress
  const activeFloat = mapT * stopCount;
  const activeIndex = Math.min(Math.floor(activeFloat), stopCount - 1);
  const stopProgress = activeFloat - activeIndex;

  // Pan offset
  const panOffset = calculatePanOffset(journey, activeIndex, projection, mapT > 0 ? 1 : 0);

  // Draw land
  drawLand(ctx, landGeoJSON, projection, panOffset);

  // Draw arcs and nodes
  for (let i = 0; i < stopCount; i++) {
    const stopStart = i * timePerStop;
    const nodeT = clamp((mapT - stopStart) / timePerStop, 0, 1);

    if (nodeT <= 0) continue;

    // Draw arc from previous stop
    if (i > 0) {
      const arcProgress = clamp(nodeT / 0.4, 0, 1);
      const color = journey[i].color || AMBER;
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

    // Draw node
    const nodeOpacity = clamp((nodeT - 0.3) / 0.3, 0, 1);
    const isActive = i === activeIndex;
    const color = journey[i].color || AMBER;
    drawNode(
      ctx,
      journey[i].coordinates as [number, number],
      projection,
      color,
      easeInOut(nodeOpacity),
      isActive,
      journey[i].form,
      `${journey[i].location} · ${journey[i].period}`,
      panOffset,
      i % 2 === 1
    );
  }

  // Hook fade-in: 0.85-1.0
  const hookOpacity = clamp((t - 0.85) / 0.15, 0, 1);
  drawHook(ctx, hook, easeInOut(hookOpacity));

  // Watermark always visible
  drawWatermark(ctx);
}

export async function exportJourneyAnimation(options: ExportOptions): Promise<Blob> {
  const { format, word, romanization, language, hook, journey, onProgress } = options;

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d")!;

  const landGeoJSON = await loadWorldData();
  const projection = setupProjection(journey);

  onProgress(5);

  const totalDurationMs = Math.max(8000, Math.min(12000, journey.length * 1500));
  const fps = format === "video" ? 30 : 10;
  const totalFrames = Math.ceil((totalDurationMs / 1000) * fps);

  if (format === "video") {
    return recordVideo(ctx, canvas, totalFrames, fps, totalDurationMs, landGeoJSON, projection, journey, word, romanization, language, hook, onProgress);
  } else {
    return recordGif(ctx, canvas, totalFrames, landGeoJSON, projection, journey, word, romanization, language, hook, onProgress);
  }
}

async function recordVideo(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  totalFrames: number,
  fps: number,
  durationMs: number,
  landGeoJSON: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  journey: JourneyStop[],
  word: string,
  romanization: string,
  language: string,
  hook: string,
  onProgress: (p: number) => void
): Promise<Blob> {
  const stream = canvas.captureStream(fps);
  const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";
  const recorder = new MediaRecorder(stream, {
    mimeType,
    videoBitsPerSecond: 5_000_000,
  });

  const chunks: Blob[] = [];
  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  return new Promise((resolve) => {
    recorder.onstop = () => {
      resolve(new Blob(chunks, { type: "video/webm" }));
    };

    recorder.start();

    let frame = 0;
    const frameDuration = 1000 / fps;
    let lastTime = performance.now();

    function renderFrame() {
      if (frame >= totalFrames) {
        // Render one extra second of the final frame (hold)
        setTimeout(() => recorder.stop(), 500);
        onProgress(100);
        return;
      }

      const t = frame / totalFrames;
      drawFrame(ctx, t, landGeoJSON, projection, journey, word, romanization, language, hook);
      frame++;
      onProgress(5 + (frame / totalFrames) * 90);

      const now = performance.now();
      const elapsed = now - lastTime;
      const delay = Math.max(0, frameDuration - elapsed);
      lastTime = now + delay;
      setTimeout(renderFrame, delay);
    }

    renderFrame();
  });
}

async function recordGif(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  totalFrames: number,
  landGeoJSON: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  journey: JourneyStop[],
  word: string,
  romanization: string,
  language: string,
  hook: string,
  onProgress: (p: number) => void
): Promise<Blob> {
  // Dynamic import gif.js (UMD module)
  const GIF = (await import("gif.js")).default;

  const gif = new GIF({
    workers: 2,
    quality: 10,
    width: WIDTH,
    height: HEIGHT,
    workerScript: "/gif.worker.js",
  });

  // Render frames and add to GIF incrementally
  for (let i = 0; i < totalFrames; i++) {
    const t = i / totalFrames;
    drawFrame(ctx, t, landGeoJSON, projection, journey, word, romanization, language, hook);
    gif.addFrame(ctx, { delay: 100, copy: true });
    onProgress(5 + (i / totalFrames) * 50);
  }

  // Encode
  return new Promise((resolve) => {
    gif.on("progress", (p: number) => {
      onProgress(55 + p * 45);
    });
    gif.on("finished", (blob: Blob) => {
      resolve(blob);
    });
    gif.render();
  });
}
