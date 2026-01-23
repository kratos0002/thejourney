import { Word } from "./word-types";

export const newWordsBatch2: Word[] = [
  {
    slug: "origami",
    word: "\u6298\u308A\u7D19",
    romanization: "origami",
    language: "Japanese",
    hook: "Paper folding became a word for turning flat things into living forms.",
    story: [
      "Origami combines ori (\u6298\u308A, folding) and kami (\u7D19, paper)\u2014but kami also means \"god\" in Japanese. The art of paper folding carries a whisper of the divine: creating form from nothing.",
      "Paper arrived in Japan from China around 600 CE. Japanese artisans developed it into washi\u2014stronger, more flexible than Chinese paper. By the Heian period (794-1185), folded paper was used in ceremonies, gifts, and religious offerings.",
      "For centuries, origami patterns were passed down orally, mother to child. The first known written instructions appeared in 1797 in Senbazuru Orikata (\"How to Fold a Thousand Cranes\").",
      "The word \"origami\" itself wasn't standardized until 1880. Before that, the art was called orisue or orimono. When it entered English in the 1950s, it brought with it a philosophy: that constraints (no cuts, no glue) generate creativity."
    ],
    journey: [
      { location: "China", period: "~105 CE", form: "zh\u01D0", script: "\u7D19", context: "Paper invented", color: "#2d4a3b", coordinates: [116, 34] },
      { location: "Japan", period: "~600 CE", form: "kami", script: "\u7D19", context: "Paper arrives develops into washi", color: "#2d4a3b", coordinates: [135.8, 35] },
      { location: "Japan", period: "1880", form: "origami", script: "\u6298\u308A\u7D19", context: "Word standardized for the art", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Global", period: "1950s+", form: "origami", context: "Enters English art and mathematics", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/o.\u027Ei.\u0261a.mi/", text: "\u6298\u308A\u7D19", lang: "ja" },
      { label: "English", ipa: "/\u02CC\u0252\u0279.\u026A\u02C8\u0261\u0251\u02D0.mi/", text: "origami", lang: "en" }
    ],
    relatives: [
      { word: "\u7A7A\u624B", language: "Japanese", connection: "another Japanese art word gone global", available: true, slug: "karate" },
      { word: "kirigami", language: "Japanese", connection: "cut paper the sibling art", available: false },
      { word: "washi", language: "Japanese", connection: "Japanese paper the medium", available: false }
    ],
    meaningNow: "Origami has transcended craft to become a branch of mathematics and engineering. Satellite solar panels, medical stents, and airbags all use origami folding principles.\n\nThe word carries a philosophy of creative constraint: with only folds\u2014no cuts, no glue\u2014infinite forms are possible. Limitation as liberation.\n\nA thousand paper cranes still mean a wish granted. The word holds both the math and the magic."
  },
  {
    slug: "serendipity",
    word: "serendipity",
    romanization: "serendipity",
    language: "English (coined)",
    hook: "A word invented by one man in one letter\u2014inspired by a Persian fairy tale.",
    story: [
      "On January 28, 1754, Horace Walpole\u2014English aristocrat and novelist\u2014wrote a letter to his friend Horace Mann. In it, he coined a new word: serendipity.",
      "He based it on a Persian fairy tale, \"The Three Princes of Serendip\" (Serendip being an old name for Sri Lanka). The princes \"were always making discoveries, by accidents and sagacity, of things they were not in quest of.\"",
      "The word lay dormant for over a century. It appeared occasionally in letters and essays, but didn't enter common usage until the 1950s, when scientists began using it to describe accidental discoveries\u2014penicillin, X-rays, Teflon.",
      "Now it's been voted the hardest English word to translate. Every language can describe lucky accidents, but none have a single word for the talent of recognizing significance in chance encounters."
    ],
    journey: [
      { location: "Sri Lanka", period: "ancient", form: "Serendip", context: "Old Arabic/Persian name for Ceylon", color: "#9b4a2c", coordinates: [80.8, 7.9] },
      { location: "Persia/Italy", period: "1302/1557", form: "Serendippo", context: "Three Princes fairy tale published", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "London", period: "1754", form: "serendipity", script: "serendipity", context: "Walpole coins the word in a letter", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1950s+", form: "serendipity", context: "Scientific discovery pop culture", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "English", ipa: "/\u02CCs\u025B\u0279.\u0259n\u02C8d\u026Ap.\u026A.ti/", text: "serendipity", lang: "en" }
    ],
    relatives: [
      { word: "eureka", language: "Greek", connection: "another word for discovery", available: true, slug: "eureka" },
      { word: "kismet", language: "Turkish/Arabic", connection: "fate but predetermined not accidental", available: false },
      { word: "synchronicity", language: "English/Greek", connection: "meaningful coincidence Jung's term", available: false }
    ],
    meaningNow: "Serendipity has become a cultural value\u2014something we design for. Coffee shops, coworking spaces, and social media algorithms all claim to engineer serendipitous encounters.\n\nBut the word's precision is important: serendipity isn't just luck. It's luck plus the wisdom to recognize what you've found. Walpole stressed \"sagacity\"\u2014the art of noticing.\n\nIn an age of algorithm-curated experience, genuine serendipity may be the rarest thing left."
  },
  {
    slug: "eureka",
    word: "\u03B5\u1F55\u03C1\u03B7\u03BA\u03B1",
    romanization: "eureka",
    language: "Greek",
    hook: "A naked mathematician ran through the streets shouting a word we still shout today.",
    story: [
      "The story goes: Archimedes of Syracuse stepped into his bath and noticed the water level rise. In that instant, he understood how to measure the volume of irregular objects. He leaped up and ran naked through the streets shouting \"He\u016Br\u0113ka!\"\u2014\"I have found it!\"",
      "The word is the first person singular perfect indicative of heurisk\u014D (\u03B5\u1F51\u03C1\u03AF\u03C3\u03BA\u03C9)\u2014\"I find.\" The perfect tense is crucial: not \"I am finding\" but \"I have found\"\u2014the discovery is complete, irreversible.",
      "Whether Archimedes actually ran naked is debatable. But the word stuck\u2014first in Greek, then in Latin scientific tradition, then in every language. It became the universal sound of discovery.",
      "California put it on its state motto in 1849, referencing the Gold Rush: \"Eureka!\"\u2014we have found it (gold, opportunity, a new life). The ancient Greek shout became an American promise."
    ],
    journey: [
      { location: "Syracuse", period: "~250 BCE", form: "he\u016Br\u0113ka", script: "\u03B5\u1F55\u03C1\u03B7\u03BA\u03B1", context: "Archimedes discovers displacement", color: "#5c5a4a", coordinates: [15.3, 37.1] },
      { location: "Rome", period: "~100 BCE", form: "eureka", context: "Latin texts preserve the story", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Europe", period: "Renaissance", form: "eureka", context: "Scientific tradition revives the word", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "California", period: "1849", form: "Eureka", script: "EUREKA", context: "State motto Gold Rush", color: "#4a5568", coordinates: [-124.2, 40.8] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/he\u02D0u\u02C8r\u025B\u02D0.ka/", text: "\u03B5\u03C5\u03C1\u03B7\u03BA\u03B1", lang: "el" },
      { label: "English", ipa: "/j\u028A\u02C8\u0279i\u02D0.k\u0259/", text: "eureka", lang: "en" }
    ],
    relatives: [
      { word: "heuristic", language: "English/Greek", connection: "same root finding by trial", available: false },
      { word: "serendipity", language: "English", connection: "accidental discovery similar joy", available: true, slug: "serendipity" },
      { word: "algorithm", language: "English/Arabic", connection: "systematic finding vs flash of insight", available: true, slug: "algorithm" }
    ],
    meaningNow: "Eureka remains the word for breakthrough\u2014the moment when confusion crystallizes into understanding. Scientists, inventors, and crossword solvers all reach for it.\n\nBut the word also carries a warning Archimedes didn't intend: the eureka moment is seductive. We love the flash of insight, the naked run through streets. We're less fond of the years of work that precede it.\n\nEvery eureka is the visible tip of an invisible mountain of effort."
  },
  {
    slug: "zero",
    word: "\u0635\u0641\u0631",
    romanization: "sifr",
    language: "Arabic from Sanskrit",
    hook: "Nothing needed a name. The name changed everything.",
    story: [
      "Ancient civilizations could count, but they couldn't count nothing. The concept of zero\u2014as a number, not just an absence\u2014was revolutionary. Indian mathematicians developed it around the 5th century CE, calling it \u015b\u016bnya (\"empty\").",
      "Arab scholars translated \u015b\u016bnya as \u1e63ifr (\u0635\u0641\u0631)\u2014\"empty\" in Arabic. Al-Khw\u0101rizm\u012b (the algorithm/algebra man again) used it in his mathematical texts that introduced the Hindu-Arabic numeral system to the world.",
      "When Italian merchants encountered \u1e63ifr through Arabic trade, it became zefiro, then zero. Meanwhile, the same Arabic word also gave English \"cipher\"\u2014a code, a nothing, a person of no consequence.",
      "The word for nothing became the foundation of everything: binary code (0s and 1s), calculus (approaching zero), temperature (absolute zero). Nothing turned out to be the most important something."
    ],
    journey: [
      { location: "India", period: "~500 CE", form: "\u015b\u016bnya", script: "\u0936\u0942\u0928\u094D\u092F", context: "Indian mathematicians void emptiness", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Baghdad", period: "~820 CE", form: "\u1e63ifr", script: "\u0635\u0641\u0631", context: "Al-Khw\u0101rizm\u012b Arabic translation", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Italy", period: "1200s", form: "zefiro/zero", script: "zero", context: "Fibonacci brings to Europe", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Global", period: "1600s+", form: "zero", context: "Foundation of modern mathematics computing", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/\u02C8\u0255u\u02D0.nj\u0259/", text: "\u0936\u0942\u0928\u094D\u092F", lang: "hi" },
      { label: "Arabic", ipa: "/\u02C8s\u032Cifr/", text: "\u0635\u0641\u0631", lang: "ar" },
      { label: "English", ipa: "/\u02C8z\u026A\u0259.\u0279o\u028A/", text: "zero", lang: "en" }
    ],
    relatives: [
      { word: "cipher", language: "English", connection: "same Arabic root code nothing", available: false },
      { word: "algebra", language: "English/Arabic", connection: "same mathematical tradition", available: true, slug: "algebra" },
      { word: "\u0936\u0942\u0928\u094D\u092F", language: "Sanskrit", connection: "empty also Buddhist philosophical concept", available: false }
    ],
    meaningNow: "Zero is the most paradoxical number: it is nothing, yet without it, mathematics collapses. It is absence, yet it makes presence possible.\n\nThe word's journey from Sanskrit emptiness to Arabic cipher to Italian zero mirrors humanity's struggle to comprehend nothingness\u2014and our eventual triumph in making nothing useful.\n\nEvery computer, every phone, every digital device runs on zeros. The void became the foundation."
  },
  {
    slug: "pajamas",
    word: "\u067E\u0627\u06CC\u062C\u0627\u0645\u0647",
    romanization: "p\u0101y-j\u0101meh",
    language: "English from Persian/Hindi-Urdu",
    hook: "Leg-garments for emperors became sleepwear for the world.",
    story: [
      "Pajamas comes from the Persian p\u0101y (leg) + j\u0101meh (garment)\u2014literally \"leg clothing.\" In Mughal India, these were loose-fitting trousers worn during the day by both men and women, tied at the waist.",
      "British colonials in India adopted the comfortable garments for lounging\u2014especially in the heat. They were practical, cool, and far more comfortable than European clothing.",
      "When the British brought the word and the garment home, pajamas shifted context entirely: from daywear to nightwear, from public to private, from tropical necessity to bedroom luxury.",
      "The spelling split: Americans write \"pajamas,\" British write \"pyjamas.\" But both pronounce it the same way\u2014an echo of the Persian-Hindi original that neither spelling quite captures."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "p\u0101y-j\u0101meh", script: "\u067E\u0627\u06CC\u062C\u0627\u0645\u0647", context: "Leg garment everyday trousers", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Mughal India", period: "1500s", form: "p\u0101j\u0101m\u0101", script: "\u092A\u093E\u091C\u093E\u092E\u093E", context: "Loose trousers daywear all classes", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "British India", period: "1800s", form: "pyjamas", context: "British adopt for comfort loungewear", color: "#4a5568", coordinates: [88.4, 22.6] },
      { location: "England/US", period: "1870s+", form: "pajamas/pyjamas", context: "Becomes nightwear sleepwear", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Persian", ipa: "/p\u0251\u02D0j.d\u0292\u0251\u02D0.me/", text: "\u067E\u0627\u06CC\u062C\u0627\u0645\u0647", lang: "fa" },
      { label: "Hindi", ipa: "/p\u0251\u02D0.\u02C8d\u0292\u0251\u02D0.m\u0251\u02D0/", text: "\u092A\u093E\u091C\u093E\u092E\u093E", lang: "hi" },
      { label: "English", ipa: "/p\u0259\u02C8d\u0292\u0251\u02D0.m\u0259z/", text: "pajamas", lang: "en" }
    ],
    relatives: [
      { word: "shampoo", language: "English/Hindi", connection: "another Hindi word for daily life", available: true, slug: "shampoo" },
      { word: "jungle", language: "English/Hindi", connection: "another Hindi-origin English word", available: true, slug: "jungle" },
      { word: "kurta", language: "Hindi/Persian", connection: "tunic the upper-body equivalent", available: false }
    ],
    meaningNow: "Pajamas are now a $18 billion global industry\u2014and a cultural statement. \"Pajama day\" at work signals informality. Wearing pajamas in public signals either confidence or not caring.\n\nThe pandemic made pajamas professional attire (at least from the waist up). The garment that was once outdoor clothing in India, then indoor clothing in England, became all-day clothing for the world.\n\nThe Persian leg-garment has come full circle."
  },
  {
    slug: "jungle",
    word: "\u091C\u0902\u0917\u0932",
    romanization: "jangal",
    language: "Hindi/Sanskrit",
    hook: "In Hindi it meant dry wasteland. English made it mean the opposite.",
    story: [
      "In Sanskrit, ja\u1e45gala meant \"arid, sparsely vegetated ground\"\u2014rough wasteland, not lush forest. In Hindi, jangal kept this meaning: uncultivated land, scrubland, wilderness of any kind.",
      "British colonials in India heard jangal and assumed it meant the dense tropical forests they encountered. The meaning flipped: from dry wasteland to wet, impenetrable forest.",
      "Rudyard Kipling cemented the English meaning with The Jungle Book (1894)\u2014setting stories in the dense forests of India. His jungles were teeming with life, the opposite of the original Sanskrit wasteland.",
      "The word's meaning inversion is almost complete: in English, jungle now means maximum vegetation. In the original Hindi, it meant minimum. The same sounds carry opposite visions of nature."
    ],
    journey: [
      { location: "India", period: "ancient", form: "ja\u1e45gala", script: "\u091C\u0902\u0917\u0932", context: "Sanskrit arid wasteland rough ground", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Colonial India", period: "1700s", form: "jangal/jungle", context: "British misapply to dense forest", color: "#9b4a2c", coordinates: [77, 20] },
      { location: "England", period: "1776", form: "jungle", script: "jungle", context: "First English usage dense forest", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1894+", form: "jungle", context: "Kipling's Jungle Book cements meaning", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/\u02C8d\u0292\u0259\u014B.\u0261\u0259l/", text: "\u091C\u0902\u0917\u0932", lang: "hi" },
      { label: "English", ipa: "/\u02C8d\u0292\u028C\u014B.\u0261l\u0329/", text: "jungle", lang: "en" }
    ],
    relatives: [
      { word: "forest", language: "English/Latin", connection: "older English word for tree-covered land", available: false },
      { word: "pajamas", language: "English/Hindi", connection: "another Hindi word transformed in English", available: true, slug: "pajamas" },
      { word: "wilderness", language: "English", connection: "closest to original Sanskrit meaning", available: false }
    ],
    meaningNow: "Jungle has become one of English's most versatile metaphors: the urban jungle, the concrete jungle, the corporate jungle, jungle music.\n\nAll these usages emphasize danger, wildness, survival\u2014but the original word meant something more desolate than dangerous.\n\nIn Hindi, people still say jangal for any wild, uncultivated space. The English meaning has bled back into Hindi somewhat, but the original sense persists: jangal is where humans haven't imposed order."
  },
  {
    slug: "monsoon",
    word: "\u0645\u0648\u0633\u0645",
    romanization: "mawsim",
    language: "English from Arabic",
    hook: "Arab sailors named the seasons of wind. The word became a wall of rain.",
    story: [
      "In Arabic, mawsim (\u0645\u0648\u0633\u0645) means \"season\" or \"appropriate time\"\u2014from the root w-s-m, \"to mark.\" Arab traders used it for the seasonal winds that determined when ships could safely cross the Indian Ocean.",
      "Portuguese sailors learned the word as mon\u00e7\u00e3o in the 16th century. The Dutch made it moesson. English rendered it monsoon. Each European maritime power needed the word because they needed the winds.",
      "The original meaning was about timing and wind direction, not about rain. But when English speakers encountered the torrential rains that accompanied the summer monsoon in India, the word shifted to mean \"heavy seasonal rain.\"",
      "Now monsoon primarily means rain in English\u2014specifically the dramatic, life-giving, sometimes devastating rains of South and Southeast Asia. The Arab sailors' wind-season became a weather event."
    ],
    journey: [
      { location: "Arabia", period: "ancient", form: "mawsim", script: "\u0645\u0648\u0633\u0645", context: "Season sailing season wind timing", color: "#4a3b6b", coordinates: [44, 24] },
      { location: "Indian Ocean", period: "~1000 CE", form: "mawsim", context: "Arab traders name the seasonal winds", color: "#4a3b6b", coordinates: [65, 10] },
      { location: "Portugal", period: "1500s", form: "mon\u00e7\u00e3o", context: "Portuguese maritime vocabulary", color: "#5c5a4a", coordinates: [-9.1, 38.7] },
      { location: "England", period: "1584", form: "monsoon", script: "monsoon", context: "English usage seasonal wind then rain", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "monsoon", context: "Means heavy rain worldwide", coordinates: [78, 20] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/maw\u02C8sim/", text: "\u0645\u0648\u0633\u0645", lang: "ar" },
      { label: "English", ipa: "/m\u0252n\u02C8su\u02D0n/", text: "monsoon", lang: "en" }
    ],
    relatives: [
      { word: "typhoon", language: "English", connection: "another weather word from Arabic-influenced trade", available: true, slug: "typhoon" },
      { word: "tsunami", language: "Japanese", connection: "another Asian weather catastrophe word", available: true, slug: "tsunami" },
      { word: "season", language: "English/French", connection: "similar concept different origin", available: false }
    ],
    meaningNow: "For over a billion people in South Asia, the monsoon is not a weather event but a life event\u2014determining harvests, water supply, and survival. When the monsoon fails, famine follows.\n\nThe word carries the weight of that dependence. In English, we use it casually (\"it's monsoon season\"). In Hindi, the monsoon is awaited, prayed for, celebrated, and feared.\n\nThe Arab sailors' season-word became the name of a relationship between humans and sky."
  },
  {
    slug: "tycoon",
    word: "\u5927\u541B",
    romanization: "taikun",
    language: "English from Japanese/Chinese",
    hook: "The word for a Japanese warlord became Wall Street's favorite title.",
    story: [
      "Taikun (\u5927\u541B) means \"great lord\" or \"great prince\" in Japanese, composed of the Chinese characters tai (\u5927, great) + kun (\u541B, lord/prince). It was a title used for the sh\u014Dgun in diplomatic communications with foreigners.",
      "When Commodore Perry arrived in Japan in 1853, Americans needed to understand Japanese power structures. They learned that the Taikun (sh\u014Dgun) held real power, while the Emperor was a figurehead.",
      "Americans brought the word home. Within years, it was applied to the railroad barons and oil magnates of the Gilded Age: Vanderbilt, Carnegie, Rockefeller\u2014the tycoons of American industry.",
      "The Japanese military title became an American business title. The feudal warlord became a capitalist. The word traveled from samurai culture to Wall Street without changing its essential meaning: power, concentrated in one person."
    ],
    journey: [
      { location: "China", period: "ancient", form: "d\u00e0j\u016Bn", script: "\u5927\u541B", context: "Great lord Chinese characters", color: "#2d4a3b", coordinates: [116, 40] },
      { location: "Japan", period: "1600s", form: "taikun", script: "\u5927\u541B", context: "Title for sh\u014Dgun in foreign affairs", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "United States", period: "1857", form: "tycoon", script: "tycoon", context: "Perry expedition Americans adopt it", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "1880s+", form: "tycoon", context: "Business magnate captain of industry", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/tai.ku\u014B/", text: "\u5927\u541B", lang: "ja" },
      { label: "English", ipa: "/ta\u026A\u02C8ku\u02D0n/", text: "tycoon", lang: "en" }
    ],
    relatives: [
      { word: "\u7A7A\u624B", language: "Japanese", connection: "another Japanese word in English", available: true, slug: "karate" },
      { word: "magnate", language: "English/Latin", connection: "great man same concept Latin route", available: false },
      { word: "mogul", language: "English/Mongol", connection: "another Asian power word Mughal empire", available: false }
    ],
    meaningNow: "Tycoon now lives in business journalism, board games (Monopoly Tycoon), and apps (idle tycoon games). The word has been domesticated\u2014it sounds almost playful now.\n\nBut its origin reminds us that extreme wealth has always resembled feudal power. The tycoons of the Gilded Age were warlords of capital. The word knew this before we admitted it.\n\nFrom sh\u014Dgun to CEO: the costume changed, the power didn't."
  },
  {
    slug: "checkmate",
    word: "\u0634\u0627\u0647 \u0645\u0627\u062A",
    romanization: "sh\u0101h m\u0101t",
    language: "English from Persian/Arabic",
    hook: "\"The king is dead\"\u2014but which king, and whose language?",
    story: [
      "Chess originated in India as chatur\u0101\u1e45ga (\"four limbs\" of an army). When it reached Persia, the key piece\u2014the king\u2014became the sh\u0101h. Ending the game was sh\u0101h m\u0101t: \"the king is helpless\" (or \"the king is dead\").",
      "Arab players inherited the game and the phrase after conquering Persia. They carried chess across North Africa and into Spain. The phrase traveled with every chess set.",
      "In medieval French, sh\u0101h m\u0101t became \u00e9chec et mat. The first word also gave English \"check\" (a threat to the king) and \"chess\" itself (from \u00e9checs). One Persian word\u2014sh\u0101h\u2014generated three English words.",
      "The debate about m\u0101t continues: does it mean \"dead\" (from Arabic m\u0101ta, \"died\") or \"helpless\" (from Persian m\u0101t, \"left without resource\")? The king's fate depends on whose language you trust."
    ],
    journey: [
      { location: "India", period: "~600 CE", form: "chatur\u0101\u1e45ga", context: "Chess invented four-limbed army game", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Persia", period: "~650 CE", form: "sh\u0101h m\u0101t", script: "\u0634\u0627\u0647 \u0645\u0627\u062A", context: "The king is dead/helpless", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Arab world", period: "~700 CE", form: "sh\u0101h m\u0101t", context: "Chess spreads with Islamic expansion", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Spain", period: "1000s", form: "xaque mate", context: "Moors bring chess to Europe", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1300s", form: "checkmate", script: "checkmate", context: "English from French \u00e9chec et mat", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Persian", ipa: "/\u0283\u0251\u02D0h m\u0251\u02D0t/", text: "\u0634\u0627\u0647 \u0645\u0627\u062A", lang: "fa" },
      { label: "English", ipa: "/\u02C8t\u0283\u025Bk.me\u026At/", text: "checkmate", lang: "en" }
    ],
    relatives: [
      { word: "chess", language: "English", connection: "from same Persian sh\u0101h via French", available: false },
      { word: "check", language: "English", connection: "from same Persian sh\u0101h threat to king", available: false },
      { word: "bazaar", language: "Persian", connection: "another Persian word in English", available: true, slug: "bazaar" }
    ],
    meaningNow: "Checkmate has transcended chess to mean any decisive, inescapable defeat. Politicians, generals, and business strategists all use it.\n\nThe word is pure drama\u2014it announces not just victory but the death of a king. No other game-ending word carries such weight.\n\nAnd the etymology trail\u2014India to Persia to Arabia to Spain to England\u2014mirrors the game's own journey. Chess and its vocabulary are humanity's most traveled game."
  },
  {
    slug: "bazaar",
    word: "\u0628\u0627\u0632\u0627\u0631",
    romanization: "b\u0101z\u0101r",
    language: "Persian",
    hook: "The Persian word for market became the English word for organized chaos.",
    story: [
      "B\u0101z\u0101r comes from Middle Persian, possibly from an older Pahlavi word meaning \"a place of prices.\" In Persian culture, the bazaar was not just a market\u2014it was the heart of the city, a social institution, a political force.",
      "The great bazaars of Isfahan, Tabriz, and Istanbul were covered cities within cities: miles of vaulted corridors, organized by trade\u2014coppersmiths here, carpet sellers there, spice merchants beyond.",
      "European travelers brought the word home in the 1580s, using it for any Eastern market. By the 1800s, it had two English meanings: an exotic marketplace, or a charity sale (a church bazaar).",
      "The word's journey from Persian institution to English fundraiser is one of history's odder transformations. The grand bazaar of Isfahan\u2014a UNESCO World Heritage Site\u2014shares a name with a table of baked goods in a church hall."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "b\u0101z\u0101r", script: "\u0628\u0627\u0632\u0627\u0631", context: "Market place of prices", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Istanbul", period: "1461", form: "b\u0101z\u0101r", context: "Grand Bazaar built Ottoman empire", color: "#4a3b6b", coordinates: [29, 41.1] },
      { location: "Italy/England", period: "1580s", form: "bazaar", script: "bazaar", context: "European travelers bring word home", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1800s+", form: "bazaar", context: "Both exotic market and charity sale", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Persian", ipa: "/b\u0251\u02D0\u02C8z\u0251\u02D0r/", text: "\u0628\u0627\u0632\u0627\u0631", lang: "fa" },
      { label: "English", ipa: "/b\u0259\u02C8z\u0251\u02D0\u0279/", text: "bazaar", lang: "en" }
    ],
    relatives: [
      { word: "checkmate", language: "English/Persian", connection: "another Persian word in English", available: true, slug: "checkmate" },
      { word: "souk", language: "Arabic", connection: "Arab equivalent market", available: false },
      { word: "market", language: "English/Latin", connection: "Latin mercatus trade Western equivalent", available: false }
    ],
    meaningNow: "The word bazaar now evokes exoticism\u2014a deliberate contrast to the sterile Western \"mall\" or \"store.\" It implies sensory overload: colors, smells, haggling, humanity.\n\nBut in Persian and Turkish cities, the bazaar remains a living institution. Istanbul's Grand Bazaar draws 400,000 visitors daily. It's not exotic\u2014it's just where you shop.\n\nThe English word carries an outsider's wonder. The Persian word carries a local's familiarity. Same syllables, different worlds."
  },
  {
    slug: "admiral",
    word: "\u0623\u0645\u064A\u0631",
    romanization: "am\u012Br",
    language: "English from Arabic",
    hook: "An Arabic prince became the captain of English fleets\u2014and nobody noticed the hidden letter.",
    story: [
      "The Arabic am\u012Br (\u0623\u0645\u064A\u0631) means \"commander\" or \"prince\"\u2014from the root a-m-r (to command). Am\u012Br al-ba\u1e25r meant \"commander of the sea.\"",
      "When Norman French borrowed the term during the Crusades, something strange happened: the initial a- was interpreted as the article, and a 'd' crept in from Latin admirari (to admire). Am\u012Br became admiral.",
      "The word has no etymological connection to \"admire\"\u2014the 'd' is a medieval mistake, a false friend that was never corrected. The Arabic prince became an English officer through a spelling error.",
      "Now admiral is one of the highest naval ranks in virtually every Western navy. Millions of sailors have held the title. Not one in a thousand knows they're bearing an Arabic name."
    ],
    journey: [
      { location: "Arabia", period: "~700 CE", form: "am\u012Br al-ba\u1e25r", script: "\u0623\u0645\u064A\u0631 \u0627\u0644\u0628\u062D\u0631", context: "Commander of the sea", color: "#4a3b6b", coordinates: [44, 24] },
      { location: "Sicily", period: "1100s", form: "amiral/ammiratus", context: "Norman Sicilians borrow Arabic title", color: "#5c5a4a", coordinates: [14.3, 37.6] },
      { location: "France", period: "1200s", form: "admiral", script: "admiral", context: "Spurious d from Latin admirari", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1300s", form: "admiral", script: "admiral", context: "Becomes English naval rank", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/\u0294a\u02C8mi\u02D0r/", text: "\u0623\u0645\u064A\u0631", lang: "ar" },
      { label: "English", ipa: "/\u02C8\u00E6d.m\u0259.\u0279\u0259l/", text: "admiral", lang: "en" }
    ],
    relatives: [
      { word: "emir", language: "English/Arabic", connection: "same root direct borrowing undistorted", available: false },
      { word: "algorithm", language: "English/Arabic", connection: "another Arabic word hiding in English", available: true, slug: "algorithm" },
      { word: "assassin", language: "English/Arabic", connection: "another Arabic word from Crusades era", available: true, slug: "assassin" }
    ],
    meaningNow: "Admiral flies over naval bases and admiralty buildings around the world. The word is so thoroughly English-sounding that its Arabic origin shocks people.\n\nBut the history of naval warfare is inseparable from the history of Arabic seafaring. The compass, the lateen sail, and the admiral's title all came from the same maritime tradition.\n\nThe spurious 'd' remains: a permanent reminder that languages don't just borrow\u2014they mishear, misunderstand, and make beautiful mistakes."
  },
  {
    slug: "souvenir",
    word: "souvenir",
    romanization: "souvenir",
    language: "French from Latin",
    hook: "The French word for \"to remember\" became the thing you buy to forget you were ever a tourist.",
    story: [
      "Souvenir comes from the French verb se souvenir\u2014\"to remember\"\u2014itself from Latin subvenire, \"to come to mind\" (sub + venire, to come up from below). Memory rises to the surface.",
      "In French, souvenir is first a verb, then a noun. Un souvenir is a memory itself\u2014not an object. \"J'ai un bon souvenir de Paris\" means \"I have a good memory of Paris,\" not a keychain.",
      "English borrowed the noun form in the 1770s but narrowed it: a souvenir became a physical object\u2014something you buy to prove you were somewhere. The memory became merchandise.",
      "The transformation is telling: French keeps souvenir in the mind (a memory). English puts it in a gift shop (a thing). The word reveals how different cultures relate to remembering."
    ],
    journey: [
      { location: "Rome", period: "ancient", form: "subvenire", script: "subvenire", context: "To come to mind rise up", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "France", period: "~1100 CE", form: "souvenir", script: "souvenir", context: "French verb to remember noun memory", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1775", form: "souvenir", script: "souvenir", context: "English borrows as physical memento", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1900s+", form: "souvenir", context: "Tourism industry gift shops worldwide", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "French", ipa: "/suv.\u0259\u02C8ni\u0281/", text: "souvenir", lang: "fr" },
      { label: "English", ipa: "/\u02CCsu\u02D0.v\u0259\u02C8n\u026A\u0259\u0279/", text: "souvenir", lang: "en" }
    ],
    relatives: [
      { word: "memento", language: "English/Latin", connection: "remember imperative same concept", available: false },
      { word: "saudade", language: "Portuguese", connection: "longing for past related emotional territory", available: true, slug: "saudade" },
      { word: "nostalgia", language: "English/Greek", connection: "homecoming pain similar feeling", available: false }
    ],
    meaningNow: "The souvenir industry is worth billions\u2014snow globes, magnets, shot glasses, all claiming to contain memories of places.\n\nBut the French meaning persists as a quiet rebuke: a real souvenir is something you carry in your mind, not in your suitcase. The best memories can't be bought.\n\nThe word asks: do you remember the place, or the thing you bought there?"
  },
  {
    slug: "cookie",
    word: "koekje",
    romanization: "koekje",
    language: "English from Dutch",
    hook: "A Dutch \"little cake\" became America's favorite snack\u2014and the internet's tracking tool.",
    story: [
      "In Dutch, koekje is the diminutive of koek (\"cake\")\u2014literally \"little cake.\" Dutch settlers in New Amsterdam (later New York) brought their baking traditions and vocabulary to America.",
      "English already had \"biscuit\" (from French, meaning \"twice-cooked\"). But the Dutch koekje offered something different: sweeter, softer, more varied. American English adopted it as \"cookie\" in the early 1700s.",
      "British English never adopted cookie\u2014it remained \"biscuit\" across the Atlantic. This is one of the clearest Dutch-American splits in English: the same object, different words, revealing different colonial histories.",
      "Then in 1994, Netscape engineer Lou Montulli needed a name for small data files websites store on your computer. He chose \"cookie\"\u2014from the computing term \"magic cookie\" (a token passed between programs). The Dutch little cake became digital surveillance."
    ],
    journey: [
      { location: "Netherlands", period: "1600s", form: "koekje", script: "koekje", context: "Diminutive of koek little cake", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "New Amsterdam", period: "1650s", form: "koekje/cookie", context: "Dutch settlers bring word to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "United States", period: "1703", form: "cookie", script: "cookie", context: "First recorded American English usage", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Internet", period: "1994", form: "cookie", context: "HTTP cookie web tracking digital term", color: "#4a5568", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "Dutch", ipa: "/\u02C8ku\u02D0k.j\u0259/", text: "koekje", lang: "nl" },
      { label: "American English", ipa: "/\u02C8k\u028Ak.i/", text: "cookie", lang: "en" }
    ],
    relatives: [
      { word: "biscuit", language: "British English", connection: "same object different colonial word", available: false },
      { word: "kindergarten", language: "German", connection: "another continental European word in American English", available: true, slug: "kindergarten" },
      { word: "koek", language: "Dutch", connection: "cake the root word", available: false }
    ],
    meaningNow: "Cookie now leads a double life: a baked good and a digital tracker. \"Accept cookies\" is something both a grandmother and a website might ask.\n\nThe digital meaning has become so dominant that we've normalized surveillance with the coziest possible word. You don't \"accept tracking files\"\u2014you \"accept cookies.\" Language softens what we might otherwise refuse.\n\nThe Dutch little cake never imagined it would grow up to be a privacy debate."
  },
  {
    slug: "alchemy",
    word: "\u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0621",
    romanization: "al-k\u012Bm\u012By\u0101\u02BE",
    language: "English from Arabic from Greek",
    hook: "The quest to turn lead into gold gave us the word for all transformation.",
    story: [
      "Alchemy's etymology is itself a transformation. The Arabic al-k\u012Bm\u012By\u0101\u02BE combines the Arabic article al- with a root that might come from Greek khemeia (the art of transmutation) or from Khem, an ancient name for Egypt\u2014\"the Egyptian art.\"",
      "Arab scholars preserved and expanded Greek alchemical knowledge during the Islamic Golden Age. Jabir ibn Hayyan (Geber) developed experimental methods that would become the foundation of chemistry. His Arabic texts were the standard for centuries.",
      "When Europeans translated these Arabic works in the 12th century, they kept the Arabic article al-. Chemistry later dropped the article; alchemy kept it\u2014the al- marking the older, more mystical pursuit.",
      "The split between alchemy (mystical transformation) and chemistry (scientific analysis) happened gradually. Newton was an alchemist. Boyle was both. The same Arabic word gave birth to both the magic and the science."
    ],
    journey: [
      { location: "Egypt", period: "~300 CE", form: "khemeia", script: "\u03C7\u03B7\u03BC\u03B5\u03AF\u03B1", context: "Greek-Egyptian transmutation arts", color: "#5c5a4a", coordinates: [31.2, 30] },
      { location: "Baghdad", period: "~800 CE", form: "al-k\u012Bm\u012By\u0101\u02BE", script: "\u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0621", context: "Jabir ibn Hayyan develops methods", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Spain", period: "1100s", form: "alquimia", context: "Translation movement Toledo", color: "#5c5a4a", coordinates: [-4, 39.9] },
      { location: "Europe", period: "1300s+", form: "alchemy", script: "alchemy", context: "Newton Paracelsus Flamel", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/al.ki\u02D0.mi\u02D0.\u02C8ja\u02D0\u0294/", text: "\u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0621", lang: "ar" },
      { label: "English", ipa: "/\u02C8\u00E6l.k\u0259.mi/", text: "alchemy", lang: "en" }
    ],
    relatives: [
      { word: "chemistry", language: "English", connection: "same root without al- the science that emerged", available: false },
      { word: "algebra", language: "English/Arabic", connection: "another al- Arabic word that built a discipline", available: true, slug: "algebra" },
      { word: "elixir", language: "English/Arabic", connection: "al-iksir another alchemical term", available: false }
    ],
    meaningNow: "Alchemy is now used metaphorically for any seemingly magical transformation: \"the alchemy of cooking,\" \"emotional alchemy,\" \"the alchemy of great writing.\"\n\nThe word carries a residue of the mystical\u2014even though alchemy's methods became chemistry's methods. The al- prefix still marks it as something older, stranger, less tame than science.\n\nEvery time we use alchemy metaphorically, we're acknowledging that some transformations feel like magic even when they're not."
  },
  {
    slug: "ketchup",
    word: "\u8305\u6C41",
    romanization: "k\u00ea-tsiap",
    language: "English from Hokkien Chinese",
    hook: "A Chinese fish sauce became America's tomato condiment\u2014with no fish and no China in sight.",
    story: [
      "In the Hokkien Chinese dialect of southeast China, k\u00ea-tsiap (\u8305\u6C41 or similar) meant \"fermented fish sauce\"\u2014a pungent brine of pickled fish and spices. Chinese traders spread it throughout Southeast Asia.",
      "British traders in Malaya and Indonesia encountered the sauce in the 1700s and brought it home as \"ketchup\" or \"catchup.\" Early English ketchups were made from mushrooms, walnuts, anchovies\u2014anything fermented and savory. No tomatoes.",
      "Tomato ketchup appeared in America in the early 1800s. Henry Heinz began selling his version in 1876. By the 20th century, ketchup meant exclusively tomato ketchup\u2014and the fish sauce origin was entirely forgotten.",
      "The word traveled from Chinese fish sauce to English mushroom sauce to American tomato sauce. At each stop, the recipe changed completely. Only the name survived."
    ],
    journey: [
      { location: "Fujian China", period: "ancient", form: "k\u00ea-tsiap", script: "\u8305\u6C41", context: "Fermented fish sauce Hokkien dialect", color: "#2d4a3b", coordinates: [118.1, 24.5] },
      { location: "Southeast Asia", period: "1600s", form: "kecap", context: "Traders spread sauce through region", color: "#2d4a3b", coordinates: [106.8, -6.2] },
      { location: "England", period: "1711", form: "ketchup/catchup", context: "British bring back mushroom walnut versions", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1876", form: "ketchup", script: "ketchup", context: "Heinz tomato ketchup dominates", color: "#4a5568", coordinates: [-80, 40.4] }
    ],
    sounds: [
      { label: "Hokkien", ipa: "/ke\u02C8tsiap/", text: "ketchup", lang: "zh" },
      { label: "English", ipa: "/\u02C8k\u025Bt\u0283.\u0259p/", text: "ketchup", lang: "en" }
    ],
    relatives: [
      { word: "kecap manis", language: "Indonesian", connection: "same root became sweet soy sauce", available: false },
      { word: "soy sauce", language: "English/Japanese", connection: "another Asian fermented sauce", available: false },
      { word: "chocolate", language: "English/Nahuatl", connection: "another food word completely transformed", available: true, slug: "chocolate" }
    ],
    meaningNow: "Ketchup is now America's most popular condiment\u2014consumed at a rate of three bottles per person per year. The word is so naturalized that its Chinese origin surprises everyone.\n\nMeanwhile in Indonesia, kecap (from the same root) means soy sauce. The same word, on opposite sides of the Pacific, means completely different condiments.\n\nThe word proves that language can preserve a connection long after the thing itself has been utterly transformed."
  },
  {
    slug: "yogurt",
    word: "yo\u011Furt",
    romanization: "yo\u011Furt",
    language: "Turkish",
    hook: "Central Asian nomads preserved milk with bacteria\u2014and gave us a word for health.",
    story: [
      "Yo\u011Furt comes from the Old Turkic verb yo\u011Furmak\u2014\"to knead\" or \"to be curdled.\" The first yogurt was likely an accident: milk stored in animal-skin bags in warm climates would naturally ferment.",
      "Turkic nomads on the Central Asian steppes discovered that this curdled milk lasted longer, traveled better, and seemed to keep them healthy. They spread the practice\u2014and the word\u2014wherever they migrated.",
      "Ottoman Turks brought yogurt to southeastern Europe and the Middle East. In the 1900s, Bulgarian scientist Stamen Grigorov identified the specific bacteria (Lactobacillus bulgaricus) responsible. Yogurt went from folk food to health food.",
      "The word's spelling varies wildly across languages\u2014yoghurt, yogourt, jo\u011Fur, yaourt\u2014because each culture heard the Turkish word slightly differently. The bacteria don't care about spelling."
    ],
    journey: [
      { location: "Central Asia", period: "~6000 BCE", form: "yo\u011Furmak", context: "Turkic nomads ferment milk accidentally", color: "#5c5a4a", coordinates: [68, 41] },
      { location: "Ottoman Empire", period: "1000s CE", form: "yo\u011Furt", script: "yo\u011Furt", context: "Spreads with Turkish expansion", color: "#4a3b6b", coordinates: [29, 41.1] },
      { location: "Bulgaria", period: "1905", form: "kiselo mlyako", context: "Grigorov identifies the bacteria", color: "#5c5a4a", coordinates: [23.3, 42.7] },
      { location: "United States", period: "1942", form: "yogurt", script: "yogurt", context: "Dannon commercializes in America", color: "#4a5568", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Turkish", ipa: "/jo\u02D0.\u02C8urt/", text: "yo\u011furt", lang: "tr" },
      { label: "English", ipa: "/\u02C8jo\u028A.\u0261\u0259t/", text: "yogurt", lang: "en" }
    ],
    relatives: [
      { word: "kefir", language: "Turkish/Caucasian", connection: "another fermented milk word", available: false },
      { word: "ayran", language: "Turkish", connection: "yogurt drink diluted", available: false },
      { word: "bazaar", language: "Persian", connection: "another word from the Turkish-Persian world", available: true, slug: "bazaar" }
    ],
    meaningNow: "Yogurt is now a $100+ billion global industry\u2014Greek yogurt, Icelandic skyr, probiotic drinks, frozen yogurt. The humble nomad's milk has become a health-food empire.\n\nThe word carries the DNA of Central Asian survival: turning scarcity into preservation, accident into tradition.\n\nEvery cup of yogurt connects you to a nomad on horseback 8,000 years ago, kneading milk in a leather bag under a vast sky."
  },
  {
    slug: "manga",
    word: "\u6F2B\u753B",
    romanization: "manga",
    language: "Japanese",
    hook: "\"Whimsical pictures\" by a 19th-century artist became a global visual language.",
    story: [
      "Manga (\u6F2B\u753B) combines man (\u6F2B, \"whimsical, impromptu\") and ga (\u753B, \"pictures\"). The word was used by the legendary artist Hokusai in 1814 for his sketch collections\u2014Hokusai Manga: \"Hokusai's Whimsical Drawings.\"",
      "But the art form is older than the word. Japanese scroll paintings (emakimono) from the 12th century tell sequential visual stories\u2014proto-manga, centuries before the term existed.",
      "Modern manga emerged in the post-WWII era, heavily influenced by Disney animation. Osamu Tezuka (Astro Boy) created the visual language: big eyes, speed lines, cinematic panels. Manga became Japan's dominant storytelling medium.",
      "The word entered English in the 1980s as Japanese comics gained Western audiences. Now manga is a $25 billion industry, and its visual conventions influence artists worldwide."
    ],
    journey: [
      { location: "Japan", period: "1100s", form: "emakimono", context: "Scroll paintings sequential art", color: "#2d4a3b", coordinates: [135.8, 35] },
      { location: "Japan", period: "1814", form: "manga", script: "\u6F2B\u753B", context: "Hokusai names his sketch collections", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Japan", period: "1947+", form: "manga", context: "Tezuka creates modern manga form", color: "#2d4a3b", coordinates: [135.5, 34.7] },
      { location: "Global", period: "1980s+", form: "manga", context: "Global phenomenon anime connection", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/ma\u014B.\u0261a/", text: "\u6F2B\u753B", lang: "ja" },
      { label: "English", ipa: "/\u02C8m\u00E6\u014B.\u0261\u0259/", text: "manga", lang: "en" }
    ],
    relatives: [
      { word: "\u6298\u308A\u7D19", language: "Japanese", connection: "another Japanese art form word", available: true, slug: "origami" },
      { word: "anime", language: "Japanese/English", connection: "animated manga sibling art form", available: false },
      { word: "manhwa", language: "Korean", connection: "same Chinese characters Korean comics", available: false }
    ],
    meaningNow: "Manga has changed how the world reads. Right-to-left, back-to-front (in English editions). Speed lines, emotional symbols, panel compositions\u2014an entire visual grammar that transcends language.\n\nThe word \"whimsical pictures\" now describes an art form that tackles everything from children's adventures to philosophical horror.\n\nHokusai called his sketches whimsical. Two centuries later, his word describes one of the most influential art forms on Earth."
  },
  {
    slug: "gung-ho",
    word: "\u5DE5\u5408",
    romanization: "g\u014Dng h\u00e9",
    language: "English from Chinese",
    hook: "A Chinese industrial slogan became the English word for reckless enthusiasm.",
    story: [
      "G\u014Dng h\u00e9 (\u5DE5\u5408) means \"work together\" in Chinese\u2014it was the motto of Chinese Industrial Cooperatives, organizations formed in 1938 to support the war effort against Japan.",
      "Marine Lieutenant Colonel Evans Carlson observed these cooperatives during time spent with Chinese Communist forces. Impressed by their spirit, he adopted \"Gung Ho!\" as the motto for his 2nd Marine Raider Battalion in 1942.",
      "Carlson's Raiders became famous for their aggressive tactics in the Pacific. \"Gung ho\" spread through the Marine Corps, then the military, then civilian English\u2014but the meaning shifted from \"cooperative\" to \"aggressively enthusiastic.\"",
      "The irony is complete: a Chinese phrase about working TOGETHER became an English word for individual recklessness. Cooperation became aggression in translation."
    ],
    journey: [
      { location: "China", period: "1938", form: "g\u014Dng h\u00e9", script: "\u5DE5\u5408", context: "Industrial Cooperatives work together", color: "#2d4a3b", coordinates: [116, 34] },
      { location: "Yan'an China", period: "1940", form: "gung ho", context: "Carlson observes learns the motto", color: "#2d4a3b", coordinates: [109.5, 36.6] },
      { location: "Pacific Theater", period: "1942", form: "Gung Ho!", context: "2nd Marine Raider Battalion motto", color: "#4a5568", coordinates: [160, -10] },
      { location: "United States", period: "1950s+", form: "gung-ho", context: "Shifts to mean overly enthusiastic", color: "#4a5568", coordinates: [-77, 38.9] }
    ],
    sounds: [
      { label: "Mandarin", ipa: "/k\u028C\u014B x\u0259\u02C8/", text: "\u5DE5\u5408", lang: "zh" },
      { label: "English", ipa: "/\u02CC\u0261\u028C\u014B\u02C8ho\u028A/", text: "gung-ho", lang: "en" }
    ],
    relatives: [
      { word: "tycoon", language: "English/Japanese", connection: "another Asian word for power in English", available: true, slug: "tycoon" },
      { word: "karate", language: "English/Japanese", connection: "another East Asian word for force", available: true, slug: "karate" },
      { word: "semper fi", language: "Latin", connection: "another military motto loyalty", available: false }
    ],
    meaningNow: "Gung-ho now means \"excessively eager\" or \"aggressively enthusiastic\"\u2014often with a hint of criticism. \"Don't be so gung-ho\" means \"calm down.\"\n\nThis is almost exactly opposite to the original Chinese meaning of harmonious cooperation. The collective became the individual. The cooperative became the aggressive.\n\nThe word's journey from Chinese socialism to American militarism is one of the stranger translations in language history."
  },
  {
    slug: "embargo",
    word: "embargo",
    romanization: "embargo",
    language: "Spanish/Portuguese",
    hook: "A word for seizing ships became the weapon of international diplomacy.",
    story: [
      "Embargo comes from the Spanish embargar\u2014\"to bar, to impede\"\u2014from Vulgar Latin *imbarric\u0101re (to barricade, from barra, \"bar\"). Originally, an embargo was a government order preventing ships from leaving port.",
      "Spain and Portugal, as maritime powers, used embargoes frequently: seizing foreign vessels in their ports as leverage during disputes. The word spread to English by the 1590s.",
      "Over centuries, embargo expanded from ships to all trade. The Arab oil embargo of 1973 showed the world that stopping the flow of goods could be as devastating as war.",
      "Now embargo is both a diplomatic tool and a controversial one: the US embargo on Cuba (1960-present) is the longest in modern history. The word for holding ships became the word for strangling economies."
    ],
    journey: [
      { location: "Spain", period: "1500s", form: "embargo", script: "embargo", context: "Seizing ships in port barring departure", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1594", form: "embargo", script: "embargo", context: "First English usage maritime context", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1807", form: "embargo", context: "Jefferson's Embargo Act trade weapon", color: "#4a5568", coordinates: [-77, 38.9] },
      { location: "Global", period: "1973", form: "embargo", context: "Arab oil embargo economic warfare", coordinates: [44, 24] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/em\u02C8ba\u027E.\u0263o/", text: "embargo", lang: "es" },
      { label: "English", ipa: "/\u026Am\u02C8b\u0251\u02D0\u0261.o\u028A/", text: "embargo", lang: "en" }
    ],
    relatives: [
      { word: "barricade", language: "French", connection: "same root bar to block", available: false },
      { word: "boycott", language: "English", connection: "similar economic pressure named for a person", available: false },
      { word: "safari", language: "Swahili", connection: "another word from maritime trade routes", available: true, slug: "safari" }
    ],
    meaningNow: "Embargo has become one of diplomacy's most loaded words. It sounds bureaucratic, neutral\u2014but it can devastate entire populations.\n\nThe word maintains a veneer of civility over what is essentially siege warfare by other means. \"We've placed an embargo\" sounds calmer than \"we're blocking their food and medicine.\"\n\nThe maritime origin persists in the metaphor: an embargo is still about controlling the flow. Ships, oil, data\u2014the medium changes, the strategy doesn't."
  },
  {
    slug: "lemon",
    word: "\u0644\u064A\u0645\u0648\u0646",
    romanization: "laym\u016Bn",
    language: "English from Arabic/Persian/Sanskrit",
    hook: "A fruit traveled from India to Persia to Arabia to Europe\u2014collecting names at every stop.",
    story: [
      "The lemon's linguistic journey begins in Sanskrit: nimbu (\u0928\u093F\u092E\u094D\u092C\u0942) or n\u012Bmbu. Persian traders adopted it as l\u012Bm\u016B. Arabic made it laym\u016Bn (\u0644\u064A\u0645\u0648\u0646). Each language reshaped the sound.",
      "Arab traders brought lemons westward across the Mediterranean. Spanish became lim\u00f3n, Italian limone, French limon, English lemon. The fruit arrived in Europe around the 10th century, but the word came first in some regions.",
      "The word's journey tracks the fruit's: India \u2192 Persia \u2192 Arabia \u2192 North Africa \u2192 Spain \u2192 all of Europe. Unlike many borrowed words, you can taste the lemon's journey in the changing sounds.",
      "In English, \"lemon\" gained a second meaning: something defective (\"that car is a lemon\"). The sourness of the fruit became a metaphor for the bitterness of disappointment."
    ],
    journey: [
      { location: "India", period: "ancient", form: "nimbu/n\u012Bmbu", script: "\u0928\u093F\u092E\u094D\u092C\u0942", context: "Sanskrit original citrus fruit", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Persia", period: "~500 CE", form: "l\u012Bm\u016B", script: "\u0644\u06CC\u0645\u0648", context: "Persian traders adopt and spread", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Arabia", period: "~700 CE", form: "laym\u016Bn", script: "\u0644\u064A\u0645\u0648\u0646", context: "Arabic trade routes Mediterranean", color: "#4a3b6b", coordinates: [44, 24] },
      { location: "Spain", period: "~1000 CE", form: "lim\u00f3n", context: "Moors bring to Iberia", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1400s", form: "lemon", script: "lemon", context: "English from French limon", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/\u02C8nimbu\u02D0/", text: "\u0928\u093F\u092E\u094D\u092C\u0942", lang: "hi" },
      { label: "Arabic", ipa: "/laj\u02C8mu\u02D0n/", text: "\u0644\u064A\u0645\u0648\u0646", lang: "ar" },
      { label: "English", ipa: "/\u02C8l\u025Bm.\u0259n/", text: "lemon", lang: "en" }
    ],
    relatives: [
      { word: "lime", language: "English/Arabic", connection: "same Arabic root different citrus", available: false },
      { word: "orange", language: "English/Sanskrit", connection: "another Sanskrit fruit word n\u0101ranga", available: false },
      { word: "chocolate", language: "English/Nahuatl", connection: "another food word with epic journey", available: true, slug: "chocolate" }
    ],
    meaningNow: "Lemon is one of those words where you can taste the Silk Road. Each language that touched it left a fingerprint on the sound: Sanskrit's n became Persian's l, Arabic added its characteristic ending, French smoothed it, English clipped it.\n\nThe fruit traveled from Indian forests to every kitchen on Earth. The word followed the same path, changing at every border but never disappearing.\n\nWhen life gives you lemons, it's giving you a word that survived 3,000 years of trade."
  }
];
