/**
 * Language Family Trees — Central Index
 *
 * Exports all language family data for the /families and /family/[slug] pages.
 * Each family contains a nested tree structure used by the D3 dendrogram.
 */

import type { LanguageFamilyTree, LanguageFamilyNode } from "../language-types";
import { indoEuropean } from "./indo-european";
import { afroAsiatic } from "./afro-asiatic";

// Export individual families
export { indoEuropean, afroAsiatic };

// All families as array (sorted by word count descending at runtime)
export const allFamilies: LanguageFamilyTree[] = [
  indoEuropean,
  afroAsiatic,
];

// Lookup by slug
export function getFamilyBySlug(slug: string): LanguageFamilyTree | undefined {
  return allFamilies.find((f) => f.slug === slug);
}

// Get all family slugs (for static generation)
export function getAllFamilySlugs(): string[] {
  return allFamilies.map((f) => f.slug);
}

/**
 * Count all nodes in a tree (for stats)
 */
export function countTreeNodes(node: LanguageFamilyNode): number {
  let count = 1;
  if (node.children) {
    for (const child of node.children) {
      count += countTreeNodes(child);
    }
  }
  return count;
}

/**
 * Count language-level nodes (leaves) in a tree
 */
export function countLanguages(node: LanguageFamilyNode): number {
  if (node.level === "language") return 1;
  let count = 0;
  if (node.children) {
    for (const child of node.children) {
      count += countLanguages(child);
    }
  }
  return count;
}

/**
 * Find all language-level nodes that have a languageSlugs connection
 * (i.e., they link to an existing /language/[slug] page)
 */
export function getConnectedLanguages(node: LanguageFamilyNode): LanguageFamilyNode[] {
  const result: LanguageFamilyNode[] = [];
  if (node.languageSlugs && node.languageSlugs.length > 0) {
    result.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      result.push(...getConnectedLanguages(child));
    }
  }
  return result;
}

/**
 * Get total branch count (direct children of the root)
 */
export function countBranches(family: LanguageFamilyTree): number {
  return family.tree.children?.length || 0;
}
