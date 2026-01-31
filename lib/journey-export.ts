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

// ── Canvas dimensions ──────────────────────────────────────────────
const WIDTH = 1080;
const HEIGHT = 1920;

// ── Palette ────────────────────────────────────────────────────────
const BG_COLOR = "#0a0a14";
const BG_DEEP = "#060610";
const LAND_COLOR = "#1a1a24";
const LAND_STROKE = "#2a2a3a";
const AMBER = "#d4a574";
const MOONLIGHT = "#f0ede6";
const MIST = "#a8b0b8";
const FOG = "#6b7280";

// ── Layout zones ───────────────────────────────────────────────────
const MAP_AREA = { x: 40, y: 260, width: 1000, height: 600 };
const CARD_AREA = { x: 60, y: 920, width: 960, height: 260 };

// ── Timing (seconds) ──────────────────────────────────────────────
const T = {
  // Intro
  TITLE_FADE: 1.2,
  TITLE_HOLD: 1.0,
  MAP_START: 2.2,
  MAP_FADE: 0.8,

  // Per-stop breakdown (total ≈ 3.5s)
  FIRST_NODE_DELAY: 0.5,
  STOP_DURATION: 3.5,
  ARC_DRAW: 1.2,
  ARC_SETTLE: 0.3,
  NODE_POP: 0.4,
  CARD_SLIDE: 0.5,
  CARD_HOLD: 1.1,

  // Camera
  CAMERA_DURATION: 1.0,

  // Pulse rings
  PULSE_1_PERIOD: 1.2,
  PULSE_2_PERIOD: 1.5,
  PULSE_2_OFFSET: 0.3,

  // Outro
  HOOK_FADE: 1.2,
  HOOK_HOLD: 2.0,
  END_PAUSE: 1.0,
};

// ── Easing functions ──────────────────────────────────────────────
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 2);
}

function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ── Camera state ──────────────────────────────────────────────────
interface Camera {
  cx: number; // projected X to center on
  cy: number; // projected Y to center on
  scale: number;
}

function interpolateCamera(from: Camera, to: Camera, t: number): Camera {
  const e = easeInOut(clamp(t, 0, 1));
  return {
    cx: lerp(from.cx, to.cx, e),
    cy: lerp(from.cy, to.cy, e),
    scale: lerp(from.scale, to.scale, e),
  };
}

// ── Duration calculation ──────────────────────────────────────────
function calculateDuration(stopCount: number): number {
  return (
    T.MAP_START +
    T.FIRST_NODE_DELAY +
    stopCount * T.STOP_DURATION +
    T.HOOK_FADE +
    T.HOOK_HOLD +
    T.END_PAUSE
  );
}

// ── Data loading ──────────────────────────────────────────────────
async function loadWorldData() {
  const worldData = await import("world-atlas/land-110m.json");
  const topo = worldData as unknown as Topology<{ land: GeometryCollection }>;
  return topojson.feature(topo, topo.objects.land);
}

function setupProjection(journey: JourneyStop[]) {
  const coords = journey.map((s) => s.coordinates as [number, number]);
  const mp: GeoJSON.MultiPoint = { type: "MultiPoint", coordinates: coords };
  return d3.geoNaturalEarth1().fitSize([MAP_AREA.width, MAP_AREA.height], mp);
}

// ── Film grain ────────────────────────────────────────────────────
function createNoiseCanvas(): OffscreenCanvas {
  const nc = new OffscreenCanvas(WIDTH, HEIGHT);
  const nctx = nc.getContext("2d")!;
  const imageData = nctx.createImageData(WIDTH, HEIGHT);
  const d = imageData.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = Math.random() * 255;
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
    d[i + 3] = 255;
  }
  nctx.putImageData(imageData, 0, 0);
  return nc;
}

