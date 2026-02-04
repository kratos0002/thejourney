import type { LanguageFamilyTree } from "../language-types";

/**
 * Afro-Asiatic Language Family Tree
 *
 * The second most relevant family for this app after Indo-European,
 * primarily because of Arabic's massive influence on European languages
 * during the Islamic Golden Age.
 */
export const afroAsiatic: LanguageFamilyTree = {
  slug: "afro-asiatic",
  name: "Afro-Asiatic",
  hook: "The family that gave us the alphabet, algebra, and the words for zero and coffee.",
  description:
    "Stretching from Morocco to the Horn of Africa and across the Middle East, Afro-Asiatic includes Arabic, Hebrew, Amharic, and the ancient Egyptian of the pharaohs. Through Arabic, this family donated hundreds of words to European languages — algorithm, algebra, alchemy, alcohol, and zero among them.",
  originRegion: "Northeast Africa or Middle East",
  originPeriod: "~12,000–10,000 BCE (estimated)",
  livingLanguages: "~391",
  totalSpeakers: "~500 million",
  wordCount: 0, // computed at runtime
  story: [
    "The Afro-Asiatic family is one of the oldest proposed language groupings, with roots that may stretch back 12,000 years or more. Its branches span two continents: Semitic languages dominate the Middle East, while Berber, Chadic, Cushitic, and Omotic languages spread across North and East Africa.",
    "For etymology, the most significant branch is Semitic — specifically Arabic. When the Islamic Empire expanded in the 7th century, Arabic became the language of science, mathematics, and philosophy across a vast territory. European scholars who translated Arabic works into Latin brought hundreds of Arabic words with them, many of which survive in English today.",
    "The family also includes Hebrew, which underwent one of history's most remarkable linguistic revivals — from a liturgical language to the living national language of Israel — and Ancient Egyptian, whose hieroglyphic writing system is among the oldest in the world.",
  ],
  tree: {
    id: "afro-asiatic",
    name: "Afro-Asiatic",
    slug: "afro-asiatic",
    level: "family",
    status: "living",
    classification: "established",
    approximateAge: "~12,000–10,000 BCE",
    region: "Northeast Africa / Middle East",
    description:
      "One of the world's oldest and most widespread language families.",
    displayColor: "#B8860B",
    children: [
      // ── Semitic ───────────────────────────────────
      {
        id: "aa-semitic",
        name: "Semitic",
        slug: "semitic",
        level: "branch",
        status: "living",
        classification: "established",
        approximateAge: "~3750 BCE",
        region: "Middle East → North Africa",
        description:
          "Arabic, Hebrew, Amharic, and the ancient Akkadian. The branch that gave the world its first alphabets.",
        displayColor: "#D4A017",
        children: [
          {
            id: "aa-arabic",
            name: "Arabic",
            slug: "arabic",
            level: "language",
            status: "living",
            classification: "established",
            approximateAge: "~1st century CE (attested)",
            region: "Arabian Peninsula → 26 countries",
            description:
              "The language of the Quran and the Islamic Golden Age. Spread across 26 countries and donated hundreds of words to European languages.",
            displayColor: "#E8B830",
          },
          {
            id: "aa-hebrew",
            name: "Hebrew",
            slug: "hebrew",
            level: "language",
            status: "living",
            classification: "established",
            approximateAge: "~1000 BCE",
            region: "Ancient Israel → Modern Israel",
            description:
              "Revived from a liturgical language to a living national tongue — one of the most remarkable linguistic stories in history.",
            displayColor: "#C8A020",
          },
          {
            id: "aa-amharic",
            name: "Amharic",
            slug: "amharic",
            level: "language",
            status: "living",
            classification: "established",
            region: "Ethiopia",
            description:
              "The national language of Ethiopia, written in the beautiful Ge'ez script.",
            displayColor: "#B89018",
          },
          {
            id: "aa-akkadian",
            name: "Akkadian",
            slug: "akkadian",
            level: "language",
            status: "extinct",
            classification: "established",
            approximateAge: "~2500 BCE",
            region: "Mesopotamia",
            description:
              "The language of Babylon and Assyria. Written in cuneiform, it was the lingua franca of the ancient Near East.",
            displayColor: "#8B7010",
          },
        ],
      },

      // ── Berber ────────────────────────────────────
      {
        id: "aa-berber",
        name: "Berber",
        slug: "berber",
        level: "branch",
        status: "living",
        classification: "established",
        region: "North Africa (Sahara & Atlas Mountains)",
        description:
          "The indigenous languages of North Africa, predating the Arab conquest. Still spoken by millions across Morocco, Algeria, and the Sahara.",
        displayColor: "#A07828",
        children: [
          {
            id: "aa-tamazight",
            name: "Tamazight",
            slug: "tamazight",
            level: "language",
            status: "living",
            classification: "established",
            region: "Morocco, Algeria",
            displayColor: "#B08838",
          },
          {
            id: "aa-tuareg",
            name: "Tuareg",
            slug: "tuareg",
            level: "language",
            status: "living",
            classification: "established",
            region: "Sahara (Mali, Niger, Libya, Algeria)",
            displayColor: "#A07828",
          },
        ],
      },

      // ── Egyptian ──────────────────────────────────
      {
        id: "aa-egyptian",
        name: "Egyptian",
        slug: "egyptian",
        level: "branch",
        status: "extinct",
        classification: "established",
        approximateAge: "~3200 BCE",
        region: "Nile Valley",
        description:
          "The language of the pharaohs, written in hieroglyphs. Its last descendant, Coptic, survives as a liturgical language.",
        displayColor: "#8B6B10",
        children: [
          {
            id: "aa-ancient-egyptian",
            name: "Ancient Egyptian",
            slug: "ancient-egyptian",
            level: "language",
            status: "extinct",
            classification: "established",
            approximateAge: "~3200 BCE – 600 CE",
            region: "Egypt",
            description:
              "Written in hieroglyphs for over 3,000 years. One of the longest-documented language histories on Earth.",
            displayColor: "#9B7B20",
          },
        ],
      },
    ],
  },
};
