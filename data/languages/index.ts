/**
 * Language History Index
 *
 * Central export for all language history data.
 * Add new languages here as they are created.
 */

import type { LanguageHistory } from "../language-types";
import { sanskrit } from "./sanskrit";
import { persian } from "./persian";

// Export individual languages
export { sanskrit, persian };

// All languages as array
export const allLanguages: LanguageHistory[] = [
  sanskrit,
  persian,
];

// Lookup by slug
export function getLanguageBySlug(slug: string): LanguageHistory | undefined {
  return allLanguages.find((lang) => lang.slug === slug);
}

// Get all language slugs (for static generation)
export function getAllLanguageSlugs(): string[] {
  return allLanguages.map((lang) => lang.slug);
}
