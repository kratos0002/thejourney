import type { LanguageHistory } from "../language-types";

export const persian: LanguageHistory = {
  slug: "persian",
  language: "Persian",
  script: "فارسی",
  romanization: "Fārsī",
  languageFamily: "Iranian",
  parentFamily: "Indo-European",
  hook: "The language of poets and emperors that became the lingua franca from Istanbul to Delhi—spoken in three countries today under three different names.",
  originRegion: "Fars Province, Iran",
  originPeriod: "~550 BCE",
  currentSpeakers: "~110 million native speakers across Iran, Afghanistan, and Tajikistan",

  story: [
    "Persian is one of the world's great literary languages—the tongue of Rumi, Hafez, and Omar Khayyam, whose poetry has been translated more than any other except the Bible. But Persian's influence extends far beyond poetry. For over a thousand years, it was the language of administration, diplomacy, and high culture across a vast swathe of Asia, from the Ottoman court to the Mughal emperors of India.",
    "The language has reinvented itself three times. Old Persian was the language of Cyrus the Great and Darius, inscribed on the walls of Persepolis. Middle Persian (Pahlavi) was the language of the Zoroastrian priests and Sasanian kings. And New Persian—the language spoken today—emerged after the Islamic conquest, adopting Arabic script and absorbing thousands of Arabic words while keeping its Indo-European grammar intact.",
    "What makes Persian remarkable is its cultural resilience. When Arab armies conquered Persia in the 7th century, they brought Arabic as the language of religion and government. Many conquered peoples abandoned their languages entirely. But Persians held on, and within two centuries, Persian had re-emerged as a literary language—now written in Arabic script, enriched with Arabic vocabulary, but unmistakably Persian in structure and spirit.",
    "Today, Persian is called Farsi in Iran, Dari in Afghanistan, and Tajiki in Tajikistan. These are political names for what is essentially one language with regional variations—like British, American, and Australian English. The poets of Tehran, Kabul, and Dushanbe can still read each other's work, connected by a literary tradition stretching back over a millennium."
  ],

  phases: [
    {
      era: "550–330 BCE",
      name: "Old Persian Empire",
      form: "Old Persian",
      regions: [
        {
          name: "Persian Empire (Achaemenid)",
          modernCountries: ["Iran", "Iraq", "Turkey", "Egypt", "Afghanistan", "Pakistan"],
          speakerCount: "~2 million native; imperial lingua franca",
          dominance: "native",
          coordinates: [52.5, 30],
          radius: 8
        }
      ],
      context: "Old Persian was the language of the Achaemenid Empire—the largest empire the world had yet seen. Cyrus the Great, Darius, and Xerxes used it for royal inscriptions, though Aramaic served as the administrative lingua franca. The famous Behistun inscription, carved into a cliff face, preserved Old Persian for modern scholars to decipher.",
      keyEvents: [
        "Cyrus the Great founds Achaemenid Empire (550 BCE)",
        "Behistun Inscription carved (522 BCE)",
        "Persian Wars with Greece (499–449 BCE)",
        "Alexander conquers Persia (330 BCE)"
      ],
      color: "#c9a227"
    },
    {
      era: "224–651 CE",
      name: "Sasanian Empire",
      form: "Middle Persian (Pahlavi)",
      regions: [
        {
          name: "Sasanian Persia",
          modernCountries: ["Iran", "Iraq", "Afghanistan", "Pakistan", "Armenia", "Azerbaijan"],
          speakerCount: "~4 million",
          dominance: "native",
          coordinates: [52, 33],
          radius: 7
        },
        {
          name: "Mesopotamia",
          modernCountries: ["Iraq"],
          speakerCount: "Administrative use",
          dominance: "prestige",
          coordinates: [44, 33],
          radius: 4
        }
      ],
      context: "Middle Persian (Pahlavi) was the language of the Sasanian dynasty—the last pre-Islamic Persian empire. It was written in a Semitic-derived script and became the language of Zoroastrian religious texts. The Sasanians rivaled Rome and Byzantium, and their cultural achievements laid the groundwork for Islamic Persian civilization.",
      keyEvents: [
        "Sasanian dynasty founded (224 CE)",
        "Zoroastrian texts compiled in Pahlavi",
        "Wars with Rome and Byzantium",
        "Arab conquest ends Sasanian rule (651 CE)"
      ],
      color: "#b8860b"
    },
    {
      era: "651–900 CE",
      name: "Arab Conquest & Survival",
      form: "Early New Persian",
      regions: [
        {
          name: "Persia under Arab rule",
          modernCountries: ["Iran"],
          speakerCount: "Declining, Arabic dominant",
          dominance: "native",
          coordinates: [52, 33],
          radius: 5
        }
      ],
      context: "The Arab conquest brought Islam and Arabic to Persia. For two centuries, Arabic was the prestige language—the language of religion, science, and administration. Persian survived among the common people and in poetry, but it seemed destined to fade. Then something remarkable happened: Persian began to be written in Arabic script, absorbing Arabic vocabulary while keeping its grammar. A new literary language was being born.",
      keyEvents: [
        "Arab conquest of Persia (633–654 CE)",
        "Arabic becomes administrative language",
        "Persian survives in oral tradition",
        "First New Persian poetry emerges (~750 CE)"
      ],
      color: "#8b7355"
    },
    {
      era: "900–1200 CE",
      name: "Persian Renaissance",
      form: "Classical New Persian",
      regions: [
        {
          name: "Eastern Persia (Khorasan)",
          modernCountries: ["Iran", "Afghanistan", "Turkmenistan"],
          speakerCount: "~3 million",
          dominance: "native",
          coordinates: [59, 35],
          radius: 6
        },
        {
          name: "Central Asia (Samanid realm)",
          modernCountries: ["Uzbekistan", "Tajikistan"],
          speakerCount: "~1 million",
          dominance: "prestige",
          coordinates: [66, 39],
          radius: 5
        },
        {
          name: "Western Persia",
          modernCountries: ["Iran", "Iraq"],
          speakerCount: "~2 million",
          dominance: "native",
          coordinates: [48, 33],
          radius: 5
        }
      ],
      context: "The Samanid dynasty (819–999 CE) championed Persian as a literary language. Ferdowsi composed the Shahnameh (Book of Kings), an epic poem of 50,000 couplets that preserved pre-Islamic Persian legends and purified the language of excessive Arabic borrowings. Persian became the prestige language of the eastern Islamic world, rivaling Arabic itself.",
      keyEvents: [
        "Samanid dynasty promotes Persian (819–999)",
        "Rudaki, father of Persian poetry (858–941)",
        "Ferdowsi completes Shahnameh (1010)",
        "Persian becomes court language of Turkic dynasties"
      ],
      color: "#daa520"
    },
    {
      era: "1200–1500 CE",
      name: "Cosmopolitan Peak",
      form: "Classical Persian",
      regions: [
        {
          name: "Persia",
          modernCountries: ["Iran"],
          speakerCount: "~4 million",
          dominance: "native",
          coordinates: [52, 33],
          radius: 6
        },
        {
          name: "Anatolia (Seljuk/Ottoman)",
          modernCountries: ["Turkey"],
          speakerCount: "Court & literary language",
          dominance: "prestige",
          coordinates: [32, 39],
          radius: 5
        },
        {
          name: "Central Asia (Timurid)",
          modernCountries: ["Uzbekistan", "Afghanistan", "Tajikistan"],
          speakerCount: "~2 million",
          dominance: "prestige",
          coordinates: [66, 38],
          radius: 6
        },
        {
          name: "Northern India (Delhi Sultanate)",
          modernCountries: ["India", "Pakistan"],
          speakerCount: "Court & administrative language",
          dominance: "prestige",
          coordinates: [77, 28],
          radius: 5
        }
      ],
      context: "This was Persian's golden age of geographical reach. The Mongol invasions devastated Persia but paradoxically spread Persian culture further. The Mongol and Turkic rulers who followed—Timur, the Ottomans, the Delhi sultans—all adopted Persian as their language of administration and poetry. Rumi wrote in Persian. Hafez wrote in Persian. From Constantinople to Delhi, to be cultured meant to know Persian.",
      keyEvents: [
        "Mongol invasions (1219–1258)",
        "Rumi writes in Persian (1207–1273)",
        "Hafez's poetry (1315–1390)",
        "Timurid cultural renaissance",
        "Persian as Ottoman court language"
      ],
      color: "#e6b800"
    },
    {
      era: "1500–1800 CE",
      name: "Imperial Language",
      form: "Classical Persian",
      regions: [
        {
          name: "Safavid Persia",
          modernCountries: ["Iran", "Afghanistan"],
          speakerCount: "~5 million",
          dominance: "native",
          coordinates: [52, 33],
          radius: 7
        },
        {
          name: "Mughal India",
          modernCountries: ["India", "Pakistan", "Bangladesh"],
          speakerCount: "~2 million (court & educated classes)",
          dominance: "prestige",
          coordinates: [77, 25],
          radius: 8
        },
        {
          name: "Ottoman Empire",
          modernCountries: ["Turkey"],
          speakerCount: "Literary & diplomatic language",
          dominance: "prestige",
          coordinates: [29, 41],
          radius: 4
        },
        {
          name: "Central Asia",
          modernCountries: ["Uzbekistan", "Tajikistan", "Turkmenistan"],
          speakerCount: "~1 million",
          dominance: "prestige",
          coordinates: [64, 39],
          radius: 5
        }
      ],
      context: "The Mughal Empire made Persian the official language of India for over 300 years. Court records, poetry, and scholarship were all in Persian. The Taj Mahal's inscriptions are in Persian. Meanwhile, the Safavid dynasty unified Persia and made Shia Islam the state religion. Persian remained the cosmopolitan language of the Islamic world, though its dominance was beginning to fade as Turkish and local languages gained ground.",
      keyEvents: [
        "Safavid dynasty (1501–1736)",
        "Mughal Empire in India (1526–1857)",
        "Persian official language of Mughal courts",
        "Taj Mahal built with Persian inscriptions (1632–1653)",
        "British gradually replace Persian in India"
      ],
      color: "#d4a574"
    },
    {
      era: "1800 CE–Present",
      name: "National Languages",
      form: "Modern Persian (Farsi/Dari/Tajiki)",
      regions: [
        {
          name: "Iran",
          modernCountries: ["Iran"],
          speakerCount: "~75 million",
          dominance: "native",
          coordinates: [53, 32],
          radius: 6
        },
        {
          name: "Afghanistan",
          modernCountries: ["Afghanistan"],
          speakerCount: "~25 million (Dari)",
          dominance: "native",
          coordinates: [66, 34],
          radius: 5
        },
        {
          name: "Tajikistan",
          modernCountries: ["Tajikistan"],
          speakerCount: "~8 million (Tajiki)",
          dominance: "native",
          coordinates: [69, 38.5],
          radius: 3
        },
        {
          name: "Global diaspora",
          modernCountries: ["USA", "Germany", "UK", "Canada"],
          speakerCount: "~3 million",
          dominance: "native",
          coordinates: [-100, 40],
          radius: 4
        }
      ],
      context: "Colonialism and nationalism fragmented Persian's cosmopolitan world. The British replaced Persian with English in India. The Soviet Union imposed Cyrillic script on Tajiki and tried to make it a separate language. Iran modernized its vocabulary, purging Arabic words. Today, Persian exists as three national languages—Farsi, Dari, and Tajiki—that remain mutually intelligible despite political borders and different scripts.",
      keyEvents: [
        "British end Persian in India (1835)",
        "Reza Shah modernizes Persian (1930s)",
        "Tajiki written in Cyrillic (1939)",
        "Iranian Revolution (1979)",
        "Persian diaspora grows globally"
      ],
      color: "#c9a86c"
    }
  ],

  relatedWords: [
    "azure",
    "bazaar",
    "caravan",
    "checkmate",
    "jasmine",
    "khaki",
    "lemon",
    "magic",
    "orange",
    "paradise",
    "pajamas",
    "pistachio",
    "scarlet",
    "shawl",
    "spinach",
    "sugar",
    "taffeta",
    "tulip"
  ]
};
