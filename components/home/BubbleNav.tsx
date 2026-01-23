"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const MIN_RADIUS = 150;
const MAX_RADIUS = 600;

// Fibonacci sphere: distribute N points evenly on a sphere surface
function fibonacciSphere(count: number): { lat: number; lon: number }[] {
  const points: { lat: number; lon: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (2 * (i + 0.5)) / count;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    const lat = Math.asin(y);
    const lon = Math.atan2(z, x);

    points.push({ lat, lon });
  }

  return points;
}

// Project a 3D sphere point to 2D screen coordinates
function project3D(
  lat: number,
  lon: number,
  rotX: number,
  rotY: number,
  radius: number,
  perspective: number,
  centerX: number,
  centerY: number
): { x: number; y: number; z: number; scale: number } {
  // Point on unit sphere
  let x = Math.cos(lat) * Math.cos(lon);
  let y = Math.sin(lat);
  let z = Math.cos(lat) * Math.sin(lon);

  // Apply Y rotation (horizontal drag)
  const cosRY = Math.cos(rotY);
  const sinRY = Math.sin(rotY);
  const x1 = x * cosRY + z * sinRY;
  const z1 = -x * sinRY + z * cosRY;

  // Apply X rotation (vertical drag)
  const cosRX = Math.cos(rotX);
  const sinRX = Math.sin(rotX);
  const y2 = y * cosRX - z1 * sinRX;
  const z2 = y * sinRX + z1 * cosRX;

  // Scale to sphere radius
  const sx = x1 * radius;
  const sy = y2 * radius;
  const sz = z2 * radius;

  // Perspective projection
  const depth = perspective + sz;
  const projScale = perspective / Math.max(depth, 1);

  return {
    x: centerX + sx * projScale,
    y: centerY - sy * projScale,
    z: z2, // -1 (back) to 1 (front)
    scale: projScale,
  };
}

interface BubbleNavProps {
  searchQuery: string;
}

export default function BubbleNav({ searchQuery }: BubbleNavProps) {
  const spherePoints = useMemo(() => fibonacciSphere(allWords.length), []);

  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return allWords;
    const q = searchQuery.toLowerCase().trim();
    return allWords.filter(
      (word) =>
        word.romanization.toLowerCase().includes(q) ||
        word.language.toLowerCase().includes(q) ||
        word.word.includes(q) ||
        word.slug.toLowerCase().includes(q) ||
        word.hook.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Sphere state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [viewSize, setViewSize] = useState({ w: 800, h: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);
  const moveDistance = useRef(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef<{ x: number; y: number; t: number }>({ x: 0, y: 0, t: 0 });
  const animRef = useRef<number | null>(null);
  const pinchStart = useRef<{ dist: number; radius: number } | null>(null);

  // Track viewport
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setViewSize({ w: rect.width, h: rect.height });
        setRadius(Math.min(rect.width, rect.height) * 0.32);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll = zoom (change radius)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.4;
    setRadius((r) => Math.max(MIN_RADIUS, Math.min(MAX_RADIUS, r + delta)));
  }, []);

  // Drag = rotate sphere
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
      setIsDragging(true);
      moveDistance.current = 0;
      dragStart.current = { x: e.clientX, y: e.clientY, rx: rotation.x, ry: rotation.y };
      lastPos.current = { x: e.clientX, y: e.clientY, t: Date.now() };
      velocityRef.current = { x: 0, y: 0 };
    },
    [rotation]
  );

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    moveDistance.current = Math.sqrt(dx * dx + dy * dy);

    setRotation({
      x: dragStart.current.rx + dy * 0.005,
      y: dragStart.current.ry - dx * 0.005,
    });

    const now = Date.now();
    const dt = now - lastPos.current.t;
    if (dt > 0) {
      velocityRef.current = {
        x: (e.clientY - lastPos.current.y) / dt,
        y: (e.clientX - lastPos.current.x) / dt,
      };
    }
    lastPos.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!dragStart.current) return;
    setIsDragging(false);
    dragStart.current = null;

    let vx = velocityRef.current.x * 0.04;
    let vy = -velocityRef.current.y * 0.04;
    const friction = 0.95;

    const animate = () => {
      if (Math.abs(vx) < 0.0001 && Math.abs(vy) < 0.0001) {
        animRef.current = null;
        return;
      }
      vx *= friction;
      vy *= friction;
      setRotation((prev) => ({ x: prev.x + vx, y: prev.y + vy }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  }, []);

  // Pinch to zoom
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStart.current = { dist: Math.hypot(dx, dy), radius };
      }
    },
    [radius]
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / pinchStart.current.dist;
      setRadius(Math.max(MIN_RADIUS, Math.min(MAX_RADIUS, pinchStart.current.radius * ratio)));
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    pinchStart.current = null;
  }, []);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const wasDrag = useCallback(() => moveDistance.current > 6, []);

  // Project all points and sort by depth for proper layering
  const perspective = radius * 2.8;
  const centerX = viewSize.w / 2;
  const centerY = viewSize.h / 2;

  const projectedItems = useMemo(() => {
    return allWords.map((word, index) => {
      const point = spherePoints[index];
      const projected = project3D(
        point.lat,
        point.lon,
        rotation.x,
        rotation.y,
        radius,
        perspective,
        centerX,
        centerY
      );
      return { word, index, ...projected };
    })
    .filter((item) => item.z > -0.3) // Cull far backside
    .sort((a, b) => a.z - b.z); // Paint back-to-front
  }, [spherePoints, rotation.x, rotation.y, radius, perspective, centerX, centerY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[10px] text-fog/30 font-body pointer-events-none tracking-wider">
        scroll to zoom · drag to rotate
      </div>

      {/* Projected bubbles (always face camera) */}
      {projectedItems.map((item) => {
        const isVisible = filteredWords.includes(item.word);
        return (
          <BubbleItem
            key={item.word.slug}
            word={item.word}
            screenX={item.x}
            screenY={item.y}
            depth={item.z}
            projScale={item.scale}
            dimmed={!isVisible && searchQuery.trim().length > 0}
            wasDrag={wasDrag}
          />
        );
      })}

      {/* No results */}
      {searchQuery.trim() && filteredWords.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <p className="text-fog/50 font-body text-sm">
            No words match &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
