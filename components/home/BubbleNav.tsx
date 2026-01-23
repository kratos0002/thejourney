"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const BUBBLE_SIZE = 88;
const GAP = 14;
const CELL = BUBBLE_SIZE + GAP;

// Generate hex grid positions in concentric rings
function hexPositions(count: number): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const cx = 0;
  const cy = 0;

  // Center bubble
  positions.push({ x: cx, y: cy });
  if (count === 1) return positions;

  let ring = 1;
  while (positions.length < count) {
    const itemsInRing = 6 * ring;
    for (let i = 0; i < itemsInRing && positions.length < count; i++) {
      const side = Math.floor(i / ring);
      const offset = i % ring;
      const angle0 = (Math.PI / 3) * side + Math.PI / 6;
      const angle1 = (Math.PI / 3) * (side + 1) + Math.PI / 6;

      // Interpolate along the edge of the ring
      const t = offset / ring;
      const startX = cx + ring * CELL * Math.cos(angle0);
      const startY = cy + ring * CELL * Math.sin(angle0);
      const endX = cx + ring * CELL * Math.cos(angle1);
      const endY = cy + ring * CELL * Math.sin(angle1);

      positions.push({
        x: startX + (endX - startX) * t,
        y: startY + (endY - startY) * t,
      });
    }
    ring++;
  }

  return positions;
}

interface BubbleNavProps {
  searchQuery: string;
}

export default function BubbleNav({ searchQuery }: BubbleNavProps) {
  const positions = useMemo(() => hexPositions(allWords.length), []);

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

  // Pan/zoom state
  const [scale, setScale] = useState(0.85);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0, t: 0 });
  const animRef = useRef<number | null>(null);

  // Pinch state
  const pinchStart = useRef<{ dist: number; scale: number } | null>(null);

  // Zoom with wheel
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      setScale((s) => Math.max(0.4, Math.min(2.2, s + delta)));
    },
    []
  );

  // Pan: pointer down
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "touch" && e.isPrimary === false) return;
      // Cancel momentum
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY, tx: translate.x, ty: translate.y };
      lastPos.current = { x: e.clientX, y: e.clientY, t: Date.now() };
      velocityRef.current = { x: 0, y: 0 };
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [translate]
  );

  // Pan: pointer move
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStart.current) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setTranslate({
        x: dragStart.current.tx + dx,
        y: dragStart.current.ty + dy,
      });

      // Track velocity
      const now = Date.now();
      const dt = now - lastPos.current.t;
      if (dt > 0) {
        velocityRef.current = {
          x: (e.clientX - lastPos.current.x) / dt,
          y: (e.clientY - lastPos.current.y) / dt,
        };
      }
      lastPos.current = { x: e.clientX, y: e.clientY, t: now };
    },
    []
  );

  // Pan: pointer up with momentum
  const handlePointerUp = useCallback(() => {
    if (!dragStart.current) return;
    setIsDragging(false);
    dragStart.current = null;

    // Apply inertia
    let vx = velocityRef.current.x * 12;
    let vy = velocityRef.current.y * 12;
    const friction = 0.93;

    const animate = () => {
      if (Math.abs(vx) < 0.5 && Math.abs(vy) < 0.5) {
        animRef.current = null;
        return;
      }
      vx *= friction;
      vy *= friction;
      setTranslate((prev) => ({ x: prev.x + vx, y: prev.y + vy }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  }, []);

  // Touch: pinch zoom
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStart.current = { dist: Math.hypot(dx, dy), scale };
      }
    },
    [scale]
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / pinchStart.current.dist;
      setScale(Math.max(0.4, Math.min(2.2, pinchStart.current.scale * ratio)));
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    pinchStart.current = null;
  }, []);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Center of the hex grid for offset
  const gridCenter = useMemo(() => {
    if (positions.length === 0) return { x: 0, y: 0 };
    const xs = positions.map((p) => p.x);
    const ys = positions.map((p) => p.y);
    return {
      x: (Math.min(...xs) + Math.max(...xs)) / 2,
      y: (Math.min(...ys) + Math.max(...ys)) / 2,
    };
  }, [positions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] sm:min-h-[600px] overflow-hidden rounded-2xl select-none"
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
      {/* Zoom hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] text-fog/40 font-body pointer-events-none">
        Scroll to zoom · Drag to pan
      </div>

      {/* Transformable inner container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
          willChange: "transform",
        }}
      >
        {allWords.map((word, index) => {
          const pos = positions[index];
          const isVisible = filteredWords.includes(word);
          return (
            <BubbleItem
              key={word.slug}
              word={word}
              x={pos.x - gridCenter.x}
              y={pos.y - gridCenter.y}
              dimmed={!isVisible && searchQuery.trim().length > 0}
              scale={scale}
            />
          );
        })}
      </div>

      {/* No results message */}
      {searchQuery.trim() && filteredWords.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-fog/50 font-body text-sm">
            No words match &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
