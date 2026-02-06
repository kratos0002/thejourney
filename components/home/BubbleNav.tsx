"use client";

import { useRef, useCallback, useMemo, useEffect } from "react";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";
import { useExploration } from "@/components/ExplorationProvider";
import { useTheme } from "@/components/ThemeProvider";

// ---------------------------------------------------------------------------
// Globe animation constants
// ---------------------------------------------------------------------------

const LERP = 0.10;
const FRICTION = 0.91;
const MAX_VEL = 0.015;
const IDLE_SPEED = 0.0008;
const DRAG_SENSITIVITY = 0.0035;
const MAX_ROT_X = Math.PI / 3;
const MIN_RADIUS = 120;
const MAX_RADIUS = 500;

// ---------------------------------------------------------------------------
// Depth layer constants — controls which bubbles show text
// ---------------------------------------------------------------------------

/** z2 threshold: bubbles above this show full-size text (desktop) */
const SURFACE_Z = 0.65;
/** z2 threshold on mobile — fewer surface words to reduce clutter */
const SURFACE_Z_MOBILE = 0.75;
/** z2 threshold: mid-depth band (between MID_Z and SURFACE_Z) */
const MID_Z = 0.0;

/** Surface bubbles use full perspective scale */
const SURFACE_SCALE = 1.0;
/** Mid-depth: small orbs (~1.2rem when base is 4rem) */
const MID_SCALE = 0.3;
/** Deep: tiny dots (~0.5rem) */
const DEEP_SCALE = 0.125;

/** Smooth size interpolation per frame (~300-500ms transition at 60fps) */
const SIZE_LERP = 0.08;
/** Hysteresis band to prevent text flicker at layer boundary */
const TEXT_HYSTERESIS = 0.05;
/** Explored words get a small z2 boost toward the surface */
const EXPLORED_BOOST = 0.05;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }
function lerpFn(a: number, b: number, t: number) { return a + (b - a) * t; }

