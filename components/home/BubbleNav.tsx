"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const LERP = 0.10;
const FRICTION = 0.91;
const MAX_VEL = 0.015;
const IDLE_SPEED = 0.0008;
const DRAG_SENSITIVITY = 0.0035;
const MAX_ROT_X = Math.PI / 3; // ±60° vertical clamp
const MIN_RADIUS = 120;
const MAX_RADIUS = 500;

function fibonacciSphere(count: number): { lat: number; lon: number }[] {
  const points: { lat: number; lon: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (2 * (i + 0.5)) / count;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push({ lat: Math.asin(y), lon: Math.atan2(z, x) });
  }
  return points;
}

function project3D(
  lat: number, lon: number,
  rotX: number, rotY: number,
  radius: number, perspective: number,
  cx: number, cy: number
): { x: number; y: number; z: number; scale: number } {
  let x = Math.cos(lat) * Math.cos(lon);
  let y = Math.sin(lat);
  let z = Math.cos(lat) * Math.sin(lon);

  const cosRY = Math.cos(rotY), sinRY = Math.sin(rotY);
  const x1 = x * cosRY + z * sinRY;
  const z1 = -x * sinRY + z * cosRY;

  const cosRX = Math.cos(rotX), sinRX = Math.sin(rotX);
  const y2 = y * cosRX - z1 * sinRX;
  const z2 = y * sinRX + z1 * cosRX;

  const depth = perspective + z2 * radius;
  const projScale = perspective / Math.max(depth, 1);

  return {
    x: cx + x1 * radius * projScale,
    y: cy - y2 * radius * projScale,
    z: z2,
    scale: projScale,
  };
}

function lerpFn(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }

export default function BubbleNav() {
  const spherePoints = useMemo(() => fibonacciSphere(allWords.length), []);

  const [rendered, setRendered] = useState({ rx: 0, ry: 0, radius: 280 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewSize, setViewSize] = useState({ w: 800, h: 600 });

  const target = useRef({ rx: 0, ry: 0, radius: 280 });
  const vel = useRef({ rx: 0, ry: 0 });
  const dragging = useRef(false);
  const dragOrigin = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const moveDistRef = useRef(0);
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<number>(0);
  const lastInteraction = useRef(0);
  const pinchRef = useRef<{ dist: number; radius: number } | null>(null);

  // Animation loop
  useEffect(() => {
    let active = true;
    const tick = () => {
      if (!active) return;

      const now = Date.now();
      const idleTime = now - lastInteraction.current;

      if (!dragging.current) {
        // Apply momentum with high friction for quick settling
        target.current.rx += vel.current.rx;
        target.current.ry += vel.current.ry;
        vel.current.rx *= FRICTION;
        vel.current.ry *= FRICTION;
        if (Math.abs(vel.current.rx) < 0.0001) vel.current.rx = 0;
        if (Math.abs(vel.current.ry) < 0.0001) vel.current.ry = 0;

        // Gentle idle auto-rotation after momentum settles
        if (vel.current.rx === 0 && vel.current.ry === 0 && idleTime > 2000) {
          target.current.ry += IDLE_SPEED;
        }
      }

      // Clamp vertical rotation
      target.current.rx = clamp(target.current.rx, -MAX_ROT_X, MAX_ROT_X);

      // Lerp toward target
      const nrx = lerpFn(rendered.rx, target.current.rx, LERP);
      const nry = lerpFn(rendered.ry, target.current.ry, LERP);
      const nrad = lerpFn(rendered.radius, target.current.radius, LERP);

      const changed =
        Math.abs(nrx - rendered.rx) > 0.000005 ||
        Math.abs(nry - rendered.ry) > 0.000005 ||
        Math.abs(nrad - rendered.radius) > 0.05 ||
        vel.current.rx !== 0 ||
        vel.current.ry !== 0 ||
        (idleTime > 2000 && !dragging.current);

      if (changed) {
        setRendered({ rx: nrx, ry: nry, radius: nrad });
      }

      loopRef.current = requestAnimationFrame(tick);
    };
    loopRef.current = requestAnimationFrame(tick);
    return () => { active = false; cancelAnimationFrame(loopRef.current); };
  });

  // Viewport tracking
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setViewSize({ w: r.width, h: r.height });
      target.current.radius = Math.min(r.width, r.height) * 0.34;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wheel zoom (desktop only, non-passive)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastInteraction.current = Date.now();
      const delta = -e.deltaY * 0.25;
      target.current.radius = clamp(target.current.radius + delta, MIN_RADIUS, MAX_RADIUS);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Pointer handlers
  const onDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    setIsDragging(true);
    moveDistRef.current = 0;
    vel.current = { rx: 0, ry: 0 };
    lastInteraction.current = Date.now();
    dragOrigin.current = { x: e.clientX, y: e.clientY, rx: target.current.rx, ry: target.current.ry };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragOrigin.current.x;
    const dy = e.clientY - dragOrigin.current.y;
    moveDistRef.current = Math.sqrt(dx * dx + dy * dy);

    target.current.rx = clamp(
      dragOrigin.current.rx + dy * DRAG_SENSITIVITY,
      -MAX_ROT_X, MAX_ROT_X
    );
    target.current.ry = dragOrigin.current.ry - dx * DRAG_SENSITIVITY;

    // Velocity for momentum (clamped)
    const now = Date.now();
    const dt = now - lastPointer.current.t;
    if (dt > 0 && dt < 100) {
      vel.current.rx = clamp(
        ((e.clientY - lastPointer.current.y) * DRAG_SENSITIVITY / dt) * 16,
        -MAX_VEL, MAX_VEL
      );
      vel.current.ry = clamp(
        (-(e.clientX - lastPointer.current.x) * DRAG_SENSITIVITY / dt) * 16,
        -MAX_VEL, MAX_VEL
      );
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const onUp = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
    lastInteraction.current = Date.now();
  }, []);

  // Pinch zoom (mobile)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchRef.current = { dist: Math.hypot(dx, dy), radius: target.current.radius };
      lastInteraction.current = Date.now();
    }
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const ratio = Math.hypot(dx, dy) / pinchRef.current.dist;
      target.current.radius = clamp(pinchRef.current.radius * ratio, MIN_RADIUS, MAX_RADIUS);
      lastInteraction.current = Date.now();
    }
  }, []);

  const onTouchEnd = useCallback(() => { pinchRef.current = null; }, []);

  const wasDrag = useCallback(() => moveDistRef.current > 8, []);

  // Projection — gentler perspective for less distortion
  const perspective = rendered.radius * 3.5;
  const cx = viewSize.w / 2;
  const cy = viewSize.h / 2;

  const items = useMemo(() => {
    return allWords
      .map((word, i) => {
        const p = spherePoints[i];
        const proj = project3D(p.lat, p.lon, rendered.rx, rendered.ry, rendered.radius, perspective, cx, cy);
        return { word, ...proj };
      })
      .filter((it) => it.z > -0.3)
      .sort((a, b) => a.z - b.z);
  }, [spherePoints, rendered.rx, rendered.ry, rendered.radius, perspective, cx, cy]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {items.map((item) => (
        <BubbleItem
          key={item.word.slug}
          word={item.word}
          screenX={item.x}
          screenY={item.y}
          depth={item.z}
          projScale={item.scale}
          wasDrag={wasDrag}
        />
      ))}
    </div>
  );
}
