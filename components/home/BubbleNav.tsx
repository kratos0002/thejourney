"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { allWords } from "@/data/words";
import BubbleItem from "./BubbleItem";

const BUBBLE_SIZE = 82;
const GAP = 10;
const CELL = BUBBLE_SIZE + GAP;

// Generate hex grid positions in concentric rings
function hexPositions(count: number): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];

  // Center bubble
  positions.push({ x: 0, y: 0 });
  if (count === 1) return positions;

  let ring = 1;
  while (positions.length < count) {
    for (let i = 0; i < 6 * ring && positions.length < count; i++) {
      const side = Math.floor(i / ring);
      const offset = i % ring;
      const angle0 = (Math.PI / 3) * side - Math.PI / 6;
      const angle1 = (Math.PI / 3) * (side + 1) - Math.PI / 6;

      const t = ring === 0 ? 0 : offset / ring;
      const sx = ring * CELL * Math.cos(angle0);
      const sy = ring * CELL * Math.sin(angle0);
      const ex = ring * CELL * Math.cos(angle1);
      const ey = ring * CELL * Math.sin(angle1);

      positions.push({
        x: sx + (ex - sx) * t,
        y: sy + (ey - sy) * t,
      });
    }
    ring++;
  }

  return positions;
}

// Sphere distortion: scale based on distance from viewport center
function sphereScale(
  bubbleScreenX: number,
  bubbleScreenY: number,
  viewW: number,
  viewH: number
): number {
  const cx = viewW / 2;
  const cy = viewH / 2;
  const dx = (bubbleScreenX - cx) / cx;
  const dy = (bubbleScreenY - cy) / cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Cosine falloff for sphere-like distortion
  const normalized = Math.min(dist, 1.4);
  const s = Math.cos(normalized * (Math.PI / 2.8));
  return Math.max(0.25, s);
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

  // Pan state
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewSize, setViewSize] = useState({ w: 800, h: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const moveDistance = useRef(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0, t: 0 });
  const animRef = useRef<number | null>(null);

  // Pinch state
  const pinchStart = useRef<{ dist: number; tx: number; ty: number } | null>(null);

  // Track viewport size
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setViewSize({ w: rect.width, h: rect.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Pan: pointer down
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if ((e.target as HTMLElement).closest("[data-bubble]")) {
        // Let bubble handle its own events
      }
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
      setIsDragging(true);
      moveDistance.current = 0;
      dragStart.current = { x: e.clientX, y: e.clientY, tx: translate.x, ty: translate.y };
      lastPos.current = { x: e.clientX, y: e.clientY, t: Date.now() };
      velocityRef.current = { x: 0, y: 0 };
    },
    [translate]
  );

  // Pan: pointer move
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    moveDistance.current = Math.sqrt(dx * dx + dy * dy);

    setTranslate({
      x: dragStart.current.tx + dx,
      y: dragStart.current.ty + dy,
    });

    // Track velocity for momentum
    const now = Date.now();
    const dt = now - lastPos.current.t;
    if (dt > 0) {
      velocityRef.current = {
        x: (e.clientX - lastPos.current.x) / dt,
        y: (e.clientY - lastPos.current.y) / dt,
      };
    }
    lastPos.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  // Pan: pointer up with momentum
  const handlePointerUp = useCallback(() => {
    if (!dragStart.current) return;
    setIsDragging(false);
    dragStart.current = null;

    // Apply inertia
    let vx = velocityRef.current.x * 14;
    let vy = velocityRef.current.y * 14;
    const friction = 0.92;

    const animate = () => {
      if (Math.abs(vx) < 0.3 && Math.abs(vy) < 0.3) {
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

  // Touch: pinch to pan faster (two-finger drag)
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStart.current = {
          dist: Math.hypot(dx, dy),
          tx: mx,
          ty: my,
        };
      }
    },
    []
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const dmx = mx - pinchStart.current.tx;
      const dmy = my - pinchStart.current.ty;
      setTranslate((prev) => ({ x: prev.x + dmx * 0.5, y: prev.y + dmy * 0.5 }));
      pinchStart.current.tx = mx;
      pinchStart.current.ty = my;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    pinchStart.current = null;
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Was this a click (minimal movement) or a drag?
  const wasDrag = useCallback(() => moveDistance.current > 6, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[10px] text-fog/30 font-body pointer-events-none tracking-wider">
        drag to explore
      </div>

      {/* Bubbles rendered with sphere distortion */}
      {allWords.map((word, index) => {
        const pos = positions[index];
        const isVisible = filteredWords.includes(word);

        // Bubble's screen position (center of viewport + offset + pan)
        const screenX = viewSize.w / 2 + pos.x + translate.x;
        const screenY = viewSize.h / 2 + pos.y + translate.y;
        const bubbleScale = sphereScale(screenX, screenY, viewSize.w, viewSize.h);

        return (
          <BubbleItem
            key={word.slug}
            word={word}
            screenX={screenX}
            screenY={screenY}
            bubbleScale={bubbleScale}
            dimmed={!isVisible && searchQuery.trim().length > 0}
            wasDrag={wasDrag}
          />
        );
      })}

      {/* No results */}
      {searchQuery.trim() && filteredWords.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <p className="text-fog/50 font-body text-sm">
            No words match &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
