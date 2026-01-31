import type { Word } from "./word-types";

export const batch23: Word[] = [
  {
    slug: "algebra",
    word: "الجبر",
    romanization: "al-jabr",
    language: "Arabic",
    hook: "A 9th-century book about 'restoring broken parts' gave mathematics its most feared subject.",
    story: [
      "In 820 CE, the Persian mathematician al-Khwārizmī published a book in Baghdad with the title al-Kitāb al-Mukhtaṣar fī Ḥisāb al-Jabr wal-Muqābala—'The Compendious Book on Calculation by Completion and Balancing.' The key word was al-jabr, meaning 'the reunion of broken parts'—the process of moving a subtracted quantity to the other side of an equation to make it whole.",
      "The concept was revolutionary. Al-Khwārizmī wasn't just solving equations—he was creating a systematic method for doing so, turning ad-hoc tricks into a discipline. His book was translated into Latin in the 12th century by Robert of Chester as Liber Algebrae et Almucabola, and the word algebra entered European languages.",
      "Before algebra, European mathematics was stuck in geometry and arithmetic. Algebra provided the tools to think abstractly about unknown quantities—to use letters for numbers, to manipulate equations symbolically. It was the gateway to calculus, physics, and eventually computer science.",
      "The Arabic word al-jabr had also been used in a medical sense—bone-setting, the restoration of broken bones. In medieval Spain, an algebrista was both a bonesetter and a mathematician. The connection is poetic: algebra repairs what's broken, whether it's a bone or an equation."
    ],
    journey: [
      { location: "Baghdad", period: "820 CE", form: "al-jabr", script: "الجبر", context: "Al-Khwārizmī's foundational mathematical text", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Córdoba", period: "900s", form: "al-jabr", context: "Islamic Spain centers of mathematical learning", color: "#4a3b6b", coordinates: [-4.8, 37.9] },
      { location: "Toledo", period: "1145", form: "algebra", script: "algebra", context: "Robert of Chester Latin translation", color: "#5c5a4a", coordinates: [-4, 39.9] },
      { location: "Italy", period: "1500s", form: "algebra", context: "Italian mathematicians Cardano Fibonacci extend the field", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Global", period: "present", form: "algebra", context: "Foundation of modern mathematics and computation", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/al.dʒabr/", text: "الجبر", lang: "ar" },
      { label: "English", ipa: "/ˈæl.dʒɪ.bɹə/", text: "algebra", lang: "en" }
    ],
    relatives: [
      { word: "algorithm", language: "English", connection: "from al-Khwārizmī's name—same mathematician same book", available: true, slug: "algorithm" },
      { word: "zero", language: "English", connection: "from Arabic ṣifr—essential concept for algebraic notation", available: true, slug: "zero" },
      { word: "zenith", language: "English", connection: "another Arabic scientific term in English", available: true, slug: "zenith" }
    ],
    meaningNow: "Algebra is the school subject most people remember with dread. 'When will I ever use this?' is the universal student complaint. The answer, invisibly, is always: every algorithm, every spreadsheet, every GPS calculation, every search engine result runs on algebra.\n\nAl-Khwārizmī's book on 'restoring broken parts' built the mathematical language the modern world thinks in. The repair was so successful that we can't see the break anymore."
  },
  {
    slug: "lullaby",
    word: "lulla bi",
    romanization: "lulla bi",
    language: "Middle English",
    hook: "The oldest type of song in every language—and nobody knows where the word really came from.",
    story: [
      "Lullaby appears in English by the 1560s, but its components are much older. The lull- element likely imitates the soothing sounds mothers make to quiet infants—'lu lu lu' or 'la la la'—sounds that transcend language. The -by may come from bye-bye, the sound of settling to sleep, or possibly from a Scandinavian source.",
      "What's remarkable is that nearly every language has arrived at similar sounds independently. Turkish has ninni, Hebrew has laila (night), Japanese has nenne, Swahili has lala (sleep), and many languages use repetitive 'l' and 'n' sounds in their sleep songs. Linguists believe these sounds aren't arbitrary—they're shaped by the biology of infant soothing.",
      "The earliest known written lullaby isn't English at all—it's a Babylonian clay tablet from around 2000 BCE, in which a mother threatens her baby: be quiet or the demon will eat you. Lullabies across cultures contain surprising darkness: 'Rock-a-bye Baby' features a cradle falling from a tree. The gentleness of the melody masks disturbing content, as if parents have always needed to sing out their anxieties.",
      "The word lullaby is onomatopoeia—a sound becoming a word becoming a genre. It's one of the few English words that does what it describes: the sounds l, u, and b are themselves soothing. The word lulls."
    ],
    journey: [
      { location: "Mesopotamia", period: "~2000 BCE", form: "unknown", context: "Earliest known written lullaby Babylonian clay tablet", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Europe", period: "medieval", form: "lullen", context: "Middle English to lull to soothe", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "England", period: "1560s", form: "lullaby", script: "lullaby", context: "First recorded use combines lull and by", color: "#4a5568", coordinates: [-1.3, 51.8] },
      { location: "England", period: "1765", form: "lullaby", context: "Rock-a-bye Baby published in Mother Goose", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "lullaby", context: "Universal genre every culture has sleep songs", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Middle English", ipa: "/ˈlʊl.ə.biː/", text: "lullaby", lang: "en" },
      { label: "Modern English", ipa: "/ˈlʌl.ə.baɪ/", text: "lullaby", lang: "en" }
    ],
    relatives: [
      { word: "lull", language: "English", connection: "to calm to soothe—the root verb", available: false },
      { word: "berceuse", language: "French", connection: "from bercer to rock—French equivalent", available: false },
      { word: "Wiegenlied", language: "German", connection: "cradle-song—Brahms' famous lullaby", available: false }
    ],
    meaningNow: "Every parent since the beginning of human history has sung their child to sleep. The specific words change; the sounds don't. The 'l' sounds, the repetition, the descending melody—these are biological constants, hardwired into the relationship between adult voice and infant brain.\n\nLullaby is a word that names something older than words. Before language, before culture, before history—there was a sound, and a child fell asleep."
  },
  {
    slug: "monsoon",
    word: "موسم",
    romanization: "mawsim",
    language: "Arabic",
    hook: "Arab sailors named the season, not the storm—because they waited all year for the wind to change direction.",
    story: [
      "In Arabic, mawsim (موسم) means 'season' or 'appointed time'—from the root w-s-m, to mark or brand. Arab and Indian Ocean sailors used the word to describe the seasonal reversal of winds across the Indian Ocean: six months blowing northeast, six months blowing southwest. These predictable winds were the engine of maritime trade for millennia.",
      "The Portuguese encountered the word when they reached the Indian Ocean in the 1490s. They adapted it as monção. Dutch traders picked it up as monssoen. English arrived at monsoon by the late 1500s. But each European language narrowed the meaning: from 'season' to 'seasonal wind' to, eventually, 'torrential rain.'",
      "The original Arab meaning was about time, not weather. Mawsim marked when trade was possible—when you could sail from Arabia to India or from India to East Africa. The monsoon wasn't something to endure; it was something to harness. Entire civilizations were built on its schedule.",
      "Today in English, monsoon almost exclusively means heavy rain—often with connotations of flooding and disaster. The transformation from 'trading season' to 'destructive rainfall' tracks a broader European misunderstanding: they experienced the monsoon as something that happened to them, while Indian Ocean peoples experienced it as something they worked with."
    ],
    journey: [
      { location: "Arabian Sea", period: "ancient", form: "mawsim", script: "موسم", context: "Arab sailors seasonal wind reversal trade timing", color: "#4a3b6b", coordinates: [60, 15] },
      { location: "Calicut", period: "1498", form: "monção", context: "Portuguese encounter monsoon winds reaching India", color: "#8b5a2b", coordinates: [75.8, 11.3] },
      { location: "Amsterdam", period: "1580s", form: "monssoen", context: "Dutch East India Company navigates by monsoons", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "London", period: "1580s", form: "monsoon", script: "monsoon", context: "English adoption seasonal wind and rain", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "monsoon", context: "Heavy seasonal rainfall especially South Asia", coordinates: [78, 25] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/maw.sim/", text: "موسم", lang: "ar" },
      { label: "English", ipa: "/mɒnˈsuːn/", text: "monsoon", lang: "en" }
    ],
    relatives: [
      { word: "typhoon", language: "English", connection: "Arabic ṭūfān—another weather word from the same trade routes", available: true, slug: "typhoon" },
      { word: "trade winds", language: "English", connection: "the Atlantic equivalent of monsoon-driven sailing", available: false },
      { word: "tsunami", language: "English", connection: "another Asian weather phenomenon named in its native language", available: true, slug: "tsunami" }
    ],
    meaningNow: "Three billion people still live their lives by the monsoon's rhythm. In South Asia, the monsoon's arrival determines the agricultural year—late monsoons mean drought, early ones mean floods, and a good monsoon means a good harvest.\n\nThe Arab sailors who named the mawsim understood something modern weather forecasters are rediscovering: the monsoon isn't a disaster. It's a system. The word originally named something reliable—an appointed time, a marked season. We'd do well to remember that."
  },
  {
    slug: "ketchup",
    word: "鮭汁",
    romanization: "kê-chiap",
    language: "Hokkien Chinese",
    hook: "A fermented fish sauce from Southeast Asia became America's favorite tomato condiment—and the journey makes no sense until you trace every step.",
    story: [
      "In the Hokkien dialect of Chinese, kê-chiap (鮭汁) meant the brine of fermented fish—a pungent, salty liquid used as a seasoning throughout Southeast Asia. Chinese merchants and settlers brought this fish sauce to Malaysia and Indonesia, where it became a staple condiment.",
      "British traders in the Malay Archipelago encountered the sauce in the 1600s and loved it. They brought it home as ketchup or catchup—but the fish sauce didn't travel well and the original ingredients were unavailable in England. So British cooks began experimenting with substitutes: mushroom ketchup, walnut ketchup, anchovy ketchup. Through the 1700s, ketchup meant any number of thin, dark, fermented sauces.",
      "The tomato version emerged in America in the early 1800s. Tomatoes—originally from Mexico, brought to Europe by the Spanish, long considered poisonous by Anglo-Americans—were finally accepted as food. Someone (likely a Philadelphia scientist named James Mease in 1812) had the idea to make a ketchup from tomatoes. By the 1870s, Heinz had industrialized it.",
      "So: a Chinese fish sauce became a Malay condiment became a British mushroom sauce became an American tomato product. Every ingredient changed. The name is the only thing that survived the entire journey."
    ],
    journey: [
      { location: "Fujian", period: "~1600s", form: "kê-chiap", script: "鮭汁", context: "Hokkien fermented fish brine seasoning", color: "#2d4a3b", coordinates: [118.1, 24.5] },
      { location: "Malacca", period: "1600s", form: "kecap", context: "Chinese settlers bring fish sauce to Southeast Asia", color: "#8b5a2b", coordinates: [102.3, 2.2] },
      { location: "London", period: "1690s", form: "catchup", script: "catchup", context: "British traders bring sauce home adapt recipe", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Philadelphia", period: "1812", form: "ketchup", script: "ketchup", context: "First tomato-based ketchup recipe published", color: "#4a5568", coordinates: [-75.2, 39.9] },
      { location: "Pittsburgh", period: "1876", form: "ketchup", context: "Heinz industrializes tomato ketchup", color: "#4a5568", coordinates: [-80, 40.4] },
      { location: "Global", period: "present", form: "ketchup", context: "Universal condiment tomato-based", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hokkien", ipa: "/ke˨˩.tɕiap˧/", text: "鮭汁", lang: "zh" },
      { label: "Malay", ipa: "/kə.tʃap/", text: "kecap", lang: "ms" },
      { label: "English", ipa: "/ˈkɛtʃ.ʌp/", text: "ketchup", lang: "en" }
    ],
    relatives: [
      { word: "kecap manis", language: "Indonesian", connection: "sweet soy sauce—same root word different product entirely", available: false },
      { word: "soy sauce", language: "English", connection: "from Japanese shōyu—another Asian fermented sauce that conquered the world", available: false },
      { word: "tomato", language: "English", connection: "from Nahuatl tomatl—the ingredient that transformed ketchup", available: true, slug: "tomato" },
      { word: "kimchi", language: "English", connection: "another fermented condiment word from East Asia", available: true, slug: "kimchi" }
    ],
    meaningNow: "Ketchup is arguably the most consumed condiment on earth. Americans alone eat about 300 million pounds per year. Almost none of them know they're using a Hokkien Chinese word for fish sauce to describe a tomato product.\n\nThe word's journey is a perfect microcosm of globalization: a Chinese product, adapted in Malaysia, reimagined in Britain, reinvented in America, and now served at McDonald's in 120 countries. Every ingredient was replaced. Only the name endured."
  },
  {
    slug: "kangaroo",
    word: "gangurru",
    romanization: "gangurru",
    language: "Guugu Yimithirr",
    hook: "Captain Cook asked what the hopping animal was called—and an Aboriginal man answered in a language Cook couldn't speak.",
    story: [
      "In June 1770, Captain James Cook's ship Endeavour was beached for repairs at what is now Cooktown, in far north Queensland. Cook's crew encountered an animal unlike anything in European experience—a large creature that hopped on two legs and carried its young in a pouch. They asked the local Guugu Yimithirr people what it was called.",
      "The Guugu Yimithirr word was gangurru, referring specifically to the large grey kangaroo. Cook recorded it as 'Kangooroo' or 'Kangaru.' A persistent myth claims the word meant 'I don't understand'—that the Aboriginal man was confused by the question—but this is false. Gangurru is the genuine Guugu Yimithirr name for the animal, confirmed by later linguistic research.",
      "Curiously, when British settlers arrived in Sydney eighteen years later, the local Eora people didn't recognize the word kangaroo—because it came from a language spoken two thousand kilometers north. The British had taken one Aboriginal nation's word and applied it universally, not realizing that Australia contained hundreds of distinct languages with their own names for the animal.",
      "Kangaroo is now one of the most recognizable animal names on earth—on the Australian coat of arms, in idioms ('kangaroo court'), and as the default symbol for an entire continent. But it remains a word from one specific Aboriginal language, universalized by a brief encounter on a beach in 1770."
    ],
    journey: [
      { location: "Cooktown", period: "pre-1770", form: "gangurru", context: "Guugu Yimithirr name for grey kangaroo", color: "#8b5a2b", coordinates: [145.3, -15.5] },
      { location: "Cooktown", period: "1770", form: "kangooroo", context: "Cook records the word during ship repairs", color: "#8b5a2b", coordinates: [145.3, -15.5] },
      { location: "London", period: "1771", form: "kangaroo", script: "kangaroo", context: "Cook's journal published word enters English", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Sydney", period: "1788", form: "kangaroo", context: "British settlers apply the word continent-wide", color: "#8b5a2b", coordinates: [151.2, -33.9] },
      { location: "Global", period: "present", form: "kangaroo", context: "Australian national symbol universal recognition", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Guugu Yimithirr", ipa: "/ɡaŋ.ɡu.ru/", text: "gangurru", lang: "en" },
      { label: "English", ipa: "/ˌkæŋ.ɡəˈɹuː/", text: "kangaroo", lang: "en" }
    ],
    relatives: [
      { word: "boomerang", language: "English", connection: "from Dharuk—another Australian Aboriginal word that went global", available: true, slug: "boomerang" },
      { word: "koala", language: "English", connection: "from Dharuk gula—another Australian animal named in an Aboriginal language", available: false },
      { word: "budgerigar", language: "English", connection: "from Gamilaraay—another Australian Aboriginal animal word", available: false }
    ],
    meaningNow: "Kangaroo is Australia compressed into a word. It's on the coat of arms, the airline logo, the coins. But it's also a reminder of a deeper history: Australia had hundreds of languages before English arrived, each with its own name for everything.\n\nGangurru survived because Cook happened to land at Cooktown and happened to ask that particular group of people. If the Endeavour had beached somewhere else, we'd all be using a completely different word—and wouldn't know the difference."
  },
  {
    slug: "cotton",
    word: "قطن",
    romanization: "quṭn",
    language: "Arabic",
    hook: "The fabric that built the modern world—and the word came from the same language as the trade routes that carried it.",
    story: [
      "Cotton was cultivated independently in at least four places: the Indus Valley, Mesoamerica, sub-Saharan Africa, and possibly Arabia. But the word that conquered most European languages came from Arabic quṭn (قطن), which may derive from an earlier Egyptian or Semitic root.",
      "Arab traders controlled the cotton trade across the Indian Ocean for centuries. They imported raw cotton and finished textiles from India and sold them across the Mediterranean. When Europeans encountered this trade, they borrowed both the product and its name: Spanish algodón (from Arabic al-quṭn), Italian cotone, French coton, English cotton.",
      "Cotton transformed the world more violently than any other crop. The British industrial revolution ran on cotton mills. The American South built a slave economy around cotton cultivation. The cotton gin made slavery more profitable, not less. Indian cotton weavers—the original masters—were deliberately destroyed by British trade policy to protect Lancashire mills.",
      "A single Arabic word now names the fabric in your t-shirt, your jeans, your bedsheets, and your currency (US dollar bills are 75% cotton). The plant, the trade, and the word all followed the same path: from the global south to the industrial north, enriching some and devastating others."
    ],
    journey: [
      { location: "Indus Valley", period: "~3000 BCE", form: "unknown", context: "Earliest cotton cultivation and weaving", color: "#9b4a2c", coordinates: [68, 27] },
      { location: "Arabia", period: "~600 CE", form: "quṭn", script: "قطن", context: "Arabic names the fiber controls Indian Ocean trade", color: "#4a3b6b", coordinates: [44, 21] },
      { location: "Córdoba", period: "900s", form: "al-quṭn", context: "Islamic Spain introduces cotton cultivation to Europe", color: "#4a3b6b", coordinates: [-4.8, 37.9] },
      { location: "Venice", period: "1200s", form: "cotone", script: "cotone", context: "Italian merchants trade in cotton textiles", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Manchester", period: "1700s", form: "cotton", script: "cotton", context: "Industrial revolution cotton mills", color: "#4a5568", coordinates: [-2.2, 53.5] },
      { location: "Mississippi", period: "1800s", form: "cotton", context: "American slave economy King Cotton", color: "#4a5568", coordinates: [-90.2, 32.3] },
      { location: "Global", period: "present", form: "cotton", context: "Most widely used natural fiber on earth", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/qutˤn/", text: "قطن", lang: "ar" },
      { label: "Spanish", ipa: "/al.ɣo.ˈðon/", text: "algodón", lang: "es" },
      { label: "English", ipa: "/ˈkɒt.ən/", text: "cotton", lang: "en" }
    ],
    relatives: [
      { word: "algodón", language: "Spanish", connection: "from al-quṭn—preserves the Arabic article", available: false },
      { word: "khaki", language: "English", connection: "from Persian/Urdu—another fabric word from the same trade world", available: true, slug: "khaki" },
      { word: "muslin", language: "English", connection: "from Mosul Iraq—another fabric named for an Arab trade city", available: false },
      { word: "calico", language: "English", connection: "from Calicut India—named for the port that exported it", available: false }
    ],
    meaningNow: "Cotton is so ordinary now that it's invisible. You're probably touching cotton right now—your clothes, your furniture, your towels. It's the most used natural fiber on earth.\n\nBut the word carries one of history's darkest trade routes: from Indian fields to Arab merchants to European factories to American plantations. Every thread was touched by exploitation. The soft fabric has a brutal history, and the Arabic word that names it is the only thing that traveled the whole route without being damaged."
  },
  {
    slug: "mattress",
    word: "مطرح",
    romanization: "maṭraḥ",
    language: "Arabic",
    hook: "Crusaders discovered something the Arabs already knew—sleeping on the floor is better with a cushion.",
    story: [
      "In Arabic, maṭraḥ (مطرح) means 'a place where something is thrown down' or 'a place of reclining'—from the root ṭ-r-ḥ, to throw or to cast. It described the large floor cushions used throughout the Islamic world for sitting and sleeping—thick, stuffed pads laid on the ground.",
      "European Crusaders encountered this style of sleeping in the Levant during the 11th and 12th centuries. In medieval Europe, most people slept on straw-stuffed sacks or bare wooden platforms. The Islamic world's approach—thick, cushioned sleeping surfaces—was a revelation of comfort the returning knights brought home.",
      "The word entered Old French as materas, Italian as materasso, and eventually English as mattress. Each version gradually lost the Arabic sounds but kept the meaning: a stuffed pad for sleeping. The concept transformed European sleeping habits over centuries.",
      "Modern mattresses—innerspring, memory foam, hybrid—bear no physical resemblance to the floor cushions of medieval Arabia. But the idea is the same: something soft between your body and the hard surface beneath you. The Crusaders came for the Holy Land and came back with better sleep."
    ],
    journey: [
      { location: "Arabia", period: "~700 CE", form: "maṭraḥ", script: "مطرح", context: "Arabic floor cushion for reclining and sleeping", color: "#4a3b6b", coordinates: [44, 21] },
      { location: "Levant", period: "1100s", form: "maṭraḥ", context: "Crusaders encounter Arabic sleeping cushions", color: "#4a3b6b", coordinates: [35.2, 31.8] },
      { location: "Paris", period: "1200s", form: "materas", script: "materas", context: "Old French Crusader vocabulary", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1300s", form: "matress", script: "matress", context: "Middle English adopted from French", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "mattress", context: "Universal sleeping surface multi-billion dollar industry", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/matˤ.raħ/", text: "مطرح", lang: "ar" },
      { label: "Italian", ipa: "/ma.teˈras.so/", text: "materasso", lang: "it" },
      { label: "English", ipa: "/ˈmæt.ɹəs/", text: "mattress", lang: "en" }
    ],
    relatives: [
      { word: "sofa", language: "English", connection: "from Arabic ṣuffa—another Arabic comfort word", available: true, slug: "sofa" },
      { word: "divan", language: "English", connection: "from Persian/Turkish—another reclining furniture word", available: true, slug: "divan" },
      { word: "pillow", language: "English", connection: "from Old English pyle (Latin pulvinus)—the mattress's companion", available: false },
      { word: "cotton", language: "English", connection: "from Arabic quṭn—the material that stuffs the mattress", available: true, slug: "cotton" }
    ],
    meaningNow: "The mattress industry is now worth over $30 billion. We spend roughly a third of our lives on mattresses, and an entire economy of sleep science, memory foam patents, and mattress-in-a-box startups has grown around the simple concept the Crusaders brought home.\n\nEvery night, billions of people lie down on a word borrowed from Arabic, sleeping on a concept the Islamic world refined while medieval Europe was still using straw. The word maṭraḥ—'a place where something is thrown down'—is still exactly what a mattress is."
  },
  {
    slug: "checkmate",
    word: "شاه مات",
    romanization: "shāh māt",
    language: "Persian/Arabic",
    hook: "The king is dead—or is he helpless? A thousand-year debate over what the most famous phrase in chess actually means.",
    story: [
      "Chess originated in India as chaturaṅga around the 6th century CE, then traveled to Persia where it was refined and renamed shatranj. When a player trapped the opponent's king, they declared shāh māt. Shāh is clear—'king' in Persian. But māt is disputed: it could mean 'died' (from Arabic māta), or 'helpless/astonished' (from Persian māt/mānda), or 'defeated.'",
      "Arab armies conquered Persia in the 7th century and adopted chess passionately. The game and its vocabulary spread across the Islamic world—and when Muslim Spain introduced chess to medieval Europe, the Persian-Arabic terminology came with it. Shāh māt became escaque mate in Spanish, scacco matto in Italian, échec et mat in French, and checkmate in English.",
      "The 'check' in checkmate comes from shāh—king. This is the same Persian word that gives us 'shah' as a royal title, and it also spawned the word 'chess' itself (through French échecs). Even the Exchequer—England's treasury—derives from the same root, because medieval accountants used a checkered cloth as a counting board.",
      "So from a single Persian word for 'king,' English gained chess, check, checkmate, Exchequer, and checkers. Five words, one root, all from a board game that traveled from India through Persia through Arabia into Europe—every piece renamed but the fundamental cry unchanged: the king is finished."
    ],
    journey: [
      { location: "India", period: "~600 CE", form: "chaturaṅga", context: "Original Indian chess four divisions of military", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Persia", period: "~650 CE", form: "shāh māt", script: "شاه مات", context: "Persian chess the king is helpless/dead", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Baghdad", period: "~800 CE", form: "shāh māt", context: "Islamic Golden Age chess flourishes", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Córdoba", period: "~1000 CE", form: "escaque mate", context: "Muslim Spain introduces chess to Europe", color: "#5c5a4a", coordinates: [-4.8, 37.9] },
      { location: "London", period: "1300s", form: "checkmate", script: "checkmate", context: "English adopts from Old French", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "checkmate", context: "Universal term decisive victory in chess and metaphor", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Persian", ipa: "/ʃɒːh mɒːt/", text: "شاه مات", lang: "fa" },
      { label: "Arabic", ipa: "/ʃaːh maːt/", text: "شاه مات", lang: "ar" },
      { label: "English", ipa: "/ˈtʃɛk.meɪt/", text: "checkmate", lang: "en" }
    ],
    relatives: [
      { word: "chess", language: "English", connection: "from Old French échecs from Persian shāh—same root", available: false },
      { word: "check", language: "English", connection: "from Old French eschec—shāh said when king is threatened", available: false },
      { word: "Exchequer", language: "English", connection: "from checkered counting cloth—same Persian root", available: false },
      { word: "algorithm", language: "English", connection: "al-Khwārizmī—another gift from the same Islamic Golden Age", available: true, slug: "algorithm" }
    ],
    meaningNow: "Checkmate has escaped the chessboard entirely. Politicians checkmate opponents. Lawyers deliver checkmates in courtrooms. The word means any decisive, inescapable victory.\n\nBut on the board, the original meaning holds: the king is trapped. Not captured—in chess, the king is never actually taken. The game ends with the declaration, not the act. Shāh māt names the moment of recognition: you see there's no escape, and you say so. The word is the weapon."
  },
  {
    slug: "crimson",
    word: "قرمز",
    romanization: "qirmiz",
    language: "Arabic from Sanskrit",
    hook: "The richest red in the ancient world came from crushed insects—and the word for the color traveled farther than the dye.",
    story: [
      "The word crimson traces back through Arabic qirmiz (قرمز) to Sanskrit kṛmi-ja, meaning 'produced by a worm.' The 'worm' was actually a scale insect—Kermes vermilio—that lived on certain oak trees around the Mediterranean. When crushed, these tiny insects produced a brilliant, deep red dye that was among the most prized colors in the ancient world.",
      "The dye and its name spread through Persian and Arabic trade networks. Qirmiz became the Arabic word for both the insect and the color it produced. When the word reached medieval Europe via Arabic, it split: Italian got cremesino (then cremisi), Spanish got carmesí, and English eventually got crimson through Old Spanish and Medieval Latin.",
      "The kermes dye was so valuable that its name also gave us 'carmine'—another red pigment word from the same root. In the 16th century, Spanish conquistadors discovered that the Aztecs had their own superior red dye from a related insect—the cochineal. This Mexican insect produced an even richer red, and it replaced kermes in global trade. But the word crimson survived.",
      "A Sanskrit word for 'worm-born' became the Arabic name for a Mediterranean insect became the English name for a shade of red that we now associate with Harvard University, red wine, and blood. The insects are forgotten. The color endures."
    ],
    journey: [
      { location: "India", period: "ancient", form: "kṛmi-ja", script: "कृमिज", context: "Sanskrit worm-born insect-produced dye", color: "#6b2d3d", coordinates: [78, 25] },
      { location: "Persia", period: "~500 CE", form: "qirmiz", script: "قرمز", context: "Persian/Arabic kermes insect dye trade", color: "#6b2d3d", coordinates: [52, 35.7] },
      { location: "Córdoba", period: "900s", form: "qirmiz", context: "Islamic Spain European textile dyeing center", color: "#6b2d3d", coordinates: [-4.8, 37.9] },
      { location: "Venice", period: "1200s", form: "cremesino", context: "Italian luxury textile trade", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "London", period: "1400s", form: "crimson", script: "crimson", context: "English via Old Spanish medieval Latin", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "crimson", context: "Deep red color Harvard school color literary usage", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/qir.miz/", text: "قرمز", lang: "ar" },
      { label: "English", ipa: "/ˈkɹɪm.zən/", text: "crimson", lang: "en" }
    ],
    relatives: [
      { word: "carmine", language: "English", connection: "from same Arabic root—another red pigment word", available: false },
      { word: "vermilion", language: "English", connection: "from Latin vermiculus little worm—same insect-to-color logic", available: false },
      { word: "scarlet", language: "English", connection: "from Persian saqalāt—another red word from the silk trade", available: false },
      { word: "azure", language: "English", connection: "another color word from Arabic/Persian trade routes", available: true, slug: "azure" }
    ],
    meaningNow: "We see crimson as a natural, obvious color word—as if colors just have names. But crimson had to be manufactured, traded, and named. The deep red that seems timeless was once a luxury extracted from insect bodies, sold at enormous cost, and described by a word that traveled from Sanskrit through Persian and Arabic into English.\n\nEvery color word has a story like this. Colors aren't found—they're made. And their names remember the making."
  },
  {
    slug: "shrapnel",
    word: "Shrapnel",
    romanization: "Shrapnel",
    language: "English (eponym)",
    hook: "One of the few words in English named after a weapons inventor—and he'd be horrified by how the word is used today.",
    story: [
      "In 1784, Lieutenant Henry Shrapnel of the Royal Artillery began developing a new type of ammunition: a hollow cannonball filled with musket balls and a small explosive charge. When the shell burst in the air above enemy formations, it showered them with hundreds of lead balls—a devastating innovation in the technology of killing.",
      "The British Army adopted Shrapnel's design in 1803 and used it with devastating effect at the Battle of Waterloo in 1815. The shells were called 'shrapnel shells' or simply 'shrapnel' after their inventor. Henry Shrapnel was promoted to major general for his contribution, though he was never adequately compensated financially and died in relative poverty.",
      "During World War I, the word expanded beyond its original meaning. Soldiers used 'shrapnel' to describe any metal fragment from any exploding device—shell casings, bomb fragments, grenade pieces. The specific became general. The inventor's name was no longer attached to his invention but to the consequences of all explosions.",
      "This broader meaning is now the only common one. When a news report mentions 'shrapnel wounds,' it means fragments from any explosive device. Henry Shrapnel's precise innovation—a shell designed to burst in air and release musket balls—is a museum piece. His name lives on as a synonym for destruction's debris."
    ],
    journey: [
      { location: "Bradford on Avon", period: "1784", form: "Shrapnel", context: "Lt. Henry Shrapnel develops anti-personnel shell", color: "#4a5568", coordinates: [-2.3, 51.3] },
      { location: "Waterloo", period: "1815", form: "shrapnel shell", context: "Used decisively at Battle of Waterloo", color: "#4a5568", coordinates: [4.4, 50.7] },
      { location: "Western Front", period: "1914-18", form: "shrapnel", script: "shrapnel", context: "WWI meaning expands to all explosive fragments", color: "#6b2d3d", coordinates: [2.9, 49.9] },
      { location: "Global", period: "present", form: "shrapnel", context: "Any metal fragments from explosion", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "English", ipa: "/ˈʃɹæp.nəl/", text: "shrapnel", lang: "en" }
    ],
    relatives: [
      { word: "bayonet", language: "English", connection: "from Bayonne France—another weapon named for a place", available: false },
      { word: "howitzer", language: "English", connection: "from Czech houfnice—another borrowed artillery word", available: true, slug: "howitzer" },
      { word: "torpedo", language: "English", connection: "from Latin torpedo—another weapon with a surprising etymology", available: false }
    ],
    meaningNow: "Henry Shrapnel is one of the few people whose name became a common English word during their lifetime—and it named a method of killing. His descendants have periodically objected to the word's use, but language doesn't negotiate with families.\n\nThe word has outlived its inventor, outlived his invention, and outlived its original meaning. It now names something Henry Shrapnel never intended: the random, chaotic debris of any explosion. His precise engineering became a word for the opposite of precision."
  }
];
