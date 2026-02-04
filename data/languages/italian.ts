import type { LanguageHistory } from "../language-types";

export const italian: LanguageHistory = {
  slug: "italian",
  language: "Italian",
  script: "Italiano",
  romanization: "Italiano",
  languageFamily: "Romance",
  parentFamily: "Indo-European",
  hook: "Born from Latin's ashes in Dante's pen, Italian became the language of art, music, and food — and gave English more loanwords than any other Romance language.",
  originRegion: "Italian Peninsula",
  originPeriod: "~10th century CE (earliest texts)",
  currentSpeakers: "~64 million native speakers; 85+ million total",

  story: [
    "Italian did not exist when the Roman Empire fell. What existed was a patchwork of regional dialects — Tuscan, Venetian, Neapolitan, Sicilian, Lombard — each evolving independently from Vulgar Latin. These dialects were so different that a Venetian and a Sicilian could barely understand each other. It took a Florentine poet to create the idea of a unified Italian language.",
    "That poet was Dante Alighieri. When he wrote the Divine Comedy (1308–1321) in Tuscan dialect instead of Latin, he made a radical choice — using the 'vulgar tongue' for serious literature. His contemporary Petrarch and successor Boccaccio reinforced Tuscan's prestige. By the 16th century, Pietro Bembo's Prose della volgar lingua codified Tuscan as the literary standard. Italian was born — but for centuries it remained a written language that most Italians couldn't speak.",
    "Italian's global influence comes not from political power but from cultural prestige. The Renaissance exported Italian art vocabulary (fresco, chiaroscuro, studio). Italian opera gave the world its musical terminology (piano, forte, crescendo, soprano, allegro). Italian cuisine contributed cappuccino, espresso, pizza, pasta, al dente. Italian banking gave us terms like bank (banca), credit, and bankrupt (banca rotta — 'broken bench').",
    "When Italy unified in 1861, only 2.5% of the population actually spoke standard Italian — everyone else spoke regional dialects. Mass education, military service, radio, and television gradually created a nation of Italian speakers. Today, 64 million people speak Italian natively, and its cultural vocabulary — from music to food to fashion — is understood worldwide.",
  ],

  phases: [
    {
      era: "500–1000 CE",
      name: "Vulgar Latin → Italo-Romance",
      form: "Italo-Romance dialects",
      regions: [
        {
          name: "Italian Peninsula",
          modernCountries: ["Italy"],
          speakerCount: "~5–8 million",
          dominance: "native",
          coordinates: [12.5, 42],
          radius: 6,
        },
      ],
      context:
        "After Rome falls, Vulgar Latin spoken in Italy diverges into regional dialects under the influence of Germanic Lombard rulers in the north, Byzantine Greek in the south, and Arabic in Sicily. Latin remains the language of church and learning, but nobody speaks it natively anymore. The Placiti cassinesi (960–963 CE) contain the earliest known Italian text.",
      keyEvents: [
        "Lombard Kingdom in northern Italy (568–774 CE)",
        "Arab conquest of Sicily (827 CE)",
        "Placiti cassinesi — earliest Italian text (960 CE)",
        "Regional dialects diverge significantly",
      ],
      color: "#B896A8",
    },
    {
      era: "1000–1300 CE",
      name: "Literary Awakening",
      form: "Old Italian (Sicilian, Tuscan dialects)",
      regions: [
        {
          name: "Sicily (Sicilian School)",
          modernCountries: ["Italy"],
          speakerCount: "Court poetry",
          dominance: "prestige",
          coordinates: [14.3, 37.5],
          radius: 3,
        },
        {
          name: "Tuscany",
          modernCountries: ["Italy"],
          speakerCount: "~1 million",
          dominance: "native",
          coordinates: [11.2, 43.3],
          radius: 3,
        },
        {
          name: "Italian city-states",
          modernCountries: ["Italy"],
          speakerCount: "~8–10 million (various dialects)",
          dominance: "native",
          coordinates: [12.5, 43],
          radius: 5,
        },
      ],
      context:
        "The Sicilian School at Frederick II's court writes the first Italian-language poetry (~1230s). When the school disperses, Tuscan poets adopt and transform their style. Francis of Assisi's Canticle of the Sun (~1224) is among the earliest Italian literary texts. City-states like Florence, Venice, and Genoa grow wealthy through trade.",
      keyEvents: [
        "Sicilian School of poetry (~1230s)",
        "Francis of Assisi's Canticle (~1224)",
        "Rise of Italian city-states and banking",
        "Tuscan emerges as literary dialect",
      ],
      color: "#C4A2B4",
    },
    {
      era: "1300–1525 CE",
      name: "Tre Corone & the Renaissance",
      form: "Tuscan / early Standard Italian",
      regions: [
        {
          name: "Florence & Tuscany",
          modernCountries: ["Italy"],
          speakerCount: "~1.5 million",
          dominance: "prestige",
          coordinates: [11.25, 43.77],
          radius: 3,
        },
        {
          name: "Italian Peninsula (literary use)",
          modernCountries: ["Italy"],
          speakerCount: "~10–12 million (dialects)",
          dominance: "native",
          coordinates: [12.5, 42.5],
          radius: 6,
        },
      ],
      context:
        "Dante's Divine Comedy (1308–1321), Petrarch's Canzoniere, and Boccaccio's Decameron — the tre corone ('three crowns') — establish Tuscan as the language of Italian literature. The Renaissance spreads Italian art, architecture, and music vocabulary across Europe. Italian becomes the language of diplomacy and culture.",
      keyEvents: [
        "Dante's Divine Comedy (1308–1321)",
        "Petrarch's Canzoniere (~1350s)",
        "Boccaccio's Decameron (1353)",
        "Renaissance art exports Italian vocabulary to Europe",
        "Bembo's Prose della volgar lingua (1525)",
      ],
      color: "#D4B0C4",
    },
    {
      era: "1525–1800 CE",
      name: "Musical Language of Europe",
      form: "Standard Italian (literary)",
      regions: [
        {
          name: "Italian states (literary standard)",
          modernCountries: ["Italy"],
          speakerCount: "~15–18 million (dialects); literary Italian limited to educated",
          dominance: "native",
          coordinates: [12.5, 42],
          radius: 6,
        },
        {
          name: "European courts (cultural influence)",
          modernCountries: ["France", "Austria", "Germany", "England"],
          speakerCount: "Cultural elite",
          dominance: "prestige",
          coordinates: [10, 48],
          radius: 6,
        },
      ],
      context:
        "Italian opera is born (1597) and conquers European theaters. Musical terminology becomes universally Italian: allegro, adagio, forte, piano, crescendo, soprano, libretto. Italian is the language of musical education across Europe. Meanwhile, most Italians still speak only their regional dialects — the gap between literary Italian and spoken reality remains vast.",
      keyEvents: [
        "First opera: Dafne by Jacopo Peri (1597)",
        "Italian musical vocabulary becomes universal",
        "Accademia della Crusca standardizes Italian (1583)",
        "Commedia dell'arte spreads theater vocabulary",
      ],
      color: "#C4A2B4",
    },
    {
      era: "1800–1950 CE",
      name: "Unification & Nation-Building",
      form: "Standard Italian",
      regions: [
        {
          name: "Kingdom / Republic of Italy",
          modernCountries: ["Italy"],
          speakerCount: "~25–45 million (standard Italian slowly spreading)",
          dominance: "native",
          coordinates: [12.5, 42],
          radius: 6,
        },
        {
          name: "Italian diaspora",
          modernCountries: ["USA", "Argentina", "Brazil", "Australia"],
          speakerCount: "~10–15 million emigrants",
          dominance: "native",
          coordinates: [-60, -30],
          radius: 6,
        },
      ],
      context:
        "Italy unifies in 1861, but only ~2.5% speak standard Italian — the rest speak regional dialects. The new state imposes Italian through schools and military conscription. Mass emigration (1880–1920) carries Italian to the Americas. Radio (1924) and cinema begin spreading standard Italian to the masses. Fascism promotes linguistic unity. After WWII, television becomes the great equalizer.",
      keyEvents: [
        "Italian unification (1861)",
        "Only 2.5% speak standard Italian at unification",
        "Mass emigration to Americas (1880–1920)",
        "RAI television launches (1954) — spreads standard Italian",
      ],
      color: "#A88898",
    },
    {
      era: "1950 CE–Present",
      name: "Modern Italian & Cultural Export",
      form: "Modern Standard Italian",
      regions: [
        {
          name: "Italy",
          modernCountries: ["Italy", "Switzerland", "San Marino"],
          speakerCount: "~64 million native",
          dominance: "native",
          coordinates: [12.5, 42],
          radius: 6,
        },
        {
          name: "Global (food, fashion, music)",
          modernCountries: ["Worldwide"],
          speakerCount: "~85 million total",
          dominance: "trade",
          coordinates: [0, 35],
          radius: 8,
        },
      ],
      context:
        "Television finally unifies Italy linguistically — by the 1980s, most Italians speak standard Italian alongside their dialect. Italian cultural exports — fashion (Armani, Gucci, Prada), food (pizza, espresso, tiramisu), automotive (Ferrari, Lamborghini), and cinema (Fellini, Leone) — ensure Italian vocabulary continues to enter world languages. Italian is the fourth most studied language globally.",
      keyEvents: [
        "Television unifies the language (1960s–1980s)",
        "Made in Italy becomes global brand",
        "Italian: 4th most studied language worldwide",
        "Regional dialects declining but still spoken",
      ],
      color: "#B896A8",
    },
  ],

  relatedWords: [
    "cappuccino",
    "casino",
    "crescendo",
    "espresso",
    "fiasco",
    "gambit",
    "grotesque",
    "influenza",
    "paparazzi",
    "piano",
    "porcelain",
    "soprano",
    "vendetta",
    "vermicelli",
  ],
};
