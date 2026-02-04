import type { LanguageHistory } from "../language-types";

export const nahuatl: LanguageHistory = {
  slug: "nahuatl",
  language: "Nahuatl",
  script: "Nāhuatl",
  romanization: "Nāhuatl",
  languageFamily: "Uto-Aztecan",
  parentFamily: "Uto-Aztecan",
  hook: "The language of the Aztec Empire that gave the world chocolate, tomato, avocado, and coyote — words so essential we forgot they were borrowed.",
  originRegion: "Central Mexico",
  originPeriod: "~600 CE (in central Mexico)",
  currentSpeakers: "~1.7 million native speakers in Mexico",

  story: [
    "Nahuatl is the language of the Aztecs — or, as they called themselves, the Mexica. But the Nahuatl-speaking peoples arrived in central Mexico long before the Aztec Empire. The Uto-Aztecan language family originated in the deserts of what is now the southwestern United States, and Nahuatl speakers migrated southward over centuries, reaching the Valley of Mexico around 600 CE. The great city of Teotihuacan may have had Nahuatl speakers; the Toltec civilization certainly did.",
    "When the Aztec Empire rose to dominance in the 15th century, Nahuatl became the lingua franca of Mesoamerica — spoken from the deserts of northern Mexico to the jungles of Central America. The Aztec capital Tenochtitlan (on the site of modern Mexico City) was one of the largest cities in the world, with 200,000–300,000 inhabitants. Nahuatl was the language of administration, poetry, philosophy, and a sophisticated intellectual tradition that the Spanish found astonishing.",
    "The Spanish conquest of 1521 devastated the Aztec world, but it did not kill Nahuatl. Spanish missionaries actually promoted the language, using it to convert indigenous peoples across Mexico. They created grammars, dictionaries, and vast archives of Nahuatl literature. For decades, Nahuatl was the administrative language of colonial Mexico alongside Spanish. Thousands of Nahuatl words entered Spanish, and through Spanish, they entered every European language.",
    "Today, 1.7 million people still speak Nahuatl in Mexico — making it the most widely spoken indigenous language in North America. But its global legacy is in the words: chocolate (xocolātl), tomato (tomatl), avocado (āhuacatl), coyote (coyōtl), chipotle (chīlpoctli), guacamole (āhuacamōlli). These words are so deeply integrated into English that most speakers have no idea they come from an indigenous American language.",
  ],

  phases: [
    {
      era: "100–600 CE",
      name: "Uto-Aztecan Migration",
      form: "Proto-Nahuan",
      regions: [
        {
          name: "Southwestern deserts & migration route",
          modernCountries: ["USA", "Mexico"],
          speakerCount: "Unknown (pre-literate)",
          dominance: "native",
          coordinates: [-108, 28],
          radius: 6,
        },
      ],
      context:
        "Nahuatl's ancestors speak Proto-Uto-Aztecan in the deserts of what is now the American Southwest. Over centuries, Nahuan-speaking groups migrate southward through the Sierra Madre into central Mexico, possibly arriving during the final centuries of Teotihuacan's dominance. These migrations bring them into contact with Mesoamerican civilizations.",
      keyEvents: [
        "Uto-Aztecan homeland in SW North America",
        "Southward migration through Sierra Madre",
        "Arrival in central Mexico (~600 CE)",
        "Contact with Mesoamerican civilizations",
      ],
      color: "#C87533",
    },
    {
      era: "600–1100 CE",
      name: "Toltec Period",
      form: "Old Nahuatl",
      regions: [
        {
          name: "Central Mexican Highlands",
          modernCountries: ["Mexico"],
          speakerCount: "~500,000–1 million",
          dominance: "native",
          coordinates: [-99, 20],
          radius: 4,
        },
        {
          name: "Tula & Valley of Mexico",
          modernCountries: ["Mexico"],
          speakerCount: "Expanding",
          dominance: "prestige",
          coordinates: [-99.3, 20.1],
          radius: 3,
        },
      ],
      context:
        "Nahuatl-speaking peoples establish themselves in central Mexico. The Toltec civilization (centered at Tula) likely uses Nahuatl as a prestige language. The Aztecs later revere the Toltecs as cultural ancestors. Nahuatl absorbs vocabulary from Mixe-Zoquean and Mayan contact languages, reflecting Mesoamerica's deep linguistic exchange.",
      keyEvents: [
        "Toltec civilization centered at Tula (~900–1168 CE)",
        "Nahuatl becomes prestige language of central Mexico",
        "Contact with Maya and other Mesoamerican languages",
        "Fall of Tula (~1168 CE)",
      ],
      color: "#D88543",
    },
    {
      era: "1100–1521 CE",
      name: "Aztec Empire",
      form: "Classical Nahuatl",
      regions: [
        {
          name: "Aztec Empire heartland",
          modernCountries: ["Mexico"],
          speakerCount: "~5–6 million",
          dominance: "native",
          coordinates: [-99.1, 19.4],
          radius: 5,
        },
        {
          name: "Mesoamerican trade network",
          modernCountries: ["Mexico", "Guatemala", "El Salvador"],
          speakerCount: "~2 million (as lingua franca)",
          dominance: "trade",
          coordinates: [-92, 16],
          radius: 6,
        },
      ],
      context:
        "The Mexica (Aztecs) found Tenochtitlan in 1325 and build it into one of the world's largest cities by 1500. Classical Nahuatl becomes the lingua franca of the Aztec Triple Alliance, spoken across a vast trade network. Nahuatl has a rich oral tradition: flower-and-song poetry (in xōchitl in cuīcatl), philosophical dialogues, and historical chronicles. Glyphic writing records tribute lists and calendars.",
      keyEvents: [
        "Founding of Tenochtitlan (1325)",
        "Aztec Triple Alliance formed (1428)",
        "Tenochtitlan reaches 200,000–300,000 people",
        "Classical Nahuatl poetry and philosophy flourish",
        "Moctezuma II's reign (1502–1520)",
      ],
      color: "#E89553",
    },
    {
      era: "1521–1700 CE",
      name: "Colonial Nahuatl",
      form: "Colonial Nahuatl",
      regions: [
        {
          name: "New Spain (central Mexico)",
          modernCountries: ["Mexico"],
          speakerCount: "~3–4 million (declining)",
          dominance: "native",
          coordinates: [-99, 19.5],
          radius: 5,
        },
        {
          name: "Missionary expansion zones",
          modernCountries: ["Mexico", "Guatemala", "El Salvador"],
          speakerCount: "Used by missionaries",
          dominance: "trade",
          coordinates: [-95, 18],
          radius: 5,
        },
      ],
      context:
        "After the Spanish conquest (1521), Nahuatl survives surprisingly well. Franciscan missionaries use it as a language of conversion, creating grammars and dictionaries. Bernardino de Sahagún's Florentine Codex (1577) — a 12-volume encyclopedia of Aztec culture written in Nahuatl and Spanish — is one of the most remarkable documents of the colonial era. Nahuatl vocabulary floods into Spanish: chocolate, tomate, aguacate, chile, coyote.",
      keyEvents: [
        "Spanish conquest of Tenochtitlan (1521)",
        "Missionaries promote Nahuatl for conversion",
        "Sahagún's Florentine Codex (1577)",
        "Thousands of Nahuatl words enter Spanish",
        "Colonial Nahuatl documents in Latin script",
      ],
      color: "#C87533",
    },
    {
      era: "1700–1950 CE",
      name: "Decline & Marginalization",
      form: "Modern Nahuatl varieties",
      regions: [
        {
          name: "Central Mexico (rural communities)",
          modernCountries: ["Mexico"],
          speakerCount: "~1.5–2 million (declining)",
          dominance: "native",
          coordinates: [-98, 19],
          radius: 4,
        },
      ],
      context:
        "Spanish colonial and then Mexican government policies increasingly marginalize indigenous languages. Spanish becomes mandatory in education. Nahuatl retreats to rural communities and mountains. The language fragments into regional varieties (Huasteca, Guerrero, Sierra Norte) that are sometimes mutually unintelligible. But Nahuatl words — now deeply embedded in Mexican Spanish — continue their global journey through international trade and immigration.",
      keyEvents: [
        "Spanish becomes dominant in cities",
        "Mexican independence (1821) — Spanish as national language",
        "Nahuatl speakers face discrimination",
        "Regional Nahuatl varieties diverge",
      ],
      color: "#B86523",
    },
    {
      era: "1950 CE–Present",
      name: "Revitalization",
      form: "Modern Nahuatl",
      regions: [
        {
          name: "Central Mexico (communities & universities)",
          modernCountries: ["Mexico"],
          speakerCount: "~1.7 million",
          dominance: "native",
          coordinates: [-98.5, 19.5],
          radius: 4,
        },
        {
          name: "Mexican diaspora in USA",
          modernCountries: ["USA"],
          speakerCount: "~500,000 speakers",
          dominance: "native",
          coordinates: [-105, 33],
          radius: 4,
        },
      ],
      context:
        "Indigenous language rights movements gain momentum. Mexico's 2003 General Law of Linguistic Rights recognizes Nahuatl and 67 other indigenous languages as 'national languages.' Universities begin teaching Nahuatl. Young Nahuatl speakers create media, music, and social media content in the language. Meanwhile, its global word legacy continues to grow — chipotle, guacamole, and mezcal enter English in the 21st century through food culture.",
      keyEvents: [
        "Mexican linguistic rights law (2003)",
        "University Nahuatl programs expand",
        "Nahuatl social media and digital presence grows",
        "Chipotle, guacamole become global food words",
        "~1.7 million speakers — most spoken indigenous language in North America",
      ],
      color: "#D88543",
    },
  ],

  relatedWords: [
    "avocado",
    "chipotle",
    "chocolate",
    "coyote",
    "guacamole",
    "mezcal",
    "ocelot",
    "tomato",
  ],
};
