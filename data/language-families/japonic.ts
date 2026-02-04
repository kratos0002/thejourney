import type { LanguageFamilyTree } from "../language-types";

/**
 * Japonic Language Family Tree
 *
 * A small family consisting of Japanese and the Ryukyuan languages.
 * Included because of Japanese's cultural influence and 6 words in the collection.
 */
export const japonic: LanguageFamilyTree = {
  slug: "japonic",
  name: "Japonic",
  hook: "A family of just two branches — Japanese and Ryukyuan — with no proven relatives, yet it gave the world emoji, karate, and manga.",
  description:
    "The Japonic family is among the world's most mysterious language groups. Despite extensive research, no convincing genetic relationship to any other family has been established. Japanese and the endangered Ryukyuan languages of Okinawa are its only members — yet Japanese's cultural influence far exceeds what its small family tree might suggest.",
  originRegion: "Japanese Archipelago",
  originPeriod: "~3rd century BCE (proto-Japonic)",
  livingLanguages: "~12",
  totalSpeakers: "~128 million",
  wordCount: 0,
  story: [
    "The Japonic language family consists of Japanese and the Ryukyuan languages spoken in the islands south of mainland Japan. Together they form one of the world's most isolated language families — a linguistic island that has resisted all attempts to connect it to larger groupings.",
    "Japanese absorbed massive amounts of Chinese vocabulary over centuries, creating a unique hybrid lexicon. After the Meiji Restoration, it eagerly adopted Western words too. Yet its grammar — with subject-object-verb word order, particles, and honorific levels — remains distinctly its own.",
    "In the 21st century, Japanese has become one of the world's most culturally influential languages through anime, manga, video games, and cuisine — exporting words like emoji, karate, origami, ramen, and tsunami into global vocabulary.",
  ],
  tree: {
    id: "japonic",
    name: "Japonic",
    slug: "japonic",
    level: "family",
    status: "living",
    classification: "established",
    approximateAge: "~3rd century BCE",
    region: "Japanese Archipelago",
    description: "A language isolate family with no proven external relatives.",
    displayColor: "#C75B5B",
    children: [
      {
        id: "jp-japanese",
        name: "Japanese",
        slug: "japanese",
        level: "language",
        status: "living",
        classification: "established",
        region: "Japan",
        description:
          "The world's 13th most spoken language. Three writing systems, layers of Chinese and Western vocabulary, and the source of emoji.",
        languageSlugs: ["japanese"],
        displayColor: "#D46B6B",
      },
      {
        id: "jp-ryukyuan",
        name: "Ryukyuan",
        slug: "ryukyuan",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Okinawa & Ryukyu Islands",
        description:
          "A group of endangered languages spoken in the islands south of mainland Japan. Closely related to Japanese but not mutually intelligible.",
        displayColor: "#B84B4B",
        children: [
          {
            id: "jp-okinawan",
            name: "Okinawan",
            slug: "okinawan",
            level: "language",
            status: "living",
            classification: "established",
            region: "Okinawa, Japan",
            displayColor: "#C75B5B",
          },
        ],
      },
    ],
  },
};
