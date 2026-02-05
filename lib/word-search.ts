/**
 * Word Search Engine — "The Summoning"
 *
 * Client-side fuzzy search across the word collection.
 * Builds a lightweight search index and scores matches
 * by field relevance. Designed for 302 words — no external
 * library needed.
 *
 * @see docs/features/SEARCH_WORD_SPEC.md
 */

import type { Word } from "@/data/word-types";
import { getLanguageFamily, detectThemes } from "@/lib/word-filters";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SearchEntry {
  slug: string;
  /** slug + word + romanization + originalWord (highest weight) */
  primary: string;
  /** hook + language + language family (medium weight) */
  secondary: string;
  /** story paragraphs + journey locations + meaningNow + themes (lower weight) */
  tertiary: string;
}

export interface SearchResult {
  slug: string;
  score: number;
  /** The hook line for this word — used as whisper label */
  hook: string;
}

// ---------------------------------------------------------------------------
// Levenshtein distance — used for typo tolerance on slugs
// ---------------------------------------------------------------------------

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;

  // Early exits
  if (m === 0) return n;
  if (n === 0) return m;

  // Use a single flat array for the DP row (memory efficient)
  const row = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = 1; i <= m; i++) {
    let prev = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const val = Math.min(
        row[j] + 1,       // deletion
        prev + 1,          // insertion
        row[j - 1] + cost  // substitution
      );
      row[j - 1] = prev;
      prev = val;
    }
    row[n] = prev;
  }

  return row[n];
}

// ---------------------------------------------------------------------------
// Index builder
// ---------------------------------------------------------------------------

/**
 * Builds a search index from the full word collection.
 * Call once on component mount; the index is a plain array
 * that can be reused across searches.
 */
export function buildSearchIndex(words: Word[]): SearchEntry[] {
  return words.map((word) => {
    const family = getLanguageFamily(word.language);
    const themes = detectThemes(word);
    const journeyLocations = word.journey.map((j) => j.location).join(" ");

    return {
      slug: word.slug,
      primary: [
        word.slug,
        word.word,
        word.romanization,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
      secondary: [word.hook, word.language, family]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
      tertiary: [
        ...word.story,
        journeyLocations,
        word.meaningNow,
        ...themes,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    };
  });
}

// ---------------------------------------------------------------------------
// Search function
// ---------------------------------------------------------------------------

/** Minimum query length before searching (avoids noisy single-char matches) */
const MIN_QUERY_LENGTH = 2;

/** Maximum fuzzy distance to still count as a match */
const MAX_FUZZY_DISTANCE = 2;

/** Score weights by match tier */
const SCORES = {
  exactSlug: 100,
  slugStartsWith: 80,
  primaryIncludes: 60,
  secondaryIncludes: 40,
  tertiaryIncludes: 20,
  fuzzySlug: 10,
} as const;

/**
 * Search the index and return scored results, sorted by relevance.
 *
 * @param index  - Pre-built search index from `buildSearchIndex`
 * @param query  - User input string
 * @returns Matching results sorted by score (highest first).
 *          Returns an empty array if query is too short.
 */
export function searchWords(
  index: SearchEntry[],
  words: Word[],
  query: string
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < MIN_QUERY_LENGTH) return [];

  const results: SearchResult[] = [];

  for (let i = 0; i < index.length; i++) {
    const entry = index[i];
    let score = 0;

    // Tier 1: Exact slug match
    if (entry.slug === q) {
      score = SCORES.exactSlug;
    }
    // Tier 2: Slug starts with query
    else if (entry.slug.startsWith(q)) {
      score = SCORES.slugStartsWith;
    }
    // Tier 3: Primary fields contain query
    else if (entry.primary.includes(q)) {
      score = SCORES.primaryIncludes;
    }
    // Tier 4: Secondary fields contain query
    else if (entry.secondary.includes(q)) {
      score = SCORES.secondaryIncludes;
    }
    // Tier 5: Tertiary fields contain query
    else if (entry.tertiary.includes(q)) {
      score = SCORES.tertiaryIncludes;
    }
    // Tier 6: Fuzzy match on slug only (typo tolerance)
    else if (q.length >= 3) {
      const dist = levenshtein(q, entry.slug);
      if (dist <= MAX_FUZZY_DISTANCE) {
        score = SCORES.fuzzySlug;
      }
    }

    if (score > 0) {
      results.push({
        slug: entry.slug,
        score,
        hook: words[i].hook,
      });
    }
  }

  // Sort by score descending, then alphabetically for ties
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.slug.localeCompare(b.slug);
  });

  return results;
}

// ---------------------------------------------------------------------------
// Suggestion for empty state
// ---------------------------------------------------------------------------

/**
 * Find the closest fuzzy match for the empty-state "did you mean?" prompt.
 * Returns null if no word is close enough (distance <= 3).
 */
export function findClosestMatch(
  index: SearchEntry[],
  query: string
): string | null {
  const q = query.trim().toLowerCase();
  if (q.length < MIN_QUERY_LENGTH) return null;

  let bestSlug: string | null = null;
  let bestDist = 4; // threshold: must be <= 3

  for (const entry of index) {
    const dist = levenshtein(q, entry.slug);
    if (dist < bestDist) {
      bestDist = dist;
      bestSlug = entry.slug;
    }
  }

  return bestSlug;
}
