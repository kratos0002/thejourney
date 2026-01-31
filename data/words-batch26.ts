import type { Word } from "./word-types";

export const batch26: Word[] = [
  {
    slug: "hazard",
    word: "الزهر",
    romanization: "az-zahr",
    language: "Arabic",
    hook: "A dice game played by Crusaders in an Arab castle gave English its word for danger.",
    story: [
      "The Arabic word az-zahr (الزهر) meant 'the die' or 'the dice'—and by extension, a game of dice. During the Crusades, European soldiers encountered dice games in the Levant and became addicted to them. The word entered Old French as hasard, meaning a dice game—pure chance, no skill involved.",
      "William of Tyre, the 12th-century chronicler, claimed the word came from a castle called Hazart where Crusaders gambled during the siege of a fortress. Whether this is true or folk etymology, the association between the Arabic word and gambling was fixed by the 1200s.",
      "From gambling, the meaning broadened. Anything involving chance was a hazard. Anything involving risk was a hazard. By the 1500s, the word had darkened from 'game of chance' to 'danger' and 'peril.' The playfulness of dice was forgotten; only the risk remained.",
      "English now uses hazard almost exclusively to mean danger—hazardous materials, occupational hazards, hazard warnings. The dice game that gave the word its start is extinct. But every time we identify a hazard, we're naming a danger with a word that originally meant 'roll the dice and see what happens.'"
    ],
    journey: [
      { location: "Arabia", period: "~800 CE", form: "az-zahr", script: "الزهر", context: "Arabic dice game of chance", color: "#4a3b6b", coordinates: [44, 21] },
      { location: "Levant", period: "1100s", form: "hasard", context: "Crusaders learn dice games from Arabs", color: "#4a3b6b", coordinates: [35.2, 31.8] },
      { location: "Paris", period: "1200s", form: "hasard", script: "hasard", context: "Old French gambling game then chance", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1300s", form: "hazard", script: "hazard", context: "English game of chance then risk then danger", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "hazard", context: "Danger risk safety warnings", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/az.zahr/", text: "الزهر", lang: "ar" },
      { label: "English", ipa: "/ˈhæz.əɹd/", text: "hazard", lang: "en" }
    ],
    relatives: [
      { word: "chance", language: "English", connection: "from Latin cadere to fall—dice falling", available: false },
      { word: "risk", language: "English", connection: "from Italian risico—possibly Arabic as well", available: false },
      { word: "checkmate", language: "English", connection: "another game word from Arabic/Persian", available: true, slug: "checkmate" }
    ],
    meaningNow: "Every safety sign that says HAZARD is unknowingly referencing a medieval dice game. The word traveled from playful gambling to mortal danger in five centuries.\n\nBut the original meaning lingers in the concept: a hazard is still fundamentally about chance—the unknown outcome, the roll you can't control. Whether it's a dice game or a chemical spill, hazard names the moment when outcome leaves your hands."
  },
  {
    slug: "denim",
    word: "de Nîmes",
    romanization: "de Nîmes",
    language: "French",
    hook: "The world's most popular fabric is named after a French city most people can't find on a map.",
    story: [
      "Denim is a contraction of serge de Nîmes—a sturdy twill fabric produced in the southern French city of Nîmes. The 'de Nîmes' part—'from Nîmes'—was shortened to denim in English by the late 1600s. The fabric was tough, durable, and cheap—perfect for workwear.",
      "Meanwhile, in Genoa (Gênes in French), Italian sailors wore trousers made from a similar sturdy fabric. The French called this fabric bleu de Gênes—'blue of Genoa.' This became the English word jeans. So denim comes from Nîmes and jeans come from Genoa—two French city names stitched into your wardrobe.",
      "In 1853, Levi Strauss opened a dry goods business in San Francisco during the Gold Rush. In 1873, he and tailor Jacob Davis patented riveted denim work pants—the first blue jeans. The French fabric became American workwear became global fashion.",
      "Denim jeans are now the most widely worn garment on earth. Every culture has adopted them. They've been banned by authoritarian regimes (the Soviet Union restricted them as symbols of Western decadence) and embraced by rebels, workers, and fashion designers alike. A French city's fabric became democracy's uniform."
    ],
    journey: [
      { location: "Nîmes", period: "1600s", form: "serge de Nîmes", context: "French city produces sturdy twill fabric", color: "#4a5568", coordinates: [4.4, 43.8] },
      { location: "Genoa", period: "1600s", form: "bleu de Gênes", context: "Italian sailors wear similar fabric jeans origin", color: "#5c5a4a", coordinates: [8.9, 44.4] },
      { location: "London", period: "1690s", form: "denim", script: "denim", context: "English shortens de Nîmes to denim", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "San Francisco", period: "1873", form: "denim", context: "Levi Strauss patents riveted denim jeans", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "present", form: "denim", context: "Most worn fabric on earth blue jeans universal", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "French", ipa: "/də nim/", text: "de Nîmes", lang: "fr" },
      { label: "English", ipa: "/ˈdɛn.ɪm/", text: "denim", lang: "en" }
    ],
    relatives: [
      { word: "jeans", language: "English", connection: "from French Gênes (Genoa)—another city-named fabric", available: false },
      { word: "khaki", language: "English", connection: "another workwear fabric word from a foreign language", available: true, slug: "khaki" },
      { word: "flannel", language: "English", connection: "from Welsh—another regional fabric that went global", available: true, slug: "flannel" }
    ],
    meaningNow: "Denim jeans may be the single most democratic garment ever made. Presidents wear them. Farmers wear them. Billionaires and minimum-wage workers wear the same basic product.\n\nThe word carries two French cities in its DNA—Nîmes in the fabric, Genoa in the cut—but neither city gets credit. Denim is American now, the way pizza is American and tacos are American: adopted so completely that the origin story feels like trivia."
  },
  {
    slug: "vanilla",
    word: "vainilla",
    romanization: "vainilla",
    language: "Spanish from Nahuatl",
    hook: "The world's most popular flavor is named after a body part—and it was so hard to grow that it stayed a Mexican monopoly for three centuries.",
    story: [
      "The Totonac people of eastern Mexico were the first to cultivate vanilla, long before the Aztecs conquered them. The Aztecs called the plant tlīlxōchitl ('black flower') and used it to flavor their chocolate drinks. When the Spanish arrived, they renamed the pod vainilla—a diminutive of vaina, meaning 'sheath' or 'pod,' from Latin vagina (sheath). The vanilla pod was a 'little sheath.'",
      "Hernán Cortés brought vanilla to Europe in the 1520s along with chocolate. Europeans loved the flavor but couldn't grow the plant outside Mexico. For three hundred years, Mexico maintained a natural monopoly—vanilla orchids required a specific local bee (the Melipona) for pollination, and without it, the plants produced no pods.",
      "In 1841, a twelve-year-old enslaved boy on the French island of Réunion named Edmond Albius discovered how to hand-pollinate vanilla orchids using a thin stick. His technique broke the Mexican monopoly overnight and is still used today. The most important agricultural innovation of the 19th century was made by a child in bondage.",
      "Vanilla is now the world's most popular flavor and second-most expensive spice after saffron. The word 'vanilla' has also come to mean 'plain' or 'boring'—an extraordinary irony for a flavor with one of the most dramatic histories in agriculture."
    ],
    journey: [
      { location: "Veracruz", period: "ancient", form: "tlīlxōchitl", context: "Totonac/Aztec black flower cacao flavoring", color: "#8b5a2b", coordinates: [-96.9, 19.2] },
      { location: "Seville", period: "1520s", form: "vainilla", script: "vainilla", context: "Spanish name little sheath for the pod", color: "#5c5a4a", coordinates: [-6, 37.4] },
      { location: "Réunion", period: "1841", form: "vanille", context: "Edmond Albius discovers hand-pollination", color: "#8b5a2b", coordinates: [55.5, -21.1] },
      { location: "Madagascar", period: "1900s", form: "vanilla", context: "World's largest producer hand-pollination method", color: "#8b5a2b", coordinates: [46.9, -18.9] },
      { location: "Global", period: "present", form: "vanilla", context: "Most popular flavor slang for plain or ordinary", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/bai.ˈni.ʎa/", text: "vainilla", lang: "es" },
      { label: "English", ipa: "/vəˈnɪl.ə/", text: "vanilla", lang: "en" }
    ],
    relatives: [
      { word: "chocolate", language: "English", connection: "from Nahuatl—vanilla's original pairing", available: true, slug: "chocolate" },
      { word: "avocado", language: "English", connection: "from Nahuatl—another Mexican plant word", available: true, slug: "avocado" },
      { word: "tomato", language: "English", connection: "from Nahuatl—same Mesoamerican food vocabulary", available: true, slug: "tomato" }
    ],
    meaningNow: "Calling something 'vanilla' now means calling it boring—the default, the uninteresting choice. This is perhaps the most unjust slander in the English language. Real vanilla is exotic, expensive, and the product of an orchid that must be pollinated by hand, one flower at a time.\n\nThe word carries the memory of Aztec emperors, Spanish conquistadors, a twelve-year-old enslaved genius, and a three-century monopoly. Nothing about vanilla is plain."
  },
  {
    slug: "influenza",
    word: "influenza",
    romanization: "influenza",
    language: "Italian",
    hook: "Italians blamed the flu on the influence of the stars—because what else could cause a whole city to fall sick at once?",
    story: [
      "In Italian, influenza means 'influence'—from Latin influere, 'to flow in.' When a mysterious illness swept through Italian cities in the Renaissance, people attributed it to the influenza of the stars—the malign astrological influence that caused epidemics. The stars flowed their sickness down upon you.",
      "The concept made sense in a pre-germ-theory world. Epidemics appeared suddenly, struck everyone at once, and disappeared just as quickly. What other force could affect an entire population simultaneously except the alignment of celestial bodies? Individual illness had individual causes, but mass illness required a cosmic explanation.",
      "English borrowed influenza in 1743 during a major European epidemic. The Italian word was adopted wholesale, complete with its astrological superstition. English speakers shortened it to flu by the 1830s—four syllables reduced to one, and all the celestial poetry evaporated.",
      "The 1918 influenza pandemic killed an estimated 50-100 million people—more than World War I. The word that blamed the stars for illness was now naming the deadliest pandemic in modern history. We know now that influenza is caused by orthomyxoviruses, not stars. But the word remembers a time when the only explanation for mass suffering was that the heavens were against you."
    ],
    journey: [
      { location: "Rome", period: "~100 CE", form: "influere", script: "influere", context: "Latin to flow in celestial influence", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Florence", period: "1500s", form: "influenza", script: "influenza", context: "Italian stellar influence causing epidemics", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "London", period: "1743", form: "influenza", script: "influenza", context: "English adopts during European epidemic", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1918", form: "flu", context: "Pandemic kills 50-100 million worldwide", color: "#6b2d3d", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "flu", context: "Seasonal illness vaccine campaigns", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Italian", ipa: "/in.flu.ˈɛn.tsa/", text: "influenza", lang: "it" },
      { label: "English", ipa: "/ˌɪn.flu.ˈɛn.zə/", text: "influenza", lang: "en" }
    ],
    relatives: [
      { word: "influence", language: "English", connection: "same Latin root—celestial flowing into earthly affairs", available: false },
      { word: "typhus", language: "English", connection: "from Greek—another disease named for its symptoms not its cause", available: true, slug: "typhus" },
      { word: "quarantine", language: "English", connection: "from Italian—another Italian epidemic word", available: true, slug: "quarantine" }
    ],
    meaningNow: "We get flu shots, track flu season, and worry about flu pandemics—using a word that blames the stars for making us sick. The astrological origin is invisible now, but it persists in the word 'influence' itself: to influence someone is still, etymologically, to flow celestial power into them.\n\nThe flu is the most common serious illness most people experience, and its name is a medieval superstition. Language preserves the explanations we've outgrown."
  },
  {
    slug: "graffiti",
    word: "graffito",
    romanization: "graffito",
    language: "Italian from Greek",
    hook: "Romans scratched insults on Pompeii's walls. Now it's either vandalism or art, depending on who's holding the spray can.",
    story: [
      "The Italian word graffito (plural graffiti) comes from graffiare, 'to scratch,' ultimately from Greek graphein, 'to write.' In archaeology, graffiti refers to inscriptions scratched or painted on walls—and Pompeii preserved thousands of them under volcanic ash: love declarations, political slogans, crude jokes, and advertisements.",
      "The Romans loved wall writing. Pompeii's graffiti includes everything from 'Successus was here' to elaborate insults to remarkably explicit sexual boasts. These weren't considered vandalism—they were a normal part of urban life, the social media of the ancient world.",
      "Modern graffiti emerged in 1960s-1970s Philadelphia and New York, when taggers began writing their names on subway cars and building walls. TAKI 183, a Greek-American messenger from Manhattan, became famous for tagging his name across the city. The word graffiti—already in English from archaeological use—was applied to this new phenomenon.",
      "The debate over graffiti-as-art-or-vandalism continues. Banksy sells for millions while anonymous taggers get arrested. The word itself takes no side—graffiti just means 'scratched writings.' The Romans who scrawled on Pompeii's walls would recognize the impulse immediately: the human need to mark public space with private identity."
    ],
    journey: [
      { location: "Athens", period: "~500 BCE", form: "graphein", script: "γράφειν", context: "Greek to write to scratch to inscribe", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Pompeii", period: "~79 CE", form: "graffito", context: "Roman wall inscriptions preserved by Vesuvius", color: "#5c5a4a", coordinates: [14.5, 40.8] },
      { location: "Italy", period: "1800s", form: "graffiti", script: "graffiti", context: "Archaeological term for ancient wall writings", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "New York", period: "1970s", form: "graffiti", context: "Subway tagging culture TAKI 183", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "graffiti", context: "Street art vandalism Banksy urban culture", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Italian", ipa: "/ɡraf.ˈfi.to/", text: "graffito", lang: "it" },
      { label: "English", ipa: "/ɡɹəˈfiː.ti/", text: "graffiti", lang: "en" }
    ],
    relatives: [
      { word: "graph", language: "English", connection: "from same Greek root—to write or draw", available: false },
      { word: "graffiti", language: "Italian", connection: "technically the plural—graffito is singular", available: false },
      { word: "emoji", language: "English", connection: "from Japanese—another visual communication system", available: true, slug: "emoji" }
    ],
    meaningNow: "Graffiti is the only art form where the same act can be a felony or a museum piece depending on permission. Banksy's work sells for millions; an anonymous tagger's identical technique gets a fine.\n\nThe word doesn't care about this distinction. From Pompeii to Brooklyn, graffiti just names the human urge to write on walls—to say 'I was here' in a space that belongs to everyone and no one. The Romans did it. We do it. The medium changed from scratched plaster to spray paint, but the message hasn't."
  },
  {
    slug: "banana",
    word: "بَنَان",
    romanization: "banān",
    language: "Arabic (possibly from West African Wolof)",
    hook: "A fruit from Southeast Asia got its name in West Africa, passed through Arabic and Portuguese, and ended up everywhere.",
    story: [
      "The banana originated in Southeast Asia—Papua New Guinea and the Philippines—and was cultivated there for at least 7,000 years. But the word banana didn't come from Asia. It likely entered Arabic as banān (بَنَان, meaning 'finger' or 'fingertip') or was borrowed from a West African language, possibly Wolof, when Arab traders encountered the fruit in Africa.",
      "Portuguese and Spanish traders carried both the fruit and the word from West Africa to the Americas in the 1500s. The banana plant thrived in the Caribbean and Central America, and the word traveled with it. English borrowed banana from Spanish or Portuguese by the 1590s.",
      "In the late 1800s, the banana transformed from an exotic curiosity to a cheap everyday fruit, thanks to refrigerated shipping and the massive plantations of the United Fruit Company in Central America. The company's political power in the region gave rise to the term 'banana republic'—countries whose economies and governments were controlled by fruit corporations.",
      "The banana's linguistic journey mirrors its physical one: from Papua New Guinea to India to Africa to the Americas to every supermarket on earth. The fruit crossed every ocean. The word crossed every language. And somewhere in the middle, a West African name stuck to an Asian fruit and traveled the world."
    ],
    journey: [
      { location: "Papua New Guinea", period: "~5000 BCE", form: "unknown", context: "Original domestication Southeast Asian origin", color: "#2d4a3b", coordinates: [147, -6] },
      { location: "India", period: "~2000 BCE", form: "unknown", context: "Banana cultivation spreads westward", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "West Africa", period: "~1000 CE", form: "banān/banana", context: "Arabic or Wolof name attached to the fruit", color: "#8b5a2b", coordinates: [-15, 14] },
      { location: "Canary Islands", period: "1400s", form: "banana", script: "banana", context: "Portuguese bring word and plant to Atlantic islands", color: "#8b5a2b", coordinates: [-15.4, 28.1] },
      { location: "Caribbean", period: "1500s", form: "banana", context: "Spanish and Portuguese establish New World plantations", color: "#8b5a2b", coordinates: [-76, 18] },
      { location: "Global", period: "present", form: "banana", context: "Most consumed fruit worldwide banana republics", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/ba.naːn/", text: "بَنَان", lang: "ar" },
      { label: "Spanish", ipa: "/ba.ˈna.na/", text: "banana", lang: "es" },
      { label: "English", ipa: "/bəˈnɑː.nə/", text: "banana", lang: "en" }
    ],
    relatives: [
      { word: "plantain", language: "English", connection: "from Spanish plátano—cooking banana different word same family", available: false },
      { word: "mango", language: "English", connection: "from Tamil—another tropical fruit word from colonial trade", available: true, slug: "mango" },
      { word: "papaya", language: "English", connection: "from Arawak—another tropical fruit name from the Caribbean", available: true, slug: "papaya" }
    ],
    meaningNow: "Bananas are now the world's most popular fruit—over 100 billion eaten annually. They're so cheap and ubiquitous that 'banana' has become slang for crazy ('going bananas') and for easy tasks ('that's bananas').\n\nBut the banana industry is in crisis. The Cavendish variety—virtually the only banana sold commercially—faces extinction from a fungal pandemic. The fruit that seems eternal may be about to disappear from our shelves, just as the Gros Michel variety did in the 1950s. The word will survive the fruit."
  },
  {
    slug: "waltz",
    word: "Walzer",
    romanization: "Walzer",
    language: "German",
    hook: "A peasant dance so scandalous that it was banned from ballrooms—partners held each other close, and Europe was shocked.",
    story: [
      "In German, walzen means 'to revolve' or 'to roll.' The Walzer was a folk dance from Bavaria and Austria where couples turned in close embrace—bodies touching, spinning together. Among peasants, this was normal. When the dance reached aristocratic ballrooms in the late 1700s, it caused a scandal.",
      "The waltz was the first popular dance where partners held each other in a closed position—face to face, arm around waist, bodies close. Previous court dances (the minuet, the gavotte) kept partners at arm's length. The waltz was physically intimate in a way that terrified the establishment.",
      "Critics called it immoral, indecent, and corrupting. A 1797 German pamphlet titled Proof That Waltzing Is the Main Source of the Weakness of the Body and Mind of Our Generation captures the hysteria. An English observer in 1816 called it 'a dance that produces the most voluptuous sensations.' Lord Byron wrote satirical verses about it.",
      "Within a generation, the waltz conquered every ballroom in Europe. Strauss's Blue Danube (1867) made it the defining sound of Viennese culture. The scandalous peasant dance became the most elegant music in the world. English borrowed the word directly from German, and it hasn't changed since."
    ],
    journey: [
      { location: "Bavaria", period: "1600s", form: "Walzer", script: "Walzer", context: "German peasant folk dance couples revolving", color: "#4a5568", coordinates: [11.6, 48.1] },
      { location: "Vienna", period: "1780s", form: "Walzer", context: "Reaches aristocratic ballrooms causes scandal", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "London", period: "1812", form: "waltz", script: "waltz", context: "English adoption Lord Byron satirizes it", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Vienna", period: "1867", form: "Walzer", context: "Strauss Blue Danube defines Viennese culture", color: "#4a5568", coordinates: [16.4, 48.2] },
      { location: "Global", period: "present", form: "waltz", context: "Classic dance form wedding first dance idiom", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "German", ipa: "/ˈval.t͡sɐ/", text: "Walzer", lang: "de" },
      { label: "English", ipa: "/wɔːlts/", text: "waltz", lang: "en" }
    ],
    relatives: [
      { word: "polka", language: "English", connection: "from Czech—another Central European dance that went global", available: true, slug: "polka" },
      { word: "tango", language: "English", connection: "from Argentine Spanish—another scandalous dance that was tamed", available: false },
      { word: "wanderlust", language: "English", connection: "from German—another German cultural export", available: true, slug: "wanderlust" }
    ],
    meaningNow: "To 'waltz in' now means to enter casually and confidently—the opposite of the dance's scandalous origins. The word has lost all its danger.\n\nBut put on the Blue Danube and watch two people waltz, and you can still feel what shocked 18th-century Europe: two bodies moving as one, turning together, trusting each other with balance and momentum. The waltz was never really about sex. It was about surrender—letting someone else guide you while the room spins."
  },
  {
    slug: "casino",
    word: "casino",
    romanization: "casino",
    language: "Italian",
    hook: "A 'little house' for summer pleasure became the world's word for organized gambling.",
    story: [
      "In Italian, casino is the diminutive of casa (house)—literally a 'little house.' In Renaissance Italy, casinos were small country villas or summer houses where the aristocracy gathered for socializing, dancing, music, and—among other pleasures—gambling. The casino was not primarily a gambling house; it was a pleasure house where gambling happened to occur.",
      "Venice's Ridotto, established in 1638, was one of the first government-sanctioned gambling houses in Europe, though it wasn't called a casino at the time. The word casino was applied to such establishments gradually, as the gambling aspect overshadowed the socializing.",
      "The most famous casino in the world—Monte Carlo's Casino de Monte-Carlo—opened in 1863. The Principality of Monaco, nearly bankrupt, built it as a revenue scheme. It worked. The casino saved Monaco from financial ruin and established the template for the modern gambling palace: opulent, exclusive, designed to separate the wealthy from their money in beautiful surroundings.",
      "Today, casino means only one thing in most of the world: a place to gamble. The little country house is gone. The music and socializing are secondary. Las Vegas, Macau, and online platforms have industrialized the concept. But in Italian, casino also means 'mess' or 'chaos'—which is perhaps the more honest description of what happens inside."
    ],
    journey: [
      { location: "Italy", period: "1500s", form: "casino", script: "casino", context: "Italian little house summer villa pleasure pavilion", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Venice", period: "1638", form: "casino", context: "Ridotto first government gambling house", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Monte Carlo", period: "1863", form: "casino", context: "Casino de Monte-Carlo saves Monaco from bankruptcy", color: "#4a5568", coordinates: [7.4, 43.7] },
      { location: "Las Vegas", period: "1940s", form: "casino", context: "American gambling industry industrializes the concept", color: "#4a5568", coordinates: [-115.2, 36.2] },
      { location: "Global", period: "present", form: "casino", context: "Gambling establishments online gaming Macau", coordinates: [113.5, 22.2] }
    ],
    sounds: [
      { label: "Italian", ipa: "/ka.ˈsi.no/", text: "casino", lang: "it" },
      { label: "English", ipa: "/kəˈsiː.noʊ/", text: "casino", lang: "en" }
    ],
    relatives: [
      { word: "casa", language: "Italian/Spanish", connection: "house—the root word casino diminishes", available: false },
      { word: "hazard", language: "English", connection: "from Arabic—another gambling word that became about danger", available: true, slug: "hazard" },
      { word: "villa", language: "English", connection: "from Latin—another Italian house word in English", available: false }
    ],
    meaningNow: "Casino is one of the few Italian words that kept its Italian pronunciation in English—most people say it correctly without knowing it's Italian. The word has been so thoroughly adopted that it feels native.\n\nIn Italian, calling a situation un casino means it's a total mess. This secondary meaning captures something the glamorous English definition doesn't: that a casino is, underneath the chandeliers and free drinks, fundamentally a place of chaos—where money, luck, and human weakness collide."
  },
  {
    slug: "igloo",
    word: "ᐃᒡᓗ",
    romanization: "iglu",
    language: "Inuktitut",
    hook: "The Inuit word for 'house' was narrowed by English into 'snow dome'—erasing a broader architecture.",
    story: [
      "In Inuktitut, iglu (ᐃᒡᓗ) simply means 'house' or 'dwelling'—any house, made of any material. An iglu can be a sod house, a tent, a wooden cabin, or a building made of snow blocks. The word describes function (shelter), not material (snow).",
      "When European explorers encountered Inuit peoples in the Arctic, they were fascinated by the snow houses—dome structures made from blocks of compacted snow, with remarkable insulating properties. They borrowed the word igloo but applied it only to the snow version, ignoring its broader meaning.",
      "This narrowing is a common pattern in colonial linguistics: borrowing a word while stripping it of its full meaning. The Inuit built many types of homes suited to different seasons and conditions. The snow house was just one—typically a temporary winter hunting shelter, not a permanent residence. But igloo in English became synonymous with the snow dome exclusively.",
      "The engineering of a snow igloo is remarkable: the dome shape distributes stress evenly, the snow blocks trap insulating air, and body heat inside raises the temperature to above freezing even when it's -40° outside. The Inuit solved an engineering problem that would challenge modern architects, using only the material at hand."
    ],
    journey: [
      { location: "Canadian Arctic", period: "ancient", form: "iglu", script: "ᐃᒡᓗ", context: "Inuktitut any dwelling house shelter", color: "#2d4a3b", coordinates: [-85, 65] },
      { location: "Arctic", period: "1600s", form: "igloo", context: "European explorers encounter and borrow the word", color: "#2d4a3b", coordinates: [-70, 72] },
      { location: "London", period: "1662", form: "igloo", script: "igloo", context: "First English written record narrowed to snow house", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "igloo", context: "Known worldwide as snow dome shelter symbol of Arctic", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Inuktitut", ipa: "/ˈiɡ.lu/", text: "ᐃᒡᓗ", lang: "iu" },
      { label: "English", ipa: "/ˈɪɡ.luː/", text: "igloo", lang: "en" }
    ],
    relatives: [
      { word: "kayak", language: "English", connection: "from Inuktitut qajaq—another Inuit word for a specific technology", available: false },
      { word: "anorak", language: "English", connection: "from Greenlandic Inuit—another Arctic clothing word", available: false },
      { word: "bungalow", language: "English", connection: "from Bengali—another indigenous architecture word simplified in English", available: true, slug: "bungalow" }
    ],
    meaningNow: "The igloo has become a cultural symbol—appearing on maps, in children's books, and as emoji (🏠)—usually depicting the snow dome that represents only one type of Inuit dwelling.\n\nBut the original word is broader and more dignified: iglu means home. Not 'primitive snow shelter,' not 'exotic Arctic structure,' but simply the place where you live. English narrowed the word; Inuktitut kept it whole."
  },
  {
    slug: "curry",
    word: "கறி",
    romanization: "kaṟi",
    language: "Tamil",
    hook: "A Tamil word for sauce or gravy became the British Empire's favorite dinner—and a completely different dish from the original.",
    story: [
      "In Tamil, kaṟi (கறி) means 'sauce' or 'gravy for rice'—a general term for spiced preparations eaten with rice or bread. It described a category of cooking, not a specific dish. There was no single 'curry' in Indian cuisine any more than there's a single 'salad' in Western cooking.",
      "Portuguese traders in India encountered the word in the 1500s and borrowed it as caril or carree. When the British colonized India, they adopted curry as a catch-all term for any Indian spiced dish—collapsing hundreds of distinct regional preparations (korma, vindaloo, dal, sambar, rogan josh) into one convenient English word.",
      "The British then invented 'curry powder'—a premixed spice blend that no Indian kitchen would recognize. Real Indian cooking uses whole spices ground fresh for each dish in specific combinations. The standardized yellow powder was a British convenience, an attempt to reduce a complex cuisine to a single product.",
      "Curry houses became a British institution in the 20th century. Chicken tikka masala—a dish arguably invented in Glasgow—was declared 'a true British national dish' by Foreign Secretary Robin Cook in 2001. The Tamil word for sauce had been transformed into a British culinary identity."
    ],
    journey: [
      { location: "Tamil Nadu", period: "ancient", form: "kaṟi", script: "கறி", context: "Tamil sauce or gravy for rice general category", color: "#9b4a2c", coordinates: [80.3, 13.1] },
      { location: "Goa", period: "1500s", form: "caril", context: "Portuguese traders borrow Tamil cooking word", color: "#8b5a2b", coordinates: [73.9, 15.5] },
      { location: "Calcutta", period: "1700s", form: "curry", script: "curry", context: "British catch-all for Indian spiced dishes", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "London", period: "1800s", form: "curry", context: "Curry powder invented curry houses established", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "curry", context: "Global cuisine Japanese Thai British variations", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tamil", ipa: "/ka.ɻi/", text: "கறி", lang: "ta" },
      { label: "English", ipa: "/ˈkʌɹ.i/", text: "curry", lang: "en" }
    ],
    relatives: [
      { word: "catamaran", language: "English", connection: "from Tamil—another Tamil word that went global", available: true, slug: "catamaran" },
      { word: "chutney", language: "English", connection: "from Hindi chaṭnī—another Indian food word", available: false },
      { word: "masala", language: "English", connection: "from Hindi/Urdu—spice blend often used with curry", available: false }
    ],
    meaningNow: "Curry is now claimed by everyone. Japanese curry rice is a national comfort food. Thai curries are their own distinct tradition. British curry is a $5 billion industry. None of these resemble what a Tamil cook would make from kaṟi.\n\nThe word's journey captures colonialism's relationship with cuisine: take something complex, simplify it, rename it, and eventually claim it as your own. The Tamil word for sauce became the world's word for 'that spicy thing from over there.'"
  },
  {
    slug: "torpedo",
    word: "torpedo",
    romanization: "torpedo",
    language: "Latin",
    hook: "The Romans named the electric ray for its numbing shock—and the same word now names the weapon that sinks ships.",
    story: [
      "In Latin, torpedo meant 'numbness' or 'sluggishness'—from torpēre, 'to be stiff or numb.' The Romans applied the name to the electric ray, a flat fish that delivers a powerful electric shock to anything that touches it. Fishermen who accidentally caught one knew the name was accurate: the torpedo made your arm go numb.",
      "The word remained a fish name for centuries. Then in the early 1800s, Robert Fulton—the American inventor better known for steamboats—developed an underwater explosive device and named it a torpedo, after the fish that delivers a devastating unseen strike from below the surface.",
      "During the American Civil War, 'torpedoes' were what we'd now call naval mines—stationary underwater explosives. Admiral David Farragut's famous command 'Damn the torpedoes! Full speed ahead!' at Mobile Bay in 1864 referred to these mines, not the self-propelled weapons we know today.",
      "The self-propelled torpedo was invented in 1866 by Robert Whitehead, an English engineer working in Austria. It was the first weapon that could travel underwater and strike a ship below the waterline—exactly like the electric ray striking from beneath the surface. The metaphor had come full circle: a fish that numbs became a weapon that kills."
    ],
    journey: [
      { location: "Rome", period: "~100 BCE", form: "torpedo", script: "torpedo", context: "Latin numbness name for electric ray fish", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "New York", period: "1800", form: "torpedo", context: "Fulton names underwater explosive after the fish", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Mobile Bay", period: "1864", form: "torpedo", context: "Civil War naval mines Farragut's famous order", color: "#4a5568", coordinates: [-88, 30.4] },
      { location: "Fiume", period: "1866", form: "torpedo", context: "Whitehead invents self-propelled torpedo", color: "#5c5a4a", coordinates: [14.4, 45.3] },
      { location: "Global", period: "present", form: "torpedo", context: "Self-propelled naval weapon submarine warfare", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Latin", ipa: "/torˈpeː.doː/", text: "torpedo", lang: "la" },
      { label: "English", ipa: "/tɔːɹˈpiː.doʊ/", text: "torpedo", lang: "en" }
    ],
    relatives: [
      { word: "torpid", language: "English", connection: "from same Latin root—sluggish numb inactive", available: false },
      { word: "shrapnel", language: "English", connection: "another weapons word with a surprising origin", available: true, slug: "shrapnel" },
      { word: "tsunami", language: "English", connection: "another word for devastating force from the sea", available: true, slug: "tsunami" }
    ],
    meaningNow: "The torpedo has evolved from a fish to a mine to a self-propelled weapon to a metaphor. To 'torpedo' something now means to destroy or sabotage it—a career, a deal, a relationship. The numbness the Romans felt from the electric ray has become the shock of sudden destruction.\n\nThe word's journey tracks humanity's relationship with the sea: first we feared what lived beneath the surface, then we weaponized the fear. The fish that numbed your hand inspired the weapon that sank the Lusitania."
  },
  {
    slug: "jade",
    word: "piedra de ijada",
    romanization: "piedra de ijada",
    language: "Spanish",
    hook: "Spanish conquistadors thought this green stone cured kidney pain—so they named it after the flank where it hurt.",
    story: [
      "When Spanish conquistadors encountered jade in Central America, indigenous peoples told them the stone had healing properties, particularly for ailments of the kidneys and loins. The Spanish called it piedra de ijada—'stone of the flank' or 'loin stone'—because pressing it against the body was believed to cure pain in that area.",
      "French borrowed the word as l'éjade, which was misread and reanalyzed as le jade—the 'd' jumping from the article to the noun. This mistake gave English the word jade. Meanwhile, the scientific name for one type of jade—nephrite—comes from the Greek nephros, meaning 'kidney,' preserving the same medicinal belief in a different language.",
      "Jade had been sacred in Mesoamerica for millennia before the Spanish arrived. The Maya valued it more than gold. In China, jade (yù, 玉) had been the supreme prestige material for over 7,000 years—carved into ritual objects, burial suits, and imperial seals. Two continents independently decided jade was the most precious stone on earth.",
      "The word jade in English carries only the Spanish kidney-cure story. The Chinese and Mesoamerican significance—jade as cosmic substance, as imperial authority, as portal between life and death—is invisible in the etymology. The word remembers a European folk remedy, not a world of meaning."
    ],
    journey: [
      { location: "Mesoamerica", period: "~1500 BCE", form: "unknown (Olmec)", context: "Sacred stone more valuable than gold", color: "#2d4a3b", coordinates: [-90, 17] },
      { location: "China", period: "~5000 BCE", form: "yù", script: "玉", context: "Chinese supreme prestige stone imperial material", color: "#2d4a3b", coordinates: [116, 40] },
      { location: "Mexico", period: "1500s", form: "piedra de ijada", context: "Spanish name it loin stone for kidney cure belief", color: "#8b5a2b", coordinates: [-99.1, 19.4] },
      { location: "Paris", period: "1600s", form: "le jade", context: "French misreads l'éjade as le jade", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "jade", context: "Precious stone jewelry Chinese and Mesoamerican symbol", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/ˈpje.ðɾa ðe i.ˈxa.ða/", text: "piedra de ijada", lang: "es" },
      { label: "English", ipa: "/dʒeɪd/", text: "jade", lang: "en" },
      { label: "Mandarin", ipa: "/y˥˩/", text: "玉", lang: "zh" }
    ],
    relatives: [
      { word: "nephrite", language: "English", connection: "from Greek nephros kidney—same kidney-cure etymology in Greek", available: false },
      { word: "sapphire", language: "English", connection: "another precious stone with ancient trade route etymology", available: true, slug: "sapphire" },
      { word: "azure", language: "English", connection: "from Arabic—another precious material word from trade routes", available: true, slug: "azure" }
    ],
    meaningNow: "Jade occupies a unique position in the global gem market: it's the most valued stone in Chinese culture (sometimes exceeding diamond prices for the finest jadeite) while being relatively obscure in Western jewelry.\n\nThe English word reduces all of this to a Spanish kidney remedy and a French spelling mistake. The Chinese yù and the Maya chalchihuitl both carried cosmic significance—jade was the substance of heaven, of authority, of immortality. The English word jade carries none of this. It remembers only the pain in the side."
  },
  {
    slug: "mascot",
    word: "masco",
    romanization: "masco",
    language: "Provençal French",
    hook: "A witch's charm from the south of France became the foam-headed character dancing at your kid's football game.",
    story: [
      "In Provençal (the historical language of southern France), masco meant 'witch' or 'sorcery,' and mascoto was a diminutive—a little witch, a charm, a thing that brings luck. The word carried the dual meaning of folk magic: something supernatural that could protect you or harm you, depending on its mood.",
      "The word entered standard French as mascotte in 1867, popularized by Edmond Audran's operetta La Mascotte (1880), about a woman who brings good luck to whoever possesses her. The operetta was a hit across Europe, and mascotte/mascot entered English almost immediately—meaning a person, animal, or object believed to bring good luck.",
      "Sports adopted the concept enthusiastically. By the early 1900s, teams were choosing mascots—live animals, costumed characters, symbolic figures—to bring luck and rally fans. The Philadelphia Athletics had an elephant. Yale had a bulldog. The supernatural charm had become a marketing tool.",
      "Modern mascots—those oversized foam-headed characters with permanent grins—are about as far from Provençal witchcraft as language can travel. The masco that terrified medieval villagers became the goofy chicken dancing on the sideline at halftime. The magic drained out; the entertainment rushed in."
    ],
    journey: [
      { location: "Provence", period: "medieval", form: "masco", context: "Provençal witch sorcery charm", color: "#4a5568", coordinates: [5.4, 43.3] },
      { location: "Paris", period: "1867", form: "mascotte", context: "French good-luck charm popularized by operetta", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1880s", form: "mascot", script: "mascot", context: "English adoption lucky person or thing", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "United States", period: "1900s", form: "mascot", context: "Sports teams adopt mascots for luck and marketing", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "mascot", context: "Sports brand identity costumed characters", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Provençal", ipa: "/ˈmas.ko/", text: "masco", lang: "oc" },
      { label: "French", ipa: "/mas.kɔt/", text: "mascotte", lang: "fr" },
      { label: "English", ipa: "/ˈmæs.kɒt/", text: "mascot", lang: "en" }
    ],
    relatives: [
      { word: "talisman", language: "English", connection: "from Arabic—another lucky charm word", available: true, slug: "talisman" },
      { word: "voodoo", language: "English", connection: "from West African—another folk magic word in English", available: true, slug: "voodoo" },
      { word: "charm", language: "English", connection: "from Latin carmen song—another word for magical protection", available: false }
    ],
    meaningNow: "Every university, sports franchise, and corporation with a mascot is unknowingly maintaining a tradition of Provençal folk magic. The costumed eagle at the football game is a descendant of the village witch's charm.\n\nThe word's journey from sorcery to sports marketing captures something about how modernity treats the supernatural: we kept the form (a symbolic figure that protects and rallies a group) while discarding the belief (that magic is real). The mascot still works—fans do feel more confident when it's around. We just don't call it witchcraft anymore."
  },
  {
    slug: "debris",
    word: "débris",
    romanization: "débris",
    language: "French",
    hook: "The French word for breaking things apart gave English its word for what's left after destruction.",
    story: [
      "In French, débris comes from débriser—'to break apart' or 'to shatter'—itself from the Old French prefix dé- (apart) and briser (to break). The word named what remained after something was destroyed: the fragments, the rubble, the scattered remains.",
      "English borrowed débris in the early 1700s, initially with its French accent intact. Early uses were primarily geological—debris described the rocks and sediment left by glaciers, landslides, or erosion. Scientists needed a word for 'the broken pieces nature leaves behind,' and French provided it.",
      "The word broadened through the centuries. By the 1800s, debris described the wreckage of anything—buildings after earthquakes, ships after storms, battlefields after combat. In the 20th century, it expanded to space: orbital debris, the millions of fragments of defunct satellites and spent rocket stages circling Earth.",
      "The pronunciation shifted too. French says day-BREE with a silent 's.' American English often says duh-BREE. British English sometimes pronounces the 's' as DEH-briss. The word itself has fragmented, much like the things it describes."
    ],
    journey: [
      { location: "France", period: "1500s", form: "débriser", context: "Old French to break apart to shatter", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "France", period: "1600s", form: "débris", script: "débris", context: "French fragments remains of destruction", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1708", form: "debris", script: "debris", context: "English geological then general destruction term", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Earth orbit", period: "1960s+", form: "debris", context: "Space debris orbital fragments satellite wreckage", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "debris", context: "Wreckage rubble fragments of anything destroyed", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "French", ipa: "/de.bʁi/", text: "débris", lang: "fr" },
      { label: "American English", ipa: "/dəˈbɹiː/", text: "debris", lang: "en" },
      { label: "British English", ipa: "/ˈdɛb.ɹiː/", text: "debris", lang: "en-GB" }
    ],
    relatives: [
      { word: "rubble", language: "English", connection: "from Old French—another destruction-remains word", available: false },
      { word: "shrapnel", language: "English", connection: "another word for fragments from destruction", available: true, slug: "shrapnel" },
      { word: "sabotage", language: "English", connection: "from French—another French word about destruction", available: true, slug: "sabotage" }
    ],
    meaningNow: "Debris is now everywhere—literally. There are over 27,000 pieces of tracked orbital debris circling Earth, plus millions too small to track. The French word for broken things now names a growing shell of junk surrounding our planet.\n\nThe word has become so common that we barely notice its French origin. But say it slowly—debris—and you can hear the breaking. The word sounds like what it means: something that was whole, and isn't anymore."
  },
  {
    slug: "pretzel",
    word: "Brezel",
    romanization: "Brezel",
    language: "German from Latin",
    hook: "A monk twisted dough into the shape of arms crossed in prayer—and the Latin word for 'little reward' became a snack.",
    story: [
      "The pretzel's origin story—a monk shaping dough to resemble arms folded in prayer—is beloved but uncertain. What's more certain is the word's path: from Latin bracchium ('arm') or its diminutive braciātellum ('little arm'), through Old High German brezitella, to modern German Brezel.",
      "The twisted bread was a staple of German-speaking Europe for centuries—associated with bakeries, Lent (when pretzels were an acceptable fasting food), and good luck. The three holes in a traditional pretzel were sometimes said to represent the Holy Trinity. Pretzel guilds were among the most powerful bakers' organizations in medieval Germany.",
      "German immigrants brought pretzels to America in the 1700s, settling heavily in Pennsylvania. The word pretzel entered American English directly from German. By the late 1800s, industrial pretzel production had begun in the Pennsylvania Dutch country, and the soft pretzel became a street food icon of Philadelphia and New York.",
      "The hard, crunchy pretzel—a distinctly American invention—emerged when baked pretzels were accidentally left in the oven too long. The mistake became a product. Now hard pretzels outsell soft ones in American supermarkets, and the word pretzel describes both the chewy street-cart version and the crunchy snack bag variety."
    ],
    journey: [
      { location: "Southern Europe", period: "~600 CE", form: "braciātellum", context: "Latin little arm monastic bread prayer shape", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Germany", period: "~1100s", form: "brezitella", script: "brezitella", context: "Old High German Lenten bread bakers' guilds", color: "#4a5568", coordinates: [10, 48] },
      { location: "Bavaria", period: "1500s", form: "Brezel", script: "Brezel", context: "German bakery staple good luck symbol", color: "#4a5568", coordinates: [11.6, 48.1] },
      { location: "Pennsylvania", period: "1700s", form: "pretzel", script: "pretzel", context: "German immigrants bring pretzels to America", color: "#4a5568", coordinates: [-76.3, 40] },
      { location: "Global", period: "present", form: "pretzel", context: "Soft and hard varieties street food snack", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "German", ipa: "/ˈbʁeː.t͡sl̩/", text: "Brezel", lang: "de" },
      { label: "English", ipa: "/ˈpɹɛt.səl/", text: "pretzel", lang: "en" }
    ],
    relatives: [
      { word: "brachial", language: "English", connection: "from Latin bracchium arm—same root", available: false },
      { word: "kindergarten", language: "English", connection: "from German—another German cultural word in English", available: true, slug: "kindergarten" },
      { word: "sauerkraut", language: "English", connection: "from German—another German food word", available: false }
    ],
    meaningNow: "Pretzels now come in every variety: stuffed, chocolate-dipped, bite-sized, pretzel buns, pretzel crust pizza. The word has expanded to describe a shape as much as a food—pretzel logic, getting twisted into a pretzel.\n\nBut in Bavaria, the Brezel is still serious business. Munich's Oktoberfest serves giant soft pretzels as essential beer accompaniments, and German bakers' guilds still use the pretzel as their emblem—the same twisted shape that may have started as a monk's edible prayer."
  },
  {
    slug: "vaccine",
    word: "vaccīnus",
    romanization: "vaccīnus",
    language: "Latin via English",
    hook: "A country doctor noticed milkmaids didn't get smallpox—and the Latin word for cow became the word that saved billions of lives.",
    story: [
      "In Latin, vacca means 'cow,' and vaccīnus means 'of or from the cow.' That's the entire etymology of one of the most important words in human history. In 1796, English physician Edward Jenner observed that milkmaids who'd contracted cowpox—a mild disease caught from cows—seemed immune to smallpox, a devastating killer.",
      "Jenner took material from a cowpox blister on a milkmaid's hand and inoculated an eight-year-old boy named James Phipps. When Jenner later exposed the boy to smallpox, he didn't get sick. Jenner called his technique vaccination—from vacca, cow—because the key ingredient came from bovine disease.",
      "The word spread faster than the practice. Vaccination was controversial for decades—critics called it unnatural, dangerous, and blasphemous. Caricaturists drew people sprouting cow parts after being vaccinated. But the results were undeniable, and by the 1800s, vaccination programs were saving thousands of lives annually.",
      "Smallpox was officially eradicated in 1980—the first and only human disease eliminated by vaccination. The technique Jenner pioneered using cowpox has since been adapted for polio, measles, tetanus, influenza, and COVID-19. The Latin word for cow now names the single most lifesaving medical intervention in human history."
    ],
    journey: [
      { location: "Rome", period: "ancient", form: "vacca", script: "vacca", context: "Latin cow bovine", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Berkeley", period: "1796", form: "vaccination", script: "vaccination", context: "Jenner uses cowpox to inoculate against smallpox", color: "#4a5568", coordinates: [-2.5, 51.7] },
      { location: "London", period: "1800s", form: "vaccine", script: "vaccine", context: "Word and practice spread globally despite opposition", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "1980", form: "vaccine", context: "Smallpox eradicated first disease eliminated by vaccination", color: "#2d4a3b", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "vaccine", context: "COVID mRNA polio measles billions of doses annually", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Latin", ipa: "/wakˈkiː.nus/", text: "vaccīnus", lang: "la" },
      { label: "English", ipa: "/vækˈsiːn/", text: "vaccine", lang: "en" }
    ],
    relatives: [
      { word: "inoculate", language: "English", connection: "from Latin inoculare to graft—the older technique", available: false },
      { word: "virus", language: "English", connection: "from Latin poison—what vaccines protect against", available: false },
      { word: "influenza", language: "English", connection: "from Italian—a disease vaccines now prevent", available: true, slug: "influenza" }
    ],
    meaningNow: "Vaccine became the most debated word of the 2020s. COVID-19 vaccines were developed in record time, saving millions of lives while becoming the subject of unprecedented misinformation and political conflict.\n\nThrough it all, the word's origin remains quietly remarkable: the Latin word for cow. Every vaccine—from the mRNA shots in your arm to the oral polio drops given to children in rural Africa—carries a cow's name. Jenner's milkmaids started something that would save more lives than any other invention in history, and the word remembers exactly where it began."
  },
  {
    slug: "grotesque",
    word: "grottesco",
    romanization: "grottesco",
    language: "Italian",
    hook: "Renaissance Romans dug into ancient ruins and found strange paintings on cave walls—and the word for 'cave-like' became the word for 'disturbingly weird.'",
    story: [
      "In the late 1400s, Romans exploring underground ruins of Nero's Domus Aurea (Golden House) discovered elaborate wall paintings featuring bizarre hybrid creatures—humans merging with plants, animals combined in impossible ways, faces emerging from foliage. Because the ruins were underground like caves (grotta in Italian), these paintings were called grottesca or grottesco—'cave-style.'",
      "Renaissance artists were fascinated. Raphael and his students incorporated these ancient designs into their own work—swirling, fantastical decorations called grotesques. The word initially described a specific artistic style: elaborate ornamental paintings featuring hybrid creatures and impossible natural forms.",
      "But the word shifted. By the 1600s, grotesque had moved from 'cave-style art' to 'bizarre and distorted' to 'ugly and disturbing.' The playful Roman paintings that inspired Raphael became associated with deformity, monstrosity, and the violation of natural order. The aesthetic category became a moral judgment.",
      "Today, grotesque means 'repulsively ugly or distorted'—a complete transformation from its origin as a description of beautiful, if strange, ancient art. The Roman painters who decorated Nero's pleasure palace would be baffled to learn that their elegant work gave English a word for ugliness."
    ],
    journey: [
      { location: "Rome", period: "~65 CE", form: "unknown", context: "Nero's Domus Aurea painted with fantastical hybrid creatures", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Rome", period: "1480s", form: "grottesco", script: "grottesco", context: "Renaissance excavators discover ancient cave paintings", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Rome", period: "1500s", form: "grottesche", context: "Raphael adopts the style for Vatican decorations", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Paris", period: "1600s", form: "grotesque", script: "grotesque", context: "French meaning shifts from art style to bizarre ugly", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "grotesque", context: "Repulsively ugly distorted monstrously unnatural", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Italian", ipa: "/ɡrot.ˈtes.ko/", text: "grottesco", lang: "it" },
      { label: "English", ipa: "/ɡɹoʊˈtɛsk/", text: "grotesque", lang: "en" }
    ],
    relatives: [
      { word: "grotto", language: "English", connection: "from Italian grotta—the cave that started it all", available: false },
      { word: "gargoyle", language: "English", connection: "from French—another architectural word for the monstrous", available: false },
      { word: "labyrinth", language: "English", connection: "another word from underground ancient spaces", available: true, slug: "labyrinth" }
    ],
    meaningNow: "The grotesque has become a literary and artistic genre—the Southern Gothic of Flannery O'Connor, the body horror of David Cronenberg, the carnival of the absurd. Critics use it to describe art that makes us uncomfortable by blurring boundaries between human and animal, beautiful and ugly, alive and dead.\n\nThis is actually very close to what the Romans painted on Nero's walls: hybrid creatures that defied categories. The word has come full circle, from cave art to criticism of art that does exactly what the cave art did."
  },
  {
    slug: "sugar",
    word: "शर्करा",
    romanization: "śarkarā",
    language: "Sanskrit",
    hook: "A Sanskrit word for gravel became the sweetest substance on earth—because raw sugar looked like pebbles.",
    story: [
      "In Sanskrit, śarkarā (शर्करा) meant 'ground or candied sugar,' but originally referred to gravel or grit—because crystallized sugar resembled tiny pebbles. The word traveled west through Persian (shakar), Arabic (sukkar), and Medieval Latin (succarum), each language adapting the sound while the substance grew more refined.",
      "Sugarcane was first domesticated in New Guinea around 8000 BCE and spread to India, where the technology of crystallization was developed. The process of turning cane juice into transportable crystals was India's great contribution to global food technology—and the Sanskrit word for the product traveled with the technique.",
      "Sugar transformed the world more brutally than almost any other commodity. The Caribbean sugar plantations of the 1600s-1800s drove the largest forced migration in human history: over 12 million enslaved Africans were transported across the Atlantic, the majority to work in sugar production. A Sanskrit word for pebbles fueled one of history's greatest atrocities.",
      "English got sugar through Old French sucre, itself from Arabic sukkar. The word is one of the most traveled in any language—touching Sanskrit, Pali, Persian, Arabic, Medieval Latin, Old French, and English, spanning four millennia and six continents."
    ],
    journey: [
      { location: "India", period: "~500 BCE", form: "śarkarā", script: "शर्करा", context: "Sanskrit gravel then crystallized sugar cane processing", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Persia", period: "~600 CE", form: "shakar", script: "شکر", context: "Persian adoption sugar refining techniques spread west", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Baghdad", period: "~800 CE", form: "sukkar", script: "سكر", context: "Arabic sugar cultivation across Mediterranean", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Caribbean", period: "1600s", form: "sugar", context: "Plantation slavery largest forced migration in history", color: "#8b5a2b", coordinates: [-62, 17] },
      { location: "London", period: "1200s", form: "sugar", script: "sugar", context: "English via Old French luxury then staple", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "sugar", context: "Universal sweetener obesity epidemic $90 billion industry", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/ɕar.ka.raː/", text: "शर्करा", lang: "hi" },
      { label: "Arabic", ipa: "/suk.kar/", text: "سكر", lang: "ar" },
      { label: "English", ipa: "/ˈʃʊɡ.əɹ/", text: "sugar", lang: "en" }
    ],
    relatives: [
      { word: "saccharine", language: "English", connection: "from Latin saccharum—same root excessively sweet", available: false },
      { word: "candy", language: "English", connection: "from Arabic qand—crystallized sugar another Arabic sweet word", available: true, slug: "candy" },
      { word: "syrup", language: "English", connection: "from Arabic sharāb—sugar dissolved in water", available: true, slug: "syrup" },
      { word: "cotton", language: "English", connection: "from Arabic—another commodity that drove the slave trade", available: true, slug: "cotton" }
    ],
    meaningNow: "Sugar is now the world's most consumed additive—in soft drinks, processed food, bread, sauce, and virtually everything packaged. The WHO warns that sugar consumption drives the global obesity epidemic. The substance that was once a luxury spice for the wealthy is now the cheapest calorie available.\n\nThe Sanskrit word for gravel became the sweetest substance in every kitchen. The journey from pebble to pleasure to public health crisis spans the entire history of global trade—and the millions of lives it consumed along the way."
  },
  {
    slug: "flamingo",
    word: "flamenco",
    romanization: "flamenco",
    language: "Spanish/Portuguese from Provençal/Germanic",
    hook: "The bird, the dance, and the Flemish people all share a word—and nobody agrees on why.",
    story: [
      "The etymology of flamingo is gloriously tangled. The bird's name comes from Spanish or Portuguese flamengo/flamenco, which meant both 'flame-colored' (from Latin flamma) and 'Flemish' (from the people of Flanders). Why would a tropical pink bird be named after people from Belgium?",
      "One theory: Flemish people were known for their ruddy, pink complexions—so the pink bird was 'Flemish-colored.' Another: the flamenco dance, associated with Romani people in Andalusia, was called 'Flemish' as a general term for 'foreign' or 'exotic.' The bird, the dance, and the demonym all tangled together in medieval Spanish.",
      "The more straightforward etymology connects flamingo directly to Latin flamma ('flame') through Provençal flamenc ('flame-colored'). The bird's brilliant pink plumage—actually derived from the carotenoids in the algae and crustaceans they eat—made the fire connection obvious. A flamingo in flight looks like a tongue of flame.",
      "English borrowed flamingo from Spanish or Portuguese in the 1560s. The word has traveled from Latin fire to Provençal color to Spanish ambiguity (bird? dance? Belgians?) to English, where it names only the bird. The flamenco dance kept the Spanish form. The two words—flamingo and flamenco—are probably the same word, separated by usage."
    ],
    journey: [
      { location: "Rome", period: "ancient", form: "flamma", script: "flamma", context: "Latin flame fire", color: "#6b2d3d", coordinates: [12.5, 41.9] },
      { location: "Provence", period: "~1200s", form: "flamenc", context: "Provençal flame-colored", color: "#6b2d3d", coordinates: [5.4, 43.3] },
      { location: "Spain", period: "1400s", form: "flamenco", script: "flamenco", context: "Spanish flame bird Flemish and dance all confused", color: "#6b2d3d", coordinates: [-3.7, 40.4] },
      { location: "London", period: "1565", form: "flamingo", script: "flamingo", context: "English borrowing specifically for the bird", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "flamingo", context: "Tropical bird lawn ornament pop culture icon", coordinates: [-80.2, 25.8] }
    ],
    sounds: [
      { label: "Spanish", ipa: "/fla.ˈmeŋ.ko/", text: "flamenco", lang: "es" },
      { label: "English", ipa: "/fləˈmɪŋ.ɡoʊ/", text: "flamingo", lang: "en" }
    ],
    relatives: [
      { word: "flamenco", language: "Spanish", connection: "probably same word—the dance and the bird share roots", available: false },
      { word: "flame", language: "English", connection: "from Latin flamma—the color connection", available: false },
      { word: "crimson", language: "English", connection: "another vivid color word with a surprising trade route etymology", available: true, slug: "crimson" }
    ],
    meaningNow: "The plastic pink flamingo lawn ornament—designed by Don Featherstone in 1957—became an icon of American kitsch, then ironic decoration, then genuine pop art. The bird itself stands on one leg in tropical wetlands, entirely unaware that its name connects fire, Flanders, and flamenco.\n\nFlamingo is one of those words where the etymology is so tangled that every explanation feels incomplete. Fire? Flemish people? The dance? Maybe all of them. Sometimes a word isn't a straight line from origin to meaning—it's a flamingo standing on one leg, balanced impossibly between multiple histories."
  },
  {
    slug: "calendar",
    word: "kalendae",
    romanization: "kalendae",
    language: "Latin",
    hook: "The Romans named the first day of each month after the calling of debts—because time was money, literally.",
    story: [
      "In ancient Rome, the kalendae (calends) were the first day of each month—the day when debts were due, accounts were settled, and interest was charged. The word comes from calare, 'to call out' or 'to proclaim'—because the pontiffs would publicly announce the start of each month and the debts that were now payable.",
      "A kalendarium was a moneylender's account book—a record of debts organized by the dates they were due. When the word evolved into calendar in English, it kept the organizational function but lost the financial specificity. A calendar became any system for organizing time, not just a debt ledger.",
      "Julius Caesar reformed the Roman calendar in 46 BCE, creating the Julian calendar that served Western civilization for over 1,600 years. Pope Gregory XIII refined it further in 1582 with the Gregorian calendar—the system most of the world uses today. The word calendar has remained unchanged through both reforms.",
      "The connection between time and money is still alive in the word's DNA. We 'schedule' payments, 'budget' our time, and 'invest' hours. The calendar on your wall is a descendant of a Roman debt collector's notebook, and the first of the month is still when rent is due."
    ],
    journey: [
      { location: "Rome", period: "~700 BCE", form: "kalendae", script: "kalendae", context: "Latin first of the month debt day proclamation", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Rome", period: "46 BCE", form: "kalendarium", context: "Julian calendar reform debt book becomes time system", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Rome", period: "1582", form: "calendario", context: "Gregorian calendar reform current world standard", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "London", period: "1200s", form: "calendar", script: "calendar", context: "English via Anglo-Norman time-keeping system", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "calendar", context: "Universal time organization digital and physical", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Latin", ipa: "/kaˈlen.dae/", text: "kalendae", lang: "la" },
      { label: "English", ipa: "/ˈkæl.ən.dəɹ/", text: "calendar", lang: "en" }
    ],
    relatives: [
      { word: "calends", language: "English", connection: "the first day of Roman months—the root word", available: false },
      { word: "budget", language: "English", connection: "from French bougette—another financial word applied to time", available: false },
      { word: "salary", language: "English", connection: "from Latin salarium—another word connecting money to time periods", available: true, slug: "salary" }
    ],
    meaningNow: "The calendar is so fundamental that we forget it's an invention—a human system imposed on the continuous flow of time. Different cultures have created hundreds of calendars: the Islamic calendar follows the moon, the Chinese calendar combines sun and moon, the Mayan calendar tracked Venus.\n\nBut the word calendar itself remembers its Roman commercial origins: time organized for the purpose of collecting money. Every time you check your calendar, you're consulting a system that began as a debt ledger. Time is money—the Romans said it first, in the word itself."
  },
  {
    slug: "cipher",
    word: "صفر",
    romanization: "ṣifr",
    language: "Arabic",
    hook: "The Arabic word for 'empty' became the word for secret codes—because zero was the most revolutionary number ever invented.",
    story: [
      "In Arabic, ṣifr (صفر) means 'empty' or 'nothing'—a translation of the Sanskrit śūnya ('void'), which was the Indian mathematicians' name for zero. When Arab scholars transmitted the Indian numeral system to Europe, ṣifr was translated into Medieval Latin as cifra or zephirum. From these two forms, English got two different words: cipher and zero.",
      "Initially, cipher just meant zero—the empty placeholder. But because the entire Arabic numeral system was new and confusing to medieval Europeans, cifra began to mean 'any numeral' and then 'a system of numbers.' From there, the meaning shifted to 'a system of writing that others can't read'—a secret code.",
      "The connection makes sense: if you can turn words into numbers and numbers into different numbers, you've created an encryption system. Early ciphers were exactly that—substitution systems where letters were replaced by numbers. The word that meant 'nothing' became the word for 'hidden meaning.'",
      "Today, cipher means both a code system and a person of no importance ('a mere cipher'). The dual meaning preserves both paths from the Arabic original: ṣifr as zero (a nothing, a nonentity) and ṣifr as the revolutionary concept that enabled both mathematics and cryptography."
    ],
    journey: [
      { location: "India", period: "~500 CE", form: "śūnya", script: "शून्य", context: "Sanskrit void the concept of zero", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Baghdad", period: "~800 CE", form: "ṣifr", script: "صفر", context: "Arabic empty translation of Sanskrit zero", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Toledo", period: "1100s", form: "cifra", script: "cifra", context: "Medieval Latin numeral then any number system", color: "#5c5a4a", coordinates: [-4, 39.9] },
      { location: "London", period: "1300s", form: "cipher", script: "cipher", context: "English zero then number system then secret code", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "cipher", context: "Encryption code nonentity zero", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/sˤifr/", text: "صفر", lang: "ar" },
      { label: "English", ipa: "/ˈsaɪ.fəɹ/", text: "cipher", lang: "en" }
    ],
    relatives: [
      { word: "zero", language: "English", connection: "from same Arabic ṣifr via Italian zefiro—twin words", available: true, slug: "zero" },
      { word: "algorithm", language: "English", connection: "from al-Khwārizmī—same mathematical revolution", available: true, slug: "algorithm" },
      { word: "algebra", language: "English", connection: "from Arabic al-jabr—same tradition of Arabic mathematics", available: true, slug: "algebra" }
    ],
    meaningNow: "In the digital age, ciphers are everywhere—every encrypted message, every secure website, every password system runs on mathematical ciphers descended from the Arabic concept of ṣifr.\n\nThe word that meant 'nothing' now protects everything. Your bank account, your medical records, your private messages—all secured by ciphers. Zero was the most disruptive number ever invented, and the word for it became the most important concept in information security. Nothing became everything."
  },
  {
    slug: "blitz",
    word: "Blitzkrieg",
    romanization: "Blitzkrieg",
    language: "German",
    hook: "Lightning war—Germany's devastating military strategy—became English slang for doing anything fast and hard.",
    story: [
      "In German, Blitz means 'lightning' and Krieg means 'war.' Blitzkrieg—lightning war—described the Wehrmacht's devastating strategy of rapid, concentrated attacks using tanks, aircraft, and infantry in coordinated strikes that overwhelmed enemies before they could organize a defense. Poland fell in weeks. France fell in six.",
      "During the London Blitz of 1940-1941, Germany subjected London to 57 consecutive nights of bombing. Londoners shortened Blitzkrieg to Blitz—the word becoming both a noun for the bombing campaign and a verb for any overwhelming attack. 'The Blitz' entered British national mythology as a symbol of resilience under bombardment.",
      "After the war, blitz shed its military horror and became casual English. An advertising blitz. A media blitz. Blitzing through homework. The quarterback got blitzed. A word born from the destruction of Warsaw and the bombing of London became everyday slang for doing something quickly and aggressively.",
      "The casualization of blitz is remarkable. A term for a military doctrine that killed millions of people is now used to describe cleaning your house quickly ('I blitzed the kitchen') or a football defensive play. The lightning metaphor survived; the thunder of bombs faded."
    ],
    journey: [
      { location: "Germany", period: "1930s", form: "Blitzkrieg", script: "Blitzkrieg", context: "German military doctrine lightning war rapid strikes", color: "#6b2d3d", coordinates: [13.4, 52.5] },
      { location: "Poland", period: "1939", form: "Blitzkrieg", context: "Invasion of Poland first major Blitzkrieg campaign", color: "#6b2d3d", coordinates: [21, 52] },
      { location: "London", period: "1940-41", form: "the Blitz", script: "Blitz", context: "German bombing of London 57 nights word shortened", color: "#6b2d3d", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "blitz", context: "Any fast aggressive action advertising sports slang", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "German", ipa: "/blɪt͡s.kʁiːk/", text: "Blitzkrieg", lang: "de" },
      { label: "English", ipa: "/blɪts/", text: "blitz", lang: "en" }
    ],
    relatives: [
      { word: "wanderlust", language: "English", connection: "from German—another German compound in English", available: true, slug: "wanderlust" },
      { word: "kindergarten", language: "English", connection: "from German—a gentler German loanword", available: true, slug: "kindergarten" },
      { word: "shrapnel", language: "English", connection: "another military word that entered casual English", available: true, slug: "shrapnel" }
    ],
    meaningNow: "Blitz has been so thoroughly domesticated that most people under 40 have no visceral connection to its origin. It's a football term, a marketing term, a cleaning term.\n\nBut in London, the Blitz is still living memory for some—the nights spent in Underground stations, the morning walks through rubble. The word carries both: the horror of aerial bombardment and the casual speed of modern life. Lightning strikes and is gone, leaving only the word behind."
  },
  {
    slug: "yoga",
    word: "योग",
    romanization: "yoga",
    language: "Sanskrit",
    hook: "A 5,000-year-old Sanskrit word for spiritual union became a $30 billion fitness industry.",
    story: [
      "In Sanskrit, yoga (योग) derives from the root yuj, meaning 'to yoke' or 'to unite'—the same Proto-Indo-European root that gives English 'yoke' and 'junction.' In Hindu philosophy, yoga described the discipline of uniting the individual self (atman) with the universal self (Brahman)—a path to spiritual liberation through meditation, ethical conduct, and physical practice.",
      "The Yoga Sutras of Patanjali, composed around 400 CE, codified yoga into eight limbs—of which āsana (physical postures) was just one, and not the most important. Meditation, breath control, moral discipline, and withdrawal from the senses were all considered more essential than physical poses. The body was a vehicle, not the destination.",
      "Yoga entered English awareness through British colonialism in India and through the writings of Swami Vivekananda, who lectured in the West in the 1890s. But the modern yoga boom—yoga studios, yoga mats, yoga pants—began in the 1960s-70s counterculture and accelerated into a global fitness industry.",
      "The transformation is dramatic: a comprehensive system for spiritual liberation was reduced, in its Western form, primarily to physical exercise. The Sanskrit word for 'union with the divine' now describes a workout class. The eight limbs became one, and the one limb became the whole practice."
    ],
    journey: [
      { location: "India", period: "~3000 BCE", form: "yoga", script: "योग", context: "Sanskrit to yoke to unite spiritual discipline", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "India", period: "~400 CE", form: "yoga", context: "Patanjali codifies eight limbs of yoga practice", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Chicago", period: "1893", form: "yoga", context: "Vivekananda introduces yoga to Western audiences", color: "#4a5568", coordinates: [-87.6, 41.9] },
      { location: "Los Angeles", period: "1960s-70s", form: "yoga", context: "Counterculture adopts yoga studios emerge", color: "#4a5568", coordinates: [-118, 34] },
      { location: "Global", period: "present", form: "yoga", context: "$30 billion fitness industry 300 million practitioners", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/ˈjoː.ɡɐ/", text: "योग", lang: "hi" },
      { label: "English", ipa: "/ˈjoʊ.ɡə/", text: "yoga", lang: "en" }
    ],
    relatives: [
      { word: "yoke", language: "English", connection: "from same Proto-Indo-European root *yug—to join", available: false },
      { word: "guru", language: "English", connection: "from Sanskrit—the teacher who guides yoga practice", available: true, slug: "guru" },
      { word: "karma", language: "English", connection: "from Sanskrit—another Hindu philosophical concept in English", available: true, slug: "karma" },
      { word: "nirvana", language: "English", connection: "from Sanskrit—the spiritual goal yoga was designed to achieve", available: true, slug: "nirvana" }
    ],
    meaningNow: "Yoga is now a $30 billion global industry with over 300 million practitioners. Most practice only āsana—physical postures—in air-conditioned studios set to ambient music. The Sanskrit word for 'union with the divine' appears on leggings, water bottles, and Instagram feeds.\n\nBut yoga's philosophical core hasn't disappeared—it's just been buried under athleisure. Many practitioners eventually discover that the postures are a gateway to the deeper practice: breath, meditation, ethical living. The word yoga still means what it always meant. The practice is just waiting for people to catch up with the word."
  }
];
