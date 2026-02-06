/**
 * Word Search Engine — "The Summoning"
 *
 * Smart client-side search across the word collection.
 * Builds a weighted search index and scores matches using
 * cumulative scoring, word-boundary matching, multi-term AND
 * logic, Unicode normalization, and adaptive fuzzy matching.
 *
 * Designed for ~300 words — no external library needed.
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
  /** Original hook text (for display in results) */
  hook: string;
  /** Normalized slug for fuzzy matching */
  slugNorm: string;
  /** Normalized word name for fuzzy matching */
  wordNorm: string;
  /** Normalized romanization for fuzzy matching */
  romanNorm: string;
  /** slug + word + romanization (normalized, highest weight) */
  primary: string;
  /** hook + language + language family (normalized, medium weight) */
  secondary: string;
  /** themes + journey locations (normalized, discrete tokens) */
  tertiaryStructured: string;
  /** story paragraphs + meaningNow (normalized, prose — word-boundary matched) */
  tertiaryProse: string;
}

export interface SearchResult {
  slug: string;
  score: number;
  /** The hook line for this word — used as whisper label */
  hook: string;
}

// ---------------------------------------------------------------------------
// Text normalization — strips diacritics and lowercases
// ---------------------------------------------------------------------------

/**
 * Normalize text for search: strip diacritics (NFD decompose + remove
 * combining marks) and lowercase. Handles accented Latin, macrons,
 * and other diacritical marks gracefully.
 *
 * "hurakán" → "hurakan", "pāyjāma" → "payjama", "café" → "cafe"
 */
function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**
 * Escape special regex characters in user input to prevent
 * regex injection when building word-boundary patterns.
 */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Test whether `query` appears as a full word in `text`.
 * Uses word boundaries on BOTH sides so "pajama" does NOT
 * match "pajamas" in prose — only exact word occurrences.
 * Primary/secondary fields use substring matching instead,
 * so slug "pajamas" still matches query "pajama" there.
 */
function matchesFullWord(text: string, query: string): boolean {
  try {
    return new RegExp(`\\b${escapeRegex(query)}\\b`, "i").test(text);
  } catch {
    return text.includes(query);
  }
}

