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
 * Language family for taxonomy/grouping (legacy flat interface)
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
 * Language Family Tree — nested hierarchical structure.
 *
 * Represents the genealogical relationships between languages:
 *   Family → Branch → Sub-branch → Language
 *
 * Used for the /families and /family/[slug] pages.
 * D3 hierarchy visualization reads this structure directly.
 */
export interface LanguageFamilyNode {
  /** Unique identifier (e.g., "indo-european", "ie-indo-iranian") */
  id: string;
  /** Display name (e.g., "Indo-Iranian") */
  name: string;
  /** URL-friendly slug */
  slug: string;
  /** Position in the hierarchy */
  level: 'family' | 'branch' | 'sub-branch' | 'language';

  /** Child nodes in the tree */
  children?: LanguageFamilyNode[];

  /** Whether the language/branch is still spoken */
  status: 'living' | 'extinct' | 'reconstructed';
  /** Scholarly confidence in this classification */
  classification: 'established' | 'widely-accepted' | 'disputed';

  /** Alternate names (e.g., ["IE", "Indo-Germanic"]) */
  alternateNames?: string[];

  /** Reconstructed ancestor (e.g., "Proto-Indo-European") */
  protoLanguage?: string;
  /** Approximate age of divergence */
  approximateAge?: string;
  /** Geographic region of origin */
  region?: string;
  /** Brief description for UI display */
  description?: string;

  /** Number of words in our collection that trace through this node */
  wordCount?: number;
  /** Slugs of LanguageHistory entries (for language-level nodes) */
  languageSlugs?: string[];
  /** Color for visualization */
  displayColor?: string;
}

/**
 * Top-level language family tree with metadata for the /families index
 */
export interface LanguageFamilyTree {
  /** URL slug (e.g., "indo-european") */
  slug: string;
  /** Display name */
  name: string;
  /** Compelling hook for the family card */
  hook: string;
  /** Brief description (1-2 sentences) */
  description: string;
  /** Region of origin */
  originRegion: string;
  /** Approximate origin period */
  originPeriod: string;
  /** Number of living languages worldwide */
  livingLanguages: string;
  /** Number of native speakers worldwide */
  totalSpeakers: string;
  /** Total words in our collection from this family */
  wordCount: number;
  /** The full tree structure */
  tree: LanguageFamilyNode;
  /** 2-3 paragraph story for the family detail page */
  story: string[];
}

/**
 * Helper type for the map component
 */
export interface LanguageMapData {
  phases: LanguagePhase[];
  currentPhaseIndex: number;
}
