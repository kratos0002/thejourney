import type { LanguageHistory } from "../language-types";

export const japanese: LanguageHistory = {
  slug: "japanese",
  language: "Japanese",
  script: "日本語",
  romanization: "Nihongo",
  languageFamily: "Japonic",
  parentFamily: "Japonic",
  hook: "A language isolate that borrowed Chinese characters, invented three writing systems, and gave the world emoji — literally 'picture letters.'",
  originRegion: "Japanese Archipelago",
  originPeriod: "~3rd century BCE (proto-Japonic)",
  currentSpeakers: "~125 million native speakers",

  story: [
    "Japanese is one of the world's great linguistic mysteries. It has no proven relatives beyond the Ryukyuan languages of Okinawa. Attempts to link it to Korean, Altaic, or Austronesian languages remain unproven. It emerged on the Japanese archipelago in prehistoric times, likely brought by the Yayoi people who arrived from the Korean Peninsula around 300 BCE, mixing with the existing Jōmon population.",
    "Japanese had no writing system until Chinese characters (kanji) arrived via Korea around the 5th century CE. The Japanese adapted Chinese characters in a way no other culture did — using them for both their Chinese-derived meaning and as phonetic building blocks. From these phonetic uses, two uniquely Japanese syllabaries emerged: katakana (angular, used for foreign words) and hiragana (flowing, used for native grammar). Today, Japanese is written using all three systems simultaneously — the only language on Earth that does this.",
    "Through centuries of cultural exchange, Japanese absorbed massive amounts of Chinese vocabulary — estimated at 60% of its lexicon — while keeping its fundamentally different grammar (subject-object-verb, with particles marking grammatical roles). Then, after the Meiji Restoration of 1868, Japanese eagerly absorbed Western vocabulary too, creating hybrid words that blend kanji with foreign sounds: terebi (television), konpyūtā (computer), arbaito (part-time job, from German Arbeit).",
    "In the 21st century, Japanese has become one of the most culturally influential languages on Earth. Anime, manga, video games, and cuisine have exported Japanese words globally. And in 1999, Shigetaka Kurita created emoji for Japanese mobile phones — 'picture characters' (絵文字, e-moji) that have since become a universal language of their own, used by billions.",
  ],

  phases: [
    {
      era: "300 BCE – 500 CE",
      name: "Proto-Japonic Period",
      form: "Old Japanese (pre-literate)",
      regions: [
        {
          name: "Japanese Archipelago",
          modernCountries: ["Japan"],
          speakerCount: "~1–3 million",
          dominance: "native",
          coordinates: [136, 35],
          radius: 5,
        },
      ],
      context:
        "Proto-Japonic splits from Ryukyuan. The Yayoi people bring wet-rice agriculture and a new language that gradually replaces or merges with Jōmon languages. Japan has no writing system — the earliest Japanese words appear in Chinese records describing the islands.",
      keyEvents: [
        "Yayoi migration from Korean Peninsula (~300 BCE)",
        "Yamato state emerges (~3rd century CE)",
        "First mentions of Japan in Chinese histories",
      ],
      color: "#C75B5B",
    },
    {
      era: "500–794 CE",
      name: "Writing & Chinese Influence",
      form: "Old Japanese",
      regions: [
        {
          name: "Yamato Japan",
          modernCountries: ["Japan"],
          speakerCount: "~5–6 million",
          dominance: "native",
          coordinates: [135.7, 34.7],
          radius: 5,
        },
        {
          name: "Korean Peninsula (contact)",
          modernCountries: ["South Korea", "North Korea"],
          speakerCount: "Diplomatic/scholarly",
          dominance: "trade",
          coordinates: [127, 36],
          radius: 2,
        },
      ],
      context:
        "Chinese characters (kanji) arrive via Korean scholars and Buddhist monks. Japanese scholars adapt them to write Japanese — the Man'yōshū poetry anthology (~759 CE) uses kanji phonetically. Buddhism brings thousands of Chinese loanwords. The Nara court models itself on Tang China, and Chinese becomes the language of government documents.",
      keyEvents: [
        "Chinese writing adopted (~5th century CE)",
        "Buddhism arrives in Japan (538 or 552 CE)",
        "Man'yōshū poetry anthology (~759 CE)",
        "Nara as capital (710–794 CE)",
      ],
      color: "#D46B6B",
    },
    {
      era: "794–1185 CE",
      name: "Heian Golden Age",
      form: "Late Old Japanese / Early Middle Japanese",
      regions: [
        {
          name: "Heian Japan",
          modernCountries: ["Japan"],
          speakerCount: "~6–7 million",
          dominance: "native",
          coordinates: [135.7, 35],
          radius: 6,
        },
      ],
      context:
        "Hiragana and katakana syllabaries are invented, giving Japanese its own writing system alongside kanji. Court women, less expected to write in Chinese, create masterpieces in Japanese hiragana: Murasaki Shikibu's Tale of Genji (~1010 CE) — the world's first novel. Japanese literary culture blossoms independently from Chinese models.",
      keyEvents: [
        "Hiragana and katakana developed (~9th century)",
        "Tale of Genji by Murasaki Shikibu (~1010 CE)",
        "Japanese literary identity separates from Chinese",
        "Heian court culture at its peak",
      ],
      color: "#E87B7B",
    },
    {
      era: "1185–1600 CE",
      name: "Medieval Japanese",
      form: "Middle Japanese",
      regions: [
        {
          name: "Feudal Japan",
          modernCountries: ["Japan"],
          speakerCount: "~10–15 million",
          dominance: "native",
          coordinates: [136, 35.5],
          radius: 6,
        },
      ],
      context:
        "Samurai culture reshapes Japanese vocabulary. Zen Buddhism brings new Chinese loanwords. The first European contact (Portuguese, 1543) introduces the earliest Western loanwords: pan (bread), tabako (tobacco), kirisuto (Christ). Japanese begins absorbing its third layer of foreign vocabulary.",
      keyEvents: [
        "Kamakura shogunate (1185–1333)",
        "Zen Buddhism and its vocabulary arrive",
        "Portuguese arrive (1543) — first Western words",
        "Printing introduced (1590s)",
      ],
      color: "#C75B5B",
    },
    {
      era: "1600–1868 CE",
      name: "Edo Period Isolation",
      form: "Early Modern Japanese",
      regions: [
        {
          name: "Tokugawa Japan",
          modernCountries: ["Japan"],
          speakerCount: "~25–30 million",
          dominance: "native",
          coordinates: [139.7, 35.7],
          radius: 6,
        },
      ],
      context:
        "The Tokugawa shogunate closes Japan to the outside world (sakoku policy). For 250 years, Japanese evolves in isolation. Literacy rises dramatically — by the end of the Edo period, Japan has among the highest literacy rates in the world. Kabuki theater, haiku poetry, and woodblock printing flourish. Dutch is the only Western language permitted, studied through the tiny Dutch trading post at Dejima.",
      keyEvents: [
        "Sakoku (national isolation) policy (1633–1853)",
        "Literacy rates reach ~40–50%",
        "Haiku poetry form perfected (Bashō)",
        "Dutch studies (Rangaku) as window to Western science",
      ],
      color: "#B84B4B",
    },
    {
      era: "1868–Present",
      name: "Modern Japanese & Global Influence",
      form: "Modern Japanese",
      regions: [
        {
          name: "Japan",
          modernCountries: ["Japan"],
          speakerCount: "~125 million",
          dominance: "native",
          coordinates: [137, 36],
          radius: 6,
        },
        {
          name: "Global cultural influence",
          modernCountries: ["USA", "Brazil", "South Korea", "France", "UK"],
          speakerCount: "~3 million learners",
          dominance: "scholarly",
          coordinates: [-100, 35],
          radius: 6,
        },
      ],
      context:
        "The Meiji Restoration opens Japan to the world. Thousands of Western words flood in, adapted into katakana. Japanese scholars coin new kanji compounds for Western concepts — many of which are then borrowed back into Chinese and Korean. After WWII, American English influence intensifies. In the 21st century, Japanese culture (anime, manga, games, food) exports Japanese words globally. Emoji, created by Shigetaka Kurita in 1999, become universal.",
      keyEvents: [
        "Meiji Restoration opens Japan (1868)",
        "Mass Western vocabulary adoption",
        "Japan coins kanji terms borrowed into Chinese/Korean",
        "Anime/manga global cultural export (1990s+)",
        "Emoji invented by Kurita (1999)",
      ],
      color: "#D46B6B",
    },
  ],

  relatedWords: [
    "emoji",
    "futon",
    "karate",
    "manga",
    "origami",
    "tycoon",
  ],
};
