import type { Word } from "./word-types";

export const newWordsBatch9: Word[] = [
  {
    slug: "rattan",
    word: "rotan",
    romanization: "rotan",
    language: "Malay",
    hook: "The cane that furnished colonial homes kept its Malay name.",
    story: [
      "Rattan is a climbing palm native to Southeast Asian rainforests. In Malay, rotan describes both the plant and the flexible cane that can be made from it. The vines can grow over 100 meters, making them the longest plants in the world.",
      "Portuguese and Dutch traders encountered rattan in the Indonesian archipelago and recognized its value. The flexible, strong cane was perfect for furniture, baskets, and the notorious rattan cane used for punishment.",
      "Colonial powers imported rattan furniture to Europe, where 'rattan' chairs and tables became fashionable exotica. The material was tropical, but the name remained Malay. Every piece of rattan furniture carries a Southeast Asian word.",
      "Today rattan is both sustainable darling (it grows fast and supports forest communities) and exploitation symbol (historical over-harvesting devastated some species). The cane still grows; the word still travels."
    ],
    journey: [
      { location: "Southeast Asian rainforests", period: "ancient", form: "rotan", context: "Malay name for climbing palm", color: "#2d4a3b", coordinates: [110, 0] },
      { location: "Malacca", period: "1500s", form: "rotan", context: "Portuguese traders encounter rattan", color: "#5c5a4a", coordinates: [102.3, 2.2] },
      { location: "Netherlands", period: "1600s", form: "rattan", context: "Dutch East India Company imports", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "England", period: "1660", form: "rattan", script: "rattan", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "rattan", context: "Sustainable furniture material", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Malay", ipa: "/roˈtan/", text: "rotan", lang: "ms" },
      { label: "English", ipa: "/ræˈtæn/", text: "rattan", lang: "en" }
    ],
    relatives: [
      { word: "bamboo", language: "Malay", connection: "another Southeast Asian plant word", available: true, slug: "bamboo" },
      { word: "gong", language: "Malay", connection: "another Malay word in English", available: true, slug: "gong" },
      { word: "wicker", language: "Swedish", connection: "similar flexible material, different origin", available: false }
    ],
    meaningNow: "Rattan furniture has come full circle: from colonial exotic to mid-century modern to sustainable chic. The material connects us to rainforests we've never seen.\n\nThe Malay name persists because the material has no Western equivalent. Every rattan chair speaks Malay."
  },
  {
    slug: "teak",
    word: "tekka",
    romanization: "tekka",
    language: "Malayalam",
    hook: "The wood that built the British Empire came with its Dravidian name.",
    story: [
      "Teak (Tectona grandis) is native to South and Southeast Asia, prized for its durability, water resistance, and beauty. The English word comes from Portuguese teca, which came from Malayalam tekka (തേക്ക്), the Dravidian name for the tree.",
      "Teak was essential to shipbuilding: it doesn't rot in salt water, doesn't corrode metal fasteners, and resists termites. The British Empire floated on teak keels. Colonial powers stripped forests from India to Burma to build their navies.",
      "The word traveled with the wood: Portuguese traders on the Malabar Coast learned 'tekka' and brought both timber and name to Europe. By the 17th century, 'teak' was standard shipbuilding vocabulary.",
      "Today teak is luxury: teak decks, teak furniture, teak bowls. The deforestation that made empires possible has made old-growth teak rare and expensive. The wood that built warships now adorns yachts."
    ],
    journey: [
      { location: "Kerala, India", period: "ancient", form: "തേക്ക്", script: "തേക്ക്", context: "Malayalam name for the tree", color: "#9b4a2c", coordinates: [76, 10] },
      { location: "Malabar Coast", period: "1500s", form: "tekka/teca", context: "Portuguese traders learn the word", color: "#5c5a4a", coordinates: [75.7, 11.3] },
      { location: "England", period: "1698", form: "teak", script: "teak", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "British shipyards", period: "1700s+", form: "teak", context: "Essential for naval construction", color: "#4a5568", coordinates: [-4.5, 50.4] },
      { location: "Global", period: "present", form: "teak", context: "Luxury wood, sustainable concerns", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Malayalam", ipa: "/teːkkə/", text: "tekka", lang: "ml" },
      { label: "English", ipa: "/tiːk/", text: "teak", lang: "en" }
    ],
    relatives: [
      { word: "catamaran", language: "Tamil", connection: "another Dravidian word in English", available: true, slug: "catamaran" },
      { word: "mango", language: "Tamil/Malayalam", connection: "another Dravidian plant word", available: true, slug: "mango" },
      { word: "mahogany", language: "Taino", connection: "another tropical hardwood word", available: false }
    ],
    meaningNow: "Teak represents both imperial exploitation and modern sustainability. The forests that built empires are largely gone, but teak plantations now grow renewable supplies.\n\nThe Malayalam word persists in every piece of teak furniture, every teak deck. The Dravidian name crossed oceans on the very ships it helped build."
  },
  {
    slug: "candy",
    word: "खण्ड",
    romanization: "khaṇḍa",
    language: "Sanskrit via Arabic and French",
    hook: "The Sanskrit word for crystallized sugar became every child's favorite word.",
    story: [
      "The word 'candy' traces back to Sanskrit khaṇḍa (खण्ड), meaning 'piece' or 'fragment' — specifically crystallized sugar broken into pieces. This became Arabic qandi, then Old French çucre candi ('crystallized sugar').",
      "Sugar itself came from India, where sugarcane was first domesticated. The word for crystallized sugar traveled the same routes as the sweetness: India to Persia to Arabia to Europe. The candy followed the cane.",
      "By the 13th century, 'candy' in English meant any crystallized sugar or sugar-coated confection. The meaning expanded: candy canes, candy bars, candy stores. The Sanskrit fragment became a world of sweets.",
      "The word's journey mirrors sugar's colonization of the world: from Indian luxury to global addiction. Every candy bar carries Sanskrit roots, though few would guess it."
    ],
    journey: [
      { location: "India", period: "ancient", form: "खण्ड", script: "खण्ड", context: "Sanskrit for crystallized sugar pieces", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Arabia", period: "medieval", form: "قندي", script: "قندي", context: "Arabic qandi for sugar crystals", color: "#4a3b6b", coordinates: [44, 24] },
      { location: "France", period: "1200s", form: "çucre candi", context: "Old French crystallized sugar", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1420", form: "candy", script: "candy", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "candy", context: "Any sweet confection", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/kʰəɳɖə/", text: "khaṇḍa", lang: "sa" },
      { label: "Arabic", ipa: "/ˈqandi/", text: "qandi", lang: "ar" },
      { label: "English", ipa: "/ˈkændi/", text: "candy", lang: "en" }
    ],
    relatives: [
      { word: "sugar", language: "Sanskrit via Arabic", connection: "same origin journey", available: false },
      { word: "chocolate", language: "Nahuatl", connection: "another sweet from another language", available: true, slug: "chocolate" },
      { word: "saccharine", language: "Latin", connection: "related sweetness word", available: false }
    ],
    meaningNow: "Candy is now so common a word that its Sanskrit origin shocks people. The ancient Indian crystallized sugar became Halloween costumes and Valentine's hearts.\n\nThe word has traveled further than sugar itself: from Indian sweetness to global dental concern. Every 'candy store' speaks Sanskrit without knowing it."
  },
  {
    slug: "punch",
    word: "पाँच",
    romanization: "pāñc",
    language: "Hindi from Sanskrit",
    hook: "The drink named for 'five' ingredients became a party staple worldwide.",
    story: [
      "Punch likely comes from the Hindi pāñc (पाँच), meaning 'five,' from Sanskrit pañca. The drink supposedly had five ingredients: alcohol, sugar, lemon, water, and tea or spices.",
      "British sailors and merchants in India encountered this five-ingredient drink and brought it home. By 1632, 'punch' appeared in English documents. The recipe varied, but the name stuck — even when punches had more or fewer than five ingredients.",
      "Punch became the social drink of colonial Britain: punch bowls, punch houses, punch parties. It was often the centerpiece of gatherings, a communal drink ladled from a decorative bowl. The Hindi five became the English party.",
      "Today 'punch' has mostly lost its alcoholic edge: fruit punch, Hawaiian punch, party punch. The five ingredients have been forgotten, but the name — and the bowl — remain."
    ],
    journey: [
      { location: "India", period: "ancient", form: "पाँच", script: "पाँच", context: "Hindi/Sanskrit for five", color: "#9b4a2c", coordinates: [78, 28] },
      { location: "British India", period: "1600s", form: "punch", context: "British adopt five-ingredient drink", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "England", period: "1632", form: "punch", script: "punch", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Colonial America", period: "1700s", form: "punch", context: "Becomes social drink of colonies", color: "#4a5568", coordinates: [-76.6, 39.3] },
      { location: "Global", period: "present", form: "punch", context: "Party drink, often non-alcoholic", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/pɑ̃ːtʃ/", text: "pāñc", lang: "hi" },
      { label: "English", ipa: "/pʌntʃ/", text: "punch", lang: "en" }
    ],
    relatives: [
      { word: "five", language: "English", connection: "same Indo-European root as pañca", available: false },
      { word: "pentagon", language: "Greek", connection: "five-sided, same PIE root", available: false },
      { word: "grog", language: "English", connection: "another colonial era drink", available: false }
    ],
    meaningNow: "The punch bowl has mostly vanished from modern parties, but the word persists. 'Fruit punch' sounds completely American, not remotely Indian.\n\nThe etymology is debated — some scholars aren't convinced of the Hindi origin — but the story is too good to fully abandon. Five ingredients, one word, and centuries of parties later: punch is still what you serve a crowd."
  },
  {
    slug: "cushy",
    word: "खुशी",
    romanization: "khushi",
    language: "Hindi/Urdu",
    hook: "The Hindi word for 'pleasure' became British slang for an easy assignment.",
    story: [
      "In Hindi and Urdu, khush (खुश) means 'happy' or 'pleased,' from Persian. British soldiers in India adopted 'cushy' (their spelling of khushi) to describe assignments that were pleasant — easy postings, comfortable billets, jobs that didn't get you killed.",
      "The word spread through military slang during World War I. A 'cushy' wound was one serious enough to get you sent home but not serious enough to kill you — the wound every soldier secretly hoped for.",
      "By the mid-20th century, 'cushy' had lost its military specificity. A cushy job, a cushy number, a cushy life — any comfortable situation that required little effort. The happy Hindi word became the easy English one.",
      "The colonial irony is sharp: British soldiers used an Indian word for 'pleasant' to describe the parts of their Indian service that weren't miserable. The occupiers borrowed the occupied's word for happiness."
    ],
    journey: [
      { location: "Persia/India", period: "ancient", form: "خوش/खुश", script: "खुश", context: "Persian/Hindi for happy, pleasant", color: "#9b4a2c", coordinates: [78, 28] },
      { location: "British India", period: "1800s", form: "cushy", context: "British soldiers adopt for easy duty", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "Western Front", period: "1914-18", form: "cushy", script: "cushy", context: "WWI military slang spreads", color: "#4a5568", coordinates: [2.9, 50.1] },
      { location: "Britain", period: "1920s+", form: "cushy", context: "Enters general British slang", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global English", period: "present", form: "cushy", context: "Easy, comfortable, undemanding", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/kʰʊʃi/", text: "khushi", lang: "hi" },
      { label: "English", ipa: "/ˈkʊʃ.i/", text: "cushy", lang: "en" }
    ],
    relatives: [
      { word: "khaki", language: "Urdu", connection: "another Hindi/Urdu word in British military", available: true, slug: "khaki" },
      { word: "comfortable", language: "French", connection: "native English equivalent", available: false },
      { word: "blighty", language: "Hindi", connection: "another Hindi word in British military slang", available: false }
    ],
    meaningNow: "'Cushy' has completely lost its Hindi flavor. It sounds purely British — the kind of word you'd hear in a BBC drama, not traced to Hindi.\n\nBut the word carries colonial history: British soldiers in India, far from home, finding small pleasures and naming them with borrowed happiness. The occupied language provided the word for the occupier's comfort."
  },
  {
    slug: "shawl",
    word: "شال",
    romanization: "shāl",
    language: "Persian via Hindi",
    hook: "The Kashmir wrap that warmed empresses and became fashion's most borrowed word.",
    story: [
      "Shawl comes from Persian shāl (شال), which may ultimately derive from Shaliat, a town in India famous for weaving. The word traveled with the luxurious woolen wraps of Kashmir, prized for centuries before Europeans arrived.",
      "Mughal emperors treasured Kashmiri shawls. When the British East India Company arrived, they sent shawls home as exotic gifts. European women fell in love with them — Empress Joséphine allegedly owned hundreds.",
      "Demand for shawls transformed the British textile industry. Unable to afford real Kashmiri work, European factories in Paisley, Scotland, produced imitations — giving us the 'paisley' pattern, named for the town, not the original design.",
      "Today 'shawl' describes any large wrap, though the Kashmiri original remains the luxury standard. The word has traveled from Persian courts to fashion magazines, losing neither its warmth nor its glamour."
    ],
    journey: [
      { location: "Persia/Kashmir", period: "ancient", form: "شال", script: "شال", context: "Persian for woven wrap, possibly from Indian town", color: "#4a3b6b", coordinates: [74.8, 34.1] },
      { location: "Mughal India", period: "1600s", form: "shāl", context: "Kashmiri shawls treasured by emperors", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "England", period: "1662", form: "shawl", script: "shawl", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Paisley, Scotland", period: "1800s", form: "shawl", context: "Imitation Kashmiri production", color: "#4a5568", coordinates: [-4.4, 55.8] },
      { location: "Global", period: "present", form: "shawl", context: "Fashion staple, luxury item", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Persian", ipa: "/ʃɑːl/", text: "shāl", lang: "fa" },
      { label: "English", ipa: "/ʃɔːl/", text: "shawl", lang: "en" }
    ],
    relatives: [
      { word: "pashmina", language: "Persian", connection: "fine wool, premium shawl material", available: false },
      { word: "paisley", language: "Scottish", connection: "pattern from shawl imitation industry", available: false },
      { word: "wrap", language: "English", connection: "native equivalent", available: false }
    ],
    meaningNow: "The shawl industry transformed global textiles: Kashmir lost its monopoly, Paisley became a pattern name, and machine-made wraps democratized what was once imperial luxury.\n\nBut the Kashmiri original persists as ultimate luxury. A real pashmina shawl is still prized, still expensive, still carrying its Persian name through airports and fashion weeks."
  },
  {
    slug: "geyser",
    word: "Geysir",
    romanization: "Geysir",
    language: "Icelandic from Old Norse",
    hook: "An Icelandic spring that gushes gave the world its word for all such eruptions.",
    story: [
      "In Iceland, there's a hot spring called Geysir (from Old Norse geysa, 'to gush'). It was the first such spring described to European scientists, and its name became the generic term for all similar geological features worldwide.",
      "Geysir itself is one of hundreds of geothermal features in Iceland, but its fame made it the type specimen. When explorers found similar spouting springs in Yellowstone and New Zealand, they called them geysers — Icelandic became international.",
      "The word's journey is unusual: most borrowed words come from large, powerful languages. But Icelandic, spoken by fewer than 400,000 people, gave the world 'geyser' simply because Iceland was where Europeans first encountered the phenomenon.",
      "Today 'geyser' describes eruptions from Yellowstone's Old Faithful to Rotorua's Pohutu. The Icelandic spring that gushed first named them all."
    ],
    journey: [
      { location: "Iceland", period: "medieval", form: "Geysir", script: "Geysir", context: "Old Norse geysa: to gush", color: "#3b4a5a", coordinates: [-20.3, 64.3] },
      { location: "European science", period: "1700s", form: "geyser", context: "Scientists generalize the term", color: "#4a5568", coordinates: [0, 51] },
      { location: "Yellowstone", period: "1870s", form: "geyser", script: "geyser", context: "Term applied to American hot springs", color: "#4a5568", coordinates: [-110.6, 44.5] },
      { location: "Global", period: "present", form: "geyser", context: "Any periodic spouting hot spring", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Icelandic", ipa: "/ˈkeiːsɪr/", text: "Geysir", lang: "is" },
      { label: "English", ipa: "/ˈɡaɪ.zɚ/", text: "geyser", lang: "en" }
    ],
    relatives: [
      { word: "saga", language: "Icelandic", connection: "another Icelandic word in English", available: false },
      { word: "berserk", language: "Old Norse", connection: "another Norse word in English", available: true, slug: "berserk" },
      { word: "spring", language: "English", connection: "native water-feature word", available: false }
    ],
    meaningNow: "Iceland punches above its linguistic weight: a tiny nation gave the world 'geyser,' 'saga,' and contributed to 'berserk.' The island of fire and ice named phenomena the larger world hadn't seen.\n\nEvery nature documentary mentioning geysers is speaking Icelandic. The hot spring that gushed first claimed the category."
  },
  {
    slug: "saga",
    word: "saga",
    romanization: "saga",
    language: "Old Norse/Icelandic",
    hook: "The medieval Icelandic word for 'story' became English's word for epics.",
    story: [
      "In Old Norse, saga meant simply 'a story, narrative, tale' — related to the verb segja ('to say'). But the Icelandic sagas were no ordinary stories: they were epic narratives of families, heroes, and gods, preserved through centuries of oral and written tradition.",
      "The Icelandic sagas — the Njáls saga, Egils saga, the sagas of kings and heroes — were discovered by European scholars in the 17th and 18th centuries. These complex, literary narratives astonished readers used to thinking of medieval stories as simple romances.",
      "English adopted 'saga' to describe the Icelandic originals, then expanded it to any long narrative of heroic achievement. A family saga, a corporate saga, 'the saga continues' — the word kept its sense of epic scope.",
      "Today 'saga' appears in contexts its Icelandic creators couldn't have imagined: Star Wars saga, the Twilight saga, the saga of some sports team's season. The medieval Icelandic tale became a marketing term."
    ],
    journey: [
      { location: "Iceland", period: "~900-1400", form: "saga", script: "saga", context: "Old Norse for story, narrative", color: "#3b4a5a", coordinates: [-21.9, 64.1] },
      { location: "Scandinavia", period: "medieval", form: "saga", context: "Preserved in manuscripts", color: "#3b4a5a", coordinates: [10.8, 59.9] },
      { location: "Europe", period: "1700s", form: "saga", context: "Scholars discover Icelandic literature", color: "#4a5568", coordinates: [0, 51] },
      { location: "England", period: "1709", form: "saga", script: "saga", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "saga", context: "Any long narrative, marketing term", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Icelandic", ipa: "/ˈsaːɣa/", text: "saga", lang: "is" },
      { label: "English", ipa: "/ˈsɑː.ɡə/", text: "saga", lang: "en" }
    ],
    relatives: [
      { word: "geyser", language: "Icelandic", connection: "another Icelandic word in English", available: true, slug: "geyser" },
      { word: "say", language: "English", connection: "same Germanic root as segja", available: false },
      { word: "epic", language: "Greek", connection: "similar scope narrative term", available: false }
    ],
    meaningNow: "'Saga' now appears in contexts far removed from medieval Iceland: corporate sagas, celebrity sagas, the ongoing saga of whatever scandal is trending.\n\nBut the Icelandic meaning persists: a saga is long, eventful, and worth telling. The word still carries the weight of those medieval manuscripts, even when describing a reality TV show."
  },
  {
    slug: "ski",
    word: "ski",
    romanization: "ski",
    language: "Norwegian from Old Norse",
    hook: "The Norwegian word for 'stick of wood' became winter's favorite verb.",
    story: [
      "Ski comes from Old Norse skíð, meaning 'stick of wood' or 'snowshoe.' Scandinavians have been skiing for at least 8,000 years — some of the oldest skis ever found were discovered in Russia and Scandinavia.",
      "For millennia, skiing was utilitarian: a way to move through snowy landscapes, to hunt, to travel. Norwegian and Sami people skied for survival. The word 'ski' was as ordinary as 'walk.'",
      "Recreational skiing developed in Norway in the 19th century. British tourists discovered the sport, and the word 'ski' entered English around 1880. Alpine skiing developed in the Alps, but kept the Norwegian name.",
      "Today skiing is a global industry worth billions. The Norwegian stick of wood became chairlifts, ski resorts, and Olympic sports. The word traveled from survival tool to luxury vacation."
    ],
    journey: [
      { location: "Scandinavia", period: "~6000 BCE", form: "skíð", context: "Old Norse for wooden stick/snowshoe", color: "#3b4a5a", coordinates: [10.8, 59.9] },
      { location: "Norway", period: "1800s", form: "ski", script: "ski", context: "Recreational skiing develops", color: "#3b4a5a", coordinates: [10.8, 59.9] },
      { location: "England", period: "1880s", form: "ski", context: "British tourists discover Norwegian skiing", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Alps", period: "1900s", form: "ski", context: "Alpine skiing develops, keeps Norwegian name", color: "#4a5568", coordinates: [7.7, 46.6] },
      { location: "Global", period: "present", form: "ski", context: "Winter sport industry", coordinates: [0, 45] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/ʂiː/", text: "ski", lang: "no" },
      { label: "English", ipa: "/skiː/", text: "ski", lang: "en" }
    ],
    relatives: [
      { word: "sled", language: "Dutch", connection: "another snow transport word", available: false },
      { word: "fjord", language: "Norwegian", connection: "another Norwegian landscape word", available: false },
      { word: "sauna", language: "Finnish", connection: "another Nordic word for winter tradition", available: false }
    ],
    meaningNow: "Skiing is now synonymous with wealth and leisure: ski chalets, ski trips, ski season. The survival skill became a status symbol.\n\nBut the Norwegian word remembers older meanings: a piece of wood that let you move through snow, a technology so essential it didn't need explaining. The stick of wood became an industry."
  },
  {
    slug: "fjord",
    word: "fjord",
    romanization: "fjord",
    language: "Norwegian from Old Norse",
    hook: "The Norwegian word for a drowned valley became the world's word for glacial inlets.",
    story: [
      "Fjord comes from Old Norse fjörðr, related to words for 'going' or 'passing' — a place where you could pass through the mountains to the sea. These deep, glacially carved inlets were essential to Norwegian life: highways, harbors, homes.",
      "When geologists needed a term for these specific landforms — steep-sided, U-shaped valleys flooded by the sea — they used the Norwegian word. No other language had a term for something so specifically Scandinavian.",
      "Fjords exist elsewhere (New Zealand, Chile, Canada), but the Norwegian word applies to all of them. The landscape named itself in Norwegian, and the name traveled wherever the landscape type was found.",
      "Today 'fjord' evokes dramatic scenery: cruise ships in Norway, hiking in New Zealand, dramatic photos of anywhere steep cliffs meet deep water. The Norwegian utility word became a tourism brand."
    ],
    journey: [
      { location: "Norway", period: "ancient", form: "fjörðr", script: "fjörðr", context: "Old Norse for glacial inlet", color: "#3b4a5a", coordinates: [7, 62] },
      { location: "Scandinavia", period: "medieval", form: "fjord", context: "Norwegian geography shapes the word", color: "#3b4a5a", coordinates: [10.8, 59.9] },
      { location: "European geology", period: "1800s", form: "fjord", script: "fjord", context: "Geologists adopt as technical term", color: "#4a5568", coordinates: [0, 51] },
      { location: "Global", period: "present", form: "fjord", context: "Any glacially carved inlet worldwide", coordinates: [0, 45] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/fjuːr/", text: "fjord", lang: "no" },
      { label: "English", ipa: "/fjɔːrd/", text: "fjord", lang: "en" }
    ],
    relatives: [
      { word: "ski", language: "Norwegian", connection: "another Norwegian word in English", available: true, slug: "ski" },
      { word: "firth", language: "Scottish", connection: "related word, same root, different geography", available: false },
      { word: "inlet", language: "English", connection: "native equivalent, less specific", available: false }
    ],
    meaningNow: "The fjord has become a tourism icon: Norwegian fjord cruises are bucket-list items. The word now connotes drama and beauty rather than practical geography.\n\nBut for Norwegians, fjords were highways: the only way to travel in a land of mountains. The scenic destination was once just the way home."
  }
];
