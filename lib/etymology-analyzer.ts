/**
 * Etymology Analyzer
 *
 * Analyzes existing words to extract their etymological fingerprints
 * and identify coverage gaps for generating new unique journeys.
 */

import type { Word, JourneyStop } from "@/data/word-types";

// Origin language families
export const LANGUAGE_FAMILIES = {
  SEMITIC: ["Arabic", "Hebrew", "Aramaic"],
  INDO_ARYAN: ["Sanskrit", "Hindi", "Urdu", "Bengali", "Punjabi", "Persian"],
  DRAVIDIAN: ["Tamil", "Telugu", "Kannada", "Malayalam"],
  SINO_TIBETAN: ["Chinese", "Mandarin", "Cantonese", "Hokkien", "Tibetan"],
  JAPONIC: ["Japanese"],
  KOREANIC: ["Korean"],
  AUSTRONESIAN: ["Malay", "Indonesian", "Tagalog", "Hawaiian", "Maori", "Tahitian", "Samoan", "Tongan"],
  NIGER_CONGO: ["Swahili", "Zulu", "Xhosa", "Yoruba", "Igbo"],
  TURKIC: ["Turkish", "Uzbek", "Kazakh"],
  URALIC: ["Finnish", "Hungarian", "Estonian"],
  CELTIC: ["Irish", "Scottish Gaelic", "Welsh", "Breton"],
  GERMANIC: ["German", "Dutch", "Norse", "Old Norse", "Swedish", "Danish"],
  ROMANCE: ["Latin", "French", "Spanish", "Portuguese", "Italian"],
  SLAVIC: ["Russian", "Czech", "Polish", "Serbian", "Ukrainian"],
  HELLENIC: ["Greek", "Ancient Greek"],
  NATIVE_AMERICAN: ["Nahuatl", "Quechua", "Aymara", "Cherokee", "Navajo", "Taino"],
  AUSTRALIAN: ["Dharug", "Warlpiri", "Yolngu"],
  YIDDISH: ["Yiddish"],
} as const;

// Geographic regions for route tracking
export const REGIONS = {
  MIDDLE_EAST: ["Baghdad", "Damascus", "Jerusalem", "Mecca", "Cairo", "Persia", "Arabia"],
  SOUTH_ASIA: ["India", "Delhi", "Mumbai", "Calcutta", "Sri Lanka", "Bengal", "Punjab"],
  EAST_ASIA: ["China", "Japan", "Korea", "Beijing", "Tokyo", "Seoul", "Canton", "Shanghai"],
  SOUTHEAST_ASIA: ["Malay", "Indonesia", "Vietnam", "Thailand", "Philippines", "Singapore"],
  EUROPE_WEST: ["London", "Paris", "Rome", "Madrid", "Lisbon", "Amsterdam"],
  EUROPE_CENTRAL: ["Vienna", "Berlin", "Prague", "Budapest", "Warsaw"],
  EUROPE_NORTH: ["Scandinavia", "Sweden", "Denmark", "Norway", "Iceland"],
  MEDITERRANEAN: ["Venice", "Constantinople", "Athens", "Alexandria", "Carthage"],
  AFRICA: ["Ethiopia", "Egypt", "Morocco", "Nigeria", "Kenya", "South Africa"],
  AMERICAS_NORTH: ["USA", "Mexico", "New York", "California"],
  AMERICAS_SOUTH: ["Peru", "Brazil", "Argentina", "Andes"],
  PACIFIC: ["Polynesia", "Hawaii", "Tahiti", "Australia", "New Zealand"],
} as const;

// Historical mechanisms of word travel
export const MECHANISMS = {
  TRADE: "trade",
  COLONIALISM: "colonialism",
  CONQUEST: "conquest",
  RELIGION: "religion",
  SCHOLARSHIP: "scholarship",
  IMMIGRATION: "immigration",
  CULTURAL_EXCHANGE: "cultural_exchange",
  EXPLORATION: "exploration",
  TECHNOLOGY: "technology",
  FOOD_SPICE: "food_spice",
} as const;

