"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as d3 from "d3";
import gsap from "gsap";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import { JourneyStop } from "@/data/words";

interface JourneyMapProps {
  journey: JourneyStop[];
}

export default function JourneyMap({ journey }: JourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const dimensionsRef = useRef<{ width: number; height: number }>({ width: 900, height: 500 });
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const playbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAnimated = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Auto-center map on active node
  const centerOnNode = useCallback((index: number) => {
    if (!svgRef.current || !zoomRef.current || !projectionRef.current) return;
    const projection = projectionRef.current;
    const pos = projection(journey[index].coordinates);
    if (!pos) return;

    const svg = d3.select(svgRef.current);
    const { width, height } = dimensionsRef.current;

    // Smoothly translate to center on the node
    const transform = d3.zoomIdentity
      .translate(width / 2 - pos[0], height / 2 - pos[1]);

    svg.transition()
      .duration(1200)
      .ease(d3.easeCubicInOut)
      .call(zoomRef.current.transform as never, transform);
  }, [journey]);

  // Highlight active node in SVG
  const highlightNode = useCallback((index: number | null) => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    // Reset all nodes
    svg.selectAll(".node").each(function () {
      const node = d3.select(this);
      node.select(".main-dot").attr("r", 5);
      node.select(".outer-glow").attr("opacity", 0.25);
      node.select(".pulse-ring").remove();
    });

    if (index === null) return;

    // Highlight active node
    const activeNodeEl = svg.select(`.node-${index}`);
    if (activeNodeEl.empty()) return;

    activeNodeEl.select(".main-dot").attr("r", 7);
    activeNodeEl.select(".outer-glow").attr("opacity", 0.5);

    // Add pulsing ring
    activeNodeEl.append("circle")
      .attr("r", 12)
      .attr("fill", "none")
      .attr("stroke", journey[index].color || "#d4a574")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.8)
      .attr("class", "pulse-ring");

    // Animate the pulse
    const pulseNode = activeNodeEl.select(".pulse-ring").node();
    if (pulseNode) {
      gsap.to(pulseNode, {
        attr: { r: 22 },
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });
    }
  }, [journey]);

  // Playback logic
  useEffect(() => {
    if (!isPlaying) {
      if (playbackTimerRef.current) {
        clearTimeout(playbackTimerRef.current);
        playbackTimerRef.current = null;
      }
      return;
    }

    const stepDuration = 2000 / playbackSpeed;

    const advanceStep = () => {
      setCurrentStep(prev => {
        const next = prev + 1;
        if (next >= journey.length) {
          setIsPlaying(false);
          return prev;
        }
        return next;
      });
    };

    playbackTimerRef.current = setTimeout(advanceStep, stepDuration);

    return () => {
      if (playbackTimerRef.current) {
        clearTimeout(playbackTimerRef.current);
      }
    };
  }, [isPlaying, currentStep, playbackSpeed, journey.length]);

  // When currentStep changes during playback, center and highlight
  useEffect(() => {
    if (currentStep < 0 || currentStep >= journey.length) return;
    setActiveNode(currentStep);
    centerOnNode(currentStep);
    highlightNode(currentStep);
  }, [currentStep, centerOnNode, highlightNode, journey.length]);

  // When user manually clicks a node
  useEffect(() => {
    if (activeNode === null) {
      highlightNode(null);
      return;
    }
    highlightNode(activeNode);
    centerOnNode(activeNode);
  }, [activeNode, centerOnNode, highlightNode]);

  const handlePlay = () => {
    if (currentStep >= journey.length - 1) {
      setCurrentStep(-1);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStep(prev => Math.min(journey.length - 1, prev + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
    setActiveNode(null);
    highlightNode(null);
    // Reset zoom
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(600).call(
        zoomRef.current.transform as never, d3.zoomIdentity
      );
    }
  };

  // Swipe detection for mobile prev/next
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

    // Only register as swipe if horizontal movement > 60px, more horizontal than vertical, and fast enough
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 500) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartRef.current = null;
  };

  const renderMap = useCallback(async () => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = containerRef.current.clientWidth || 900;
    const height = Math.min(width * 0.55, 500);
    dimensionsRef.current = { width, height };

    svg.attr("viewBox", `0 0 ${width} ${height}`)
       .attr("width", width)
       .attr("height", height);

    // Load world topojson
    const worldData = await import("world-atlas/land-110m.json");
    const topology = worldData as unknown as Topology<{ land: GeometryCollection }>;
    const land = topojson.feature(topology, topology.objects.land);

    // Use Natural Earth projection fitted to journey stops
    const projection = d3.geoNaturalEarth1()
      .fitSize([width - 60, height - 60], {
        type: "MultiPoint",
        coordinates: journey.map(s => s.coordinates),
      } as d3.GeoPermissibleObjects)
      .translate([width / 2, height / 2]);

    projectionRef.current = projection;
    const pathGenerator = d3.geoPath(projection);

    // Defs for gradients and filters
    const defs = svg.append("defs");

    // Glow filter for nodes
    const glowFilter = defs.append("filter")
      .attr("id", "node-glow-filter")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    glowFilter.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "4")
      .attr("result", "blur");

    glowFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", d => d);

    // Create a master group for zoom/pan
    const masterGroup = svg.append("g").attr("class", "zoom-group");

    // Set up D3 zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 8])
      .on("zoom", (event) => {
        masterGroup.attr("transform", event.transform);
      });

    svg.call(zoom);
    zoomRef.current = zoom;

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
      .attr("opacity", 0.7);

    // Draw journey paths as great-circle arcs
    const pathGroup = masterGroup.append("g").attr("class", "journey-paths");

    for (let i = 0; i < journey.length - 1; i++) {
      const source = journey[i].coordinates;
      const target = journey[i + 1].coordinates;

      const interpolator = d3.geoInterpolate(source, target);
      const numPoints = 50;
      const arcPoints: [number, number][] = [];
      for (let t = 0; t <= 1; t += 1 / numPoints) {
        arcPoints.push(interpolator(t));
      }

      const lineGenerator = d3.line<[number, number]>()
        .x(d => (projection(d) || [0, 0])[0])
        .y(d => (projection(d) || [0, 0])[1])
        .curve(d3.curveCatmullRom.alpha(0.5));

      const arcPath = pathGroup.append("path")
        .attr("d", lineGenerator(arcPoints))
        .attr("fill", "none")
        .attr("stroke", journey[i].color || "#d4a574")
        .attr("stroke-width", 2)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0.8)
        .attr("class", `arc-path arc-${i}`);

      // Set up for animation
      const pathLen = (arcPath.node() as SVGPathElement)?.getTotalLength() || 0;
      arcPath
        .attr("stroke-dasharray", pathLen)
        .attr("stroke-dashoffset", pathLen);

      // Animate each arc segment sequentially
      gsap.to(arcPath.node(), {
        strokeDashoffset: 0,
        duration: 1.0,
        delay: 0.6 + i * 0.6,
        ease: "power2.inOut",
      });

      // Glow trail
      const glowPath = pathGroup.append("path")
        .attr("d", lineGenerator(arcPoints))
        .attr("fill", "none")
        .attr("stroke", journey[i].color || "#d4a574")
        .attr("stroke-width", 6)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0)
        .attr("filter", "blur(4px)")
        .attr("class", `glow-path glow-${i}`);

      glowPath
        .attr("stroke-dasharray", pathLen)
        .attr("stroke-dashoffset", pathLen);

      gsap.to(glowPath.node(), {
        strokeDashoffset: 0,
        opacity: 0.15,
        duration: 1.0,
        delay: 0.6 + i * 0.6,
        ease: "power2.inOut",
      });
    }

    // Draw nodes at each stop
    const nodeGroup = masterGroup.append("g").attr("class", "nodes");

    journey.forEach((stop, i) => {
      const pos = projection(stop.coordinates);
      if (!pos) return;

      const node = nodeGroup.append("g")
        .attr("class", `node node-${i}`)
        .attr("transform", `translate(${pos[0]}, ${pos[1]})`)
        .style("cursor", "pointer")
        .on("click", () => {
          setIsPlaying(false);
          setActiveNode(prev => prev === i ? null : i);
          setCurrentStep(i);
        });

      // Outer glow circle
      node.append("circle")
        .attr("r", 16)
        .attr("fill", stop.color || "#d4a574")
        .attr("opacity", 0)
        .attr("filter", "url(#node-glow-filter)")
        .attr("class", "outer-glow");

      // Main node circle
      node.append("circle")
        .attr("r", 5)
        .attr("fill", stop.color || "#d4a574")
        .attr("opacity", 0)
        .attr("class", "main-dot");

      // Inner bright dot
      node.append("circle")
        .attr("r", 2)
        .attr("fill", "#f0ede6")
        .attr("opacity", 0)
        .attr("class", "inner-dot");

      // Label - form (word at this stop)
      const labelY = i % 2 === 0 ? -20 : 22;

      node.append("text")
        .attr("y", labelY)
        .attr("text-anchor", "middle")
        .attr("fill", "#f0ede6")
        .attr("font-size", "11px")
        .attr("font-family", "var(--font-cormorant), serif")
        .attr("font-weight", "600")
        .attr("opacity", 0)
        .attr("class", "label-form")
        .text(stop.form);

      // Label - location and period
      node.append("text")
        .attr("y", labelY + (labelY > 0 ? 14 : -12))
        .attr("text-anchor", "middle")
        .attr("fill", "#6b6866")
        .attr("font-size", "9px")
        .attr("font-family", "var(--font-source-serif), serif")
        .attr("opacity", 0)
        .attr("class", "label-info")
        .text(`${stop.location} · ${stop.period}`);

      // Animate node appearance
      const delay = 0.5 + i * 0.6;

      gsap.to(node.select(".outer-glow").node(), {
        opacity: 0.25,
        duration: 0.5,
        delay,
        ease: "power2.out",
      });

      gsap.to(node.select(".main-dot").node(), {
        opacity: 1,
        duration: 0.4,
        delay,
        ease: "power2.out",
      });

      gsap.to(node.select(".inner-dot").node(), {
        opacity: 0.9,
        duration: 0.4,
        delay: delay + 0.1,
        ease: "power2.out",
      });

      gsap.to(node.select(".label-form").node(), {
        opacity: 0.9,
        duration: 0.4,
        delay: delay + 0.15,
        ease: "power2.out",
      });

      gsap.to(node.select(".label-info").node(), {
        opacity: 0.6,
        duration: 0.4,
        delay: delay + 0.2,
        ease: "power2.out",
      });
    });

  }, [journey]);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    renderMap();
  }, [isInView, renderMap]);

  // Keyboard controls for the map (when visible)
  useEffect(() => {
    if (!isInView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      // Check if map section is roughly in view
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const isMapVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
      if (!isMapVisible) return;

      switch (e.key) {
        case " ": {
          e.preventDefault();
          if (isPlaying) {
            handlePause();
          } else {
            handlePlay();
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          handlePrev();
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          handleNext();
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, isPlaying]);

  const progress = currentStep >= 0 ? ((currentStep + 1) / journey.length) * 100 : 0;

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
          The Journey
        </h3>

        {/* SVG World Map */}
        <div
          className="relative overflow-hidden rounded-2xl bg-deep-water/50 border border-moonlight/5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <svg
            ref={svgRef}
            className="w-full"
            style={{ minHeight: "350px", cursor: "grab" }}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Zoom controls */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                if (!svgRef.current || !zoomRef.current) return;
                const svg = d3.select(svgRef.current);
                svg.transition().duration(400).call(
                  zoomRef.current.scaleBy as never, 1.5
                );
              }}
              className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-ink/80 border border-moonlight/10 text-moonlight/70 hover:text-moonlight hover:border-moonlight/20 transition-all duration-300 text-base sm:text-sm cursor-pointer"
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
              className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-ink/80 border border-moonlight/10 text-moonlight/70 hover:text-moonlight hover:border-moonlight/20 transition-all duration-300 text-base sm:text-sm cursor-pointer"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              onClick={handleReset}
              className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-ink/80 border border-moonlight/10 text-moonlight/70 hover:text-moonlight hover:border-moonlight/20 transition-all duration-300 cursor-pointer"
              aria-label="Reset view"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 1 9 9M3 12V3m0 9h9" />
              </svg>
            </button>
          </div>

          {/* Playback controls - bottom center */}
          <div className="absolute bottom-5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-ink/90 border border-moonlight/10 backdrop-blur-sm">
            {/* Reset */}
            <button
              onClick={handleReset}
              className="w-9 h-9 sm:w-auto sm:h-auto flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 cursor-pointer"
              aria-label="Reset journey"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
            </button>

            {/* Previous */}
            <button
              onClick={handlePrev}
              disabled={currentStep <= 0}
              className="w-9 h-9 sm:w-auto sm:h-auto flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous stop"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                <path d="M19 20L9 12l10-8v16zM7 19V5H5v14h2z" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              className="w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-amber-glow/20 border border-amber-glow/30 text-amber-glow hover:bg-amber-glow/30 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play journey"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentStep >= journey.length - 1}
              className="w-9 h-9 sm:w-auto sm:h-auto flex items-center justify-center text-fog/60 hover:text-moonlight transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next stop"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                <path d="M5 4l10 8-10 8V4zm12-1v14h2V5h-2z" />
              </svg>
            </button>

            {/* Speed controls - hidden on small screens */}
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
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-moonlight/5">
            <motion.div
              className="h-full bg-amber-glow/60"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Hint text */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] text-fog/40 font-body">
            <span className="hidden sm:inline">Scroll to zoom · Drag to pan · Click nodes to explore</span>
            <span className="sm:hidden">Pinch to zoom · Swipe for prev/next</span>
          </div>
        </div>

        {/* Active node detail card */}
        <AnimatePresence mode="wait">
          {activeNode !== null && journey[activeNode] && (
            <motion.div
              className="mt-6 p-6 rounded-2xl bg-ink/70 border border-moonlight/8 max-w-lg mx-auto backdrop-blur-sm relative"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={activeNode}
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setActiveNode(null);
                  setCurrentStep(-1);
                  highlightNode(null);
                }}
                className="absolute top-3 right-3 text-fog/40 hover:text-moonlight transition-colors duration-200 cursor-pointer"
                aria-label="Close detail"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-fog/40 uppercase tracking-wider">
                  Stop {activeNode + 1} of {journey.length}
                </span>
                <div className="flex-1 h-px bg-moonlight/5" />
              </div>

              {/* Script (original writing) */}
              {journey[activeNode].script && (
                <p className="font-display text-2xl text-moonlight/90 mb-2 text-center">
                  {journey[activeNode].script}
                </p>
              )}

              {/* Form name */}
              <p className="font-display text-lg text-amber-glow text-center mb-3">
                {journey[activeNode].form}
              </p>

              {/* Context description */}
              <p className="font-body text-sm text-mist/70 leading-relaxed text-center">
                {journey[activeNode].context}
              </p>

              {/* Location & period */}
              <div className="mt-4 pt-3 border-t border-moonlight/5 flex items-center justify-center gap-4">
                <span className="text-xs text-fog/50 font-body flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {journey[activeNode].location}
                </span>
                <span className="text-xs text-fog/50 font-body flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  {journey[activeNode].period}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
