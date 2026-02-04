"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as d3 from "d3";
import gsap from "gsap";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { LanguagePhase, LanguageHistory, LanguageRegion } from "@/data/language-types";

interface LanguageHistoryMapProps {
  language: LanguageHistory;
}

// Dominance type to opacity mapping — reduced for cleaner look
const dominanceOpacity: Record<string, number> = {
  native: 0.55,
  prestige: 0.4,
  liturgical: 0.3,
  trade: 0.35,
  colonial: 0.38,
  scholarly: 0.25,
};

// Responsive radius multiplier — much smaller than before
const getRadiusMultiplier = (isMobile: boolean) => isMobile ? 8 : 10;

export default function LanguageHistoryMap({ language }: LanguageHistoryMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const dimensionsRef = useRef<{ width: number; height: number }>({ width: 900, height: 500 });
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const playbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAnimated = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Tap-to-reveal tooltip state
  const [tappedRegion, setTappedRegion] = useState<{
    name: string;
    dominance: string;
    speakerCount?: string;
    x: number;
    y: number;
  } | null>(null);

  const { phases } = language;
  const isMobileRef = useRef(false);

  // Playback logic
  useEffect(() => {
    if (!isPlaying) {
      if (playbackTimerRef.current) {
        clearTimeout(playbackTimerRef.current);
        playbackTimerRef.current = null;
      }
      return;
    }

    const phaseDuration = 3000 / playbackSpeed;

    const advancePhase = () => {
      setCurrentPhase(prev => {
        const next = prev + 1;
        if (next >= phases.length) {
          setIsPlaying(false);
          return prev;
        }
        return next;
      });
    };

    playbackTimerRef.current = setTimeout(advancePhase, phaseDuration);

    return () => {
      if (playbackTimerRef.current) {
        clearTimeout(playbackTimerRef.current);
      }
    };
  }, [isPlaying, currentPhase, playbackSpeed, phases.length]);

  // Zoom to fit the active phase's regions
  const zoomToPhase = useCallback((phaseIndex: number) => {
    if (!svgRef.current || !projectionRef.current || !zoomRef.current) return;

    const svg = d3.select(svgRef.current);
    const projection = projectionRef.current;
    const phase = phases[phaseIndex];
    const { width, height } = dimensionsRef.current;
    const isMobile = isMobileRef.current;
    const radiusMult = getRadiusMultiplier(isMobile);

    // Project all region centers and account for their radii
    const projected: { x: number; y: number; r: number }[] = [];
    phase.regions.forEach(region => {
      const pos = projection(region.coordinates);
      if (!pos) return;
      const r = (region.radius || 5) * radiusMult;
      projected.push({ x: pos[0], y: pos[1], r });
    });

    if (projected.length === 0) return;

    // Calculate bounding box including radii
    const padding = isMobile ? 50 : 70;
    const minX = Math.min(...projected.map(p => p.x - p.r)) - padding;
    const maxX = Math.max(...projected.map(p => p.x + p.r)) + padding;
    const minY = Math.min(...projected.map(p => p.y - p.r)) - padding;
    const maxY = Math.max(...projected.map(p => p.y + p.r)) + padding;

    const bboxWidth = maxX - minX;
    const bboxHeight = maxY - minY;
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    // Calculate scale to fit, but cap it so we don't zoom in absurdly on single-region phases
    const scaleX = width / bboxWidth;
    const scaleY = height / bboxHeight;
    const scale = Math.min(scaleX, scaleY, isMobile ? 3 : 2.5); // Cap max zoom

    // Don't zoom out past 1x (the initial full view)
    const finalScale = Math.max(scale, 0.9);

    // Calculate translation to center the bbox
    const tx = width / 2 - centerX * finalScale;
    const ty = height / 2 - centerY * finalScale;

    const transform = d3.zoomIdentity
      .translate(tx, ty)
      .scale(finalScale);

    svg.transition()
      .duration(800)
      .ease(d3.easeCubicInOut)
      .call(zoomRef.current.transform as never, transform);
  }, [phases]);

  // Update map when phase changes
  useEffect(() => {
    if (!svgRef.current || !projectionRef.current) return;
    setTappedRegion(null); // Clear tooltip on phase change
    updatePhaseDisplay(currentPhase);
    // Zoom to fit the active phase after a short delay (let zones start animating first)
    const timer = setTimeout(() => zoomToPhase(currentPhase), 150);
    return () => clearTimeout(timer);
  }, [currentPhase, zoomToPhase]);

  const handlePlay = () => {
    if (currentPhase >= phases.length - 1) {
      setCurrentPhase(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => setIsPlaying(false);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentPhase(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentPhase(prev => Math.min(phases.length - 1, prev + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentPhase(0);
    setTappedRegion(null);
    // zoomToPhase will be called by the currentPhase useEffect
  };

  // Swipe detection for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    const dt = Date.now() - touchStartRef.current.time;

    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 500) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartRef.current = null;
  };

  // Handle region tap/click for tooltip
  const handleRegionInteraction = useCallback((region: LanguageRegion, screenX: number, screenY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    setTappedRegion(prev => {
      // Toggle off if same region tapped again
      if (prev && prev.name === region.name) return null;
      return {
        name: region.name,
        dominance: region.dominance,
        speakerCount: region.speakerCount,
        x: screenX - rect.left,
        y: screenY - rect.top,
      };
    });
  }, []);

  // Update the visual display for a specific phase
  const updatePhaseDisplay = useCallback((phaseIndex: number) => {
    if (!svgRef.current || !projectionRef.current) return;

    const svg = d3.select(svgRef.current);
    const projection = projectionRef.current;
    const phase = phases[phaseIndex];
    const zonesGroup = svg.select(".zones-group");
    const isMobile = isMobileRef.current;
    const radiusMult = getRadiusMultiplier(isMobile);

    // Fade out all existing zones and labels
    zonesGroup.selectAll(".region-zone, .region-label, .region-hit-area")
      .transition()
      .duration(600)
      .attr("opacity", 0)
      .remove();

    // Add new zones for this phase
    phase.regions.forEach((region, i) => {
      const pos = projection(region.coordinates);
      if (!pos) return;

      const baseRadius = (region.radius || 5) * radiusMult;
      const opacity = dominanceOpacity[region.dominance] || 0.35;

      // Create gradient for this region
      const gradientId = `region-gradient-${phaseIndex}-${i}`;
      const defs = svg.select<SVGDefsElement>("defs");

      // Remove old gradient if exists
      defs.select(`#${gradientId}`).remove();

      const gradient = defs.append("radialGradient")
        .attr("id", gradientId)
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%");

      // Tighter gradient — core is more concentrated, fades faster
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", opacity);

      gradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", opacity * 0.4);

      gradient.append("stop")
        .attr("offset", "85%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", opacity * 0.1);

      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", 0);

      // Add zone circle with animation
      const zone = zonesGroup.append("circle")
        .attr("class", `region-zone region-${i}`)
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", 0)
        .attr("fill", `url(#${gradientId})`)
        .attr("opacity", 0);

      // Animate zone appearance
      gsap.to(zone.node(), {
        attr: { r: baseRadius },
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power2.out",
      });

      // Small center dot — always visible, acts as anchor point
      const dot = zonesGroup.append("circle")
        .attr("class", `region-zone region-dot-${i}`)
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", 0)
        .attr("fill", phase.color)
        .attr("opacity", 0);

      gsap.to(dot.node(), {
        attr: { r: isMobile ? 3 : 3.5 },
        opacity: 0.9,
        duration: 0.5,
        delay: 0.2 + i * 0.15,
        ease: "power2.out",
      });

      // Desktop: show labels; Mobile: hide labels (tap to reveal via React state)
      if (!isMobile) {
        const label = zonesGroup.append("text")
          .attr("class", `region-label region-label-${i}`)
          .attr("x", pos[0])
          .attr("y", pos[1] + baseRadius * 0.5 + 14)
          .attr("text-anchor", "middle")
          .attr("fill", "#f0ede6")
          .attr("font-size", "10px")
          .attr("font-family", "var(--font-source-serif), serif")
          .attr("opacity", 0)
          .attr("pointer-events", "none")
          .text(region.name);

        gsap.to(label.node(), {
          opacity: 0.6,
          duration: 0.5,
          delay: 0.4 + i * 0.15,
          ease: "power2.out",
        });
      }

      // Invisible hit area for tap-to-reveal (larger target for touch)
      const hitRadius = Math.max(baseRadius, isMobile ? 30 : 20);
      zonesGroup.append("circle")
        .attr("class", `region-hit-area region-hit-${i}`)
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", hitRadius)
        .attr("fill", "transparent")
        .attr("cursor", "pointer")
        .attr("opacity", 1)
        .on("click", function(event: MouseEvent) {
          event.stopPropagation();
          handleRegionInteraction(region, event.clientX, event.clientY);
        });
    });
  }, [phases, handleRegionInteraction]);

  const renderMap = useCallback(async () => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = containerRef.current.clientWidth || 900;
    const isMobile = width < 600;
    isMobileRef.current = isMobile;
    const height = isMobile
      ? Math.min(width * 0.65, 400) // Taller ratio on mobile for more space
      : Math.min(width * 0.55, 500);
    dimensionsRef.current = { width, height };

    svg.attr("viewBox", `0 0 ${width} ${height}`)
       .attr("width", width)
       .attr("height", height);

    // Load world topojson
    const worldData = await import("world-atlas/land-110m.json");
    const topology = worldData as unknown as Topology<{ land: GeometryCollection }>;
    const land = topojson.feature(topology, topology.objects.land);

    // Collect all coordinates across all phases to fit projection
    const allCoords: [number, number][] = [];
    phases.forEach(phase => {
      phase.regions.forEach(region => {
        allCoords.push(region.coordinates);
      });
    });

    // Use Natural Earth projection fitted to all language regions
    const padding = isMobile ? 40 : 80;
    const projection = d3.geoNaturalEarth1()
      .fitSize([width - padding, height - padding], {
        type: "MultiPoint",
        coordinates: allCoords,
      } as d3.GeoPermissibleObjects)
      .translate([width / 2, height / 2]);

    projectionRef.current = projection;
    const pathGenerator = d3.geoPath(projection);

    // Defs for filters
    const defs = svg.append("defs");

    // Subtle glow filter — reduced blur for less visual noise
    const glowFilter = defs.append("filter")
      .attr("id", "zone-glow-filter")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    glowFilter.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", isMobile ? "3" : "4")
      .attr("result", "blur");

    glowFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", d => d);

    // Create master group for zoom/pan
    const masterGroup = svg.append("g").attr("class", "zoom-group");

    // Set up D3 zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 6])
      .on("zoom", (event) => {
        masterGroup.attr("transform", event.transform);
      });

    svg.call(zoom);
    zoomRef.current = zoom;

    // Click on empty space dismisses tooltip
    svg.on("click", () => {
      setTappedRegion(null);
    });

    // Draw world land masses
    const landFeatures = "features" in land ? land.features : [land];
    masterGroup.append("g")
      .attr("class", "land")
      .selectAll("path")
      .data(landFeatures as d3.GeoPermissibleObjects[])
      .enter()
      .append("path")
      .attr("d", d => pathGenerator(d) || "")
      .attr("fill", "#1a1a24")
      .attr("stroke", "#2a2a3a")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.8);

    // Create zones group (will be populated by updatePhaseDisplay)
    masterGroup.append("g").attr("class", "zones-group");

    // Initial display
    updatePhaseDisplay(currentPhase);

    // Zoom to fit the initial phase after a brief delay
    setTimeout(() => zoomToPhase(currentPhase), 300);

  }, [phases, currentPhase, updatePhaseDisplay, zoomToPhase]);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    renderMap();
  }, [isInView, renderMap]);

  // Keyboard controls
  useEffect(() => {
    if (!isInView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const isMapVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
      if (!isMapVisible) return;

      switch (e.key) {
        case " ":
          e.preventDefault();
          isPlaying ? handlePause() : handlePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
        case "Escape":
          setTappedRegion(null);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, isPlaying]);

  const progress = ((currentPhase + 1) / phases.length) * 100;
  const activePhase = phases[currentPhase];

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24"
    >
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-sm uppercase tracking-[0.2em] text-fog/70 font-body mb-8">
          The Spread
        </h3>

        {/* Phase Timeline — Compact stepper design */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6">
          {/* Prev button */}
          <button
            onClick={handlePrev}
            disabled={currentPhase <= 0}
            className="p-1.5 text-fog/50 hover:text-moonlight transition-colors disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
            aria-label="Previous era"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Desktop: show all era buttons in a horizontal scroll */}
          <div className="hidden sm:flex items-center gap-1.5">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentPhase(i);
                }}
                className={`px-3 py-1.5 text-xs font-body rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  currentPhase === i
                    ? "bg-amber-glow/20 text-amber-glow border border-amber-glow/30"
                    : "text-fog/50 hover:text-moonlight border border-transparent hover:border-moonlight/10"
                }`}
              >
                {phase.era}
              </button>
            ))}
          </div>

          {/* Mobile: compact dot stepper with current era name */}
          <div className="flex sm:hidden items-center gap-3">
            <div className="flex items-center gap-1.5">
              {phases.map((_phase, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentPhase(i);
                  }}
                  className="cursor-pointer p-0.5"
                  aria-label={`Go to ${phases[i].era}`}
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      currentPhase === i
                        ? "w-2.5 h-2.5 bg-amber-glow"
                        : i < currentPhase
                          ? "w-1.5 h-1.5 bg-amber-glow/40"
                          : "w-1.5 h-1.5 bg-fog/20"
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-body text-fog/60 min-w-0 truncate max-w-[140px]">
              {activePhase.era}
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={currentPhase >= phases.length - 1}
            className="p-1.5 text-fog/50 hover:text-moonlight transition-colors disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
            aria-label="Next era"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* SVG World Map */}
        <div
          className="relative overflow-hidden rounded-2xl bg-deep-water/50 border border-moonlight/5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <svg
            ref={svgRef}
            className="w-full"
            style={{ minHeight: "280px", cursor: "grab" }}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Tap-to-reveal tooltip — shows on region tap */}
          <AnimatePresence>
            {tappedRegion && (
              <motion.div
                className="absolute z-10 pointer-events-none"
                style={{
                  left: Math.min(Math.max(tappedRegion.x, 80), dimensionsRef.current.width - 80),
                  top: Math.max(tappedRegion.y - 60, 10),
                  transform: "translateX(-50%)",
                }}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-3 py-2 rounded-lg bg-ink/95 border border-moonlight/15 backdrop-blur-sm text-center shadow-lg">
                  <p className="text-xs font-body text-moonlight/90 whitespace-nowrap">
                    {tappedRegion.name}
                  </p>
                  <p className="text-[10px] font-body text-fog/50 capitalize">
                    {tappedRegion.dominance}
                    {tappedRegion.speakerCount && ` · ${tappedRegion.speakerCount}`}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Zoom controls — hidden on mobile (pinch to zoom) */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 hidden sm:flex flex-col gap-2">
            <button
              onClick={() => {
                if (!svgRef.current || !zoomRef.current) return;
                const svg = d3.select(svgRef.current);
                svg.transition().duration(400).call(
                  zoomRef.current.scaleBy as never, 1.5
                );
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-ink/80 border border-moonlight/10 text-moonlight/70 hover:text-moonlight hover:border-moonlight/20 transition-all duration-300 text-sm cursor-pointer"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              onClick={() => {
                if (!svgRef.current || !zoomRef.current) return;
                const svg = d3.select(svgRef.current);
                svg.transition().duration(400).call(
                  zoomRef.current.scaleBy as never, 0.67
                );
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-ink/80 border border-moonlight/10 text-moonlight/70 hover:text-moonlight hover:border-moonlight/20 transition-all duration-300 text-sm cursor-pointer"
              aria-label="Zoom out"
            >
              −
            </button>
          </div>

          {/* Playback — compact on mobile: just play/pause + speed indicator */}
          <div className="absolute bottom-5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-ink/90 border border-moonlight/10 backdrop-blur-sm">
            {/* Reset — desktop only */}
            <button
              onClick={handleReset}
              className="hidden sm:flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 cursor-pointer"
              aria-label="Reset"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={currentPhase <= 0}
              className="w-8 h-8 sm:w-auto sm:h-auto flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous era"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 20L9 12l10-8v16zM7 19V5H5v14h2z" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-amber-glow/20 border border-amber-glow/30 text-amber-glow hover:bg-amber-glow/30 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play through eras"}
            >
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentPhase >= phases.length - 1}
              className="w-8 h-8 sm:w-auto sm:h-auto flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next era"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 4l10 8-10 8V4zm12-1v14h2V5h-2z" />
              </svg>
            </button>

            {/* Speed — desktop only */}
            <div className="hidden sm:flex items-center gap-1 ml-2 border-l border-moonlight/10 pl-3">
              {[0.5, 1, 2].map(speed => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-1.5 py-0.5 text-[10px] font-mono rounded transition-all duration-200 cursor-pointer ${
                    playbackSpeed === speed
                      ? "bg-amber-glow/20 text-amber-glow border border-amber-glow/30"
                      : "text-fog/50 hover:text-moonlight"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-moonlight/5">
            <motion.div
              className="h-full bg-amber-glow/60"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Hint text — minimal on mobile */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] text-fog/30 font-body">
            <span className="hidden sm:inline">Scroll to zoom · Drag to pan</span>
            <span className="sm:hidden">Tap regions to explore</span>
          </div>
        </div>

        {/* Active phase detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm"
            style={{
              background: "var(--theme-surface)",
              border: "1px solid var(--theme-border-strong)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={currentPhase}
          >
            {/* Phase header */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: activePhase.color }}
              />
              <div className="min-w-0">
                <h4
                  className="font-display text-base sm:text-lg"
                  style={{ color: "var(--theme-text-primary)" }}
                >
                  {activePhase.name}
                </h4>
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  {activePhase.era}
                </p>
              </div>
              <div className="ml-auto flex-shrink-0">
                <span
                  className="px-2 py-1 text-[11px] sm:text-xs rounded-md"
                  style={{
                    backgroundColor: "var(--theme-surface-hover)",
                    color: "var(--theme-accent)"
                  }}
                >
                  {activePhase.form}
                </span>
              </div>
            </div>

            {/* Context */}
            <p
              className="font-body text-sm leading-relaxed mb-3 sm:mb-4"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              {activePhase.context}
            </p>

            {/* Key events */}
            {activePhase.keyEvents && activePhase.keyEvents.length > 0 && (
              <div className="border-t pt-3 sm:pt-4" style={{ borderColor: "var(--theme-border)" }}>
                <h5
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Key Events
                </h5>
                <ul className="space-y-1">
                  {activePhase.keyEvents.map((event, i) => (
                    <li
                      key={i}
                      className="text-xs font-body flex items-start gap-2"
                      style={{ color: "var(--theme-text-secondary)" }}
                    >
                      <span style={{ color: activePhase.color }}>•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Regions summary */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t" style={{ borderColor: "var(--theme-border)" }}>
              <h5
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Regions ({activePhase.regions.length})
              </h5>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activePhase.regions.map((region, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs rounded-md"
                    style={{
                      backgroundColor: "var(--theme-surface-hover)",
                      color: "var(--theme-text-secondary)"
                    }}
                  >
                    {region.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
