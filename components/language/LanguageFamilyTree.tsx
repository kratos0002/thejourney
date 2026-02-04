"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import type { LanguageFamilyNode } from "@/data/language-types";

interface LanguageFamilyTreeProps {
  data: LanguageFamilyNode;
  /** Called when a language node with a linked page is clicked */
  onLanguageClick?: (slug: string) => void;
}

// Extend the D3 hierarchy node with collapse tracking
interface TreeNode extends d3.HierarchyPointNode<LanguageFamilyNode> {
  _children?: TreeNode[];
  x0?: number;
  y0?: number;
}

/**
 * Interactive collapsible dendrogram for language family trees.
 *
 * Design principles:
 * - Theme-aware: reads CSS custom properties for both Night Sky and Parchment
 * - No scroll-zoom: prevents page hijack, only drag-to-pan
 * - Auto-fitted: tree content fills the container, no wasted space
 * - Soft glow halos on key nodes with luminous bezier links
 * - Linked languages are prominently styled and clearly navigable
 */
export default function LanguageFamilyTree({
  data,
  onLanguageClick,
}: LanguageFamilyTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isMobile, setIsMobile] = useState(false);

  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const mobile = width < 640;
        setIsMobile(mobile);
        // Height scales with width but stays compact
        const height = mobile
          ? Math.max(420, width * 1.1)
          : Math.max(450, width * 0.55);
        setDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Node radius by level
  const getNodeRadius = useCallback(
    (d: LanguageFamilyNode, mobile: boolean) => {
      const base = mobile ? 0.85 : 1;
      switch (d.level) {
        case "family":
          return 8 * base;
        case "branch":
          return 5.5 * base;
        case "sub-branch":
          return 4.5 * base;
        case "language":
          return 4 * base;
        default:
          return 3.5 * base;
      }
    },
    []
  );

  // Read theme colors from CSS custom properties
  const getThemeColors = useCallback(() => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    return {
      bgPrimary: style.getPropertyValue("--theme-bg-primary").trim() || "#0a0a14",
      bgSecondary: style.getPropertyValue("--theme-bg-secondary").trim() || "#12121e",
      bgTertiary: style.getPropertyValue("--theme-bg-tertiary").trim() || "#1a1a24",
      textPrimary: style.getPropertyValue("--theme-text-primary").trim() || "#f0ede6",
      textSecondary: style.getPropertyValue("--theme-text-secondary").trim() || "#a8b0b8",
      textTertiary: style.getPropertyValue("--theme-text-tertiary").trim() || "#6b6866",
      accent: style.getPropertyValue("--theme-accent").trim() || "#d4a574",
      border: style.getPropertyValue("--theme-border").trim() || "rgba(240, 237, 230, 0.06)",
      borderStrong: style.getPropertyValue("--theme-border-strong").trim() || "rgba(240, 237, 230, 0.12)",
      surface: style.getPropertyValue("--theme-surface").trim() || "rgba(26, 26, 36, 0.7)",
      glow: style.getPropertyValue("--theme-glow").trim() || "rgba(212, 165, 116, 0.15)",
    };
  }, []);

  // Get color for a node
  const getNodeColor = useCallback((d: LanguageFamilyNode, accent: string, textSecondary: string, textTertiary: string) => {
    if (d.languageSlugs && d.languageSlugs.length > 0) return accent;
    if (d.displayColor) return d.displayColor;
    switch (d.status) {
      case "extinct":
        return textTertiary;
      case "reconstructed":
        return accent;
      default:
        return textSecondary;
    }
  }, []);

  // Render the D3 tree
  useEffect(() => {
    if (!svgRef.current || !data) return;

    const { width, height } = dimensions;
    const colors = getThemeColors();

    const margin = {
      top: 20,
      right: isMobile ? 110 : 170,
      bottom: 20,
      left: isMobile ? 50 : 80,
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // ─── DEFS ────────────
    const defs = svg.append("defs");

    // Soft glow filter for key nodes
    const nodeGlow = defs
      .append("filter")
      .attr("id", "node-glow")
      .attr("x", "-150%")
      .attr("y", "-150%")
      .attr("width", "400%")
      .attr("height", "400%");
    nodeGlow
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", isMobile ? "4" : "5")
      .attr("result", "blur");
    nodeGlow
      .append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", (d) => d);

    // Accent glow for linked language nodes
    const accentGlow = defs
      .append("filter")
      .attr("id", "accent-glow")
      .attr("x", "-200%")
      .attr("y", "-200%")
      .attr("width", "500%")
      .attr("height", "500%");
    accentGlow
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "7")
      .attr("result", "blur");
    accentGlow
      .append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", (d) => d);

    // ─── SVG SETUP ────────────
    svg.attr("width", width).attr("height", height);

    // Background rect — uses theme surface
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 16)
      .attr("fill", colors.bgSecondary);

    // Subtle inner vignette
    const vigGrad = defs
      .append("radialGradient")
      .attr("id", "tree-vignette")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "60%");
    vigGrad.append("stop").attr("offset", "0%").attr("stop-color", "transparent");
    vigGrad.append("stop").attr("offset", "85%").attr("stop-color", "transparent");
    vigGrad.append("stop").attr("offset", "100%").attr("stop-color", colors.bgPrimary).attr("stop-opacity", 0.4);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 16)
      .attr("fill", "url(#tree-vignette)")
      .attr("pointer-events", "none");

    // ─── HIERARCHY ────────────
    const root = d3.hierarchy<LanguageFamilyNode>(data) as TreeNode;

    // Initially collapse deeper levels
    const collapseLevel = isMobile ? 2 : 3;
    root.descendants().forEach((d: TreeNode) => {
      if (d.depth >= collapseLevel && d.children) {
        d._children = d.children as TreeNode[];
        d.children = undefined;
      }
    });

    root.x0 = innerHeight / 2;
    root.y0 = 0;

    const treeLayout = d3
      .tree<LanguageFamilyNode>()
      .size([innerHeight, innerWidth])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.5));

    // Zoom behavior — DRAG ONLY, no scroll zoom
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 2.5])
      .filter((event) => {
        // Only allow drag (mouse/touch move), disable scroll wheel zoom
        if (event.type === "wheel") return false;
        // Allow double-click zoom and touch pinch
        if (event.type === "dblclick") return true;
        // Allow drag
        return true;
      })
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Also prevent wheel events from being intercepted by the SVG
    svg.on("wheel.zoom", null);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const duration = 500;
    let nodeIdCounter = 0;

    function update(source: TreeNode) {
      const treeData = treeLayout(root);
      const nodes = treeData.descendants() as TreeNode[];
      const links = treeData.links();

      // Fixed-depth horizontal spacing
      const depthSpacing = isMobile ? innerWidth / 4 : innerWidth / 5;
      nodes.forEach((d) => {
        d.y = d.depth * depthSpacing;
      });

      // ─── LINKS ─────────────────────
      const link = g
        .selectAll<SVGPathElement, d3.HierarchyLink<LanguageFamilyNode>>(
          "path.tree-link"
        )
        .data(links, (d) => (d.target as TreeNode).data.id);

      const linkEnter = link
        .enter()
        .append("path")
        .attr("class", "tree-link")
        .attr("fill", "none")
        .attr("stroke", (d) =>
          getNodeColor(d.target.data, colors.accent, colors.textSecondary, colors.textTertiary)
        )
        .attr("stroke-width", (d) =>
          d.target.data.classification === "disputed" ? 0.8 : 1.2
        )
        .attr("stroke-dasharray", (d) =>
          d.target.data.classification === "disputed" ? "4,4" : "none"
        )
        .attr("stroke-opacity", 0)
        .attr("d", () => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal(o, o);
        });

      linkEnter
        .merge(link)
        .transition()
        .duration(duration)
        .attr("stroke-opacity", 0.3)
        .attr("d", (d) =>
          diagonal(
            d.source as { x: number; y: number },
            d.target as { x: number; y: number }
          )
        );

      link
        .exit()
        .transition()
        .duration(duration)
        .attr("stroke-opacity", 0)
        .attr("d", () => {
          const o = { x: source.x || 0, y: source.y || 0 };
          return diagonal(o, o);
        })
        .remove();

      // ─── NODES ─────────────────────
      const nodeIdMap = new Map<TreeNode, string>();
      const node = g
        .selectAll<SVGGElement, TreeNode>("g.tree-node")
        .data(nodes, (d) => {
          const tn = d as TreeNode;
          if (!nodeIdMap.has(tn)) {
            nodeIdMap.set(tn, tn.data.id || String(++nodeIdCounter));
          }
          return nodeIdMap.get(tn)!;
        });

      const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "tree-node")
        .attr("transform", `translate(${source.y0 || 0},${source.x0 || 0})`)
        .attr("cursor", "pointer")
        .on("click", (_event, d) => {
          const tn = d as TreeNode;
          // Navigate to language page if linked
          if (
            tn.data.languageSlugs &&
            tn.data.languageSlugs.length > 0 &&
            onLanguageClick
          ) {
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

      // Soft glow halo (behind the main dot)
      nodeEnter
        .append("circle")
        .attr("class", "node-halo")
        .attr("r", 0)
        .attr("fill", (d) =>
          getNodeColor((d as TreeNode).data, colors.accent, colors.textSecondary, colors.textTertiary)
        )
        .attr("opacity", 0)
        .attr("filter", (d) => {
          const tn = d as TreeNode;
          return tn.data.languageSlugs && tn.data.languageSlugs.length > 0
            ? "url(#accent-glow)"
            : "url(#node-glow)";
        });

      // Main circle
      nodeEnter
        .append("circle")
        .attr("class", "node-core")
        .attr("r", 0)
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          // Collapsed (has hidden children) → filled with color
          if (tn._children) return getNodeColor(tn.data, colors.accent, colors.textSecondary, colors.textTertiary);
          // Linked language → filled with accent
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          // Expanded or leaf → hollow (fill with bg)
          return colors.bgSecondary;
        })
        .attr("stroke", (d) =>
          getNodeColor((d as TreeNode).data, colors.accent, colors.textSecondary, colors.textTertiary)
        )
        .attr("stroke-width", (d) => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return 2.5;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return 2;
          return 1.5;
        })
        .attr("stroke-dasharray", (d) =>
          (d as TreeNode).data.status === "reconstructed" ? "3,2" : "none"
        );

      // Label
      nodeEnter
        .append("text")
        .attr("class", "node-label")
        .attr("dy", "0.35em")
        .attr("x", (d) => {
          const tn = d as TreeNode;
          const hasKids = tn.children || tn._children;
          return hasKids
            ? -(getNodeRadius(tn.data, isMobile) + 8)
            : getNodeRadius(tn.data, isMobile) + 8;
        })
        .attr("text-anchor", (d) => {
          const tn = d as TreeNode;
          return tn.children || tn._children ? "end" : "start";
        })
        .text((d) => {
          const tn = d as TreeNode;
          // Add arrow indicator for linked languages
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) {
            return `${tn.data.name} →`;
          }
          return tn.data.name;
        })
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          if (tn.data.status === "extinct") return colors.textTertiary;
          return colors.textSecondary;
        })
        .attr("font-size", (d) => {
          const tn = d as TreeNode;
          const base = isMobile ? 9 : 12;
          switch (tn.data.level) {
            case "family": return `${base + 3}px`;
            case "branch": return `${base + 1}px`;
            default: return `${base}px`;
          }
        })
        .attr("font-style", (d) =>
          (d as TreeNode).data.status === "extinct" ? "italic" : "normal"
        )
        .attr("font-family", (d) => {
          const tn = d as TreeNode;
          return tn.data.level === "family" || tn.data.level === "branch"
            ? "var(--font-display), Georgia, serif"
            : "var(--font-body), serif";
        })
        .attr("font-weight", (d) => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return "500";
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return "500";
          return "400";
        })
        .attr("opacity", 0);

      // ─── UPDATE ─────────────────────
      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      // Halo
      nodeUpdate
        .select(".node-halo")
        .transition()
        .duration(duration)
        .attr("r", (d) => {
          const tn = d as TreeNode;
          const base = getNodeRadius(tn.data, isMobile);
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return base * 3;
          if (tn.data.level === "family") return base * 2.5;
          return base * 1.5;
        })
        .attr("opacity", (d) => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return 0.15;
          if (tn.data.level === "family") return 0.1;
          return 0.04;
        });

      // Core
      nodeUpdate
        .select(".node-core")
        .transition()
        .duration(duration)
        .attr("r", (d) => getNodeRadius((d as TreeNode).data, isMobile))
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          if (tn._children) return getNodeColor(tn.data, colors.accent, colors.textSecondary, colors.textTertiary);
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0) return colors.accent;
          return colors.bgSecondary;
        });

      // Labels
      nodeUpdate
        .select(".node-label")
        .transition()
        .duration(duration)
        .attr("opacity", (d) => {
          const tn = d as TreeNode;
          if (tn.data.status === "extinct") return 0.5;
          return 0.9;
        });

      // ─── EXIT ─────────────────────
      const nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select(".node-halo").attr("r", 0).attr("opacity", 0);
      nodeExit.select(".node-core").attr("r", 0);
      nodeExit.select(".node-label").attr("opacity", 0);

      // Store positions
      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function diagonal(
      s: { x: number; y: number },
      d: { x: number; y: number }
    ): string {
      return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    }

    // Initial render
    update(root);

    // Auto-fit: compute bounding box of visible nodes and zoom to fit
    const allNodes = root.descendants();
    if (allNodes.length > 0) {
      const xExtent = d3.extent(allNodes, (d) => d.x) as [number, number];
      const yExtent = d3.extent(allNodes, (d) => d.y) as [number, number];

      const treeBoundsWidth = (yExtent[1] - yExtent[0]) + margin.left + margin.right + 60;
      const treeBoundsHeight = (xExtent[1] - xExtent[0]) + margin.top + margin.bottom + 40;

      const scaleX = width / treeBoundsWidth;
      const scaleY = height / treeBoundsHeight;
      const fitScale = Math.min(scaleX, scaleY, 1.1); // Don't over-zoom

      const centerX = (yExtent[0] + yExtent[1]) / 2;
      const centerY = (xExtent[0] + xExtent[1]) / 2;

      const tx = width / 2 - (centerX + margin.left) * fitScale;
      const ty = height / 2 - (centerY + margin.top) * fitScale;

      svg
        .transition()
        .duration(800)
        .ease(d3.easeCubicOut)
        .call(
          zoom.transform,
          d3.zoomIdentity.translate(tx, ty).scale(fitScale)
        );
    }
  }, [data, dimensions, isMobile, getNodeColor, getNodeRadius, getThemeColors, onLanguageClick]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-2xl">
      {/* Legend — theme-aware */}
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
            style={{
              border: "1.5px solid var(--theme-text-secondary)",
              background: "var(--theme-bg-secondary)",
            }}
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
            style={{
              background: "var(--theme-accent)",
              boxShadow: "0 0 4px var(--theme-glow)",
            }}
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

      {/* Drag hint */}
      <div
        className="absolute bottom-3 right-3 z-10 text-[10px] px-2 py-1 rounded-lg"
        style={{
          background: "var(--theme-surface)",
          border: "1px solid var(--theme-border)",
          color: "var(--theme-text-tertiary)",
          fontFamily: "var(--font-body)",
          opacity: 0.6,
        }}
      >
        Drag to pan
      </div>

      <svg
        ref={svgRef}
        className="relative w-full"
        style={{
          height: dimensions.height,
          borderRadius: "16px",
        }}
      />
    </div>
  );
}
