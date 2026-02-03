import type { LanguageHistory } from "../language-types";

export const sanskrit: LanguageHistory = {
  slug: "sanskrit",
  language: "Sanskrit",
  script: "संस्कृत",
  romanization: "Saṃskṛta",
  languageFamily: "Indo-Aryan",
  parentFamily: "Indo-European",
  hook: "The 'perfected' language that shaped half of Asia—and shares ancestors with English, Greek, and Latin.",
  originRegion: "Northwest India (Punjab/Indus region)",
  originPeriod: "~1500 BCE",
  currentSpeakers: "~24,000 native speakers; 300+ million use it in religious contexts",

  story: [
    "Sanskrit means 'perfected' or 'refined'—saṃskṛta, literally 'put together well.' It was the language of the Vedas, the oldest sacred texts of Hinduism, composed by poets and priests who believed that precise pronunciation could unlock cosmic power. Every syllable mattered. The language was considered divine.",
    "For over a thousand years, Sanskrit was the prestige language of the Indian subcontinent—the language of philosophy, science, mathematics, and literature. The grammarian Pāṇini codified it around 400 BCE with such precision that his work remains one of the most sophisticated linguistic analyses ever written. Sanskrit became a technology for preserving and transmitting knowledge across generations.",
    "But Sanskrit did something remarkable: it traveled. Buddhist monks carried it to Central Asia, China, Korea, and Japan. Hindu traders and priests brought it to Southeast Asia, where it became the language of courts from Cambodia to Indonesia. The 'Sanskrit Cosmopolis' stretched from Afghanistan to Bali—not through conquest, but through the prestige of its literature and religion.",
    "Today, Sanskrit is no longer a living first language for most, but it lives on in ways both obvious and hidden. Hindu rituals, Buddhist sutras, and yoga classes still use Sanskrit. And through its daughter languages—Hindi, Bengali, Marathi, and dozens more—Sanskrit's grammar, vocabulary, and worldview shape how over a billion people speak and think."
  ],

  phases: [
    {
      era: "1500–500 BCE",
      name: "Vedic Period",
      form: "Vedic Sanskrit",
      regions: [
        {
          name: "Punjab & Upper Indus",
          modernCountries: ["India", "Pakistan"],
          speakerCount: "~500,000–2 million",
          dominance: "native",
          coordinates: [74.5, 31.5],
          radius: 4
        },
        {
          name: "Upper Ganges",
          modernCountries: ["India"],
          speakerCount: "expanding",
          dominance: "native",
          coordinates: [78, 28],
          radius: 3
        }
      ],
      context: "The earliest phase: Indo-Aryan tribes compose the Rigveda, a collection of hymns to the gods. Sanskrit exists primarily as a liturgical and poetic language, transmitted orally with extraordinary precision. The Vedic religion spreads eastward along the Ganges plain.",
      keyEvents: [
        "Rigveda composed (~1500–1200 BCE)",
        "Eastward migration along Ganges",
        "Development of Vedic ritual tradition"
      ],
      color: "#d4a574"
    },
    {
      era: "500 BCE – 100 CE",
      name: "Classical Codification",
      form: "Classical Sanskrit",
      regions: [
        {
          name: "Northern India",
          modernCountries: ["India", "Pakistan", "Nepal"],
          speakerCount: "~3–5 million",
          dominance: "prestige",
          coordinates: [77, 28],
          radius: 6
        },
        {
          name: "Gangetic Plain",
          modernCountries: ["India"],
          speakerCount: "~2 million",
          dominance: "native",
          coordinates: [83, 26],
          radius: 4
        }
      ],
      context: "Pāṇini's grammar (Aṣṭādhyāyī) standardizes Sanskrit with 4,000 rules—a feat of linguistic analysis unmatched for two millennia. Sanskrit becomes the language of philosophy (Upanishads), epic poetry (Mahābhārata, Rāmāyaṇa), and early Buddhist/Jain texts. It shifts from a spoken language to a learned prestige language.",
      keyEvents: [
        "Pāṇini's Aṣṭādhyāyī grammar (~400 BCE)",
        "Mahābhārata and Rāmāyaṇa composed",
        "Buddhist texts translated into Sanskrit",
        "Maurya Empire spreads Indic culture"
      ],
      color: "#c9a86c"
    },
    {
      era: "100–600 CE",
      name: "Golden Age & Expansion",
      form: "Classical Sanskrit",
      regions: [
        {
          name: "Indian Subcontinent",
          modernCountries: ["India", "Pakistan", "Nepal", "Bangladesh", "Sri Lanka"],
          speakerCount: "~5–10 million (prestige use)",
          dominance: "prestige",
          coordinates: [78, 22],
          radius: 10
        },
        {
          name: "Central Asia (Silk Road)",
          modernCountries: ["Afghanistan", "Uzbekistan", "Tajikistan"],
          speakerCount: "Buddhist monasteries",
          dominance: "liturgical",
          coordinates: [67, 37],
          radius: 5
        },
        {
          name: "Southeast Asia (early)",
          modernCountries: ["Cambodia", "Vietnam", "Thailand", "Indonesia"],
          speakerCount: "Royal courts, inscriptions",
          dominance: "prestige",
          coordinates: [105, 13],
          radius: 6
        }
      ],
      context: "The Gupta Empire (320–550 CE) marks Sanskrit's golden age. Kālidāsa writes masterpiece dramas; mathematicians develop decimal notation and zero. Meanwhile, Sanskrit spreads far beyond India: Buddhist monks carry it along the Silk Road, and Hindu-Buddhist culture transforms Southeast Asian courts. The 'Sanskrit Cosmopolis' emerges—a vast cultural sphere united by a shared literary language.",
      keyEvents: [
        "Gupta Empire golden age (320–550 CE)",
        "Kālidāsa's plays and poetry",
        "Aryabhata's astronomy/mathematics",
        "Buddhist texts reach China via Sanskrit",
        "First Sanskrit inscriptions in Southeast Asia"
      ],
      color: "#e6c170"
    },
    {
      era: "600–1200 CE",
      name: "Southeast Asian Peak",
      form: "Classical Sanskrit",
      regions: [
        {
          name: "India (declining as vernacular)",
          modernCountries: ["India"],
          speakerCount: "Scholarly/religious",
          dominance: "scholarly",
          coordinates: [78, 22],
          radius: 8
        },
        {
          name: "Khmer Empire",
          modernCountries: ["Cambodia", "Thailand", "Vietnam", "Laos"],
          speakerCount: "Royal inscriptions, temples",
          dominance: "prestige",
          coordinates: [104, 13],
          radius: 5
        },
        {
          name: "Java & Sumatra",
          modernCountries: ["Indonesia"],
          speakerCount: "Courts and temples",
          dominance: "prestige",
          coordinates: [110, -7],
          radius: 5
        },
        {
          name: "Champa (Vietnam coast)",
          modernCountries: ["Vietnam"],
          speakerCount: "Royal inscriptions",
          dominance: "prestige",
          coordinates: [109, 14],
          radius: 3
        }
      ],
      context: "In India, Sanskrit increasingly becomes a language of scholarship and religion as vernacular Prakrits evolve into distinct languages. But in Southeast Asia, Sanskrit reaches its peak: Angkor Wat's inscriptions, Javanese temple poetry, Cham royal decrees. Kingdoms adopt Sanskrit as the language of prestige, even as their populations speak Khmer, Javanese, or Cham.",
      keyEvents: [
        "Angkor Wat constructed (12th century)",
        "Borobudur inscriptions (Java)",
        "Vernacular languages emerge in India",
        "Islamic conquests begin in India (1000+ CE)"
      ],
      color: "#deb760"
    },
    {
      era: "1200–1800 CE",
      name: "Preservation Era",
      form: "Classical Sanskrit",
      regions: [
        {
          name: "India (temple & scholarly)",
          modernCountries: ["India", "Nepal"],
          speakerCount: "~50,000–100,000 scholars",
          dominance: "liturgical",
          coordinates: [78, 22],
          radius: 7
        },
        {
          name: "Bali (Hindu enclave)",
          modernCountries: ["Indonesia"],
          speakerCount: "Religious use",
          dominance: "liturgical",
          coordinates: [115.2, -8.4],
          radius: 2
        }
      ],
      context: "Islamic rule transforms northern India; Persian becomes the prestige language of courts. Sanskrit retreats to temples, monasteries, and traditional schools (gurukulas). It is preserved by Brahmin families who transmit texts through memorization and manuscript copying. In Southeast Asia, Islam and Theravada Buddhism replace Sanskrit-based culture—except in Bali, which remains Hindu.",
      keyEvents: [
        "Delhi Sultanate (1206–1526)",
        "Mughal Empire (1526–1857)",
        "Persian as court language",
        "Sanskrit preserved in religious institutions",
        "Bali remains Hindu while Java converts to Islam"
      ],
      color: "#b89a5a"
    },
    {
      era: "1800 CE – Present",
      name: "Revival & Legacy",
      form: "Modern Sanskrit",
      regions: [
        {
          name: "India (educational revival)",
          modernCountries: ["India", "Nepal"],
          speakerCount: "~24,000 native; millions learn it",
          dominance: "scholarly",
          coordinates: [77, 20],
          radius: 8
        },
        {
          name: "Global (yoga, academia)",
          modernCountries: ["USA", "UK", "Germany", "Japan"],
          speakerCount: "Academic study, yoga practice",
          dominance: "scholarly",
          coordinates: [-74, 40],
          radius: 4
        }
      ],
      context: "British scholars 'rediscover' Sanskrit and recognize its relationship to Greek and Latin—founding comparative linguistics. Post-independence India promotes Sanskrit education; it becomes one of India's 22 scheduled languages. Today, Sanskrit lives in temple rituals, yoga classes, Ayurvedic medicine, and academic study. Its daughter languages—Hindi, Bengali, Marathi, Gujarati, and more—carry its DNA to over a billion speakers.",
      keyEvents: [
        "William Jones discovers IE family (1786)",
        "Sanskrit studies flourish in Europe",
        "Indian independence (1947)",
        "Sanskrit as scheduled language",
        "Global spread through yoga movement"
      ],
      color: "#c9a86c"
    }
  ],

  relatedWords: [
    "karma",
    "yoga",
    "nirvana",
    "avatar",
    "guru",
    "mantra",
    "jungle",
    "pundit",
    "thug",
    "loot",
    "shampoo",
    "candy",
    "orange",
    "sugar"
  ]
};
