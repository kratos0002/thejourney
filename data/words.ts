export type { JourneyStop, Sound, RelativeWord, Word } from "./word-types";
import type { Word } from "./word-types";
import { newWords } from "./words-new";
import { newWordsBatch2 } from "./words-batch2";
import { newWordsBatch3 } from "./words-batch3";
import { newWordsBatch5 } from "./words-batch5";
import { newWordsBatch6 } from "./words-batch6";
import { newWordsBatch7 } from "./words-batch7";
import { newWordsBatch8 } from "./words-batch8";
import { newWordsBatch9 } from "./words-batch9";
import { newWordsBatch10 } from "./words-batch10";
import { newWordsBatch11 } from "./words-batch11";
import { newWordsBatch12 } from "./words-batch12";
import { newWordsBatch13 } from "./words-batch13";
import { newWordsBatch14 } from "./words-batch14";
import { batch15 } from "./words-batch15";
import { batch16 } from "./words-batch16";
import { batch17 } from "./words-batch17";
import { batch18 } from "./words-batch18";
import { batch19 } from "./words-batch19";
import { batch20 } from "./words-batch20";
import { batch21 } from "./words-batch21";
import { batch22 } from "./words-batch22";
import { batch23 } from "./words-batch23";
import { batch24 } from "./words-batch24";
import { batch25 } from "./words-batch25";

