import type { LanguageHistory } from "../language-types";

export const greek: LanguageHistory = {
  slug: "greek",
  language: "Ancient Greek",
  script: "Ἑλληνική",
  romanization: "Hellēnikḗ",
  languageFamily: "Hellenic",
  parentFamily: "Indo-European",
  hook: "The language that invented democracy, philosophy, and the words we use to think about thinking — and gave the Western world its alphabet.",
  originRegion: "Greece & Aegean",
  originPeriod: "~1400 BCE (Mycenaean)",
  currentSpeakers: "~13 million (Modern Greek); Ancient Greek studied worldwide",

  story: [
    "Greek is one of the longest-documented living languages on Earth, with a written record stretching back over 3,400 years. The earliest known Greek writing — Linear B, a syllabic script used by the Mycenaean civilization — dates to around 1400 BCE. When the Mycenaean palaces fell and Linear B was lost, Greek survived as a spoken language through centuries of darkness, re-emerging in the 8th century BCE with a revolutionary new technology: the alphabet, adapted from Phoenician script with the crucial addition of vowels.",
    "From this alphabet came an explosion of literature and thought unmatched in the ancient world. Homer's Iliad and Odyssey. The tragedies of Sophocles and Euripides. Plato's dialogues on justice, beauty, and truth. Aristotle's systematic investigation of everything from logic to biology. Herodotus inventing history. Euclid systematizing geometry. Greek didn't just describe the world — it created the conceptual vocabulary the West still uses to analyze it.",
    "When Alexander the Great conquered from Egypt to India, he spread Greek as a lingua franca across the ancient world. This Koine Greek — a simplified 'common' dialect — became the language of the Hellenistic kingdoms, the New Testament, and early Christianity. The Roman Empire conducted its eastern administration in Greek. For centuries, to be educated in the ancient Mediterranean world meant to know Greek.",
    "Modern Greek, spoken by 13 million people today, descends directly from this ancient tongue. Greeks can read texts from 2,500 years ago with effort — a continuity few languages can match. But Greek's deepest legacy is in the words themselves. Philosophy, democracy, mathematics, biology, physics, psychology, theology, astronomy — these are all Greek words, still doing the work the Greeks invented them to do.",
  ],

  phases: [
    {
      era: "1400–800 BCE",
      name: "Mycenaean & Dark Ages",
      form: "Mycenaean Greek",
      regions: [
        {
          name: "Mycenaean Palaces",
          modernCountries: ["Greece"],
          speakerCount: "~200,000–500,000",
          dominance: "native",
          coordinates: [22.5, 37.5],
          radius: 4,
        },
        {
          name: "Crete (post-Minoan)",
          modernCountries: ["Greece"],
          speakerCount: "Palace records",
          dominance: "prestige",
          coordinates: [25, 35.2],
          radius: 2,
        },
      ],
      context:
        "Mycenaean Greeks use Linear B for palace administration — records of olive oil, weapons, and tribute. This is the oldest attested form of Greek. When the Mycenaean civilization collapses (~1200 BCE), writing is lost for centuries. Greek survives only as a spoken language during the 'Dark Ages.'",
      keyEvents: [
        "Linear B tablets at Knossos and Pylos (~1400 BCE)",
        "Trojan War (traditional date ~1250 BCE)",
        "Mycenaean collapse (~1200 BCE)",
        "Greek Dark Ages — writing lost",
      ],
      color: "#7B9EB8",
    },
    {
      era: "800–323 BCE",
      name: "Classical Greece",
      form: "Classical Greek (Attic, Ionic, Doric)",
      regions: [
        {
          name: "Greek City-States",
          modernCountries: ["Greece"],
          speakerCount: "~2–4 million",
          dominance: "native",
          coordinates: [23.7, 38],
          radius: 4,
        },
        {
          name: "Ionia (Asia Minor)",
          modernCountries: ["Turkey"],
          speakerCount: "~500,000",
          dominance: "native",
          coordinates: [27, 38],
          radius: 3,
        },
        {
          name: "Greek colonies (Sicily, S. Italy, Black Sea)",
          modernCountries: ["Italy", "Turkey", "Ukraine"],
          speakerCount: "~1–2 million",
          dominance: "native",
          coordinates: [15, 37],
          radius: 5,
        },
      ],
      context:
        "The Greek alphabet is adopted from Phoenician (~800 BCE), adding vowels — a world-changing innovation. Homer composes the Iliad and Odyssey. Athens becomes the center of philosophy, democracy, and drama. Several dialects coexist: Attic (Athens), Ionic (Ionia), Doric (Sparta, colonies), Aeolic (Thessaly, Lesbos). Attic Greek becomes the prestige dialect through Athens' cultural dominance.",
      keyEvents: [
        "Greek alphabet adopted (~800 BCE)",
        "Homer's Iliad and Odyssey (~750 BCE)",
        "Athenian democracy established (508 BCE)",
        "Herodotus writes the Histories (~440 BCE)",
        "Plato and Aristotle in Athens (~400–322 BCE)",
      ],
      color: "#8BB0C8",
    },
    {
      era: "323–31 BCE",
      name: "Hellenistic Koine",
      form: "Koine Greek",
      regions: [
        {
          name: "Greece & Aegean",
          modernCountries: ["Greece", "Turkey"],
          speakerCount: "~5 million",
          dominance: "native",
          coordinates: [24, 38],
          radius: 5,
        },
        {
          name: "Egypt (Ptolemaic)",
          modernCountries: ["Egypt"],
          speakerCount: "~1–2 million",
          dominance: "prestige",
          coordinates: [31, 30],
          radius: 4,
        },
        {
          name: "Near East & Central Asia",
          modernCountries: ["Syria", "Iraq", "Iran", "Afghanistan"],
          speakerCount: "~2–3 million",
          dominance: "prestige",
          coordinates: [40, 35],
          radius: 8,
        },
      ],
      context:
        "Alexander's conquests spread Greek from Egypt to the borders of India. The result is Koine ('common') Greek — a simplified, standardized form that becomes the lingua franca of the entire eastern Mediterranean and Near East. The Library of Alexandria, the Septuagint (Greek translation of the Hebrew Bible), and Hellenistic philosophy all use Koine.",
      keyEvents: [
        "Alexander's conquests (334–323 BCE)",
        "Library of Alexandria founded (~300 BCE)",
        "Septuagint translation (~3rd century BCE)",
        "Greek as lingua franca from Egypt to India",
      ],
      color: "#9BC0D8",
    },
    {
      era: "31 BCE – 600 CE",
      name: "Roman & Byzantine Greek",
      form: "Koine / Byzantine Greek",
      regions: [
        {
          name: "Eastern Roman Empire",
          modernCountries: ["Greece", "Turkey", "Egypt", "Syria", "Lebanon"],
          speakerCount: "~20–25 million",
          dominance: "prestige",
          coordinates: [30, 37],
          radius: 10,
        },
      ],
      context:
        "Rome conquers the Greek world but Greek conquers Rome culturally — educated Romans are bilingual, and the Eastern Roman (Byzantine) Empire conducts all affairs in Greek. The New Testament is written in Koine Greek. Early Church Fathers (Clement, Origen, Chrysostom) write in Greek. Constantinople becomes the new center of Greek civilization.",
      keyEvents: [
        "New Testament written in Koine Greek (~50–100 CE)",
        "Roman Empire splits (395 CE)",
        "Constantinople as center of Greek learning",
        "Greek Church Fathers shape Christian theology",
      ],
      color: "#7B9EB8",
    },
    {
      era: "600–1453 CE",
      name: "Byzantine Period",
      form: "Medieval Greek",
      regions: [
        {
          name: "Byzantine Empire",
          modernCountries: ["Greece", "Turkey"],
          speakerCount: "~8–12 million",
          dominance: "native",
          coordinates: [28, 39],
          radius: 6,
        },
      ],
      context:
        "The Byzantine Empire preserves Greek literature and learning through the medieval centuries while Western Europe largely forgets it. Byzantine scholars maintain manuscripts of Plato, Aristotle, Homer, and Euclid. When Constantinople falls in 1453, Greek scholars flee west — carrying their manuscripts to Italy and helping spark the Renaissance.",
      keyEvents: [
        "Greek scholarship preserved in Constantinople",
        "Cyrillic alphabet created from Greek (~9th century)",
        "Fourth Crusade sacks Constantinople (1204)",
        "Fall of Constantinople (1453)",
        "Greek scholars flee to Italy → Renaissance",
      ],
      color: "#6B8EA8",
    },
    {
      era: "1453 CE–Present",
      name: "Modern Greek",
      form: "Modern Greek (Demotic)",
      regions: [
        {
          name: "Greece & Cyprus",
          modernCountries: ["Greece", "Cyprus"],
          speakerCount: "~13 million",
          dominance: "native",
          coordinates: [23.7, 38],
          radius: 4,
        },
        {
          name: "Global (vocabulary & academia)",
          modernCountries: ["Worldwide"],
          speakerCount: "Studied globally",
          dominance: "scholarly",
          coordinates: [0, 40],
          radius: 6,
        },
      ],
      context:
        "Modern Greek emerges through Ottoman rule and Greek independence (1821). A fierce debate between Katharevousa ('purified' formal Greek) and Demotiki (spoken Greek) is resolved in 1976 when Demotic becomes official. Today Greek is spoken by 13 million people, but its ancient vocabulary lives on in every European language — an estimated 150,000+ English words derive from Greek roots.",
      keyEvents: [
        "Greek War of Independence (1821)",
        "Language question: Katharevousa vs. Demotic",
        "Demotic becomes official (1976)",
        "~150,000+ English words from Greek roots",
      ],
      color: "#8BB0C8",
    },
  ],

  relatedWords: [
    "chaos",
    "hubris",
    "nemesis",
    "typhus",
  ],
};
