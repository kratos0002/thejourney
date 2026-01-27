import type { Word } from "./word-types";

export const newWordsBatch11: Word[] = [
  {
    slug: "dim-sum",
    word: "\u9ede\u5fc3",
    romanization: "d\u00edm s\u0101m",
    language: "Cantonese",
    hook: "\"Touch the heart\"\u2014small dishes became the world's favorite brunch.",
    story: [
      "In Cantonese, d\u00edm s\u0101m literally means \"touch the heart\"\u2014a poetic name for small portions of food meant to lightly satisfy, not to fill. The tradition began in teahouses along the Silk Road, where travelers needed small bites to accompany their tea.",
      "Cantonese dim sum evolved into an elaborate culinary art in Guangzhou and Hong Kong. Bamboo steamers stacked high, carts wheeled between tables, diners pointing at what they wanted. The ritual of yum cha (\"drinking tea\") became inseparable from the food\u2014dim sum is as much social practice as cuisine.",
      "When Cantonese immigrants established Chinatowns around the world, dim sum followed. San Francisco, New York, London, Sydney\u2014each developed its own dim sum culture. The words entered English: dim sum for the food, yum cha for the experience.",
      "Today dim sum has transcended Chinatowns. High-end restaurants serve deconstructed har gow; frozen dim sum fills supermarket aisles. But the best dim sum is still found in noisy, crowded halls where the carts never stop rolling and the tea never stops flowing."
    ],
    journey: [
      { location: "Guangzhou", period: "10th century", form: "d\u00edm s\u0101m", script: "\u9ede\u5fc3", context: "Teahouse culture along Silk Road", color: "#2d4a3b", coordinates: [113.3, 23.1] },
      { location: "Hong Kong", period: "1900s", form: "d\u00edm s\u0101m", script: "\u9ede\u5fc3", context: "Elaborate dim sum palaces develop", color: "#2d4a3b", coordinates: [114.2, 22.3] },
      { location: "San Francisco", period: "1850s+", form: "dim sum", context: "Cantonese immigrants bring tradition", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "London", period: "1970s", form: "dim sum", context: "Spreads beyond Chinatowns", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "dim sum", context: "Sunday brunch staple worldwide", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Cantonese", ipa: "/t\u00edm s\u0250m/", text: "\u9ede\u5fc3", lang: "yue" },
      { label: "Mandarin", ipa: "/tj\u025bn\u02e7\u02e5 \u0255in\u02e5\u02e5/", text: "\u70b9\u5fc3", lang: "zh" },
      { label: "English", ipa: "/\u02ccd\u026am \u02c8s\u028cm/", text: "dim sum", lang: "en" }
    ],
    relatives: [
      { word: "yum cha", language: "Cantonese", connection: "the tea-drinking ritual that accompanies dim sum", available: false },
      { word: "har gow", language: "Cantonese", connection: "shrimp dumplings, the test of a dim sum chef", available: false },
      { word: "tofu", language: "Chinese", connection: "another Chinese food word that went global", available: true, slug: "tofu" }
    ],
    meaningNow: "Dim sum has become shorthand for communal, convivial eating\u2014the opposite of fast food's isolation. The phrase \"let's get dim sum\" implies conversation, sharing, lingering.\n\nThe name still fits: these small dishes touch the heart. Not through portion size, but through the act of reaching across the table, chopsticks meeting over a steamer basket, tea poured for others before yourself."
  },
  {
    slug: "voodoo",
    word: "vodun",
    romanization: "vodun",
    language: "Fon/Ewe (West African)",
    hook: "A sacred religion became a slur\u2014then began reclaiming its name.",
    story: [
      "Vodun is a traditional religion of the Fon and Ewe peoples of West Africa, centered in what is now Benin, Togo, and Ghana. The word means \"spirit\" or \"deity\"\u2014vodun are the divine forces that inhabit the world, intermediaries between humans and the supreme creator.",
      "When millions of West Africans were enslaved and shipped to the Americas, they carried vodun with them. In Haiti, it merged with Catholic imagery to become Vodou. In Louisiana, it became Voodoo. In Brazil, similar traditions became Candombl\u00e9. The religion survived slavery by adapting, hiding its deities behind Catholic saints.",
      "But the word voodoo became weaponized. White Americans used it to mean primitive superstition, black magic, zombies, and dolls stuck with pins. Hollywood amplified these stereotypes. \"Voodoo economics\" became an insult. The sacred was made sinister.",
      "Today, practitioners are reclaiming the word. Vodou is recognized as Haiti's official religion. Scholars distinguish between Vodun (West African), Vodou (Haitian), and Voodoo (the stereotype). The religion that survived the Middle Passage is surviving its demonization too."
    ],
    journey: [
      { location: "Benin/Togo", period: "ancient", form: "vodun", script: "vodun", context: "Traditional Fon/Ewe religion", color: "#8b5a2b", coordinates: [2.3, 6.4] },
      { location: "Haiti", period: "1600s+", form: "Vodou", context: "Syncretizes with Catholicism under slavery", color: "#6b2d3d", coordinates: [-72.3, 18.5] },
      { location: "New Orleans", period: "1700s+", form: "Voodoo", context: "Louisiana Creole practice", color: "#6b2d3d", coordinates: [-90.1, 30] },
      { location: "Hollywood", period: "1930s+", form: "voodoo", context: "Becomes horror movie stereotype", color: "#4a5568", coordinates: [-118.3, 34.1] },
      { location: "Global", period: "present", form: "Vodou/Voodoo", context: "Practitioners reclaim the tradition", coordinates: [-72.3, 18.5] }
    ],
    sounds: [
      { label: "Fon", ipa: "/vo.d\u00f9/", text: "vodun", lang: "fon" },
      { label: "Haitian Creole", ipa: "/vo.du/", text: "Vodou", lang: "ht" },
      { label: "English", ipa: "/\u02c8vu\u02d0.du\u02d0/", text: "voodoo", lang: "en" }
    ],
    relatives: [
      { word: "loa/lwa", language: "Haitian Creole", connection: "the spirits served in Vodou", available: false },
      { word: "zombie", language: "Kongo/Haitian", connection: "a Vodou concept distorted by Hollywood", available: true, slug: "zombie" },
      { word: "hoodoo", language: "African American", connection: "folk magic tradition, distinct from Vodou", available: false }
    ],
    meaningNow: "Voodoo remains one of the most misunderstood words in English. Most of what people \"know\" about it is wrong\u2014voodoo dolls are a Hollywood invention; zombies in Vodou are metaphors for slavery, not monsters.\n\nThe word's journey\u2014from sacred to slur to slow reclamation\u2014mirrors the journey of African diasporic culture itself. Every time someone uses \"voodoo\" to mean nonsense or magic, they're perpetuating a centuries-old dismissal of African religion. The word asks us to learn better."
  },
  {
    slug: "banjo",
    word: "mbanza",
    romanization: "mbanza",
    language: "Kimbundu (Angolan)",
    hook: "The enslaved brought their instruments\u2014and created American music.",
    story: [
      "The banjo's ancestors came from West Africa, where similar instruments\u2014gourd bodies, skin heads, stick necks\u2014had been played for centuries. In Kimbundu, an Angolan language, mbanza meant a stringed instrument. Similar words existed across the region: banza, banjar, banjil.",
      "Enslaved Africans in the Caribbean and American South recreated these instruments from memory and available materials. The earliest banjos were handmade: gourds, animal skins, wooden necks, gut strings. They were called banjar, banza, bangie\u2014the African words adapted to English ears.",
      "The banjo became central to African American music. It was the instrument of plantation life, of minstrel shows (where white performers in blackface appropriated and mocked Black music), of early country and folk. The five-string banjo emerged in the 1830s, combining African design with European additions.",
      "By the 20th century, the banjo was so associated with white Appalachian music that its African origins were forgotten. Only recently has the fuller history been recovered\u2014the banjo as an African instrument, carried across the Atlantic in the minds and hands of the enslaved."
    ],
    journey: [
      { location: "West Africa", period: "ancient", form: "mbanza/akonting", context: "Gourd-bodied lutes in multiple cultures", color: "#8b5a2b", coordinates: [-15, 12] },
      { location: "Angola", period: "1600s", form: "mbanza", script: "mbanza", context: "Kimbundu word for stringed instrument", color: "#8b5a2b", coordinates: [13.2, -8.8] },
      { location: "Caribbean", period: "1600s+", form: "banza/banjar", context: "Enslaved Africans recreate instruments", color: "#6b2d3d", coordinates: [-76.8, 18] },
      { location: "American South", period: "1700s", form: "banjo", context: "Becomes central to plantation music", color: "#6b2d3d", coordinates: [-79, 35] },
      { location: "Appalachia", period: "1800s+", form: "banjo", context: "Adopted into folk and country music", color: "#4a5568", coordinates: [-82, 37] },
      { location: "Global", period: "present", form: "banjo", context: "African origins rediscovered", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Kimbundu", ipa: "/\u0294m.b\u00e0n.z\u00e0/", text: "mbanza", lang: "kmb" },
      { label: "English", ipa: "/\u02c8b\u00e6n.d\u0292o\u028a/", text: "banjo", lang: "en" }
    ],
    relatives: [
      { word: "akonting", language: "Jola", connection: "Gambian lute, possible banjo ancestor", available: false },
      { word: "jazz", language: "English", connection: "genre the banjo helped create", available: true, slug: "jazz" },
      { word: "guitar", language: "Spanish", connection: "European stringed instrument with different origins", available: false }
    ],
    meaningNow: "The banjo's story is America's story: African genius, stolen labor, cultural appropriation, and slow reckoning. For decades, the banjo was a symbol of white rural America. Now Black banjo players are reclaiming the instrument their ancestors invented.\n\nEvery bluegrass riff carries Africa in its DNA. The banjo remembers what America tried to forget."
  },
  {
    slug: "polka",
    word: "polka",
    romanization: "polka",
    language: "Czech (possibly from Polish)",
    hook: "A Bohemian peasant dance conquered the ballrooms of the world.",
    story: [
      "The polka exploded out of Bohemia in the 1830s like a musical virus. The dance\u2014fast, bouncy, performed in couples\u2014supposedly originated with a peasant girl named Anna Slezak, though this may be legend. The name might come from the Czech p\u016flka (\"half,\" referring to the half-step) or from the Polish Polka (\"Polish woman\").",
      "Within a decade, polka-mania swept Europe. Paris went crazy for it in 1840. London followed. The polka became the first true dance craze\u2014everything was polka: polka hats, polka jackets, polka-dot fabric (the dots suggesting the dance's bouncy rhythm).",
      "Immigrants carried the polka to America, where it put down roots in Czech, Polish, and German communities. In Texas, it merged with Mexican conjunto music. In the Upper Midwest, it became wedding reception standard. Weird Al Yankovic made polka parodies famous.",
      "The polka never quite died. It's the national dance of the Czech Republic. It's played at Oktoberfest and quincea\u00f1eras. The peasant dance became a global folk tradition\u2014and gave us polka dots along the way."
    ],
    journey: [
      { location: "Bohemia", period: "1830s", form: "polka", script: "polka", context: "Peasant dance emerges", color: "#5c5a4a", coordinates: [14.4, 50.1] },
      { location: "Prague", period: "1835", form: "polka", context: "First public performance", color: "#5c5a4a", coordinates: [14.4, 50.1] },
      { location: "Paris", period: "1840", form: "polka", context: "Polka-mania sweeps Europe", color: "#5c5a4a", coordinates: [2.3, 48.9] },
      { location: "Texas", period: "1850s+", form: "polka", context: "Merges with conjunto music", color: "#4a5568", coordinates: [-98.5, 29.4] },
      { location: "Global", period: "present", form: "polka", context: "Czech national dance, global folk tradition", coordinates: [14.4, 50.1] }
    ],
    sounds: [
      { label: "Czech", ipa: "/\u02c8pol.ka/", text: "polka", lang: "cs" },
      { label: "English", ipa: "/\u02c8po\u028al.k\u0259/", text: "polka", lang: "en" }
    ],
    relatives: [
      { word: "p\u016flka", language: "Czech", connection: "possibly from 'half-step'", available: false },
      { word: "mazurka", language: "Polish", connection: "another Eastern European dance that spread west", available: false },
      { word: "waltz", language: "German", connection: "the couple dance polka partly displaced", available: false }
    ],
    meaningNow: "Polka survives in pockets: Czech festivals, Polish weddings, Tejano dance halls, accordion competitions. It's often treated as kitsch\u2014the music of beer halls and funny hats.\n\nBut the polka's spread showed how folk culture could go viral before mass media. A peasant girl's dance (maybe) became a continental craze became a permanent part of world culture. And every time you see polka dots, you're seeing the dance's bouncy energy frozen in fabric."
  },
  {
    slug: "mana",
    word: "mana",
    romanization: "mana",
    language: "Polynesian (Oceanic)",
    hook: "Spiritual power became a video game stat\u2014but it meant life and death first.",
    story: [
      "Across Polynesia\u2014from Hawaii to New Zealand, from Tahiti to Easter Island\u2014mana names a fundamental concept: spiritual power, authority, prestige. Mana isn't earned through effort alone; it flows from ancestry, from divine favor, from successful action. A chief has mana. A sacred object has mana. A warrior who wins has demonstrated mana.",
      "European missionaries and anthropologists encountered mana in the 19th century and struggled to translate it. Is it magic? Authority? Luck? The concept doesn't map neatly onto Western categories. Mana is power, but power tied to spirituality, legitimacy, and effectiveness all at once.",
      "In 1969, Larry Niven's science fiction used \"mana\" as a magical energy source. The concept spread through fantasy literature and into video games. By the 1990s, mana was a standard stat\u2014the blue bar that lets you cast spells, depleted with each use, regenerated over time.",
      "Millions of gamers now know mana as a game mechanic. Most have no idea it's a Polynesian word with profound cultural significance. The sacred became a resource to be managed."
    ],
    journey: [
      { location: "Polynesia", period: "ancient", form: "mana", script: "mana", context: "Spiritual power concept across Pacific", color: "#4a7c7c", coordinates: [-150, -15] },
      { location: "New Zealand", period: "800 CE+", form: "mana", script: "mana", context: "Central to M\u0101ori culture and law", color: "#4a7c7c", coordinates: [175, -41] },
      { location: "Hawaii", period: "ancient", form: "mana", script: "mana", context: "Divine power of chiefs and gods", color: "#4a7c7c", coordinates: [-155.5, 19.9] },
      { location: "Western academia", period: "1891", form: "mana", context: "Anthropologists study the concept", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Video games", period: "1980s+", form: "mana", context: "Becomes magical energy stat", color: "#4a5568", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "M\u0101ori", ipa: "/\u02c8ma.na/", text: "mana", lang: "mi" },
      { label: "Hawaiian", ipa: "/\u02c8ma.na/", text: "mana", lang: "haw" },
      { label: "English", ipa: "/\u02c8m\u0251\u02d0.n\u0259/", text: "mana", lang: "en" }
    ],
    relatives: [
      { word: "tapu/taboo", language: "Polynesian", connection: "sacred restriction, related to mana", available: true, slug: "taboo" },
      { word: "chi/qi", language: "Chinese", connection: "similar concept of vital energy", available: false },
      { word: "baraka", language: "Arabic", connection: "Islamic concept of divine blessing", available: false }
    ],
    meaningNow: "Mana lives a double life: in Pacific Island cultures, it remains a living concept tied to leadership, land rights, and identity. In gaming, it's a depletable resource bar.\n\nThe gap between these meanings is vast. Video game mana is egalitarian\u2014everyone starts with the same pool. Polynesian mana is hierarchical\u2014some people and objects have more than others, by nature and achievement. The word traveled far and lost much in translation. But it also introduced millions to the idea that power might be spiritual, not just physical."
  },
  {
    slug: "avocado",
    word: "\u0101huacatl",
    romanization: "ahuacatl",
    language: "Nahuatl (Aztec)",
    hook: "Named for what it looks like\u2014and yes, that means what you think it means.",
    story: [
      "The Aztecs called the fruit \u0101huacatl, which also meant \"testicle\"\u2014a reference to its shape and the way it hangs in pairs from the tree. When Spanish conquistadors encountered the fruit in the 16th century, they couldn't quite pronounce the Nahuatl word and adapted it to aguacate.",
      "The fruit spread slowly at first. Europeans were suspicious of its buttery texture and presumed aphrodisiac properties (that name again). But in the Americas, it became a staple. The word evolved differently in different places: aguacate in Spanish, avocat in French, avocado in English.",
      "For centuries, avocados were regional. California and Florida grew them; most Americans had never seen one. Then came the 1990s, NAFTA, the Super Bowl guacamole boom, and the rise of \"healthy fats.\" The avocado became a symbol of millennial food culture\u2014and the subject of generational warfare (\"Stop buying avocado toast and you could afford a house\").",
      "The Aztec word for testicle is now one of the most contested fruits in Western culture. Production has reshaped Mexican agriculture, fueled cartel violence, and drained water resources. The fruit has become a $14 billion global industry."
    ],
    journey: [
      { location: "Mesoamerica", period: "~5000 BCE", form: "\u0101huacatl", context: "Domesticated in Mexico/Central America", color: "#8b5a2b", coordinates: [-99.1, 19.4] },
      { location: "Aztec Empire", period: "1400s", form: "\u0101huacatl", script: "\u0101huacatl", context: "Cultivated, named for its shape", color: "#8b5a2b", coordinates: [-99.1, 19.4] },
      { location: "Spain", period: "1500s", form: "aguacate", context: "Spanish adapt the word", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "California", period: "1871", form: "avocado", context: "Commercial cultivation begins", color: "#4a5568", coordinates: [-117.2, 32.7] },
      { location: "Global", period: "2000s", form: "avocado", context: "Becomes superfood phenomenon", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Nahuatl", ipa: "/a\u02d0.wa\u02c8kat\u026a/", text: "\u0101huacatl", lang: "nah" },
      { label: "Spanish", ipa: "/a.\u0263wa.\u02c8ka.te/", text: "aguacate", lang: "es" },
      { label: "English", ipa: "/\u02cc\u00e6v.\u0259\u02c8k\u0251\u02d0.do\u028a/", text: "avocado", lang: "en" }
    ],
    relatives: [
      { word: "guacamole", language: "Nahuatl", connection: "from ahuacatl + molli (sauce)", available: false },
      { word: "chocolate", language: "Nahuatl", connection: "another Aztec food word that conquered the world", available: true, slug: "chocolate" },
      { word: "tomato", language: "Nahuatl", connection: "yet another", available: false }
    ],
    meaningNow: "The avocado has become a cultural flashpoint\u2014a symbol of health-conscious eating, millennial brunch culture, and the globalized food system's hidden costs. Mexican farmers face violence; Chilean aquifers run dry; New Zealand orchards reshape landscapes.\n\nAnd through it all, the Aztec name persists, its original meaning mostly forgotten. Every time someone orders avocado toast, they're asking for testicle toast. Etymology has a sense of humor."
  },
  {
    slug: "feng-shui",
    word: "\u98a8\u6c34",
    romanization: "f\u0113ng shu\u01d0",
    language: "Mandarin Chinese",
    hook: "Wind and water\u2014the ancient art of arranging space became a global industry.",
    story: [
      "F\u0113ng shu\u01d0 literally means \"wind-water\"\u2014two elements that flow, that cannot be grasped, that shape the landscape. The practice originated in ancient China as a way to site tombs, then expanded to placing buildings, arranging rooms, orienting cities. The goal: to align human structures with the flow of q\u00ec, vital energy.",
      "Feng shui practitioners used compasses, studied landforms, observed wind and water patterns. The ideal site had mountains behind (protection), water in front (wealth), proper orientation to cardinal directions. Imperial cities were laid out according to feng shui principles; Hong Kong's skyscrapers still are.",
      "In the 20th century, feng shui spread to the West, often simplified and commercialized. Books promised prosperity through furniture arrangement. Consultants charged thousands to harmonize offices. The complex geomantic tradition became \"move your desk, change your life.\"",
      "Today feng shui exists in multiple forms: traditional practice still guides Asian architecture; pop feng shui sells decluttering tips; skeptics dismiss it as superstition. The wind and water flow on, indifferent to interpretation."
    ],
    journey: [
      { location: "China", period: "~4000 BCE", form: "f\u0113ng shu\u01d0", script: "\u98a8\u6c34", context: "Emerges from burial site selection", color: "#2d4a3b", coordinates: [116.4, 39.9] },
      { location: "Imperial China", period: "~200 BCE+", form: "\u98a8\u6c34", context: "Codified into geomantic system", color: "#2d4a3b", coordinates: [108.9, 34.3] },
      { location: "Hong Kong", period: "1900s", form: "feng shui", context: "Skyscrapers designed with feng shui", color: "#2d4a3b", coordinates: [114.2, 22.3] },
      { location: "California", period: "1970s+", form: "feng shui", context: "New Age movement adopts it", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "present", form: "feng shui", context: "Architecture, interior design, self-help", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Mandarin", ipa: "/f\u0259\u014b\u02e5\u02e5 \u0282we\u01d0\u02e7\u02e9/", text: "\u98ce\u6c34", lang: "zh" },
      { label: "Cantonese", ipa: "/f\u028a\u014b\u02e5\u02e5 s\u0153y\u02e7\u02e9/", text: "\u98a8\u6c34", lang: "yue" },
      { label: "English", ipa: "/\u02ccf\u028c\u014b \u02c8\u0283we\u026a/", text: "feng shui", lang: "en" }
    ],
    relatives: [
      { word: "q\u00ec/chi", language: "Chinese", connection: "vital energy that feng shui manipulates", available: false },
      { word: "yin yang", language: "Chinese", connection: "complementary forces in feng shui theory", available: false },
      { word: "vastu shastra", language: "Sanskrit", connection: "Indian architectural tradition with similar concepts", available: false }
    ],
    meaningNow: "Feng shui has become both ancient wisdom and modern clich\u00e9. In Asia, major construction projects still consult feng shui masters. In the West, the term often just means \"good vibes\" or \"uncluttered.\"\n\nBut the core insight persists: how we arrange space affects how we feel. Whether that's q\u00ec flowing or just good design, the wind and water still matter. The word asks us to pay attention to the spaces we inhabit."
  },
  {
    slug: "hula",
    word: "hula",
    romanization: "hula",
    language: "Hawaiian",
    hook: "The dance they tried to ban became Hawaii's living soul.",
    story: [
      "Hula is not entertainment. In traditional Hawaiian culture, hula was prayer\u2014a way of honoring gods, preserving history, passing down knowledge. The movements told stories; the chants carried genealogies and sacred narratives. Hula was performed by trained dancers whose bodies became vessels for the divine.",
      "When American missionaries arrived in the 1820s, they saw hula as pagan and obscene. Queen Ka'ahumanu, converted to Christianity, banned public hula in 1830. For decades, the dance survived only in secret, passed down in hidden gatherings.",
      "King Kal\u0101kaua revived hula in the 1880s, declaring, \"Hula is the language of the heart and therefore the heartbeat of the Hawaiian people.\" But by then, a different hula was emerging\u2014the tourist version, with cellophane skirts and plastic leis, performed for visitors who wanted exotic entertainment.",
      "Today both hulas coexist: kahiko (ancient) with its gourd drums and chants, 'auana (modern) with its ukuleles and flowing gowns. The word carries both meanings\u2014sacred tradition and tourist spectacle, authentic culture and kitschy appropriation. Hawaiians are still negotiating between them."
    ],
    journey: [
      { location: "Hawaii", period: "ancient", form: "hula", script: "hula", context: "Sacred dance-prayer tradition", color: "#4a7c7c", coordinates: [-155.5, 19.9] },
      { location: "Hawaii", period: "1830", form: "hula", context: "Banned by Christian-influenced queen", color: "#6b2d3d", coordinates: [-157.8, 21.3] },
      { location: "Hawaii", period: "1883", form: "hula", context: "King Kal\u0101kaua revives the tradition", color: "#4a7c7c", coordinates: [-157.8, 21.3] },
      { location: "Hollywood", period: "1930s+", form: "hula", context: "Tourist version spreads globally", color: "#4a5568", coordinates: [-118.3, 34.1] },
      { location: "Global", period: "present", form: "hula", context: "Cultural revival alongside tourist industry", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Hawaiian", ipa: "/\u02c8hu.la/", text: "hula", lang: "haw" },
      { label: "English", ipa: "/\u02c8hu\u02d0.l\u0259/", text: "hula", lang: "en" }
    ],
    relatives: [
      { word: "mele", language: "Hawaiian", connection: "the chants that accompany hula", available: false },
      { word: "wiki", language: "Hawaiian", connection: "another Hawaiian word that went global", available: true, slug: "wiki" },
      { word: "luau", language: "Hawaiian", connection: "the feast where hula is often performed", available: false }
    ],
    meaningNow: "Hula sits at the center of debates about cultural tourism, appropriation, and revival. Is hula for visitors or for Hawaiians? Can a sacred tradition survive commercialization? Can it survive without it?\n\nThe word itself has absorbed these tensions. When mainlanders think hula, they often picture plastic grass skirts. When Hawaiians practice hula, they're keeping their ancestors' language alive in their bodies. Both are called hula. Only one is the heartbeat of a people."
  },
  {
    slug: "mumbo-jumbo",
    word: "Maamajomboo",
    romanization: "Maamajomboo",
    language: "Mandinka (West African)",
    hook: "A sacred ritual became an insult\u2014the story of how colonizers dismiss what they don't understand.",
    story: [
      "In the Mandinka cultures of West Africa, Maamajomboo (or similar names) referred to a masked figure who appeared at ceremonies to settle disputes, particularly in cases involving women. The ritual had specific social functions; the masked dancer represented ancestral authority.",
      "European explorers in the 18th century encountered these ceremonies and didn't understand them. In 1738, Francis Moore wrote about \"Mumbo Jumbo\" as a strange idol used to frighten women. The description was dismissive, the understanding shallow.",
      "The phrase entered English meaning nonsense, gibberish, meaningless ritual\u2014exactly what the colonizers thought they saw. By the 19th century, \"mumbo jumbo\" meant any language or activity the speaker considered incomprehensible or deliberately obscure.",
      "The transformation is telling: a real practice with real meaning became a byword for meaninglessness. The people who called it mumbo jumbo were the ones who couldn't\u2014or wouldn't\u2014understand. The word preserves their ignorance."
    ],
    journey: [
      { location: "West Africa", period: "ancient", form: "Maamajomboo", context: "Mandinka masked ritual figure", color: "#8b5a2b", coordinates: [-15.5, 13.4] },
      { location: "Gambia", period: "1738", form: "Mumbo Jumbo", context: "Francis Moore's account", color: "#8b5a2b", coordinates: [-16.6, 13.5] },
      { location: "England", period: "1800s", form: "mumbo jumbo", context: "Becomes slang for nonsense", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "mumbo-jumbo", context: "Common English phrase", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Mandinka (approximate)", ipa: "/m\u0251\u02d0.m\u0251.d\u0292\u0254m.bo\u02d0/", text: "Maamajomboo", lang: "mnk" },
      { label: "English", ipa: "/\u02ccm\u028cm.bo\u028a \u02c8d\u0292\u028cm.bo\u028a/", text: "mumbo jumbo", lang: "en" }
    ],
    relatives: [
      { word: "voodoo", language: "Fon/Ewe", connection: "another African religious term distorted in English", available: true, slug: "voodoo" },
      { word: "juju", language: "West African", connection: "another spiritual term often misused", available: false },
      { word: "hocus-pocus", language: "English", connection: "similar dismissive term for ritual", available: false }
    ],
    meaningNow: "Mumbo jumbo is still used daily to dismiss what we don't understand\u2014legal mumbo jumbo, technical mumbo jumbo, bureaucratic mumbo jumbo. The phrase implies the speaker is sensible and the subject is nonsense.\n\nBut the word's history suggests the opposite: sometimes mumbo jumbo means we're the ones who don't understand. The Mandinka ceremonies had meaning; the European observers lacked the knowledge to see it. When we call something mumbo jumbo, we might ask: Is it nonsense, or am I just ignorant?"
  },
  {
    slug: "sisu",
    word: "sisu",
    romanization: "sisu",
    language: "Finnish",
    hook: "The untranslatable grit that let Finland survive\u2014and defines a nation.",
    story: [
      "Finnish has a word that other languages keep trying to borrow: sisu. It's often translated as resilience, determination, or grit\u2014but Finns insist these don't capture it. Sisu is the strength to keep going when you should have given up, the capacity to endure what seems unendurable.",
      "The word became internationally famous during the Winter War of 1939-40, when Finland\u2014a country of 3.7 million\u2014resisted Soviet invasion by a force of over a million. Outnumbered and outgunned, Finnish soldiers fought in conditions reaching -40\u00b0C. The world called it sisu.",
      "Sisu isn't just about war. It's about surviving Finnish winters, about the introvert's persistence, about the national character that emerged from a harsh climate and centuries of foreign rule. Sisu is why Finns have one of the world's highest rates of heavy metal bands per capita\u2014channeling hardship into power.",
      "Unlike grit or resilience, sisu implies something almost beyond reason\u2014not \"I can do this\" but \"I will do this even though I probably can't.\" It's the second wind after you've already had three."
    ],
    journey: [
      { location: "Finland", period: "1500s", form: "sisu", script: "sisu", context: "First written records, word likely older", color: "#4a5568", coordinates: [25, 64] },
      { location: "Finland", period: "1939-40", form: "sisu", context: "Winter War makes concept famous", color: "#4a5568", coordinates: [28, 62] },
      { location: "USA", period: "1940", form: "sisu", context: "Time magazine introduces word to Americans", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "2010s", form: "sisu", context: "Self-help books export the concept", coordinates: [0, 45] }
    ],
    sounds: [
      { label: "Finnish", ipa: "/\u02c8si.su/", text: "sisu", lang: "fi" },
      { label: "English approximation", ipa: "/\u02c8si\u02d0.su\u02d0/", text: "sisu", lang: "en" }
    ],
    relatives: [
      { word: "sauna", language: "Finnish", connection: "the other Finnish word in global use", available: true, slug: "sauna" },
      { word: "grit", language: "English", connection: "closest English approximation", available: false },
      { word: "ganbaru", language: "Japanese", connection: "Japanese concept of perseverance", available: false }
    ],
    meaningNow: "Sisu has become Finland's brand\u2014appearing in business books, TED talks, and motivational posters. Some Finns worry the word is being diluted, sold as a life hack rather than lived as a way of being.\n\nBut sisu persists because it names something real: the human capacity to keep going when logic says stop. It's not optimism\u2014Finns are famously pessimistic. It's something deeper: the decision to endure regardless of outcome. The word suggests that stubbornness, properly directed, can be a survival skill."
  }
];
