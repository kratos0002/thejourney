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
 * Redesigned to match the Journey's "liquid depth" brand language:
 * deep dark backgrounds, amber glow halos, luminous connections,
 * breathing animations, film grain, edge vignette.
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
        const height = mobile
          ? Math.max(500, width * 1.4)
          : Math.max(500, width * 0.7);
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
          return 9 * base;
        case "branch":
          return 6 * base;
        case "sub-branch":
          return 5 * base;
        case "language":
          return 4.5 * base;
        default:
          return 4 * base;
      }
    },
    []
  );

  // Get color for a node — use displayColor or fallback based on status
  const getNodeColor = useCallback((d: LanguageFamilyNode) => {
    if (d.displayColor) return d.displayColor;
    switch (d.status) {
      case "extinct":
        return "#6b6866";
      case "reconstructed":
        return "#d4a574";
      default:
        return "#a8a4a0";
    }
  }, []);

  // Render the D3 tree
  useEffect(() => {
    if (!svgRef.current || !data) return;

    const { width, height } = dimensions;
    const margin = {
      top: 30,
      right: isMobile ? 130 : 190,
      bottom: 30,
      left: isMobile ? 70 : 100,
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // ─── DEFS: Gradients, filters, glows ────────────
    const defs = svg.append("defs");

    // Radial background gradient — deep abyss with warm center
    const bgGrad = defs
      .append("radialGradient")
      .attr("id", "tree-bg-gradient")
      .attr("cx", "50%")
      .attr("cy", "45%")
      .attr("r", "65%");
    bgGrad
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#14141e")
      .attr("stop-opacity", 1);
    bgGrad
      .append("stop")
      .attr("offset", "60%")
      .attr("stop-color", "#0e0e16")
      .attr("stop-opacity", 1);
    bgGrad
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#0a0a10")
      .attr("stop-opacity", 1);

    // Edge vignette gradient
    const vignetteGrad = defs
      .append("radialGradient")
      .attr("id", "tree-vignette")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "55%");
    vignetteGrad
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "transparent");
    vignetteGrad
      .append("stop")
      .attr("offset", "75%")
      .attr("stop-color", "transparent");
    vignetteGrad
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgba(6, 6, 10, 0.5)");

    // Node glow filter — soft ambient halo
    const nodeGlow = defs
      .append("filter")
      .attr("id", "node-glow")
      .attr("x", "-200%")
      .attr("y", "-200%")
      .attr("width", "500%")
      .attr("height", "500%");
    nodeGlow
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", isMobile ? "6" : "8")
      .attr("result", "blur");
    nodeGlow
      .append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", (d) => d);

    // Accent glow for linked language nodes — warmer, broader
    const accentGlow = defs
      .append("filter")
      .attr("id", "accent-glow")
      .attr("x", "-300%")
      .attr("y", "-300%")
      .attr("width", "700%")
      .attr("height", "700%");
    accentGlow
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "10")
      .attr("result", "blur");
    accentGlow
      .append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", (d) => d);

    // Link glow filter — very subtle
    const linkGlow = defs
      .append("filter")
      .attr("id", "link-glow")
      .attr("x", "-10%")
      .attr("y", "-10%")
      .attr("width", "120%")
      .attr("height", "120%");
    linkGlow
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "2")
      .attr("result", "blur");
    linkGlow
      .append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", (d) => d);

    // ─── BACKGROUND ────────────
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 16)
      .attr("fill", "url(#tree-bg-gradient)");

    // Vignette overlay
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 16)
      .attr("fill", "url(#tree-vignette)")
      .attr("pointer-events", "none");

    // ─── HIERARCHY ────────────
    const root = d3.hierarchy<LanguageFamilyNode>(data) as TreeNode;

    // Initially collapse sub-branches on mobile, show branches on desktop
    const collapseLevel = isMobile ? 2 : 3;
    root.descendants().forEach((d: TreeNode) => {
      if (d.depth >= collapseLevel && d.children) {
        (d as TreeNode)._children = d.children as TreeNode[];
        d.children = undefined;
      }
    });

    root.x0 = innerHeight / 2;
    root.y0 = 0;

    // Create tree layout (horizontal)
    const treeLayout = d3
      .tree<LanguageFamilyNode>()
      .size([innerHeight, innerWidth])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.5));

    // Zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.attr("width", width).attr("height", height).call(zoom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const duration = 600;
    let nodeIdCounter = 0;

    function update(source: TreeNode) {
      const treeData = treeLayout(root);
      const nodes = treeData.descendants() as TreeNode[];
      const links = treeData.links();

      // Normalize for fixed-depth spacing
      const depthSpacing = isMobile ? innerWidth / 4 : innerWidth / 5;
      nodes.forEach((d) => {
        d.y = d.depth * depthSpacing;
      });

      // ─── LINKS ─────────────────────────────────
      const link = g
        .selectAll<SVGPathElement, d3.HierarchyLink<LanguageFamilyNode>>(
          "path.tree-link"
        )
        .data(links, (d) => {
          const target = d.target as TreeNode;
          return target.data.id;
        });

      // Enter links — glow trail layer (drawn first, behind)
      const linkEnter = link
        .enter()
        .append("path")
        .attr("class", "tree-link")
        .attr("fill", "none")
        .attr("stroke", (d) => {
          const color = getNodeColor(d.target.data);
          return color;
        })
        .attr("stroke-width", (d) => {
          return d.target.data.classification === "disputed" ? 1 : 1.5;
        })
        .attr("stroke-dasharray", (d) =>
          d.target.data.classification === "disputed" ? "4,4" : "none"
        )
        .attr("stroke-opacity", 0.2)
        .attr("filter", "url(#link-glow)")
        .attr("d", () => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal(o, o);
        });

      linkEnter
        .merge(link)
        .transition()
        .duration(duration)
        .attr("stroke-opacity", 0.25)
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

      // ─── NODES ─────────────────────────────────
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
        .attr(
          "transform",
          `translate(${source.y0 || 0},${source.x0 || 0})`
        )
        .attr("cursor", "pointer")
        .on("click", (_event, d) => {
          const tn = d as TreeNode;
          if (
            tn.data.level === "language" &&
            tn.data.languageSlugs &&
            tn.data.languageSlugs.length > 0 &&
            onLanguageClick
          ) {
            onLanguageClick(tn.data.languageSlugs[0]);
            return;
          }
          if (tn.children) {
            tn._children = tn.children as TreeNode[];
            tn.children = undefined;
          } else if (tn._children) {
            tn.children = tn._children;
            tn._children = undefined;
          }
          update(tn);
        });

      // Outer glow halo — large, soft, atmospheric
      nodeEnter
        .append("circle")
        .attr("class", "node-halo")
        .attr("r", 0)
        .attr("fill", (d) => {
          const color = getNodeColor((d as TreeNode).data);
          return color;
        })
        .attr("opacity", 0)
        .attr("filter", (d) => {
          const tn = d as TreeNode;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0)
            return "url(#accent-glow)";
          return "url(#node-glow)";
        });

      // Main node circle
      nodeEnter
        .append("circle")
        .attr("class", "node-core")
        .attr("r", 0)
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          // Filled if has hidden children (collapsed), hollow-ish if expanded or leaf
          if (tn._children) return getNodeColor(tn.data);
          // Semi-transparent fill for expanded/leaf to keep depth
          return "#0e0e16";
        })
        .attr("stroke", (d) => getNodeColor((d as TreeNode).data))
        .attr("stroke-width", (d) => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return 2.5;
          if (
            tn.data.languageSlugs &&
            tn.data.languageSlugs.length > 0
          )
            return 2;
          return 1.5;
        })
        .attr("stroke-dasharray", (d) =>
          (d as TreeNode).data.status === "reconstructed" ? "3,2" : "none"
        );

      // Inner luminous dot for linked languages
      nodeEnter
        .filter(
          (d) =>
            !!(
              (d as TreeNode).data.languageSlugs &&
              (d as TreeNode).data.languageSlugs!.length > 0
            )
        )
        .append("circle")
        .attr("class", "node-inner")
        .attr("r", 0)
        .attr("fill", "#d4a574")
        .attr("opacity", 0);

      // Label for each node
      nodeEnter
        .append("text")
        .attr("class", "node-label")
        .attr("dy", "0.35em")
        .attr("x", (d) => {
          const tn = d as TreeNode;
          const hasChildren = tn.children || tn._children;
          return hasChildren
            ? -(getNodeRadius(tn.data, isMobile) + 8)
            : getNodeRadius(tn.data, isMobile) + 8;
        })
        .attr("text-anchor", (d) => {
          const tn = d as TreeNode;
          return tn.children || tn._children ? "end" : "start";
        })
        .text((d) => (d as TreeNode).data.name)
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          if (tn.data.status === "extinct") return "#4a4846";
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0)
            return "#d4a574";
          return "#c8c4be";
        })
        .attr("font-size", (d) => {
          const tn = d as TreeNode;
          const base = isMobile ? 10 : 12;
          switch (tn.data.level) {
            case "family":
              return `${base + 4}px`;
            case "branch":
              return `${base + 1}px`;
            default:
              return `${base}px`;
          }
        })
        .attr("font-style", (d) =>
          (d as TreeNode).data.status === "extinct" ? "italic" : "normal"
        )
        .attr("font-family", (d) => {
          const tn = d as TreeNode;
          // Use display font for family and branch names
          return tn.data.level === "family" || tn.data.level === "branch"
            ? "var(--font-display), Georgia, serif"
            : "var(--font-body), serif";
        })
        .attr("font-weight", (d) => {
          const tn = d as TreeNode;
          return tn.data.level === "family" ? "500" : "400";
        })
        .attr("letter-spacing", (d) => {
          const tn = d as TreeNode;
          return tn.data.level === "family" ? "0.02em" : "normal";
        })
        .attr("opacity", 0);

      // ─── UPDATE (merge enter + existing) ─────────
      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      // Animate halo
      nodeUpdate
        .select(".node-halo")
        .transition()
        .duration(duration)
        .attr("r", (d) => {
          const tn = d as TreeNode;
          const base = getNodeRadius(tn.data, isMobile);
          if (tn.data.level === "family") return base * 3.5;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0)
            return base * 3;
          return base * 2;
        })
        .attr("opacity", (d) => {
          const tn = d as TreeNode;
          if (tn.data.level === "family") return 0.15;
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0)
            return 0.12;
          return 0.06;
        });

      // Animate core circle
      nodeUpdate
        .select(".node-core")
        .transition()
        .duration(duration)
        .attr("r", (d) => getNodeRadius((d as TreeNode).data, isMobile))
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          if (tn._children) return getNodeColor(tn.data);
          return "#0e0e16";
        });

      // Animate inner dot for linked languages
      nodeUpdate
        .select(".node-inner")
        .transition()
        .duration(duration)
        .attr("r", (d) => {
          const tn = d as TreeNode;
          return getNodeRadius(tn.data, isMobile) * 0.4;
        })
        .attr("opacity", 0.8);

      // Animate label
      nodeUpdate
        .select(".node-label")
        .transition()
        .duration(duration)
        .attr("opacity", (d) => {
          const tn = d as TreeNode;
          if (tn.data.status === "extinct") return 0.5;
          return 0.9;
        });

      // ─── EXIT ─────────────
      const nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select(".node-halo").attr("r", 0).attr("opacity", 0);
      nodeExit.select(".node-core").attr("r", 0);
      nodeExit.select(".node-inner").attr("r", 0).attr("opacity", 0);
      nodeExit.select(".node-label").attr("opacity", 0);

      // Store positions for next transition
      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Diagonal link generator — cubic bezier
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

    // Fit to view initially with a smooth zoom
    const initialScale = isMobile ? 0.8 : 0.85;
    const initialX = margin.left;
    const initialY = isMobile ? -innerHeight * 0.1 : 0;
    svg
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .call(
        zoom.transform,
        d3.zoomIdentity
          .translate(initialX, initialY + margin.top)
          .scale(initialScale)
      );
  }, [data, dimensions, isMobile, getNodeColor, getNodeRadius, onLanguageClick]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-2xl">
      {/* Legend — subtle, integrated into the dark atmosphere */}
      <div
        className="absolute top-4 left-4 z-10 flex flex-wrap gap-3 text-[10px] px-3 py-2.5 rounded-xl"
        style={{
          background: "rgba(10, 10, 16, 0.7)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(240, 237, 230, 0.06)",
          color: "#6b6866",
          fontFamily: "var(--font-body)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{
              border: "1.5px solid #a8a4a0",
              background: "#0e0e16",
            }}
          />
          Living
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: "#6b6866", opacity: 0.4 }}
          />
          <span className="italic">Extinct</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{
              background: "#d4a574",
              boxShadow: "0 0 6px rgba(212, 165, 116, 0.4)",
            }}
          />
          Explore history
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{
              background: "#a8a4a0",
            }}
          />
          Tap to expand
        </span>
      </div>

      {/* Zoom hint — whisper-quiet */}
      <div
        className="absolute bottom-4 right-4 z-10 text-[10px] px-2.5 py-1.5 rounded-lg"
        style={{
          background: "rgba(10, 10, 16, 0.5)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(240, 237, 230, 0.04)",
          color: "#4a4846",
          fontFamily: "var(--font-body)",
        }}
      >
        {isMobile ? "Pinch to zoom" : "Scroll to zoom"}
      </div>

      <svg
        ref={svgRef}
        className="relative w-full"
        style={{
          height: dimensions.height,
          borderRadius: "16px",
        }}
      />

      {/* Film grain overlay — matches rest of app */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />
    </div>
  );
}
