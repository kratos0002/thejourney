import type { Word } from "./word-types";

export const newWordsBatch8: Word[] = [
  {
    slug: "vodka",
    word: "водка",
    romanization: "vodka",
    language: "Russian",
    hook: "The Slavic diminutive of 'water' became the world's most neutral spirit.",
    story: [
      "In Russian, voda (вода) means 'water.' Vodka (водка) is the diminutive: 'little water.' The name is either affectionate or ironic — this 'little water' is anything but gentle.",
      "The origins are disputed: Poland and Russia both claim to have invented vodka. The earliest recorded use of the word is from a 1405 Polish document. Whatever its birth country, vodka spread through Eastern Europe as the people's drink.",
      "Unlike whiskey or brandy, vodka was defined by its neutrality — pure alcohol and water, with as little taste as possible. This neutrality made it the perfect base for cocktails when it reached the West after World War II.",
      "The Moscow Mule (1940s), the Vodka Martini (James Bond), the Cosmopolitan (1990s) — American cocktail culture transformed the Russian peasant drink into a global phenomenon. The 'little water' conquered the world."
    ],
    journey: [
      { location: "Russia/Poland", period: "1400s", form: "водка/wódka", script: "водка", context: "Slavic grain spirit, diminutive of water", color: "#3b4a5a", coordinates: [37.6, 55.8] },
      { location: "Russia", period: "1700s", form: "vodka", context: "Peter the Great's court popularizes", color: "#3b4a5a", coordinates: [30.3, 59.9] },
      { location: "Soviet Union", period: "1900s", form: "vodka", context: "State monopoly, national drink", color: "#3b4a5a", coordinates: [37.6, 55.8] },
      { location: "United States", period: "1950s", form: "vodka", script: "vodka", context: "Smirnoff markets to Americans", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "vodka", context: "World's most consumed spirit", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Russian", ipa: "/ˈvotkə/", text: "водка", lang: "ru" },
      { label: "English", ipa: "/ˈvɒdkə/", text: "vodka", lang: "en" }
    ],
    relatives: [
      { word: "whiskey", language: "Irish", connection: "another 'water of life' spirit", available: true, slug: "whiskey" },
      { word: "voda", language: "Slavic", connection: "water: the root word", available: false },
      { word: "aquavit", language: "Scandinavian", connection: "another 'water of life' spirit", available: false }
    ],
    meaningNow: "Vodka conquered the world by being nothing. Unlike whiskey's complexity or rum's sweetness, vodka's virtue is absence — it's the spirit that doesn't interfere.\n\nThe Russian 'little water' became the foundation of global cocktail culture. Every vodka tonic carries a Slavic diminutive: water made strong, then made friendly."
  },
  {
    slug: "mammoth",
    word: "мамонт",
    romanization: "mamont",
    language: "Russian from Siberian languages",
    hook: "The word for a prehistoric giant came from Siberian hunters who found frozen carcasses.",
    story: [
      "When Russian explorers pushed into Siberia, they encountered indigenous peoples who knew of enormous tusks and sometimes whole carcasses emerging from the permafrost. These peoples had various names for the creatures; the Russians heard something like 'mammont.'",
      "The origin is debated: it may come from Mansi mang ont ('earth horn') or from a Yakut word. What's certain is that Siberians knew about these frozen giants long before European science did.",
      "By the 1700s, 'mammoth' had entered European languages. When naturalists realized the tusks came from extinct elephants, the word was already established. 'Mammoth' became both the scientific name and a popular term for anything enormous.",
      "Today 'mammoth' is an adjective: a mammoth task, mammoth undertaking. The prehistoric animal gave its name to any oversized challenge — appropriate for a creature that could weigh 12 tons."
    ],
    journey: [
      { location: "Siberia", period: "ancient", form: "various", context: "Indigenous names for frozen elephant carcasses", color: "#3b4a5a", coordinates: [104, 62] },
      { location: "Russia", period: "1600s", form: "мамонт", script: "мамонт", context: "Russian explorers adopt indigenous term", color: "#3b4a5a", coordinates: [104, 62] },
      { location: "Western Europe", period: "1706", form: "mammoth", script: "mammoth", context: "First English scientific usage", color: "#4a5568", coordinates: [0, 51] },
      { location: "Global", period: "present", form: "mammoth", context: "Both prehistoric animal and adjective for huge", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Russian", ipa: "/ˈmamɐnt/", text: "мамонт", lang: "ru" },
      { label: "English", ipa: "/ˈmæm.əθ/", text: "mammoth", lang: "en" }
    ],
    relatives: [
      { word: "mastodon", language: "Greek", connection: "another extinct elephant, Greek name", available: false },
      { word: "elephant", language: "Greek/Latin", connection: "living relative", available: false },
      { word: "behemoth", language: "Hebrew", connection: "another word for enormous (biblical)", available: false }
    ],
    meaningNow: "'Mammoth' has grown beyond its zoological meaning. We describe tasks, projects, and problems as mammoth — anything too big to easily handle.\n\nThe word carries ice age cold: something from deep time, preserved in permafrost and language. Siberian hunters who found frozen giants gave us our word for the overwhelming."
  },
  {
    slug: "tsar",
    word: "царь",
    romanization: "tsar",
    language: "Russian from Latin via Greek",
    hook: "The Russian emperor's title was just 'Caesar' with a Slavic accent.",
    story: [
      "Tsar (царь) is simply the Russian form of 'Caesar' — borrowed via Byzantine Greek kaisar. When Ivan III married the last Byzantine emperor's niece and claimed his imperial legacy, the title came with the package.",
      "Ivan IV ('the Terrible') was the first Russian ruler to officially crown himself Tsar in 1547. The title linked Russia to both Roman and Byzantine imperial traditions — a claim to world-historical significance.",
      "The word entered English as 'czar' or 'tsar' (both spellings exist), initially just describing Russian emperors. But after the Russian Revolution ended the Romanov dynasty, 'tsar' found new life as a metaphor.",
      "American English now uses 'czar' for any powerful appointed position: drug czar, energy czar, COVID czar. The imperial title became a job description — unlimited authority over a specific domain."
    ],
    journey: [
      { location: "Rome", period: "ancient", form: "Caesar", script: "Caesar", context: "Roman imperial title", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Byzantium", period: "medieval", form: "kaisar", context: "Byzantine Greek form", color: "#5c5a4a", coordinates: [29, 41] },
      { location: "Russia", period: "1547", form: "царь", script: "царь", context: "Ivan IV crowned first Tsar", color: "#3b4a5a", coordinates: [37.6, 55.8] },
      { location: "England", period: "1550s", form: "czar/tsar", script: "czar", context: "English adopts for Russian emperors", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1930s+", form: "czar", context: "Metaphor for any powerful appointee", color: "#4a5568", coordinates: [-77, 38.9] }
    ],
    sounds: [
      { label: "Russian", ipa: "/tsarʲ/", text: "царь", lang: "ru" },
      { label: "English", ipa: "/zɑːr/", text: "czar", lang: "en" }
    ],
    relatives: [
      { word: "kaiser", language: "German", connection: "same origin: German form of Caesar", available: false },
      { word: "Caesar", language: "Latin", connection: "the original imperial title", available: false },
      { word: "khan", language: "Mongolic", connection: "another imperial title borrowed into English", available: true, slug: "khan" }
    ],
    meaningNow: "The Russian Empire fell in 1917, but 'czar' lives on in American government. Every administration has czars: officials with broad mandates and (supposedly) the power to get things done.\n\nThe word still implies autocratic authority — that's the point. When you need to cut through bureaucracy, you appoint a czar. Caesar would understand."
  },
  {
    slug: "khaki",
    word: "खाकी",
    romanization: "khākī",
    language: "Urdu/Persian",
    hook: "The color of dust became the color of empire.",
    story: [
      "In Persian and Urdu, khākī (خاکی) means 'dusty' or 'dust-colored,' from khāk meaning 'dust' or 'earth.' The color of the ground became the color of military uniforms that needed to blend with it.",
      "British soldiers in India discovered that their bright red coats made excellent targets. In the 1840s, regiments began dyeing their uniforms khaki — the color of Indian dust. The Punjab Irregular Force adopted khaki officially in 1848.",
      "The Boer War (1899-1902) proved khaki's value: British soldiers in red were slaughtered, while those in khaki survived. By World War I, khaki was standard for British forces. The American military followed.",
      "Today 'khaki' means both the color and the cotton twill fabric used for casual pants. The dust of India became the color of Saturday errands — a military necessity transformed into weekend casual."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "خاکی", script: "خاکی", context: "Persian for dust-colored", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "India", period: "1840s", form: "खाकी", context: "British Indian Army adopts for camouflage", color: "#9b4a2c", coordinates: [73.1, 31.5] },
      { location: "South Africa", period: "1899", form: "khaki", context: "Boer War proves khaki's value", color: "#8b5a2b", coordinates: [28, -26.2] },
      { location: "England", period: "1900s", form: "khaki", script: "khaki", context: "Standard military color", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "khaki", context: "Casual pants, military wear", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Urdu", ipa: "/ˈkʰɑːkiː/", text: "खाकी", lang: "ur" },
      { label: "English", ipa: "/ˈkɑːki/", text: "khaki", lang: "en" }
    ],
    relatives: [
      { word: "thug", language: "Hindi", connection: "another colonial-era Hindi borrowing", available: true, slug: "thug" },
      { word: "jungle", language: "Hindi", connection: "another word for Indian terrain", available: true, slug: "jungle" },
      { word: "drab", language: "English", connection: "another dull military color", available: false }
    ],
    meaningNow: "Khaki pants are now the uniform of American casual: Dockers, business casual, dad style. The military camouflage became the color of conformity.\n\nThe word remembers its dusty origin: khaki is the color of the earth, designed to make soldiers invisible against it. Now it makes office workers invisible against cubicle walls."
  },
  {
    slug: "dinghy",
    word: "डिंगी",
    romanization: "ḍiṅgī",
    language: "Hindi/Bengali",
    hook: "The Bengali riverboat became every yacht's tender.",
    story: [
      "In Bengali and Hindi, ḍiṅgī (डिंगी) describes a small rowboat — the kind used on rivers throughout India for fishing, ferrying, and transport. British colonial sailors encountered these small craft and borrowed the name.",
      "By the early 19th century, 'dinghy' had entered naval vocabulary for any small ship's boat — the tender used to shuttle between ship and shore. The Indian riverboat became a nautical universal.",
      "The word expanded further: inflatable dinghies for emergencies, sailing dinghies for recreation, rubber dinghies for rafting. The original wooden Bengali boat spawned a family of small watercraft.",
      "Today a 'dinghy' can be anything from a tiny inflatable to a competitive racing sailboat. The word kept its meaning (small boat) while losing its geographic specificity. Bengal's rivers became the world's harbors."
    ],
    journey: [
      { location: "Bengal", period: "ancient", form: "डिंगी", script: "ডিঙ্গি", context: "Bengali/Hindi small rowboat", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "British India", period: "1700s", form: "dinghy", context: "British sailors adopt the term", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "British Navy", period: "1810", form: "dinghy", script: "dinghy", context: "First recorded English usage", color: "#4a5568", coordinates: [-4.5, 50.4] },
      { location: "Global", period: "present", form: "dinghy", context: "Any small boat, yacht tender, sailing class", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Hindi/Bengali", ipa: "/ˈɖɪŋɡiː/", text: "ḍiṅgī", lang: "hi" },
      { label: "English", ipa: "/ˈdɪŋ.ɡi/", text: "dinghy", lang: "en" }
    ],
    relatives: [
      { word: "catamaran", language: "Tamil", connection: "another Indian boat word in English", available: true, slug: "catamaran" },
      { word: "canoe", language: "Taíno", connection: "another indigenous small boat word", available: true, slug: "canoe" },
      { word: "sampan", language: "Chinese", connection: "another Asian small boat", available: false }
    ],
    meaningNow: "The dinghy has become essential to yacht culture — the tender that takes you from mooring to shore. Olympic sailing has dinghy classes.\n\nBut the word comes from Bengal's rivers, where small boats were working vessels, not luxury accessories. The colonial borrowing transformed a utilitarian craft into a recreational one."
  },
  {
    slug: "pundit",
    word: "पण्डित",
    romanization: "paṇḍit",
    language: "Sanskrit/Hindi",
    hook: "The Sanskrit word for 'learned one' became English's word for TV commentators.",
    story: [
      "In Sanskrit, paṇḍita (पण्डित) means 'learned' or 'wise,' from the root paṇḍ ('to know'). A pandit was traditionally a scholar of Hindu philosophy, law, and scripture — a religious and intellectual authority.",
      "British colonizers encountered pandits as scholars, teachers, and advisors. The word entered English in the 17th century, initially referring specifically to Hindu learned men. Gradually, it generalized to any expert.",
      "By the 20th century, 'pundit' had lost its specifically Indian meaning. A pundit became any supposed expert — especially one who offers opinions on TV. The religious scholar became the talking head.",
      "The transformation is telling: from lifetime learning to instant expertise, from spiritual authority to media commentator. The pundit's fall mirrors our changed relationship with knowledge."
    ],
    journey: [
      { location: "India", period: "ancient", form: "पण्डित", script: "पण्डित", context: "Sanskrit for learned scholar", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "British India", period: "1600s", form: "pandit", context: "British encounter Hindu scholars", color: "#9b4a2c", coordinates: [73, 19] },
      { location: "England", period: "1672", form: "pundit", script: "pundit", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1900s", form: "pundit", context: "Generalizes to any expert commentator", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "pundit", context: "Media expert, talking head", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/ˈpəɳɖɪt/", text: "paṇḍit", lang: "sa" },
      { label: "English", ipa: "/ˈpʌn.dɪt/", text: "pundit", lang: "en" }
    ],
    relatives: [
      { word: "guru", language: "Sanskrit", connection: "another Sanskrit word for teacher", available: true, slug: "guru" },
      { word: "expert", language: "Latin", connection: "Western equivalent", available: false },
      { word: "Brahmin", language: "Sanskrit", connection: "priest caste, pandits often from", available: false }
    ],
    meaningNow: "'Pundit' now appears in 'punditry' — the practice of giving confident opinions about everything. Cable news is full of pundits.\n\nThe irony is that a Sanskrit pandit earned the title through decades of study, while a modern pundit earns it by being available for the 6 o'clock segment. The word remembers what expertise used to mean."
  },
  {
    slug: "mogul",
    word: "مغول",
    romanization: "mughal",
    language: "Persian from Mongol",
    hook: "The Mongol emperors of India became Wall Street's word for titans of industry.",
    story: [
      "The Mughal Empire (1526-1857) ruled most of the Indian subcontinent. 'Mughal' is the Persian form of 'Mongol' — the dynasty claimed descent from Genghis Khan through Timur (Tamerlane).",
      "British colonizers used 'mogul' (their spelling of Mughal) to describe the emperors of this fabulously wealthy dynasty. The Taj Mahal was a Mughal creation. The word became synonymous with power, wealth, and splendor.",
      "By the 19th century, 'mogul' had jumped from Indian history to business metaphor. American industrialists were called 'moguls' — the Carnegies and Rockefellers who ruled economic empires. The Mongol emperor became a metaphor for American capitalists.",
      "Today we have media moguls, tech moguls, real estate moguls. The word implies not just wealth but control — an empire of one's own domain. Genghis Khan's descendants became Donald Trump's ancestors (linguistically speaking)."
    ],
    journey: [
      { location: "Mongolia", period: "1200s", form: "Mongol", context: "Mongol conquests under Genghis Khan", color: "#4a3b6b", coordinates: [104, 47.9] },
      { location: "Persia", period: "1300s", form: "مغول", script: "مغول", context: "Persian form of Mongol", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "India", period: "1526+", form: "Mughal", context: "Mughal Empire founded by Babur", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "England", period: "1580s", form: "mogul", script: "mogul", context: "English describes Indian emperors", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1800s+", form: "mogul", context: "Business titan metaphor", color: "#4a5568", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Persian", ipa: "/moˈɣul/", text: "mughal", lang: "fa" },
      { label: "English", ipa: "/ˈmoʊ.ɡəl/", text: "mogul", lang: "en" }
    ],
    relatives: [
      { word: "khan", language: "Mongol", connection: "Mongol title, Mughal ancestors", available: true, slug: "khan" },
      { word: "tycoon", language: "Japanese", connection: "parallel business titan word", available: true, slug: "tycoon" },
      { word: "magnate", language: "Latin", connection: "Western equivalent for powerful person", available: false }
    ],
    meaningNow: "Hollywood has moguls, Silicon Valley has moguls, every industry has its moguls. The word implies empire-building: not just rich, but commanding.\n\nThe connection to actual Mughals is lost on most users. But the word carries imperial weight: a mogul rules a domain. From Babur's conquests to Rupert Murdoch's acquisitions, the mogul commands."
  },
  {
    slug: "horde",
    word: "орда",
    romanization: "orda",
    language: "Turkic/Mongol via Russian",
    hook: "The Mongol word for 'camp' became English's word for overwhelming masses.",
    story: [
      "In Turkic and Mongol, orda (орда) meant a camp or mobile dwelling — specifically the royal camp of a khan. The 'Golden Horde' was not a mob but the royal court of Batu Khan, Genghis Khan's grandson.",
      "Russian encountered the word during the Mongol conquest and used 'Orda' for the Mongol political entities that ruled over Russian lands. The administrative camp became synonymous with the Mongol threat.",
      "When 'horde' entered English in the 16th century, the political meaning was already shifting to demographic. A 'horde' became any large, disorganized mass of people — especially invaders or enemies. The royal camp became a mob.",
      "Today 'horde' is purely negative: zombie hordes, barbarian hordes, hordes of tourists. The word implies overwhelming numbers without organization. The khan's royal court became a mass to be feared."
    ],
    journey: [
      { location: "Mongol Empire", period: "1200s", form: "orda", context: "Turkic/Mongol for royal camp", color: "#4a3b6b", coordinates: [100, 45] },
      { location: "Golden Horde", period: "1240+", form: "Orda", context: "Mongol khanate ruling Russia", color: "#4a3b6b", coordinates: [50, 48] },
      { location: "Russia", period: "medieval", form: "орда", script: "орда", context: "Russian borrowing for Mongol states", color: "#3b4a5a", coordinates: [37.6, 55.8] },
      { location: "England", period: "1550s", form: "horde", script: "horde", context: "English adopts for large groups", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "horde", context: "Large disorganized mass, especially threatening", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Turkic/Russian", ipa: "/ɐrˈda/", text: "орда", lang: "ru" },
      { label: "English", ipa: "/hɔːrd/", text: "horde", lang: "en" }
    ],
    relatives: [
      { word: "khan", language: "Mongol", connection: "Mongol ruler, whose camp was the orda", available: true, slug: "khan" },
      { word: "mob", language: "Latin", connection: "English equivalent for disorganized mass", available: false },
      { word: "swarm", language: "English", connection: "similar overwhelming number metaphor", available: false }
    ],
    meaningNow: "The transformation is complete: from royal camp to zombie mob. 'Horde' now implies threat through numbers — mindless masses overwhelming civilization.\n\nBut the Golden Horde was anything but mindless: it was a sophisticated political entity that ruled Russia for centuries. The word 'horde' carries our fear of being outnumbered — and our amnesia about the Mongol civilization that coined it."
  },
  {
    slug: "klutz",
    word: "קלאָץ",
    romanization: "klots",
    language: "Yiddish from German",
    hook: "The Yiddish word for a wooden block became American slang for a clumsy person.",
    story: [
      "In Yiddish, klots (קלאָץ) means a wooden block or log — borrowed from German Klotz (same meaning). A klots is something heavy, awkward, unfinished. Calling someone a klots compared them to a graceless chunk of wood.",
      "Jewish immigrants brought 'klutz' to America in the late 19th century. Unlike some Yiddish words that stayed within Jewish communities, 'klutz' quickly spread to general American English. It was too useful not to share.",
      "The word fills a gap: English has 'clumsy' and 'awkward,' but 'klutz' is a noun — you ARE a klutz, not just act clumsily. It's an identity, not just a description. The wooden block becomes a personality type.",
      "Today 'klutzy' is an adjective, 'klutziness' a condition. The Yiddish insult has been fully domesticated, appearing in everything from romantic comedies to self-deprecating Instagram captions."
    ],
    journey: [
      { location: "German-speaking Europe", period: "medieval", form: "Klotz", context: "German for wooden block", color: "#4a5568", coordinates: [10, 51] },
      { location: "Eastern Europe", period: "1700s", form: "קלאָץ", script: "קלאָץ", context: "Yiddish adopts as insult for clumsy person", color: "#4a5568", coordinates: [21, 52.2] },
      { location: "New York", period: "1890s+", form: "klutz", script: "klutz", context: "Yiddish immigrants bring to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "United States", period: "1960s+", form: "klutz", context: "Enters general American vocabulary", color: "#4a5568", coordinates: [-118, 34] },
      { location: "Global", period: "present", form: "klutz", context: "Universal term for clumsy person", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Yiddish", ipa: "/klʊts/", text: "klutz", lang: "yi" },
      { label: "English", ipa: "/klʌts/", text: "klutz", lang: "en" }
    ],
    relatives: [
      { word: "schmuck", language: "Yiddish", connection: "another Yiddish insult in American English", available: true, slug: "schmuck" },
      { word: "chutzpah", language: "Yiddish", connection: "another Yiddish word Americans adopted", available: true, slug: "chutzpah" },
      { word: "butterfingers", language: "English", connection: "native English equivalent", available: false }
    ],
    meaningNow: "'Klutz' has become almost endearing — a self-deprecating way to explain dropping things or tripping over nothing. 'I'm such a klutz!' is a humble-brag about being charmingly imperfect.\n\nThe word has lost its edge: being called a wooden block was an insult in Yiddish, but being called a klutz in American English is almost cute. The graceless block became the adorable mess."
  },
  {
    slug: "mensch",
    word: "מענטש",
    romanization: "mentsh",
    language: "Yiddish from German",
    hook: "A person of integrity — Yiddish gave English its word for 'a real human being.'",
    story: [
      "In German, Mensch simply means 'person' or 'human being.' But Yiddish transformed it: a mentsh (מענטש) became something aspirational — a person of integrity, decency, and honor. Not just a human, but a full human.",
      "The distinction is philosophical: anyone is a person, but not everyone is a mensch. A mensch keeps their word, helps others, acts with dignity. The word contains a whole ethical system: what it means to be truly human.",
      "Jewish immigrants brought this concept to America. 'Mensch' entered American English as the highest compliment: 'He's a real mensch.' It fills a gap — English lacks a single word for 'person of admirable character.'",
      "The word spread beyond Jewish communities because it named something people needed to name. Everyone knows mensches, and everyone knows people who aren't. The Yiddish word made the distinction speakable."
    ],
    journey: [
      { location: "German-speaking Europe", period: "medieval", form: "Mensch", context: "German for person, human being", color: "#4a5568", coordinates: [10, 51] },
      { location: "Eastern Europe", period: "1700s", form: "מענטש", script: "מענטש", context: "Yiddish elevates to ethical concept", color: "#4a5568", coordinates: [21, 52.2] },
      { location: "New York", period: "1890s+", form: "mensch", context: "Yiddish immigrants bring to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "United States", period: "1950s+", form: "mensch", script: "mensch", context: "Enters general American vocabulary", color: "#4a5568", coordinates: [-118, 34] },
      { location: "Global", period: "present", form: "mensch", context: "Person of integrity, highest compliment", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Yiddish", ipa: "/mɛntʃ/", text: "mensch", lang: "yi" },
      { label: "English", ipa: "/mɛntʃ/", text: "mensch", lang: "en" }
    ],
    relatives: [
      { word: "schmuck", language: "Yiddish", connection: "the opposite of a mensch", available: true, slug: "schmuck" },
      { word: "chutzpah", language: "Yiddish", connection: "another Yiddish character concept", available: true, slug: "chutzpah" },
      { word: "gentleman", language: "English", connection: "similar ideal, different emphasis", available: false }
    ],
    meaningNow: "To call someone a mensch is to offer the highest praise: they are fully human in the best sense. Not perfect — no one is perfect — but decent, honorable, reliable.\n\nThe word carries a philosophy: that being human is an achievement, not just a biological fact. You become a mensch through your actions. Yiddish gave English an ethical aspiration in a single word."
  }
];