export const words: Word[] = [
  {
    slug: "qahwa",
    word: "\u0642\u0647\u0648\u0629",
    romanization: "qahwa",
    language: "Arabic",
    hook: "A word that kept Sufi monks awake for midnight prayers.",
    story: [
      "In the highlands of Ethiopia, where coffee plants grew wild among the forest undergrowth, the stimulating properties of the red berries were known for centuries before anyone thought to brew them.",
      "The beans crossed the Red Sea to Yemen, where Sufi monks discovered something miraculous: chewing these beans kept them alert through long nights of prayer and meditation. They called the drink qahwa\u2014a word that originally meant \"wine,\" repurposed for this new intoxicant that sharpened rather than dulled the mind.",
      "From the monasteries, qahwa spilled into the coffeehouses of Mocha, then Constantinople, where it became kahve and the coffeehouse became a center of political discourse so vital that sultans tried to ban it.",
      "Venetian traders carried caff\u00e8 back to Europe. Within a century, the word had traveled from a Yemeni monastery to every language in the Western world, the sound shifting at each border: Kaffee, caf\u00e9, coffee."
    ],
    journey: [
      { location: "Ethiopia", period: "~1400", form: "origin plant", context: "Wild coffee plants chewed for stimulation", color: "#8b5a2b", coordinates: [38, 9] },
      { location: "Yemen", period: "1450s", form: "qahwa", script: "\u0642\u0647\u0648\u0629", context: "Sufi monasteries first brewed drink", color: "#4a3b6b", coordinates: [44, 15] },
      { location: "Constantinople", period: "1550s", form: "kahve", script: "\u0642\u0647\u0648\u0647", context: "Ottoman coffeehouses political gathering", color: "#6b2d3d", coordinates: [29, 41] },
      { location: "Venice", period: "1570s", form: "caff\u00e8", script: "caff\u00e8", context: "European traders first Western imports", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Vienna", period: "1680s", form: "Kaffee", script: "Kaffee", context: "After Ottoman siege Viennese coffee culture", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "London", period: "1650s", form: "coffee", script: "coffee", context: "Lloyd's Coffee House birthplace of insurance", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "coffee", context: "$400+ billion industry", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Original Arabic", ipa: "/\u02C8qah.wa/", text: "\u0642\u0647\u0648\u0629", lang: "ar" },
      { label: "Ottoman Turkish", ipa: "/kah\u02C8ve/", text: "kahve", lang: "tr" },
      { label: "Modern English", ipa: "/\u02C8k\u0252f.i/", text: "coffee", lang: "en" }
    ],
    relatives: [
      { word: "caf\u00e9", language: "French", connection: "the drink and the place", available: false },
      { word: "caffeine", language: "English", connection: "the chemical named after the drink", available: false },
      { word: "\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A", language: "Arabic", connection: "another Arabic word that shaped the world", available: true, slug: "algorithm" },
      { word: "kahvi", language: "Finnish", connection: "borrowed from Swedish kaffe", available: false }
    ],
    meaningNow: "Coffee now names the drink, the bean, the color, the culture, and a $400 billion global industry. It's the second most traded commodity on Earth.\n\nBut inside the word, Sufi monks still pray through the night, and the original meaning\u2014that which keeps you awake for God\u2014echoes in every exhausted student, every late-night worker, every quiet morning ritual."
  },
  {
    slug: "saans",
    word: "\u0938\u093E\u0901\u0938",
    romanization: "saans",
    language: "Hindi",
    hook: "The breath and the soul were once the same word.",
    story: [
      "The Hindi word saans\u2014breath\u2014descends from the Sanskrit \u015Bv\u0101sa, which shares a root with an ancient Proto-Indo-European word for breath and spirit.",
      "This same root gave Greek its word psyche\u2014originally meaning breath, then soul, then mind. It gave Latin spiritus\u2014breath becoming spirit. It gave Sanskrit \u0101tman\u2014breath becoming the eternal self.",
      "Across thousands of miles and thousands of years, humans kept making the same poetic leap: what animates the body must be what makes us us. The breath that enters at birth and leaves at death must be the soul itself.",
      "When you say saans in Hindi, you're speaking a word that remembers when breathing and being were indistinguishable\u2014when to lose your breath was, literally, to lose yourself."
    ],
    journey: [
      { location: "PIE Homeland", period: "~4000 BCE", form: "*h\u2082enh\u2081-", context: "Root meaning to breathe", color: "#5c5a4a", coordinates: [45, 47] },
      { location: "India", period: "~1500 BCE", form: "\u015Bv\u0101sa / pr\u0101\u1E47a", script: "\u0936\u094D\u0935\u093E\u0938 / \u092A\u094D\u0930\u093E\u0923", context: "Breath as life-force in Vedic philosophy", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Greece", period: "~800 BCE", form: "psyche", script: "\u03C8\u03C5\u03C7\u03AE", context: "Breath \u2192 soul \u2192 mind", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~500 BCE", form: "spiritus", script: "spiritus", context: "Breath \u2192 spirit", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "India", period: "~1000 CE", form: "saans", script: "\u0938\u093E\u0901\u0938", context: "Everyday breath", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "Global", period: "present", form: "pr\u0101\u1E47\u0101y\u0101ma", context: "Yoga: breath control", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/\u02C8\u0255\u028B\u0251\u02D0.s\u0259/", text: "\u0936\u094D\u0935\u093E\u0938", lang: "hi" },
      { label: "Hindi", ipa: "/sa\u02D0n\u0327s/", text: "\u0938\u093E\u0901\u0938", lang: "hi" }
    ],
    relatives: [
      { word: "psyche", language: "Greek/English", connection: "mind soul from breath", available: false },
      { word: "spirit", language: "Latin/English", connection: "from spirare to breathe", available: false },
      { word: "\u0926\u093E\u0928", language: "Hindi", connection: "another Sanskrit word that traveled west", available: true, slug: "daan" },
      { word: "\u0101tman", language: "Sanskrit", connection: "self soul from breath", available: false },
      { word: "animal", language: "Latin", connection: "from anima breath/soul", available: false }
    ],
    meaningNow: "In yoga studios worldwide, people practice pr\u0101\u1E47\u0101y\u0101ma\u2014the control of pr\u0101\u1E47a, life-breath. The ancient insight persists: breath is more than respiration. It's the bridge between body and mind, between the physical and whatever lies beyond.\n\nEvery time you take a deep breath to calm yourself, you're acting on knowledge as old as language itself."
  },
  {
    slug: "tsunami",
    word: "\u6D25\u6CE2",
    romanization: "tsunami",
    language: "Japanese",
    hook: "The sound of a harbor being swallowed.",
    story: [
      "Japanese fishermen would sail out in the morning, fish all day in calm seas, and return to find their harbor destroyed\u2014homes gone, families drowned. They never saw the wave at sea. It was invisible in deep water, rising only when it reached the shore.",
      "So they named it for what they found, not what they saw: tsu (\u6D25)\u2014harbor\u2014plus nami (\u6CE2)\u2014wave. A harbor wave. A wave that exists only when it reaches you.",
      "The word entered English after the great wave of 1896 killed 22,000 people in Japan. Western scientists adopted tsunami because English had no precise word\u2014\"tidal wave\" was inaccurate.",
      "Now the word has traveled back across every language, because the phenomenon knows no borders. When the Boxing Day tsunami hit the Indian Ocean in 2004, the Japanese word was on every tongue."
    ],
    journey: [
      { location: "Japan", period: "ancient", form: "tsunami", script: "\u6D25\u6CE2", context: "Fishermen's term for harbor destruction", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Sanriku", period: "1896", form: "tsunami", script: "\u6D25\u6CE2", context: "Meiji Sanriku tsunami 22000 dead", color: "#2d4a3b", coordinates: [141.9, 39.3] },
      { location: "Europe/US", period: "1896+", form: "tsunami", script: "tsunami", context: "Adopted by geologists replaces tidal wave", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Indian Ocean", period: "2004", form: "tsunami", context: "Boxing Day tsunami word becomes universal", coordinates: [96, 3] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/t\u0361s\u026F.na.mi/", text: "\u6D25\u6CE2", lang: "ja" },
      { label: "English", ipa: "/su\u02D0\u02C8n\u0251\u02D0mi/", text: "tsunami", lang: "en" }
    ],
    relatives: [
      { word: "\u6D25 tsu", language: "Japanese", connection: "harbor port", available: false },
      { word: "\u6CE2 nami", language: "Japanese", connection: "wave", available: false },
      { word: "typhoon", language: "English", connection: "another word for nature's fury from Asian seas", available: true, slug: "typhoon" },
      { word: "\u5730\u9707 jishin", language: "Japanese", connection: "earthquake often the tsunami's cause", available: false }
    ],
    meaningNow: "Tsunami is now used metaphorically in every language\u2014a tsunami of information, a tsunami of refugees. The word has become shorthand for any overwhelming, unstoppable force.\n\nBut the original meaning persists: a wave you cannot see coming until it's too late. The fishermen's tragedy, named."
  },
  {
    slug: "saudade",
    word: "saudade",
    romanization: "saudade",
    language: "Portuguese",
    hook: "A word that defines a nation's soul\u2014and has no translation.",
    story: [
      "The Portuguese have a word that other languages keep trying, and failing, to borrow: saudade.",
      "It means longing, but not any longing. It's the longing for something or someone you loved and lost, or perhaps never had. It's the presence of absence. It's nostalgia, but with the knife edge of knowing you can't go back.",
      "Some trace it to the Latin solitatem (solitude). Others to the Arabic sawd\u0101 (a black melancholy). But the word became uniquely Portuguese during the Age of Discovery, when sailors left for years\u2014sometimes forever\u2014and those who waited at home had to name what they felt.",
      "Fado music is built on saudade. The Brazilian bossa nova too. No translation captures it because no other culture fermented this particular ache into a single word."
    ],
    journey: [
      { location: "Rome", period: "~200 BCE", form: "solitatem", script: "solitatem", context: "Solitude loneliness", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Galicia", period: "~1200 CE", form: "soidade", script: "soidade", context: "Medieval poetry longing for absent lovers", color: "#5c5a4a", coordinates: [-8.6, 42.9] },
      { location: "Lisbon", period: "1400s-1500s", form: "saudade", script: "saudade", context: "Age of Discovery sailors and those left behind", color: "#5c5a4a", coordinates: [-9.1, 38.7] },
      { location: "Brazil", period: "1500s+", form: "saudade", script: "saudade", context: "Carried across Atlantic into Brazilian culture", color: "#8b5a2b", coordinates: [-43.2, -22.9] },
      { location: "Global", period: "present", form: "saudade", script: "saudade", context: "Untranslatable borrowed whole", coordinates: [2.3, 48.9] }
    ],
    sounds: [
      { label: "Portuguese (Portugal)", ipa: "/saw.\u02C8da.d\u0268/", text: "saudade", lang: "pt-PT" },
      { label: "Portuguese (Brazil)", ipa: "/saw.\u02C8da.d\u0292i/", text: "saudade", lang: "pt-BR" }
    ],
    relatives: [
      { word: "solitude", language: "English", connection: "from same Latin root but meaning diverged", available: false },
      { word: "Wanderlust", language: "German", connection: "longing that pulls you forward not back", available: true, slug: "wanderlust" },
      { word: "Sehnsucht", language: "German", connection: "longing but more forward-looking", available: false },
      { word: "hiraeth", language: "Welsh", connection: "longing for home but more specific", available: false }
    ],
    meaningNow: "Saudade has become Portugal's national word\u2014appearing on tourism campaigns, in fado lyrics, in the national conversation about what it means to be Portuguese.\n\nIn an age of instant communication, the word reminds us that some absences cannot be filled, some distances cannot be crossed with technology. Some things, once gone, leave only their shape behind."
  },
  {
    slug: "wanderlust",
    word: "Wanderlust",
    romanization: "Wanderlust",
    language: "German",
    hook: "A word English borrowed whole because it had no equivalent.",
    story: [
      "The German language builds words like Lego: Wandern (to wander, to hike) + Lust (desire, pleasure) = Wanderlust. The pleasure of wandering. The desire to roam.",
      "English has always borrowed freely from other languages, usually reshaping words to fit. But Wanderlust arrived untouched in the 1900s because English simply had no single word for this feeling\u2014the restless urge to travel, to move, to see what's beyond the horizon.",
      "\"Travel bug\" is too casual. \"Restlessness\" is too negative. Wanderlust captures something specific: a joyful ache, a productive restlessness, a compulsion that enriches rather than damages.",
      "The word's arrival in English coincided with the rise of romantic travel\u2014not travel for trade or conquest, but travel for transformation."
    ],
    journey: [
      { location: "Germany", period: "~1800s", form: "Wanderlust", script: "Wanderlust", context: "Romantic era Wandervogel youth movement", color: "#4a5568", coordinates: [13.4, 52.5] },
      { location: "England", period: "early 1900s", form: "wanderlust", script: "wanderlust", context: "Borrowed whole lowercase in English", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "wanderlust", context: "Instagram hashtag 150+ million posts", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "German", ipa: "/\u02C8vand\u0250\u02CCl\u028Ast/", text: "Wanderlust", lang: "de" },
      { label: "English", ipa: "/\u02C8w\u0252nd\u0259l\u028Cst/", text: "wanderlust", lang: "en" }
    ],
    relatives: [
      { word: "Fernweh", language: "German", connection: "far-sickness longing for distant places", available: false },
      { word: "Heimweh", language: "German", connection: "homesickness the opposite ache", available: false },
      { word: "Sehnsucht", language: "German", connection: "deep longing often for the ineffable", available: false },
      { word: "saudade", language: "Portuguese", connection: "similar untranslatable longing", available: true, slug: "saudade" }
    ],
    meaningNow: "Wanderlust has become the defining aspiration of a generation. It names something we're told we should feel\u2014and many genuinely do.\n\nBut the word also asks a question: Is this longing authentic, or manufactured? Is wanderlust a fundamental human drive, or a product of cheap flights and Instagram?\n\nThe word doesn't answer. It just names the ache."
  },
  {
    slug: "algorithm",
    word: "algorithm",
    romanization: "algorithm",
    language: "English from Arabic/Persian",
    hook: "A Persian mathematician's name became the invisible force shaping your life.",
    story: [
      "In 9th-century Baghdad, during the Islamic Golden Age, a Persian scholar named Mu\u1E25ammad ibn M\u016Bs\u0101 al-Khw\u0101rizm\u012B wrote a book on mathematics that would shape the world.",
      "Al-Khw\u0101rizm\u012B\u2014\"the one from Khwarezm,\" a region in modern Uzbekistan\u2014introduced Hindu-Arabic numerals and algebra to the Islamic world and, eventually, to Europe. His name was Latinized as Algoritmi.",
      "When medieval European scholars translated his works, they used algorismus to describe his methods of calculation. The word evolved: algorism \u2192 algorithm\u2014a step-by-step procedure for solving a problem.",
      "For centuries, algorithm was a technical term known only to mathematicians. Then came computers. Then came the internet. Now algorithms decide what you see, what you buy, who you date, whether you get a loan."
    ],
    journey: [
      { location: "Khwarezm", period: "780 CE", form: "al-Khw\u0101rizm\u012B", script: "\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A", context: "Birth name from Khwarezm", color: "#4a3b6b", coordinates: [60.6, 41.5] },
      { location: "Baghdad", period: "~820 CE", form: "\u2014", context: "Writes foundational math texts", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Paris", period: "1100s", form: "Algoritmi", script: "Algoritmi", context: "Latin translation of his name", color: "#5c5a4a", coordinates: [2.3, 48.9] },
      { location: "London", period: "1600s", form: "algorithm", script: "algorithm", context: "Mathematical procedure", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Silicon Valley", period: "1950s+", form: "algorithm", script: "algorithm", context: "Programming automation", color: "#4a5568", coordinates: [-122, 37.4] },
      { location: "Global", period: "now", form: "algorithm", context: "Shapes attention commerce society", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/al\u02C8xwa\u02D0rizmi\u02D0/", text: "\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A", lang: "ar" },
      { label: "English", ipa: "/\u02C8\u00E6l\u0261\u0259\u02CCr\u026A\u00F0\u0259m/", text: "algorithm", lang: "en" }
    ],
    relatives: [
      { word: "algebra", language: "English", connection: "from his book title", available: false },
      { word: "\u0642\u0647\u0648\u0629", language: "Arabic", connection: "another Arabic gift to every language", available: true, slug: "qahwa" },
      { word: "arithmetic", language: "English", connection: "from Greek predates algorithm", available: false }
    ],
    meaningNow: "Al-Khw\u0101rizm\u012B couldn't have imagined that his name would become a word muttered with suspicion by billions\u2014\"the algorithm is hiding this,\" \"the algorithm is pushing that.\"\n\nHis legacy is strange: a name that became a neutral tool that became an opaque power. When we talk about algorithms, we're talking about the man from Khwarezm, whether we know it or not."
  },
  {
    slug: "daan",
    word: "\u0926\u093E\u0928",
    romanization: "daan",
    language: "Hindi/Sanskrit",
    hook: "The same root split across centuries and continents\u2014and became two different virtues.",
    story: [
      "In Sanskrit, d\u0101na meant \"the act of giving\"\u2014a central concept in Hindu, Buddhist, and Jain ethics. To give without expecting return. To give as a practice, not a transaction.",
      "This root traveled west through Persian and Greek, eventually becoming donum in Latin\u2014\"gift\"\u2014which gave English \"donate,\" \"donation,\" \"donor.\"",
      "But the two branches of the word evolved different meanings. In the West, donation became transactional, institutional, tax-deductible\u2014you donate to a charity, you get a receipt.",
      "In South Asia, daan remained a spiritual practice. You give daan to priests, to beggars, to temples\u2014not for their benefit alone, but for your own spiritual purification. The giver receives more than the receiver."
    ],
    journey: [
      { location: "Central Asia", period: "~4000 BCE", form: "*deh\u2083-", context: "Root to give", color: "#5c5a4a", coordinates: [45, 47] },
      { location: "India", period: "~1500 BCE", form: "d\u0101na", script: "\u0926\u093E\u0928", context: "Spiritual giving dharmic duty", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Rome", period: "~500 BCE", form: "donum", script: "donum", context: "Gift present", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Delhi", period: "~1000 CE", form: "daan", script: "\u0926\u093E\u0928", context: "Continuation of Sanskrit practice", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "London", period: "1400s", form: "donate", script: "donate", context: "From Latin institutional giving", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/da\u02D0n\u0259/", text: "\u0926\u093E\u0928\u092E\u094D", lang: "hi" },
      { label: "Hindi", ipa: "/d\u032Aa\u02D0n/", text: "\u0926\u093E\u0928", lang: "hi" },
      { label: "English \"donate\"", ipa: "/do\u028A\u02C8ne\u026At/", text: "donate", lang: "en" }
    ],
    relatives: [
      { word: "donate", language: "English", connection: "same root Western branch", available: false },
      { word: "\u0938\u093E\u0901\u0938", language: "Hindi", connection: "another word from the Sanskrit family", available: true, slug: "saans" },
      { word: "Anna-daan", language: "Hindi", connection: "gift of food highest form", available: false }
    ],
    meaningNow: "In Indian languages, daan remains sacred\u2014part of daily practice, wedding rituals, religious observance. To give daan is to participate in the cosmic order.\n\nWhen English speakers \"donate,\" they're using the same ancient root but speaking a different language of generosity\u2014one where giving has been separated from spiritual practice.\n\nThe word remembers when these two things were one."
  },
  {
    slug: "assassin",
    word: "assassin",
    romanization: "assassin",
    language: "English from Arabic",
    hook: "A medieval sect's name became the word for political murder.",
    story: [
      "In the mountains of 11th-century Persia and Syria, a Shia Ismaili sect called the Nizari made a reputation through targeted killings of political enemies. Crusaders and other outsiders called them hash\u012Bsh\u012Bn\u2014\"hashish users\"\u2014possibly as slander.",
      "Marco Polo's accounts spread wild stories of drug-fueled assassins sent by the \"Old Man of the Mountain.\" The tales were mostly legend, but the word stuck.",
      "Hash\u012Bsh\u012Bn became assassini in Italian, then assassin in French and English. By the 1500s, it meant any murderer of important people\u2014the sect forgotten, the slur transformed into a common noun.",
      "The Nizari Ismailis still exist today, led by the Aga Khan. The word that was once a slur against their ancestors is now just... a word. Emptied of its origin, filled with new meaning."
    ],
    journey: [
      { location: "Persia", period: "1090s", form: "hash\u012Bsh\u012Bn", script: "\u062D\u0634\u0651\u0627\u0634\u064A\u0646", context: "Nizari Ismailis possibly a slur", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Holy Land", period: "1100s", form: "Assassini", context: "Legends spread by Marco Polo", color: "#5c5a4a", coordinates: [35.2, 31.8] },
      { location: "Italy", period: "1200s", form: "assassino", script: "assassino", context: "Enters European languages", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "France", period: "1300s", form: "assassin", script: "assassin", context: "Political murder", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1530s", form: "assassin", script: "assassin", context: "Shakespeare uses it", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/\u0127a\u0283\u02D0a\u02D0\u0283i\u02D0n/", text: "\u062D\u0634\u0627\u0634\u064A\u0646", lang: "ar" },
      { label: "English", ipa: "/\u0259\u02C8s\u00E6s\u026An/", text: "assassin", lang: "en" }
    ],
    relatives: [
      { word: "hashish", language: "English", connection: "same Arabic root dried herb", available: false },
      { word: "sicario", language: "Spanish", connection: "from Latin sicarius dagger-man", available: false },
      { word: "hitman", language: "English", connection: "modern equivalent", available: false }
    ],
    meaningNow: "The word now lives in headlines, history books, and video games. Most people who use it have no idea they're repeating a medieval slur.\n\nThe Nizari themselves have reclaimed some of the narrative. But the word remains: a reminder that language often preserves our worst stories about others."
  },
  {
    slug: "typhoon",
    word: "typhoon",
    romanization: "typhoon",
    language: "English from multiple origins",
    hook: "Three ancient words from three continents\u2014Greek, Arabic, Chinese\u2014collided in the same storm.",
    story: [
      "Typhoon has the most disputed etymology of almost any English word because the storm itself was named by sailors from everywhere.",
      "Greek had typh\u014Dn (\u03A4\u03C5\u03C6\u1FF6\u03BD)\u2014a monstrous serpent, father of destructive winds. Arabic had \u1E6D\u016Bf\u0101n (\u0637\u0648\u0641\u0627\u0646)\u2014deluge, great flood. Chinese had t\u00E1if\u0113ng (\u5927\u98A8)\u2014\"great wind.\"",
      "Portuguese and Spanish sailors in the Pacific heard all three and blended them. Or each invented it independently. The etymologists still argue.",
      "What's certain: when Europeans encountered the massive rotating storms of the Pacific, they reached into every linguistic pocket and pulled out whatever fit. The word typhoon is itself a meeting of civilizations\u2014Greek myth, Arabic scripture, and Chinese geography, all spinning together."
    ],
    journey: [
      { location: "Greece", period: "~700 BCE", form: "Typh\u014Dn", script: "\u03A4\u03C5\u03C6\u1FF6\u03BD", context: "Monster father of winds", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Arabia", period: "~600 CE", form: "\u1E6D\u016Bf\u0101n", script: "\u0637\u0648\u0641\u0627\u0646", context: "Deluge cataclysmic flood", color: "#4a3b6b", coordinates: [44, 33] },
      { location: "China", period: "ancient", form: "t\u00E1if\u0113ng", script: "\u5927\u98A8/\u98B1\u98A8", context: "Great wind Taiwan wind", color: "#2d4a3b", coordinates: [116, 40] },
      { location: "Lisbon", period: "1500s", form: "tuf\u00E3o/tif\u00F3n", context: "Sailors blend all three", color: "#5c5a4a", coordinates: [-9.1, 38.7] },
      { location: "England", period: "1588", form: "typhoon", script: "typhoon", context: "First recorded use", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Greek", ipa: "/typ\u02B0\u0254\u0302\u02D0n/", text: "\u03C4\u03C5\u03C6\u03CE\u03BD", lang: "el" },
      { label: "Arabic", ipa: "/t\u02E4u\u02D0\u02C8fa\u02D0n/", text: "\u0637\u0648\u0641\u0627\u0646", lang: "ar" },
      { label: "Mandarin", ipa: "/t\u02B0ai\u02E7\u02E5.f\u0264\u014B\u02E5/", text: "\u53F0\u98CE", lang: "zh" },
      { label: "English", ipa: "/ta\u026A\u02C8fu\u02D0n/", text: "typhoon", lang: "en" }
    ],
    relatives: [
      { word: "hurricane", language: "English", connection: "from Taino hurak\u00E1n Caribbean storms", available: false },
      { word: "\u6D25\u6CE2", language: "Japanese", connection: "another Asian word for nature's devastating power", available: true, slug: "tsunami" },
      { word: "monsoon", language: "English", connection: "from Arabic mawsim season", available: false }
    ],
    meaningNow: "We now have precise meteorological definitions: typhoons are in the Northwest Pacific, hurricanes in the Atlantic, cyclones in the Indian Ocean. Same storm, different names\u2014the legacy of which sailors named which seas.\n\nBut typhoon remains the only one of these words with three possible parents. It carries the whole history of global trade in its syllables."
  },
  {
    slug: "ubuntu",
    word: "ubuntu",
    romanization: "ubuntu",
    language: "Zulu",
    hook: "I am because we are.",
    story: [
      "Ubuntu comes from the Nguni Bantu languages of Southern Africa\u2014Zulu, Xhosa, Ndebele. It's often translated as \"humanity\" or \"humaneness,\" but that misses the philosophy.",
      "The full proverb is: Umuntu ngumuntu ngabantu\u2014\"A person is a person through other persons.\" You become human through your relationships, your community, your recognition of others' humanity.",
      "Archbishop Desmond Tutu used ubuntu to describe the philosophy behind South Africa's Truth and Reconciliation Commission: restoration over punishment, community over isolation.",
      "The word gained global attention and was borrowed\u2014somewhat controversially\u2014as the name of a Linux operating system, chosen for its meaning of sharing and community."
    ],
    journey: [
      { location: "Central Africa", period: "ancient", form: "*-ntu", context: "Proto-Bantu root for person", color: "#8b5a2b", coordinates: [25, -3] },
      { location: "Southern Africa", period: "\u2014", form: "ubuntu", script: "ubuntu", context: "Philosophical concept social ethic", color: "#8b5a2b", coordinates: [29, -29] },
      { location: "South Africa", period: "1990s", form: "ubuntu", script: "ubuntu", context: "Tutu post-apartheid reconciliation", color: "#8b5a2b", coordinates: [28.2, -26.2] },
      { location: "Global", period: "2000s", form: "ubuntu", script: "ubuntu", context: "Linux OS TED talks management books", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "Zulu/Xhosa", ipa: "/\u00F9\u0253\u00FAnt\u02BC\u00F9/", text: "ubuntu", lang: "zu" },
      { label: "English approximation", ipa: "/\u028A\u02C8b\u028Antu\u02D0/", text: "ubuntu", lang: "en" }
    ],
    relatives: [
      { word: "umuntu", language: "Zulu", connection: "a person singular", available: false },
      { word: "abantu", language: "Zulu", connection: "people plural", available: false },
      { word: "Bantu", language: "linguistic", connection: "the language family named from this root", available: false }
    ],
    meaningNow: "Ubuntu has become a global buzzword\u2014sometimes genuinely understood, sometimes flattened into corporate feel-good.\n\nBut the philosophy remains radical: that selfhood is relational, that isolation is a kind of death, that my freedom is incomplete without yours.\n\nThe word asks a question Western philosophy has struggled with for centuries: Where do I end and you begin?\n\nUbuntu answers: You don't."
  }
];

// Combine all word entries and deduplicate by slug (first occurrence wins)
const allWordsRaw: Word[] = [...words, ...newWords, ...newWordsBatch2, ...newWordsBatch3, ...newWordsBatch5, ...newWordsBatch6, ...newWordsBatch7, ...newWordsBatch8, ...newWordsBatch9, ...newWordsBatch10, ...newWordsBatch11, ...newWordsBatch12, ...newWordsBatch13, ...newWordsBatch14, ...batch15, ...batch16, ...batch17, ...batch18, ...batch19, ...batch20, ...batch21, ...batch22, ...batch23, ...batch24, ...batch25];

export const allWords: Word[] = allWordsRaw.filter((word, index, self) =>
  index === self.findIndex((w) => w.slug === word.slug)
);

export function getWordBySlug(slug: string): Word | undefined {
  return allWords.find((word) => word.slug === slug);
}
