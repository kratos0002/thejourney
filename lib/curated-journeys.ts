import type { Word } from "@/data/word-types";
import { getWordFilterMeta } from "./word-filters";

/**
 * Curated Journeys - Editorial paths through the word collection
 *
 * Based on research findings (DISCOVERY_SERENDIPITY_RESEARCH.md):
 * - Curated editorial paths outperform raw filters for discovery
 * - Playful, evocative names reduce choice paralysis
 * - 80%+ of Netflix discovery comes from themed rows
 */

export interface CuratedJourney {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // Emoji or icon identifier
  // Matching criteria - words must match at least one
  matchCriteria: {
    slugs?: string[];           // Explicit word slugs
    themes?: string[];          // Match by detected theme
    languageFamilies?: string[]; // Match by language family
    journeyPaths?: string[];    // Match by journey path
    keywords?: string[];        // Match keywords in story/hook
  };
  // Display order priority (lower = shown first)
  priority: number;
}

export const CURATED_JOURNEYS: CuratedJourney[] = [
  {
    id: "spice-road",
    name: "The Spice Road",
    tagline: "Words that traveled with merchants",
    description: "Follow the ancient trade routes where language, like silk and spice, crossed continents on the backs of camels and ships.",
    icon: "🌶️",
    matchCriteria: {
      slugs: ["qahwa", "ketchup", "sugar", "tea", "curry", "bazaar", "caravan"],
      themes: ["Trade", "Food & Drink"],
      keywords: ["merchant", "trade", "spice", "silk road", "caravan", "bazaar"],
    },
    priority: 1,
  },
  {
    id: "words-of-war",
    name: "Words of War",
    tagline: "Language born from conflict",
    description: "Wars destroy, but they also create — new borders, new alliances, and new words that outlast the battles that birthed them.",
    icon: "⚔️",
    matchCriteria: {
      slugs: ["assassin", "algorithm", "admiral", "guerrilla", "berserk", "slogan"],
      themes: ["War"],
      keywords: ["war", "battle", "army", "conquest", "siege", "military"],
    },
    priority: 2,
  },
  {
    id: "sacred-etymologies",
    name: "Sacred Etymologies",
    tagline: "Words from temples and texts",
    description: "Monks, priests, and pilgrims carried these words across mountains and centuries, preserving meaning in sacred vessels.",
    icon: "🕯️",
    matchCriteria: {
      slugs: ["karma", "nirvana", "amen", "hallelujah", "avatar", "paradise"],
      themes: ["Religion"],
      journeyPaths: ["Sacred Texts"],
      keywords: ["monk", "temple", "prayer", "sacred", "monastery", "religious"],
    },
    priority: 3,
  },
  {
    id: "untranslatable",
    name: "Untranslatable",
    tagline: "Words no language could replace",
    description: "Some concepts are so specific to a culture that other languages simply borrowed the word whole — a linguistic surrender.",
    icon: "✨",
    matchCriteria: {
      slugs: ["saudade", "wanderlust", "ubuntu", "hygge", "schadenfreude", "zeitgeist", "sisu"],
      keywords: ["untranslatable", "no equivalent", "borrowed whole", "unique"],
    },
    priority: 4,
  },
  {
    id: "foods-travels",
    name: "Food's Travels",
    tagline: "The journey from field to fork",
    description: "Every dish has a story. These words traveled from distant harvests to your table, changing name and form at every border.",
    icon: "🍜",
    matchCriteria: {
      slugs: ["qahwa", "tomato", "avocado", "tofu", "whiskey", "ketchup", "sugar", "tea"],
      themes: ["Food & Drink"],
      keywords: ["food", "drink", "coffee", "tea", "cook", "eat", "brew"],
    },
    priority: 5,
  },
  {
    id: "colonial-exchange",
    name: "The Colonial Exchange",
    tagline: "Words that crossed with empires",
    description: "Colonialism left scars — and words. These traveled on ships of conquest, becoming part of languages they never chose.",
    icon: "⛵",
    matchCriteria: {
      slugs: ["taboo", "tattoo", "safari", "boondocks", "coolie", "amah"],
      journeyPaths: ["Colonial"],
      keywords: ["colonial", "empire", "conquest", "british", "spanish", "portuguese"],
    },
    priority: 6,
  },
  {
    id: "breath-and-soul",
    name: "Breath & Soul",
    tagline: "Where body meets spirit",
    description: "Ancient peoples saw breath as the bridge between flesh and soul. These words remember when breathing and being were one.",
    icon: "🌬️",
    matchCriteria: {
      slugs: ["saans", "yoga", "zen", "nirvana", "karma", "avatar"],
      themes: ["Body & Mind", "Religion"],
      keywords: ["breath", "soul", "mind", "meditation", "spirit", "yoga"],
    },
    priority: 7,
  },
  {
    id: "nature-named",
    name: "Nature Named",
    tagline: "Words the earth gave us",
    description: "Mountains, storms, and creatures lent their essence to human speech. These words carry the weight of the natural world.",
    icon: "🌊",
    matchCriteria: {
      slugs: ["tsunami", "typhoon", "monsoon", "jaguar", "puma", "condor"],
      themes: ["Nature"],
      keywords: ["nature", "animal", "storm", "ocean", "mountain", "earth"],
    },
    priority: 8,
  },
  {
    id: "scholars-path",
    name: "The Scholar's Path",
    tagline: "Knowledge crossing borders",
    description: "In libraries from Baghdad to Oxford, scholars preserved and transformed words, building bridges of understanding across cultures.",
    icon: "📜",
    matchCriteria: {
      slugs: ["algorithm", "algebra", "chemistry", "alchemy"],
      themes: ["Science"],
      keywords: ["scholar", "mathematics", "knowledge", "study", "academic", "university"],
    },
    priority: 9,
  },
];

