"use client";

import { useEffect, useRef, useCallback } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import { Word } from "@/data/word-types";

export default function WorldBackground({ words }: { words: Word[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const hasRendered = useRef(false);

  const render = useCallback(async () => {
    if (!svgRef.current || hasRendered.current) return;
    hasRendered.current = true;

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr("viewBox", `0 0 ${width} ${height}`)
       .attr("width", width)
       .attr("height", height);

    const worldData = await import("world-atlas/land-110m.json");
    const topology = worldData as unknown as Topology<{ land: GeometryCollection }>;
    const land = topojson.feature(topology, topology.objects.land);

    const projection = d3.geoNaturalEarth1()
      .fitSize([width * 0.85, height * 0.75], land as d3.GeoPermissibleObjects)
      .translate([width / 2, height / 2 + 20]);

    const pathGenerator = d3.geoPath(projection);

    // Draw land masses very subtly
    const landFeatures = "features" in land ? land.features : [land];
    svg.append("g")
      .selectAll("path")
      .data(landFeatures as d3.GeoPermissibleObjects[])
      .enter()
      .append("path")
      .attr("d", d => pathGenerator(d) || "")
      .attr("fill", "none")
      .attr("stroke", "rgba(240, 237, 230, 0.04)")
      .attr("stroke-width", 0.5);

    // Draw origin dots for each word
    const originGroup = svg.append("g");

    words.forEach((word, i) => {
      // Use the first journey stop as the origin
      const origin = word.journey[0];
      if (!origin) return;

      const pos = projection(origin.coordinates);
      if (!pos) return;

      // Outer glow
      originGroup.append("circle")
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", 8)
        .attr("fill", origin.color || "#d4a574")
        .attr("opacity", 0)
        .transition()
        .delay(800 + i * 100)
        .duration(1000)
        .attr("opacity", 0.08);

      // Core dot
      originGroup.append("circle")
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", 2.5)
        .attr("fill", origin.color || "#d4a574")
        .attr("opacity", 0)
        .transition()
        .delay(800 + i * 100)
        .duration(800)
        .attr("opacity", 0.25);
    });
  }, []);

  useEffect(() => {
    render();
  }, [render]);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    />
  );
}
