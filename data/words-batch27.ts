import type { Word } from "./word-types";

export const batch27: Word[] = [
  {
    slug: "monsignor",
    word: "monsignore",
    romanization: "monsignore",
    language: "Italian",
    hook: "A Catholic honorific that literally means 'my lord'—borrowed from the same French root that gave us 'monsieur.'",
    story: [
      "The Italian word monsignore comes from the French monseigneur, meaning 'my lord.' Both trace back to Latin meus senior—'my elder.' In medieval Europe, the word was a general term of respect for powerful men, whether secular or religious. Bishops, dukes, and kings all answered to some version of it.",
      "The Catholic Church adopted monsignore as an official title for clergy who held positions of particular honor or administrative importance. It became a rank above ordinary priests but below bishops—a recognition of service rather than a promotion in the strict hierarchy.",
      "French kept monseigneur for royalty and high clergy, eventually shortening it to monsieur for everyday polite address. Every Frenchman became 'my lord' in casual speech. Italian kept monsignore specifically for the Church, preserving the gravity that French had diluted.",
      "English borrowed monsignor (dropping the final -e) in the 1600s, applying it exclusively to Catholic prelates. The word that once addressed kings now addresses parish administrators. The reverence is real but the scale has shifted—from lords of kingdoms to lords of dioceses."
    ],
    journey: [
      { location: "Rome", period: "~200 CE", form: "meus senior", script: "meus senior", context: "Latin my elder term of respect", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Paris", period: "1200s", form: "monseigneur", context: "French honorific for lords bishops royalty", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Rome", period: "1400s", form: "monsignore", script: "monsignore", context: "Italian Catholic Church title for honored clergy", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "London", period: "1600s", form: "monsignor", context: "English borrowing for Catholic prelates", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Italian", ipa: "/mon.siɲˈɲo.re/", text: "monsignore", lang: "it" },
      { label: "English", ipa: "/mɒnˈsiː.njɔːɹ/", text: "monsignor", lang: "en" }
    ],
    relatives: [
      { word: "monsieur", language: "French", connection: "same root—French diluted it to everyday politeness", available: false },
      { word: "senhor", language: "Portuguese", connection: "from Latin senior—same elder-respect root", available: false },
      { word: "guru", language: "Sanskrit", connection: "another word meaning elder/teacher as honorific", available: true, slug: "guru" }
    ],
    meaningNow: "Monsignor preserves a medieval social architecture in a single word—the idea that respect flows upward toward elders, that age and service confer a kind of lordship.\n\nFrench democratized the concept until every stranger was 'my lord.' Italian kept it sacred. English froze it in amber, a title heard almost exclusively in Catholic contexts, carrying the weight of centuries of hierarchy in four syllables."
  },
  {
    slug: "soprano",
    word: "soprano",
    romanization: "soprano",
    language: "Italian",
    hook: "The highest singing voice is named with a word meaning 'above'—and the history of reaching those notes is darker than any aria.",
    story: [
      "Soprano comes from Italian sopra, meaning 'above,' from Latin supra. In music, soprano simply meant the voice part that sat above the others—the highest line in a choral composition. By the 1600s, it had become the standard term for the highest vocal range in Western music.",
      "But who sang those high parts created a moral crisis. Before women were allowed on most European stages, the soprano line was sung by boys—or by castrati, men who had been surgically altered before puberty to preserve their high voices. The castrato tradition dominated Italian opera for over two centuries.",
      "The most famous castrati—Farinelli, Caffarelli, Senesino—were superstars of their era, commanding enormous fees and adulation. But behind each career was a child subjected to an irreversible procedure, often by impoverished families hoping for a musical lottery ticket. The beautiful sound came at a terrible human cost.",
      "When women finally took the soprano roles in the 1800s, the castrato tradition died out. Today, soprano simply means the highest vocal range, typically sung by women and boys. The word carries no trace of its complicated past—just the neutral geometry of 'above.'"
    ],
    journey: [
      { location: "Rome", period: "~100 CE", form: "supra", script: "supra", context: "Latin above over", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Naples", period: "1600s", form: "soprano", script: "soprano", context: "Italian highest voice part castrati era", color: "#5c5a4a", coordinates: [14.3, 40.8] },
      { location: "Vienna", period: "1700s", form: "Sopran", context: "German opera adopts Italian vocal terminology", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "London", period: "1730s", form: "soprano", context: "English adopts for highest singing voice", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "soprano", context: "Highest vocal range in Western music", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Italian", ipa: "/soˈpra.no/", text: "soprano", lang: "it" },
      { label: "English", ipa: "/səˈpɹæn.oʊ/", text: "soprano", lang: "en" }
    ],
    relatives: [
      { word: "piano", language: "Italian", connection: "another musical term from Italian—soft", available: true, slug: "piano" },
      { word: "alto", language: "Italian", connection: "from altus (high)—the next voice down from soprano", available: false },
      { word: "opera", language: "Italian", connection: "from Latin opus—the art form sopranos dominate", available: false }
    ],
    meaningNow: "Every soprano who takes the stage inherits a role that was once reserved for boys and castrati—a voice part defined by the geometry of 'above' but shaped by centuries of complex human decisions about who gets to sing.\n\nThe word itself is clean and architectural. It names a position in musical space. But the history of filling that position is anything but clean."
  },
  {
    slug: "anchovy",
    word: "anchova",
    romanization: "anchova",
    language: "Portuguese/Spanish",
    hook: "This tiny fish has been currency, condiment, and controversy—and its name may trace back to a Basque word meaning 'dried fish.'",
    story: [
      "The origin of anchovy is genuinely disputed. The leading theory traces it to Basque antzua or Portuguese anchova, possibly from Latin apua (small fish) filtered through Iberian languages. What's certain is that the fish itself was central to Mediterranean cuisine long before anyone agreed on what to call it.",
      "The Romans were obsessed with anchovies—or rather, with garum, a fermented anchovy sauce that they put on everything. Garum factories lined the coasts of Spain and North Africa. A fine garum was worth its weight in silver. When Rome fell, garum fell with it, and the anchovy went from luxury ingredient to common food.",
      "Portuguese and Spanish fishermen revived the anchovy trade in the Middle Ages, salting and packing the fish for export across Europe. The English word anchovy appeared in the 1590s, borrowed from Spanish anchova. By the 1600s, anchovy paste was a staple of English cooking.",
      "Today, anchovies are perhaps the most polarizing ingredient in Western cuisine—people either love them or refuse to eat them. The tiny fish that was once Rome's most prized condiment now starts arguments about pizza toppings. But anchovy is also the secret ingredient in Worcestershire sauce, Caesar dressing, and dozens of other foods that anchovy-haters eat unknowingly."
    ],
    journey: [
      { location: "Bilbao", period: "ancient", form: "antzua", context: "Basque dried fish possible origin", color: "#4a5568", coordinates: [-2.9, 43.3] },
      { location: "Cádiz", period: "~200 BCE", form: "apua", context: "Roman garum factories fermented anchovy sauce", color: "#5c5a4a", coordinates: [-6.3, 36.5] },
      { location: "Lisbon", period: "1400s", form: "anchova", script: "anchova", context: "Portuguese fishing trade salted anchovies", color: "#4a5568", coordinates: [-9.1, 38.7] },
      { location: "London", period: "1590s", form: "anchovy", context: "English borrows from Spanish anchovy paste popular", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Naples", period: "present", form: "acciuga", context: "Italian pizza topping global controversy", coordinates: [14.3, 40.8] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/anˈtʃo.βa/", text: "anchova", lang: "es" },
      { label: "English", ipa: "/ˈæn.tʃoʊ.vi/", text: "anchovy", lang: "en" }
    ],
    relatives: [
      { word: "ketchup", language: "English", connection: "another condiment word with contested fish-sauce origins", available: true, slug: "ketchup" },
      { word: "sardine", language: "English", connection: "named after Sardinia—another small preserved fish", available: false },
      { word: "barbecue", language: "English", connection: "another food word from the age of exploration", available: true, slug: "barbecue" }
    ],
    meaningNow: "Anchovies have been hiding in plain sight for two thousand years. The Romans built an empire partially funded by fermented anchovy sauce. Modern cooks sneak them into dishes where no one expects them—because anchovy adds depth without announcing itself.\n\nThe word itself has been hiding too, its origins obscured by centuries of competing etymologies. A fitting anonymity for a fish that does its best work invisibly."
  },
  {
    slug: "goulash",
    word: "gulyás",
    romanization: "gulyás",
    language: "Hungarian",
    hook: "Hungary's national dish was originally cowboy food—and its name literally means 'herdsman.'",
    story: [
      "Gulyás in Hungarian means 'herdsman' or 'cowboy'—from gulya, meaning 'herd of cattle.' The dish that carries this name was originally the food of Hungarian cattle drovers who moved herds across the Great Plain (the Puszta). They would cook dried meat with onions in a heavy kettle called a bogrács, rehydrating the preserved food into a hearty stew.",
      "Paprika, now inseparable from goulash, didn't enter the picture until the 1800s. The pepper was introduced to Hungary by the Ottomans in the 1500s but was initially considered a poor man's spice. When it finally merged with the herdsman's stew, goulash became the dish the world now recognizes—red, rich, and warming.",
      "The word entered German as Gulasch in the 1800s, then spread to English and French. Each culture adapted the dish: Austrian goulash became thicker, American goulash added macaroni, and the original Hungarian version—a thin, paprika-red soup—was increasingly misunderstood as a thick stew.",
      "Hungary has never stopped correcting the rest of the world. Authentic gulyás is a soup, not a stew. The thick version foreigners call goulash is closer to what Hungarians call pörkölt. But the linguistic horse has bolted—goulash means thick paprika stew everywhere except Hungary."
    ],
    journey: [
      { location: "Great Hungarian Plain", period: "1500s", form: "gulyás", script: "gulyás", context: "Herdsman's trail food dried meat onion stew", color: "#8b2500", coordinates: [20.1, 47.2] },
      { location: "Budapest", period: "1800s", form: "gulyás", context: "Paprika added dish becomes national symbol", color: "#8b2500", coordinates: [19.0, 47.5] },
      { location: "Vienna", period: "1850s", form: "Gulasch", context: "Austrian adaptation thicker version", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "Berlin", period: "1880s", form: "Gulasch", context: "German adoption comfort food staple", color: "#4a5568", coordinates: [13.4, 52.5] },
      { location: "New York", period: "1900s", form: "goulash", context: "American version with macaroni immigrants adapt recipe", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hungarian", ipa: "/ˈɡujaːʃ/", text: "gulyás", lang: "hu" },
      { label: "English", ipa: "/ˈɡuː.lɑːʃ/", text: "goulash", lang: "en" }
    ],
    relatives: [
      { word: "paprika", language: "Hungarian", connection: "the spice that defines modern goulash—itself from Serbian/Turkish", available: true, slug: "paprika" },
      { word: "borsch", language: "Russian/Ukrainian", connection: "another Central/Eastern European soup that traveled globally", available: true, slug: "borsch" },
      { word: "curry", language: "English", connection: "another cuisine word that means different things in different countries", available: true, slug: "curry" }
    ],
    meaningNow: "Goulash is a word at war with itself—meaning one thing in Hungary and another everywhere else. The herdsmen who gave it their name wouldn't recognize most versions of the dish.\n\nBut that's what happens to words and recipes that travel. They get adapted, thickened, diluted, renamed. The original meaning becomes a trivia question. The herdsman becomes a global brand."
  },
  {
    slug: "mosquito",
    word: "mosquito",
    romanization: "mosquito",
    language: "Spanish/Portuguese",
    hook: "The deadliest animal on earth has a name that means 'little fly'—a diminutive for a creature that has killed more humans than all wars combined.",
    story: [
      "Mosquito is a Spanish and Portuguese diminutive of mosca, meaning 'fly,' from Latin musca. The -ito suffix makes it a 'little fly.' When Spanish and Portuguese explorers encountered the blood-sucking insects of the tropics, they reached for this casually dismissive diminutive—as if the creature were merely a smaller, more annoying version of a housefly.",
      "The understatement was catastrophic. Mosquitoes carry malaria, yellow fever, dengue, Zika, and a dozen other diseases that have shaped human history more profoundly than most wars. Malaria alone has killed an estimated half of all humans who ever lived. The 'little fly' is the deadliest animal in the history of the planet.",
      "The word entered English in the 1580s, borrowed directly from Spanish. English had its own word—gnat—but mosquito gradually displaced it for the tropical blood-feeding varieties. The Spanish word sounded more exotic, more dangerous, more appropriate for the tropics that were claiming European lives by the thousands.",
      "Today, mosquito is used worldwide and has entered dozens of languages. The diminutive suffix -ito, which makes the word sound harmless and small, has become one of the most darkly ironic endings in any language. Nothing about the mosquito is little—not its impact, not its body count, not its ability to resist every attempt at eradication."
    ],
    journey: [
      { location: "Rome", period: "~100 CE", form: "musca", script: "musca", context: "Latin fly", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Madrid", period: "1400s", form: "mosquito", script: "mosquito", context: "Spanish diminutive little fly", color: "#4a5568", coordinates: [-3.7, 40.4] },
      { location: "Caribbean", period: "1500s", form: "mosquito", context: "Explorers name tropical blood-feeders", color: "#8b5a2b", coordinates: [-66, 18] },
      { location: "London", period: "1580s", form: "mosquito", context: "English borrows Spanish word displacing gnat", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "mosquito", context: "Deadliest animal on earth kills 700000 yearly", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/mosˈki.to/", text: "mosquito", lang: "es" },
      { label: "English", ipa: "/məˈskiː.toʊ/", text: "mosquito", lang: "en" }
    ],
    relatives: [
      { word: "quarantine", language: "English", connection: "from Italian—disease control born from mosquito-borne plagues", available: true, slug: "quarantine" },
      { word: "malaria", language: "Italian", connection: "mala aria (bad air)—the disease mosquitoes carry, misnamed for centuries", available: false },
      { word: "typhus", language: "English", connection: "another insect-borne disease word from Greek", available: true, slug: "typhus" }
    ],
    meaningNow: "Calling a mosquito a 'little fly' is like calling an earthquake a 'little shake.' The diminutive contains one of humanity's greatest underestimations.\n\nBut there's something fitting about it. The mosquito's power lies precisely in being underestimated—small enough to ignore, quiet enough to miss, lethal enough to reshape civilizations. The name is part of the disguise."
  },
  {
    slug: "buccaneer",
    word: "boucanier",
    romanization: "boucanier",
    language: "French from Tupi",
    hook: "Pirates got their name from a barbecue grill—because before they plundered ships, they smoked meat on Caribbean beaches.",
    story: [
      "The Tupi people of Brazil used a wooden frame called a mocaém or boucan to smoke-dry meat over a slow fire. French settlers in the Caribbean adopted both the technique and the word, calling the smoking rack a boucan. Men who used this method to prepare meat—often hunters living wild on Hispaniola—were called boucaniers.",
      "These boucaniers were rough, independent men who hunted feral cattle and pigs on the island, smoking the meat to sell to passing ships. They lived outside colonial law, answering to no government. When Spanish authorities tried to drive them off Hispaniola by killing the feral herds, the boucaniers turned to piracy instead.",
      "The transition from meat-smoker to pirate happened in the 1630s-1650s. Boucaniers joined with other outlaws on the island of Tortuga and began raiding Spanish ships. English borrowed the word as buccaneer by the 1660s. Within a generation, the barbecue origin was forgotten—buccaneer meant pirate, nothing more.",
      "The golden age of buccaneering lasted barely fifty years, but the word outlived the profession by centuries. Today, buccaneer carries a romantic swashbuckling aura that the original meat-smokers would find bewildering. They were subsistence hunters turned desperate criminals, not the dashing adventurers of Hollywood imagination."
    ],
    journey: [
      { location: "Brazil", period: "pre-contact", form: "mocaém", context: "Tupi wooden smoking frame for meat", color: "#8b5a2b", coordinates: [-43.2, -22.9] },
      { location: "Hispaniola", period: "1620s", form: "boucan", context: "French hunters smoke meat on Caribbean beaches", color: "#8b5a2b", coordinates: [-72, 19] },
      { location: "Tortuga", period: "1640s", form: "boucanier", script: "boucanier", context: "Hunters turn pirates after Spanish crackdown", color: "#6b2d3d", coordinates: [-72.8, 20.1] },
      { location: "London", period: "1660s", form: "buccaneer", context: "English adopts for Caribbean pirates", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "buccaneer", context: "Romantic pirate swashbuckler connotation", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "French", ipa: "/bu.ka.nje/", text: "boucanier", lang: "fr" },
      { label: "English", ipa: "/ˌbʌk.əˈnɪɹ/", text: "buccaneer", lang: "en" }
    ],
    relatives: [
      { word: "barbecue", language: "English", connection: "from Taino—same Caribbean smoking tradition", available: true, slug: "barbecue" },
      { word: "canoe", language: "English", connection: "from Arawak/Carib—another Caribbean word that sailed to Europe", available: true, slug: "canoe" },
      { word: "hurricane", language: "English", connection: "from Taino—the Caribbean named its dangers for Europe", available: true, slug: "hurricane" }
    ],
    meaningNow: "Every pirate movie, every skull-and-crossbones flag, every sports team called the Buccaneers traces its name back to men smoking meat on a wooden rack.\n\nThe word's transformation mirrors the romanticization of piracy itself—from desperate, violent men to lovable rogues. The boucan is forgotten; the buckled swash remains."
  },
  {
    slug: "vendetta",
    word: "vendetta",
    romanization: "vendetta",
    language: "Italian",
    hook: "The word for a blood feud comes from Latin 'vengeance'—and in Corsica and Sicily, the practice it named could last for generations.",
    story: [
      "Vendetta is Italian for 'vengeance,' from Latin vindicta ('revenge, punishment'). In Italy—particularly in Corsica, Sardinia, and Sicily—the vendetta was not just a word but a social institution: a cycle of retaliatory killings between families that could span generations. A murder demanded a counter-murder, which demanded another, with no mechanism for resolution.",
      "The practice had its own code of honor. Vendettas followed rules about who could be targeted, how long you had to wait before retaliating, and what constituted a proportional response. Breaking these rules was considered more dishonorable than the killing itself. Violence was regulated, not prevented.",
      "Corsican vendettas were so notorious that they attracted the attention of French writers and administrators. Prosper Mérimée's novella Colomba (1840) dramatized the Corsican vendetta for French readers. The French government spent decades trying to suppress the practice, with limited success.",
      "English borrowed vendetta in the 1850s, and it quickly broadened from blood feuds to any prolonged, bitter campaign of revenge. A political vendetta, a personal vendetta, a corporate vendetta—the word now describes any sustained antagonism, even when no blood is involved."
    ],
    journey: [
      { location: "Rome", period: "~100 BCE", form: "vindicta", script: "vindicta", context: "Latin vengeance punishment legal retribution", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Corsica", period: "1400s", form: "vendetta", script: "vendetta", context: "Corsican blood feuds between families generational", color: "#6b2d3d", coordinates: [9.1, 42.2] },
      { location: "Sicily", period: "1500s", form: "vendetta", context: "Sicilian honor killings feuding clans", color: "#6b2d3d", coordinates: [14.0, 37.5] },
      { location: "Paris", period: "1840", form: "vendetta", context: "Mérimée's Colomba popularizes for French readers", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1850s", form: "vendetta", context: "English broadens to any prolonged revenge campaign", color: "#4a5568", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Italian", ipa: "/venˈdet.ta/", text: "vendetta", lang: "it" },
      { label: "English", ipa: "/vɛnˈdɛt.ə/", text: "vendetta", lang: "en" }
    ],
    relatives: [
      { word: "assassin", language: "Arabic", connection: "another word for targeted killing from a specific cultural context", available: true, slug: "assassin" },
      { word: "embargo", language: "Spanish", connection: "from embargar—another word for economic/political punishment", available: true, slug: "embargo" },
      { word: "casino", language: "Italian", connection: "another Italian word that traveled with its cultural baggage", available: true, slug: "casino" }
    ],
    meaningNow: "Vendetta has been domesticated. We use it for office politics, sports rivalries, internet arguments. But the original vendettas left villages depopulated, families destroyed, entire communities locked in cycles of violence that no one alive could remember starting.\n\nThe word carries that weight even in its mild modern usage. A vendetta is never casual—it implies persistence, obsession, the refusal to let go. The Italian families who practiced it would recognize the emotional logic, if not the stakes."
  },
  {
    slug: "saffron",
    word: "za'farān",
    romanization: "za'farān",
    language: "Arabic",
    hook: "The world's most expensive spice—worth more than gold by weight—takes its name from Arabic for 'yellow thread.'",
    story: [
      "Saffron comes from Arabic za'farān (زعفران), likely meaning 'yellow' or related to the yellow color the spice produces. The spice itself is the dried stigma of Crocus sativus—each flower produces only three tiny red threads, and it takes roughly 75,000 flowers to make a single pound of saffron. This staggering labor is why saffron has been the world's most expensive spice for three millennia.",
      "The crocus probably originated in Bronze Age Crete or Persia. A Minoan fresco from 1600 BCE shows saffron gatherers at work—making it one of the oldest continuously cultivated crops. The Persians used it for dye, medicine, perfume, and offerings to the gods. Alexander the Great is said to have bathed in saffron-infused water.",
      "Arab traders spread both the spice and the word across the Mediterranean. Za'farān entered Medieval Latin as safranum, Old French as safran, and English as saffron by the 1200s. The word arrived in England before the spice was grown there—saffron cultivation began in Essex in the 1300s, giving the town of Saffron Walden its name.",
      "Today, Iran produces roughly 90% of the world's saffron. The price—$5,000 to $10,000 per pound—makes it a target for adulteration. Turmeric, safflower, and even dyed corn silk are sold as 'saffron' to the unwary. The most expensive spice is also the most frequently faked."
    ],
    journey: [
      { location: "Knossos", period: "~1600 BCE", form: "unknown", context: "Minoan frescoes show saffron gatherers", color: "#d4a574", coordinates: [25.2, 35.3] },
      { location: "Persepolis", period: "~500 BCE", form: "unknown", context: "Persian cultivation dye medicine ritual", color: "#d4a574", coordinates: [52.9, 29.9] },
      { location: "Baghdad", period: "800s", form: "za'farān", script: "زعفران", context: "Arabic name and trade route distribution", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Saffron Walden", period: "1300s", form: "saffron", context: "English town named for crocus cultivation", color: "#4a5568", coordinates: [0.2, 52.0] },
      { location: "Mashhad", period: "present", form: "saffron", context: "Iran produces 90% of world supply", coordinates: [59.6, 36.3] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/zaʕ.fa.ˈraːn/", text: "زعفران", lang: "ar" },
      { label: "English", ipa: "/ˈsæf.ɹən/", text: "saffron", lang: "en" }
    ],
    relatives: [
      { word: "cinnamon", language: "English", connection: "another ancient spice with Semitic naming roots", available: true, slug: "cinnamon" },
      { word: "sugar", language: "English", connection: "from Sanskrit via Arabic—the same trade routes", available: true, slug: "sugar" },
      { word: "orange", language: "English", connection: "from Arabic—another color-associated food word", available: true, slug: "orange" }
    ],
    meaningNow: "Saffron is the embodiment of concentrated value—75,000 flowers for one pound, each stigma picked by hand. No machine has ever replicated the harvest efficiently.\n\nThe Arabic name carries the color yellow in its bones, and indeed saffron's legacy is as much about color as flavor. Buddhist robes, Indian wedding garments, Spanish paella—saffron dyes them all. A single thread, dissolved in water, turns everything it touches golden."
  },
  {
    slug: "maelstrom",
    word: "malström",
    romanization: "malström",
    language: "Dutch/Norse",
    hook: "A real whirlpool off the coast of Norway became a word for chaos itself—thanks to a mapmaker who put it on the map.",
    story: [
      "The original Maelstrom is a real tidal current in the Lofoten Islands off northern Norway—the Moskstraumen. The name combines Old Norse mala ('to grind') with straumr ('stream'). The grinding stream. Early Norse sailors feared it as a place where the sea literally ground ships to pieces.",
      "The word entered wider European awareness through Gerardus Mercator's 1595 atlas, which labeled the Norwegian whirlpool as a maelstrom and depicted it as an enormous funnel capable of swallowing ships. Mercator's dramatic illustration captured imaginations far beyond the actual danger of the current.",
      "Edgar Allan Poe cemented the word's literary power with his 1841 story 'A Descent into the Maelström,' which described a fisherman surviving the Norwegian whirlpool. The story made maelstrom a household word in English, synonymous with any powerful vortex—physical or metaphorical.",
      "Today, maelstrom is used almost exclusively in its metaphorical sense—a maelstrom of emotions, a political maelstrom, a maelstrom of activity. The actual Norwegian whirlpool is a popular tourist attraction, more scenic than deadly. The word has become far more powerful than the phenomenon that inspired it."
    ],
    journey: [
      { location: "Lofoten Islands", period: "~800 CE", form: "malstraumr", context: "Old Norse grinding stream feared tidal current", color: "#4a5568", coordinates: [14.5, 68.1] },
      { location: "Amsterdam", period: "1595", form: "maelstrom", script: "maelstrom", context: "Mercator maps whirlpool in famous atlas", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "Philadelphia", period: "1841", form: "maelstrom", context: "Poe's story makes word literary sensation", color: "#4a5568", coordinates: [-75.2, 39.9] },
      { location: "Global", period: "present", form: "maelstrom", context: "Metaphor for chaos vortex turmoil", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Norwegian", ipa: "/ˈmɑːlˌstrøm/", text: "malstrøm", lang: "no" },
      { label: "English", ipa: "/ˈmeɪl.stɹɒm/", text: "maelstrom", lang: "en" }
    ],
    relatives: [
      { word: "fjord", language: "Norwegian", connection: "another Norse geographic term that went global", available: true, slug: "fjord" },
      { word: "kraken", language: "Norwegian", connection: "another Norwegian sea-danger word amplified by literature", available: true, slug: "kraken" },
      { word: "tsunami", language: "Japanese", connection: "another sea-phenomenon word that became metaphor", available: true, slug: "tsunami" }
    ],
    meaningNow: "The real Moskstraumen is a tidal current that would barely tip a modern boat. But the word it spawned can describe the collapse of governments, the chaos of war, the overwhelming swirl of modern information.\n\nMaelstrom is a word that outgrew its origin so completely that the origin feels inadequate. A Norwegian whirlpool became a universal symbol for forces beyond human control."
  },
  {
    slug: "brogue",
    word: "bróg",
    romanization: "bróg",
    language: "Irish Gaelic",
    hook: "The word for a type of shoe became the word for an Irish accent—because the English thought people who wore crude shoes must speak crudely too.",
    story: [
      "The Irish Gaelic word bróg means 'shoe'—from Old Norse brók ('leg covering'). In Ireland and Scotland, brogues were sturdy leather shoes, often with perforations to allow water to drain when crossing bogs. They were practical footwear for wet terrain, not fashion statements.",
      "English colonists in Ireland used brogue to describe these shoes with a sneer—they were crude, foreign, the footwear of the uncivilized. And then the sneering extended: by the 1700s, brogue also meant the way Irish people spoke English. The shoe became a metonym for the speaker.",
      "The logic was brutally simple: if your shoes are rough, your speech must be rough too. The same word that dismissed Irish footwear was used to dismiss Irish voices. This double meaning—shoe and accent—survives in English today, though the contempt has largely faded from both.",
      "Modern brogue shoes are now a fashion staple—the perforations that once drained bog water are purely decorative on expensive Oxford brogues. And an Irish brogue accent is more often considered charming than crude. Both meanings have been rehabilitated, but the word remembers the prejudice that linked them."
    ],
    journey: [
      { location: "Dublin", period: "medieval", form: "bróg", script: "bróg", context: "Irish Gaelic shoe from Norse leg covering", color: "#4a5568", coordinates: [-6.3, 53.3] },
      { location: "Scottish Highlands", period: "1500s", form: "brog", context: "Scottish Gaelic same word perforated bog shoes", color: "#4a5568", coordinates: [-5.0, 57.0] },
      { location: "London", period: "1700s", form: "brogue", context: "English contempt for Irish shoes then Irish accent", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Northampton", period: "1900s", form: "brogue", context: "English shoemaking brogue becomes fashion classic", color: "#4a5568", coordinates: [-0.9, 52.2] },
      { location: "Global", period: "present", form: "brogue", context: "Fashion shoe style and charming accent", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Irish", ipa: "/bɾˠoːɡ/", text: "bróg", lang: "ga" },
      { label: "English", ipa: "/bɹoʊɡ/", text: "brogue", lang: "en" }
    ],
    relatives: [
      { word: "whiskey", language: "Irish/Scottish Gaelic", connection: "from uisce beatha—another Gaelic word that English adopted on its own terms", available: true, slug: "whiskey" },
      { word: "slogan", language: "Scottish Gaelic", connection: "from sluagh-ghairm—another Gaelic word transformed by English", available: true, slug: "slogan" },
      { word: "banshee", language: "Irish", connection: "from bean sí—another Irish word that carried its culture into English", available: true, slug: "banshee" }
    ],
    meaningNow: "Brogue is a word that carries the archaeology of colonial prejudice. The English linked shoes to speech, appearance to intellect, poverty to inferiority—and encoded all of it in a single borrowed word.\n\nThe rehabilitation of both meanings is incomplete justice. Brogues are now expensive. Irish accents are now charming. But the word still holds the memory of a time when both were used to diminish."
  }
];
