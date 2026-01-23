import { Word } from "./word-types";

export const newWordsBatch3: Word[] = [
  {
    slug: "bamboo",
    word: "bambu",
    romanization: "bamboo",
    language: "English from Malay/Kannada",
    hook: "The fastest-growing plant on Earth grew its name across three continents.",
    story: [
      "The word bamboo likely comes from Malay bambu or from the Kannada language of South India (ba\u1e43bu). The Dutch, who colonized Indonesia, brought the word to Europe as bamboes in the 1590s.",
      "Bamboo is not just a plant\u2014it's a civilization material. In Asia, bamboo has been used for everything: scaffolding, bridges, paper, food, weapons, musical instruments, water pipes. Entire cultures are built on bamboo.",
      "The plant's explosive growth\u2014some species grow 91 cm in a single day\u2014made it a symbol of resilience and rapid progress in Asian philosophy. It bends but doesn't break.",
      "English borrowed the word and the material, but not the philosophy. In the West, bamboo is a decorative plant. In Asia, it's the backbone of daily life\u2014a difference the word can't quite bridge."
    ],
    journey: [
      { location: "South India", period: "ancient", form: "ba\u1e43bu", context: "Kannada/Dravidian languages", color: "#2d4a3b", coordinates: [76, 12.3] },
      { location: "Malay Archipelago", period: "ancient", form: "bambu", context: "Malay name for the grass", color: "#2d4a3b", coordinates: [110, -7] },
      { location: "Netherlands", period: "1590s", form: "bamboes", script: "bamboes", context: "Dutch colonizers bring word to Europe", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "England", period: "1598", form: "bamboo", script: "bamboo", context: "English adoption from Dutch", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Malay", ipa: "/bam\u02C8bu/", text: "bambu", lang: "ms" },
      { label: "English", ipa: "/b\u00E6m\u02C8bu\u02D0/", text: "bamboo", lang: "en" }
    ],
    relatives: [
      { word: "rattan", language: "Malay", connection: "another Asian plant word from same region", available: false },
      { word: "jungle", language: "English/Hindi", connection: "where bamboo grows wild", available: true, slug: "jungle" },
      { word: "zen", language: "Japanese", connection: "bamboo symbolism in zen philosophy", available: false }
    ],
    meaningNow: "Bamboo has become a sustainability buzzword\u2014bamboo toothbrushes, bamboo clothing, bamboo straws. The West has rediscovered what Asia always knew: this grass can replace almost anything.\n\nThe word now bridges traditional and modern: ancient material, modern branding. Bamboo forests still cover much of Asia, growing as fast as ever.\n\nThe plant that bends without breaking has become a metaphor for resilience\u2014in any language."
  },
  {
    slug: "schmuck",
    word: "\u05E9\u05DE\u05D0\u05E7",
    romanization: "schmuck",
    language: "English from Yiddish/Polish",
    hook: "A word for \"jewel\" became the perfect American insult.",
    story: [
      "In Yiddish, schmuck (\u05E9\u05DE\u05D0\u05E7) originally meant \"jewel\" or \"ornament\"\u2014from Middle High German smuck (\"adornment\") and Polish smok. But it acquired a vulgar secondary meaning: a euphemism for a certain male body part.",
      "Jewish immigrants brought Yiddish to New York in the late 1800s. Schmuck crossed from Yiddish into American English, but Americans adopted only the insult meaning\u2014\"a stupid or contemptible person\"\u2014unaware of (or ignoring) the anatomical reference.",
      "The word's journey from \"jewel\" to insult is typically Yiddish: ironic, oblique, using beauty to mock. Calling someone a schmuck is calling them a jewel that isn't\u2014a worthless ornament, a fake gem.",
      "In polite Yiddish society, schmuck was considered too vulgar to say in mixed company. The slightly softer \"schmo\" was invented as a euphemism for the euphemism\u2014a polite version of an impolite word for a polite word."
    ],
    journey: [
      { location: "Germany", period: "medieval", form: "smuck", context: "Middle High German ornament jewel", color: "#4a5568", coordinates: [10, 51] },
      { location: "Eastern Europe", period: "1700s", form: "shmok/schmuck", script: "\u05E9\u05DE\u05D0\u05E7", context: "Yiddish acquires vulgar double meaning", color: "#4a5568", coordinates: [21, 52.2] },
      { location: "New York", period: "1890s+", form: "schmuck", script: "schmuck", context: "Jewish immigrants bring to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "United States", period: "1930s+", form: "schmuck", context: "Mainstream American insult", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "Yiddish", ipa: "/\u0283m\u028Ck/", text: "schmuck", lang: "yi" },
      { label: "American English", ipa: "/\u0283m\u028Ck/", text: "schmuck", lang: "en" }
    ],
    relatives: [
      { word: "mensch", language: "Yiddish", connection: "the opposite a good worthy person", available: false },
      { word: "chutzpah", language: "Yiddish", connection: "another Yiddish word Americans love", available: false },
      { word: "cookie", language: "Dutch", connection: "another immigrant-community word in American English", available: true, slug: "cookie" }
    ],
    meaningNow: "Schmuck has lost most of its vulgar edge in English\u2014most Americans don't know it originally referenced anatomy. It now occupies a sweet spot between mild and medium insult.\n\nYiddish has contributed more insults to English than perhaps any other language: schmuck, putz, schlemiel, schlep. Each carries a precise shade of contempt that English lacked.\n\nThe word's journey from \"jewel\" to \"worthless person\" is preserved in layers: German beauty \u2192 Yiddish irony \u2192 American slang."
  },
  {
    slug: "paradise",
    word: "\u067E\u0631\u062F\u06CC\u0633",
    romanization: "pard\u012Bs",
    language: "English from Persian",
    hook: "The Persian word for a walled garden became every religion's word for heaven.",
    story: [
      "In Old Persian, parid\u0101iza meant \"walled enclosure\" or \"enclosed garden\"\u2014from pari (around) + d\u0101iza (wall, mound). Persian kings built elaborate walled gardens: ordered, irrigated, blooming in the desert. They called them parad\u012Bs.",
      "When the Greek historian Xenophon encountered these royal gardens in the 4th century BCE, he borrowed the word as paradeisos (\u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03C3\u03BF\u03C2). The Septuagint (Greek Old Testament) used paradeisos for the Garden of Eden.",
      "From that moment, the walled garden became the afterlife. Latin made it paradisus, and every European language followed: paradise, paradis, Paradies, paraiso. A Persian landscaping project became every religion's promise.",
      "The original meaning persists in the word's DNA: paradise is not wilderness but cultivation. Not raw nature but nature ordered by human hands. Heaven, in this etymology, is a garden someone planted."
    ],
    journey: [
      { location: "Persia", period: "~600 BCE", form: "parid\u0101iza", script: "\u067E\u0631\u062F\u06CC\u0633", context: "Walled royal garden enclosed park", color: "#4a3b6b", coordinates: [52, 32.7] },
      { location: "Greece", period: "~400 BCE", form: "paradeisos", script: "\u03C0\u03B1\u03C1\u03AC\u03B4\u03B5\u03B9\u03C3\u03BF\u03C2", context: "Xenophon borrows for Persian gardens", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Alexandria", period: "~250 BCE", form: "paradeisos", context: "Septuagint uses for Garden of Eden", color: "#5c5a4a", coordinates: [29.9, 31.2] },
      { location: "Rome", period: "~100 CE", form: "paradisus", context: "Latin Christian texts heaven", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Global", period: "present", form: "paradise", script: "paradise", context: "Universal word for heaven perfection", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Persian", ipa: "/p\u00E6\u027E\u02C8di\u02D0s/", text: "\u067E\u0631\u062F\u06CC\u0633", lang: "fa" },
      { label: "English", ipa: "/\u02C8p\u00E6\u0279.\u0259.da\u026As/", text: "paradise", lang: "en" }
    ],
    relatives: [
      { word: "bazaar", language: "Persian", connection: "another Persian word that defined Western concepts", available: true, slug: "bazaar" },
      { word: "Eden", language: "Hebrew", connection: "the garden paradise was used to translate", available: false },
      { word: "nirvana", language: "Sanskrit", connection: "another word for ultimate peace different tradition", available: true, slug: "nirvana" }
    ],
    meaningNow: "Paradise is now everywhere: tropical paradises, shopping paradises, paradise lost and regained. The word has been diluted by tourism and marketing.\n\nBut the Persian etymology offers a profound insight: the original paradise was not a natural wonder but a human creation. It was labor\u2014walls built, channels dug, trees planted in desert.\n\nParadise was never found. It was always made."
  },
  {
    slug: "berserk",
    word: "berserkr",
    romanization: "berserk",
    language: "English from Old Norse",
    hook: "Viking warriors wore bear skins into battle\u2014and gave us the word for losing control.",
    story: [
      "In Old Norse, berserkr meant \"bear-shirt\"\u2014from ber (bear) + serkr (shirt/coat). Berserkers were legendary Norse warriors who fought in a trance-like fury, wearing animal skins and seemingly impervious to pain.",
      "The sagas describe berserkers biting their shields, howling like animals, and fighting without armor. Whether this was ritual drug use, battle meditation, or pure legend remains debated by historians.",
      "The word entered English through the Norse sagas, first appearing in the early 1800s. By the mid-1900s, \"going berserk\" meant losing all rational control\u2014no bear skin required.",
      "The original berserkers were not merely insane\u2014they were cultivated warriors, trained to enter altered states. The modern meaning loses this: we use berserk for uncontrolled rage, not for disciplined fury."
    ],
    journey: [
      { location: "Scandinavia", period: "~800 CE", form: "berserkr", context: "Norse warriors bear-shirt fighters", color: "#4a5568", coordinates: [10.8, 59.9] },
      { location: "Iceland", period: "1200s", form: "berserkr", context: "Preserved in Icelandic sagas", color: "#4a5568", coordinates: [-18, 65] },
      { location: "England", period: "1814", form: "berserker", script: "berserker", context: "Sir Walter Scott introduces to English", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1900s+", form: "berserk", context: "Going berserk losing control", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Old Norse", ipa: "/\u02C8ber.serkr/", text: "berserkr", lang: "is" },
      { label: "English", ipa: "/b\u0259\u02C8z\u025C\u02D0k/", text: "berserk", lang: "en" }
    ],
    relatives: [
      { word: "viking", language: "Old Norse", connection: "same warrior culture", available: false },
      { word: "\u00FAlfhe\u00F0nar", language: "Old Norse", connection: "wolf-skinned warriors similar concept", available: false },
      { word: "amok", language: "Malay", connection: "another culture's word for combat frenzy", available: false }
    ],
    meaningNow: "Berserk has moved from saga to everyday: traffic makes us berserk, machines go berserk, toddlers go berserk. The Viking fury has been domesticated into mild exasperation.\n\nBut the word retains something of its original power. \"Going berserk\" still implies a complete loss of self\u2014a reversion to something animal and ancient.\n\nThe bear-shirted warriors would barely recognize their word in a modern traffic complaint. But they'd recognize the feeling."
  },
  {
    slug: "marathon",
    word: "\u039C\u03B1\u03C1\u03B1\u03B8\u03CE\u03BD",
    romanization: "Marathon",
    language: "Greek (place name)",
    hook: "A Greek soldier ran 26 miles to deliver news of victory\u2014then died. We made it a sport.",
    story: [
      "In 490 BCE, the Athenians defeated the invading Persian army at the Battle of Marathon. According to legend, the soldier Pheidippides ran from the battlefield to Athens\u2014about 25 miles\u2014to announce the victory: \"Nik\u014Dmen!\" (We have won!) Then he collapsed and died.",
      "The story is likely embellished (Herodotus says Pheidippides ran to Sparta and back\u2014300 miles\u2014before the battle). But the legend stuck, and the place name became inseparable from the run.",
      "When the modern Olympics were revived in Athens in 1896, the organizers included a long-distance race from Marathon to Athens\u2014the marathon. The distance was standardized at 26.2 miles in 1921.",
      "Marathon the place name meant \"fennel field\" (marathos = fennel). A place named for a herb became the word for the ultimate test of human endurance."
    ],
    journey: [
      { location: "Marathon, Greece", period: "490 BCE", form: "Marathon", script: "\u039C\u03B1\u03C1\u03B1\u03B8\u03CE\u03BD", context: "Battle of Marathon Pheidippides runs", color: "#5c5a4a", coordinates: [23.9, 38.2] },
      { location: "Athens", period: "1896", form: "marathon", script: "marathon", context: "First modern Olympic marathon", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "London", period: "1908", form: "marathon", context: "26.2 miles distance established", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "marathon", context: "Any extreme endurance activity", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/ma.ra.\u02C8t\u02B0\u0254\u02D0n/", text: "\u039C\u03B1\u03C1\u03B1\u03B8\u03CE\u03BD", lang: "el" },
      { label: "English", ipa: "/\u02C8m\u00E6\u0279.\u0259.\u03B8\u0252n/", text: "marathon", lang: "en" }
    ],
    relatives: [
      { word: "eureka", language: "Greek", connection: "another Greek word from a famous moment", available: true, slug: "eureka" },
      { word: "Nike", language: "Greek", connection: "victory goddess Pheidippides' message", available: false },
      { word: "sprint", language: "English/Norse", connection: "the opposite short fast burst", available: false }
    ],
    meaningNow: "Marathon now means any extreme effort: a Netflix marathon, a study marathon, a coding marathon. The word has expanded from physical running to any sustained endurance.\n\nOver 1,100 marathon races are held worldwide each year. Six million people run them. The word has transformed from a death run into a bucket-list achievement.\n\nPheidippides died delivering his message. We turned his death into a weekend hobby. The word carries this irony\u2014celebration built on sacrifice\u2014in every finish line crossed."
  }
];
