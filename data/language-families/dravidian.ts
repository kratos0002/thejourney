import type { LanguageFamilyTree } from "../language-types";

/**
 * Dravidian Language Family Tree
 *
 * The major language family of southern India, entirely unrelated to Indo-European.
 * Included because Tamil gave English catamaran, curry, and pariah.
 */
export const dravidian: LanguageFamilyTree = {
  slug: "dravidian",
  name: "Dravidian",
  hook: "The ancient language family of southern India — unrelated to Sanskrit, older than Sanskrit's arrival, and still spoken by 250 million people.",
  description:
    "The Dravidian languages are one of the world's major language families, spoken primarily in southern India and northern Sri Lanka. With about 85 languages and 250 million speakers, the family includes Tamil, Telugu, Kannada, and Malayalam — each with its own rich literary tradition. Dravidian languages are entirely unrelated to the Indo-European family that includes Sanskrit and Hindi, representing a deep, independent linguistic heritage that predates the arrival of Indo-Aryan languages in India.",
  originRegion: "Indian subcontinent",
  originPeriod: "~4000–3000 BCE (estimated)",
  livingLanguages: "~85",
  totalSpeakers: "~250 million",
  wordCount: 0,
  story: [
    "The Dravidian languages were once spoken across a much larger area of the Indian subcontinent. As Indo-Aryan languages spread southward after ~1500 BCE, Dravidian languages retreated to the south — but they never disappeared. Tamil, with its 2,000+ year literary tradition, is one of the oldest continuously spoken languages on Earth.",
    "The relationship between Dravidian and Indo-Aryan languages is one of linguistics' most fascinating case studies. Despite being unrelated, centuries of contact created the South Asian Sprachbund — a zone where languages from different families converged in features like retroflex consonants, SOV word order, and echo words. Sanskrit borrowed from Dravidian, and Dravidian borrowed from Sanskrit.",
    "Today, the four major Dravidian languages — Tamil, Telugu, Kannada, and Malayalam — each serve as official state languages in southern India. Tamil is also an official language of Singapore and Sri Lanka. Through maritime trade, Tamil words entered English centuries ago: catamaran, curry, pariah, and possibly orange and ginger.",
  ],
  tree: {
    id: "dravidian",
    name: "Dravidian",
    slug: "dravidian",
    level: "family",
    status: "living",
    classification: "established",
    approximateAge: "~4000–3000 BCE",
    region: "Southern India & Sri Lanka",
    description:
      "A major language family of southern India, unrelated to Indo-European.",
    displayColor: "#C75050",
    children: [
      {
        id: "dr-southern",
        name: "Southern Dravidian",
        slug: "southern-dravidian",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Tamil Nadu, Kerala, Karnataka",
        displayColor: "#D76060",
        children: [
          {
            id: "dr-tamil",
            name: "Tamil",
            slug: "tamil",
            level: "language",
            status: "living",
            classification: "established",
            approximateAge: "~500 BCE (earliest inscriptions)",
            region: "Tamil Nadu, Sri Lanka, Singapore",
            description:
              "One of the world's oldest living languages with a 2,000+ year literary tradition. Gave English catamaran, curry, and pariah.",
            languageSlugs: ["tamil"],
            displayColor: "#E87070",
          },
          {
            id: "dr-malayalam",
            name: "Malayalam",
            slug: "malayalam",
            level: "language",
            status: "living",
            classification: "established",
            region: "Kerala, India",
            description: "The language of Kerala, closely related to Tamil but diverged around the 9th century.",
            displayColor: "#D46060",
          },
          {
            id: "dr-kannada",
            name: "Kannada",
            slug: "kannada",
            level: "language",
            status: "living",
            classification: "established",
            region: "Karnataka, India",
            description: "The official language of Karnataka with a literary tradition dating to the 5th century.",
            displayColor: "#C45050",
          },
        ],
      },
      {
        id: "dr-south-central",
        name: "South-Central Dravidian",
        slug: "south-central-dravidian",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Andhra Pradesh, Telangana",
        displayColor: "#B84040",
        children: [
          {
            id: "dr-telugu",
            name: "Telugu",
            slug: "telugu",
            level: "language",
            status: "living",
            classification: "established",
            region: "Andhra Pradesh & Telangana, India",
            description: "The most spoken Dravidian language by number of native speakers (~83 million).",
            displayColor: "#C85050",
          },
        ],
      },
      {
        id: "dr-northern",
        name: "Northern Dravidian",
        slug: "northern-dravidian",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Central & Eastern India",
        description:
          "Small Dravidian languages surviving as isolated pockets in northern India — evidence of the family's former wider distribution.",
        displayColor: "#A83030",
        children: [
          {
            id: "dr-brahui",
            name: "Brahui",
            slug: "brahui",
            level: "language",
            status: "living",
            classification: "established",
            region: "Balochistan, Pakistan",
            description:
              "A Dravidian language spoken in Pakistan — 1,500 km from the nearest Dravidian relative. Evidence of the family's former northern extent.",
            displayColor: "#B84040",
          },
        ],
      },
    ],
  },
};