// Semantic domains
export const DOMAINS = {
  FOOD_DRINK: "food_drink",
  PHILOSOPHY_SPIRITUALITY: "philosophy_spirituality",
  SCIENCE_MATH: "science_math",
  MILITARY_CONFLICT: "military_conflict",
  NATURE_WEATHER: "nature_weather",
  BODY_HEALTH: "body_health",
  COMMERCE_TRADE: "commerce_trade",
  ARTS_CULTURE: "arts_culture",
  GOVERNANCE_LAW: "governance_law",
  EMOTIONS_PSYCHOLOGY: "emotions_psychology",
  TEXTILES_FASHION: "textiles_fashion",
  ARCHITECTURE: "architecture",
  MARITIME: "maritime",
  MUSIC: "music",
  ANIMALS: "animals",
  TECHNOLOGY: "technology",
} as const;

export interface EtymologyFingerprint {
  slug: string;
  word: string;
  originLanguage: string;
  languageFamily: string | null;
  startRegion: string | null;
  endRegion: string | null;
  routeKey: string; // e.g., "MIDDLE_EAST→EUROPE_WEST"
  mechanism: string | null;
  domain: string | null;
  journeyLength: number;
  centuriesSpanned: number | null;
}

export interface CoverageAnalysis {
  totalWords: number;
  byLanguageFamily: Record<string, number>;
  byRoute: Record<string, string[]>; // route → word slugs
  byDomain: Record<string, number>;
  byMechanism: Record<string, number>;
  gaps: {
    uncoveredFamilies: string[];
    underrepresentedFamilies: string[]; // <2 words
    uncoveredRoutes: string[];
    uncoveredDomains: string[];
  };
  suggestions: string[];
}

function detectLanguageFamily(language: string): string | null {
  const lang = language.toLowerCase();
  for (const [family, languages] of Object.entries(LANGUAGE_FAMILIES)) {
    if (languages.some(l => lang.includes(l.toLowerCase()))) {
      return family;
    }
  }
  return null;
}

function detectRegion(location: string): string | null {
  const loc = location.toLowerCase();
  for (const [region, places] of Object.entries(REGIONS)) {
    if (places.some(p => loc.includes(p.toLowerCase()))) {
      return region;
    }
  }
  return null;
}

function extractPeriodYear(period: string): number | null {
  // Extract year from period strings like "~1400 CE", "1890s", "~800 BCE"
  const match = period.match(/(\d{3,4})/);
  if (!match) return null;
  const year = parseInt(match[1]);
  if (period.toLowerCase().includes("bce") || period.toLowerCase().includes("bc")) {
    return -year;
  }
  return year;
}

export function analyzeWord(word: Word): EtymologyFingerprint {
  const journey = word.journey || [];
  const firstStop = journey[0];
  const lastStop = journey[journey.length - 1];

  const startRegion = firstStop ? detectRegion(firstStop.location) : null;
  const endRegion = lastStop ? detectRegion(lastStop.location) : null;
  const routeKey = startRegion && endRegion ? `${startRegion}→${endRegion}` : "UNKNOWN";

  const languageFamily = detectLanguageFamily(word.language);

  // Calculate centuries spanned
  let centuriesSpanned: number | null = null;
  if (journey.length >= 2) {
    const startYear = extractPeriodYear(firstStop?.period || "");
    const endYear = extractPeriodYear(lastStop?.period || "");
    if (startYear !== null && endYear !== null) {
      centuriesSpanned = Math.abs(endYear - startYear) / 100;
    }
  }

  return {
    slug: word.slug,
    word: word.word,
    originLanguage: word.language,
    languageFamily,
    startRegion,
    endRegion,
    routeKey,
    mechanism: null, // Would need NLP to detect from story
    domain: null, // Would need NLP to detect
    journeyLength: journey.length,
    centuriesSpanned,
  };
}