function getLanguageTint(language: string): string {
  const lang = language.toLowerCase();
  // Derive tint from origin language — higher opacity for better visibility
  if (lang.includes("arabic") || lang.includes("swahili"))
    return "rgba(212, 165, 116, 0.55)"; // amber — Semitic
  if (lang.includes("sanskrit") || lang.includes("hindi") || lang.includes("pali"))
    return "rgba(184, 122, 75, 0.55)"; // copper — Indic
  if (lang.includes("persian"))
    return "rgba(180, 130, 100, 0.5)"; // warm sand — Iranian
  if (lang.includes("japanese") || lang.includes("chinese") || lang.includes("hokkien"))
    return "rgba(74, 144, 144, 0.6)"; // teal — East Asian
  if (lang.includes("french") || lang.includes("italian") || lang.includes("spanish") || lang.includes("portuguese") || lang.includes("latin"))
    return "rgba(100, 140, 200, 0.55)"; // blue — Romance
  if (lang.includes("german") || lang.includes("dutch") || lang.includes("norse") || lang.includes("yiddish"))
    return "rgba(160, 160, 190, 0.5)"; // silver — Germanic
  if (lang.includes("malay") || lang.includes("tahitian") || lang.includes("samoan") || lang.includes("tongan"))
    return "rgba(80, 180, 180, 0.55)"; // turquoise — Austronesian
  if (lang.includes("nahuatl") || lang.includes("dharug") || lang.includes("zulu"))
    return "rgba(120, 180, 100, 0.55)"; // green — Indigenous
  if (lang.includes("greek"))
    return "rgba(150, 130, 200, 0.55)"; // violet — Greek
  if (lang.includes("turkish"))
    return "rgba(190, 110, 110, 0.5)"; // muted red — Turkic
  if (lang.includes("czech"))
    return "rgba(150, 140, 190, 0.5)"; // muted purple — Slavic
  return "rgba(240, 237, 230, 0.25)"; // default moonlight
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface BubbleNavProps {
  words: Word[];
  filteredSlugs?: Set<string>;
  hasActiveFilters?: boolean;
  /** The top search result slug — gets the amber glow ring */
  highlightedSlug?: string | null;
  /** The hook text of the highlighted word — shown as a floating label */
  highlightedHook?: string | null;
  /** Slug of the daily featured word — always promoted to surface */
  dailyWordSlug?: string | null;
  /** Enable depth layers mode (feature flag gated) */
  depthLayers?: boolean;
}

export default function BubbleNav({
  words,
  filteredSlugs,
  hasActiveFilters = false,
  highlightedSlug = null,
  highlightedHook = null,
  dailyWordSlug = null,
  depthLayers = false,
}: BubbleNavProps) {
  const { navigateToWord } = useTransition();
  const { exploredSlugs } = useExploration();
  const { classroomMode } = useTheme();
  const spherePoints = useMemo(() => fibonacciSphere(words.length), [words.length]);

  // Store filter state in refs for use in animation loop (no React re-renders)
  const filteredSlugsRef = useRef<Set<string>>(filteredSlugs || new Set());
  const hasActiveFiltersRef = useRef(hasActiveFilters);

  // Depth layer refs — synced from props for use in the rAF loop
  const depthLayersRef = useRef(false);
  const dailyWordSlugRef = useRef<string | null>(null);
  const highlightedSlugRef = useRef<string | null>(null);
  const exploredSlugsRef = useRef<Set<string>>(new Set());

  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const loopRef = useRef<number>(0);

  // Per-bubble lerped scale for smooth depth transitions (Float32Array: compact, no GC)
  const layerScales = useRef<Float32Array>(new Float32Array(0));

  const anim = useRef({ rx: 0, ry: 0, radius: 280 });
  const target = useRef({ rx: 0, ry: 0, radius: 280 });
  const vel = useRef({ rx: 0, ry: 0 });
  const dragging = useRef(false);
  const dragOrigin = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const moveDistRef = useRef(0);
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });
  const lastInteraction = useRef(0);
  const pinchRef = useRef<{ dist: number; radius: number } | null>(null);
  const viewSize = useRef({ w: 800, h: 600, mobile: false });

  // Initialize layerScales when word count changes
  useEffect(() => {
    layerScales.current = new Float32Array(words.length).fill(1.0);
  }, [words.length]);

  // ---------------------------------------------------------------------------
  // updateBubbles — the core rendering loop (compositor-only: transform + opacity)
  // ---------------------------------------------------------------------------

  const updateBubbles = useCallback(() => {
    const { rx, ry, radius } = anim.current;
    const perspective = radius * 3.5;
    const cx = viewSize.current.w / 2;
    const cy = viewSize.current.h / 2;

    const cosRY = Math.cos(ry), sinRY = Math.sin(ry);
    const cosRX = Math.cos(rx), sinRX = Math.sin(rx);

    const isFiltering = hasActiveFiltersRef.current;
    const filtered = filteredSlugsRef.current;
    const useDepth = depthLayersRef.current;
    const surfaceZ = viewSize.current.mobile ? SURFACE_Z_MOBILE : SURFACE_Z;

    for (let i = 0; i < words.length; i++) {
      const el = bubbleRefs.current[i];
      if (!el) continue;

      const word = words[i];
      const p = spherePoints[i];
      const x = Math.cos(p.lat) * Math.cos(p.lon);
      const y = Math.sin(p.lat);
      const z = Math.cos(p.lat) * Math.sin(p.lon);

      const x1 = x * cosRY + z * sinRY;
      const z1 = -x * sinRY + z * cosRY;
      const y2 = y * cosRX - z1 * sinRX;
      const z2 = y * sinRX + z1 * cosRX;

      const depth = perspective + z2 * radius;
      const projScale = perspective / Math.max(depth, 1);
      const screenX = cx + x1 * radius * projScale;
      const screenY = cy - y2 * radius * projScale;

      // Back-face cull — hide bubbles facing away
      if (z2 < -0.3) {
        el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) scale(0)`;
        el.style.opacity = "0";
        if (useDepth) {
          const textEl = textRefs.current[i];
          if (textEl) textEl.style.opacity = "0";
        }
        continue;
      }

      let opacity = Math.max(0, Math.min(1, (z2 + 0.3) * 0.9));
      const isMatch = !isFiltering || filtered.has(word.slug);

      if (useDepth) {
        // --- Depth layers mode ---
        const isHighlighted = word.slug === highlightedSlugRef.current;
        const isDailyWord = word.slug === dailyWordSlugRef.current;
        const isExplored = exploredSlugsRef.current.has(word.slug);
        const forcePromote = isHighlighted || isDailyWord || (isFiltering && isMatch);

        // Effective z2 with explored boost
        const effectiveZ2 = isExplored ? z2 + EXPLORED_BOOST : z2;

        // Determine layer and target scale
        let targetScale: number;
        let showText: boolean;

        if (forcePromote) {
          // Force-promoted: full size with text
          targetScale = projScale * SURFACE_SCALE;
          showText = true;
        } else if (effectiveZ2 >= surfaceZ) {
          // Surface layer: close to viewer
          targetScale = projScale * SURFACE_SCALE;
          showText = true;
        } else if (effectiveZ2 >= MID_Z) {
          // Mid-depth: small orbs, no text
          targetScale = MID_SCALE;
          showText = false;
          opacity *= 0.5;
        } else {
          // Deep: tiny dots, very faint
          targetScale = DEEP_SCALE;
          showText = false;
          opacity *= 0.25;
        }

        // Filter dimming stacks on top of layer opacity
        if (isFiltering && !isMatch) {
          opacity *= 0.15;
          targetScale *= 0.85;
        }

        // Smooth scale interpolation — prevents jarring pops between layers
        const currentScale = layerScales.current[i];
        const newScale = currentScale + (targetScale - currentScale) * SIZE_LERP;
        layerScales.current[i] = newScale;

        el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) scale(${newScale})`;
        el.style.opacity = `${opacity}`;

        // Toggle text with hysteresis to prevent flicker at boundary
        const textEl = textRefs.current[i];
        if (textEl) {
          if (showText) {
            textEl.style.opacity = "1";
          } else if (effectiveZ2 < surfaceZ - TEXT_HYSTERESIS) {
            textEl.style.opacity = "0";
          }
          // Between surfaceZ and surfaceZ - HYSTERESIS: keep current text state
        }
      } else {
        // --- Legacy mode (no depth layers) ---
        let scale = projScale;
        if (isFiltering && !isMatch) {
          opacity *= 0.15;
          scale *= 0.85;
        }
        el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) scale(${scale})`;
        el.style.opacity = `${opacity}`;
      }
    }
  }, [spherePoints, words]);

  // ---------------------------------------------------------------------------
  // Ref sync — keep refs in sync with props for the animation loop
  // ---------------------------------------------------------------------------

  // Keep filter refs in sync with props and trigger update
  useEffect(() => {
    filteredSlugsRef.current = filteredSlugs || new Set();
    hasActiveFiltersRef.current = hasActiveFilters;
    updateBubbles();
  }, [filteredSlugs, hasActiveFilters, updateBubbles]);

  // Keep depth layer refs in sync
  useEffect(() => {
    depthLayersRef.current = depthLayers;
    dailyWordSlugRef.current = dailyWordSlug;
    highlightedSlugRef.current = highlightedSlug;
    exploredSlugsRef.current = exploredSlugs;
    updateBubbles();
  }, [depthLayers, dailyWordSlug, highlightedSlug, exploredSlugs, updateBubbles]);

  // ---------------------------------------------------------------------------
  // Animation loop — no React state, no layout-triggering properties
  // ---------------------------------------------------------------------------

  useEffect(() => {
    let active = true;
    const tick = () => {
      if (!active) return;

      const now = Date.now();
      const idleTime = now - lastInteraction.current;

      if (!dragging.current) {
        target.current.rx += vel.current.rx;
        target.current.ry += vel.current.ry;
        vel.current.rx *= FRICTION;
        vel.current.ry *= FRICTION;
        if (Math.abs(vel.current.rx) < 0.0001) vel.current.rx = 0;
        if (Math.abs(vel.current.ry) < 0.0001) vel.current.ry = 0;

        if (vel.current.rx === 0 && vel.current.ry === 0 && idleTime > 2000) {
          target.current.ry += IDLE_SPEED;
        }
      }

      target.current.rx = clamp(target.current.rx, -MAX_ROT_X, MAX_ROT_X);

      const nrx = lerpFn(anim.current.rx, target.current.rx, LERP);
      const nry = lerpFn(anim.current.ry, target.current.ry, LERP);
      const nrad = lerpFn(anim.current.radius, target.current.radius, LERP);

      const changed =
        Math.abs(nrx - anim.current.rx) > 0.00001 ||
        Math.abs(nry - anim.current.ry) > 0.00001 ||
        Math.abs(nrad - anim.current.radius) > 0.1 ||
        vel.current.rx !== 0 ||
        vel.current.ry !== 0 ||
        (idleTime > 2000 && !dragging.current);

      if (changed) {
        anim.current = { rx: nrx, ry: nry, radius: nrad };
        updateBubbles();
      }

      loopRef.current = requestAnimationFrame(tick);
    };
    loopRef.current = requestAnimationFrame(tick);
    return () => { active = false; cancelAnimationFrame(loopRef.current); };
  }, [updateBubbles]);

  // Viewport tracking - larger radius in classroom mode
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      viewSize.current = { w: r.width, h: r.height, mobile: r.width < 768 };
      // Use 48% of screen in classroom mode (desktop), 34% normally
      const isDesktop = r.width >= 1024;
      const radiusMultiplier = (classroomMode && isDesktop) ? 0.48 : 0.34;
      target.current.radius = Math.min(r.width, r.height) * radiusMultiplier;
    };
    update();
    setTimeout(updateBubbles, 0);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [updateBubbles, classroomMode]);

  // Prevent native scrolling during touch on sphere
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const preventScroll = (e: TouchEvent) => { e.preventDefault(); };
    el.addEventListener("touchmove", preventScroll, { passive: false });
    return () => el.removeEventListener("touchmove", preventScroll);
  }, []);

  // Wheel zoom
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastInteraction.current = Date.now();
      target.current.radius = clamp(target.current.radius + -e.deltaY * 0.25, MIN_RADIUS, MAX_RADIUS);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ---------------------------------------------------------------------------
  // Pointer / touch handlers
  // ---------------------------------------------------------------------------

  const onDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = true;
    moveDistRef.current = 0;
    vel.current = { rx: 0, ry: 0 };
    lastInteraction.current = Date.now();
    dragOrigin.current = { x: e.clientX, y: e.clientY, rx: target.current.rx, ry: target.current.ry };
    lastPointer.current = { x: e.clientX, y: e.clientY, t: Date.now() };
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const dx = e.clientX - dragOrigin.current.x;
    const dy = e.clientY - dragOrigin.current.y;
    moveDistRef.current = Math.sqrt(dx * dx + dy * dy);

    target.current.rx = clamp(dragOrigin.current.rx - dy * DRAG_SENSITIVITY, -MAX_ROT_X, MAX_ROT_X);
    target.current.ry = dragOrigin.current.ry + dx * DRAG_SENSITIVITY;

    const now = Date.now();
    const dt = now - lastPointer.current.t;
    if (dt > 0 && dt < 100) {
      vel.current.rx = clamp((-(e.clientY - lastPointer.current.y) * DRAG_SENSITIVITY / dt) * 16, -MAX_VEL, MAX_VEL);
      vel.current.ry = clamp(((e.clientX - lastPointer.current.x) * DRAG_SENSITIVITY / dt) * 16, -MAX_VEL, MAX_VEL);
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const onUp = useCallback(() => {
    dragging.current = false;
    lastInteraction.current = Date.now();
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  }, []);

  // Pinch zoom
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

  // Click handler
  const handleBubbleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (moveDistRef.current > 8) return;
    const idx = Number(e.currentTarget.dataset.idx);
    const word = words[idx];
    if (!word) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    navigateToWord(word.slug, word.word, origin);
  }, [navigateToWord]);

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      style={{ cursor: "grab", touchAction: "none" }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {words.map((word, i) => {
        const explored = exploredSlugs.has(word.slug);
        const isMatch = !hasActiveFilters || (filteredSlugs?.has(word.slug) ?? true);
        const isHighlighted = highlightedSlug === word.slug;

        // When filters active: matching words are bright, explored gets subtle indicator
        const shouldHighlight = hasActiveFilters && isMatch;

        // Adaptive font size based on word length (in rem for zoom support)
        const len = word.slug.length;
        const fontSize = len <= 5 ? 0.875 : len <= 7 ? 0.75 : len <= 9 ? 0.625 : 0.5625;

        // Style logic:
        // - If highlighted (search top result): always bright with glow ring
        // - If filtering and matches: always bright (ignore explored muting)
        // - If not filtering and explored: muted
        // - Otherwise: bright
        const isMuted = !isHighlighted && !hasActiveFilters && explored;

        // Build box-shadow: base glow + highlighted ring if top search result
        const baseGlow = isMuted
          ? "0 2px 8px var(--theme-bubble-shadow), inset 0 1px 2px var(--theme-bubble-shadow)"
          : `0 2px 12px var(--theme-bubble-shadow), 0 0 20px ${getLanguageTint(word.language)}, inset 0 1px 3px var(--theme-bubble-shadow)`;
        const highlightGlow = isHighlighted
          ? `${baseGlow}, 0 0 24px var(--theme-accent-muted), 0 0 48px var(--theme-accent-muted)`
          : baseGlow;

        return (
          <button
            key={word.slug}
            ref={(el) => { bubbleRefs.current[i] = el; }}
            data-idx={i}
            className="absolute top-0 left-0 origin-center bubble-item"
            style={{
              width: "4rem",
              height: "4rem",
              transform: "translate3d(-9999px, -9999px, 0) scale(0)",
              opacity: 0,
            }}
            onClick={handleBubbleClick}
            aria-label={`Explore ${word.slug}${isHighlighted && highlightedHook ? `. ${highlightedHook}` : ""}`}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center relative transition-shadow duration-500${isHighlighted ? " search-highlighted-bubble" : ""}`}
              style={{
                background: isMuted
                  ? "var(--theme-bubble-bg-muted)"
                  : "var(--theme-bubble-bg)",
                border: isHighlighted
                  ? "2px solid var(--theme-accent)"
                  : `2px solid ${isMuted ? "var(--theme-border-strong)" : getLanguageTint(word.language)}`,
                boxShadow: highlightGlow,
              }}
            >
              <span
                ref={(el) => { textRefs.current[i] = el; }}
                className="font-display font-semibold leading-tight text-center px-1"
                style={{
                  color: isMuted ? "var(--theme-bubble-text-muted)" : "var(--theme-bubble-text)",
                  fontSize: `${fontSize}rem`,
                  textShadow: isMuted
                    ? "var(--theme-bubble-text-shadow-muted)"
                    : "var(--theme-bubble-text-shadow)",
                  transition: "opacity 300ms ease",
                }}
              >
                {word.slug}
              </span>
              {/* Small checkmark for explored words when they're visible */}
              {explored && (shouldHighlight || !hasActiveFilters) && !isHighlighted && (
                <span
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    top: "-0.125rem",
                    right: "-0.125rem",
                    width: "1rem",
                    height: "1rem",
                    background: shouldHighlight ? "var(--theme-accent)" : "var(--theme-text-secondary)",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <svg style={{ width: "0.5rem", height: "0.5rem" }} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </span>
              )}
            </div>

            {/* Hook label — floating whisper below the highlighted bubble */}
            {isHighlighted && highlightedHook && (
              <div
                className="absolute left-1/2 pointer-events-none"
                style={{
                  top: "calc(100% + 4px)",
                  transform: "translateX(-50%)",
                  width: "max(8rem, 130%)",
                  animation: "search-hook-fade-in 600ms ease-out both",
                }}
              >
                <p
                  className="font-body italic text-center leading-tight"
                  style={{
                    fontSize: "0.5rem",
                    color: "var(--theme-text-secondary)",
                    background: "var(--theme-bg-secondary)",
                    borderRadius: "0.375rem",
                    padding: "0.2rem 0.375rem",
                    opacity: 0.85,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    lineClamp: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  &ldquo;{highlightedHook}&rdquo;
                </p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
