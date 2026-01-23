"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const MIN_RADIUS = 150;
const MAX_RADIUS = 600;
const LERP_SPEED = 0.1; // Smoothing factor (0 = frozen, 1 = instant)

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
  let x = Math.cos(lat) * Math.cos(lon);
  let y = Math.sin(lat);
  let z = Math.cos(lat) * Math.sin(lon);

  // Apply Y rotation
  const cosRY = Math.cos(rotY);
  const sinRY = Math.sin(rotY);
  const x1 = x * cosRY + z * sinRY;
  const z1 = -x * sinRY + z * cosRY;

  // Apply X rotation
  const cosRX = Math.cos(rotX);
  const sinRX = Math.sin(rotX);
  const y2 = y * cosRX - z1 * sinRX;
  const z2 = y * sinRX + z1 * cosRX;

  const sx = x1 * radius;
  const sy = y2 * radius;
  const sz = z2 * radius;

  const depth = perspective + sz;
  const projScale = perspective / Math.max(depth, 1);

  return {
    x: centerX + sx * projScale,
    y: centerY - sy * projScale,
    z: z2,
    scale: projScale,
  };
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
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

  // Rendered state (what React draws — smoothly interpolated)
  const [rendered, setRendered] = useState({ rx: 0, ry: 0, radius: 280 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewSize, setViewSize] = useState({ w: 800, h: 600 });

  // Target state (what user input drives — updated immediately)
  const target = useRef({ rx: 0, ry: 0, radius: 280 });
  const velocity = useRef({ rx: 0, ry: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);
  const moveDistance = useRef(0);
  const lastPos = useRef<{ x: number; y: number; t: number }>({ x: 0, y: 0, t: 0 });
  const loopRef = useRef<number | null>(null);
  const pinchStart = useRef<{ dist: number; radius: number } | null>(null);

  // Continuous animation loop — lerps rendered values toward target
  useEffect(() => {
    let running = true;

    const tick = () => {
      if (!running) return;

      // Apply momentum when not dragging
      if (!dragStart.current) {
        target.current.rx += velocity.current.rx;
        target.current.ry += velocity.current.ry;
        velocity.current.rx *= 0.96;
        velocity.current.ry *= 0.96;
        if (Math.abs(velocity.current.rx) < 0.00005) velocity.current.rx = 0;
        if (Math.abs(velocity.current.ry) < 0.00005) velocity.current.ry = 0;
      }

      setRendered((prev) => {
        const rx = lerp(prev.rx, target.current.rx, LERP_SPEED);
        const ry = lerp(prev.ry, target.current.ry, LERP_SPEED);
        const radius = lerp(prev.radius, target.current.radius, LERP_SPEED);

        // Skip update if difference is negligible
        if (
          Math.abs(rx - prev.rx) < 0.00001 &&
          Math.abs(ry - prev.ry) < 0.00001 &&
          Math.abs(radius - prev.radius) < 0.01 &&
          velocity.current.rx === 0 &&
          velocity.current.ry === 0
        ) {
          loopRef.current = requestAnimationFrame(tick);
          return prev;
        }

        return { rx, ry, radius };
      });

      loopRef.current = requestAnimationFrame(tick);
    };

    loopRef.current = requestAnimationFrame(tick);
    return () => {
      running = false;
      if (loopRef.current) cancelAnimationFrame(loopRef.current);
    };
  }, []);

  // Track viewport
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setViewSize({ w: rect.width, h: rect.height });
        const r = Math.min(rect.width, rect.height) * 0.32;
        target.current.radius = r;
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll = zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.3;
    target.current.radius = Math.max(
      MIN_RADIUS,
      Math.min(MAX_RADIUS, target.current.radius + delta)
    );
  }, []);

  // Drag = rotate
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    velocity.current = { rx: 0, ry: 0 };
    setIsDragging(true);
    moveDistance.current = 0;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rx: target.current.rx,
      ry: target.current.ry,
    };
    lastPos.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    moveDistance.current = Math.sqrt(dx * dx + dy * dy);

    target.current.rx = dragStart.current.rx + dy * 0.004;
    target.current.ry = dragStart.current.ry - dx * 0.004;

    // Track velocity for momentum
    const now = Date.now();
    const dt = now - lastPos.current.t;
    if (dt > 0 && dt < 100) {
      velocity.current = {
        rx: ((e.clientY - lastPos.current.y) * 0.004) / dt * 16,
        ry: (-(e.clientX - lastPos.current.x) * 0.004) / dt * 16,
      };
    }
    lastPos.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!dragStart.current) return;
    setIsDragging(false);
    dragStart.current = null;
    // Momentum is already stored in velocity.current — the loop applies it
  }, []);

  // Pinch to zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStart.current = { dist: Math.hypot(dx, dy), radius: target.current.radius };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / pinchStart.current.dist;
      target.current.radius = Math.max(
        MIN_RADIUS,
        Math.min(MAX_RADIUS, pinchStart.current.radius * ratio)
      );
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    pinchStart.current = null;
  }, []);

  const wasDrag = useCallback(() => moveDistance.current > 6, []);

  // Project all points with the smoothly interpolated state
  const perspective = rendered.radius * 2.8;
  const centerX = viewSize.w / 2;
  const centerY = viewSize.h / 2;

  const projectedItems = useMemo(() => {
    return allWords
      .map((word, index) => {
        const point = spherePoints[index];
        const projected = project3D(
          point.lat,
          point.lon,
          rendered.rx,
          rendered.ry,
          rendered.radius,
          perspective,
          centerX,
          centerY
        );
        return { word, index, ...projected };
      })
      .filter((item) => item.z > -0.3)
      .sort((a, b) => a.z - b.z);
  }, [spherePoints, rendered.rx, rendered.ry, rendered.radius, perspective, centerX, centerY]);

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

      {/* Projected bubbles */}
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
