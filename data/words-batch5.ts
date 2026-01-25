import type { Word } from "./word-types";

export const newWordsBatch5: Word[] = [
  {
    slug: "coach",
    word: "kocsi",
    romanization: "kocsi",
    language: "Hungarian",
    hook: "Every Uber, every sports mentor, every bus you've ever taken — all named after a tiny Hungarian village.",
    story: [
      "In 15th-century Hungary, the village of Kocs (pronounced 'kotch') sat on the main road between Vienna and Budapest. Its wagon-makers developed a revolutionary vehicle: lighter, faster, with a unique suspension system using leather straps.",
      "The 'kocsi szekér' — the 'wagon from Kocs' — became the premium transport of its age. Nobles demanded them. The design spread across Europe, and with it, the name: coach in English, Kutsche in German, coche in French and Spanish.",
      "By the 19th century, 'coach' had expanded metaphorically. A tutor who 'carries' students to their exams became a coach. A trainer who 'transports' athletes to victory became a coach. The vehicle had become a verb, the noun a metaphor.",
      "Today the original wagon has been replaced by planes and cars, but its name lives on in coaching, coach class, life coaches, and football coaches — all descendants of a Hungarian village innovation."
    ],
    journey: [
      { location: "Kocs, Hungary", period: "1450s", form: "kocsi szekér", context: "Village develops revolutionary wagon design", color: "#4a5568", coordinates: [18.1, 47.5] },
      { location: "Vienna", period: "1500s", form: "Kotsche", script: "Kotsche", context: "Austrian nobles adopt Hungarian wagons", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "France", period: "1540s", form: "coche", script: "coche", context: "French borrow the German form", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "England", period: "1556", form: "coach", script: "coach", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1800s+", form: "coach", context: "Metaphor for anyone who transports others to success", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hungarian", ipa: "/ˈkot͡ʃi/", text: "kocsi", lang: "hu" },
      { label: "English", ipa: "/koʊtʃ/", text: "coach", lang: "en" }
    ],
    relatives: [
      { word: "Kutsche", language: "German", connection: "same Hungarian origin, means carriage", available: false },
      { word: "coche", language: "Spanish", connection: "same origin, became word for car", available: false },
      { word: "stagecoach", language: "English", connection: "compound with coach for long-distance travel", available: false }
    ],
    meaningNow: "Coach has traveled further than any wagon from Kocs could have imagined. A life coach, a head coach, coaching a team — all trace back to that Hungarian innovation.\n\nThe metaphor is perfect: a coach is someone who takes you where you need to go. The vehicle became the verb, and a 15th-century village gave every sports team its most important person."
  },
  {
    slug: "whiskey",
    word: "uisce beatha",
    romanization: "uisce beatha",
    language: "Irish Gaelic",
    hook: "Irish monks called it 'the water of life.' English soldiers just mumbled the first bit.",
    story: [
      "The Irish phrase uisce beatha (pronounced 'ISH-ka BA-ha') means 'water of life' — a direct translation of the Latin aqua vitae that medieval alchemists used for distilled spirits. Irish monks learned distillation from returning crusaders and applied it to grain.",
      "English soldiers and settlers in Ireland couldn't wrap their tongues around 'uisce beatha.' They heard the first word, mangled it, and produced 'usky' then 'whisky.' The 'water of life' became just... water. The second half of the phrase — the life part — was lost in translation.",
      "Scotland has its own claim to whisky (spelled without the 'e'), but the word itself is Irish. The drinks developed in parallel, but the English name came from Ireland's liquid first.",
      "Today, Irish whiskey and Scotch whisky compete for the world's affection, but both share a name that most drinkers don't know means 'water of life' — a reminder that for the monks who invented it, this was medicine for the soul."
    ],
    journey: [
      { location: "Ireland", period: "~1400", form: "uisce beatha", script: "uisce beatha", context: "Irish monks distill grain spirits", color: "#2d5a3b", coordinates: [-8.2, 53.4] },
      { location: "Ireland", period: "1500s", form: "usquebaugh", context: "Anglicized spelling appears", color: "#2d5a3b", coordinates: [-6.3, 53.3] },
      { location: "Scotland", period: "1600s", form: "whisky", script: "whisky", context: "Scots develop their own tradition", color: "#3b4a5a", coordinates: [-4.2, 56.5] },
      { location: "England", period: "1715", form: "whiskey", script: "whiskey", context: "Modern English spelling established", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "whiskey/whisky", context: "World's most popular spirit category", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Irish Gaelic", ipa: "/ˈɪʃcə ˈbʲahə/", text: "uisce beatha", lang: "ga" },
      { label: "English", ipa: "/ˈwɪski/", text: "whiskey", lang: "en" }
    ],
    relatives: [
      { word: "aqua vitae", language: "Latin", connection: "water of life: the translation Irish borrowed from", available: false },
      { word: "eau de vie", language: "French", connection: "same concept, French brandy", available: false },
      { word: "vodka", language: "Russian", connection: "diminutive of 'water' — same life-giving metaphor", available: false }
    ],
    meaningNow: "Every whiskey on your shelf carries an Irish prayer: the water of life. The monks who first distilled it believed they were creating medicine, something sacred.\n\nThe etymology is a small tragedy: English speakers lost the 'life' part of the phrase and kept only 'water.' But for those who know, every glass of whiskey is a toast to the monks who named it — and the life they were trying to preserve."
  },
  {
    slug: "slogan",
    word: "sluagh-ghairm",
    romanization: "sluagh-ghairm",
    language: "Scottish Gaelic",
    hook: "Every advertising tagline, every political chant — all descended from Scottish battle cries.",
    story: [
      "In Gaelic, sluagh means 'army' or 'host,' and gairm means 'cry' or 'shout.' Together, sluagh-ghairm was the battle cry of the Scottish Highland clans — the shout warriors made as they charged into combat.",
      "Each clan had its own slogan: 'Cruachan!' for Clan Campbell, 'A Buchanan!' for Clan Buchanan. The slogan identified your people in the chaos of battle, rallied the scattered, terrified the enemy. It was identity compressed into a scream.",
      "By the 18th century, as clan warfare faded, 'slogan' began its transformation. It became any rallying cry, then a political catchphrase, then — by the 20th century — advertising copy. The warrior's scream became 'Just Do It.'",
      "The arc is complete: from battlefield to billboard. The words that once meant life or death now sell sneakers. But the function remains the same: a slogan is still a call to action, a rallying cry, an identity compressed into a phrase."
    ],
    journey: [
      { location: "Scottish Highlands", period: "medieval", form: "sluagh-ghairm", script: "sluagh-ghairm", context: "Clan battle cries in Highland warfare", color: "#3b4a5a", coordinates: [-4.5, 57.0] },
      { location: "Scotland", period: "1500s", form: "slogorne", context: "Anglicized in Scottish English", color: "#3b4a5a", coordinates: [-3.2, 55.9] },
      { location: "England", period: "1704", form: "slogan", script: "slogan", context: "First recorded English usage as political catchphrase", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1920s", form: "slogan", context: "Advertising industry adopts the term", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "slogan", context: "Marketing, politics, movements worldwide", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Scottish Gaelic", ipa: "/ˈsɫuəɣəɾʲɪm/", text: "sluagh-ghairm", lang: "gd" },
      { label: "English", ipa: "/ˈsloʊ.ɡən/", text: "slogan", lang: "en" }
    ],
    relatives: [
      { word: "banshee", language: "Irish", connection: "bean sídhe: another Gaelic phrase in English", available: true, slug: "banshee" },
      { word: "whiskey", language: "Irish", connection: "another Celtic word in English", available: true, slug: "whiskey" },
      { word: "motto", language: "Italian", connection: "similar function, different origin", available: false }
    ],
    meaningNow: "From 'Think Different' to 'Make America Great Again,' every slogan carries the DNA of Scottish warriors running screaming into battle.\n\nThe word reminds us that advertising and politics are warfare by other means. A slogan is still what it always was: a cry meant to unite us, move us, make us act. The battlefield has changed, but the battle cry remains."
  },
  {
    slug: "hurricane",
    word: "hurakán",
    romanization: "hurakán",
    language: "Taíno",
    hook: "The god of storms from the Caribbean gave his name to every Atlantic tempest.",
    story: [
      "When Spanish colonizers arrived in the Caribbean, the Taíno people told them of Hurakán — a powerful deity who controlled storms and destruction. The Taíno knew these storms intimately; they had lived with them for thousands of years.",
      "The Spanish borrowed the god's name for the storms themselves. By the 16th century, huracán appeared in Spanish texts describing the Caribbean's terrifying weather. The god became the phenomenon, the divine became the meteorological.",
      "English borrowed 'hurricane' from Spanish. At first, it was used only for Caribbean storms. But as meteorology developed, the word spread to describe all tropical cyclones in the Atlantic and eastern Pacific. The Taíno god's territory expanded.",
      "Today, NOAA tracks hurricanes, assigns them names, predicts their paths. But the word itself remains a tribute to the people who first named these storms — and to a god whose power still terrifies coastlines from Florida to Nova Scotia."
    ],
    journey: [
      { location: "Caribbean (Taíno lands)", period: "ancient", form: "hurakán", context: "Storm deity in Taíno mythology", color: "#5c5a4a", coordinates: [-66.1, 18.5] },
      { location: "Cuba/Hispaniola", period: "1500s", form: "huracán", script: "huracán", context: "Spanish colonizers adopt the name for storms", color: "#5c5a4a", coordinates: [-77.8, 21.5] },
      { location: "Spain", period: "1510s", form: "huracán", context: "First written records in Spanish", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1555", form: "hurricane", script: "hurricane", context: "First English usage in travel accounts", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "hurricane", context: "Atlantic tropical cyclone classification", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Taíno (reconstructed)", ipa: "/huɾaˈkan/", text: "hurakán", lang: "tnq" },
      { label: "English", ipa: "/ˈhʌɹɪˌkeɪn/", text: "hurricane", lang: "en" }
    ],
    relatives: [
      { word: "typhoon", language: "English", connection: "same phenomenon, different ocean, different name origin", available: true, slug: "typhoon" },
      { word: "cyclone", language: "English", connection: "Greek-derived word for rotating storms", available: false },
      { word: "canoe", language: "Taíno", connection: "another Taíno word in English", available: true, slug: "canoe" }
    ],
    meaningNow: "Hurricane remains the Atlantic's word for destruction. The Taíno people who coined it were largely destroyed by colonization, but their word for the storm god survives in every weather report.\n\nEvery hurricane season, meteorologists invoke a Taíno deity without knowing it. The word is a memorial — a reminder that the people who understood these storms first gave them their name."
  },
  {
    slug: "canoe",
    word: "canaoua",
    romanization: "canaoua",
    language: "Taíno/Arawakan",
    hook: "The first American word to enter European languages — before 'America' itself.",
    story: [
      "When Columbus arrived in the Caribbean in 1492, he needed words for things he'd never seen. The Taíno people's dugout boats were unlike anything in Europe. He borrowed their word: canaoua or canoa, depending on the dialect.",
      "This was one of the first words from the Americas to enter European languages — predating 'America' itself, which wouldn't be coined until 1507. The canoe crossed the Atlantic before the continent had a European name.",
      "The word traveled fast: Spanish canoa became French canot, English canoe, Portuguese canoa. Every European power that colonized the Americas adopted the Taíno word for the vessel that made navigation of the continent's rivers possible.",
      "Today, canoe evokes leisure — summer camps, quiet lakes, romantic outings. But for thousands of years, it was essential transportation, the vehicle that carried people, goods, and warfare across the waterways of the Americas."
    ],
    journey: [
      { location: "Caribbean (Taíno lands)", period: "ancient", form: "canaoua", context: "Dugout boat used for fishing, travel, warfare", color: "#5c5a4a", coordinates: [-66.1, 18.5] },
      { location: "Hispaniola", period: "1492", form: "canoa", script: "canoa", context: "Columbus records the word", color: "#5c5a4a", coordinates: [-69.9, 18.7] },
      { location: "Spain", period: "1493", form: "canoa", context: "Word appears in Columbus's letter to Spain", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1555", form: "canoe", script: "canoe", context: "English adopts from Spanish via travel accounts", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "canoe", context: "Recreation, sport, indigenous transportation", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Taíno (reconstructed)", ipa: "/kanaˈwa/", text: "canaoua", lang: "tnq" },
      { label: "Spanish", ipa: "/kaˈno.a/", text: "canoa", lang: "es" },
      { label: "English", ipa: "/kəˈnuː/", text: "canoe", lang: "en" }
    ],
    relatives: [
      { word: "hurricane", language: "Taíno", connection: "another Taíno word in English", available: true, slug: "hurricane" },
      { word: "kayak", language: "Inuit", connection: "another indigenous boat word in English", available: false },
      { word: "pirogue", language: "Carib/French", connection: "another Amerindian boat word", available: false }
    ],
    meaningNow: "The canoe may be the most important word to survive the destruction of the Taíno people. Columbus came in ships; he explored in canoes. The colonizers depended on indigenous technology even as they destroyed indigenous peoples.\n\nEvery summer camper paddling across a lake is using a word from a largely vanished language — a small memorial to the people who first named these vessels."
  },
  {
    slug: "catamaran",
    word: "கட்டுமரம்",
    romanization: "kaṭṭumaram",
    language: "Tamil",
    hook: "The Tamil 'tied logs' became the world's fastest sailing vessels.",
    story: [
      "In Tamil, kattu means 'to tie' and maram means 'wood' or 'tree.' A kattumaram was simply tied logs — a basic raft used by fishermen along the Coromandel Coast of India for thousands of years.",
      "These simple vessels had an advantage Western sailors didn't understand: the twin-hull design was inherently stable and could sail faster than traditional boats. The Polynesian voyagers had discovered the same principle independently — great minds think alike across oceans.",
      "The British in India noticed these strange tied-log boats and borrowed the word. By the 19th century, 'catamaran' entered technical sailing vocabulary. By the 20th century, designers realized the ancient Tamil fishermen had been onto something revolutionary.",
      "Today's racing catamarans are made of carbon fiber and can exceed 50 knots — but they use the same fundamental principle as the tied logs that Tamil fishermen paddled out of Chennai Harbor centuries ago."
    ],
    journey: [
      { location: "Tamil Nadu, India", period: "ancient", form: "கட்டுமரம்", script: "கட்டுமரம்", context: "Fishing rafts of tied logs", color: "#9b4a2c", coordinates: [80.3, 13.1] },
      { location: "Coromandel Coast", period: "1600s", form: "kattumarum", context: "European traders observe the vessels", color: "#9b4a2c", coordinates: [79.8, 11.0] },
      { location: "England", period: "1697", form: "catamaran", script: "catamaran", context: "First recorded English usage", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Polynesia", period: "parallel", form: "various", context: "Independent invention of similar design", color: "#5c5a4a", coordinates: [-149.4, -17.5] },
      { location: "Global", period: "present", form: "catamaran", context: "Racing yachts, ferries, cruising vessels", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tamil", ipa: "/kəʈʈʊməɾəm/", text: "கட்டுமரம்", lang: "ta" },
      { label: "English", ipa: "/ˌkætəməˈræn/", text: "catamaran", lang: "en" }
    ],
    relatives: [
      { word: "proa", language: "Malay", connection: "another Asian outrigger design", available: false },
      { word: "trimaran", language: "English", connection: "three-hulled variant of catamaran", available: false },
      { word: "curry", language: "Tamil", connection: "another Tamil word in English (disputed)", available: false }
    ],
    meaningNow: "The America's Cup, the world's oldest international sporting trophy, is now contested in foiling catamarans that fly above the water at speeds early sailors couldn't imagine.\n\nBut the word 'catamaran' reminds us that Tamil fishermen understood twin-hull stability thousands of years before Western yacht designers. Every high-tech racing cat carries a Tamil name — tied logs that learned to fly."
  },
  {
    slug: "chutzpah",
    word: "חוצפה",
    romanization: "chutzpah",
    language: "Yiddish from Hebrew",
    hook: "The audacity to sue your parents for giving birth to you — that's chutzpah.",
    story: [
      "The Hebrew word ḥuṣpâ (חוצפה) meant 'impudence' or 'insolence' — a negative quality, a breach of respect. But Yiddish transformed it. In the shtetls of Eastern Europe, a certain audacity became necessary for survival, and chutzpah became almost admirable.",
      "The classic definition: chutzpah is when a person kills their parents and then pleads for mercy because they're an orphan. It's shamelessness so extreme it circles back to impressive. It's audacity that takes your breath away.",
      "Jewish immigrants brought chutzpah to America in the late 19th century. By the 1960s, it had entered mainstream American English. Politicians needed chutzpah. Entrepreneurs had chutzpah. The Yiddish survival skill became an American business virtue.",
      "The word is untranslatable because the attitude is specific: not mere courage, not simple rudeness, but a particular combination of nerve, gall, and self-confidence that borders on the absurd. English has no equivalent because English speakers didn't need one — until they met Yiddish."
    ],
    journey: [
      { location: "Ancient Israel", period: "biblical", form: "ḥuṣpâ", script: "חוצפה", context: "Hebrew word for insolence", color: "#4a3b6b", coordinates: [35.2, 31.8] },
      { location: "Eastern Europe", period: "1600s+", form: "khutspe", script: "חוצפּה", context: "Yiddish transforms the meaning", color: "#4a5568", coordinates: [21, 52.2] },
      { location: "New York", period: "1890s+", form: "chutzpah", script: "chutzpah", context: "Jewish immigrants bring word to America", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "United States", period: "1960s+", form: "chutzpah", context: "Enters mainstream American English", color: "#4a5568", coordinates: [-118, 34] },
      { location: "Global", period: "present", form: "chutzpah", context: "Business virtue, personality trait", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Yiddish", ipa: "/ˈxʊtspə/", text: "chutzpah", lang: "yi" },
      { label: "American English", ipa: "/ˈhʊtspə/", text: "chutzpah", lang: "en" }
    ],
    relatives: [
      { word: "schmuck", language: "Yiddish", connection: "another Yiddish word in American English", available: true, slug: "schmuck" },
      { word: "nerve", language: "English", connection: "closest native equivalent, but not quite right", available: false },
      { word: "audacity", language: "English/Latin", connection: "similar but lacks the absurdist edge", available: false }
    ],
    meaningNow: "Chutzpah has become a compliment in American English — something entrepreneurs brag about having. This would have puzzled the rabbis who originally condemned it.\n\nBut the transformation makes sense: in America, audacity is rewarded. The immigrant experience required a certain shamelessness to survive. The word that meant 'insolence' became the word for the spirit that built empires.\n\nStill, the old meaning lurks. Real chutzpah still has an edge of the absurd — of someone who should know better but doesn't care."
  },
  {
    slug: "taekwondo",
    word: "태권도",
    romanization: "taekwondo",
    language: "Korean",
    hook: "The martial art whose name means 'the way of the foot and fist' became an Olympic sport.",
    story: [
      "Taekwondo is a modern construction: tae (태/跆) means 'to strike with the foot,' kwon (권/拳) means 'fist' or 'to strike with the hand,' and do (도/道) means 'the way' or 'path.' It's a philosophical name for a physical art.",
      "The art itself was formalized in 1955, when Korean martial arts masters unified several traditional Korean fighting styles under one name. General Choi Hong Hi is credited with coining 'taekwondo' — a term designed to distinguish Korean martial arts from Japanese karate and Chinese kung fu.",
      "The 'do' suffix connects taekwondo to the broader East Asian tradition of martial arts as spiritual paths: judo (the gentle way), kendo (the way of the sword), aikido (the way of harmonious spirit). Fighting is just the surface; the real practice is character development.",
      "Taekwondo became an Olympic sport in 2000, the culmination of Korea's deliberate export of its martial art. Today it's practiced in 210 countries, and 'taekwondo' is one of the few Korean words known globally."
    ],
    journey: [
      { location: "Korea", period: "ancient", form: "various", context: "Traditional Korean martial arts (taekkyeon, subak)", color: "#2d4a3b", coordinates: [127, 37.5] },
      { location: "Seoul", period: "1955", form: "태권도", script: "태권도", context: "General Choi Hong Hi coins the term", color: "#2d4a3b", coordinates: [127, 37.5] },
      { location: "South Korea", period: "1966", form: "taekwondo", context: "International Taekwon-Do Federation formed", color: "#2d4a3b", coordinates: [127, 37.5] },
      { location: "Sydney", period: "2000", form: "taekwondo", context: "Becomes official Olympic sport", color: "#4a5568", coordinates: [151.2, -33.9] },
      { location: "Global", period: "present", form: "taekwondo", context: "Practiced in 210 countries worldwide", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Korean", ipa: "/tʰɛ.k͈wʌn.do/", text: "태권도", lang: "ko" },
      { label: "English", ipa: "/ˌtaɪˈkwɒndoʊ/", text: "taekwondo", lang: "en" }
    ],
    relatives: [
      { word: "karate", language: "Japanese", connection: "empty hand: parallel martial art naming", available: true, slug: "karate" },
      { word: "judo", language: "Japanese", connection: "another -do martial art", available: false },
      { word: "taekkyeon", language: "Korean", connection: "traditional Korean martial art, partial ancestor", available: false }
    ],
    meaningNow: "Taekwondo is Korea's most successful cultural export after K-pop. The word itself — foot-fist-way — is a mission statement: this is about more than kicking and punching.\n\nEvery taekwondo practitioner learns that 'do' means journey, not destination. The flying kicks are impressive, but the word reminds us that the real practice is the path itself."
  },
  {
    slug: "banshee",
    word: "bean sídhe",
    romanization: "bean sídhe",
    language: "Irish Gaelic",
    hook: "The wailing woman who foretells death — Irish mythology gave English its scariest word.",
    story: [
      "In Irish, bean means 'woman' and sídhe (pronounced 'shee') refers to the fairy mounds — the supernatural realm where the Tuatha Dé Danann, the old gods of Ireland, retreated when humans took the land. A bean sídhe is a 'woman of the fairy mound.'",
      "In Irish folklore, the banshee wails when someone is about to die. Each Irish family was said to have its own banshee; her cry meant a family member's death was imminent. To hear the banshee was to know that grief was coming.",
      "The banshee crossed the Atlantic with Irish immigrants. In American horror culture, she transformed from a specific Irish death omen into a generic screaming ghost. The folklore faded; the scream remained.",
      "Today 'banshee' mostly means 'screaming like a banshee' — loud and high-pitched. The death omen has become a noise complaint. But in Ireland, the old stories persist, and some still claim to have heard her wail."
    ],
    journey: [
      { location: "Ireland", period: "ancient", form: "bean sídhe", script: "bean sídhe", context: "Death omen in Irish folklore", color: "#2d5a3b", coordinates: [-8.2, 53.4] },
      { location: "Ireland", period: "medieval", form: "bean sídhe", context: "Stories recorded in manuscripts", color: "#2d5a3b", coordinates: [-8.2, 53.4] },
      { location: "Scotland", period: "medieval", form: "bean shìth", context: "Scottish Gaelic variant", color: "#3b4a5a", coordinates: [-4.2, 56.5] },
      { location: "England", period: "1771", form: "banshee", script: "banshee", context: "First recorded English spelling", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "banshee", context: "Horror genre, idiom for loud screaming", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Irish Gaelic", ipa: "/bʲan ˈʃiː/", text: "bean sídhe", lang: "ga" },
      { label: "English", ipa: "/ˈbænʃiː/", text: "banshee", lang: "en" }
    ],
    relatives: [
      { word: "whiskey", language: "Irish", connection: "another Irish word in English", available: true, slug: "whiskey" },
      { word: "slogan", language: "Scottish Gaelic", connection: "another Celtic word in English", available: true, slug: "slogan" },
      { word: "leprechaun", language: "Irish", connection: "another fairy creature from Irish mythology", available: false }
    ],
    meaningNow: "The banshee has traveled far from her fairy mound. She appears in video games, horror movies, X-Men comics — always screaming, rarely understood.\n\nBut the original banshee wasn't evil. She was a messenger, a mourner, a woman who cried so the family didn't have to be surprised by death. In a world where death came often and suddenly, she was preparation.\n\nEvery 'screaming like a banshee' carries a trace of genuine Irish grief — a wail meant to warn, not to terrify."
  },
  {
    slug: "zombie",
    word: "nzambi",
    romanization: "nzambi",
    language: "Kongo/Kikongo",
    hook: "The undead of Haiti and Hollywood speak with a Central African voice.",
    story: [
      "The word 'zombie' traces back to the Kikongo language of Central Africa, where nzambi means 'god' or 'spirit of a dead person.' Enslaved people from the Kongo kingdom carried this word — and their spiritual beliefs — to the Caribbean.",
      "In Haitian Vodou, the zonbi became something specific: a dead person reanimated by a bokor (sorcerer) to serve as a slave. The zombie was the ultimate horror for a people who had been enslaved: even death offered no escape from bondage.",
      "American occupation of Haiti (1915-1934) brought the zombie to American attention. Newspaper reports, then pulp novels, then films like White Zombie (1932) introduced Americans to the living dead. But these early zombies were still Haitian: slow, mindless, controlled by a master.",
      "George Romero's Night of the Living Dead (1968) transformed the zombie from a Vodou servant into an apocalyptic horde. The Haitian zombie became the American zombie: a metaphor for consumerism, conformity, whatever horror the filmmaker wanted to critique."
    ],
    journey: [
      { location: "Kongo Kingdom", period: "ancient", form: "nzambi", context: "Spirit, god, essence of dead person", color: "#8b5a2b", coordinates: [14.8, -4.3] },
      { location: "Haiti", period: "1700s", form: "zonbi", context: "Haitian Vodou: reanimated dead as slaves", color: "#8b5a2b", coordinates: [-72.3, 18.5] },
      { location: "United States", period: "1929", form: "zombie", script: "zombie", context: "First English usage (William Seabrook)", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Hollywood", period: "1968", form: "zombie", context: "Romero reinvents as apocalyptic monster", color: "#4a5568", coordinates: [-118.4, 34] },
      { location: "Global", period: "present", form: "zombie", context: "Walking Dead, video games, preparedness drills", coordinates: [0, 30] }
    ],
    sounds: [
      { label: "Kikongo", ipa: "/nˈzambi/", text: "nzambi", lang: "kg" },
      { label: "Haitian Creole", ipa: "/zɔ̃bi/", text: "zonbi", lang: "ht" },
      { label: "English", ipa: "/ˈzɒmbi/", text: "zombie", lang: "en" }
    ],
    relatives: [
      { word: "ubuntu", language: "Zulu", connection: "another Bantu-language word in English", available: true, slug: "ubuntu" },
      { word: "Vodou", language: "Haitian", connection: "the religious tradition zombies come from", available: false },
      { word: "golem", language: "Hebrew", connection: "another animated artificial creature", available: false }
    ],
    meaningNow: "The zombie has become our culture's favorite monster — more popular than vampires, werewolves, or any other creature. The CDC even has a 'Zombie Preparedness' guide (they're not kidding).\n\nBut the Haitian meaning persists beneath the American entertainment: the zombie is the nightmare of enslaved people, the fear that death itself offers no freedom. Every Walking Dead episode carries the echo of a Kongo word for spirit, transformed in Haiti into the ultimate horror of perpetual slavery.\n\nThe zombie apocalypse is an American invention. The word itself is African grief made flesh."
  }
];
