import { Word } from "./word-types";

// 40 new word entries to add to the words array
export const newWords: Word[] = [
  {
    slug: "karma",
    word: "\u0915\u0930\u094D\u092E",
    romanization: "karma",
    language: "Sanskrit",
    hook: "Your actions are a boomerang thrown across lifetimes.",
    story: [
      "In the Vedic texts of ancient India, karma simply meant \"action\" or \"deed\"\u2014from the Sanskrit root k\u1E5B, \"to do.\" Every action creates a ripple.",
      "As Hindu and Buddhist philosophy developed, karma became a cosmic accounting system: every action generates a force that returns to the actor. Good begets good. Harm begets harm. Not as punishment, but as natural law.",
      "The word entered English in the 1820s through scholarly translations of Indian texts. By the 1960s counterculture, it had become common vocabulary\u2014stripped of its theological complexity, reduced to \"what goes around comes around.\"",
      "The original concept is far more nuanced: karma isn't fate or destiny, it's the opposite. It says you are not bound by circumstance, but by your own choices. Every moment is a new beginning."
    ],
    journey: [
      { location: "India", period: "~1500 BCE", form: "karma", script: "\u0915\u0930\u094D\u092E", context: "Vedic texts action and ritual", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "India", period: "~500 BCE", form: "kamma", script: "\u0915\u092E\u094D\u092E", context: "Buddhist Pali texts moral causation", color: "#9b4a2c", coordinates: [85, 25.6] },
      { location: "London", period: "1827", form: "karma", script: "karma", context: "First English usage scholarly texts", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1960s+", form: "karma", context: "Counterculture pop psychology", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/\u02C8k\u0251r.m\u0259/", text: "\u0915\u0930\u094D\u092E", lang: "hi" },
      { label: "English", ipa: "/\u02C8k\u0251\u02D0.m\u0259/", text: "karma", lang: "en" }
    ],
    relatives: [
      { word: "dharma", language: "Sanskrit", connection: "cosmic order duty", available: false },
      { word: "\u0926\u093E\u0928", language: "Hindi", connection: "another Sanskrit concept of action giving", available: true, slug: "daan" },
      { word: "kismet", language: "Turkish/Arabic", connection: "fate but externally assigned", available: false }
    ],
    meaningNow: "In the West, karma has become a kind of cosmic scorecard\u2014a comforting belief that bad people will get what's coming to them.\n\nBut the original meaning is both more demanding and more liberating: it says nothing happens TO you. Everything happens FROM you. You are both the thrower and the target.\n\nThe word asks not \"what will happen to me?\" but \"what am I choosing to create?\""
  },
  {
    slug: "safari",
    word: "safari",
    romanization: "safari",
    language: "Swahili from Arabic",
    hook: "A word that meant simply \"journey\" became a spectacle of watching animals.",
    story: [
      "Safari comes from the Arabic safar (\u0633\u0641\u0631)\u2014meaning \"journey\" or \"travel.\" The word entered Swahili during centuries of Arab trade along the East African coast.",
      "In Swahili, safari meant any long journey\u2014a trading expedition, a pilgrimage, a trek across the savanna. Swahili speakers still use it this way: \"safari njema\" means \"have a good journey.\"",
      "When European explorers and hunters arrived in East Africa in the 19th century, they borrowed the word for their own expeditions\u2014but specifically for hunting trips. A safari became about trophies and conquest.",
      "In the 20th century, as conservation replaced hunting, safari shifted again: now it meant watching animals rather than killing them. The word had traveled from \"any journey\" to \"a journey to observe.\""
    ],
    journey: [
      { location: "Arabia", period: "~700 CE", form: "safar", script: "\u0633\u0641\u0631", context: "Journey travel", color: "#4a3b6b", coordinates: [44, 24] },
      { location: "East Africa", period: "~1000 CE", form: "safari", script: "safari", context: "Swahili long journey expedition", color: "#8b5a2b", coordinates: [39.3, -6.8] },
      { location: "British East Africa", period: "1850s", form: "safari", context: "European hunting expeditions", color: "#4a5568", coordinates: [36.8, -1.3] },
      { location: "Global", period: "1960s+", form: "safari", context: "Tourism eco-tourism wildlife watching", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Swahili", ipa: "/s\u0251.\u02C8f\u0251\u02D0.ri/", text: "safari", lang: "sw" },
      { label: "English", ipa: "/s\u0259\u02C8f\u0251\u02D0.\u0279i/", text: "safari", lang: "en" }
    ],
    relatives: [
      { word: "safar", language: "Arabic", connection: "journey the root word", available: false },
      { word: "musafir", language: "Hindi/Arabic", connection: "traveler same root", available: false },
      { word: "wanderlust", language: "German", connection: "another word for the urge to journey", available: true, slug: "wanderlust" }
    ],
    meaningNow: "Safari has become one of the most commercially valuable words in tourism\u2014and one of the most loaded. It carries the weight of colonial history even as it funds conservation today.\n\nApple named its web browser Safari. The word has drifted so far from its origins that most English speakers have forgotten it simply means \"journey.\"\n\nEvery safari is still a safar. Just a journey."
  },
  {
    slug: "chocolate",
    word: "chocolate",
    romanization: "chocolate",
    language: "English from Nahuatl",
    hook: "The Aztecs drank the gods' bitter water. Europe added sugar and changed the world.",
    story: [
      "The Aztecs called it xocol\u0101tl\u2014possibly from xococ (\"bitter\") and \u0101tl (\"water\"). It was a sacred drink: ground cacao beans mixed with chilies, vanilla, and water, frothed into a bitter foam reserved for royalty and warriors.",
      "When Hern\u00e1n Cort\u00e9s brought cacao back to Spain in the 1520s, Europeans couldn't pronounce xocol\u0101tl. It became chocolate in Spanish, then spread across Europe\u2014but always as a drink, never a solid.",
      "The Spanish kept the secret for nearly a century. When it finally reached France, England, and the rest of Europe, each culture adapted it: adding sugar, milk, eventually solidifying it into bars in the 1840s.",
      "What the Aztecs would recognize in a modern chocolate bar is almost nothing. But the word persists: a Nahuatl sound echoing through every language on Earth."
    ],
    journey: [
      { location: "Mesoamerica", period: "~1900 BCE", form: "kakaw", context: "Olmec cultivation of cacao", color: "#5c3a1e", coordinates: [-96, 18] },
      { location: "Tenochtitlan", period: "1400s", form: "xocol\u0101tl", context: "Aztec sacred bitter drink", color: "#5c3a1e", coordinates: [-99.1, 19.4] },
      { location: "Spain", period: "1520s", form: "chocolate", script: "chocolate", context: "Cort\u00e9s brings cacao to court", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Europe", period: "1600s", form: "chocolat/Schokolade", context: "Spreads across continent", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1847", form: "chocolate", script: "chocolate", context: "First solid chocolate bar Fry's", color: "#4a5568", coordinates: [-2.6, 51.5] }
    ],
    sounds: [
      { label: "Nahuatl", ipa: "/\u0283o.ko\u02C8la\u02D0t\u026A/", text: "xocolatl", lang: "nah" },
      { label: "Spanish", ipa: "/t\u0283oko\u02C8late/", text: "chocolate", lang: "es" },
      { label: "English", ipa: "/\u02C8t\u0283\u0252k.l\u0259t/", text: "chocolate", lang: "en" }
    ],
    relatives: [
      { word: "cacao", language: "Spanish/Nahuatl", connection: "the bean itself same origin", available: false },
      { word: "vanilla", language: "Spanish/Nahuatl", connection: "another Mesoamerican flavor word", available: false },
      { word: "tomato", language: "English/Nahuatl", connection: "another Nahuatl food word tomatl", available: false }
    ],
    meaningNow: "Chocolate is now a $130 billion industry. The word has become synonymous with comfort, indulgence, romance.\n\nBut the original xocol\u0101tl was none of these things. It was sacred, bitter, powerful\u2014a drink that connected humans to gods.\n\nEvery time we say \"chocolate,\" we're speaking Nahuatl. The language of an empire that fell, preserved in our sweetest pleasures."
  },
  {
    slug: "shampoo",
    word: "shampoo",
    romanization: "shampoo",
    language: "English from Hindi",
    hook: "An Indian head massage became a bottle of chemicals.",
    story: [
      "In Hindi, ch\u0101mpo (\u091A\u093E\u0902\u092A\u094B) means \"to press, to massage\"\u2014from the imperative form of ch\u0101mpn\u0101. When Mughal emperors received their daily head massages with fragrant oils, this is what it was called.",
      "British colonial officers in India encountered the practice and brought the word home. In 18th-century England, \"shampooing\" meant a luxurious head massage, often with oils and herbs.",
      "Sake Dean Mahomed, a Bengali entrepreneur, opened \"Mahomed's Indian Vapour Baths\" in Brighton in 1814, offering \"shampooing\" treatments to the British upper class. He became \"Shampooing Surgeon\" to King George IV.",
      "By the early 1900s, as liquid soap products emerged, the word shifted from the action (massaging) to the substance (the cleanser). The massage was forgotten; only the washing remained."
    ],
    journey: [
      { location: "India", period: "ancient", form: "ch\u0101mpo", script: "\u091A\u093E\u0902\u092A\u094B", context: "Head massage pressing kneading", color: "#9b4a2c", coordinates: [77, 28.6] },
      { location: "Colonial India", period: "1700s", form: "champo", context: "British officers experience head massage", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "Brighton", period: "1814", form: "shampooing", script: "shampooing", context: "Mahomed's Indian Vapour Baths", color: "#4a5568", coordinates: [-0.14, 50.8] },
      { location: "Global", period: "1930s+", form: "shampoo", script: "shampoo", context: "Becomes a liquid soap product", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hindi", ipa: "/t\u0283\u0251\u02D0m.po\u02D0/", text: "\u091A\u093E\u0902\u092A\u094B", lang: "hi" },
      { label: "English", ipa: "/\u0283\u00E6m\u02C8pu\u02D0/", text: "shampoo", lang: "en" }
    ],
    relatives: [
      { word: "ch\u0101mpn\u0101", language: "Hindi", connection: "to press the root verb", available: false },
      { word: "pajamas", language: "English/Hindi", connection: "another Hindi word colonialism brought to English", available: true, slug: "pajamas" },
      { word: "massage", language: "French/Arabic", connection: "similar concept different route", available: false }
    ],
    meaningNow: "Today, shampoo is a $30 billion global industry. The word has completely lost its original meaning\u2014nobody thinks of head massage when they reach for a bottle.\n\nBut the etymology reveals what we lost: the original practice was about human touch, care, connection. We replaced a ritual with a product.\n\nThe word remembers what we forgot."
  },
  {
    slug: "robot",
    word: "robot",
    romanization: "robot",
    language: "Czech",
    hook: "A Czech playwright invented a word\u2014and named humanity's greatest fear.",
    story: [
      "In 1920, Czech playwright Karel \u010Capek wrote R.U.R. (Rossum's Universal Robots)\u2014a play about artificial workers who rebel against their creators. He needed a word for these beings.",
      "His brother Josef suggested robota\u2014an old Czech word meaning \"forced labor\" or \"drudgery,\" from the Proto-Slavic *orbota (servitude). In the feudal system, robota was the compulsory work serfs owed their lords.",
      "The play was a sensation. Translated into thirty languages by 1923, it gave the world both the word and the fear: machines made to serve us will eventually overthrow us.",
      "\u010Capek's robots weren't mechanical\u2014they were biological, grown in vats. But the word attached itself to mechanical beings instead, and the original meaning of forced labor was lost. Or was it? Every debate about AI and automation is still asking \u010Capek's question."
    ],
    journey: [
      { location: "Slavic lands", period: "medieval", form: "robota", context: "Serfdom forced labor corvee", color: "#4a5568", coordinates: [14.4, 50.1] },
      { location: "Prague", period: "1920", form: "robot", script: "robot", context: "\u010Capek's play R.U.R. premieres", color: "#4a5568", coordinates: [14.4, 50.1] },
      { location: "New York", period: "1922", form: "robot", script: "robot", context: "English translation Broadway", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "1940s+", form: "robot", context: "Asimov science fiction industry", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "Czech", ipa: "/\u02C8robot/", text: "robot", lang: "cs" },
      { label: "English", ipa: "/\u02C8\u0279o\u028A.b\u0252t/", text: "robot", lang: "en" }
    ],
    relatives: [
      { word: "robota", language: "Czech", connection: "forced labor the root", available: false },
      { word: "android", language: "English/Greek", connection: "human-shaped from andr man", available: false },
      { word: "automaton", language: "English/Greek", connection: "self-moving older concept", available: false }
    ],
    meaningNow: "Robot is now among the most-used words in technology, manufacturing, and science fiction. We have robot vacuums, robotic surgery, social robots.\n\nBut the word's dark origin persists in every story we tell about AI: the fear that our servants will become our masters. \u010Capek's 1920 play is still the template for every AI uprising narrative.\n\nThe word was born from the memory of serfdom. It carries that memory into our future."
  },
  {
    slug: "avatar",
    word: "\u0905\u0935\u0924\u093E\u0930",
    romanization: "avatar",
    language: "Sanskrit",
    hook: "A Hindu god's earthly form became your online persona.",
    story: [
      "In Sanskrit, avat\u0101ra means \"descent\"\u2014from ava (down) + t\u1E5B (to cross over). It specifically referred to the earthly incarnations of the god Vishnu, who descends to Earth in times of crisis.",
      "Vishnu has ten major avatars: Rama, Krishna, the Buddha (in some traditions), and others. Each avatar is the divine taking physical form to restore cosmic balance.",
      "The word entered English in the 1780s through translations of Hindu scriptures. For two centuries, it remained a religious term\u2014until 1985, when the video game Ultima IV used \"avatar\" for the player's on-screen character.",
      "Neal Stephenson's 1992 novel Snow Crash cemented the digital meaning. Now everyone has avatars: on social media, in games, in virtual meetings. The divine descent has become a profile picture."
    ],
    journey: [
      { location: "India", period: "~500 BCE", form: "avat\u0101ra", script: "\u0905\u0935\u0924\u093E\u0930", context: "Vishnu's earthly incarnations", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "England", period: "1784", form: "avatar", script: "avatar", context: "First English usage in translation", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Austin TX", period: "1985", form: "avatar", context: "Ultima IV video game character", color: "#4a5568", coordinates: [-97.7, 30.3] },
      { location: "Global", period: "1992+", form: "avatar", context: "Snow Crash then universal digital term", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/\u0259.v\u0259\u02C8t\u0251\u02D0.r\u0259/", text: "\u0905\u0935\u0924\u093E\u0930", lang: "hi" },
      { label: "English", ipa: "/\u02C8\u00E6v.\u0259.t\u0251\u02D0\u0279/", text: "avatar", lang: "en" }
    ],
    relatives: [
      { word: "incarnation", language: "English/Latin", connection: "same concept Western tradition", available: false },
      { word: "\u0915\u0930\u094D\u092E", language: "Sanskrit", connection: "another Hindu concept gone global", available: true, slug: "karma" },
      { word: "persona", language: "Latin", connection: "mask role similar digital concept", available: false }
    ],
    meaningNow: "The theological weight of avatar\u2014a god choosing to enter the world\u2014makes its modern usage either profound or absurd, depending on your perspective.\n\nAre we gods descending into digital worlds? Or is the metaphor inverted\u2014are we mortals ascending into virtual heavens?\n\nThe word connects the oldest human question (what is the relationship between the divine and the physical?) with the newest (what is the relationship between the digital and the real?)."
  },
  {
    slug: "kindergarten",
    word: "Kindergarten",
    romanization: "Kindergarten",
    language: "German",
    hook: "A German educator saw children as flowers. Schools became gardens.",
    story: [
      "In 1840, Friedrich Fr\u00f6bel opened the first Kindergarten in Bad Blankenburg, Germany. The name was deliberate: Kinder (children) + Garten (garden). Children were not vessels to be filled, but plants to be tended.",
      "Fr\u00f6bel's philosophy was revolutionary: young children learn through play, not discipline. His \"garden\" had songs, games, nature exploration, and specially designed toys he called \"gifts.\"",
      "German immigrants brought Kindergarten to America in the 1850s. The word was borrowed whole because English had no equivalent concept\u2014\"nursery school\" didn't capture the philosophy.",
      "By 1873, St. Louis had the first public kindergarten in America. The word had crossed the Atlantic and changed how an entire civilization thought about early childhood."
    ],
    journey: [
      { location: "Bad Blankenburg", period: "1840", form: "Kindergarten", script: "Kindergarten", context: "Fr\u00f6bel opens first kindergarten", color: "#4a5568", coordinates: [11.3, 50.7] },
      { location: "Watertown WI", period: "1856", form: "kindergarten", context: "First US kindergarten Margarethe Schurz", color: "#4a5568", coordinates: [-88.7, 43.2] },
      { location: "St. Louis", period: "1873", form: "kindergarten", context: "First US public kindergarten", color: "#4a5568", coordinates: [-90.2, 38.6] },
      { location: "Global", period: "present", form: "kindergarten", context: "Universal concept worldwide", coordinates: [0, 51.5] }
    ],
    sounds: [
      { label: "German", ipa: "/\u02C8k\u026And\u0250\u02CC\u0261a\u0281tn\u0329/", text: "Kindergarten", lang: "de" },
      { label: "English", ipa: "/\u02C8k\u026And\u0259\u0261\u0251\u02D0tn/", text: "kindergarten", lang: "en" }
    ],
    relatives: [
      { word: "Wanderlust", language: "German", connection: "another German word borrowed whole", available: true, slug: "wanderlust" },
      { word: "nursery", language: "English", connection: "older English term for child care", available: false },
      { word: "montessori", language: "Italian", connection: "another educational philosophy name", available: false }
    ],
    meaningNow: "Kindergarten has become so common that we forget its radical metaphor: children are living things that need sunlight and space, not raw material to be shaped.\n\nFr\u00f6bel's garden metaphor challenged centuries of \"children should be seen and not heard.\" The word itself carries a philosophy of nurture over control.\n\nEvery time a parent says \"my child starts kindergarten,\" they're invoking a 19th-century German's radical faith in play."
  },
  {
    slug: "piano",
    word: "pianoforte",
    romanization: "piano",
    language: "Italian",
    hook: "An instrument named for what it could do that no other could: play soft AND loud.",
    story: [
      "Before 1700, keyboard instruments had a problem: the harpsichord could only play at one volume. You pressed a key, and the string was plucked with the same force regardless of how hard you pressed.",
      "Around 1700, Bartolomeo Cristofori in Florence invented a keyboard that used hammers instead of pluckers. Press gently: soft. Press hard: loud. He called it gravicembalo col piano e forte\u2014\"harpsichord with soft and loud.\"",
      "The name was immediately shortened: pianoforte, then simply piano. The instrument was named not for what it was, but for what it could DO\u2014play piano (soft) and forte (loud).",
      "The name stuck because the ability to control dynamics was genuinely revolutionary. For the first time, a keyboard player could whisper and shout. The piano didn't just change music\u2014it changed the word \"expression.\""
    ],
    journey: [
      { location: "Florence", period: "~1700", form: "piano e forte", script: "pianoforte", context: "Cristofori's invention soft and loud", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Italy", period: "1700s", form: "pianoforte", script: "pianoforte", context: "Spreads through Italian courts", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Vienna", period: "late 1700s", form: "Klavier/Pianoforte", context: "Mozart Beethoven transform it", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "Global", period: "1800s+", form: "piano", context: "Shortened universally adopted", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Italian", ipa: "/pi\u02C8a\u02D0no/", text: "pianoforte", lang: "it" },
      { label: "English", ipa: "/pi\u02C8\u00E6n.o\u028A/", text: "piano", lang: "en" }
    ],
    relatives: [
      { word: "forte", language: "Italian/Music", connection: "loud the other half of the name", available: false },
      { word: "clavier", language: "French", connection: "keyboard from Latin clavis key", available: false },
      { word: "harpsichord", language: "English", connection: "the instrument piano replaced", available: false }
    ],
    meaningNow: "Piano is now both an instrument and a musical instruction (play softly). The word has split into two meanings, both alive.\n\nIt's also become metaphorical: we speak of \"piano\" moments in films, in speeches, in life. The Italian word for \"soft\" has become a universal word for restraint, subtlety, quiet power.\n\nCristofori named his instrument for its capability. Three centuries later, we still use his name every day."
  },
  {
    slug: "algebra",
    word: "\u0627\u0644\u062C\u0628\u0631",
    romanization: "al-jabr",
    language: "Arabic",
    hook: "A word for setting broken bones became the mathematics of solving for x.",
    story: [
      "In 820 CE, the same al-Khw\u0101rizm\u012B who gave us \"algorithm\" wrote a book called Kit\u0101b al-Jabr wa-l-Muq\u0101bala\u2014\"The Book of Restoration and Balancing.\" Al-jabr meant \"restoration\" or \"reunion of broken parts.\"",
      "The same word was used for bone-setting\u2014an algebrista in medieval Spain was a bone-setter, someone who restored broken limbs to wholeness. Mathematics and medicine shared a vocabulary of healing.",
      "The book's title became the name of an entire branch of mathematics. Al-jabr\u2014the art of restoring balance to an equation by moving terms from one side to another.",
      "From Arabic, the word passed through Spanish (where barbers who set bones were called algebraistas) and into every European language. The healers' word became the mathematicians' word."
    ],
    journey: [
      { location: "Baghdad", period: "820 CE", form: "al-jabr", script: "\u0627\u0644\u062C\u0628\u0631", context: "Al-Khw\u0101rizm\u012B's book restoration", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Spain", period: "1100s", form: "\u00e1lgebra/algebrista", context: "Translation movement bone-setters", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Italy", period: "1200s", form: "algebra", script: "algebra", context: "Fibonacci and Italian mathematics", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Europe", period: "1500s+", form: "algebra", context: "Universal mathematical term", color: "#4a5568", coordinates: [2.3, 48.9] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/al\u02C8d\u0292abr/", text: "\u0627\u0644\u062C\u0628\u0631", lang: "ar" },
      { label: "English", ipa: "/\u02C8\u00E6l.d\u0292\u026A.br\u0259/", text: "algebra", lang: "en" }
    ],
    relatives: [
      { word: "algorithm", language: "English", connection: "from the same author al-Khw\u0101rizm\u012B", available: true, slug: "algorithm" },
      { word: "zero", language: "English/Arabic", connection: "Arabic mathematics gave this too", available: true, slug: "zero" },
      { word: "algebrista", language: "Spanish", connection: "bone-setter same root", available: false }
    ],
    meaningNow: "Algebra is now the gateway to all higher mathematics\u2014the subject that separates \"I'm good at math\" from \"I'm not.\" It's become a cultural dividing line.\n\nBut the original meaning\u2014restoration, making whole what was broken\u2014offers a different way to think about equations. They're not puzzles to solve. They're imbalances to heal.\n\nAl-Khw\u0101rizm\u012B's two greatest gifts to language\u2014algorithm and algebra\u2014both come from the same manuscript. One man, one book, two words that run the world."
  },
  {
    slug: "tattoo",
    word: "tatau",
    romanization: "tattoo",
    language: "English from Tahitian/Samoan",
    hook: "Captain Cook heard a sound\u2014tap, tap, tap\u2014and brought home a word and an art.",
    story: [
      "When Captain James Cook arrived in Tahiti in 1769, he encountered the practice of tatau\u2014marking the skin with ink using a comb-like tool tapped with a mallet. The word was onomatopoeic: it sounded like the tapping.",
      "The Polynesian practice was ancient and sacred. Tattoos marked identity, status, genealogy, spiritual protection. Every mark had meaning. The body was a text.",
      "Cook's crew were fascinated. They got tattooed themselves, and brought the word back to English. \"Tattow\" appeared in Cook's journal, soon becoming \"tattoo.\"",
      "The irony: English already had a word \"tattoo\" (from Dutch taptoe, a military drum signal). The Polynesian word merged with it accidentally, creating confusion that persists in dictionaries today."
    ],
    journey: [
      { location: "Polynesia", period: "ancient", form: "tatau", context: "Sacred body marking identity and status", color: "#2d4a3b", coordinates: [-149.5, -17.5] },
      { location: "Tahiti", period: "1769", form: "tatau", context: "Cook's expedition encounters practice", color: "#2d4a3b", coordinates: [-149.5, -17.5] },
      { location: "England", period: "1774", form: "tattow/tattoo", script: "tattoo", context: "Cook's journal published word spreads", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1900s+", form: "tattoo", context: "From sailors to counterculture to mainstream", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tahitian/Samoan", ipa: "/ta\u02C8tau/", text: "tatau", lang: "sm" },
      { label: "English", ipa: "/t\u00E6\u02C8tu\u02D0/", text: "tattoo", lang: "en" }
    ],
    relatives: [
      { word: "taptoe", language: "Dutch", connection: "military drum signal unrelated homonym", available: false },
      { word: "taboo", language: "Tongan", connection: "another Polynesian word Cook brought back", available: true, slug: "taboo" },
      { word: "moko", language: "M\u0101ori", connection: "facial tattoo tradition related", available: false }
    ],
    meaningNow: "Tattoo has traveled from sacred to stigmatized to mainstream. One in three American adults now has one. The word has lost its Polynesian sacredness and its Western-sailor roughness simultaneously.\n\nBut the practice of marking the body permanently\u2014of choosing to carry a story in your skin\u2014remains as human as the Polynesians who invented the word.\n\nThe sound of the word still echoes the original tapping: ta-too, ta-too."
  },
  {
    slug: "guru",
    word: "\u0917\u0941\u0930\u0941",
    romanization: "guru",
    language: "Sanskrit",
    hook: "The word means \"heavy\"\u2014because a teacher's knowledge has weight.",
    story: [
      "In Sanskrit, guru literally means \"heavy\" or \"weighty\"\u2014from the root g\u1E5B, the same Indo-European root that gives us Latin gravis (heavy), English \"gravity\" and \"grave.\"",
      "The metaphor was precise: a guru's knowledge has gravitational pull. Students orbit their teacher, held by the weight of wisdom. A guru is heavy with truth.",
      "In Hindu, Sikh, and Buddhist traditions, the guru-student relationship is sacred\u2014more important than family, more binding than marriage. The guru doesn't just teach; the guru transforms.",
      "English borrowed the word in the 1600s for Indian spiritual teachers. By the 1960s, it meant any expert: a tech guru, a fitness guru, a marketing guru. The sacred weight became a casual compliment."
    ],
    journey: [
      { location: "India", period: "~1000 BCE", form: "guru", script: "\u0917\u0941\u0930\u0941", context: "Vedic tradition heavy weighty teacher", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Punjab", period: "1500s", form: "Guru", script: "\u0A17\u0A41\u0A30\u0A42", context: "Sikh Gurus spiritual leaders", color: "#9b4a2c", coordinates: [75, 31.5] },
      { location: "England", period: "1613", form: "guru", script: "guru", context: "First English usage spiritual teacher", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1960s+", form: "guru", context: "Any expert tech guru fitness guru", coordinates: [-122, 37.4] }
    ],
    sounds: [
      { label: "Sanskrit/Hindi", ipa: "/\u0261\u028A.\u027Au\u02D0/", text: "\u0917\u0941\u0930\u0941", lang: "hi" },
      { label: "English", ipa: "/\u02C8\u0261\u028A.\u0279u\u02D0/", text: "guru", lang: "en" }
    ],
    relatives: [
      { word: "gravity", language: "English/Latin", connection: "same IE root heaviness", available: false },
      { word: "\u0915\u0930\u094D\u092E", language: "Sanskrit", connection: "another concept from the guru tradition", available: true, slug: "karma" },
      { word: "sensei", language: "Japanese", connection: "teacher similar reverence different culture", available: false }
    ],
    meaningNow: "\"Guru\" has been both elevated and deflated by English. Elevated because it spread globally. Deflated because \"LinkedIn guru\" carries none of the sacred weight of the original.\n\nIn India, guru remains a profound word. The festival of Guru Purnima honors all teachers. The Sikh tradition revolves around ten Gurus whose words are scripture.\n\nThe English usage remembers the shape of the concept\u2014an expert, a guide\u2014but forgets its gravity."
  },
  {
    slug: "taboo",
    word: "tabu",
    romanization: "taboo",
    language: "English from Tongan",
    hook: "Captain Cook brought back another word from the Pacific: the things you must never do.",
    story: [
      "In Tongan, tabu (or tapu) meant \"sacred\" and \"forbidden\" simultaneously\u2014a concept that European languages split into separate words. Something tabu was too holy to touch, too powerful to approach carelessly.",
      "Captain Cook encountered the word in Tonga in 1777. He noted in his journal: \"Not one of them would sit down, or eat a bit of any thing... On expressing my surprise at this, they were all taboo, as they said.\"",
      "The word filled a gap in English. Before taboo, English had \"forbidden\" (by law) and \"sacred\" (by religion), but no word for things forbidden by social consensus\u2014by an unwritten, unspoken collective agreement.",
      "Sigmund Freud's 1913 work Totem and Taboo cemented the psychological meaning: taboo as repressed desire, forbidden thoughts. The Polynesian concept became a Viennese diagnosis."
    ],
    journey: [
      { location: "Polynesia", period: "ancient", form: "tapu/tabu", context: "Sacred and forbidden inseparable", color: "#2d4a3b", coordinates: [-175, -21.2] },
      { location: "Tonga", period: "1777", form: "tabu", context: "Cook records the word in his journal", color: "#2d4a3b", coordinates: [-175.2, -21.2] },
      { location: "England", period: "1785", form: "taboo", script: "taboo", context: "Published in Cook's journals", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Vienna", period: "1913", form: "Tabu", context: "Freud psychoanalyzes the concept", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "Global", period: "present", form: "taboo", context: "Universal social concept", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tongan", ipa: "/ta\u02C8bu/", text: "tabu", lang: "to" },
      { label: "English", ipa: "/t\u0259\u02C8bu\u02D0/", text: "taboo", lang: "en" }
    ],
    relatives: [
      { word: "tattoo", language: "English/Tahitian", connection: "another Cook Polynesian borrowing", available: true, slug: "tattoo" },
      { word: "tapu", language: "M\u0101ori", connection: "same word in New Zealand context", available: false },
      { word: "haram", language: "Arabic", connection: "forbidden in Islamic tradition similar concept", available: false }
    ],
    meaningNow: "Taboo has become one of English's most useful words: it describes exactly the territory between law and custom, between official rules and unofficial ones.\n\nEvery culture has taboos, but calling them that\u2014naming the unnamed\u2014is itself almost taboo. The word works by pointing at things we've agreed not to point at.\n\nThe Polynesian concept of sacred-and-forbidden-at-once still operates in modern taboo. The forbidden is always also fascinating."
  },
  {
    slug: "nirvana",
    word: "\u0928\u093F\u0930\u094D\u0935\u093E\u0923",
    romanization: "nirv\u0101\u1E47a",
    language: "Sanskrit/Pali",
    hook: "The ultimate Buddhist goal is not heaven\u2014it's a flame going out.",
    story: [
      "Nirv\u0101\u1E47a comes from the Sanskrit nir (out/away) + v\u0101 (to blow). Literally: \"blown out,\" like a candle flame extinguished. Not destruction, but release. Not death, but the end of suffering.",
      "The Buddha used this metaphor deliberately. A flame that goes out doesn't go somewhere\u2014it simply ceases to burn. Nirv\u0101\u1E47a is not a place you go. It's a burning you stop.",
      "The word entered English in the 1830s through scholarly translations of Buddhist texts. For over a century, it remained a religious term\u2014exotic, Eastern, philosophical.",
      "Then Kurt Cobain named his band Nirvana in 1987. The irony was deliberate: the Buddhist concept of extinguishing desire, chosen by a band that would embody desire, rage, and ultimately self-destruction."
    ],
    journey: [
      { location: "India", period: "~500 BCE", form: "nibb\u0101na/nirv\u0101\u1E47a", script: "\u0928\u093F\u0930\u094D\u0935\u093E\u0923", context: "Buddha's teaching extinction of suffering", color: "#9b4a2c", coordinates: [85, 25.6] },
      { location: "Southeast Asia", period: "~200 BCE", form: "nibb\u0101na", context: "Theravada Buddhism spreads", color: "#2d4a3b", coordinates: [100.5, 13.8] },
      { location: "England", period: "1836", form: "nirvana", script: "nirvana", context: "First English usage scholarly", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Seattle", period: "1987", form: "Nirvana", context: "Band name grunge pop culture", color: "#4a5568", coordinates: [-122.3, 47.6] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/n\u026A\u027A\u02C8v\u0251\u02D0\u0273\u0259/", text: "\u0928\u093F\u0930\u094D\u0935\u093E\u0923", lang: "hi" },
      { label: "English", ipa: "/n\u026A\u0279\u02C8v\u0251\u02D0.n\u0259/", text: "nirvana", lang: "en" }
    ],
    relatives: [
      { word: "\u0915\u0930\u094D\u092E", language: "Sanskrit", connection: "what nirvana releases you from", available: true, slug: "karma" },
      { word: "samsara", language: "Sanskrit", connection: "the cycle nirvana breaks", available: false },
      { word: "moksha", language: "Sanskrit", connection: "Hindu equivalent liberation", available: false }
    ],
    meaningNow: "In English, nirvana has become a casual synonym for \"bliss\" or \"paradise\"\u2014essentially the opposite of its original meaning. The blown-out flame became a state of ecstasy.\n\nThis misunderstanding is revealing: Western culture can't quite grasp the idea that the highest goal might be cessation rather than achievement, absence rather than presence.\n\nThe word persists in both meanings\u2014the Buddhist extinction and the Western ecstasy\u2014never quite resolving the contradiction."
  },
  {
    slug: "karate",
    word: "\u7A7A\u624B",
    romanization: "karate",
    language: "Japanese",
    hook: "The \"empty hand\" was once called \"Chinese hand\"\u2014until nationalism rewrote the kanji.",
    story: [
      "Karate was originally written \u5510\u624B\u2014\"Chinese hand\" (or \"Tang hand,\" referencing the Tang dynasty). The martial art developed in Okinawa from Chinese kung fu techniques brought by traders and monks.",
      "When Okinawa was absorbed into Japan in the 1870s, the art was seen as foreign\u2014Chinese. To make it acceptable to Japanese nationalism, practitioners changed the kanji from \u5510 (China/Tang) to \u7A7A (empty), keeping the same pronunciation: kara.",
      "Gichin Funakoshi brought karate to mainland Japan in 1922. The rebranding worked perfectly: \"empty hand\" sounded like a philosophy\u2014fighting without weapons, the hand emptied of ego.",
      "The original meaning\u2014Chinese hand\u2014reveals the art's true history. Karate is Chinese martial arts, filtered through Okinawan innovation, repackaged as Japanese. The word hides this."
    ],
    journey: [
      { location: "China", period: "ancient", form: "\u5510\u624B", context: "Chinese martial arts source", color: "#2d4a3b", coordinates: [116, 40] },
      { location: "Okinawa", period: "1600s", form: "t\u014Dde/karate", script: "\u5510\u624B", context: "Chinese hand Okinawan development", color: "#2d4a3b", coordinates: [127.7, 26.3] },
      { location: "Japan", period: "1930s", form: "karate", script: "\u7A7A\u624B", context: "Rewritten as empty hand nationalist era", color: "#2d4a3b", coordinates: [139.7, 35.7] },
      { location: "Global", period: "1960s+", form: "karate", context: "Martial arts movies worldwide adoption", coordinates: [-118, 34] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/ka.\u027Ea.te/", text: "\u7A7A\u624B", lang: "ja" },
      { label: "English", ipa: "/k\u0259\u02C8\u0279\u0251\u02D0.ti/", text: "karate", lang: "en" }
    ],
    relatives: [
      { word: "kung fu", language: "Chinese", connection: "the source martial art", available: false },
      { word: "\u6D25\u6CE2", language: "Japanese", connection: "another Japanese word gone global", available: true, slug: "tsunami" },
      { word: "judo", language: "Japanese", connection: "gentle way another martial art word", available: false }
    ],
    meaningNow: "Karate is now an Olympic sport, practiced in virtually every country. The word has become generic\u2014people say \"karate chop\" for any martial arts strike.\n\nBut the hidden history in the kanji reminds us how nationalism shapes language. A Chinese art was made Japanese by changing one character. The pronunciation stayed the same; only the meaning shifted.\n\nThe empty hand still carries the ghost of the Chinese hand within it."
  },
  {
    slug: "boomerang",
    word: "boomerang",
    romanization: "boomerang",
    language: "English from Dharug (Aboriginal Australian)",
    hook: "The weapon that comes back was named by people the colonizers tried not to come back to.",
    story: [
      "The word boomerang comes from the Dharug language of the Aboriginal people near Sydney\u2014possibly from bumariny or a similar word meaning \"returning stick.\"",
      "But here's what most people don't know: returning boomerangs were toys and sporting tools. The weapons\u2014the ones used for hunting\u2014were designed NOT to come back. A returning weapon is useless in war.",
      "The word entered English around 1827 through colonial records. Europeans were fascinated by the returning variety because it seemed magical\u2014defying physics. The non-returning hunting sticks were ignored.",
      "The metaphor took over: by the 1840s, \"boomerang\" meant anything that comes back to its origin\u2014especially consequences returning to haunt you. The Aboriginal tool became an English concept."
    ],
    journey: [
      { location: "Sydney region", period: "ancient", form: "bumariny", context: "Dharug language returning stick", color: "#8b5a2b", coordinates: [151.2, -33.9] },
      { location: "Sydney", period: "1827", form: "boomerang", script: "boomerang", context: "First English recording colonial contact", color: "#8b5a2b", coordinates: [151.2, -33.9] },
      { location: "England", period: "1840s", form: "boomerang", context: "Metaphorical use consequences returning", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "boomerang", context: "Universal metaphor sporting toy", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Dharug (approx.)", ipa: "/\u02C8bu\u02D0.m\u0259.\u0279\u00E6\u014B/", text: "boomerang", lang: "en" },
      { label: "English", ipa: "/\u02C8bu\u02D0.m\u0259.\u0279\u00E6\u014B/", text: "boomerang", lang: "en" }
    ],
    relatives: [
      { word: "woomera", language: "Dharug", connection: "spear-thrower another Aboriginal tool word", available: false },
      { word: "karma", language: "Sanskrit", connection: "actions returning same metaphor", available: true, slug: "karma" },
      { word: "kangaroo", language: "Guugu Yimithirr", connection: "another Aboriginal Australian word in English", available: false }
    ],
    meaningNow: "Boomerang is one of the very few Aboriginal Australian words in global English. It represents an entire continent's linguistic heritage in the broader world\u2014which is both a tribute and an indictment.\n\nThe metaphor has proven more durable than the object: \"that will boomerang on you\" is understood everywhere. Actions returning. Consequences circling back.\n\nThe Dharug people, whose word this is, are still here. Their language, nearly extinct, lives on in this one word the world couldn't forget."
  }
];
