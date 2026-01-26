import type { Word } from "@/data/word-types";

// Language to Family mapping
const LANGUAGE_FAMILY_MAP: Record<string, string> = {
  // Semitic
  "arabic": "Arabic",
  "hebrew": "Arabic",
  "swahili": "Arabic",

  // Indo-Aryan / Indic
  "sanskrit": "Sanskrit",
  "hindi": "Sanskrit",
  "pali": "Sanskrit",
  "urdu": "Sanskrit",
  "bengali": "Sanskrit",

  // Romance / Latin
  "latin": "Latin",
  "french": "Latin",
  "italian": "Latin",
  "spanish": "Latin",
  "portuguese": "Latin",
  "romanian": "Latin",

  // Greek
  "greek": "Greek",
  "ancient greek": "Greek",

  // Germanic
  "german": "Germanic",
  "dutch": "Germanic",
  "norse": "Germanic",
  "old norse": "Germanic",
  "yiddish": "Germanic",
  "english": "Germanic",
  "old english": "Germanic",

  // East Asian
  "japanese": "Japanese",
  "chinese": "Chinese",
  "mandarin": "Chinese",
  "hokkien": "Chinese",
  "cantonese": "Chinese",
  "korean": "Korean",

  // Persian
  "persian": "Persian",
  "farsi": "Persian",

  // Austronesian / Malay
  "malay": "Malay",
  "indonesian": "Malay",
  "tagalog": "Malay",
  "tahitian": "Malay",
  "hawaiian": "Malay",
  "samoan": "Malay",
  "tongan": "Malay",

  // Slavic
  "russian": "Slavic",
  "czech": "Slavic",
  "polish": "Slavic",
  "ukrainian": "Slavic",

  // Turkic
  "turkish": "Turkic",
  "mongolian": "Turkic",
  "ottoman turkish": "Turkic",

  // Celtic
  "irish": "Celtic",
  "welsh": "Celtic",
  "scottish gaelic": "Celtic",
  "gaelic": "Celtic",

  // Indigenous
  "nahuatl": "Indigenous",
  "quechua": "Indigenous",
  "dharug": "Indigenous",
  "taino": "Indigenous",
  "zulu": "Indigenous",
  "aboriginal": "Indigenous",
};

// Theme keywords in story/hook that suggest a theme
const THEME_KEYWORDS: Record<string, string[]> = {
  "Trade": ["trade", "merchant", "bazaar", "market", "commerce", "cargo", "port", "silk road", "spice"],
  "Food & Drink": ["food", "drink", "coffee", "tea", "sugar", "spice", "cook", "eat", "brew", "fruit", "vegetable"],
  "Religion": ["monk", "temple", "prayer", "sacred", "holy", "spiritual", "monastery", "religious", "god", "divine", "ritual"],
  "Science": ["scholar", "mathematics", "science", "knowledge", "study", "academic", "university", "calculate", "philosophy"],
  "War": ["war", "army", "soldier", "battle", "conquest", "military", "weapon", "fight", "invade"],
  "Nature": ["nature", "animal", "plant", "tree", "ocean", "mountain", "river", "earth", "weather", "storm"],
  "Body & Mind": ["body", "mind", "breath", "soul", "meditation", "health", "yoga", "spirit"],
};

// Journey path detection based on route
const PATH_PATTERNS: Record<string, { regions: string[], keywords: string[] }> = {
  "Silk Road": {
    regions: ["china", "persia", "arabia", "india", "constantinople", "venice"],
    keywords: ["silk road", "overland", "caravan"],
  },
  "Colonial": {
    regions: ["americas", "caribbean", "africa", "india", "southeast asia"],
    keywords: ["colonial", "empire", "british", "spanish", "portuguese", "dutch", "conquest"],
  },
  "Sacred Texts": {
    regions: [],
    keywords: ["monastery", "monk", "scripture", "religious", "temple", "sacred", "prayer"],
  },
  "Maritime Trade": {
    regions: ["port", "venice", "lisbon", "amsterdam", "london", "canton", "malacca"],
    keywords: ["ship", "port", "maritime", "sailor", "sea", "ocean", "trade"],
  },
};

export interface WordFilterMeta {
  slug: string;
  languageFamily: string;
  themes: string[];
  journeyPath: string | null;
  journeyLength: number;
}

export function getLanguageFamily(language: string): string {
  const normalized = language.toLowerCase().trim();
  return LANGUAGE_FAMILY_MAP[normalized] || "Other";
}

export function detectThemes(word: Word): string[] {
  const themes: string[] = [];
  const searchText = [
    word.hook,
    ...(word.story || []),
    word.meaningNow || "",
  ].join(" ").toLowerCase();

  for (const [theme, keywords] of Object.entries(THEME_KEYWORDS)) {
    if (keywords.some(kw => searchText.includes(kw))) {
      themes.push(theme);
    }
  }

  return themes.length > 0 ? themes : ["Other"];
}

export function detectJourneyPath(word: Word): string | null {
  const journeyLocations = word.journey.map(j => j.location.toLowerCase()).join(" ");
  const storyText = [word.hook, ...(word.story || [])].join(" ").toLowerCase();
  const combinedText = journeyLocations + " " + storyText;

  for (const [path, { regions, keywords }] of Object.entries(PATH_PATTERNS)) {
    const hasRegion = regions.some(r => combinedText.includes(r));
    const hasKeyword = keywords.some(k => combinedText.includes(k));
    if (hasRegion || hasKeyword) {
      return path;
    }
  }

  return null;
}

export function getWordFilterMeta(word: Word): WordFilterMeta {
  return {
    slug: word.slug,
    languageFamily: getLanguageFamily(word.language),
    themes: detectThemes(word),
    journeyPath: detectJourneyPath(word),
    journeyLength: word.journey.length,
  };
}

export function getAllFilterMeta(words: Word[]): WordFilterMeta[] {
  return words.map(getWordFilterMeta);
}

// Get unique values for filter chips
export function getAvailableFilters(words: Word[]) {
  const meta = getAllFilterMeta(words);

  const languageFamilies = [...new Set(meta.map(m => m.languageFamily))].sort();
  const themes = [...new Set(meta.flatMap(m => m.themes))].sort();
  const journeyPaths = [...new Set(meta.map(m => m.journeyPath).filter(Boolean))] as string[];

  return {
    languageFamilies,
    themes,
    journeyPaths,
  };
}

// Filter words based on active filters
export interface ActiveFilters {
  languageFamilies: string[];
  themes: string[];
  journeyPaths: string[];
}

export function filterWords(
  words: Word[],
  filters: ActiveFilters
): Set<string> {
  const { languageFamilies, themes, journeyPaths } = filters;
  const hasFilters = languageFamilies.length > 0 || themes.length > 0 || journeyPaths.length > 0;

  if (!hasFilters) {
    return new Set(words.map(w => w.slug));
  }

  const matching = words.filter(word => {
    const meta = getWordFilterMeta(word);

    // Check language family (OR within category)
    if (languageFamilies.length > 0 && !languageFamilies.includes(meta.languageFamily)) {
      return false;
    }

    // Check themes (OR within category - word must have at least one matching theme)
    if (themes.length > 0 && !themes.some(t => meta.themes.includes(t))) {
      return false;
    }

    // Check journey path (OR within category)
    if (journeyPaths.length > 0 && (!meta.journeyPath || !journeyPaths.includes(meta.journeyPath))) {
      return false;
    }

    return true;
  });

  return new Set(matching.map(w => w.slug));
}