export function analyzeAllWords(words: Word[]): CoverageAnalysis {
  const fingerprints = words.map(analyzeWord);

  const byLanguageFamily: Record<string, number> = {};
  const byRoute: Record<string, string[]> = {};
  const byDomain: Record<string, number> = {};
  const byMechanism: Record<string, number> = {};

  for (const fp of fingerprints) {
    // Count by language family
    const family = fp.languageFamily || "OTHER";
    byLanguageFamily[family] = (byLanguageFamily[family] || 0) + 1;

    // Group by route
    if (!byRoute[fp.routeKey]) byRoute[fp.routeKey] = [];
    byRoute[fp.routeKey].push(fp.slug);
  }

  // Find gaps
  const allFamilies = Object.keys(LANGUAGE_FAMILIES);
  const coveredFamilies = Object.keys(byLanguageFamily).filter(f => f !== "OTHER");
  const uncoveredFamilies = allFamilies.filter(f => !coveredFamilies.includes(f));
  const underrepresentedFamilies = coveredFamilies.filter(f => byLanguageFamily[f] < 2);

  // Suggest potential new routes
  const suggestions: string[] = [];

  if (uncoveredFamilies.includes("KOREANIC")) {
    suggestions.push("Korean: taekwondo, kimchi, hangul, chaebol, K-pop terms");
  }
  if (uncoveredFamilies.includes("URALIC") || !byLanguageFamily["URALIC"]) {
    suggestions.push("Hungarian: coach, paprika, hussar, goulash");
  }
  if ((byLanguageFamily["YIDDISH"] || 0) < 2) {
    suggestions.push("Yiddish: chutzpah, mensch, klutz, schmaltz, maven, glitch");
  }
  if ((byLanguageFamily["NATIVE_AMERICAN"] || 0) < 2) {
    suggestions.push("Quechua: condor, llama, quinoa, puma");
    suggestions.push("Taino: hurricane, hammock, canoe, barbecue");
  }
  if ((byLanguageFamily["DRAVIDIAN"] || 0) < 2) {
    suggestions.push("Tamil: catamaran, pariah, curry, mango, teak");
  }
  if ((byLanguageFamily["CELTIC"] || 0) < 1) {
    suggestions.push("Irish/Gaelic: whiskey, slogan, banshee, leprechaun, smithereens");
  }
  if ((byLanguageFamily["AUSTRONESIAN"] || 0) < 3) {
    suggestions.push("Malay: amok, orangutan, bamboo, compound, gong");
  }

  return {
    totalWords: words.length,
    byLanguageFamily,
    byRoute,
    byDomain,
    byMechanism,
    gaps: {
      uncoveredFamilies,
      underrepresentedFamilies,
      uncoveredRoutes: [], // Would need to compute potential routes
      uncoveredDomains: [],
    },
    suggestions,
  };
}

export function formatCoverageReport(analysis: CoverageAnalysis): string {
  let report = `# Etymology Coverage Report\n\n`;
  report += `**Total Words:** ${analysis.totalWords}\n\n`;

  report += `## Coverage by Language Family\n\n`;
  const sortedFamilies = Object.entries(analysis.byLanguageFamily)
    .sort((a, b) => b[1] - a[1]);
  for (const [family, count] of sortedFamilies) {
    const bar = "█".repeat(count);
    report += `- **${family}**: ${count} ${bar}\n`;
  }

  report += `\n## Gaps\n\n`;
  report += `**Uncovered Language Families:** ${analysis.gaps.uncoveredFamilies.join(", ") || "None"}\n`;
  report += `**Underrepresented (<2 words):** ${analysis.gaps.underrepresentedFamilies.join(", ") || "None"}\n`;

  report += `\n## Routes\n\n`;
  const sortedRoutes = Object.entries(analysis.byRoute)
    .sort((a, b) => b[1].length - a[1].length);
  for (const [route, slugs] of sortedRoutes.slice(0, 10)) {
    report += `- **${route}**: ${slugs.join(", ")}\n`;
  }

  report += `\n## Suggestions for New Words\n\n`;
  for (const suggestion of analysis.suggestions) {
    report += `- ${suggestion}\n`;
  }

  return report;
}

