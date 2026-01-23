export interface JourneyStop {
  location: string;
  period: string;
  form: string;
  script?: string;
  context: string;
  color?: string;
  coordinates: [number, number]; // [longitude, latitude]
}

export interface Sound {
  label: string;
  ipa: string;
  text?: string; // Text for speech synthesis
  lang?: string; // BCP 47 language code (e.g., "ar", "en", "hi")
}

export interface RelativeWord {
  word: string;
  language: string;
  connection: string;
  available: boolean;
  slug?: string;
}

export interface Word {
  slug: string;
  word: string;
  romanization: string;
  language: string;
  hook: string;
  story: string[];
  journey: JourneyStop[];
  sounds: Sound[];
  relatives: RelativeWord[];
  meaningNow: string;
}