// ── Draw: background ──────────────────────────────────────────────
function drawBackground(
  ctx: CanvasRenderingContext2D,
  activeScreenX?: number,
  activeScreenY?: number
) {
  // Base
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle spotlight on map area
  const grad = ctx.createRadialGradient(
    WIDTH / 2,
    MAP_AREA.y + MAP_AREA.height / 2,
    0,
    WIDTH / 2,
    MAP_AREA.y + MAP_AREA.height / 2,
    WIDTH * 0.8
  );
  grad.addColorStop(0, BG_COLOR);
  grad.addColorStop(1, BG_DEEP);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Warm atmospheric glow following active node
  if (activeScreenX !== undefined && activeScreenY !== undefined) {
    const aGrad = ctx.createRadialGradient(
      activeScreenX,
      activeScreenY,
      0,
      activeScreenX,
      activeScreenY,
      WIDTH * 0.35
    );
    aGrad.addColorStop(0, AMBER + "0a");
    aGrad.addColorStop(1, "transparent");
    ctx.fillStyle = aGrad;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  // Vignette
  const vigSize = 150;
  // Top
  const vt = ctx.createLinearGradient(0, 0, 0, vigSize);
  vt.addColorStop(0, "rgba(0,0,0,0.35)");
  vt.addColorStop(1, "transparent");
  ctx.fillStyle = vt;
  ctx.fillRect(0, 0, WIDTH, vigSize);
  // Bottom
  const vb = ctx.createLinearGradient(0, HEIGHT - vigSize, 0, HEIGHT);
  vb.addColorStop(0, "transparent");
  vb.addColorStop(1, "rgba(0,0,0,0.4)");
  ctx.fillStyle = vb;
  ctx.fillRect(0, HEIGHT - vigSize, WIDTH, vigSize);
  // Left
  const vl = ctx.createLinearGradient(0, 0, vigSize, 0);
  vl.addColorStop(0, "rgba(0,0,0,0.25)");
  vl.addColorStop(1, "transparent");
  ctx.fillStyle = vl;
  ctx.fillRect(0, 0, vigSize, HEIGHT);
  // Right
  const vr = ctx.createLinearGradient(WIDTH - vigSize, 0, WIDTH, 0);
  vr.addColorStop(0, "transparent");
  vr.addColorStop(1, "rgba(0,0,0,0.25)");
  ctx.fillStyle = vr;
  ctx.fillRect(WIDTH - vigSize, 0, vigSize, HEIGHT);
}

// ── Draw: title ───────────────────────────────────────────────────
function drawTitle(
  ctx: CanvasRenderingContext2D,
  word: string,
  romanization: string,
  language: string,
  opacity: number
) {
  ctx.save();
  ctx.globalAlpha = opacity;

  // Word
  ctx.font = "600 56px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = MOONLIGHT;
  ctx.textAlign = "center";
  ctx.fillText(word, WIDTH / 2, 110);

  // Romanization
  ctx.font = "400 32px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = AMBER;
  ctx.fillText(romanization, WIDTH / 2, 165);

  // Language
  ctx.font = "400 18px 'Source Serif 4', system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.fillText(language, WIDTH / 2, 205);

  ctx.restore();
}

// ── Draw: land ────────────────────────────────────────────────────
function drawLand(
  ctx: CanvasRenderingContext2D,
  land: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  landOpacity: number
) {
  const path = d3.geoPath(projection).context(ctx);
  ctx.save();
  ctx.globalAlpha = landOpacity;
  ctx.beginPath();
  path(land as unknown as d3.GeoPermissibleObjects);
  ctx.fillStyle = LAND_COLOR;
  ctx.fill();
  ctx.strokeStyle = LAND_STROKE;
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();
}

// ── Draw: arc with glow trail ─────────────────────────────────────
function drawArc(
  ctx: CanvasRenderingContext2D,
  source: [number, number],
  target: [number, number],
  projection: d3.GeoProjection,
  progress: number,
  color: string
) {
  const interpolator = d3.geoInterpolate(source, target);
  const numPoints = 50;
  const drawPoints = Math.floor(numPoints * progress);
  if (drawPoints < 2) return;

  // Build path
  const buildPath = () => {
    ctx.beginPath();
    for (let i = 0; i <= drawPoints; i++) {
      const t = i / numPoints;
      const point = interpolator(t);
      const projected = projection(point);
      if (!projected) continue;
      if (i === 0) ctx.moveTo(projected[0], projected[1]);
      else ctx.lineTo(projected[0], projected[1]);
    }
  };

  // Layer 1: Glow trail (blurred, wide, faint)
  ctx.save();
  ctx.globalAlpha = 0.15;
  try {
    // ctx.filter may not be available in all OffscreenCanvas environments
    (ctx as unknown as { filter: string }).filter = "blur(6px)";
  } catch {
    // fallback: use shadowBlur
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
  }
  buildPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // Layer 2: Main stroke
  ctx.save();
  buildPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.globalAlpha = 0.85;
  ctx.stroke();
  ctx.restore();
}

// ── Draw: node with pulse rings ───────────────────────────────────
function drawNode(
  ctx: CanvasRenderingContext2D,
  projected: [number, number],
  color: string,
  opacity: number,
  isActive: boolean,
  popScale: number,
  time: number
) {
  const [x, y] = projected;

  ctx.save();
  ctx.globalAlpha = opacity;

  if (isActive) {
    // ── Pulse ring 1: r 15→40, opacity 0.9→0 ──
    const t1 = (time % T.PULSE_1_PERIOD) / T.PULSE_1_PERIOD;
    const r1 = 15 + 25 * easeOut(t1);
    const a1 = 0.9 * (1 - easeOut(t1));
    ctx.save();
    ctx.globalAlpha = a1 * opacity;
    ctx.beginPath();
    ctx.arc(x, y, r1 * popScale, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    // ── Pulse ring 2: r 15→55, opacity 0.6→0, offset 0.3s ──
    const t2raw = ((time - T.PULSE_2_OFFSET) % T.PULSE_2_PERIOD) / T.PULSE_2_PERIOD;
    const t2 = clamp(t2raw, 0, 1);
    const r2 = 15 + 40 * easeOut(t2);
    const a2 = 0.6 * (1 - easeOut(t2));
    ctx.save();
    ctx.globalAlpha = a2 * opacity;
    ctx.beginPath();
    ctx.arc(x, y, r2 * popScale, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();

    // ── Outer glow ──
    const glowR = 35 * popScale;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    glow.addColorStop(0, color + "70");
    glow.addColorStop(1, color + "00");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // ── Inactive outer glow (subtle) ──
    const glowR = 18 * popScale;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    glow.addColorStop(0, color + "40");
    glow.addColorStop(1, color + "00");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Main dot ──
  const mainR = isActive ? 12 * popScale : 5 * popScale;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, mainR, 0, Math.PI * 2);
  ctx.fill();

  // ── Inner dot ──
  const innerR = isActive ? 4.5 * popScale : 2 * popScale;
  ctx.fillStyle = MOONLIGHT;
  ctx.beginPath();
  ctx.arc(x, y, innerR, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// ── Draw: stop card with slide-in animation ───────────────────────
function drawStopCard(
  ctx: CanvasRenderingContext2D,
  stop: JourneyStop,
  stopIndex: number,
  totalStops: number,
  progress: number // 0→1 for slide-in
) {
  const easedP = easeOut(clamp(progress, 0, 1));
  const translateY = (1 - easedP) * 30;
  const scale = 0.95 + 0.05 * easedP;

  ctx.save();
  ctx.globalAlpha = easedP;

  const { x, y, width, height } = CARD_AREA;
  const cx = x + width / 2;
  const cy = y + height / 2 + translateY;
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.translate(-x - width / 2, -y - height / 2);

  const color = stop.color || AMBER;

  // Card background with subtle glow
  const cardGlow = ctx.createRadialGradient(
    x + width / 2, y, 0,
    x + width / 2, y, width * 0.6
  );
  cardGlow.addColorStop(0, color + "08");
  cardGlow.addColorStop(1, "transparent");
  ctx.fillStyle = cardGlow;
  ctx.fillRect(x - 20, y - 20, width + 40, height + 40);

  // Card body
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 16);
  ctx.fillStyle = "#12121e";
  ctx.fill();
  ctx.strokeStyle = color + "40";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Step indicator bar
  const indicatorY = y + 24;
  const stepW = (width - 80) / totalStops;
  for (let i = 0; i < totalStops; i++) {
    const sx = x + 40 + i * stepW;
    ctx.fillStyle = i <= stopIndex ? color : FOG + "40";
    ctx.beginPath();
    ctx.roundRect(sx, indicatorY, stepW - 4, 3, 2);
    ctx.fill();
  }

  // Form (the word at this stage)
  ctx.font = "bold 36px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = MOONLIGHT;
  ctx.textAlign = "left";
  const formText = stop.script ? `${stop.form}  ${stop.script}` : stop.form;
  ctx.fillText(formText, x + 40, y + 80);

  // Location + period
  ctx.font = "18px 'Source Serif 4', system-ui, sans-serif";
  ctx.fillStyle = color;
  ctx.fillText(`${stop.location}  ·  ${stop.period}`, x + 40, y + 120);

  // Context (word-wrap)
  ctx.font = "16px 'Source Serif 4', system-ui, sans-serif";
  ctx.fillStyle = MIST;
  const maxW = width - 80;
  const tokens = (stop.context || "").split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const tok of tokens) {
    const test = cur ? `${cur} ${tok}` : tok;
    if (ctx.measureText(test).width > maxW) {
      lines.push(cur);
      cur = tok;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  lines.slice(0, 3).forEach((line, i) => {
    ctx.fillText(line, x + 40, y + 160 + i * 24);
  });

  // Stop number
  ctx.font = "12px 'Source Serif 4', system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.textAlign = "right";
  ctx.fillText(`${stopIndex + 1} / ${totalStops}`, x + width - 40, y + 40);

  ctx.restore();
}

// ── Draw: hook ────────────────────────────────────────────────────
function drawHook(ctx: CanvasRenderingContext2D, hook: string, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.font = "italic 22px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = MIST;
  ctx.textAlign = "center";

  const maxW = WIDTH - 120;
  const tokens = hook.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const tok of tokens) {
    const test = cur ? `${cur} ${tok}` : tok;
    if (ctx.measureText(test).width > maxW) {
      lines.push(cur);
      cur = tok;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);

  const startY = 1280;
  lines.slice(0, 3).forEach((line, i) => {
    ctx.fillText(line, WIDTH / 2, startY + i * 32);
  });
  ctx.restore();
}

// ── Draw: watermark ───────────────────────────────────────────────
function drawWatermark(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalAlpha = 0.25;
  ctx.font = "14px 'Source Serif 4', system-ui, sans-serif";
  ctx.fillStyle = FOG;
  ctx.textAlign = "center";

  const y = HEIGHT - 60;
  const text = "etymology.life";
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

// ── Draw: film grain ──────────────────────────────────────────────
function drawGrain(ctx: CanvasRenderingContext2D, noiseCanvas: OffscreenCanvas) {
  ctx.save();
  ctx.globalAlpha = 0.03;
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(noiseCanvas, 0, 0);
  ctx.restore();
}

// ── Master frame render ───────────────────────────────────────────
function drawFrame(
  ctx: CanvasRenderingContext2D,
  time: number,
  totalDuration: number,
  land: GeoJSON.FeatureCollection,
  projection: d3.GeoProjection,
  journey: JourneyStop[],
  projectedCoords: [number, number][],
  cameras: Camera[],
  word: string,
  romanization: string,
  language: string,
  hook: string,
  noiseCanvas: OffscreenCanvas
) {
  const stopCount = journey.length;
  const mapTime = time - T.MAP_START;

  // ── Determine active stop ──
  let activeIndex = -1;
  for (let i = 0; i < stopCount; i++) {
    const stopStart = T.FIRST_NODE_DELAY + i * T.STOP_DURATION;
    if (mapTime >= stopStart) activeIndex = i;
  }

  // ── Camera interpolation ──
  let camera: Camera;
  if (activeIndex < 0) {
    camera = cameras[0]; // overview
  } else {
    const stopStart = T.FIRST_NODE_DELAY + activeIndex * T.STOP_DURATION;
    const camProgress = clamp((mapTime - stopStart) / T.CAMERA_DURATION, 0, 1);
    const prevCam = activeIndex === 0 ? cameras[0] : cameras[activeIndex];
    const targetCam = cameras[activeIndex + 1]; // +1 because cameras[0] is overview
    camera = interpolateCamera(prevCam, targetCam, camProgress);
  }

  // Calculate where active node would be on screen (for atmospheric glow)
  let activeScreenX: number | undefined;
  let activeScreenY: number | undefined;
  if (activeIndex >= 0) {
    const [px, py] = projectedCoords[activeIndex];
    activeScreenX =
      MAP_AREA.x + MAP_AREA.width / 2 + (px - camera.cx) * camera.scale;
    activeScreenY =
      MAP_AREA.y + MAP_AREA.height / 2 + (py - camera.cy) * camera.scale;
  }

  // ── 1. Background ──
  drawBackground(ctx, activeScreenX, activeScreenY);

  // ── 2. Title ──
  const titleOpacity = clamp(time / T.TITLE_FADE, 0, 1);
  drawTitle(ctx, word, romanization, language, easeOut(titleOpacity));

  // ── 3. Map (clipped + camera-transformed) ──
  if (mapTime >= 0) {
    const landOpacity = clamp(mapTime / T.MAP_FADE, 0, 1);

    ctx.save();
    // Clip to map area
    ctx.beginPath();
    ctx.rect(MAP_AREA.x, MAP_AREA.y, MAP_AREA.width, MAP_AREA.height);
    ctx.clip();

    // Apply camera
    ctx.translate(
      MAP_AREA.x + MAP_AREA.width / 2,
      MAP_AREA.y + MAP_AREA.height / 2
    );
    ctx.scale(camera.scale, camera.scale);
    ctx.translate(-camera.cx, -camera.cy);

    // Land
    drawLand(ctx, land, projection, easeOut(landOpacity));

    // Arcs + Nodes
    for (let i = 0; i < stopCount; i++) {
      const stopStart = T.FIRST_NODE_DELAY + i * T.STOP_DURATION;
      const stopTime = mapTime - stopStart;

      // Arc from previous node
      if (i > 0 && stopTime > -T.ARC_DRAW) {
        // Arc starts drawing T.ARC_DRAW before the node appears
        const arcStartOffset = -T.ARC_DRAW + T.ARC_SETTLE;
        const arcTime = stopTime - arcStartOffset;
        const arcProgress = clamp(arcTime / T.ARC_DRAW, 0, 1);

        if (arcProgress > 0) {
          const color = journey[i - 1].color || AMBER;
          drawArc(
            ctx,
            journey[i - 1].coordinates as [number, number],
            journey[i].coordinates as [number, number],
            projection,
            easeInOut(arcProgress),
            color
          );
        }
      }

      if (stopTime < 0) continue;

      // Node pop
      const popTime = clamp(stopTime / T.NODE_POP, 0, 1);
      const popScale = stopTime < T.NODE_POP ? easeOutBack(popTime) : 1;
      const nodeOpacity = clamp(stopTime / 0.3, 0, 1);
      const isActive = i === activeIndex;
      const color = journey[i].color || AMBER;

      drawNode(
        ctx,
        projectedCoords[i],
        color,
        easeOut(nodeOpacity),
        isActive,
        popScale,
        time
      );
    }

    ctx.restore(); // end clip + camera
  }

  // ── 4. Stop card ──
  if (activeIndex >= 0) {
    const stopStart = T.FIRST_NODE_DELAY + activeIndex * T.STOP_DURATION;
    const cardDelay = T.ARC_SETTLE + T.NODE_POP; // card appears after node pops
    const cardTime = mapTime - stopStart - cardDelay;
    const cardProgress = clamp(cardTime / T.CARD_SLIDE, 0, 1);

    if (cardProgress > 0) {
      drawStopCard(
        ctx,
        journey[activeIndex],
        activeIndex,
        stopCount,
        cardProgress
      );
    }
  }

  // ── 5. Hook ──
  const hookStart =
    totalDuration - T.HOOK_FADE - T.HOOK_HOLD - T.END_PAUSE;
  const hookTime = time - hookStart;
  const hookOpacity = clamp(hookTime / T.HOOK_FADE, 0, 1);
  if (hookOpacity > 0) {
    drawHook(ctx, hook, easeOut(hookOpacity));
  }

  // ── 6. Watermark ──
  drawWatermark(ctx);

  // ── 7. Film grain ──
  drawGrain(ctx, noiseCanvas);
}

// ── Font loading ──────────────────────────────────────────────────
async function loadFonts() {
  try {
    const cormorant = new FontFace(
      "Cormorant Garamond",
      "url(https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQ.woff2)",
      { weight: "600", style: "normal" }
    );
    const cormorantItalic = new FontFace(
      "Cormorant Garamond",
      "url(https://fonts.gstatic.com/s/cormorantgaramond/v16/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjuw-NxBg.woff2)",
      { weight: "400", style: "italic" }
    );
    const sourceSerif = new FontFace(
      "Source Serif 4",
      "url(https://fonts.gstatic.com/s/sourceserif4/v8/vEFy2_tTDB4M7-auWDN0ahZJW3IX2ih5nk3AucvUHf6OAVIJmeUDygwjihdqrhxR.woff2)",
      { weight: "400", style: "normal" }
    );
    const loaded = await Promise.all([
      cormorant.load(),
      cormorantItalic.load(),
      sourceSerif.load(),
    ]);
    loaded.forEach((f) => document.fonts.add(f));
  } catch {
    // Silently fall back to Georgia / system-ui
    console.warn("[Journey Export] Font loading failed, using fallbacks");
  }
}

// ── Main export function ──────────────────────────────────────────
export async function exportJourneyAnimation(
  options: ExportOptions
): Promise<Blob> {
  const { word, romanization, language, hook, journey, onProgress } = options;

  // Load fonts + world data in parallel
  const [landGeoJSON] = await Promise.all([loadWorldData(), loadFonts()]);
  const projection = setupProjection(journey);

  onProgress(5);

  // Pre-compute projected coordinates
  const projectedCoords: [number, number][] = journey.map((stop) => {
    const p = projection(stop.coordinates as [number, number]);
    return p ? [p[0], p[1]] : [MAP_AREA.width / 2, MAP_AREA.height / 2];
  });

  // Pre-compute camera states: [overview, stop0, stop1, ...]
  const overviewCam: Camera = {
    cx: MAP_AREA.width / 2,
    cy: MAP_AREA.height / 2,
    scale: 1.0,
  };
  const cameras: Camera[] = [overviewCam];
  for (const [px, py] of projectedCoords) {
    cameras.push({ cx: px, cy: py, scale: 2.0 });
  }

  // Pre-render noise canvas
  let noiseCanvas = createNoiseCanvas();
  let noiseFrame = 0;

  const totalDuration = calculateDuration(journey.length);
  const fps = 60;
  const totalFrames = Math.ceil(totalDuration * fps);

  const canvas = new OffscreenCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d")!;

  // Dynamic import mp4-muxer
  const { Muxer, ArrayBufferTarget } = await import("mp4-muxer");

  const target = new ArrayBufferTarget();
  const muxer = new Muxer({
    target,
    video: { codec: "avc", width: WIDTH, height: HEIGHT },
    fastStart: "in-memory",
  });

  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta ?? undefined),
    error: (e) => console.error("[Journey] VideoEncoder error:", e),
  });

  encoder.configure({
    codec: "avc1.640028",
    width: WIDTH,
    height: HEIGHT,
    bitrate: 3_000_000,
    bitrateMode: "variable",
    framerate: fps,
  });

  onProgress(10);

  // Render loop
  for (let i = 0; i < totalFrames; i++) {
    const timeSeconds = i / fps;

    // Refresh noise every 4 frames for film grain shimmer
    if (noiseFrame % 4 === 0) {
      noiseCanvas = createNoiseCanvas();
    }
    noiseFrame++;

    drawFrame(
      ctx as unknown as CanvasRenderingContext2D,
      timeSeconds,
      totalDuration,
      landGeoJSON,
      projection,
      journey,
      projectedCoords,
      cameras,
      word,
      romanization,
      language,
      hook,
      noiseCanvas
    );

    const frame = new VideoFrame(canvas, {
      timestamp: (i * 1_000_000) / fps,
      duration: 1_000_000 / fps,
    });

    const keyFrame = i % (fps * 2) === 0; // Keyframe every 2s
    encoder.encode(frame, { keyFrame });
    frame.close();

    // Yield to UI every 15 frames
    if (i % 15 === 0) {
      onProgress(10 + (i / totalFrames) * 85);
      await new Promise((r) => setTimeout(r, 0));
    }
  }

  await encoder.flush();
  encoder.close();
  muxer.finalize();

  onProgress(100);

  return new Blob([target.buffer], { type: "video/mp4" });
}