// Word suggestions organized by uncovered/underrepresented routes
export const WORD_SUGGESTIONS: Record<string, { word: string; origin: string; hook: string }[]> = {
  KOREANIC: [
    { word: "taekwondo", origin: "Korean", hook: "The martial art whose name means 'the way of the foot and fist' became an Olympic sport." },
    { word: "chaebol", origin: "Korean", hook: "The Korean word for family-run mega-corporations that shaped modern Asia." },
    { word: "hallyu", origin: "Korean", hook: "The 'Korean Wave' — a word Koreans invented to describe their own cultural takeover." },
  ],
  URALIC: [
    { word: "coach", origin: "Hungarian", hook: "Every Uber, every bus, every sports mentor — all named after a tiny Hungarian town called Kocs." },
    { word: "paprika", origin: "Hungarian", hook: "The spice that defines Hungarian cuisine traveled from the Americas through the Ottomans." },
    { word: "sabre", origin: "Hungarian", hook: "The curved cavalry sword that conquered Europe came from Hungarian horsemen." },
  ],
  YIDDISH: [
    { word: "chutzpah", origin: "Yiddish", hook: "The audacity to sue your parents for giving birth to you — that's chutzpah." },
    { word: "glitch", origin: "Yiddish", hook: "Every computer bug you've ever encountered has a name borrowed from Yiddish slang." },
    { word: "mensch", origin: "Yiddish", hook: "A person of integrity — Yiddish gave English its word for 'a real human being.'" },
    { word: "klutz", origin: "Yiddish", hook: "The Yiddish word for a wooden block became English slang for a clumsy person." },
  ],
  CELTIC: [
    { word: "whiskey", origin: "Irish Gaelic", hook: "Irish monks called it 'uisce beatha' — the water of life. English soldiers just said the first bit." },
    { word: "slogan", origin: "Scottish Gaelic", hook: "Every advertising tagline descends from Scottish battle cries." },
    { word: "banshee", origin: "Irish Gaelic", hook: "The wailing woman who foretells death — Irish mythology gave English its scariest word." },
    { word: "smithereens", origin: "Irish Gaelic", hook: "Blown to tiny pieces — the Irish diminutive that became an English explosion." },
  ],
  NATIVE_AMERICAN: [
    { word: "hurricane", origin: "Taíno", hook: "The god of storms from the Caribbean gave his name to every Atlantic tempest." },
    { word: "hammock", origin: "Taíno", hook: "Columbus found the Taíno sleeping in hanging nets — and stole the word along with everything else." },
    { word: "canoe", origin: "Taíno/Carib", hook: "The first American word to enter European languages — before 'America' itself." },
    { word: "barbecue", origin: "Taíno", hook: "The wooden frame for cooking meat became a global summer ritual." },
    { word: "condor", origin: "Quechua", hook: "The Andean bird whose Quechua name means 'the one who cleans' soars in English too." },
    { word: "llama", origin: "Quechua", hook: "Spanish conquistadors couldn't spell the Quechua word, so they doubled the L." },
  ],
  DRAVIDIAN: [
    { word: "catamaran", origin: "Tamil", hook: "The Tamil 'tied logs' became the world's fastest sailing vessels." },
    { word: "pariah", origin: "Tamil", hook: "A Tamil caste name became English's cruelest word for an outcast." },
    { word: "teak", origin: "Malayalam", hook: "The wood that built the British Empire came with its Dravidian name." },
    { word: "mango", origin: "Tamil/Malayalam", hook: "The king of fruits kept its Dravidian name as it conquered the world." },
  ],
  AUSTRONESIAN: [
    { word: "amok", origin: "Malay", hook: "When someone 'runs amok,' they're doing something the Malays named centuries ago." },
    { word: "orangutan", origin: "Malay", hook: "The 'person of the forest' — Malays knew they were looking at something almost human." },
    { word: "gong", origin: "Malay/Javanese", hook: "The bronze disc that ends every dramatic scene has a Southeast Asian name." },
    { word: "rattan", origin: "Malay", hook: "The cane that furnished colonial homes kept its Malay name." },
  ],
  TURKIC: [
    { word: "khan", origin: "Turkic/Mongol", hook: "From Genghis to Imran — the title that ruled half the world." },
    { word: "kiosk", origin: "Turkish", hook: "The Ottoman garden pavilion became every mall's little booth." },
    { word: "tulip", origin: "Turkish", hook: "The flower that crashed the Dutch economy has a Turkish name meaning 'turban.'" },
  ],
  SEMITIC_HEBREW: [
    { word: "golem", origin: "Hebrew", hook: "The clay monster of Prague became our word for any mindless automaton — and inspired 'robot.'" },
    { word: "jubilee", origin: "Hebrew", hook: "Every 50-year celebration echoes the ancient Hebrew rams' horn." },
    { word: "leviathan", origin: "Hebrew", hook: "The biblical sea monster became our word for anything impossibly huge." },
  ],
  AFRICAN_OTHER: [
    { word: "okra", origin: "Igbo/West African", hook: "The slimy vegetable that crossed the Atlantic in slave ships, keeping its African name." },
    { word: "banjo", origin: "Kimbundu", hook: "The American instrument has an African name — brought by enslaved musicians." },
    { word: "zombie", origin: "Kongo", hook: "The undead of Haiti and Hollywood speak with a Central African voice." },
  ],
};
