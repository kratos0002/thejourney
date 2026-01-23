"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const MIN_RADIUS = 150;
const MAX_RADIUS = 600;
const LERP = 0.12;

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

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export default function BubbleNav() {
  const spherePoints = useMemo(() => fibonacciSphere(allWords.length), []);

  // Smooth rendered state
  const [rendered, setRendered] = useState({ rx: 0, ry: 0, radius: 280 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewSize, setViewSize] = useState({ w: 800, h: 600 });

  // Mutable targets + velocity (no re-renders)
  const target = useRef({ rx: 0, ry: 0, radius: 280 });
  const vel = useRef({ rx: 0, ry: 0 });
  const dragging = useRef(false);
  const dragOrigin = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const moveDistRef = useRef(0);
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<number>(0);
  const pinchRef = useRef<{ dist: number; radius: number } | null>(null);

  // Animation loop
  useEffect(() => {
    let active = true;
    const tick = () => {
      if (!active) return;

      // Momentum (when not dragging)
      if (!dragging.current) {
        target.current.rx += vel.current.rx;
        target.current.ry += vel.current.ry;
        vel.current.rx *= 0.95;
        vel.current.ry *= 0.95;
        if (Math.abs(vel.current.rx) < 0.00002) vel.current.rx = 0;
        if (Math.abs(vel.current.ry) < 0.00002) vel.current.ry = 0;
      }

      // Lerp toward target
      const nrx = lerp(rendered.rx, target.current.rx, LERP);
      const nry = lerp(rendered.ry, target.current.ry, LERP);
      const nrad = lerp(rendered.radius, target.current.radius, LERP);

      // Only update if meaningful change
      const changed =
        Math.abs(nrx - rendered.rx) > 0.000005 ||
        Math.abs(nry - rendered.ry) > 0.000005 ||
        Math.abs(nrad - rendered.radius) > 0.05 ||
        vel.current.rx !== 0 ||
        vel.current.ry !== 0;

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
      target.current.radius = Math.min(r.width, r.height) * 0.32;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wheel zoom (non-passive for preventDefault)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY * 0.3;
      target.current.radius = Math.max(MIN_RADIUS, Math.min(MAX_RADIUS, target.current.radius + delta));
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
    dragOrigin.current = { x: e.clientX, y: e.clientY, rx: target.current.rx, ry: target.current.ry };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragOrigin.current.x;
    const dy = e.clientY - dragOrigin.current.y;
    moveDistRef.current = Math.sqrt(dx * dx + dy * dy);

    target.current.rx = dragOrigin.current.rx + dy * 0.004;
    target.current.ry = dragOrigin.current.ry - dx * 0.004;

    const now = Date.now();
    const dt = now - lastPointer.current.t;
    if (dt > 0 && dt < 80) {
      vel.current.rx = ((e.clientY - lastPointer.current.y) * 0.004 / dt) * 16;
      vel.current.ry = (-(e.clientX - lastPointer.current.x) * 0.004 / dt) * 16;
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const onUp = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
  }, []);

  // Touch pinch
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchRef.current = { dist: Math.hypot(dx, dy), radius: target.current.radius };
    }
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const ratio = Math.hypot(dx, dy) / pinchRef.current.dist;
      target.current.radius = Math.max(MIN_RADIUS, Math.min(MAX_RADIUS, pinchRef.current.radius * ratio));
    }
  }, []);

  const onTouchEnd = useCallback(() => { pinchRef.current = null; }, []);

  const wasDrag = useCallback(() => moveDistRef.current > 8, []);

  // Projection
  const perspective = rendered.radius * 2.8;
  const cx = viewSize.w / 2;
  const cy = viewSize.h / 2;

  const items = useMemo(() => {
    return allWords
      .map((word, i) => {
        const p = spherePoints[i];
        const proj = project3D(p.lat, p.lon, rendered.rx, rendered.ry, rendered.radius, perspective, cx, cy);
        return { word, ...proj };
      })
      .filter((it) => it.z > -0.2)
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[10px] text-fog/30 font-body pointer-events-none tracking-wider">
        scroll to zoom · drag to rotate
      </div>

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
