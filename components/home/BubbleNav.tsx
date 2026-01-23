"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

// Fibonacci sphere: distribute N points evenly on a sphere surface
function fibonacciSphere(count: number): { lat: number; lon: number }[] {
  const points: { lat: number; lon: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399

  for (let i = 0; i < count; i++) {
    // y goes from 1 to -1 (top to bottom)
    const y = 1 - (2 * (i + 0.5)) / count;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Convert to lat/lon (degrees)
    const lat = Math.asin(y) * (180 / Math.PI);
    const lon = Math.atan2(z, x) * (180 / Math.PI);

    points.push({ lat, lon });
  }

  return points;
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

  // Sphere rotation state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(320);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);
  const moveDistance = useRef(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef<{ x: number; y: number; t: number }>({ x: 0, y: 0, t: 0 });
  const animRef = useRef<number | null>(null);

  // Pinch state
  const pinchStart = useRef<{ dist: number; radius: number } | null>(null);

  // Compute responsive radius
  useEffect(() => {
    const update = () => {
      const size = Math.min(window.innerWidth, window.innerHeight);
      setRadius(size * 0.35);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Zoom: scroll changes sphere radius (closer/further)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.5;
    setRadius((r) => Math.max(150, Math.min(600, r + delta)));
  }, []);

  // Drag: rotate sphere
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

    // Map drag to sphere rotation (invert Y for natural feel)
    setRotation({
      x: dragStart.current.rx - dy * 0.3,
      y: dragStart.current.ry + dx * 0.3,
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

    // Momentum rotation
    let vx = -velocityRef.current.x * 8;
    let vy = velocityRef.current.y * 8;
    const friction = 0.95;

    const animate = () => {
      if (Math.abs(vx) < 0.02 && Math.abs(vy) < 0.02) {
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

  // Pinch to zoom (change radius)
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
      setRadius(Math.max(150, Math.min(600, pinchStart.current.radius * ratio)));
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

  // Compute each bubble's 3D position after sphere rotation
  const perspective = radius * 2.5;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none flex items-center justify-center"
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

      {/* 3D sphere container */}
      <div
        style={{
          perspective: `${perspective}px`,
          perspectiveOrigin: "50% 50%",
          width: radius * 2,
          height: radius * 2,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? "none" : "transform 0.05s ease-out",
          }}
        >
          {allWords.map((word, index) => {
            const point = spherePoints[index];
            const isVisible = filteredWords.includes(word);

            return (
              <BubbleItem
                key={word.slug}
                word={word}
                lat={point.lat}
                lon={point.lon}
                radius={radius}
                dimmed={!isVisible && searchQuery.trim().length > 0}
                wasDrag={wasDrag}
                sphereRotation={rotation}
              />
            );
          })}
        </div>
      </div>

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