// ---------------------------------------------------------------------------
// Levenshtein distance — used for typo tolerance
// ---------------------------------------------------------------------------

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;

  if (m === 0) return n;
  if (n === 0) return m;

  // Single-row DP (memory efficient)
  const row = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = 1; i <= m; i++) {
    let prev = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const val = Math.min(
        row[j] + 1, // deletion
        prev + 1, // insertion
        row[j - 1] + cost // substitution
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
 *
 * All text is Unicode-normalized (diacritics stripped + lowercased)
 * for accent-insensitive matching. Duplicate slugs are skipped
 * (keeps first occurrence).
 */
export function buildSearchIndex(words: Word[]): SearchEntry[] {
  const seen = new Set<string>();
  return words.reduce<SearchEntry[]>((acc, word) => {
    if (seen.has(word.slug)) return acc;
    seen.add(word.slug);
    const family = getLanguageFamily(word.language);
    const themes = detectThemes(word);
    const journeyLocations = word.journey.map((j) => j.location).join(" ");

    acc.push({
      slug: word.slug,
      hook: word.hook,
      slugNorm: normalize(word.slug),
      wordNorm: normalize(word.word || ""),
      romanNorm: normalize(word.romanization || ""),
      primary: [word.slug, word.word, word.romanization]
        .filter(Boolean)
        .map(normalize)
        .join(" "),
      secondary: [word.hook, word.language, family]
        .filter(Boolean)
        .map(normalize)
        .join(" "),
      tertiaryStructured: [...themes, journeyLocations]
        .filter(Boolean)
        .map(normalize)
        .join(" "),
      tertiaryProse: [...word.story, word.meaningNow]
        .filter(Boolean)
        .map(normalize)
        .join(" "),
    });
    return acc;
  }, []);
}

// ---------------------------------------------------------------------------
// Search function
// ---------------------------------------------------------------------------

/** Minimum query length before searching */
const MIN_QUERY_LENGTH = 2;

/** Minimum query term length to search tertiary (prose) fields */
const MIN_TERTIARY_LENGTH = 4;

/** Cumulative score weights — additive, not first-match-wins */
const SCORES = {
  exactSlug: 100,
  slugStartsWith: 60,
  primaryIncludes: 40,
  secondaryIncludes: 25,
  tertiaryStructured: 12,
  tertiaryProse: 8,
  fuzzy: 5,
} as const;

/**
 * Score a single search term against one index entry.
 * Returns cumulative score across all matching tiers.
 */
function scoreTerm(entry: SearchEntry, term: string): number {
  let score = 0;

  // Tier 1: Exact slug match (highest signal)
  if (entry.slugNorm === term) {
    score += SCORES.exactSlug;
  }
  // Tier 2: Slug starts with query (strong signal, mutually exclusive with exact)
  else if (entry.slugNorm.startsWith(term)) {
    score += SCORES.slugStartsWith;
  }
  // Tier 3: Primary fields (slug + word + romanization) contain query
  else if (entry.primary.includes(term)) {
    score += SCORES.primaryIncludes;
  }

  // Tier 4: Secondary fields (hook + language + family) — additive
  if (entry.secondary.includes(term)) {
    score += SCORES.secondaryIncludes;
  }

  // Tier 5: Tertiary fields — only for longer queries to prevent noise
  if (term.length >= MIN_TERTIARY_LENGTH) {
    // 5a: Structured (themes, locations) — substring match is fine
    if (entry.tertiaryStructured.includes(term)) {
      score += SCORES.tertiaryStructured;
    }
    // 5b: Prose (story, meaningNow) — full-word match to avoid noise
    if (matchesFullWord(entry.tertiaryProse, term)) {
      score += SCORES.tertiaryProse;
    }
  }

  // Tier 6: Fuzzy match — only if no other tier matched this term
  if (score === 0 && term.length >= 3) {
    // Adaptive distance: strict for short/medium words, looser for long
    const maxDist = term.length <= 7 ? 1 : 2;
    const slugDist = levenshtein(term, entry.slugNorm);
    const wordDist = levenshtein(term, entry.wordNorm);
    const romanDist = entry.romanNorm
      ? levenshtein(term, entry.romanNorm)
      : Infinity;
    const bestDist = Math.min(slugDist, wordDist, romanDist);
    if (bestDist <= maxDist) {
      score += SCORES.fuzzy;
    }
  }

  return score;
}

/**
 * Search the index and return scored results, sorted by relevance.
 *
 * Supports multi-word queries with AND logic: all terms must match
 * at least one field. Scores are cumulative across tiers and terms.
 *
 * @param index  - Pre-built search index from `buildSearchIndex`
 * @param query  - User input string (can be multi-word)
 * @returns Matching results sorted by score (highest first).
 */
export function searchWords(
  index: SearchEntry[],
  _words: Word[],
  query: string
): SearchResult[] {
  const normalized = normalize(query.trim());

  // Split into terms, filter out too-short ones
  const terms = normalized
    .split(/\s+/)
    .filter((t) => t.length >= MIN_QUERY_LENGTH);

  if (terms.length === 0) return [];

  const results: SearchResult[] = [];

  for (let i = 0; i < index.length; i++) {
    const entry = index[i];
    let totalScore = 0;
    let allTermsMatch = true;

    // AND logic: every term must score > 0
    for (const term of terms) {
      const termScore = scoreTerm(entry, term);
      if (termScore === 0) {
        allTermsMatch = false;
        break; // early exit — no point checking remaining terms
      }
      totalScore += termScore;
    }

    if (allTermsMatch && totalScore > 0) {
      results.push({
        slug: entry.slug,
        score: totalScore,
        hook: entry.hook,
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
 * Checks slug, word name, and romanization. Returns null if nothing
 * is close enough (distance <= 3).
 */
export function findClosestMatch(
  index: SearchEntry[],
  query: string
): string | null {
  const q = normalize(query.trim());
  if (q.length < MIN_QUERY_LENGTH) return null;

  let bestSlug: string | null = null;
  let bestDist = 4; // threshold: must be <= 3

  for (const entry of index) {
    // Check slug, word name, and romanization
    const slugDist = levenshtein(q, entry.slugNorm);
    const wordDist = levenshtein(q, entry.wordNorm);
    const romanDist = entry.romanNorm
      ? levenshtein(q, entry.romanNorm)
      : Infinity;
    const best = Math.min(slugDist, wordDist, romanDist);

    if (best < bestDist) {
      bestDist = best;
      bestSlug = entry.slug;
    }
  }

  return bestSlug;
}
