import type { Word } from "./word-types";

export const newWordsBatch12: Word[] = [
  {
    slug: "nostalgia",
    word: "nostalgia",
    romanization: "nostalgia",
    language: "Greek (medical Latin coinage)",
    hook: "A 17th-century doctor invented a disease for homesick soldiers—now we're all infected.",
    story: [
      "In 1688, a Swiss medical student named Johannes Hofer needed a term for a strange affliction killing Swiss mercenaries serving abroad. They were wasting away, unable to eat or sleep, consumed by longing for their Alpine homeland. Hofer coined nostalgia from Greek nostos (return home) and algos (pain, grief). It was, literally, the pain of wanting to go home.",
      "For two centuries, nostalgia was a serious medical diagnosis. Military doctors recorded epidemics of it. Soldiers died from it. Treatments included leeches, opium, and—most effective—being sent home. The Swiss were thought particularly susceptible; some armies banned the playing of certain Alpine melodies believed to trigger fatal nostalgia attacks.",
      "By the late 19th century, doctors stopped considering nostalgia a disease. Psychiatrists reframed it as a symptom of depression or anxiety. The word drifted from medical vocabulary into everyday speech, its meaning softening from mortal illness to wistful longing.",
      "Today nostalgia is a marketing strategy, a political tool, and a collective mood. We have nostalgia for decades we never lived through, for products we never owned, for a past that may never have existed. The disease of homesickness became the condition of modernity."
    ],
    journey: [
      { location: "Basel", period: "1688", form: "nostalgia", script: "nostalgia", context: "Johannes Hofer coins the medical term", color: "#5c5a4a", coordinates: [7.6, 47.6] },
      { location: "Switzerland", period: "1700s", form: "nostalgia", context: "Diagnosed in Swiss mercenaries abroad", color: "#5c5a4a", coordinates: [8.2, 46.8] },
      { location: "Europe", period: "1800s", form: "nostalgia", context: "Military physicians study the condition", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Vienna", period: "1900s", form: "Nostalgie", context: "Psychiatry redefines it as psychological", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "Global", period: "present", form: "nostalgia", context: "Marketing force and cultural phenomenon", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Greek roots", ipa: "/ˈnos.tos ˈal.ɡos/", text: "nostos + algos", lang: "grc" },
      { label: "Medical Latin", ipa: "/nos.ˈtal.ɡi.a/", text: "nostalgia", lang: "la" },
      { label: "English", ipa: "/nɒˈstæl.dʒə/", text: "nostalgia", lang: "en" }
    ],
    relatives: [
      { word: "nostos", language: "Greek", connection: "homecoming—the Odyssey is a nostos story", available: false },
      { word: "neuralgia", language: "Medical Latin", connection: "nerve pain, same -algia suffix", available: false },
      { word: "wanderlust", language: "German", connection: "opposite impulse—desire to leave home", available: true, slug: "wanderlust" },
      { word: "saudade", language: "Portuguese", connection: "similar bittersweet longing", available: true, slug: "saudade" }
    ],
    meaningNow: "Nostalgia has completed a strange journey from fatal disease to pleasant emotion. We now cultivate it deliberately—retro aesthetics, reunion tours, vintage filters. Nostalgia sells everything from cars to political candidates.\n\nBut the word still carries warning. Those Swiss soldiers weren't enjoying their memories; they were dying of them. Perhaps our collective nostalgia epidemic—the longing for imagined pasts, the suspicion that things were better before—is not as harmless as it feels. The old diagnosis may have been onto something."
  },
  {
    slug: "perestroika",
    word: "перестройка",
    romanization: "perestroyka",
    language: "Russian",
    hook: "\"Restructuring\" was supposed to save the Soviet Union—it ended an empire instead.",
    story: [
      "In Russian, perestroika simply means restructuring or rebuilding—pere (re-) plus stroika (building, construction). It's the kind of word you might use for renovating a house. But when Mikhail Gorbachev adopted it in 1985 as the name for his reform program, it became one of the most consequential words of the 20th century.",
      "Gorbachev believed the Soviet system could be reformed from within. Perestroika aimed to decentralize the economy, allow limited private enterprise, and modernize the bureaucracy. It was paired with glasnost (openness)—more transparency, less censorship. Together, they were meant to strengthen Soviet socialism.",
      "Instead, they accelerated its collapse. Once people could speak freely, they said things the system couldn't survive. Once the economy loosened, it revealed how dysfunctional it had become. By 1991, the Soviet Union had dissolved into fifteen independent nations.",
      "The word entered English instantly—untranslated, because \"restructuring\" couldn't capture the magnitude. Time magazine named Gorbachev its \"Man of the Decade.\" Perestroika became shorthand for well-intentioned reform that triggers unintended revolution."
    ],
    journey: [
      { location: "Russia", period: "ancient", form: "перестройка", script: "перестройка", context: "Ordinary word for rebuilding", color: "#4a5568", coordinates: [37.6, 55.8] },
      { location: "Moscow", period: "1985", form: "perestroika", context: "Gorbachev announces reform program", color: "#4a3b6b", coordinates: [37.6, 55.8] },
      { location: "Washington DC", period: "1987", form: "perestroika", context: "Reagan-Gorbachev summits spread the word", color: "#4a5568", coordinates: [-77, 38.9] },
      { location: "Berlin", period: "1989", form: "Perestroika", context: "Wall falls amid Soviet reforms", color: "#4a5568", coordinates: [13.4, 52.5] },
      { location: "Global", period: "1991+", form: "perestroika", context: "USSR dissolves; word enters history", coordinates: [37.6, 55.8] }
    ],
    sounds: [
      { label: "Russian", ipa: "/pʲɪrʲɪˈstrojkə/", text: "перестройка", lang: "ru" },
      { label: "English", ipa: "/ˌpɛr.əˈstrɔɪ.kə/", text: "perestroika", lang: "en" }
    ],
    relatives: [
      { word: "glasnost", language: "Russian", connection: "openness—the other half of Gorbachev's reforms", available: false },
      { word: "stroika", language: "Russian", connection: "building, construction—the root word", available: false },
      { word: "sputnik", language: "Russian", connection: "another Russian word that entered English unchanged", available: true, slug: "sputnik" }
    ],
    meaningNow: "Perestroika has become a cautionary tale for reformers. Gorbachev wanted to fix the system; he ended it. The word now suggests that some structures cannot be restructured—they can only be replaced.\n\nIn Russia today, perestroika remains controversial. Some see it as a tragic error that destroyed a superpower; others as the beginning of freedom. The word carries all these judgments. It reminds us that reform, once started, may go places its authors never intended."
  },
  {
    slug: "kung-fu",
    word: "功夫",
    romanization: "gōngfu",
    language: "Cantonese/Mandarin Chinese",
    hook: "It never meant martial arts—it meant mastery of anything, achieved through time.",
    story: [
      "In Chinese, gōngfu (功夫) combines gōng (achievement, merit, work) with fu (man, or time spent). The compound means skill achieved through hard work and practice—any skill. A chef has gōngfu. A calligrapher has gōngfu. A parent raising children with patience has gōngfu. The word describes mastery earned through dedicated effort over time.",
      "How did a general term for skill become synonymous with martial arts in the West? When martial arts films emerged from Hong Kong in the 1970s, Western audiences heard characters praised for their gōngfu. English speakers assumed the word meant the fighting itself, not the expertise behind it.",
      "Bruce Lee's films cemented the association. Suddenly \"kung fu\" meant kicks and punches. The Kung Fu television series (1972-1975) brought the word into American living rooms. By the time \"Kung Fu Fighting\" topped the charts in 1974, the transformation was complete.",
      "The original meaning persists in Chinese. You can compliment someone's tea-making gōngfu or their gōngfu with numbers. But in English, kung fu now belongs almost exclusively to martial arts—a narrowing that would puzzle Chinese speakers."
    ],
    journey: [
      { location: "China", period: "ancient", form: "gōngfu", script: "功夫", context: "General term for skill through practice", color: "#2d4a3b", coordinates: [116.4, 39.9] },
      { location: "Guangzhou", period: "1800s", form: "gung fu", script: "功夫", context: "Cantonese pronunciation spreads with emigration", color: "#2d4a3b", coordinates: [113.3, 23.1] },
      { location: "Hong Kong", period: "1970s", form: "kung fu", context: "Martial arts films go global", color: "#2d4a3b", coordinates: [114.2, 22.3] },
      { location: "Hollywood", period: "1972", form: "kung fu", context: "TV series and Bruce Lee films", color: "#4a5568", coordinates: [-118.3, 34.1] },
      { location: "Global", period: "present", form: "kung fu", context: "Synonymous with Chinese martial arts", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Mandarin", ipa: "/kʊŋ˥ fu˥/", text: "功夫", lang: "zh" },
      { label: "Cantonese", ipa: "/kʊŋ˥ fu˥/", text: "功夫", lang: "yue" },
      { label: "English", ipa: "/ˌkʌŋ ˈfuː/", text: "kung fu", lang: "en" }
    ],
    relatives: [
      { word: "wushu", language: "Chinese", connection: "actual Chinese term for martial arts", available: false },
      { word: "gōng", language: "Chinese", connection: "work, achievement—half of gōngfu", available: false },
      { word: "qi/chi", language: "Chinese", connection: "vital energy cultivated through practice", available: false },
      { word: "dim sum", language: "Cantonese", connection: "another Cantonese term that traveled via Hong Kong", available: true, slug: "dim-sum" }
    ],
    meaningNow: "Kung fu's narrowed meaning is a loss. The original concept—that mastery comes from patient, sustained practice—applies to everything. There's kung fu in coding, in gardening, in parenting.\n\nBut perhaps the martial arts association isn't entirely wrong. What those Hong Kong films showed was gōngfu made visible: years of training expressed in moments of extraordinary skill. The word still asks: What have you practiced enough to master?"
  },
  {
    slug: "tomato",
    word: "tomatl",
    romanization: "tomatl",
    language: "Nahuatl (Aztec)",
    hook: "Europeans were convinced it was poison—now it's the heart of Italian cuisine.",
    story: [
      "The Aztecs called it tomatl, meaning \"the swelling fruit.\" When Spanish conquistadors brought the plant back to Europe in the 16th century, they carried the name too. Spanish made it tomate; Italian, pomodoro (\"golden apple\"); and eventually English settled on tomato.",
      "Europeans regarded the tomato with deep suspicion for two centuries. It belonged to the nightshade family, alongside deadly poisonous plants. Its leaves and stems are indeed toxic. Wealthy Europeans who ate tomatoes from pewter plates (high in lead) sometimes died—not from the tomato, but from lead leached by the acidic fruit. The tomato got the blame.",
      "The turning point came in Italy. Poor Neapolitans, unable to afford meat, began combining tomatoes with pasta in the late 18th century. The combination was revolutionary. By the 19th century, pizza and pasta with tomato sauce had transformed Italian cuisine—and the tomato's reputation.",
      "Today the tomato is the world's most consumed fruit (yes, fruit). Italy, which initially feared it, now can't imagine cooking without it. The \"poison apple\" conquered the cuisine of the nation that was most terrified of it."
    ],
    journey: [
      { location: "Mexico", period: "ancient", form: "tomatl", script: "tomatl", context: "Aztecs cultivate many varieties", color: "#8b5a2b", coordinates: [-99.1, 19.4] },
      { location: "Spain", period: "1540s", form: "tomate", context: "Conquistadors bring it to Europe", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Italy", period: "1550s", form: "pomodoro", context: "Regarded with suspicion as poison apple", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Naples", period: "1790s", form: "pomodoro", context: "Combined with pasta, transforms cuisine", color: "#5c5a4a", coordinates: [14.3, 40.8] },
      { location: "Global", period: "present", form: "tomato", context: "Most consumed fruit worldwide", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Nahuatl", ipa: "/toˈmatɬ/", text: "tomatl", lang: "nah" },
      { label: "Spanish", ipa: "/toˈma.te/", text: "tomate", lang: "es" },
      { label: "English (US)", ipa: "/təˈmeɪ.toʊ/", text: "tomato", lang: "en-US" },
      { label: "English (UK)", ipa: "/təˈmɑː.təʊ/", text: "tomato", lang: "en-GB" }
    ],
    relatives: [
      { word: "avocado", language: "Nahuatl", connection: "another Aztec food word that conquered the world", available: true, slug: "avocado" },
      { word: "chocolate", language: "Nahuatl", connection: "yet another—Aztec words fill our kitchens", available: true, slug: "chocolate" },
      { word: "pomodoro", language: "Italian", connection: "golden apple—Italian name for tomato", available: false },
      { word: "jitomate", language: "Mexican Spanish", connection: "Mexican term distinguishing red tomato", available: false }
    ],
    meaningNow: "The tomato's journey from poison to staple is a lesson in how fear and unfamiliarity shape perception. For 200 years, Europeans \"knew\" the tomato was dangerous. They were wrong.\n\nToday, cuisines that feel ancient and authentic—Italian, Mexican, Indian—would be unrecognizable without tomatoes. Yet the plant is a New World native, absent from all these traditions until recently. The tomato reminds us that \"traditional\" cuisine is often surprisingly young, built from ingredients that traveled farther than we imagine."
  },
  {
    slug: "ukulele",
    word: "ʻukulele",
    romanization: "'ukulele",
    language: "Hawaiian",
    hook: "Portuguese sailors brought the instrument—Hawaiians named it \"jumping flea.\"",
    story: [
      "In 1879, the ship Ravenscrag arrived in Honolulu carrying Portuguese workers from Madeira to labor in Hawaii's sugar cane fields. Among the immigrants were cabinet makers who brought their machetes and rajaos—small four-stringed instruments from the Azores and Madeira.",
      "Hawaiians were enchanted by the instruments and the nimble fingerwork of the players. They gave the instrument a new name: ʻukulele, commonly translated as \"jumping flea.\" The name may describe how the player's fingers hop across the strings, or it may have been the nickname of Edward William Purvis, a small, energetic Englishman who popularized the instrument at the Hawaiian royal court.",
      "King Kalākaua championed the ukulele, incorporating it into royal performances and Hawaiian music. It became inseparable from Hawaiian identity. When Hawaii became a US territory and then a state, the ukulele traveled to the mainland—featured in Tin Pan Alley songs, vaudeville acts, and eventually the hands of musicians like Tiny Tim and Israel Kamakawiwoʻole.",
      "The instrument has seen multiple revivals. Today it's one of the world's most popular instruments for beginners—portable, affordable, and genuinely joyful to play. The jumping flea has hopped around the world."
    ],
    journey: [
      { location: "Madeira", period: "1800s", form: "machete/rajao", context: "Portuguese ancestors of the ukulele", color: "#5c5a4a", coordinates: [-16.9, 32.6] },
      { location: "Honolulu", period: "1879", form: "ʻukulele", script: "ʻukulele", context: "Portuguese immigrants arrive with instruments", color: "#4a7c7c", coordinates: [-157.8, 21.3] },
      { location: "Hawaiian Kingdom", period: "1880s", form: "ʻukulele", context: "King Kalākaua promotes it at court", color: "#4a7c7c", coordinates: [-157.8, 21.3] },
      { location: "San Francisco", period: "1915", form: "ukulele", context: "Panama-Pacific Exposition spreads craze", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "2000s+", form: "ukulele", context: "YouTube tutorials spark new revival", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hawaiian", ipa: "/ʔuːkuˈlɛlɛ/", text: "ʻukulele", lang: "haw" },
      { label: "English", ipa: "/ˌjuː.kəˈleɪ.li/", text: "ukulele", lang: "en" }
    ],
    relatives: [
      { word: "hula", language: "Hawaiian", connection: "the dance often accompanied by ukulele", available: true, slug: "hula" },
      { word: "machete", language: "Portuguese", connection: "the Madeiran instrument ancestor", available: false },
      { word: "guitar", language: "Spanish", connection: "larger cousin in the string family", available: false },
      { word: "wiki", language: "Hawaiian", connection: "another Hawaiian word that went global", available: true, slug: "wiki" }
    ],
    meaningNow: "The ukulele carries complicated history. Like hula, it became both a symbol of Hawaiian culture and a prop for tourist kitsch—grass skirts, plastic leis, \"Tiny Bubbles.\" Yet it also represents Hawaiian resilience, an indigenous adaptation of foreign instruments into something distinctly Hawaiian.\n\nToday's ukulele boom has moved beyond Hawaiian stereotypes. The instrument appears in indie rock, pop, and classrooms worldwide. The jumping flea keeps leaping into new contexts, its cheerful voice impossible to silence."
  },
  {
    slug: "jukebox",
    word: "juke",
    romanization: "juke",
    language: "Gullah (from West African languages)",
    hook: "\"Disorderly\" roadhouses gave America the music machine.",
    story: [
      "The word juke comes from the Gullah language spoken by African Americans in the coastal regions of South Carolina and Georgia. Gullah juke (or joog) meant disorderly, wicked, or rowdy—likely derived from the Wolof word dzug (to live wickedly) or similar West African terms brought by enslaved people.",
      "By the late 19th century, juke joints were the roadhouses, bars, and dance halls where Black southerners could gather outside white surveillance. These were often rough places—drinking, dancing, gambling, and music happened there. The music was blues, and it was live.",
      "When coin-operated music machines appeared in the 1930s, they found their natural home in juke joints. The machines were called jukeboxes—boxes that played music in jukes. The word captured both the technology and its context: automated entertainment for places too disreputable for respectable musicians.",
      "The jukebox era peaked in the 1940s and 50s, when 75% of records produced went into jukeboxes. The machines spread far beyond their origins, landing in diners and soda shops. But the word still carries its Gullah DNA—the legacy of Black American spaces where the music played on."
    ],
    journey: [
      { location: "West Africa", period: "ancient", form: "dzug/jug", context: "Wolof and related words for wickedness", color: "#8b5a2b", coordinates: [-15, 14] },
      { location: "South Carolina/Georgia", period: "1800s", form: "juke", script: "juke", context: "Gullah word for disorderly, rowdy", color: "#6b2d3d", coordinates: [-80, 32] },
      { location: "American South", period: "1890s", form: "juke joint", context: "Black roadhouses and music venues", color: "#6b2d3d", coordinates: [-90, 32] },
      { location: "USA", period: "1930s", form: "jukebox", context: "Coin-operated music machines named", color: "#4a5568", coordinates: [-87.6, 41.9] },
      { location: "Global", period: "1940s-50s", form: "jukebox", context: "Peak era, 75% of records go to jukeboxes", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Gullah", ipa: "/dʒuːk/", text: "juke", lang: "gul" },
      { label: "American English", ipa: "/dʒuːk.bɒks/", text: "jukebox", lang: "en-US" }
    ],
    relatives: [
      { word: "juke joint", language: "American English", connection: "the roadhouses where the word was born", available: false },
      { word: "jazz", language: "American English", connection: "another music word with possible African roots", available: true, slug: "jazz" },
      { word: "banjo", language: "Kimbundu", connection: "another musical term from African languages", available: true, slug: "banjo" },
      { word: "boogie", language: "American English", connection: "possibly from Hausa buga (to beat drums)", available: false }
    ],
    meaningNow: "The jukebox is mostly nostalgia now—a retro curiosity in themed diners. But the word preserves something important: the centrality of Black American culture to American music and language.\n\nJuke joints were spaces of autonomy and creativity in the Jim Crow South. The music that poured from them—blues, R&B, early rock and roll—shaped everything that came after. When we say jukebox, we're using a word from the African diaspora to describe technology that democratized music. The disorderly houses made American culture."
  },
  {
    slug: "yurt",
    word: "yurt",
    romanization: "yurt",
    language: "Turkic (via Russian)",
    hook: "Portable homes that crossed continents—the architecture of empires on horseback.",
    story: [
      "Across the Central Asian steppe, nomadic peoples developed a remarkable dwelling: a circular tent with a collapsible wooden frame, covered in felt made from their animals' wool. It could be assembled in hours, disassembled just as fast, and carried by horses or camels to the next pasture.",
      "Different Turkic and Mongolic peoples called it different names—ger in Mongolian, öy or üy in various Turkic languages. The word yurt (or yurta) entered Russian, meaning homeland or dwelling place, and from Russian it spread to European languages. In Turkic languages, yurt originally meant \"homeland\" or \"territory\"—the dwelling was your portable homeland.",
      "These structures sheltered the armies of Genghis Khan as they built the largest contiguous land empire in history. The Mongol yurt (ger) was a military technology as much as a home—entire armies could relocate at speed. The round shape withstood the fierce steppe winds; the felt insulated against brutal cold.",
      "Today yurts have found new lives: eco-tourism in Mongolia, glamping in California, housing alternatives in high-cost cities. The ancient nomadic dwelling has become a symbol of simple, sustainable living—though actual Central Asian herders increasingly live in permanent homes."
    ],
    journey: [
      { location: "Central Asian Steppe", period: "~3000 BCE", form: "various", context: "Nomadic peoples develop portable dwellings", color: "#8b5a2b", coordinates: [68, 45] },
      { location: "Mongol Empire", period: "1200s", form: "ger", context: "Shelters Genghis Khan's armies", color: "#8b5a2b", coordinates: [106.9, 47.9] },
      { location: "Russia", period: "1600s+", form: "yurta", script: "юрта", context: "Russian word spreads westward", color: "#4a5568", coordinates: [55, 55] },
      { location: "Europe/America", period: "1800s", form: "yurt", context: "Enters Western languages via travelogues", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "2000s+", form: "yurt", context: "Eco-tourism and alternative housing", coordinates: [-122.4, 37.8] }
    ],
    sounds: [
      { label: "Turkic", ipa: "/jurt/", text: "yurt", lang: "tr" },
      { label: "Russian", ipa: "/jurtə/", text: "юрта", lang: "ru" },
      { label: "Mongolian", ipa: "/ɡer/", text: "гэр", lang: "mn" },
      { label: "English", ipa: "/jɜːrt/", text: "yurt", lang: "en" }
    ],
    relatives: [
      { word: "ger", language: "Mongolian", connection: "Mongolian term, often preferred by Mongolians", available: false },
      { word: "khan", language: "Turkic/Mongolic", connection: "title of the rulers whose armies used yurts", available: true, slug: "khan" },
      { word: "steppe", language: "Russian", connection: "the grassland where yurt culture developed", available: false },
      { word: "nomad", language: "Greek", connection: "the lifestyle yurts made possible", available: false }
    ],
    meaningNow: "The yurt has become romanticized in the West—a symbol of minimalism, sustainability, and escape from modern life. Airbnb lists thousands of yurt rentals; companies sell yurt kits for backyard living.\n\nBut for the herders who still use them, yurts are practical necessities, not lifestyle choices. As climate change disrupts traditional grazing patterns and young people leave for cities, the yurt's future in its homeland is uncertain. The word may outlast the way of life that created it—portable homeland becoming nostalgic artifact."
  },
  {
    slug: "hubris",
    word: "ὕβρις",
    romanization: "hybris",
    language: "Ancient Greek",
    hook: "The Greeks knew: excessive pride summons its own destruction.",
    story: [
      "In ancient Greek, hybris (ὕβρις) meant more than pride—it described a specific kind of transgression. Hybris was the arrogance of overstepping boundaries: humans acting like gods, mortals defying fate, the powerful humiliating the weak for pleasure. It was both a crime and a cosmic violation.",
      "Greek tragedy is obsessed with hubris. Oedipus believes he can escape prophecy. Agamemnon walks on purple carpets meant for gods. Icarus flies too close to the sun. Each act of hybris calls down nemesis—divine retribution that restores balance. The pattern is so consistent it becomes a law: hubris invites destruction.",
      "The concept entered English in the late 19th century, often in discussions of Greek literature. By the 20th century, hubris had expanded beyond classical contexts. Political hubris, corporate hubris, the hubris of empire—the word found new applications everywhere humans reached too far.",
      "Today hubris appears in business schools and political analysis, in Silicon Valley postmortems and military histories. The Greeks gave us a word for the pride that precedes the fall—and we keep finding uses for it."
    ],
    journey: [
      { location: "Greece", period: "~800 BCE", form: "hybris", script: "ὕβρις", context: "Central concept in Greek tragedy and law", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Athens", period: "500-400 BCE", form: "hybris", context: "Tragic playwrights explore the concept", color: "#5c5a4a", coordinates: [23.7, 37.9] },
      { location: "Rome", period: "100 BCE+", form: "hubris", context: "Adopted into Latin discussions of Greek thought", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "England", period: "1880s", form: "hubris", context: "Enters English via classical scholarship", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "hubris", context: "Applied to business, politics, technology", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/hý.bris/", text: "ὕβρις", lang: "grc" },
      { label: "English", ipa: "/ˈhjuː.brɪs/", text: "hubris", lang: "en" }
    ],
    relatives: [
      { word: "nemesis", language: "Greek", connection: "divine retribution that answers hubris", available: false },
      { word: "tragedy", language: "Greek", connection: "the genre that explored hubris most deeply", available: false },
      { word: "chaos", language: "Greek", connection: "another Greek concept that structures Western thought", available: true, slug: "chaos" },
      { word: "chutzpah", language: "Yiddish", connection: "sometimes compared—audacity, but without cosmic punishment", available: false }
    ],
    meaningNow: "Hubris has become a secular prophecy. We use it to explain corporate collapses (Enron's hubris), political disasters (the hubris of invading Iraq), and technological overreach (the hubris of \"move fast and break things\").\n\nThe word carries a warning the Greeks embedded in their culture: there are limits. Crossing them may feel like triumph, but the bill comes due. In an age of moon shots and world-changing ambitions, hubris asks a simple question: What if we're wrong about what we can control?"
  },
  {
    slug: "emoji",
    word: "絵文字",
    romanization: "emoji",
    language: "Japanese",
    hook: "Picture + character = the universal language we invented without trying.",
    story: [
      "In Japanese, emoji combines e (絵, picture) and moji (文字, character or letter). The word simply means picture-character—a way of writing with images. It has nothing to do with the English word \"emotion,\" despite the common assumption. The similarity is pure coincidence.",
      "The first emoji set was created in 1999 by Shigetaka Kurita for the Japanese mobile carrier NTT DoCoMo. Kurita designed 176 simple 12x12 pixel images—hearts, weather symbols, arrows, expressions—to make mobile communication easier. Japanese teens adopted them instantly.",
      "For years, emoji remained a Japanese phenomenon, incompatible across carriers and countries. Then Apple included an emoji keyboard in the iPhone (2011), and Google followed. Unicode—the consortium that standardizes text encoding—began adding emoji officially. Suddenly, picture-characters were universal.",
      "Today there are over 3,600 emoji, with more added each year. They've become a global pidgin, crossing language barriers with a vocabulary of faces, gestures, objects, and symbols. The Japanese picture-characters have become humanity's first truly universal writing system."
    ],
    journey: [
      { location: "Japan", period: "ancient", form: "絵文字", script: "絵文字", context: "Word exists for picture-writing generally", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Tokyo", period: "1999", form: "emoji", context: "Shigetaka Kurita creates first set for DoCoMo", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Cupertino", period: "2011", form: "emoji", context: "Apple adds emoji keyboard to iPhone", color: "#4a5568", coordinates: [-122, 37.3] },
      { location: "Mountain View", period: "2010s", form: "emoji", context: "Unicode Consortium standardizes emoji", color: "#4a5568", coordinates: [-122.1, 37.4] },
      { location: "Global", period: "present", form: "emoji", context: "3,600+ emoji, billions of daily uses", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/emodʑi/", text: "絵文字", lang: "ja" },
      { label: "English", ipa: "/ɪˈmoʊ.dʒi/", text: "emoji", lang: "en" }
    ],
    relatives: [
      { word: "kaomoji", language: "Japanese", connection: "text-based emoticons like (╯°□°)╯︵ ┻━┻", available: false },
      { word: "emoticon", language: "English", connection: "predecessor using punctuation marks :)", available: false },
      { word: "kanji", language: "Japanese", connection: "logographic characters, similar concept", available: false },
      { word: "manga", language: "Japanese", connection: "another Japanese visual language that went global", available: false }
    ],
    meaningNow: "Emoji have become surprisingly complex. What started as simple pictographs now sparks debates about representation (skin tone options), interpretation (what does 🙃 really mean?), and even legal evidence (courts have considered emoji as intent).\n\nThe word itself reminds us that writing has always included pictures—from cave paintings to hieroglyphics to illuminated manuscripts. Emoji aren't a degradation of language; they're a return to something ancient. We're all writing in picture-characters now, just as humans have for thousands of years. The Japanese just gave it a name."
  },
  {
    slug: "sarong",
    word: "sarung",
    romanization: "sarung",
    language: "Malay",
    hook: "One rectangle of cloth, wrapped a thousand different ways across the tropics.",
    story: [
      "In Malay, sarung means sheath or covering—from the same root that gives us the word for a knife's scabbard. The garment is simplicity itself: a large rectangle of cloth, sewn into a tube, wrapped around the body. How it's wrapped, what it's made of, and what it signifies vary enormously across cultures.",
      "The sarong (or sarung, or lungi, or countless other names) appears throughout South and Southeast Asia, the Pacific Islands, East Africa, and the Arabian Peninsula. It predates tailored clothing in tropical climates—why sew complicated garments when a draped cloth handles heat, humidity, and modesty perfectly?",
      "European colonizers encountered sarongs everywhere in the tropics. The word entered English through trade with the Malay Archipelago. To Western eyes, the sarong seemed primitive—\"native dress\" to be replaced by proper trousers. But the garment outlasted colonialism, remaining everyday wear across much of the world.",
      "In the West, the sarong became beachwear and resort fashion—an exotic vacation accessory. In its home regions, it remains practical clothing: wrapped as a skirt, tied as a baby carrier, rolled as a pillow, spread as a prayer mat. One cloth, infinite uses."
    ],
    journey: [
      { location: "Maritime Southeast Asia", period: "ancient", form: "sarung", script: "sarung", context: "Practical garment for tropical climates", color: "#4a7c7c", coordinates: [110, -5] },
      { location: "Indonesia/Malaysia", period: "1500s+", form: "sarung", context: "Batik sarongs become high art", color: "#4a7c7c", coordinates: [110.4, -7.8] },
      { location: "India", period: "ancient", form: "lungi", context: "Similar garment, different name", color: "#8b5a2b", coordinates: [78, 13] },
      { location: "Europe", period: "1800s", form: "sarong", context: "Colonial travelers bring word back", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "sarong", context: "Beach fashion and traditional dress", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Malay", ipa: "/saˈruŋ/", text: "sarung", lang: "ms" },
      { label: "Indonesian", ipa: "/saˈruŋ/", text: "sarung", lang: "id" },
      { label: "English", ipa: "/səˈrɒŋ/", text: "sarong", lang: "en" }
    ],
    relatives: [
      { word: "lungi", language: "Hindi/Tamil", connection: "South Asian equivalent garment", available: false },
      { word: "batik", language: "Javanese", connection: "the wax-resist technique that decorates many sarongs", available: false },
      { word: "toga", language: "Latin", connection: "Roman draped garment, similar concept", available: false },
      { word: "kanga", language: "Swahili", connection: "East African rectangular cloth with proverbs", available: false }
    ],
    meaningNow: "The sarong challenges Western assumptions about clothing. It's not shaped to the body; the body shapes it. It's not gendered in the way pants and skirts are. It's not fixed—the same cloth can be a skirt, a dress, a blanket, a bag.\n\nIn an age of fast fashion and overflowing closets, the sarong suggests another way: one versatile garment, worn for a lifetime, its meaning shifting with each wrap. The Malay word for \"sheath\" covers more than bodies—it covers a philosophy of enough."
  }
];
