"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import type { LanguageFamilyNode } from "@/data/language-types";

interface LanguageFamilyTreeProps {
  data: LanguageFamilyNode;
  onLanguageClick?: (slug: string) => void;
}

interface TreeNode extends d3.HierarchyPointNode<LanguageFamilyNode> {
  _children?: TreeNode[];
  x0?: number;
  y0?: number;
}

/**
 * Static, click-to-explore dendrogram for language family trees.
 *
 * No zoom, no pan, no scroll hijack. The tree auto-fits its container
 * using SVG viewBox. Users click nodes to expand/collapse branches
 * and click linked languages to navigate to their history pages.
 *
 * Theme-aware via CSS custom properties on the container div,
 * which D3 reads at render time.
 */
export default function LanguageFamilyTree({
  data,
  onLanguageClick,
}: LanguageFamilyTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [isMobile, setIsMobile] = useState(false);
  // Track actual tree bounds for dynamic viewBox
  const [viewBox, setViewBox] = useState("0 0 800 500");
  const [svgHeight, setSvgHeight] = useState(500);

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setContainerWidth(w);
        setIsMobile(w < 640);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getNodeRadius = useCallback(
    (d: LanguageFamilyNode, mobile: boolean) => {
      const base = mobile ? 0.8 : 1;
      switch (d.level) {
        case "family": return 7 * base;
        case "branch": return 5 * base;
        case "sub-branch": return 4 * base;
        case "language": return 3.5 * base;
        default: return 3 * base;
      }
    },
    []
  );

  // Render D3 tree
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || !data) return;

    // Read theme colors from the container's computed style
    const containerEl = containerRef.current;
    const cs = getComputedStyle(containerEl);
    const colors = {
      bgPrimary: cs.getPropertyValue("--theme-bg-primary").trim() || "#0a0a14",
      bgSecondary: cs.getPropertyValue("--theme-bg-secondary").trim() || "#12121e",
      textPrimary: cs.getPropertyValue("--theme-text-primary").trim() || "#f0ede6",
      textSecondary: cs.getPropertyValue("--theme-text-secondary").trim() || "#a8b0b8",
      textTertiary: cs.getPropertyValue("--theme-text-tertiary").trim() || "#6b6866",
      accent: cs.getPropertyValue("--theme-accent").trim() || "#d4a574",
      border: cs.getPropertyValue("--theme-border-strong").trim() || "rgba(240, 237, 230, 0.12)",
      glow: cs.getPropertyValue("--theme-glow").trim() || "rgba(212, 165, 116, 0.15)",
    };

    function nodeColor(d: LanguageFamilyNode): string {
      if (d.languageSlugs && d.languageSlugs.length > 0) return colors.accent;
      if (d.displayColor) return d.displayColor;
      if (d.status === "extinct") return colors.textTertiary;
      if (d.status === "reconstructed") return colors.accent;
      return colors.textSecondary;
    }

    // Layout dimensions — we'll use a wide canvas and let viewBox handle scaling
    const layoutWidth = isMobile ? 600 : 900;
    const layoutHeight = isMobile ? 500 : 550;
    const margin = { top: 20, right: isMobile ? 100 : 160, bottom: 20, left: isMobile ? 40 : 70 };
    const innerW = layoutWidth - margin.left - margin.right;
    const innerH = layoutHeight - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Defs
    const defs = svg.append("defs");

    // Subtle glow filter for accent nodes
    const glowFilter = defs.append("filter")
      .attr("id", "accent-glow")
      .attr("x", "-100%").attr("y", "-100%")
      .attr("width", "300%").attr("height", "300%");
    glowFilter.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "4")
      .attr("result", "blur");
    glowFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter().append("feMergeNode")
      .attr("in", d => d);

    // Main group
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Hierarchy
    const root = d3.hierarchy<LanguageFamilyNode>(data) as TreeNode;

    // Collapse deeper levels initially
    const collapseDepth = isMobile ? 2 : 3;
    root.descendants().forEach((d: TreeNode) => {
      if (d.depth >= collapseDepth && d.children) {
        d._children = d.children as TreeNode[];
        d.children = undefined;
      }
    });

    root.x0 = innerH / 2;
    root.y0 = 0;

    const treeLayout = d3.tree<LanguageFamilyNode>()
      .size([innerH, innerW])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.4));

    const duration = 450;
    let idCounter = 0;

    function updateViewBox() {
      // Compute tight bounding box of all visible nodes + labels
      const allNodes = root.descendants();
      if (allNodes.length === 0) return;

      const xVals = allNodes.map(d => d.x);
      const yVals = allNodes.map(d => d.y);
      const minX = Math.min(...xVals);
      const maxX = Math.max(...xVals);
      const minY = Math.min(...yVals);
      const maxY = Math.max(...yVals);

      // Add padding for labels and node radii
      const padLeft = margin.left + 10;
      const padRight = isMobile ? 110 : 170; // space for right-side labels
      const padTop = 30;
      const padBottom = 30;

      const vbX = minY - padLeft;
      const vbY = minX - padTop;
      const vbW = (maxY - minY) + padLeft + padRight;
      const vbH = (maxX - minX) + padTop + padBottom;

      setViewBox(`${vbX} ${vbY} ${vbW} ${vbH}`);

      // Scale height to maintain aspect ratio
      const aspect = vbH / vbW;
      const newHeight = Math.max(300, Math.min(containerWidth * aspect, isMobile ? 600 : 550));
      setSvgHeight(newHeight);
    }

    function update(source: TreeNode) {
      const treeData = treeLayout(root);
      const nodes = treeData.descendants() as TreeNode[];
      const links = treeData.links();

      // Fixed-depth spacing
      const depthSpacing = isMobile ? innerW / 4 : innerW / 5;
      nodes.forEach(d => { d.y = d.depth * depthSpacing; });

      // ─── LINKS ───
      const link = g.selectAll<SVGPathElement, d3.HierarchyLink<LanguageFamilyNode>>("path.tree-link")
        .data(links, d => (d.target as TreeNode).data.id);

      const linkEnter = link.enter()
        .append("path")
        .attr("class", "tree-link")
        .attr("fill", "none")
        .attr("stroke", d => nodeColor(d.target.data))
        .attr("stroke-width", d => d.target.data.classification === "disputed" ? 0.7 : 1)
        .attr("stroke-dasharray", d => d.target.data.classification === "disputed" ? "4,4" : "none")
        .attr("stroke-opacity", 0)
        .attr("d", () => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal(o, o);
        });

      linkEnter.merge(link)
        .transition().duration(duration)
        .attr("stroke-opacity", 0.3)
        .attr("d", d => diagonal(
          d.source as { x: number; y: number },
          d.target as { x: number; y: number }
        ));

      link.exit().transition().duration(duration)
        .attr("stroke-opacity", 0)
        .attr("d", () => {
          const o = { x: source.x || 0, y: source.y || 0 };
          return diagonal(o, o);
        })
        .remove();

      // ─── NODES ───
      const nodeIdMap = new Map<TreeNode, string>();
      const node = g.selectAll<SVGGElement, TreeNode>("g.tree-node")
        .data(nodes, d => {
          const tn = d as TreeNode;
          if (!nodeIdMap.has(tn)) nodeIdMap.set(tn, tn.data.id || String(++idCounter));
          return nodeIdMap.get(tn)!;
        });

      const nodeEnter = node.enter()
        .append("g")
        .attr("class", "tree-node")
        .attr("transform", `translate(${source.y0 || 0},${source.x0 || 0})`)
        .attr("cursor", "pointer")
        .on("click", (_event, d) => {
          const tn = d as TreeNode;
          // Navigate to language page
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0 && onLanguageClick) {
            onLanguageClick(tn.data.languageSlugs[0]);
            return;
          }
          // Toggle children
          if (tn.children) {
            tn._children = tn.children as TreeNode[];
            tn.children = undefined;
          } else if (tn._children) {
            tn.children = tn._children;
            tn._children = undefined;
          }
          update(tn);
        });

      // Glow halo (accent nodes only)
      nodeEnter
        .filter(d => {
          const tn = d as TreeNode;
          return !!(tn.data.languageSlugs && tn.data.languageSlugs.length > 0) || tn.data.level === "family";
        })
        .append("circle")
        .attr("class", "node-halo")
        .attr("r", 0)
        .attr("fill", d => nodeColor((d as TreeNode).data))
        .attr("opacity", 0)
        .attr("filter", "url(#accent-glow)");

      // Core circle
      nodeEnter.append("circle")
        .attr("class", "node-core")
        .attr("r", 0)
        .attr("fill", d => {
          const tn = d as TreeNode;
          if (tn._children) return nodeColor(tn.data); // collapsed → filled
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          return "transparent"; // expanded/leaf → hollow
        })
        .attr("stroke", d => nodeColor((d as TreeNode).data))
        .attr("stroke-width", d => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return 2;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return 1.8;
          return 1.2;
        })
        .attr("stroke-dasharray", d => (d as TreeNode).data.status === "reconstructed" ? "3,2" : "none");

      // Label
      nodeEnter.append("text")
        .attr("class", "node-label")
        .attr("dy", "0.35em")
        .attr("x", d => {
          const tn = d as TreeNode;
          const hasKids = tn.children || tn._children;
          return hasKids
            ? -(getNodeRadius(tn.data, isMobile) + 6)
            : getNodeRadius(tn.data, isMobile) + 6;
        })
        .attr("text-anchor", d => {
          const tn = d as TreeNode;
          return (tn.children || tn._children) ? "end" : "start";
        })
        .text(d => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return `${tn.data.name} →`;
          return tn.data.name;
        })
        .attr("fill", d => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          if (tn.data.status === "extinct") return colors.textTertiary;
          return colors.textSecondary;
        })
        .attr("font-size", d => {
          const tn = d as TreeNode;
          const base = isMobile ? 9 : 11;
          switch (tn.data.level) {
            case "family": return `${base + 3}px`;
            case "branch": return `${base + 1}px`;
            default: return `${base}px`;
          }
        })
        .attr("font-style", d => (d as TreeNode).data.status === "extinct" ? "italic" : "normal")
        .attr("font-family", d => {
          const tn = d as TreeNode;
          return (tn.data.level === "family" || tn.data.level === "branch")
            ? "var(--font-display), Georgia, serif"
            : "var(--font-body), serif";
        })
        .attr("font-weight", d => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return "500";
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return "500";
          return "400";
        })
        .attr("opacity", 0);

      // ─── UPDATE ───
      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate.transition().duration(duration)
        .attr("transform", d => `translate(${d.y},${d.x})`);

      // Halo
      nodeUpdate.select(".node-halo")
        .transition().duration(duration)
        .attr("r", d => {
          const tn = d as TreeNode;
          const base = getNodeRadius(tn.data, isMobile);
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return base * 2.5;
          if (tn.data.level === "family") return base * 2;
          return 0;
        })
        .attr("opacity", d => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return 0.15;
          if (tn.data.level === "family") return 0.1;
          return 0;
        });

      // Core
      nodeUpdate.select(".node-core")
        .transition().duration(duration)
        .attr("r", d => getNodeRadius((d as TreeNode).data, isMobile))
        .attr("fill", d => {
          const tn = d as TreeNode;
          if (tn._children) return nodeColor(tn.data);
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          return "transparent";
        });

      // Labels
      nodeUpdate.select(".node-label")
        .transition().duration(duration)
        .attr("opacity", d => (d as TreeNode).data.status === "extinct" ? 0.5 : 0.9);

      // ─── EXIT ───
      const nodeExit = node.exit().transition().duration(duration)
        .attr("transform", `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select(".node-halo").attr("r", 0).attr("opacity", 0);
      nodeExit.select(".node-core").attr("r", 0);
      nodeExit.select(".node-label").attr("opacity", 0);

      // Store positions
      nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });

      // Update viewBox to fit after transition
      setTimeout(updateViewBox, duration + 50);
    }

    function diagonal(s: { x: number; y: number }, d: { x: number; y: number }): string {
      return `M ${s.y} ${s.x} C ${(s.y + d.y) / 2} ${s.x}, ${(s.y + d.y) / 2} ${d.x}, ${d.y} ${d.x}`;
    }

    // Render
    update(root);

    // Initial fit
    updateViewBox();

  }, [data, containerWidth, isMobile, getNodeRadius, onLanguageClick]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        background: "var(--theme-bg-secondary)",
        border: "1px solid var(--theme-border)",
      }}
    >
      {/* Legend */}
      <div
        className="absolute top-3 left-3 z-10 flex flex-wrap gap-2.5 text-[10px] px-3 py-2 rounded-xl"
        style={{
          background: "var(--theme-surface)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--theme-border)",
          color: "var(--theme-text-tertiary)",
          fontFamily: "var(--font-body)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ border: "1.5px solid var(--theme-text-secondary)", background: "transparent" }}
          />
          Living
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--theme-text-tertiary)", opacity: 0.4 }}
          />
          <span className="italic">Extinct</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--theme-accent)", boxShadow: "0 0 4px var(--theme-glow)" }}
          />
          Explore →
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--theme-text-secondary)" }}
          />
          Expand
        </span>
      </div>

      <svg
        ref={svgRef}
        className="w-full"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        style={{ height: svgHeight, display: "block" }}
      />
    </div>
  );
}
