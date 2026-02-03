/**
 * Type definitions for Language History feature.
 *
 * Languages spread differently from words:
 * - Words travel discrete paths (city to city)
 * - Languages expand into zones (regions that grow over time)
 *
 * The data model reflects this: phases contain multiple regions,
 * each with a center point and dominance level.
 */

export interface LanguageRegion {
  /** Region name (e.g., "Northwest India", "Southeast Asia") */
  name: string;
  /** Modern countries this region covers (for context) */
  modernCountries?: string[];
  /** Approximate speaker count during this phase */
  speakerCount?: string;
  /** How the language was used in this region */
  dominance: 'native' | 'prestige' | 'liturgical' | 'trade' | 'colonial' | 'scholarly';
  /** Center coordinates [longitude, latitude] */
  coordinates: [number, number];
  /** Optional spread radius in degrees (for zone rendering) */
  radius?: number;
}

export interface LanguagePhase {
  /** Era/time period (e.g., "1500-500 BCE") */
  era: string;
  /** Phase name (e.g., "Vedic Period") */
  name: string;
  /** Language form during this phase (e.g., "Vedic Sanskrit") */
  form: string;
  /** Regions where the language was spoken/used */
  regions: LanguageRegion[];
  /** Narrative context: why did it spread/change? */
  context: string;
  /** Key historical events during this phase */
  keyEvents?: string[];
  /** Color for this phase on the map */
  color: string;
}

export interface LanguageHistory {
  /** URL slug (e.g., "sanskrit") */
  slug: string;
  /** Language name in English */
  language: string;
  /** Language name in native script */
  script: string;
  /** Romanization of native script */
  romanization: string;
  /** Immediate language family (e.g., "Indo-Aryan") */
  languageFamily: string;
  /** Parent language family (e.g., "Indo-European") */
  parentFamily: string;
  /** Compelling one-liner hook */
  hook: string;
  /** Region of origin */
  originRegion: string;
  /** Approximate origin period */
  originPeriod: string;
  /** Current speaker statistics */
  currentSpeakers: string;
  /** 3-4 paragraph overview of the language's history */
  story: string[];
  /** 4-6 major historical phases */
  phases: LanguagePhase[];
  /** Slugs of words in our collection from this language */
  relatedWords?: string[];
}

/**
 * Language family for taxonomy/grouping
 */
export interface LanguageFamily {
  slug: string;
  name: string;
  parentFamily?: string;
  description: string;
  originRegion: string;
  originPeriod: string;
  memberLanguages: string[]; // slugs of LanguageHistory entries
}

/**
 * Helper type for the map component
 */
export interface LanguageMapData {
  phases: LanguagePhase[];
  currentPhaseIndex: number;
}