/**
 * Check if a word matches a curated journey's criteria
 */
export function wordMatchesJourney(word: Word, journey: CuratedJourney): boolean {
  const { matchCriteria } = journey;
  const meta = getWordFilterMeta(word);
  const searchText = [word.hook, ...(word.story || []), word.meaningNow || ""].join(" ").toLowerCase();

  // Check explicit slugs first
  if (matchCriteria.slugs?.includes(word.slug)) {
    return true;
  }

  // Check themes
  if (matchCriteria.themes?.some(theme => meta.themes.includes(theme))) {
    return true;
  }

  // Check language families
  if (matchCriteria.languageFamilies?.includes(meta.languageFamily)) {
    return true;
  }

  // Check journey paths
  if (matchCriteria.journeyPaths && meta.journeyPath && matchCriteria.journeyPaths.includes(meta.journeyPath)) {
    return true;
  }

  // Check keywords in story/hook
  if (matchCriteria.keywords?.some(kw => searchText.includes(kw.toLowerCase()))) {
    return true;
  }

  return false;
}

/**
 * Get all words that match a curated journey
 */
export function getJourneyWords(words: Word[], journeyId: string): Word[] {
  const journey = CURATED_JOURNEYS.find(j => j.id === journeyId);
  if (!journey) return [];

  return words.filter(word => wordMatchesJourney(word, journey));
}

/**
 * Get all curated journeys with their word counts
 */
export function getJourneysWithCounts(words: Word[]): Array<CuratedJourney & { wordCount: number; wordSlugs: string[] }> {
  return CURATED_JOURNEYS
    .map(journey => {
      const matchingWords = words.filter(word => wordMatchesJourney(word, journey));
      return {
        ...journey,
        wordCount: matchingWords.length,
        wordSlugs: matchingWords.map(w => w.slug),
      };
    })
    .filter(j => j.wordCount > 0) // Only show journeys with matching words
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get slugs of words matching a journey (for filtering)
 */
export function getJourneySlugs(words: Word[], journeyId: string): Set<string> {
  const matchingWords = getJourneyWords(words, journeyId);
  return new Set(matchingWords.map(w => w.slug));
}
