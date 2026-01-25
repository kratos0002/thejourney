import type { Word } from "./word-types";

export const newWordsBatch6: Word[] = [
  {
    slug: "golem",
    word: "גולם",
    romanization: "golem",
    language: "Hebrew",
    hook: "The clay monster of Prague became our word for any mindless automaton — and inspired the concept of robots.",
    story: [
      "In Hebrew, golem (גולם) means 'shapeless mass' or 'raw material' — something unformed, incomplete. The word appears in Psalm 139:16, where the psalmist describes being seen by God when still a golem: 'Your eyes saw my unformed substance.'",
      "But the golem that entered world mythology came from medieval Jewish folklore. The most famous story tells of Rabbi Judah Loew of Prague, who created a clay man and animated it by inscribing the Hebrew word emet (truth) on its forehead. The golem protected the Jewish community from persecution.",
      "The golem was dangerous because it followed orders too literally. To deactivate it, you erased the first letter of emet, leaving met — death. The golem's mindless obedience made it both protector and threat: an early meditation on the dangers of creating servants we cannot control.",
      "The golem story directly influenced Karel Čapek's 1920 play R.U.R., which introduced the word 'robot' (from robota, Czech for 'forced labor'). From golem to robot to AI — the same anxiety persists: what happens when our creations outgrow our control?"
    ],
    journey: [
      { location: "Ancient Israel", period: "biblical", form: "גולם", script: "גולם", context: "Shapeless mass, raw material in Psalms", color: "#4a3b6b", coordinates: [35.2, 31.8] },
      { location: "Medieval Europe", period: "1200s", form: "golem", context: "Jewish mystical texts describe animation rituals", color: "#4a5568", coordinates: [14.4, 50.1] },
      { location: "Prague", period: "1580s", form: "golem", context: "Rabbi Loew legend crystallizes", color: "#4a5568", coordinates: [14.4, 50.1] },
      { location: "Global literature", period: "1800s+", form: "golem", context: "Inspires Frankenstein, robot stories", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Modern usage", period: "present", form: "golem", context: "Video games, fantasy, metaphor for automation", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hebrew", ipa: "/ˈɡo.lem/", text: "גולם", lang: "he" },
      { label: "English", ipa: "/ˈɡoʊ.ləm/", text: "golem", lang: "en" }
    ],
    relatives: [
      { word: "robot", language: "Czech", connection: "spiritual descendant: artificial servant concept", available: true, slug: "robot" },
      { word: "automaton", language: "Greek", connection: "self-moving: parallel concept from Greek", available: false },
      { word: "emet", language: "Hebrew", connection: "truth: the word that animated the golem", available: false }
    ],
    meaningNow: "The golem appears in video games, fantasy novels, and tech metaphors. But it remains one of the oldest stories about artificial intelligence: a created servant that follows orders perfectly — and terrifyingly.\n\nThe question the golem story asks is the question we still ask about AI: Can we control what we create? The clay man of Prague anticipated Silicon Valley's biggest worry by five hundred years."
  },
  {
    slug: "barbecue",
    word: "barbacoa",
    romanization: "barbacoa",
    language: "Taíno via Spanish",
    hook: "The wooden frame for cooking meat became a global summer ritual.",
    story: [
      "When the Spanish arrived in the Caribbean, they encountered the Taíno people cooking meat on wooden frames raised above open fires. The Spanish called this apparatus a barbacoa — borrowing from the Taíno word for the wooden platform.",
      "The cooking method was brilliant: the raised frame allowed smoke to preserve the meat while slowly cooking it. Spanish colonizers and later English settlers adopted both the method and the word, transforming 'barbacoa' into 'barbecue.'",
      "By the 17th century, barbecue had traveled from the Caribbean to the American colonies. Different regions developed their own styles: Carolina's vinegar-based sauce, Texas's beef focus, Kansas City's molasses sweetness. The Taíno cooking frame became American regional cuisine.",
      "Today 'barbecue' can mean the cooking method, the sauce, the meat, or the social event. A summer barbecue is an American institution. But the word itself remembers the Taíno people who first raised a cooking frame above the coals."
    ],
    journey: [
      { location: "Caribbean (Taíno lands)", period: "ancient", form: "barbacoa", context: "Wooden frame for smoking meat", color: "#5c5a4a", coordinates: [-66.1, 18.5] },
      { location: "Hispaniola", period: "1490s", form: "barbacoa", context: "Spanish colonizers observe and name the practice", color: "#5c5a4a", coordinates: [-69.9, 18.7] },
      { location: "Virginia", period: "1650s", form: "barbecue", script: "barbecue", context: "English colonists adopt from Spanish", color: "#4a5568", coordinates: [-77.4, 37.5] },
      { location: "American South", period: "1800s", form: "barbecue", context: "Regional styles develop: Carolina, Texas, KC", color: "#4a5568", coordinates: [-95.4, 29.8] },
      { location: "Global", period: "present", form: "BBQ/barbecue", context: "Worldwide summer cooking tradition", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Spanish (from Taíno)", ipa: "/baɾbaˈkoa/", text: "barbacoa", lang: "es" },
      { label: "English", ipa: "/ˈbɑːrbɪkjuː/", text: "barbecue", lang: "en" }
    ],
    relatives: [
      { word: "hurricane", language: "Taíno", connection: "another Taíno word in English", available: true, slug: "hurricane" },
      { word: "canoe", language: "Taíno", connection: "another Taíno word from first contact", available: true, slug: "canoe" },
      { word: "grill", language: "English", connection: "related cooking concept, French origin", available: false }
    ],
    meaningNow: "Barbecue is now one of America's defining foods — and one of its most contentious. Carolina vs. Texas vs. Kansas City is a rivalry as fierce as any sports competition.\n\nBut the word 'barbecue' predates all those arguments. It comes from people who were cooking this way when Europeans arrived, and whose descendants were nearly erased by colonization. Every backyard cookout carries a Taíno word — a small memorial to the people who invented the technique."
  },
  {
    slug: "llama",
    word: "llama",
    romanization: "llama",
    language: "Quechua via Spanish",
    hook: "Spanish conquistadors couldn't spell the Quechua word, so they doubled the L.",
    story: [
      "In Quechua, the language of the Inca Empire, the animal was called simply llama (pronounced closer to 'ya-ma'). The llama had been domesticated in the Andes for at least 4,000 years, serving as pack animal, wool source, and — in extremis — food.",
      "When Spanish conquistadors arrived in Peru, they encountered an animal unlike anything in Europe. They borrowed the Quechua name but struggled with the sound: the Quechua 'll' is a lateral fricative, nothing like the Spanish 'll.' They wrote it as 'llama' and hoped for the best.",
      "The double-L in Spanish represents a different sound (traditionally 'ly' as in 'million'), so 'llama' in Spanish is pronounced quite differently from the Quechua original. The English pronunciation is different again. The word has been mispronounced its entire journey.",
      "Today llamas have spread from the Andes to farms worldwide, and the internet has made them meme celebrities. But the word still carries its Quechua origin — a reminder of the empire that domesticated these animals millennia before Europeans saw them."
    ],
    journey: [
      { location: "Peruvian Andes", period: "~4000 BCE", form: "llama", context: "Quechua speakers domesticate the animal", color: "#8b5a2b", coordinates: [-72, -15] },
      { location: "Inca Empire", period: "1400s", form: "llama", context: "Essential to Inca economy and ritual", color: "#8b5a2b", coordinates: [-72, -13.5] },
      { location: "Peru", period: "1530s", form: "llama", script: "llama", context: "Spanish conquistadors adopt Quechua name", color: "#5c5a4a", coordinates: [-77, -12] },
      { location: "Spain", period: "1535", form: "llama", context: "First written record in Spanish", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Global", period: "present", form: "llama", context: "Farms worldwide, internet meme status", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Quechua", ipa: "/ˈʎama/", text: "llama", lang: "qu" },
      { label: "Spanish", ipa: "/ˈʎama/", text: "llama", lang: "es" },
      { label: "English", ipa: "/ˈlɑːmə/", text: "llama", lang: "en" }
    ],
    relatives: [
      { word: "alpaca", language: "Quechua", connection: "related camelid, same language origin", available: false },
      { word: "quinoa", language: "Quechua", connection: "another Quechua word gone global", available: false },
      { word: "condor", language: "Quechua", connection: "another Andean word in English", available: false }
    ],
    meaningNow: "The llama has become an unlikely internet celebrity — appearing in memes, emoji, and countless t-shirts. The drama llama, the llama with no drama, the llama in pajamas.\n\nBut behind the memes is a word from a language that predates European contact, from an empire that built Machu Picchu, from a people who domesticated llamas thousands of years before alpacas became trendy. Every 'llama face' emoji carries Quechua history."
  },
  {
    slug: "paprika",
    word: "paprika",
    romanization: "paprika",
    language: "Hungarian from Serbian/Croatian from Latin",
    hook: "The spice that defines Hungarian cuisine traveled from the Americas through the Balkans.",
    story: [
      "Paprika comes from peppers — capsicums native to the Americas. After Columbus brought them to Europe, they spread through the Balkans via the Ottoman Empire. Serbs and Croats called the pepper papar or paprika, borrowing from Latin piper (pepper).",
      "Hungarians acquired both the pepper and the word from their Balkan neighbors. By the 18th century, the dried, ground pepper had become essential to Hungarian cuisine. Goulash, paprikash, stuffed peppers — paprika defines Hungarian cooking.",
      "The word 'paprika' entered English specifically as 'Hungarian paprika' in the late 19th century. The spice's association with Hungary was so strong that the word became Hungarian in English speakers' minds, though its origin is South Slavic.",
      "The journey is remarkable: a New World plant, given a Latin-derived name by Balkan speakers, defined a Central European cuisine, and was exported to the world under a Hungarian brand. The spice traveled further than the word."
    ],
    journey: [
      { location: "Americas", period: "ancient", form: "chile peppers", context: "Capsicum plants native to New World", color: "#9b4a2c", coordinates: [-99, 19] },
      { location: "Spain", period: "1493", form: "pimiento", context: "Columbus brings peppers to Europe", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Balkans", period: "1500s", form: "papar/paprika", context: "Peppers spread via Ottoman Empire", color: "#4a5568", coordinates: [20, 44] },
      { location: "Hungary", period: "1600s", form: "paprika", script: "paprika", context: "Becomes essential to Hungarian cuisine", color: "#4a5568", coordinates: [19, 47.5] },
      { location: "Global", period: "1880s+", form: "paprika", context: "Exported as 'Hungarian paprika'", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Hungarian", ipa: "/ˈpɒprikɒ/", text: "paprika", lang: "hu" },
      { label: "English", ipa: "/pəˈpriːkə/", text: "paprika", lang: "en" }
    ],
    relatives: [
      { word: "pepper", language: "English", connection: "same Latin root piper", available: false },
      { word: "coach", language: "Hungarian", connection: "another Hungarian word in English", available: true, slug: "coach" },
      { word: "pimiento", language: "Spanish", connection: "Spanish pepper, same origin", available: false }
    ],
    meaningNow: "Paprika is one of the few spices named for its color rather than its plant. The powder ranges from mild and sweet to smoked and hot, but the word always evokes Hungary.\n\nThis is marketing genius: a spice from the Americas, named by South Slavs, became so associated with Hungarian cooking that the whole world thinks of it as Hungarian. The word carries a successful rebranding that's lasted centuries."
  },
  {
    slug: "hammock",
    word: "hamaca",
    romanization: "hamaca",
    language: "Taíno via Spanish",
    hook: "Columbus found the Taíno sleeping in hanging nets — and stole the word along with everything else.",
    story: [
      "When Columbus arrived in the Bahamas in 1492, he encountered the Taíno people sleeping in suspended woven beds they called hamaca. These hanging beds were ingeniously designed: they kept sleepers off the ground, away from insects and snakes, and cool in the tropical heat.",
      "The Spanish immediately recognized the hammock's advantages. On ships, where space was precious and the floor rolled, hammocks were perfect. Spanish sailors adopted both the object and the word, and within decades, hammocks were standard sleeping quarters on European vessels.",
      "English borrowed 'hammock' from Spanish in the 1550s. By the 1600s, the British Navy had adopted hammocks for sailors. The Taíno sleeping arrangement became a maritime standard that persisted into the 20th century.",
      "Today the hammock has circled back to leisure: a backyard accessory, a symbol of tropical relaxation, an icon of laziness. But it began as clever engineering by people who knew how to sleep well in the Caribbean."
    ],
    journey: [
      { location: "Caribbean (Taíno lands)", period: "ancient", form: "hamaca", context: "Woven hanging beds for tropical sleeping", color: "#5c5a4a", coordinates: [-77, 21.5] },
      { location: "Bahamas", period: "1492", form: "hamaca", context: "Columbus observes Taíno sleeping practice", color: "#5c5a4a", coordinates: [-77.4, 25.0] },
      { location: "Spanish ships", period: "1500s", form: "hamaca", context: "Sailors adopt hammocks for shipboard sleeping", color: "#5c5a4a", coordinates: [-80, 23] },
      { location: "England", period: "1555", form: "hammock", script: "hammock", context: "First English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "British Navy", period: "1600s+", form: "hammock", context: "Standard sleeping quarters for sailors", color: "#4a5568", coordinates: [-4.5, 50.4] },
      { location: "Global", period: "present", form: "hammock", context: "Backyard leisure, camping, tropical resorts", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Taíno (via Spanish)", ipa: "/aˈmaka/", text: "hamaca", lang: "es" },
      { label: "English", ipa: "/ˈhæmək/", text: "hammock", lang: "en" }
    ],
    relatives: [
      { word: "hurricane", language: "Taíno", connection: "another Taíno word in English", available: true, slug: "hurricane" },
      { word: "canoe", language: "Taíno", connection: "another Taíno object word", available: true, slug: "canoe" },
      { word: "barbecue", language: "Taíno", connection: "another Taíno technology word", available: true, slug: "barbecue" }
    ],
    meaningNow: "The hammock has come full circle: from ingenious Taíno technology to naval necessity to backyard leisure symbol. The word 'hammock' is now inseparable from images of relaxation.\n\nBut it began as engineering: a solution to sleeping in the tropics, adopted by sailors who recognized genius when they saw it. The Taíno were nearly wiped out by colonization, but their sleeping technology and its name persist wherever people want to swing between two trees."
  },
  {
    slug: "okra",
    word: "ọkwuru",
    romanization: "okwuru",
    language: "Igbo (West African)",
    hook: "The slimy vegetable that crossed the Atlantic in slave ships, keeping its African name.",
    story: [
      "Okra (Abelmoschus esculentus) is native to Africa, where it has been cultivated for thousands of years. In the Igbo language of Nigeria, it's called ọkwuru. When enslaved Africans were brought to the Americas, they carried seeds and knowledge of the plants they relied on.",
      "Okra crossed the Atlantic during the slave trade, planted and cultivated by enslaved people who remembered how to grow and cook it. The word traveled with the plant: 'okra' in English derives from West African languages, specifically Igbo ọkwuru and Twi nkruma.",
      "In the American South, okra became essential to Creole and Cajun cooking. Gumbo — the famous Louisiana stew — takes its name from another African word for okra. The vegetable and its names are among the most visible African contributions to American cuisine.",
      "Today okra remains divisive — loved for its flavor, notorious for its mucilaginous texture. But the word 'okra' is a direct line to West Africa, carried to the Americas by people in chains who preserved their agricultural knowledge against all odds."
    ],
    journey: [
      { location: "West Africa", period: "ancient", form: "ọkwuru", context: "Cultivated across West and Central Africa", color: "#8b5a2b", coordinates: [7, 9.1] },
      { location: "Nigeria/Ghana", period: "1600s", form: "ọkwuru/nkruma", context: "Words from Igbo and Twi languages", color: "#8b5a2b", coordinates: [3.4, 6.5] },
      { location: "Caribbean/Americas", period: "1700s", form: "okra", context: "Enslaved Africans bring seeds and knowledge", color: "#5c5a4a", coordinates: [-77, 18] },
      { location: "American South", period: "1780s", form: "okra", script: "okra", context: "First recorded English usage", color: "#4a5568", coordinates: [-90.1, 29.9] },
      { location: "Global", period: "present", form: "okra", context: "Gumbo, Indian cooking, global vegetable", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Igbo", ipa: "/ɔ̀kwúɾú/", text: "ọkwuru", lang: "ig" },
      { label: "English", ipa: "/ˈoʊkɹə/", text: "okra", lang: "en" }
    ],
    relatives: [
      { word: "gumbo", language: "Bantu", connection: "another African name for okra, became a dish name", available: false },
      { word: "zombie", language: "Kongo", connection: "another African word in English via Caribbean", available: true, slug: "zombie" },
      { word: "ubuntu", language: "Zulu", connection: "another Bantu-language word in English", available: true, slug: "ubuntu" }
    ],
    meaningNow: "Okra is one of the clearest surviving links between African agriculture and American cuisine. The word itself — not a translation, not an adaptation, but a direct borrowing — testifies to the knowledge enslaved people carried with them.\n\nEvery gumbo, every fried okra, every bhindi masala uses a vegetable whose name traveled the Middle Passage. The word is a memorial to people whose knowledge survived even when their freedom did not."
  },
  {
    slug: "tulip",
    word: "tülbend",
    romanization: "tülbend",
    language: "Turkish via Latin from Persian",
    hook: "The flower that crashed the Dutch economy has a Turkish name meaning 'turban.'",
    story: [
      "The tulip comes from Central Asia, but Europeans first encountered it in Ottoman Turkey. Turkish gardeners had cultivated tulips for centuries, and the flower's shape reminded them of a turban: in Turkish, tülbend (from Persian dulband) meant 'turban.'",
      "When Ogier Ghiselin de Busbecq, a Habsburg ambassador to the Ottoman court, sent tulip bulbs to Vienna in 1554, he wrote about the 'tulipan' — apparently mishearing the Turkish name for turbans as the name for the flower. The confusion stuck.",
      "Tulips arrived in the Netherlands and sparked 'Tulip Mania' in the 1630s — one of history's first speculative bubbles. Single bulbs sold for more than houses. When the market crashed in 1637, it became a cautionary tale about speculation.",
      "The word 'tulip' thus carries an error (confusing the flower with its turban shape) and a warning (the dangers of irrational markets). Both meanings persist: tulips remain beautiful, and 'tulip mania' remains economists' favorite example of bubbles."
    ],
    journey: [
      { location: "Central Asia", period: "ancient", form: "wild tulips", context: "Native to steppes of Central Asia", color: "#4a3b6b", coordinates: [66, 42] },
      { location: "Ottoman Empire", period: "1400s", form: "lale", context: "Turkish gardeners cultivate tulips", color: "#4a3b6b", coordinates: [29, 41] },
      { location: "Constantinople", period: "1554", form: "tulipan", script: "tulipan", context: "Busbecq sends bulbs to Vienna, mishears name", color: "#4a3b6b", coordinates: [29, 41] },
      { location: "Netherlands", period: "1590s", form: "tulp", context: "Carolus Clusius introduces to Leiden", color: "#4a5568", coordinates: [4.5, 52.2] },
      { location: "Netherlands", period: "1637", form: "tulip", context: "Tulip Mania peaks and crashes", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "Global", period: "present", form: "tulip", context: "Symbol of Netherlands, spring flower worldwide", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Turkish", ipa: "/tyɫˈbent/", text: "tülbend", lang: "tr" },
      { label: "English", ipa: "/ˈtjuːlɪp/", text: "tulip", lang: "en" }
    ],
    relatives: [
      { word: "turban", language: "English", connection: "same Persian root dulband", available: false },
      { word: "kiosk", language: "Turkish", connection: "another Ottoman word in English", available: true, slug: "kiosk" },
      { word: "yogurt", language: "Turkish", connection: "another Turkish word in English", available: true, slug: "yogurt" }
    ],
    meaningNow: "The tulip remains the Netherlands' most famous symbol — despite being neither Dutch nor named correctly. The word 'tulip' is a mistranslation, and the Dutch obsession was a market bubble.\n\nBut the flower's journey — from Central Asian steppes to Ottoman gardens to Dutch speculation to global springtime symbol — makes it one of history's most traveled plants. And 'tulip mania' remains our shorthand for markets that lose touch with reality."
  },
  {
    slug: "kiosk",
    word: "köşk",
    romanization: "köşk",
    language: "Turkish from Persian",
    hook: "The Ottoman garden pavilion became every mall's little booth.",
    story: [
      "In Persian, kušk meant an open pavilion or palace. Turkish adopted it as köşk — the elegant garden pavilions that adorned Ottoman palaces and wealthy homes. These were architectural gems: open to the air, designed for pleasure, symbols of refinement.",
      "European visitors to Istanbul marveled at these köşks and brought the word home. At first, 'kiosk' in European languages meant exactly what it meant in Turkish: an elegant garden structure, a summerhouse, a decorative pavilion.",
      "The meaning shift happened in 19th-century France. Small structures selling newspapers and tickets adopted the name 'kiosque' — perhaps because they were open-air, like the Turkish originals. The palace pavilion became the newsstand.",
      "Today 'kiosk' means any small, open retail booth: mall kiosks, airport kiosks, even digital interfaces (a 'touch-screen kiosk'). The Ottoman garden pleasure house has become the place you buy cell phone cases."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "kušk", script: "کوشک", context: "Open pavilion, palace structure", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Ottoman Empire", period: "1400s", form: "köşk", script: "köşk", context: "Garden pavilions in palace grounds", color: "#4a3b6b", coordinates: [29, 41] },
      { location: "France", period: "1600s", form: "kiosque", script: "kiosque", context: "European travelers adopt the word", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Paris", period: "1800s", form: "kiosque", context: "Meaning shifts to newsstand", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "kiosk", context: "Retail booths, digital interfaces", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Turkish", ipa: "/køʃc/", text: "köşk", lang: "tr" },
      { label: "English", ipa: "/ˈkiːɒsk/", text: "kiosk", lang: "en" }
    ],
    relatives: [
      { word: "tulip", language: "Turkish", connection: "another Ottoman garden word in English", available: true, slug: "tulip" },
      { word: "bazaar", language: "Persian", connection: "another Persian market word", available: true, slug: "bazaar" },
      { word: "pavilion", language: "French/Latin", connection: "similar structure, different origin", available: false }
    ],
    meaningNow: "From palace pleasure grounds to mall retail, 'kiosk' has fallen in the world. But the word carries memory: every airport information kiosk is a distant descendant of Ottoman garden architecture.\n\nThe irony is that Turkish köşks were about leisure and beauty, while modern kiosks are about commerce and convenience. The word retained its meaning (small open structure) while losing its soul (elegant pleasure). It's a linguistic gentrification."
  },
  {
    slug: "glitch",
    word: "glitsh",
    romanization: "glitsh",
    language: "Yiddish from German",
    hook: "Every computer bug you've ever encountered has a name borrowed from Yiddish slang.",
    story: [
      "In Yiddish, glitsh (גליטש) means 'a slip, a slide, a skid' — from German glitschen, 'to slip.' If you slipped on ice, that was a glitsh. It was an ordinary word for an ordinary mishap.",
      "American astronauts and engineers picked up Yiddish terms from their Jewish colleagues. In the 1960s space program, 'glitch' entered technical vocabulary as a small, usually temporary malfunction — a slip in the system, an unexplained error.",
      "John Glenn is often credited with popularizing the word. In his 1962 book, he wrote about 'glitches' in spacecraft systems. The Yiddish word for slipping on ice became the word for digital malfunctions.",
      "Today 'glitch' is so common in tech that few people know its Yiddish origin. We glitch in video games, experience glitches in apps, refer to glitch art as an aesthetic. The slip on ice has become a slip in the matrix."
    ],
    journey: [
      { location: "German-speaking Europe", period: "medieval", form: "glitschen", context: "German verb to slip or slide", color: "#4a5568", coordinates: [10, 51] },
      { location: "Eastern Europe", period: "1700s", form: "glitsh", script: "גליטש", context: "Yiddish adopts the word", color: "#4a5568", coordinates: [21, 52.2] },
      { location: "New York", period: "1890s+", form: "glitch", context: "Yiddish immigrants bring to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "NASA", period: "1962", form: "glitch", context: "Space program engineers popularize term", color: "#4a5568", coordinates: [-80.6, 28.4] },
      { location: "Global", period: "present", form: "glitch", context: "Universal tech term for minor errors", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Yiddish", ipa: "/ɡlɪtʃ/", text: "glitsh", lang: "yi" },
      { label: "English", ipa: "/ɡlɪtʃ/", text: "glitch", lang: "en" }
    ],
    relatives: [
      { word: "schmuck", language: "Yiddish", connection: "another Yiddish word in American English", available: true, slug: "schmuck" },
      { word: "chutzpah", language: "Yiddish", connection: "another Yiddish word Americans love", available: true, slug: "chutzpah" },
      { word: "bug", language: "English", connection: "parallel term for tech errors", available: false }
    ],
    meaningNow: "Glitch has become one of the most common words in digital culture. 'It's just a glitch' is the universal excuse for tech failures, from banking apps to video games.\n\nBut the word remembers its origins: a glitch is a slip, a temporary skid, something that should right itself. The Yiddish speakers who first used 'glitsh' knew that slips happen — you get up and keep walking. Modern coders have inherited that philosophy: reboot and try again."
  },
  {
    slug: "smithereens",
    word: "smidirín",
    romanization: "smidirín",
    language: "Irish Gaelic",
    hook: "Blown to tiny pieces — the Irish diminutive that became an English explosion.",
    story: [
      "In Irish, smidirín is the diminutive of smiodar (small fragment) — it means 'a tiny, tiny piece.' The '-ín' ending is the Irish diminutive, like '-ito' in Spanish. Smidirín is an itty-bitty fragment.",
      "Irish immigrants in the 18th and 19th centuries brought the word to America and England. 'Smithereens' is an Anglicization of smidirín — the spelling changed, but the meaning persisted: something reduced to tiny pieces.",
      "The phrase 'blown to smithereens' became standard English idiom. There's something satisfying about the word — it sounds like what it means. You can almost hear the explosion in the syllables.",
      "Today 'smithereens' appears almost exclusively in the phrase 'blown to smithereens.' It's a fossil: a word that only survives in one expression, carrying its Irish origin like a hidden passenger."
    ],
    journey: [
      { location: "Ireland", period: "ancient", form: "smidirín", context: "Irish diminutive for tiny fragment", color: "#2d5a3b", coordinates: [-8.2, 53.4] },
      { location: "Irish diaspora", period: "1800s", form: "smithereens", script: "smithereens", context: "Irish immigrants bring word to English", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "England", period: "1829", form: "smithereens", context: "First recorded written usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global English", period: "present", form: "smithereens", context: "Fossil idiom: blown to smithereens", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Irish", ipa: "/ˈsmʲɪdʲəɾʲiːn/", text: "smidirín", lang: "ga" },
      { label: "English", ipa: "/smɪðəˈɹiːnz/", text: "smithereens", lang: "en" }
    ],
    relatives: [
      { word: "whiskey", language: "Irish", connection: "another Irish word in English", available: true, slug: "whiskey" },
      { word: "banshee", language: "Irish", connection: "another Irish word in English", available: true, slug: "banshee" },
      { word: "slogan", language: "Scottish Gaelic", connection: "another Celtic word in English", available: true, slug: "slogan" }
    ],
    meaningNow: "Smithereens is one of English's most specific words: it means tiny pieces, and it only appears after an explosion. You don't gently divide something into smithereens.\n\nThe word survives because it's perfect for its purpose. The 'sm-' beginning, the 's' hiss, the '-eens' ending that sounds like scattered debris — it's onomatopoeia for destruction. Irish gave English the perfect word for complete annihilation."
  }
];
