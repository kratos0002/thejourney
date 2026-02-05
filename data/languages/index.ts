/**
 * Language History Index
 *
 * Central export for all language history data.
 * Add new languages here as they are created.
 */

import type { LanguageHistory } from "../language-types";
import { sanskrit } from "./sanskrit";
import { persian } from "./persian";
import { arabic } from "./arabic";
import { latin } from "./latin";
import { greek } from "./greek";
import { japanese } from "./japanese";
import { italian } from "./italian";
import { russian } from "./russian";
import { nahuatl } from "./nahuatl";
import { tamil } from "./tamil";

// Export individual languages
export { sanskrit, persian, arabic, latin, greek, japanese, italian, russian, nahuatl, tamil };

// All languages as array
export const allLanguages: LanguageHistory[] = [
  sanskrit,
  persian,
  arabic,
  latin,
  greek,
  japanese,
  italian,
  russian,
  nahuatl,
  tamil,
];

// Lookup by slug
export function getLanguageBySlug(slug: string): LanguageHistory | undefined {
  return allLanguages.find((lang) => lang.slug === slug);
}

// Get all language slugs (for static generation)
export function getAllLanguageSlugs(): string[] {
  return allLanguages.map((lang) => lang.slug);
}

// Lookup by display name (e.g., "Arabic" → arabic object)
export function getLanguageByName(name: string): LanguageHistory | undefined {
  return allLanguages.find((lang) => lang.language === name);
}
