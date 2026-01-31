import type { Word } from "./word-types";

export const batch21: Word[] = [
  {
    slug: "salary",
    word: "salarium",
    romanization: "salarium",
    language: "Latin",
    hook: "Roman soldiers were paid in salt—or at least that's what the word remembers.",
    story: [
      "The Latin word salarium derives from sal, meaning salt. The common story is that Roman soldiers received part of their pay in salt, but the truth is more nuanced. What's certain is that salt was so valuable in the ancient world that it shaped economies, trade routes, and language itself.",
      "Roman soldiers received a salarium—an allowance specifically for purchasing salt, which was essential for preserving food in an era without refrigeration. Salt was currency before currency existed. Wars were fought over salt deposits. Cities were built where salt was found. The Via Salaria, one of Rome's oldest roads, was the salt road connecting the capital to the Adriatic coast.",
      "As Latin evolved into the Romance languages, salarium became salaire in French, salario in Spanish and Italian. English borrowed salary through Anglo-Norman French in the 1200s. By then, the salt connection was already fading—salary just meant regular payment for work.",
      "The word preserves an economic truth that predates coinage: before gold, before silver, before cryptocurrency, the most valuable substance on earth was the white crystal that kept meat from rotting. Every paycheck carries this memory."
    ],
    journey: [
      { location: "Rome", period: "~300 BCE", form: "salarium", script: "salarium", context: "Salt allowance for soldiers", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Via Salaria", period: "~200 BCE", form: "sal", script: "sal", context: "Ancient salt trade road to Adriatic", color: "#5c5a4a", coordinates: [13.5, 42.5] },
      { location: "Paris", period: "1200s", form: "salaire", script: "salaire", context: "Old French regular payment", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1300s", form: "salary", script: "salary", context: "Anglo-Norman into Middle English", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "salary", context: "Universal term for employment compensation", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Latin", ipa: "/saˈlaː.ri.um/", text: "salarium", lang: "la" },
      { label: "English", ipa: "/ˈsæl.ə.ɹi/", text: "salary", lang: "en" }
    ],
    relatives: [
      { word: "salt", language: "English", connection: "from same Proto-Indo-European root *sal-", available: false },
      { word: "salad", language: "English", connection: "from Latin salata—salted vegetables", available: false },
      { word: "sauce", language: "English", connection: "from Latin salsa—salted", available: false },
      { word: "soldier", language: "English", connection: "from solidus—Roman gold coin also used for pay", available: false }
    ],
    meaningNow: "We still say someone is \"worth their salt\" and describe reliable people as \"the salt of the earth.\" The mineral that once built empires now sits in a shaker on every table, nearly worthless.\n\nBut every two weeks, when money appears in your account, the word salary remembers when payment meant survival—not in the abstract way money means survival now, but literally: without salt, your food rotted and you starved."
  },
  {
    slug: "magazine",
    word: "مخزن",
    romanization: "makhzan",
    language: "Arabic",
    hook: "A word that traveled from Arab storehouses to ammunition dumps to the reading material in your dentist's waiting room.",
    story: [
      "In Arabic, makhzan (مخزن) means a storehouse or warehouse—from the root kh-z-n, to store up. The plural, makhāzin, described the great storage depots of the medieval Islamic world where merchants kept goods, armies kept weapons, and ports kept cargo.",
      "European traders in the Mediterranean borrowed the word. In Italian it became magazzino, in French magasin. A magasin was any place where things were stored—and by extension, a shop (which is still what magasin means in French today).",
      "The military borrowed it next. A magazine became the part of a gun where ammunition is stored, and the room in a fort where gunpowder was kept. Then in 1731, a London publisher named Edward Cave launched The Gentleman's Magazine—calling it a 'magazine' because it was a storehouse of information, a warehouse of articles.",
      "That metaphor stuck. Now the word's most common meaning—a periodical publication—is its most distant from the original. An Arab warehouse became an English publication, with a gun part somewhere in between."
    ],
    journey: [
      { location: "Baghdad", period: "~800 CE", form: "makhzan", script: "مخزن", context: "Storehouse warehouse depot", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Venice", period: "1300s", form: "magazzino", script: "magazzino", context: "Italian merchant warehouses", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Paris", period: "1400s", form: "magasin", script: "magasin", context: "French storehouse then shop", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1731", form: "magazine", script: "magazine", context: "Gentleman's Magazine storehouse of knowledge", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "magazine", context: "Periodical publication and gun component", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/ˈmax.zan/", text: "مخزن", lang: "ar" },
      { label: "French", ipa: "/ma.ɡa.zɛ̃/", text: "magasin", lang: "fr" },
      { label: "English", ipa: "/ˌmæɡ.əˈziːn/", text: "magazine", lang: "en" }
    ],
    relatives: [
      { word: "magasin", language: "French", connection: "shop—preserved the storage meaning", available: false },
      { word: "arsenal", language: "English", connection: "another Arabic word for a storage place—dār aṣ-ṣināʿa", available: false },
      { word: "bazaar", language: "English", connection: "another Middle Eastern word for commerce spaces", available: true, slug: "bazaar" },
      { word: "tariff", language: "English", connection: "Arabic trade vocabulary that entered European languages", available: true, slug: "tariff" }
    ],
    meaningNow: "The word magazine contains three completely different objects—a warehouse, a gun part, and a glossy publication—all sharing a single etymological thread: storage.\n\nIn French, you still go to the magasin to buy groceries. In English, the same word sits on a coffee table. The storehouse metaphor proved so flexible it could hold anything: grain, gunpowder, or gossip."
  },
  {
    slug: "typhus",
    word: "τῦφος",
    romanization: "typhos",
    language: "Ancient Greek",
    hook: "The Greeks named the disease after smoke—because the fever made your mind cloudy.",
    story: [
      "In Ancient Greek, typhos (τῦφος) meant smoke, vapor, or stupor—the haze that obscures clear thinking. Hippocrates used it to describe the mental fog that accompanied certain fevers: patients became delirious, confused, lost in a smoke of their own burning body.",
      "The word remained in medical Latin for centuries as a descriptor for fever with delirium. In 1759, French physician François Boissier de Sauvages formally named the disease typhus, drawing on the ancient Greek metaphor. The connection was precise: typhus patients burned with high fever and drifted in and out of consciousness, as if lost in smoke.",
      "Typhus ravaged armies more than battles did. Napoleon's invasion of Russia in 1812 killed more soldiers through typhus than through combat. The disease shaped history: it turned campaigns, emptied cities, and decided wars. It was the invisible general.",
      "When a similar but distinct fever was identified in the 1800s, it was called typhoid—'typhus-like'—because the delirium resembled typhus. Two different diseases, both named after Greek smoke, both clouding the mind the same way."
    ],
    journey: [
      { location: "Athens", period: "~400 BCE", form: "typhos", script: "τῦφος", context: "Hippocratic medical term smoke stupor", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~100 CE", form: "typhus", script: "typhus", context: "Latin medical texts preserve the term", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Montpellier", period: "1759", form: "typhus", script: "typhus", context: "Sauvages formally names the disease", color: "#4a5568", coordinates: [3.9, 43.6] },
      { location: "Moscow", period: "1812", form: "typhus", context: "Kills more of Napoleon's army than Russian winter", color: "#6b2d3d", coordinates: [37.6, 55.8] },
      { location: "Global", period: "present", form: "typhus", context: "Still endemic in some regions lice-borne", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/tŷː.pʰos/", text: "τῦφος", lang: "el" },
      { label: "English", ipa: "/ˈtaɪ.fəs/", text: "typhus", lang: "en" }
    ],
    relatives: [
      { word: "typhoid", language: "English", connection: "typhus-like—named for similar delirium", available: false },
      { word: "typhoon", language: "English", connection: "possibly related Greek root Typhōn—destructive wind", available: true, slug: "typhoon" },
      { word: "chaos", language: "English", connection: "another Greek word for disorder entering medicine and science", available: true, slug: "chaos" }
    ],
    meaningNow: "We now know typhus is caused by Rickettsia bacteria transmitted by lice, fleas, and mites. The smoke metaphor was replaced by microscopes and antibiotics.\n\nBut the ancient Greeks were onto something: fever does create a kind of internal smoke, a clouding of consciousness that feels like being lost in fog. The word captures the patient's experience—not the pathogen's mechanism—and sometimes that's the more honest description."
  },
  {
    slug: "veranda",
    word: "varanda",
    romanization: "varanda",
    language: "Portuguese from Hindi/Bengali",
    hook: "A word that circled the tropics—from India to Portugal to every colonial bungalow on earth.",
    story: [
      "The origins of veranda are debated, but most linguists trace it to the Hindi-Urdu baraṇḍā (बरण्डा) or Bengali bārāndā—a roofed terrace or open gallery attached to a house. Some suggest a deeper root in the Portuguese varanda, meaning railing or balustrade. The truth may be that both languages contributed, the word ping-ponging between colonizer and colonized.",
      "Portuguese traders in India adopted the word in the 1500s—or perhaps brought their own version and it merged with the local one. Either way, varanda described something essential in tropical architecture: a covered outdoor space that provided shade from brutal sun while catching whatever breeze existed.",
      "The British inherited the word when they inherited India. Veranda became a defining feature of colonial architecture from Calcutta to Cape Town to Queensland. Every British officer's bungalow had one. The veranda was where empire happened—where tea was served, where business was conducted, where the ruling class performed leisure.",
      "The word spread to every European language and every tropical colony. American English adopted it for the wide porches of Southern plantation houses. The architectural feature and the word both served the same purpose: managing heat, which is the oldest human design problem."
    ],
    journey: [
      { location: "India", period: "ancient", form: "baraṇḍā", script: "बरण्डा", context: "Hindi roofed terrace gallery", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Goa", period: "1500s", form: "varanda", script: "varanda", context: "Portuguese adopt or merge with local word", color: "#8b5a2b", coordinates: [73.9, 15.5] },
      { location: "Calcutta", period: "1700s", form: "verandah", script: "verandah", context: "British colonial architecture staple", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "Sydney", period: "1800s", form: "verandah", script: "verandah", context: "Australian colonial architecture", color: "#2d4a3b", coordinates: [151.2, -33.9] },
      { location: "Global", period: "present", form: "veranda", context: "Universal architectural term for covered porch", coordinates: [-80, 32.8] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/bə.rəɳ.ɖaː/", text: "बरण्डा", lang: "hi" },
      { label: "Portuguese", ipa: "/vɐ.ˈɾɐ̃.dɐ/", text: "varanda", lang: "pt" },
      { label: "English", ipa: "/vəˈɹæn.də/", text: "veranda", lang: "en" }
    ],
    relatives: [
      { word: "bungalow", language: "English", connection: "from Bengali bāṅglā—another Indian architectural loanword", available: true, slug: "bungalow" },
      { word: "pajamas", language: "English", connection: "another Hindi word for domestic comfort adopted by colonizers", available: true, slug: "pajamas" },
      { word: "patio", language: "English", connection: "from Spanish—similar outdoor living space, different climate", available: false }
    ],
    meaningNow: "The veranda is enjoying a renaissance. After decades of being replaced by air conditioning and sealed houses, architects are rediscovering that a covered outdoor space solves problems no technology can: it connects you to the world while protecting you from it.\n\nThe word reminds us that the best design ideas often come from the places with the hardest conditions. India's heat gave the world the veranda. The word just followed the architecture."
  },
  {
    slug: "pedigree",
    word: "pied de grue",
    romanization: "pied de grue",
    language: "Anglo-Norman French",
    hook: "A crane's foot became the symbol for family lineage—because medieval genealogy charts looked like bird tracks.",
    story: [
      "In medieval manuscripts, genealogists drew family trees using branching lines that connected parents to children. These three-pronged marks—a line splitting into two or three—looked remarkably like the footprint of a crane. Scribes began calling the symbol a pied de grue: a crane's foot.",
      "The phrase entered Anglo-Norman French as pe de grue, then was anglicized through centuries of mangled pronunciation into the unrecognizable pedigree. By the 1400s, the crane's foot was forgotten entirely. Pedigree just meant lineage, ancestry, a record of descent.",
      "The word found its most precise use in animal breeding. Pedigree dogs, pedigree horses, pedigree cattle—animals whose ancestry was documented and pure. The implication shifted from 'recorded lineage' to 'prestigious lineage'—having a pedigree meant having good blood.",
      "This is one of English's most dramatic transformations: a bird's foot sketch became a marker of aristocratic worth. The scribes who first drew those branching lines couldn't have imagined that their shorthand would become shorthand for social class."
    ],
    journey: [
      { location: "France", period: "~1200s", form: "pied de grue", context: "Crane's foot genealogy symbol in manuscripts", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1300s", form: "pe de grue", context: "Anglo-Norman heraldic term", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "England", period: "1400s", form: "pedigree", script: "pedigree", context: "Anglicized into modern form", color: "#4a5568", coordinates: [-1.3, 51.8] },
      { location: "England", period: "1600s", form: "pedigree", context: "Applied to animal breeding lineage records", color: "#4a5568", coordinates: [-1.5, 52.5] },
      { location: "Global", period: "present", form: "pedigree", context: "Ancestry prestige breeding quality", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Anglo-Norman", ipa: "/pje də ɡɾy/", text: "pied de grue", lang: "fr" },
      { label: "English", ipa: "/ˈpɛd.ɪ.ɡɹiː/", text: "pedigree", lang: "en" }
    ],
    relatives: [
      { word: "crane", language: "English", connection: "the bird whose foot inspired the symbol", available: false },
      { word: "genealogy", language: "English", connection: "from Greek—the study pedigree charts serve", available: false },
      { word: "lineage", language: "English", connection: "from Latin linea—another word for family descent", available: false }
    ],
    meaningNow: "We use pedigree casually now—a school's academic pedigree, a company's pedigree in the industry. The word has floated free of both cranes and bloodlines.\n\nBut the original image is perfect: a family tree really does look like a bird's foot, branching outward from a single point. The medieval scribes saw something true. They just didn't expect their doodle to become a class system."
  },
  {
    slug: "kiosk",
    word: "köşk",
    romanization: "köşk",
    language: "Turkish from Persian",
    hook: "Ottoman garden pavilions shrank into newspaper stands and ATM enclosures.",
    story: [
      "In Persian, kūshk meant an open-sided pavilion or summer house—an airy structure in a garden where royalty could enjoy shade and breeze. The Ottomans borrowed it as köşk and built these elegant structures throughout their empire: graceful pavilions in palace gardens where sultans received visitors, drank sherbet, and watched the Bosphorus.",
      "French travelers to Constantinople were enchanted by these structures and brought the word home as kiosque. In 18th-century Paris, a kiosque became a small ornamental pavilion in a public garden—still elegant, but already shrinking from palatial to decorative.",
      "Then the word shrank further. By the 1800s, a kiosk in European cities was a small roofed stand where newspapers, flowers, or refreshments were sold. The open-sided garden pavilion had become a commercial booth. The sultan's summer house had become a newsstand.",
      "Today a kiosk can be an ATM enclosure, an airport check-in terminal, or a touchscreen ordering station at a fast-food restaurant. Each generation has made the word smaller, more functional, less beautiful. The trajectory from palace garden to airport terminal is the trajectory of modernity itself."
    ],
    journey: [
      { location: "Persia", period: "~600 CE", form: "kūshk", script: "کوشک", context: "Royal garden pavilion summer house", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Istanbul", period: "1400s", form: "köşk", script: "köşk", context: "Ottoman palace garden pavilions", color: "#6b2d3d", coordinates: [29, 41] },
      { location: "Paris", period: "1700s", form: "kiosque", script: "kiosque", context: "Ornamental garden structure", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1800s", form: "kiosk", script: "kiosk", context: "Newspaper and refreshment stands", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "kiosk", context: "Self-service terminals touchscreens ATMs", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Persian", ipa: "/kuːʃk/", text: "کوشک", lang: "fa" },
      { label: "Turkish", ipa: "/cøʃc/", text: "köşk", lang: "tr" },
      { label: "English", ipa: "/ˈkiː.ɒsk/", text: "kiosk", lang: "en" }
    ],
    relatives: [
      { word: "pavilion", language: "English", connection: "from Latin papilio—another garden structure word", available: false },
      { word: "divan", language: "English", connection: "another Ottoman word that shrank from council chamber to furniture", available: true, slug: "divan" },
      { word: "sofa", language: "English", connection: "from Arabic ṣuffa—another piece of Ottoman comfort vocabulary", available: true, slug: "sofa" }
    ],
    meaningNow: "The kiosk's journey from palace garden to airport terminal captures something about how borrowed words often descend the social ladder. Luxury becomes ordinary becomes invisible.\n\nNext time you tap a self-checkout screen in a plastic enclosure, remember: you're standing in a word that used to mean a summer palace where emperors watched sunsets over the Bosphorus."
  },
  {
    slug: "trek",
    word: "trek",
    romanization: "trek",
    language: "Afrikaans from Dutch",
    hook: "Boer farmers named their ox-wagon migrations—and gave English a word for any difficult journey.",
    story: [
      "In Dutch, trekken means to pull or to draw—a workhorse verb for any kind of hauling. When Dutch settlers arrived in South Africa in the 1600s, they brought the word with them. In Afrikaans, trek took on a specific and powerful meaning: a long, arduous journey by ox-wagon into unknown territory.",
      "The Great Trek of the 1830s-1840s defined the word forever. Thousands of Boer families, dissatisfied with British rule at the Cape, loaded their possessions onto wagons and migrated north into the interior. These trekkers crossed mountains, rivers, and hostile territory to establish their own republics. The trek became central to Afrikaner identity—their exodus, their founding myth.",
      "British English absorbed the word during the Boer Wars of the late 1800s. Soldiers and journalists used trek to describe any long, difficult march. The word carried the weight of the South African landscape: vast, harsh, demanding endurance.",
      "By the 20th century, trek had softened. You could trek through Nepal, trek across Europe with a backpack, or embark on a star trek. But the word still carries its Afrikaans DNA—a trek is never casual. It implies difficulty, distance, and determination. You don't trek to the corner store."
    ],
    journey: [
      { location: "Netherlands", period: "1500s", form: "trekken", script: "trekken", context: "Dutch verb to pull to draw", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "Cape Colony", period: "1600s", form: "trek", script: "trek", context: "Afrikaans ox-wagon journey migration", color: "#8b5a2b", coordinates: [18.4, -33.9] },
      { location: "South Africa interior", period: "1830s", form: "die Groot Trek", context: "Great Trek—Boer migration north", color: "#8b5a2b", coordinates: [28.2, -26.2] },
      { location: "London", period: "1890s", form: "trek", script: "trek", context: "Boer War journalism spreads word to English", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "trek", context: "Any long difficult journey Star Trek", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "Afrikaans", ipa: "/trɛk/", text: "trek", lang: "af" },
      { label: "Dutch", ipa: "/trɛk/", text: "trek", lang: "nl" },
      { label: "English", ipa: "/tɹɛk/", text: "trek", lang: "en" }
    ],
    relatives: [
      { word: "trekker", language: "Afrikaans/English", connection: "one who treks—originally Boer migrants", available: false },
      { word: "safari", language: "English", connection: "from Swahili—another Southern African word for journey", available: true, slug: "safari" },
      { word: "apartheid", language: "Afrikaans", connection: "another Afrikaans word that entered global vocabulary", available: false }
    ],
    meaningNow: "Trek has become one of the most widely borrowed Afrikaans words in English, stripped of its political history but retaining its emotional weight. When Gene Roddenberry chose Star Trek, he was reaching for exactly this connotation: a journey into the unknown that demands everything you have.\n\nThe Boer farmers pulling ox-wagons through the Drakensberg would recognize the feeling, if not the starships."
  },
  {
    slug: "cinnamon",
    word: "kinnamomon",
    romanization: "kinnamomon",
    language: "Greek from Phoenician",
    hook: "The spice that bankrolled empires—and whose origins were kept secret for two thousand years.",
    story: [
      "The Greeks called it kinnamomon (κιννάμωμον), likely borrowing from a Phoenician word, which may itself trace to Malay kayu manis—'sweet wood.' The exact chain is uncertain because the ancient spice traders deliberately obscured cinnamon's origins. Secrecy was profit.",
      "Herodotus recorded fantastical stories the traders told: cinnamon grew in a lake guarded by winged serpents, or in giant birds' nests on unreachable cliffs. These were lies designed to justify astronomical prices. In reality, cinnamon came from Sri Lanka and southern India, shipped by Arab and Phoenician middlemen who had every reason to keep the source hidden.",
      "The Portuguese reached Sri Lanka in 1505 and seized control of the cinnamon trade. The Dutch displaced them in 1658. The British displaced the Dutch in 1796. Each empire wanted the same thing: to control the source of the sweet bark. Cinnamon drove colonialism in South Asia as directly as sugar drove it in the Caribbean.",
      "The word traveled through Greek, Latin (cinnamomum), Old French (cinnamome), and into Middle English. At each stop the word softened, the mystery deepened, and the price stayed high—until modern cultivation made the once-priceless spice a two-dollar supermarket item."
    ],
    journey: [
      { location: "Sri Lanka", period: "ancient", form: "unknown", context: "Wild cinnamon bark harvested source kept secret", color: "#8b5a2b", coordinates: [80.8, 7.9] },
      { location: "Phoenicia", period: "~1000 BCE", form: "qinnamon", context: "Phoenician traders name and sell the spice", color: "#4a3b6b", coordinates: [35.5, 33.9] },
      { location: "Athens", period: "~500 BCE", form: "kinnamomon", script: "κιννάμωμον", context: "Greeks record fantastical origin stories", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~100 CE", form: "cinnamomum", script: "cinnamomum", context: "Luxury spice emperors burned at funerals", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Colombo", period: "1505", form: "canela", context: "Portuguese seize Sri Lankan cinnamon trade", color: "#8b5a2b", coordinates: [79.9, 6.9] },
      { location: "Global", period: "present", form: "cinnamon", context: "Common spice in every kitchen", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/kin.náː.moː.mon/", text: "κιννάμωμον", lang: "el" },
      { label: "English", ipa: "/ˈsɪn.ə.mən/", text: "cinnamon", lang: "en" }
    ],
    relatives: [
      { word: "cassia", language: "English", connection: "related bark often sold as cinnamon from Chinese guìzhī", available: false },
      { word: "cardamom", language: "English", connection: "another spice word from ancient trade routes", available: false },
      { word: "chocolate", language: "English", connection: "another luxury word from a distant source", available: true, slug: "chocolate" },
      { word: "lemon", language: "English", connection: "another fruit/spice word that traveled the same routes", available: true, slug: "lemon" }
    ],
    meaningNow: "Cinnamon sticks cost almost nothing now. A spice that once justified colonial conquest sits in a jar next to the sugar. The word preserves none of its former power—no hint of the empires built and broken over access to a tree's bark.\n\nBut the origin story persists: for two millennia, the most successful trade secret in history was simply where cinnamon grew. The Phoenician traders who invented those stories about winged serpents were the first viral marketers."
  },
  {
    slug: "tabby",
    word: "عتابي",
    romanization: "ʿattābī",
    language: "Arabic",
    hook: "A Baghdad neighborhood's silk became a cat's coat pattern.",
    story: [
      "In medieval Baghdad, the Attabiya quarter—named after Prince Attab of the Umayyad dynasty—was famous for producing a distinctive striped silk fabric. The cloth was called ʿattābī after the neighborhood, and it was prized across the Islamic world for its shimmering, watered-silk pattern of alternating light and dark stripes.",
      "European traders in the Mediterranean encountered this fabric and borrowed the name. In Old French it became atabis, then tabis. English adopted it as tabby, initially referring only to the silk—a 'tabby waistcoat' was a striped silk garment. Samuel Pepys mentions buying tabby fabric in his famous diary.",
      "Then came the cats. People noticed that certain domestic cats had coat patterns that resembled the striped Baghdad silk—alternating bands of light and dark fur with a distinctive moiré quality. By the 1690s, a tabby cat was any cat with this striped pattern. The fabric meaning faded; the feline meaning took over completely.",
      "This is one of etymology's most delightful journeys: a prince's name became a neighborhood, a neighborhood became a fabric, a fabric became a coat pattern, and a coat pattern became the default image conjured by the word 'cat' for millions of English speakers."
    ],
    journey: [
      { location: "Baghdad", period: "700s CE", form: "ʿattābī", script: "عتابي", context: "Attabiya quarter striped silk production", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Damascus", period: "900s", form: "ʿattābī", context: "Silk trade spreads the fabric and name", color: "#4a3b6b", coordinates: [36.3, 33.5] },
      { location: "Paris", period: "1300s", form: "tabis", script: "tabis", context: "Old French term for striped silk", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1630s", form: "tabby", script: "tabby", context: "English striped silk fabric Pepys era", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "England", period: "1690s", form: "tabby cat", context: "Transferred to cat coat pattern", color: "#4a5568", coordinates: [-1.5, 52.5] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/ʕat.taː.biː/", text: "عتابي", lang: "ar" },
      { label: "English", ipa: "/ˈtæb.i/", text: "tabby", lang: "en" }
    ],
    relatives: [
      { word: "moiré", language: "French", connection: "watered silk pattern—same visual effect as tabby fabric", available: false },
      { word: "calico", language: "English", connection: "from Calicut India—another fabric that became a cat pattern name", available: false },
      { word: "khaki", language: "English", connection: "another fabric word from the Islamic/South Asian trade world", available: true, slug: "khaki" }
    ],
    meaningNow: "Most cat owners have no idea they're naming their pet's coat after a medieval Baghdadi silk district. The word has traveled so far from its origin that the connection seems impossible—what do cats have to do with Baghdad?\n\nEverything, etymologically. The striped pattern on your cat's fur carries the memory of Abbasid silk weavers, European textile traders, and the global commerce that connected them. Your cat is wearing a word."
  },
  {
    slug: "marmalade",
    word: "marmelo",
    romanization: "marmelo",
    language: "Portuguese from Greek",
    hook: "A gift for a seasick queen became Britain's breakfast staple.",
    story: [
      "The Greeks had melimelon (μελίμηλον)—literally 'honey-apple'—their name for a quince grafted onto an apple tree. Sweet fruit, complex name. Latin simplified it to melimelum, and Portuguese transformed it into marmelo, their word for quince.",
      "The Portuguese made marmelada—a thick, solid paste of cooked quince and sugar. This wasn't the spreadable jam we know; it was dense enough to slice, packed in wooden boxes, and traded across Europe as a luxury confection. Henry VIII received a box of marmelada from Portugal as a diplomatic gift.",
      "The popular legend credits Mary Queen of Scots, who supposedly ate the preserve when seasick—'Marie est malade' becoming 'marmalade.' This story is charming and completely false. But the word did arrive in Britain from Portuguese trade, and the British transformed the recipe entirely.",
      "In the 1700s, a Dundee grocer named James Keiller reportedly acquired a load of bitter Seville oranges cheaply and his wife Janet adapted the quince marmelada recipe using oranges instead. Whether or not the legend is precisely true, marmalade shifted from solid quince paste to spreadable orange preserve—and became one of the most British foods imaginable, despite being a Portuguese word from a Greek root."
    ],
    journey: [
      { location: "Athens", period: "~300 BCE", form: "melimelon", script: "μελίμηλον", context: "Honey-apple quince variety", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~100 CE", form: "melimelum", script: "melimelum", context: "Latin simplification of Greek", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Lisbon", period: "1400s", form: "marmelada", script: "marmelada", context: "Portuguese quince paste luxury trade item", color: "#8b5a2b", coordinates: [-9.1, 38.7] },
      { location: "London", period: "1500s", form: "marmalade", script: "marmalade", context: "Diplomatic gifts quince preserve to English court", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Dundee", period: "1700s", form: "marmalade", context: "Keiller transforms into orange preserve", color: "#4a5568", coordinates: [-3, 56.5] },
      { location: "Global", period: "present", form: "marmalade", context: "Orange preserve breakfast staple Paddington Bear", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Portuguese", ipa: "/mɐɾ.mɛ.ˈla.dɐ/", text: "marmelada", lang: "pt" },
      { label: "English", ipa: "/ˈmɑː.mə.leɪd/", text: "marmalade", lang: "en" }
    ],
    relatives: [
      { word: "marmelo", language: "Portuguese", connection: "quince—the original fruit not oranges", available: false },
      { word: "melon", language: "English", connection: "from Greek mēlon apple—same root family", available: false },
      { word: "mango", language: "English", connection: "another tropical fruit word from Portuguese trade", available: true, slug: "mango" },
      { word: "papaya", language: "English", connection: "another fruit word from colonial trade routes", available: true, slug: "papaya" }
    ],
    meaningNow: "Marmalade is now so thoroughly British that it's practically a national symbol—Paddington Bear's obsession, the toast accompaniment of every English hotel breakfast. Few suspect it's a Portuguese word derived from Greek, originally made from quinces, not oranges.\n\nThe transformation is complete: a Mediterranean quince paste became an orange preserve that defines Britishness. The word changed its fruit, its texture, and its nationality—but kept its name."
  }
];
