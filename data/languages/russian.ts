import type { LanguageHistory } from "../language-types";

export const russian: LanguageHistory = {
  slug: "russian",
  language: "Russian",
  script: "Русский",
  romanization: "Russkiy",
  languageFamily: "Slavic",
  parentFamily: "Indo-European",
  hook: "From Kyivan monks to Soviet cosmonauts, Russian spread across eleven time zones — the language of Tolstoy, Tchaikovsky, and the Space Age.",
  originRegion: "Eastern Europe (Kyivan Rus')",
  originPeriod: "~10th century CE (Old East Slavic)",
  currentSpeakers: "~255 million speakers; 150 million native",

  story: [
    "Russian descends from Old East Slavic, the language of Kyivan Rus' — the medieval state centered on Kyiv that united the Eastern Slavic peoples. When Byzantine missionaries Cyril and Methodius created the Glagolitic (and later Cyrillic) alphabet for Slavic languages in the 9th century, they gave Russian its distinctive script. The adoption of Orthodox Christianity in 988 CE brought Church Slavonic — a literary language based on Old Bulgarian — which shaped Russian's high register for centuries.",
    "As Kyivan Rus' fragmented under Mongol invasion (1237–1240), the eastern dialects around Moscow gradually diverged from Ukrainian and Belarusian. The Grand Duchy of Moscow rose to power, and its dialect became the basis for standard Russian. Peter the Great (r. 1682–1725) modernized the language alongside everything else — simplifying the Cyrillic alphabet, importing thousands of Dutch, German, and French words for technology, administration, and culture.",
    "The 19th century was Russian's literary golden age. Pushkin's poetry established the modern literary language. Tolstoy, Dostoevsky, Chekhov, and Turgenev produced novels and plays that became world literature. Russian became a language of high culture alongside French and German. But it was the 20th century that made Russian truly global — the Soviet Union spread it across Central Asia, Eastern Europe, and into space. Sputnik (1957) became one of the first Russian words known worldwide.",
    "Today, Russian is the most spoken Slavic language and the eighth most spoken language globally. It remains a lingua franca across the former Soviet states, from Kazakhstan to the Baltics. Its vocabulary has given English words from both extremes of human experience: from sputnik and cosmonaut to gulag and pogrom, from vodka and troika to perestroika and glasnost.",
  ],

  phases: [
    {
      era: "500–988 CE",
      name: "Proto-Slavic & Early East Slavic",
      form: "Old East Slavic",
      regions: [
        {
          name: "Eastern European forests & steppes",
          modernCountries: ["Ukraine", "Belarus", "Russia"],
          speakerCount: "~3–5 million",
          dominance: "native",
          coordinates: [32, 52],
          radius: 7,
        },
      ],
      context:
        "East Slavic tribes settle the forests and river systems of Eastern Europe. They speak dialects of Common Slavic that are gradually diverging from West and South Slavic. The Varangian (Viking) Rus' establish trading routes from Scandinavia to Constantinople, giving their name to 'Russia.' Old East Slavic is the common ancestor of Russian, Ukrainian, and Belarusian.",
      keyEvents: [
        "Slavic expansion across Eastern Europe (5th–7th centuries)",
        "Varangian Rus' establish Kyiv (9th century)",
        "Cyril and Methodius create Slavic alphabet (~863 CE)",
        "Baptism of Kyivan Rus' (988 CE)",
      ],
      color: "#8B7B9E",
    },
    {
      era: "988–1240 CE",
      name: "Kyivan Rus'",
      form: "Old East Slavic / Church Slavonic",
      regions: [
        {
          name: "Kyivan Rus'",
          modernCountries: ["Ukraine", "Belarus", "Russia"],
          speakerCount: "~7–8 million",
          dominance: "native",
          coordinates: [30.5, 50.5],
          radius: 8,
        },
        {
          name: "Novgorod",
          modernCountries: ["Russia"],
          speakerCount: "~500,000",
          dominance: "native",
          coordinates: [31.3, 58.5],
          radius: 3,
        },
      ],
      context:
        "Kyivan Rus' adopts Orthodox Christianity and the Cyrillic alphabet. Church Slavonic becomes the literary and liturgical language, coexisting with spoken Old East Slavic. The Novgorod birch-bark letters reveal everyday Old East Slavic: trade receipts, love letters, children's homework. This is the common period before Russian, Ukrainian, and Belarusian split.",
      keyEvents: [
        "Christianity adopted; Cyrillic script (988 CE)",
        "First Slavic chronicles (Primary Chronicle ~1113)",
        "Novgorod birch-bark letters (11th century+)",
        "Cultural flowering under Yaroslav the Wise",
      ],
      color: "#9B8BAE",
    },
    {
      era: "1240–1547 CE",
      name: "Mongol Period & Moscow's Rise",
      form: "Old Russian (diverging from Ukrainian/Belarusian)",
      regions: [
        {
          name: "Muscovy",
          modernCountries: ["Russia"],
          speakerCount: "~5–8 million",
          dominance: "native",
          coordinates: [37.6, 55.8],
          radius: 6,
        },
      ],
      context:
        "The Mongol invasion (1237–1240) shatters Kyivan Rus'. Moscow gradually emerges as the dominant principality, collecting taxes for the Mongol khans and eventually overthrowing them. Tatar/Mongol vocabulary enters Russian — words for money, customs, and administration. Eastern Slavic splits: the Muscovite dialect becomes the basis of Russian, while western and southern dialects become Ukrainian and Belarusian under Lithuanian/Polish rule.",
      keyEvents: [
        "Mongol invasion of Rus' (1237–1240)",
        "Moscow rises under Ivan I (14th century)",
        "Fall of Constantinople (1453) — Moscow as 'Third Rome'",
        "Ivan III ends Mongol rule (1480)",
        "Tatar loanwords enter Russian",
      ],
      color: "#7B6B8E",
    },
    {
      era: "1547–1800 CE",
      name: "Imperial Expansion",
      form: "Middle Russian → Modern Russian",
      regions: [
        {
          name: "Russian Empire (European)",
          modernCountries: ["Russia", "Ukraine", "Belarus", "Finland", "Poland"],
          speakerCount: "~20–40 million",
          dominance: "native",
          coordinates: [40, 55],
          radius: 10,
        },
        {
          name: "Siberia (expansion)",
          modernCountries: ["Russia"],
          speakerCount: "Expanding eastward",
          dominance: "colonial",
          coordinates: [90, 58],
          radius: 10,
        },
      ],
      context:
        "Peter the Great (1682–1725) modernizes Russia and its language: simplifies Cyrillic, imports thousands of Western European words (Dutch, German, French) for science, military, and governance. Catherine the Great makes French the language of the court, but Russian remains the language of the people. Russia expands across Siberia to the Pacific, carrying Russian with it.",
      keyEvents: [
        "Ivan the Terrible — first Tsar (1547)",
        "Russian expansion into Siberia (1580s+)",
        "Peter the Great's reforms (1700s)",
        "Lomonosov standardizes Russian grammar (1755)",
        "French as court language under Catherine II",
      ],
      color: "#8B7B9E",
    },
    {
      era: "1800–1917 CE",
      name: "Literary Golden Age",
      form: "Modern Russian",
      regions: [
        {
          name: "Russian Empire",
          modernCountries: ["Russia", "Ukraine", "Belarus", "Poland", "Finland", "Central Asia"],
          speakerCount: "~70–80 million",
          dominance: "native",
          coordinates: [50, 55],
          radius: 15,
        },
      ],
      context:
        "Pushkin's poetry (1820s–1830s) creates the modern literary Russian language — synthesizing Church Slavonic's grandeur with spoken Russian's vitality. Tolstoy, Dostoevsky, Chekhov, Turgenev, and Gogol produce world-class literature. Russian becomes a major language of European culture, philosophy, and science (Mendeleev, Lobachevsky).",
      keyEvents: [
        "Pushkin establishes modern literary Russian (1820s)",
        "Tolstoy's War and Peace (1869)",
        "Dostoevsky's The Brothers Karamazov (1880)",
        "Chekhov's plays transform theater",
        "Mendeleev's periodic table (1869)",
      ],
      color: "#AB9BBE",
    },
    {
      era: "1917–Present",
      name: "Soviet & Post-Soviet Era",
      form: "Modern Russian",
      regions: [
        {
          name: "Russia",
          modernCountries: ["Russia"],
          speakerCount: "~150 million native",
          dominance: "native",
          coordinates: [50, 55],
          radius: 12,
        },
        {
          name: "Former Soviet states",
          modernCountries: ["Kazakhstan", "Uzbekistan", "Ukraine", "Belarus", "Kyrgyzstan"],
          speakerCount: "~100 million second language",
          dominance: "prestige",
          coordinates: [65, 45],
          radius: 12,
        },
        {
          name: "Global diaspora",
          modernCountries: ["USA", "Germany", "Israel", "Canada"],
          speakerCount: "~5–10 million",
          dominance: "native",
          coordinates: [-74, 40],
          radius: 4,
        },
      ],
      context:
        "The Soviet Union spreads Russian across 15 republics and makes it mandatory in education from Prague to Vladivostok. Russian becomes a language of space (sputnik, cosmonaut), politics (perestroika, glasnost), and Cold War vocabulary. After 1991, Russian remains a lingua franca across former Soviet states, though many reassert their national languages. Today Russian is the 8th most spoken language globally.",
      keyEvents: [
        "Bolshevik Revolution (1917) — spelling reform",
        "Russian as Soviet lingua franca",
        "Sputnik launched (1957) — first Russian word globally known",
        "Soviet collapse (1991)",
        "Russian internet (Runet) grows rapidly",
      ],
      color: "#9B8BAE",
    },
  ],

  relatedWords: [
    "balalaika",
    "mammoth",
    "perestroika",
    "pogrom",
    "samovar",
    "sputnik",
    "steppe",
    "troika",
    "vodka",
  ],
};
