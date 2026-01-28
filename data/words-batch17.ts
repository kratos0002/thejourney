import type { Word } from "./word-types";

export const batch17: Word[] = [
  {
    slug: "slalom",
    word: "slalaam",
    romanization: "slalaam",
    language: "Norwegian",
    hook: "Norwegian farmers racing downhill between obstacles gave skiing its most thrilling word.",
    story: [
      "In the steep valleys of Morgedal, Norway, farmers needed to descend snow-covered slopes while avoiding rocks, trees, and other hazards. They developed a technique of weaving between obstacles, calling it slalaam in their dialect - combining sla (sloping) and laam (track or trail). This wasn't sport; it was survival, a practical skill for navigating treacherous winter terrain.",
      "When skiing transformed from transportation to recreation in the late 19th century, this weaving technique became formalized competition. The first organized slalom race took place in 1922 in Murren, Switzerland, arranged by British skiing pioneer Arnold Lunn. He set up flags as gates that skiers had to navigate, turning the Norwegian farmers' obstacle-avoidance into timed sport.",
      "The word spread with alpine skiing's popularity. Slalom became one of skiing's core disciplines, joined by giant slalom and super-G. The Norwegian dialect term now appears in every Winter Olympics broadcast, every ski resort trail map, every sporting goods store selling slalom skis.",
      "Beyond skiing, slalom escaped into general English. We speak of slaloming through traffic, slaloming between obstacles in any context. The Norwegian farmers' practical word for getting downhill safely became a metaphor for any skillful navigation through difficulties."
    ],
    journey: [
      { location: "Morgedal, Norway", period: "1800s", form: "slalaam", context: "Farmers develop technique for steep descents", color: "#2d5a8a", coordinates: [8.5, 59.5] },
      { location: "Norway", period: "1860s", form: "slalom", context: "Skiing becomes recreational sport", color: "#2d5a8a", coordinates: [10.8, 59.9] },
      { location: "Murren, Switzerland", period: "1922", form: "slalom", script: "slalom", context: "First organized slalom race", color: "#4a5568", coordinates: [7.9, 46.6] },
      { location: "Global", period: "present", form: "slalom", context: "Olympic discipline and everyday metaphor", coordinates: [0, 45] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/ˈslɑːlɑm/", text: "slalom", lang: "no" },
      { label: "English", ipa: "/ˈslɑː.ləm/", text: "slalom", lang: "en" },
      { label: "German", ipa: "/ˈslaːlom/", text: "Slalom", lang: "de" }
    ],
    relatives: [
      { word: "ski", language: "Norwegian", connection: "the sport that carries slalom", available: true, slug: "ski" },
      { word: "fjord", language: "Norwegian", connection: "another Norwegian landscape word", available: true, slug: "fjord" },
      { word: "mogul", language: "Norwegian", connection: "ski bump, from mugge (heap)", available: false }
    ],
    meaningNow: "Slalom captures something essential about Norwegian culture: the practical wisdom of people who learned to thrive in harsh terrain. What began as farmers getting safely downhill became Olympic gold medals and metaphorical language.\n\nThe word's journey from dialect to global vocabulary mirrors skiing's transformation from necessity to luxury. Norwegian farmers couldn't have imagined slalom courses at exclusive resorts, but their word for navigating obstacles endures - both on the slopes and in everyday speech about any challenging path."
  },
  {
    slug: "tundra",
    word: "tundra",
    romanization: "tundra",
    language: "Russian (from Sami)",
    hook: "The Sami people's word for their treeless homeland named a biome that circles the globe.",
    story: [
      "The Sami people have inhabited the Arctic regions of Scandinavia for thousands of years. In Kildin Sami, tundar means 'treeless plain' - an apt description of the vast, frozen landscape above the tree line where the Sami herded reindeer and hunted. Russian explorers encountered this word and adapted it as tundra to describe the ecosystems they found across Siberia.",
      "From Russian, the word entered scientific vocabulary in the 18th and 19th centuries as naturalists began systematically classifying Earth's biomes. Tundra became the official term for ecosystems characterized by permafrost, minimal trees, and specialized cold-adapted plants and animals. The Sami description of their home became a technical category.",
      "The word traveled wherever scientists found similar landscapes: Arctic Alaska, northern Canada, Antarctic islands, high mountain plateaus. Any treeless, frozen plain could be called tundra, extending the Sami word far beyond its original geography.",
      "Climate change has given tundra new urgency. As permafrost thaws, the tundra releases stored carbon, potentially accelerating warming. The Sami word for cold, stable ground now names a landscape in crisis - the treeless plain that might not remain so."
    ],
    journey: [
      { location: "Sami homeland", period: "ancient", form: "tundar", context: "Sami word for treeless plain", color: "#4a7c7c", coordinates: [25, 69] },
      { location: "Russia", period: "1700s", form: "tundra", script: "tundra", context: "Russian adoption from Sami", color: "#2d5a8a", coordinates: [100, 65] },
      { location: "Europe", period: "1800s", form: "tundra", context: "Scientific classification of biome", color: "#4a5568", coordinates: [10, 52] },
      { location: "Global", period: "present", form: "tundra", context: "Names Arctic and alpine ecosystems worldwide", coordinates: [0, 70] }
    ],
    sounds: [
      { label: "Kildin Sami", ipa: "/tundar/", text: "tundar", lang: "sjd" },
      { label: "Russian", ipa: "/ˈtundrə/", text: "tundra", lang: "ru" },
      { label: "English", ipa: "/ˈtʌn.drə/", text: "tundra", lang: "en" }
    ],
    relatives: [
      { word: "taiga", language: "Russian", connection: "adjacent biome, forested rather than treeless", available: false },
      { word: "reindeer", language: "Old Norse", connection: "the animal the Sami herded on the tundra", available: true, slug: "reindeer" },
      { word: "permafrost", language: "English", connection: "the frozen ground that defines tundra", available: false }
    ],
    meaningNow: "Tundra represents one of the few Sami words to enter global vocabulary, carrying indigenous knowledge into scientific discourse. The people who knew this landscape intimately named it accurately: treeless plain.\n\nToday the word appears in climate reports and environmental policy. The tundra is thawing, and with it the stability the Sami word implied. The treeless plain that has been frozen for millennia now makes headlines. The Sami gave us the word; climate change may change its meaning."
  },
  {
    slug: "lemming",
    word: "lemming",
    romanization: "lemming",
    language: "Norwegian",
    hook: "A small Arctic rodent became a symbol of blind conformity - based on a myth that was itself a kind of mass delusion.",
    story: [
      "The Norwegian lemming (Lemmus lemmus) is a small rodent of Scandinavian tundra and mountains. The Norwegian word lemming may derive from Old Norse, possibly related to words for 'barking' (describing their vocalizations) or simply be of unknown origin. For centuries, Scandinavians noticed something strange: lemming populations would explode, then crash, with dead lemmings appearing everywhere.",
      "Medieval Norwegians developed an explanation: lemmings must fall from the sky during storms, then die when the weather cleared. This 'sky rodent' theory persisted for centuries. Later observers proposed another myth: that lemmings commit mass suicide by marching into the sea. This idea took hold in popular imagination, making lemmings symbols of mindless self-destruction.",
      "The 1958 Disney documentary 'White Wilderness' cemented the suicide myth by staging footage of lemmings plunging off cliffs - actually thrown by filmmakers. The fake documentary won an Academy Award and embedded the false belief deeper into culture. Scientists knew better: lemmings simply experience boom-bust population cycles and sometimes drown while migrating across water.",
      "The word 'lemming' escaped its zoological meaning entirely. By the late 20th century, calling someone a 'lemming' meant they followed others blindly, even to their destruction. The Norwegian rodent's name became a political insult, a business criticism, a cultural metaphor - all based on a lie that people believed because others believed it."
    ],
    journey: [
      { location: "Scandinavia", period: "ancient", form: "lemming", context: "Norwegian name for Arctic rodent", color: "#2d5a8a", coordinates: [10, 62] },
      { location: "Norway", period: "medieval", form: "lemming", script: "lemming", context: "Myths develop about falling from sky", color: "#2d5a8a", coordinates: [8, 60] },
      { location: "Hollywood", period: "1958", form: "lemming", context: "Disney film stages mass suicide footage", color: "#c41e3a", coordinates: [-118.2, 34.1] },
      { location: "Global", period: "present", form: "lemming", context: "Metaphor for blind conformity", coordinates: [0, 40] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/ˈlɛmɪŋ/", text: "lemming", lang: "no" },
      { label: "English", ipa: "/ˈlem.ɪŋ/", text: "lemming", lang: "en" },
      { label: "German", ipa: "/ˈlɛmɪŋ/", text: "Lemming", lang: "de" }
    ],
    relatives: [
      { word: "tundra", language: "Russian/Sami", connection: "the biome where lemmings live", available: true, slug: "tundra" },
      { word: "reindeer", language: "Old Norse", connection: "another Arctic animal from Norse", available: true, slug: "reindeer" },
      { word: "sheeple", language: "English", connection: "similar metaphor for blind followers", available: false }
    ],
    meaningNow: "The lemming's story is a parable about how myths spread. A Norwegian rodent with ordinary population cycles became a symbol of mass suicide based on false beliefs - and people accepted that symbol without questioning it, like lemmings following each other off a cliff.\n\nThe irony is perfect: calling someone a lemming for blindly following others relies on a belief that people accepted by blindly following others. The Norwegian word for a small Arctic creature now names a human tendency, though the animal itself is innocent of the behavior we attribute to it."
  },
  {
    slug: "walrus",
    word: "hvalros",
    romanization: "hvalros",
    language: "Dutch (from Old Norse)",
    hook: "Vikings called it 'whale-horse' - and that strange compound traveled through Dutch to name the Arctic's mustachioed giant.",
    story: [
      "Old Norse combined hvalr (whale) and hross (horse) to create hvalross or hrosshvalr - 'whale-horse' - describing the massive marine mammal with its horse-like face. The name captured the walrus's strangeness: too big for land, too horse-faced for the sea, belonging to both worlds and neither.",
      "Dutch whalers and traders encountered walruses in their Arctic expeditions and adopted the Norse term as walrus or walros. From Dutch, the word entered English in the early 18th century. The valuable ivory of walrus tusks drove European interest in these animals, and the word followed the trade.",
      "The walrus was worth naming because it was worth hunting. Walrus ivory competed with elephant ivory for centuries; walrus hide made superior leather for machinery belts; walrus oil lit lamps. Every part had value, and the Viking name accompanied each product south.",
      "Today walruses face new threats: climate change melts the sea ice they depend on, forcing them onto crowded beaches where stampedes kill calves. The whale-horse that Vikings named now struggles to survive in a warming world. The word persists; the animal's future is uncertain."
    ],
    journey: [
      { location: "Scandinavia", period: "Viking Age", form: "hvalross", context: "Old Norse 'whale-horse' for the animal", color: "#2d5a8a", coordinates: [10, 62] },
      { location: "Netherlands", period: "1600s", form: "walrus", script: "walrus", context: "Dutch whalers adopt Norse word", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "England", period: "1728", form: "walrus", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "walrus", context: "Standard zoological name", coordinates: [0, 70] }
    ],
    sounds: [
      { label: "Old Norse", ipa: "/ˈhvalˌros/", text: "hvalross", lang: "non" },
      { label: "Dutch", ipa: "/ˈʋɑlrʏs/", text: "walrus", lang: "nl" },
      { label: "English", ipa: "/ˈwɔːl.rəs/", text: "walrus", lang: "en" }
    ],
    relatives: [
      { word: "narwhal", language: "Old Norse", connection: "another Norse-named Arctic marine mammal", available: true, slug: "narwhal" },
      { word: "whale", language: "Old English", connection: "the first element of the compound", available: false },
      { word: "morse", language: "Russian/Sami", connection: "alternate name from northern peoples", available: false }
    ],
    meaningNow: "Walrus preserves Viking perception: these massive creatures seemed like impossible hybrids, whales with horse faces hauled onto ice. The compound word 'whale-horse' captures the same wonder we feel watching walruses today.\n\nThe word has become cultural shorthand for mustachioed dignity. The Beatles sang 'I Am the Walrus'; walrus mustaches name a facial hair style; the animal appears in children's books and conservation campaigns. The Viking whale-horse swam from Arctic seas into global imagination."
  },
  {
    slug: "narwhal",
    word: "nahvalr",
    romanization: "nahvalr",
    language: "Old Norse",
    hook: "Vikings saw corpses floating in the sea and named a living creature after death - the 'corpse whale' became the unicorn of the ocean.",
    story: [
      "Old Norse combined nar (corpse) and hvalr (whale) to name the narwhal - literally 'corpse whale.' The mottled gray-white coloring of narwhals resembled drowned bodies, and these Arctic whales were often found floating at the surface. Vikings named what they saw: a whale colored like death.",
      "But it was the tusk that made narwhals famous far beyond Scandinavia. Male narwhals grow a single spiraling tusk up to ten feet long - actually an elongated tooth. Medieval Europeans who encountered these tusks believed they came from unicorns. Narwhal ivory sold for many times its weight in gold, treasured for supposed magical properties.",
      "Thrones were made from narwhal tusks; they were carved into drinking cups said to neutralize poison; they became scepters and sword hilts. The 'alicorn' or unicorn horn was one of the most valuable substances in medieval Europe - and it came from an Arctic whale named for corpses.",
      "When naturalists finally identified narwhal tusks as whale teeth in the 17th century, the unicorn myth collapsed but the fascination endured. The narwhal's tusk remains mysterious: scientists still debate its function, from sensing to fighting to attracting mates. The corpse whale keeps its secrets."
    ],
    journey: [
      { location: "Arctic Scandinavia", period: "Viking Age", form: "nahvalr", context: "Old Norse 'corpse whale'", color: "#2d5a8a", coordinates: [20, 70] },
      { location: "Medieval Europe", period: "1000-1600", form: "narwhal", script: "narwhal", context: "Tusks sold as unicorn horns", color: "#4a5568", coordinates: [10, 50] },
      { location: "England", period: "1650s", form: "narwhal", context: "Naturalists identify the whale", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "narwhal", context: "Called 'unicorn of the sea'", coordinates: [0, 70] }
    ],
    sounds: [
      { label: "Old Norse", ipa: "/ˈnaːrˌhvalr/", text: "nahvalr", lang: "non" },
      { label: "English", ipa: "/ˈnɑːr.wəl/", text: "narwhal", lang: "en" },
      { label: "Danish", ipa: "/ˈnɑːʁval/", text: "narhval", lang: "da" }
    ],
    relatives: [
      { word: "walrus", language: "Old Norse", connection: "another Norse-named Arctic mammal", available: true, slug: "walrus" },
      { word: "whale", language: "Old English", connection: "the second element of the compound", available: false },
      { word: "unicorn", language: "Latin", connection: "the creature narwhals were mistaken for", available: false }
    ],
    meaningNow: "Narwhal carries layers of meaning: Viking death-naming, medieval unicorn fantasies, modern conservation concern. The corpse whale that made kings believe in magic now faces threats from the same warming that affects all Arctic life.\n\nThe tusk that fooled Europe into believing in unicorns still inspires wonder. Narwhals are called 'unicorns of the sea' - we've traded one myth for another, replacing magic horns with magical creatures. The Norse corpse whale refuses to be ordinary."
  },
  {
    slug: "reindeer",
    word: "hreindyri",
    romanization: "hreindyri",
    language: "Old Norse",
    hook: "The name means 'horned animal' - as if no other creature had antlers worth mentioning.",
    story: [
      "Old Norse hreinn meant 'reindeer' specifically, but the word connects to a broader Germanic root meaning 'horn' or 'horned.' Combined with dyr (animal), hreindyri simply meant 'the horned animal' - a name that elevated this particular creature above all other antlered species. To Norse speakers, when you said 'horned animal,' you meant reindeer.",
      "The reindeer was essential to Arctic survival. Sami and other northern peoples domesticated reindeer thousands of years ago, using them for food, clothing, shelter, and transportation. Wild reindeer (caribou in North America) provided the same resources to hunting cultures. No other animal mattered as much in the far north.",
      "The English word 'reindeer' comes from Old Norse through medieval contact, likely via the Viking settlements in Britain. The word arrived before the animal: reindeer aren't native to Britain, so English speakers learned the Norse name from descriptions, trade goods, and tales before seeing the creature itself.",
      "The association with Christmas came much later - Clement Clarke Moore's 1823 poem 'A Visit from St. Nicholas' gave Santa eight flying reindeer. The Norse horned animal that sustained Arctic peoples became magical transportation for a gift-giving saint. The word's journey from survival to fantasy took a thousand years."
    ],
    journey: [
      { location: "Scandinavia", period: "ancient", form: "hreinn", context: "Old Norse word meaning 'horned animal'", color: "#2d5a8a", coordinates: [15, 65] },
      { location: "Britain", period: "medieval", form: "reindeer", script: "reindeer", context: "Norse word enters English", color: "#4a5568", coordinates: [-1, 54] },
      { location: "North America", period: "1823", form: "reindeer", context: "Christmas poem creates flying reindeer myth", color: "#c41e3a", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "reindeer", context: "Zoological name and Christmas symbol", coordinates: [0, 60] }
    ],
    sounds: [
      { label: "Old Norse", ipa: "/ˈhrɛinˌdyri/", text: "hreindyri", lang: "non" },
      { label: "English", ipa: "/ˈreɪn.dɪər/", text: "reindeer", lang: "en" },
      { label: "Norwegian", ipa: "/ˈræɪnˌsdiːr/", text: "reinsdyr", lang: "no" }
    ],
    relatives: [
      { word: "caribou", language: "Mi'kmaq", connection: "North American name for wild reindeer", available: false },
      { word: "tundra", language: "Russian/Sami", connection: "the biome reindeer inhabit", available: true, slug: "tundra" },
      { word: "deer", language: "Old English", connection: "related animal and word", available: false }
    ],
    meaningNow: "Reindeer demonstrates how essential animals earn simple, powerful names. The horned animal - as if no other mattered. For Arctic peoples, no other did.\n\nThe Christmas transformation added new meaning without erasing the old. Sami still herd reindeer across northern Scandinavia; caribou still migrate across Arctic tundra; and every December, flying reindeer pull a magical sleigh. The Norse horned animal carries both burdens: survival and fantasy, necessity and myth."
  },
  {
    slug: "tungsten",
    word: "tungsten",
    romanization: "tungsten",
    language: "Swedish",
    hook: "Swedish miners named it 'heavy stone' - now it lights our bulbs and hardens our tools.",
    story: [
      "Swedish miners in the 18th century noticed a heavy mineral that interfered with tin smelting. They called it tungsten - from tung (heavy) and sten (stone). The heavy stone was a nuisance, contaminating tin ore and frustrating refiners. But what seemed like worthless weight held remarkable properties.",
      "In 1783, Spanish chemists Juan Jose and Fausto Elhuyar isolated the metal element from tungsten ore. They called it wolfram, from the German name for the ore (Wolframit). This dual naming persists: the element's chemical symbol is W (for wolfram), but English speakers call it tungsten, preserving the Swedish miners' complaint about the heavy stone.",
      "Tungsten's properties proved extraordinary: the highest melting point of any metal, extreme hardness, and density rivaling gold. When Thomas Edison needed a filament that wouldn't burn out, tungsten eventually provided the solution. The heavy stone that ruined tin smelting now lit the world.",
      "Today tungsten appears in light bulbs, cutting tools, military armor, and jewelry. The heavy stone has become essential to industrial civilization. The Swedish miners' frustrated name for contaminated ore labels one of the most useful elements we know."
    ],
    journey: [
      { location: "Sweden", period: "1750s", form: "tungsten", script: "tungsten", context: "Swedish miners name 'heavy stone'", color: "#2d5a8a", coordinates: [18.1, 59.3] },
      { location: "Spain", period: "1783", form: "wolfram/tungsten", context: "Elhuyar brothers isolate the element", color: "#8b5a2b", coordinates: [-3.7, 40.4] },
      { location: "United States", period: "1904", form: "tungsten", context: "Tungsten filaments revolutionize light bulbs", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "tungsten", context: "Essential industrial metal", coordinates: [0, 40] }
    ],
    sounds: [
      { label: "Swedish", ipa: "/ˈtɵŋˌsteːn/", text: "tungsten", lang: "sv" },
      { label: "English", ipa: "/ˈtʌŋ.stən/", text: "tungsten", lang: "en" },
      { label: "German (alternate)", ipa: "/ˈvɔlfram/", text: "Wolfram", lang: "de" }
    ],
    relatives: [
      { word: "cobalt", language: "German", connection: "another metal named by frustrated miners", available: false },
      { word: "nickel", language: "German", connection: "metal named for a troublesome spirit", available: false },
      { word: "ski", language: "Norwegian", connection: "another Scandinavian word gone global", available: true, slug: "ski" }
    ],
    meaningNow: "Tungsten shows how names born from frustration can outlive their original context. Swedish miners cursing the heavy stone that ruined their work accidentally named an element that would transform technology.\n\nThe element bears two names globally: tungsten in English and other languages, Wolfram (symbol W) in chemistry and German-speaking countries. Both names carry miners' complaints - tungsten for heaviness, Wolfram from 'wolf foam' describing how it 'devoured' tin. The heavy stone that caused problems became the solution to many more."
  },
  {
    slug: "kraken",
    word: "kraken",
    romanization: "kraken",
    language: "Norwegian",
    hook: "Sailors' nightmares of giant tentacles reaching from the deep gave Scandinavian waters their most terrifying word.",
    story: [
      "Norwegian and Swedish sailors told tales of a creature so vast it could be mistaken for an island - until it moved. The kraken, described in Scandinavian folklore since at least the 13th century, was said to drag ships beneath the waves with massive tentacles. The word kraken may relate to Norwegian words for twisted or bent, describing the writhing arms of this sea monster.",
      "In 1752, Erik Pontoppidan, Bishop of Bergen, included detailed descriptions of the kraken in his Natural History of Norway. He claimed the creature was real, citing multiple sailor accounts. His work brought the kraken from Scandinavian folklore into broader European awareness, mixing genuine reports of giant squid with mythological elaboration.",
      "The kraken proved real - sort of. Giant squid (Architeuthis dux) can reach 43 feet, with tentacles that could indeed seem monstrous to sailors in small boats. Colossal squid are even larger. The mythological kraken found its zoological counterpart, though the real animals lack the island-sized bodies of legend.",
      "The word kraken has become standard English for any legendary sea monster. 'Release the Kraken!' entered popular culture through film; kraken appear in games, novels, and corporate names. The Norwegian sailors' nightmare swam from the cold Atlantic into global imagination."
    ],
    journey: [
      { location: "Scandinavian seas", period: "medieval", form: "kraken", context: "Norwegian sailors describe sea monster", color: "#2d5a8a", coordinates: [5, 62] },
      { location: "Norway", period: "1752", form: "kraken", script: "kraken", context: "Bishop Pontoppidan publishes descriptions", color: "#2d5a8a", coordinates: [5.3, 60.4] },
      { location: "England", period: "1830", form: "kraken", context: "Tennyson's poem spreads the word", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "kraken", context: "Standard word for giant sea monsters", coordinates: [0, 40] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/ˈkrɑːkən/", text: "kraken", lang: "no" },
      { label: "English", ipa: "/ˈkreɪ.kən/", text: "kraken", lang: "en" },
      { label: "Swedish", ipa: "/ˈkrɑːkɛn/", text: "kraken", lang: "sv" }
    ],
    relatives: [
      { word: "leviathan", language: "Hebrew", connection: "biblical sea monster, parallel concept", available: false },
      { word: "fjord", language: "Norwegian", connection: "another Norwegian word for Nordic geography", available: true, slug: "fjord" },
      { word: "geyser", language: "Icelandic", connection: "another Nordic natural phenomenon word", available: true, slug: "geyser" }
    ],
    meaningNow: "The kraken represents the sea's power to generate myth. Sailors facing real dangers - storms, rocks, giant squid - created a creature that embodied everything terrifying about the deep. The Norwegian word for that fear became universal.\n\nModern use keeps the kraken alive as symbol rather than belief. We 'release the kraken' in movies and sports arenas, invoke it for powerful forces unleashed. The Norwegian sailors' monster evolved from genuine fear to cultural metaphor, but the word still carries something of that original dread - the deep hiding creatures we cannot imagine."
  },
  {
    slug: "ransack",
    word: "rannsaka",
    romanization: "rannsaka",
    language: "Old Norse",
    hook: "Vikings invented a word for house-searching that still describes the chaos they left behind.",
    story: [
      "Old Norse rannsaka combined rann (house) and saka (to seek or search). The word originally meant simply to search a house - a legal procedure for finding stolen goods or evidence. In the context of Viking raids, however, house-searching took on more violent meanings. When Vikings ransacked a village, they weren't following legal procedures.",
      "The word entered English during the period of Norse influence in Britain, roughly 800-1100 CE. English adopted many Old Norse words, particularly in the Danelaw regions of northern and eastern England. Ransack survived while other Norse legal terms faded, perhaps because the violent association remained vivid.",
      "The meaning shifted over time. What began as 'search thoroughly' became 'plunder' and 'destroy while searching.' The original sense of systematic investigation gave way to chaotic destruction. A ransacked room today suggests violent disorder, not methodical inspection.",
      "Modern English uses ransack almost exclusively for destructive searching - burglars ransack homes, investigators ransack records. The clinical Norse legal term became a word for violation. The house-searching that Vikings did left a vocabulary mark as lasting as their raids."
    ],
    journey: [
      { location: "Scandinavia", period: "Viking Age", form: "rannsaka", context: "Old Norse 'to search a house'", color: "#2d5a8a", coordinates: [10, 60] },
      { location: "Britain (Danelaw)", period: "800-1100", form: "ransacken", script: "ransacken", context: "Norse word enters English", color: "#4a5568", coordinates: [0, 54] },
      { location: "England", period: "medieval", form: "ransack", context: "Meaning shifts to plunder", color: "#4a5568", coordinates: [-1, 52] },
      { location: "Global English", period: "present", form: "ransack", context: "Destructive searching", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Old Norse", ipa: "/ˈranːsaka/", text: "rannsaka", lang: "non" },
      { label: "Middle English", ipa: "/ranˈsakən/", text: "ransacken", lang: "enm" },
      { label: "Modern English", ipa: "/ˈræn.sæk/", text: "ransack", lang: "en" }
    ],
    relatives: [
      { word: "sake", language: "Old Norse", connection: "the 'seek' element (for the sake of)", available: false },
      { word: "plunder", language: "German", connection: "similar meaning, different origin", available: false },
      { word: "walrus", language: "Old Norse", connection: "another Norse word in English", available: true, slug: "walrus" }
    ],
    meaningNow: "Ransack preserves Viking presence in English vocabulary. The legal term for house-searching became permanently associated with the chaos of raids, transforming a neutral procedure word into something violent.\n\nThe word's evolution mirrors how we remember Vikings: not for their legal procedures, trade networks, or cultural achievements, but for the destruction. Ransack lost its original meaning and kept its fearsome associations. When we say a place was ransacked, we echo the aftermath of raids that ended a thousand years ago."
  },
  {
    slug: "mink",
    word: "mink",
    romanization: "mink",
    language: "Swedish/Scandinavian",
    hook: "A Scandinavian word for a small predator became synonymous with luxury - and later, controversy.",
    story: [
      "The word mink comes from Swedish, where it named the small, sleek predators hunting along Scandinavian waterways. Related words appear across Scandinavian languages - Danish and Norwegian mink, possibly connected to words meaning 'small' or derived from the animal's Finnish name minkki. The animal was valued for its dense, water-resistant fur long before it became big business.",
      "Commercial mink farming began in the late 19th century, first in North America using the American mink species, then spreading globally. The Scandinavian word traveled with the industry. By the 20th century, 'mink' meant more than the animal - it meant the ultimate luxury fur, symbol of Hollywood glamour and old-money elegance.",
      "The industry that made mink famous also made it controversial. Animal rights movements targeted mink farms; environmental concerns arose when escaped farm mink devastated native wildlife. Denmark, the world's largest mink producer, culled its entire population during a 2020 disease outbreak, killing 17 million animals.",
      "The word carries all these meanings now: the original animal, the luxury product, the industrial farming, the ethical debates. A Scandinavian word for a small river predator became shorthand for everything complicated about human relationships with animals and luxury."
    ],
    journey: [
      { location: "Scandinavia", period: "ancient", form: "mink", context: "Swedish name for the animal", color: "#2d5a8a", coordinates: [15, 60] },
      { location: "North America", period: "1880s", form: "mink", script: "mink", context: "Commercial mink farming begins", color: "#4a5568", coordinates: [-90, 45] },
      { location: "Global", period: "1900s", form: "mink", context: "Mink coats become luxury symbol", color: "#8b5a2b", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "mink", context: "Luxury, controversy, and conservation", coordinates: [0, 50] }
    ],
    sounds: [
      { label: "Swedish", ipa: "/mɪŋk/", text: "mink", lang: "sv" },
      { label: "English", ipa: "/mɪŋk/", text: "mink", lang: "en" },
      { label: "Danish", ipa: "/meŋɡ/", text: "mink", lang: "da" }
    ],
    relatives: [
      { word: "ermine", language: "Old French", connection: "another small predator valued for fur", available: false },
      { word: "sable", language: "Slavic", connection: "another luxury fur word from northern Europe", available: false },
      { word: "lemming", language: "Norwegian", connection: "another Scandinavian animal word", available: true, slug: "lemming" }
    ],
    meaningNow: "Mink shows how a simple animal name can accumulate cultural weight. The Scandinavian word for a small predator became loaded with associations: glamour, cruelty, environmental damage, disease.\n\nThe word appears in luxury marketing and animal rights protests, fashion magazines and scientific papers about invasive species. A mink coat means wealth; a mink farm means controversy; wild mink mean healthy (or threatened) ecosystems. The Scandinavian animal name now names a whole complex of human concerns about how we use other species."
  }
];
