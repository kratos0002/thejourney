import type { Word } from "@/data/word-types";

/**
 * Get a deterministic "daily featured word" that rotates each calendar day.
 * Prefers unexplored words; falls back to all words if everything is explored.
 */
export function getDailyFeaturedWord(
  words: Word[],
  exploredSlugs: Set<string>
): Word | undefined {
  const candidates = words.filter((w) => !exploredSlugs.has(w.slug));
  const pool = candidates.length > 0 ? candidates : words;

  if (pool.length === 0) return undefined;

  const today = new Date();
  const dayIndex =
    today.getFullYear() * 1000 + today.getMonth() * 32 + today.getDate();
  const index = dayIndex % pool.length;

  return pool[index];
}
