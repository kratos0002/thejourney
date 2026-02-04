import type { LanguageHistory } from "../language-types";

export const latin: LanguageHistory = {
  slug: "latin",
  language: "Latin",
  script: "Latina",
  romanization: "Latīna",
  languageFamily: "Italic",
  parentFamily: "Indo-European",
  hook: "A small tribe's tongue that became the voice of an empire, the church, and the foundation of science — and never truly died.",
  originRegion: "Latium, Italian Peninsula",
  originPeriod: "~700 BCE",
  currentSpeakers: "No native speakers; official language of the Vatican; used in science, law, and medicine worldwide",

  story: [
    "Latin began as the dialect of a small tribe called the Latins, who settled in the marshy plains of Latium around Rome. It was just one of many Italic languages — Oscan, Umbrian, Faliscan — competing for space on the Italian peninsula. Nothing about early Latin suggested it would outlive them all. But the Latins had Rome, and Rome had ambition.",
    "As Rome grew from city-state to republic to empire, Latin traveled with its legions. By the 1st century CE, it was spoken from Britain to Egypt, from Spain to the Black Sea. But Roman Latin was not monolithic: educated Romans spoke and wrote Classical Latin, while soldiers, merchants, and common people spoke Vulgar Latin — a simpler, faster, evolving variety. It was Vulgar Latin, not Cicero's elegant prose, that would become the ancestor of French, Spanish, Italian, Portuguese, and Romanian.",
    "When the Western Roman Empire fell in 476 CE, Latin should have died. Instead, it transformed. The Catholic Church adopted it as its liturgical language, preserving it through the medieval centuries. Monks copied Latin manuscripts. Universities taught in Latin. Scientists from Copernicus to Newton published in Latin. It became the universal language of European learning — a role it held for over a thousand years.",
    "Today, Latin has no native speakers, yet it is everywhere. Medical terminology (diagnosis, virus, cancer), legal language (habeas corpus, pro bono), scientific nomenclature (Homo sapiens, Tyrannosaurus rex), and the vocabulary of English (roughly 60% of English words have Latin roots) — all carry Latin's DNA. It is the most successful dead language in history, arguably more influential dead than it ever was alive.",
  ],

  phases: [
    {
      era: "700–200 BCE",
      name: "Early & Old Latin",
      form: "Old Latin",
      regions: [
        {
          name: "Latium & Rome",
          modernCountries: ["Italy"],
          speakerCount: "~200,000–500,000",
          dominance: "native",
          coordinates: [12.5, 41.9],
          radius: 3,
        },
      ],
      context:
        "Latin is one of several Italic languages. Rome is a small city-state competing with Etruscans, Greeks, and other Italic peoples. The earliest Latin inscription (Lapis Niger) dates to ~600 BCE. Latin begins absorbing Greek vocabulary as Rome encounters Greek colonies in southern Italy.",
      keyEvents: [
        "Traditional founding of Rome (753 BCE)",
        "Earliest Latin inscriptions (~600 BCE)",
        "Roman Republic established (509 BCE)",
        "Twelve Tables of Roman Law (450 BCE)",
      ],
      color: "#B08B9E",
    },
    {
      era: "200 BCE – 100 CE",
      name: "Classical Golden Age",
      form: "Classical Latin",
      regions: [
        {
          name: "Italian Peninsula",
          modernCountries: ["Italy"],
          speakerCount: "~5–8 million",
          dominance: "native",
          coordinates: [12.5, 42],
          radius: 5,
        },
        {
          name: "Western Mediterranean",
          modernCountries: ["Spain", "France", "Tunisia", "Libya"],
          speakerCount: "~10–15 million",
          dominance: "prestige",
          coordinates: [2, 40],
          radius: 8,
        },
        {
          name: "Eastern Mediterranean",
          modernCountries: ["Greece", "Turkey", "Egypt"],
          speakerCount: "Administrative only",
          dominance: "prestige",
          coordinates: [28, 37],
          radius: 5,
        },
      ],
      context:
        "Rome conquers the Mediterranean. Cicero, Caesar, Virgil, and Ovid create Latin's literary golden age. Classical Latin becomes standardized and prestigious, but the spoken language of common people (sermo vulgaris) already diverges from literary norms. Greek remains the prestige language in the eastern empire.",
      keyEvents: [
        "Punic Wars — Rome defeats Carthage (264–146 BCE)",
        "Cicero's speeches and philosophy",
        "Caesar's conquest of Gaul (58–50 BCE)",
        "Virgil's Aeneid (~19 BCE)",
        "Augustus establishes the Empire (27 BCE)",
      ],
      color: "#C09BAE",
    },
    {
      era: "100–500 CE",
      name: "Imperial Latin & Vulgar Latin",
      form: "Late Latin / Vulgar Latin",
      regions: [
        {
          name: "Western Roman Empire",
          modernCountries: ["Italy", "France", "Spain", "Portugal", "Romania", "Britain"],
          speakerCount: "~40–50 million",
          dominance: "native",
          coordinates: [5, 44],
          radius: 12,
        },
        {
          name: "North Africa",
          modernCountries: ["Tunisia", "Algeria", "Libya", "Morocco"],
          speakerCount: "~5–10 million",
          dominance: "prestige",
          coordinates: [8, 35],
          radius: 6,
        },
      ],
      context:
        "At its peak, Latin is the native language of tens of millions across Western Europe and North Africa. But the spoken language is evolving fast — Vulgar Latin drops case endings, changes word order, and invents new vocabulary. Christianity adopts Latin for its western churches. As the empire fragments, regional dialects of Vulgar Latin begin diverging into proto-Romance languages.",
      keyEvents: [
        "Christianity becomes state religion (380 CE)",
        "St. Jerome's Latin Vulgate Bible (~400 CE)",
        "Fall of Western Roman Empire (476 CE)",
        "Vulgar Latin dialects diverge regionally",
      ],
      color: "#A07B8E",
    },
    {
      era: "500–1000 CE",
      name: "Medieval Latin & Romance Birth",
      form: "Medieval Latin",
      regions: [
        {
          name: "Western Europe (learned)",
          modernCountries: ["Italy", "France", "Spain", "Germany", "Britain", "Ireland"],
          speakerCount: "Clergy & scholars",
          dominance: "scholarly",
          coordinates: [5, 48],
          radius: 10,
        },
      ],
      context:
        "Latin is no longer anyone's mother tongue — the Romance languages (French, Spanish, Italian, Portuguese, Romanian) have emerged as distinct languages. But Latin lives on as the language of the Catholic Church, monasteries, law, and education. Monks preserve classical texts through centuries of copying manuscripts. The Strasbourg Oaths (842) are the first document acknowledging that people speak 'Roman' (French), not Latin.",
      keyEvents: [
        "Strasbourg Oaths — earliest French text (842 CE)",
        "Monasteries preserve Latin manuscripts",
        "Charlemagne's educational reforms (~800 CE)",
        "Romance languages emerge as distinct tongues",
      ],
      color: "#907080",
    },
    {
      era: "1000–1700 CE",
      name: "Lingua Franca of Learning",
      form: "Scholastic & Renaissance Latin",
      regions: [
        {
          name: "European universities & church",
          modernCountries: ["Italy", "France", "Germany", "England", "Spain", "Poland", "Netherlands"],
          speakerCount: "~500,000–1 million (literate class)",
          dominance: "scholarly",
          coordinates: [10, 48],
          radius: 12,
        },
      ],
      context:
        "Latin becomes the universal language of European scholarship. Universities from Oxford to Bologna teach in Latin. Aquinas, Copernicus, Galileo, Descartes, and Newton all publish major works in Latin. Linnaeus creates the binomial naming system for biology in Latin. Scientific Latin is perhaps the language's most lasting legacy — it ensures that scholars across Europe can communicate regardless of their native tongue.",
      keyEvents: [
        "First European universities (Bologna 1088, Oxford 1096)",
        "Thomas Aquinas's Summa Theologica (1265–1274)",
        "Copernicus's De Revolutionibus (1543)",
        "Newton's Principia Mathematica (1687)",
        "Linnaeus's Systema Naturae (1735)",
      ],
      color: "#B896A8",
    },
    {
      era: "1700 CE–Present",
      name: "Legacy Language",
      form: "New Latin / Ecclesiastical Latin",
      regions: [
        {
          name: "Vatican & Catholic Church",
          modernCountries: ["Vatican City"],
          speakerCount: "Official language",
          dominance: "liturgical",
          coordinates: [12.45, 41.9],
          radius: 2,
        },
        {
          name: "Global (science, law, medicine)",
          modernCountries: ["Worldwide"],
          speakerCount: "Used in nomenclature globally",
          dominance: "scholarly",
          coordinates: [0, 30],
          radius: 10,
        },
      ],
      context:
        "National languages replace Latin in universities and science by the 19th century. But Latin's legacy is indelible: it remains the official language of the Vatican, the source of scientific nomenclature, the foundation of legal terminology, and the etymological backbone of English, French, Spanish, Italian, Portuguese, and Romanian. An estimated 60% of English vocabulary traces back to Latin, mostly through French.",
      keyEvents: [
        "National languages replace Latin in academia (18th–19th century)",
        "Latin remains Vatican official language",
        "Medical & legal terminology standardized in Latin",
        "~60% of English vocabulary has Latin origins",
      ],
      color: "#A07B8E",
    },
  ],

  relatedWords: [
    "cadaver",
    "calendar",
    "canary",
    "pilgrim",
    "salary",
    "torpedo",
  ],
};
