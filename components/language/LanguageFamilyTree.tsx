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
 * Uses D3's tree layout with expand/collapse on click.
 * Nodes are styled by status (living, extinct, reconstructed)
 * and by level (family, branch, sub-branch, language).
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
        // Height scales with tree depth; mobile gets more vertical space
        const height = mobile ? Math.max(500, width * 1.4) : Math.max(500, width * 0.7);
        setDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Color based on node status
  const getNodeColor = useCallback((d: LanguageFamilyNode) => {
    if (d.displayColor) return d.displayColor;
    switch (d.status) {
      case "extinct":
        return "var(--theme-text-tertiary)";
      case "reconstructed":
        return "var(--theme-accent)";
      default:
        return "var(--theme-text-secondary)";
    }
  }, []);

  // Node radius by level
  const getNodeRadius = useCallback(
    (d: LanguageFamilyNode, mobile: boolean) => {
      const base = mobile ? 0.8 : 1;
      switch (d.level) {
        case "family":
          return 8 * base;
        case "branch":
          return 6 * base;
        case "sub-branch":
          return 5 * base;
        case "language":
          return 4 * base;
        default:
          return 4 * base;
      }
    },
    []
  );

  // Render the D3 tree
  useEffect(() => {
    if (!svgRef.current || !data) return;

    const { width, height } = dimensions;
    const margin = {
      top: 20,
      right: isMobile ? 120 : 180,
      bottom: 20,
      left: isMobile ? 60 : 90,
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create hierarchy
    const root = d3.hierarchy<LanguageFamilyNode>(data) as TreeNode;

    // Initially collapse sub-branches on mobile, show branches on desktop
    const collapseLevel = isMobile ? 2 : 3;
    root.descendants().forEach((d: TreeNode) => {
      if (d.depth >= collapseLevel && d.children) {
        (d as TreeNode)._children = d.children as TreeNode[];
        d.children = undefined;
      }
    });

    // Store initial position
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

    svg
      .attr("width", width)
      .attr("height", height)
      .call(zoom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Duration for transitions
    const duration = 500;
    let nodeIdCounter = 0;

    function update(source: TreeNode) {
      // Compute the new tree layout
      const treeData = treeLayout(root);
      const nodes = treeData.descendants() as TreeNode[];
      const links = treeData.links();

      // Normalize for fixed-depth (horizontal spacing)
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

      // Enter links
      const linkEnter = link
        .enter()
        .append("path")
        .attr("class", "tree-link")
        .attr("fill", "none")
        .attr("stroke", (d) => {
          // Dashed for disputed classification
          return d.target.data.classification === "disputed"
            ? "var(--theme-text-tertiary)"
            : "var(--theme-border)";
        })
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", (d) =>
          d.target.data.classification === "disputed" ? "4,4" : "none"
        )
        .attr("stroke-opacity", 0.6)
        .attr("d", () => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal(o, o);
        });

      // Update + enter
      linkEnter
        .merge(link)
        .transition()
        .duration(duration)
        .attr("d", (d) =>
          diagonal(
            d.source as { x: number; y: number },
            d.target as { x: number; y: number }
          )
        );

      // Exit links
      link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", () => {
          const o = { x: source.x || 0, y: source.y || 0 };
          return diagonal(o, o);
        })
        .remove();

      // ─── NODES ─────────────────────────────────
      // Map to track unique IDs for D3 data join
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

      // Enter nodes at source's previous position
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
          // If it's a language with a linked page, navigate
          if (
            tn.data.level === "language" &&
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

      // Circle for each node
      nodeEnter
        .append("circle")
        .attr("r", 0)
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          // Filled if has hidden children, hollow if expanded or leaf
          return tn._children
            ? getNodeColor(tn.data)
            : "var(--theme-bg-primary)";
        })
        .attr("stroke", (d) => getNodeColor((d as TreeNode).data))
        .attr("stroke-width", (d) => {
          const tn = d as TreeNode;
          return tn.data.level === "family" ? 2.5 : 2;
        })
        .attr("stroke-dasharray", (d) =>
          (d as TreeNode).data.status === "reconstructed" ? "3,2" : "none"
        );

      // Label for each node
      nodeEnter
        .append("text")
        .attr("dy", "0.35em")
        .attr("x", (d) => {
          const tn = d as TreeNode;
          const hasChildren = tn.children || tn._children;
          return hasChildren ? -(getNodeRadius(tn.data, isMobile) + 6) : getNodeRadius(tn.data, isMobile) + 6;
        })
        .attr("text-anchor", (d) => {
          const tn = d as TreeNode;
          return tn.children || tn._children ? "end" : "start";
        })
        .text((d) => (d as TreeNode).data.name)
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          if (tn.data.status === "extinct") return "var(--theme-text-tertiary)";
          if (tn.data.languageSlugs && tn.data.languageSlugs.length > 0)
            return "var(--theme-accent)";
          return "var(--theme-text-secondary)";
        })
        .attr("font-size", (d) => {
          const tn = d as TreeNode;
          const base = isMobile ? 10 : 12;
          switch (tn.data.level) {
            case "family":
              return `${base + 3}px`;
            case "branch":
              return `${base + 1}px`;
            default:
              return `${base}px`;
          }
        })
        .attr("font-style", (d) =>
          (d as TreeNode).data.status === "extinct" ? "italic" : "normal"
        )
        .attr("font-family", "var(--font-body)")
        .attr("opacity", 0);

      // Linked language indicator (small underline dot)
      nodeEnter
        .filter(
          (d) =>
            !!(
              (d as TreeNode).data.languageSlugs &&
              (d as TreeNode).data.languageSlugs!.length > 0
            )
        )
        .append("circle")
        .attr("r", 2)
        .attr("cy", (d) => getNodeRadius((d as TreeNode).data, isMobile) + 8)
        .attr("fill", "var(--theme-accent)")
        .attr("opacity", 0.7);

      // Update: merge enter + existing
      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodeUpdate
        .select("circle")
        .transition()
        .duration(duration)
        .attr("r", (d) => getNodeRadius((d as TreeNode).data, isMobile))
        .attr("fill", (d) => {
          const tn = d as TreeNode;
          return tn._children
            ? getNodeColor(tn.data)
            : "var(--theme-bg-primary)";
        });

      nodeUpdate
        .select("text")
        .transition()
        .duration(duration)
        .attr("opacity", 1);

      // Exit: remove old nodes
      const nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("circle").attr("r", 0);
      nodeExit.select("text").attr("opacity", 0);

      // Store positions for next transition
      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Diagonal link generator (cubic bezier)
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

    // Fit to view initially
    const initialScale = isMobile ? 0.8 : 0.9;
    const initialX = margin.left;
    const initialY = isMobile ? -innerHeight * 0.1 : 0;
    svg
      .transition()
      .duration(800)
      .call(
        zoom.transform,
        d3.zoomIdentity
          .translate(initialX, initialY + margin.top)
          .scale(initialScale)
      );
  }, [data, dimensions, isMobile, getNodeColor, getNodeRadius, onLanguageClick]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-xl">
      {/* Subtle background */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "var(--theme-surface)",
          border: "1px solid var(--theme-border)",
        }}
      />

      {/* Legend */}
      <div
        className="absolute top-3 left-3 z-10 flex flex-wrap gap-3 text-[10px] font-body px-3 py-2 rounded-lg"
        style={{
          background: "var(--theme-bg-primary)",
          border: "1px solid var(--theme-border)",
          color: "var(--theme-text-tertiary)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full border-2"
            style={{ borderColor: "var(--theme-text-secondary)", background: "var(--theme-bg-primary)" }}
          />
          Living
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--theme-text-tertiary)", opacity: 0.5 }}
          />
          <span className="italic">Extinct</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--theme-accent)" }}
          />
          Has language page
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{
              borderColor: "var(--theme-text-secondary)",
              background: "var(--theme-text-secondary)",
            }}
          />
          Tap to expand
        </span>
      </div>

      {/* Zoom hint */}
      <div
        className="absolute bottom-3 right-3 z-10 text-[10px] font-body px-2 py-1 rounded"
        style={{
          background: "var(--theme-bg-primary)",
          border: "1px solid var(--theme-border)",
          color: "var(--theme-text-tertiary)",
          opacity: 0.7,
        }}
      >
        {isMobile ? "Pinch to zoom · Drag to pan" : "Scroll to zoom · Drag to pan"}
      </div>

      <svg
        ref={svgRef}
        className="relative w-full"
        style={{ height: dimensions.height }}
      />
    </div>
  );
}
