import type { Word } from "./word-types";

export const newWordsBatch10: Word[] = [
  {
    slug: "pho",
    word: "ph\u1edf",
    romanization: "ph\u1edf",
    language: "Vietnamese",
    hook: "A bowl of soup that rebuilt a nation after war.",
    story: [
      "Ph\u1edf emerged in the early 20th century in northern Vietnam, likely in Hanoi or Nam \u0110\u1ecbnh province. Its origins are debated\u2014some trace it to the French pot-au-feu, others to Chinese beef noodle soups\u2014but what's certain is that it became something entirely Vietnamese.",
      "The word itself may come from the French feu (fire) in pot-au-feu, or from the Cantonese word for rice noodles, fan. Vietnamese cooks transformed foreign influences into something new: a clear, aromatic broth simmered for hours with star anise, cinnamon, and charred ginger, poured over rice noodles and thin-sliced beef or chicken.",
      "After the fall of Saigon in 1975, over a million Vietnamese fled as refugees. They carried little\u2014but they carried ph\u1edf. In Orange County, California, in Paris's 13th arrondissement, in Sydney's Cabramatta, ph\u1edf shops became community anchors. The soup was cheap to make, required skills the refugees had, and tasted like home.",
      "Today ph\u1edf is Vietnam's national dish and a global phenomenon. The word has entered English unchanged\u2014no translation needed, no approximation. Just ph\u1edf, pronounced with that falling-rising tone that English speakers struggle to replicate."
    ],
    journey: [
      { location: "Nam \u0110\u1ecbnh", period: "~1900", form: "ph\u1edf", script: "ph\u1edf", context: "Emerges in northern Vietnam", color: "#2d4a3b", coordinates: [106.2, 20.4] },
      { location: "Hanoi", period: "1920s", form: "ph\u1edf", script: "ph\u1edf", context: "Street vendors spread the dish", color: "#2d4a3b", coordinates: [105.8, 21.0] },
      { location: "Saigon", period: "1954", form: "ph\u1edf", script: "ph\u1edf", context: "Northern refugees bring it south", color: "#2d4a3b", coordinates: [106.7, 10.8] },
      { location: "Orange County", period: "1975+", form: "pho", script: "pho", context: "Refugee communities establish shops", color: "#4a5568", coordinates: [-117.8, 33.7] },
      { location: "Global", period: "2000s+", form: "pho", context: "Becomes international comfort food", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Vietnamese", ipa: "/f\u0259\u0309/", text: "ph\u1edf", lang: "vi" },
      { label: "English approximation", ipa: "/f\u028c/", text: "fuh", lang: "en" }
    ],
    relatives: [
      { word: "pot-au-feu", language: "French", connection: "possible etymological source", available: false },
      { word: "b\u00fan", language: "Vietnamese", connection: "another Vietnamese noodle dish", available: false },
      { word: "ramen", language: "Japanese", connection: "another Asian noodle soup with contested origins", available: false }
    ],
    meaningNow: "Ph\u1edf is more than soup\u2014it's a story of survival, adaptation, and identity. For the Vietnamese diaspora, it's edible memory. For the rest of the world, it's an introduction to a cuisine that's subtle, complex, and deeply satisfying.\n\nThe word itself has become a small act of cultural exchange: every time an English speaker attempts that tricky tone, they're acknowledging that some things can't be translated, only learned."
  },
  {
    slug: "wiki",
    word: "wiki",
    romanization: "wiki",
    language: "Hawaiian",
    hook: "A Hawaiian word for \"quick\" became everyone's encyclopedia.",
    story: [
      "In Hawaiian, wiki means quick or fast. Wiki wiki means very quick. When you arrive at Honolulu airport, the Wiki Wiki Shuttle takes you between terminals\u2014it's just the fast bus.",
      "In 1994, programmer Ward Cunningham was looking for a name for his new software\u2014a website that anyone could edit, quickly. He remembered that Wiki Wiki Shuttle from a trip to Hawaii. He liked that wiki was easier to say than \"quick-web\" and chose it as the name for his WikiWikiWeb.",
      "The technology spread. In 2001, Jimmy Wales and Larry Sanger used Cunningham's wiki software to create a free encyclopedia that anyone could edit. They called it Wikipedia. Within a decade, it became one of the most visited websites in the world\u2014a repository of human knowledge built by volunteers.",
      "The Hawaiian language, spoken by fewer than 24,000 native speakers, gave the internet one of its most important words. Wiki now means any collaborative website, and the concept has transformed how we create and share information."
    ],
    journey: [
      { location: "Hawaii", period: "ancient", form: "wiki", script: "wiki", context: "Hawaiian word meaning quick", color: "#4a7c7c", coordinates: [-157.8, 21.3] },
      { location: "Honolulu Airport", period: "1970s", form: "Wiki Wiki", context: "Shuttle bus name", color: "#4a7c7c", coordinates: [-157.9, 21.3] },
      { location: "Portland", period: "1994", form: "WikiWikiWeb", context: "Ward Cunningham's first wiki", color: "#4a5568", coordinates: [-122.7, 45.5] },
      { location: "San Diego", period: "2001", form: "Wikipedia", context: "Wales and Sanger launch encyclopedia", color: "#4a5568", coordinates: [-117.2, 32.7] },
      { location: "Global", period: "2010s", form: "wiki", context: "300+ language Wikipedias, billions of readers", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Hawaiian", ipa: "/\u02c8wiki/", text: "wiki", lang: "haw" },
      { label: "English", ipa: "/\u02c8w\u026aki/", text: "wiki", lang: "en" }
    ],
    relatives: [
      { word: "Wikipedia", language: "English", connection: "encyclopedia + wiki", available: false },
      { word: "wikiwiki", language: "Hawaiian", connection: "very quick (reduplication)", available: false },
      { word: "aloha", language: "Hawaiian", connection: "another Hawaiian word that went global", available: false }
    ],
    meaningNow: "Wiki represents a radical idea: that knowledge can be collectively created and freely shared. It's also a reminder that innovation often comes from unexpected places\u2014a shuttle bus name remembered by a programmer.\n\nThe Hawaiian language, nearly destroyed by colonization, contributed a word that defines how billions of people learn. Every time someone looks something up on Wikipedia, they're using a Hawaiian word."
  },
  {
    slug: "tofu",
    word: "\u8c46\u8150",
    romanization: "d\u00f2ufu",
    language: "Chinese (Mandarin)",
    hook: "Bean curd conquered the world by absorbing every culture it touched.",
    story: [
      "Tofu was invented in China over 2,000 years ago, though the exact origin is debated. Legend credits Prince Liu An of the Han Dynasty, but tofu may have developed gradually as a way to preserve soy milk. The name combines d\u00f2u (bean) and f\u01d4 (curdled)\u2014it is, literally, bean curd.",
      "From China, tofu traveled along Buddhist trade routes. Monks appreciated it as a protein-rich meat substitute, and wherever Buddhism spread\u2014Japan, Korea, Vietnam, Thailand\u2014tofu followed. Each culture adapted it: silken tofu in Japan, fried tofu puffs in Southeast Asia, fermented stinky tofu in Taiwan.",
      "The word entered English through Japanese (t\u014dfu) in the 18th century. For decades it remained an exotic ingredient, known mainly to Asian communities and health food enthusiasts. Then came the vegetarian movement of the 1970s, and tofu became a symbol of conscious eating.",
      "Today tofu is everywhere\u2014in supermarkets, restaurant menus, memes about veganism. Its blandness, once mocked, is now understood as versatility. Tofu doesn't impose; it absorbs. It becomes whatever you need it to be."
    ],
    journey: [
      { location: "China", period: "~200 BCE", form: "d\u00f2ufu", script: "\u8c46\u8150", context: "Invented during Han Dynasty", color: "#2d4a3b", coordinates: [117, 34] },
      { location: "Japan", period: "~700 CE", form: "t\u014dfu", script: "\u8c46\u8150", context: "Buddhist monks introduce it", color: "#2d4a3b", coordinates: [135.8, 35] },
      { location: "Korea", period: "~700 CE", form: "dubu", script: "\ub450\ubd80", context: "Becomes staple ingredient", color: "#2d4a3b", coordinates: [127, 37.5] },
      { location: "Europe", period: "1770", form: "tofu", context: "First English mention by Benjamin Franklin", color: "#5c5a4a", coordinates: [2.3, 48.9] },
      { location: "USA", period: "1970s", form: "tofu", context: "Health food movement adoption", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "present", form: "tofu", context: "$2.5 billion global market", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Mandarin", ipa: "/t\u0259\u028a\u02e7\u02e9fu\u02e7\u02e9/", text: "\u8c46\u8150", lang: "zh" },
      { label: "Japanese", ipa: "/to\u02d0.h\u0268/", text: "\u3068\u3046\u3075", lang: "ja" },
      { label: "English", ipa: "/\u02c8to\u028afu\u02d0/", text: "tofu", lang: "en" }
    ],
    relatives: [
      { word: "soy", language: "English", connection: "from Japanese shoyu (soy sauce)", available: false },
      { word: "tempeh", language: "Javanese", connection: "another soy product", available: false },
      { word: "miso", language: "Japanese", connection: "fermented soybean paste", available: false }
    ],
    meaningNow: "Tofu has become a Rorschach test for food culture. To some it represents virtuous eating; to others, bland hippie food. Debates about tofu are really debates about tradition, health, masculinity, and what we're willing to change.\n\nBut the curd itself remains neutral\u2014absorbing flavors, absorbing meanings, becoming whatever each culture needs it to be. That's been its secret for two thousand years."
  },
  {
    slug: "jazz",
    word: "jazz",
    romanization: "jazz",
    language: "American English (disputed African origin)",
    hook: "The most American word might be African\u2014and nobody knows for sure.",
    story: [
      "Jazz is one of the most important words in American culture, and its origin is a mystery. The word appeared in San Francisco sports writing around 1912\u2014meaning energy, pep, vigor\u2014before attaching to the music emerging from New Orleans.",
      "Theories abound: it may come from the Creole French jaser (to chatter), or from an African language (possibly Mandinka jasi, to act energetically), or from jasmine perfume worn by New Orleans prostitutes, or from a musician named Jasbo Brown. The uncertainty is fitting for an art form built on improvisation.",
      "What's certain is that jazz the music was created by Black Americans in New Orleans, blending African rhythms, blues, ragtime, and brass band traditions. The word spread with the music\u2014up the Mississippi to Chicago, across to New York, across the Atlantic to Paris.",
      "By the 1920s, the Jazz Age defined an era. The word had transformed from sports slang to the name of America's original art form, carrying with it the creative genius of people who were denied almost everything else."
    ],
    journey: [
      { location: "West Africa", period: "possible origin", form: "jasi (?)", context: "Possible Mandinka root", color: "#8b5a2b", coordinates: [-12, 12] },
      { location: "New Orleans", period: "~1900", form: "jass/jazz", context: "Music emerges from Black communities", color: "#6b2d3d", coordinates: [-90.1, 30] },
      { location: "San Francisco", period: "1912", form: "jazz", context: "First written use in newspapers", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Chicago", period: "1917", form: "jazz", context: "Great Migration brings the music north", color: "#4a5568", coordinates: [-87.6, 41.9] },
      { location: "Paris", period: "1920s", form: "jazz", context: "Jazz Age sweeps Europe", color: "#5c5a4a", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "jazz", context: "UNESCO Intangible Cultural Heritage", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "American English", ipa: "/d\u0292\u00e6z/", text: "jazz", lang: "en-US" }
    ],
    relatives: [
      { word: "blues", language: "English", connection: "parent genre of jazz", available: false },
      { word: "jive", language: "English", connection: "possibly related slang", available: false },
      { word: "ragtime", language: "English", connection: "predecessor to jazz", available: false }
    ],
    meaningNow: "Jazz is now both a genre and a metaphor. We jazz things up, take things for a jazz, live in the jazz age. The word carries the energy of improvisation, of making something new from whatever you have.\n\nThat its etymology remains uncertain feels right. Jazz was made by people whose histories were deliberately erased. The mystery of the word is part of the story\u2014a reminder that American culture was built by people who weren't allowed to sign their names to it."
  },
  {
    slug: "sputnik",
    word: "\u0441\u043f\u0443\u0442\u043d\u0438\u043a",
    romanization: "sputnik",
    language: "Russian",
    hook: "\"Fellow traveler\" terrified the world\u2014then made it dream of stars.",
    story: [
      "In Russian, sputnik simply means \"fellow traveler\" or \"companion\"\u2014from s (with) + put' (path/journey). It's an ordinary word: your sputnik might be a friend walking beside you, a handbook you consult, or a spouse.",
      "On October 4, 1957, the Soviet Union launched a metal sphere the size of a beach ball into orbit. They called it Sputnik\u2014the satellite that would travel with the Earth. The word had never been heard in English. Within days, it was on every front page.",
      "Sputnik's beep-beep-beep, broadcast on radio frequencies anyone could receive, announced that the Space Age had begun\u2014and that America was behind. The launch triggered the Space Race, prompted the creation of NASA, reshaped education, and changed human civilization's sense of its own possibilities.",
      "The word entered English instantly and completely. We didn't translate it as \"fellow traveler\" or \"satellite.\u201d We just said sputnik. The Russian language had given us the name for humanity's first step beyond Earth."
    ],
    journey: [
      { location: "Russia", period: "1700s+", form: "\u0441\u043f\u0443\u0442\u043d\u0438\u043a", script: "\u0441\u043f\u0443\u0442\u043d\u0438\u043a", context: "Ordinary word meaning companion", color: "#4a5568", coordinates: [37.6, 55.8] },
      { location: "Baikonur", period: "Oct 4, 1957", form: "Sputnik 1", context: "First artificial satellite launched", color: "#4a3b6b", coordinates: [63.3, 45.6] },
      { location: "Washington DC", period: "Oct 1957", form: "Sputnik crisis", context: "American panic, Space Race begins", color: "#4a5568", coordinates: [-77, 38.9] },
      { location: "Global", period: "1957+", form: "sputnik", context: "Word enters all languages", coordinates: [0, 45] }
    ],
    sounds: [
      { label: "Russian", ipa: "/\u02c8sputn\u02b2\u026ak/", text: "\u0441\u043f\u0443\u0442\u043d\u0438\u043a", lang: "ru" },
      { label: "English", ipa: "/\u02c8sp\u028atn\u026ak/", text: "sputnik", lang: "en" }
    ],
    relatives: [
      { word: "put'", language: "Russian", connection: "root meaning path or journey", available: false },
      { word: "satellite", language: "English", connection: "from Latin satelles (attendant)", available: false },
      { word: "cosmonaut", language: "Russian", connection: "Russian word for astronaut", available: false }
    ],
    meaningNow: "Sputnik now names a COVID vaccine, a news agency, and countless other things. But its primary meaning remains: the moment humans became a spacefaring species.\n\nThe word reminds us that the Space Age was born from competition and fear\u2014but also from wonder. A fellow traveler, circling the Earth, beeping into the darkness. For a moment, everyone on the planet looked up."
  },
  {
    slug: "sauna",
    word: "sauna",
    romanization: "sauna",
    language: "Finnish",
    hook: "The only Finnish word in everyday global use\u2014a hot room that defines a nation.",
    story: [
      "Finland has given the world exactly one word that appears in every major language: sauna. In a country of 5.5 million people, there are over 3 million saunas\u2014in homes, apartments, offices, even Parliament. The sauna is where Finns were born, where deals are made, where bodies are washed before burial.",
      "The word is ancient, possibly derived from an early Proto-Finnic word for a pit dug in a slope\u2014the original smoke saunas were partly underground. For Finns, the sauna was survival: a warm, sterile place in a frozen landscape, where families could clean themselves when water was scarce and winters were deadly.",
      "Finnish emigrants brought saunas to Minnesota, to Australia, to wherever they settled. The practice spread beyond Finnish communities. By the mid-20th century, saunas were appearing in American gyms and European spas.",
      "But non-Finns often miss the point. A Finnish sauna is not about luxury or fitness. It's about silence, heat, birch branches, and the shock of cold water. It's almost sacred\u2014the one place where social hierarchies dissolve, where you sit naked and equal with anyone."
    ],
    journey: [
      { location: "Finland", period: "ancient", form: "sauna", script: "sauna", context: "Original smoke saunas in earth pits", color: "#4a5568", coordinates: [25, 64] },
      { location: "Finland", period: "~1000 CE", form: "sauna", script: "sauna", context: "Central to Finnish daily life", color: "#4a5568", coordinates: [24.9, 60.2] },
      { location: "Minnesota", period: "1860s+", form: "sauna", context: "Finnish emigrants bring tradition", color: "#4a5568", coordinates: [-93.3, 45] },
      { location: "Germany", period: "1900s", form: "Sauna", context: "Spreads through European spas", color: "#5c5a4a", coordinates: [13.4, 52.5] },
      { location: "Global", period: "present", form: "sauna", context: "UNESCO Intangible Cultural Heritage (2020)", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Finnish", ipa: "/\u02c8s\u0251u.n\u0251/", text: "sauna", lang: "fi" },
      { label: "English", ipa: "/\u02c8s\u0254\u02d0.n\u0259/", text: "sauna", lang: "en" }
    ],
    relatives: [
      { word: "l\u00f6yly", language: "Finnish", connection: "the steam when water hits stones", available: false },
      { word: "banya", language: "Russian", connection: "Russian steam bath tradition", available: false },
      { word: "sisu", language: "Finnish", connection: "Finnish concept of inner strength", available: false }
    ],
    meaningNow: "The sauna represents Finland's gift to global wellness\u2014but also a lesson in cultural translation. Outside Finland, saunas often become performance spaces, social clubs, or Instagram backdrops. Inside Finland, they remain something simpler and deeper: a place to be human.\n\nThe word carries all this. It's Finnish, untranslatable in its full meaning, borrowed whole by a world that wanted the heat but couldn't quite import the silence."
  },
  {
    slug: "chaos",
    word: "\u03c7\u03ac\u03bf\u03c2",
    romanization: "kh\u00e1os",
    language: "Ancient Greek",
    hook: "Before the universe, there was chaos\u2014the void that waited to become everything.",
    story: [
      "In the beginning, wrote Hesiod in his Theogony around 700 BCE, there was Chaos\u2014not disorder, but emptiness. The Greek word kh\u00e1os meant a yawning void, a gap, an abyss. It comes from the root kha-, to gape or yawn. Chaos was the primordial nothing from which everything emerged.",
      "The Romans borrowed the word, and it passed into European languages. But somewhere along the way, the meaning shifted. By the 1600s, chaos meant confusion and disorder\u2014the opposite of cosmos, which meant order. The void became a mess.",
      "Modern science reclaimed something closer to the original meaning. Chaos theory, developed in the 20th century, describes systems that are deterministic but unpredictable\u2014not random, but exquisitely sensitive to initial conditions. A butterfly's wings can seed a hurricane. There's order in the chaos; we just can't see it.",
      "The word now lives a double life: casual chaos (a messy room, a bad day) and profound Chaos (the mathematical patterns in weather, populations, heartbeats). Both meanings trace back to that ancient Greek void."
    ],
    journey: [
      { location: "Greece", period: "~700 BCE", form: "kh\u00e1os", script: "\u03c7\u03ac\u03bf\u03c2", context: "Hesiod's primordial void", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~100 BCE", form: "chaos", script: "chaos", context: "Latin borrowing, same meaning", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Europe", period: "1600s", form: "chaos", context: "Meaning shifts to disorder", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "MIT", period: "1960s", form: "chaos theory", context: "Edward Lorenz discovers deterministic chaos", color: "#4a5568", coordinates: [-71.1, 42.4] },
      { location: "Global", period: "present", form: "chaos", context: "Both void and disorder", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/k\u02b0\u00e1.os/", text: "\u03c7\u03ac\u03bf\u03c2", lang: "grc" },
      { label: "English", ipa: "/\u02c8ke\u026a.\u0252s/", text: "chaos", lang: "en" }
    ],
    relatives: [
      { word: "cosmos", language: "Greek", connection: "order, the opposite of chaos", available: false },
      { word: "gas", language: "Dutch", connection: "coined from chaos by Van Helmont", available: false },
      { word: "chasm", language: "Greek", connection: "from the same root, a gaping opening", available: false }
    ],
    meaningNow: "Chaos has become the word we reach for when things fall apart\u2014traffic chaos, political chaos, chaos in the kitchen. We've lost the Greek sense of creative potential, the void that births worlds.\n\nBut chaos theory hints at the deeper meaning: what looks like disorder may have hidden structure. The chaos of the weather contains patterns; the chaos of life may too. The word still holds its ancient question: Is the void empty, or full of possibility?"
  },
  {
    slug: "jaguar",
    word: "jaguara",
    romanization: "jaguara",
    language: "Tupi-Guaran\u00ed",
    hook: "\"The beast that kills in one leap\"\u2014South America's apex predator named itself.",
    story: [
      "In the Tupi-Guaran\u00ed languages of South America, yaguara meant \"beast\" or \"wild animal that catches its prey in one bound.\" When Portuguese colonizers encountered the largest cat in the Americas, they heard this name and adapted it: jaguar.",
      "The jaguar held sacred status throughout pre-Columbian Mesoamerica and South America. The Olmec, Maya, and Aztec depicted jaguar gods; warriors wore jaguar skins; shamans transformed into jaguars in religious visions. The animal represented power, the underworld, and the night.",
      "The word traveled from the Amazon to Europe with little change. Unlike many indigenous words that were filtered through Spanish or Portuguese, jaguar retained its native sound. English borrowed it in the 17th century, and it spread to name not just the animal but symbols of power and speed.",
      "Today a British luxury car bears the name, as does an NFL team, countless sports clubs, and an Atari game console. The Tupi-Guaran\u00ed word has become global shorthand for sleek, powerful, predatory beauty."
    ],
    journey: [
      { location: "Amazon Basin", period: "ancient", form: "yaguara", script: "yaguara", context: "Tupi-Guaran\u00ed word for the great cat", color: "#8b5a2b", coordinates: [-60, -3] },
      { location: "Brazil", period: "1500s", form: "jaguar", context: "Portuguese colonizers adopt the word", color: "#8b5a2b", coordinates: [-43.2, -22.9] },
      { location: "Europe", period: "1600s", form: "jaguar", context: "Enters European languages", color: "#5c5a4a", coordinates: [-9.1, 38.7] },
      { location: "Coventry", period: "1935", form: "Jaguar", context: "British car company takes the name", color: "#4a5568", coordinates: [-1.5, 52.4] },
      { location: "Global", period: "present", form: "jaguar", context: "Brand name for power and elegance", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tupi", ipa: "/ja.\u0261wa.\u027ea/", text: "yaguara", lang: "tpw" },
      { label: "Portuguese", ipa: "/\u0292a.\u0261u.\u02c8a\u027e/", text: "jaguar", lang: "pt-BR" },
      { label: "English", ipa: "/\u02c8d\u0292\u00e6\u0261.ju\u02d0.\u0251\u02d0r/", text: "jaguar", lang: "en" }
    ],
    relatives: [
      { word: "cougar", language: "Tupi via French", connection: "another big cat name from Tupi (su\u02bcuarana)", available: false },
      { word: "puma", language: "Quechua", connection: "Andean name for the mountain lion", available: false },
      { word: "panther", language: "Greek", connection: "European word for big cats", available: false }
    ],
    meaningNow: "Jaguar has traveled far from the rainforest, but it still carries power. When we name a car or a team Jaguar, we're invoking what the Tupi saw: an animal of perfect, deadly grace.\n\nThe real jaguar is endangered now, its habitat shrinking. The word thrives while the animal struggles\u2014a strange inversion. Perhaps the word can help: every time someone says \"jaguar,\" they might remember there's an actual beast behind the brand, still leaping, still killing, still demanding respect."
  },
  {
    slug: "boondocks",
    word: "bundok",
    romanization: "bundok",
    language: "Tagalog",
    hook: "American soldiers mispronounced \"mountain\"\u2014and made it mean the middle of nowhere.",
    story: [
      "In Tagalog, the main language of the Philippines, bundok means mountain. It's an ordinary word, used to describe the country's many volcanic peaks and forested highlands.",
      "When American soldiers arrived during the Philippine-American War (1899\u20131902) and stayed through subsequent occupations, they heard Filipino fighters retreating \"to the bundok\"\u2014to the mountains, to the remote interior where guerrilla resistance could continue. The Americans couldn't quite pronounce it: bundok became boondocks.",
      "The word stuck. American soldiers used boondocks to mean any remote, rural, uncivilized area\u2014the sticks, the boonies, the middle of nowhere. They brought it home after World War II, and it entered American slang.",
      "Most Americans who say boondocks have no idea it's Tagalog. The word has been so thoroughly absorbed that it feels native\u2014another piece of American English that carries, invisibly, the history of empire."
    ],
    journey: [
      { location: "Philippines", period: "ancient", form: "bundok", script: "bundok", context: "Tagalog word for mountain", color: "#4a7c7c", coordinates: [121, 14.6] },
      { location: "Philippines", period: "1899-1902", form: "boondocks", context: "American soldiers mispronounce it", color: "#4a5568", coordinates: [121, 14.6] },
      { location: "Pacific Theater", period: "1940s", form: "boondocks", context: "WWII soldiers spread the term", color: "#4a5568", coordinates: [140, 15] },
      { location: "USA", period: "1950s+", form: "boondocks", context: "Enters mainstream American English", color: "#4a5568", coordinates: [-98, 39] },
      { location: "Global", period: "2005", form: "The Boondocks", context: "Aaron McGruder's comic/TV show", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tagalog", ipa: "/bun\u02c8dok/", text: "bundok", lang: "tl" },
      { label: "American English", ipa: "/\u02c8bu\u02d0n.d\u0252ks/", text: "boondocks", lang: "en-US" }
    ],
    relatives: [
      { word: "boonies", language: "English", connection: "shortened form of boondocks", available: false },
      { word: "bunduki", language: "Swahili", connection: "unrelated but similar sounding (means gun)", available: false },
      { word: "sticks", language: "English", connection: "similar meaning, different origin", available: false }
    ],
    meaningNow: "Boondocks captures something real about American geography\u2014the vast rural spaces far from cities, often poor, often forgotten. Aaron McGruder's comic strip The Boondocks used the word to explore race and class in American suburbia.\n\nBut the word also carries a colonial history most speakers don't know. The \"boondocks\" were originally mountains where Filipinos fought for independence against American occupation. The insulting connotation\u2014backwards, uncivilized\u2014was imposed by the occupiers. The word remembers, even if we don't."
  },
  {
    slug: "jumbo",
    word: "jumbo",
    romanization: "jumbo",
    language: "Swahili (via an elephant's name)",
    hook: "One elephant's name became the word for everything huge.",
    story: [
      "The word jumbo most likely comes from Swahili: either jambo (a greeting meaning \"hello\") or jumbe (a chief). When a baby African elephant was captured in Sudan around 1860 and eventually sold to the London Zoo, his keepers called him Jumbo\u2014perhaps from words they'd heard, perhaps because it sounded suitably exotic.",
      "Jumbo grew to be the largest elephant in captivity\u2014nearly 12 feet tall at the shoulder. He became a celebrity, beloved by Victorian London. When P.T. Barnum bought him in 1882 for his American circus, 100,000 children wrote to Queen Victoria begging her to stop the sale.",
      "In America, Jumbo became even more famous. His name became an adjective: jumbo shrimp, jumbo jets, jumbo-sized anything. When he died in a train collision in 1885, he was so famous that Tufts University made him their mascot.",
      "The elephant is long dead, but his name lives in every supermarket aisle and airline announcement. A Swahili greeting or title, attached to one animal, became the English word for enormous."
    ],
    journey: [
      { location: "East Africa", period: "1860", form: "jambo/jumbe", script: "jambo", context: "Swahili word meaning hello or chief", color: "#8b5a2b", coordinates: [36.8, -1.3] },
      { location: "Sudan", period: "1861", form: "Jumbo", context: "Baby elephant captured and named", color: "#8b5a2b", coordinates: [32.5, 15.6] },
      { location: "London", period: "1865-1882", form: "Jumbo", context: "Star attraction at London Zoo", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "USA", period: "1882+", form: "jumbo", context: "P.T. Barnum's circus, word becomes adjective", color: "#4a5568", coordinates: [-73.2, 41.2] },
      { location: "Global", period: "1969", form: "jumbo jet", context: "Boeing 747 nicknamed for its size", coordinates: [-122.3, 47.6] }
    ],
    sounds: [
      { label: "Swahili (greeting)", ipa: "/\u02c8d\u0292\u0251m.bo/", text: "jambo", lang: "sw" },
      { label: "English", ipa: "/\u02c8d\u0292\u028cm.bo\u028a/", text: "jumbo", lang: "en" }
    ],
    relatives: [
      { word: "jambo", language: "Swahili", connection: "possible source, a greeting", available: false },
      { word: "mammoth", language: "Russian", connection: "another animal whose name means huge", available: true, slug: "mammoth" },
      { word: "elephant", language: "Greek", connection: "from elephas, possibly from Egyptian", available: false }
    ],
    meaningNow: "Jumbo is one of the most successful brand-name-to-common-word transitions in history. We use it without thinking of elephants, circuses, or Victorian England.\n\nBut the word carries a strange story: an African animal, named with African words, captured for European entertainment, sold for American spectacle, and finally abstracted into a universal adjective. Jumbo shrimp contains a whole history of colonialism, showmanship, and linguistic drift\u2014none of which you taste."
  }
];
