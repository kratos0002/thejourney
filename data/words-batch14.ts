import type { Word } from "./word-types";

export const newWordsBatch14: Word[] = [
  {
    slug: "tuk-tuk",
    word: "ตุ๊กตุ๊ก",
    romanization: "tuk-tuk",
    language: "Thai",
    hook: "The sound became the vehicle—Thailand's three-wheeled taxi named itself with every putt-putt of its engine.",
    story: [
      "In the streets of Bangkok, a distinctive sound announced a new kind of transportation. The small three-wheeled vehicles that began appearing in the 1960s made a rhythmic noise from their two-stroke engines: tuk-tuk-tuk-tuk. Thais, with characteristic linguistic playfulness, simply named the vehicle after its voice. The tuk-tuk had christened itself.",
      "The vehicle itself descended from the Japanese auto rickshaw, which evolved from the pulled rickshaws of the 19th century. After World War II, Japan began exporting motorized three-wheelers across Asia. Thailand received its first models in the late 1950s, and local manufacturers soon began producing their own versions, adapted to Thai conditions and aesthetics.",
      "The tuk-tuk became inseparable from Bangkok's identity. As the city's traffic grew legendary, these nimble vehicles could weave through gridlock where cars couldn't. They became tourist attractions themselves—visitors sought the experience of careening through Bangkok traffic in an open-air tuk-tuk, negotiating fares, feeling the city's heat and chaos.",
      "The onomatopoeic name spread with the vehicle. Today tuk-tuk refers to similar three-wheeled taxis across Southeast Asia, South Asia, and beyond. The Thai word appears in dictionaries worldwide. Other countries have their own names—auto rickshaw in India, bajaj in Indonesia—but tuk-tuk has become the international standard, carrying Bangkok's soundscape around the globe."
    ],
    journey: [
      { location: "Japan", period: "1930s", form: "auto rickshaw", context: "Motorized three-wheelers developed", color: "#c41e3a", coordinates: [139.7, 35.7] },
      { location: "Bangkok", period: "1960s", form: "ตุ๊กตุ๊ก", script: "ตุ๊กตุ๊ก", context: "Thais name the vehicle after its sound", color: "#2d4a3b", coordinates: [100.5, 13.8] },
      { location: "Thailand", period: "1970s-80s", form: "tuk-tuk", context: "Becomes iconic urban transport", color: "#2d4a3b", coordinates: [100.5, 13.8] },
      { location: "Southeast Asia", period: "1990s", form: "tuk-tuk", context: "Name spreads regionally with tourism", color: "#4a7c7c", coordinates: [104.9, 11.6] },
      { location: "Global", period: "2000s+", form: "tuk-tuk", context: "International word for three-wheeled taxi", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Thai", ipa: "/túk.túk/", text: "ตุ๊กตุ๊ก", lang: "th" },
      { label: "English", ipa: "/ˈtʊk.tʊk/", text: "tuk-tuk", lang: "en" },
      { label: "French", ipa: "/tuk.tuk/", text: "touk-touk", lang: "fr" }
    ],
    relatives: [
      { word: "rickshaw", language: "Japanese", connection: "the pulled vehicle that preceded motorized versions", available: false },
      { word: "auto rickshaw", language: "English/Hindi", connection: "Indian term for similar vehicles", available: false },
      { word: "bajaj", language: "Indonesian", connection: "Indonesian name from the Bajaj brand", available: false },
      { word: "klong", language: "Thai", connection: "another Thai word entering international vocabulary", available: true, slug: "klong" }
    ],
    meaningNow: "The tuk-tuk represents a category of words born from pure sound—onomatopoeia so perfect that it needed no other name. The vehicle's voice became its identity, and that identity traveled worldwide.\n\nToday tuk-tuks face an uncertain future in Bangkok itself. Electric vehicles, pollution concerns, and ride-sharing apps threaten the iconic transport. But the word has already escaped, naming three-wheeled taxis from Lisbon to Lagos. Even if Bangkok's tuk-tuks eventually fall silent, their characteristic stutter will live on in the word they gave to the world."
  },
  {
    slug: "howitzer",
    word: "houfnice",
    romanization: "houfnice",
    language: "Czech",
    hook: "Bohemian rebels built a weapon to fight crusaders—its Czech name still thunders across battlefields.",
    story: [
      "In the early 15th century, the followers of Czech reformer Jan Hus faced existential threat. The Catholic Church had declared crusades against Bohemia, sending armies to crush the heretics. Outmatched in numbers and resources, the Hussites turned to innovation. Among their revolutionary weapons was a new kind of artillery: a short-barreled cannon that could fire at high angles, lobbing projectiles over walls and into enemy formations.",
      "The Czechs called this weapon houfnice, derived from houf meaning 'crowd' or 'heap'—the gun designed to devastate massed troops. The Hussite Wars (1419-1434) became a laboratory for military innovation. Their war wagons, combined arms tactics, and artillery changed European warfare forever. The houfnice proved devastatingly effective against crusader armies.",
      "As the weapon spread across Europe, its Czech name traveled with it. German adopted it as Haubitze, which English later borrowed as howitzer. The pronunciation shifted, the spelling changed, but the Bohemian origins remained traceable. Other Czech military terms followed similar paths—píšťala became pistol, the Hussites' legacy written into military vocabulary.",
      "Modern howitzers bear little resemblance to their 15th-century ancestors, but the tactical concept remains: artillery that fires at high angles, useful against fortifications and enemies behind cover. From the Hussite rebels defending their faith to modern militaries worldwide, the houfnice's descendants continue to shape battlefields—and the Czech word continues to name them."
    ],
    journey: [
      { location: "Bohemia", period: "1420s", form: "houfnice", script: "houfnice", context: "Hussite rebels develop new artillery", color: "#5c5a4a", coordinates: [14.4, 50.1] },
      { location: "Central Europe", period: "1430s-50s", form: "houfnice", context: "Weapon spreads after Hussite Wars", color: "#5c5a4a", coordinates: [16.4, 48.2] },
      { location: "Germany", period: "1500s", form: "Haubitze", context: "German adaptation of Czech word", color: "#4a5568", coordinates: [13.4, 52.5] },
      { location: "England", period: "1690s", form: "howitzer", context: "English borrows from German", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "howitzer", context: "Standard artillery term worldwide", coordinates: [-77, 38.9] }
    ],
    sounds: [
      { label: "Czech", ipa: "/ˈɦou̯fɲɪtsɛ/", text: "houfnice", lang: "cs" },
      { label: "German", ipa: "/haʊˈbɪtsə/", text: "Haubitze", lang: "de" },
      { label: "English", ipa: "/ˈhaʊ.ɪt.sər/", text: "howitzer", lang: "en" }
    ],
    relatives: [
      { word: "pistol", language: "Czech", connection: "another military term from the Hussite Wars", available: true, slug: "pistol" },
      { word: "robot", language: "Czech", connection: "Czech words that changed global vocabulary", available: true, slug: "robot" },
      { word: "houf", language: "Czech", connection: "crowd or heap—the root word", available: false },
      { word: "cannon", language: "Italian", connection: "the broader category of artillery", available: false }
    ],
    meaningNow: "The howitzer's etymology carries a story of resistance. The Hussites, facing annihilation for their religious beliefs, invented weapons that let them survive against superior numbers. Their Czech vocabulary entered the language of their enemies, then spread worldwide.\n\nEvery modern military uses howitzers. The word appears in news from conflicts around the globe. Few who use it know they're speaking Czech, invoking 15th-century religious wars. But the Hussites' linguistic legacy persists: they named a weapon that still shapes how wars are fought, and their word still names it."
  },
  {
    slug: "coolie",
    word: "கூலி",
    romanization: "kuli",
    language: "Tamil/Hindi",
    hook: "A word for wages became a word for workers—then a word that carries the weight of colonial exploitation.",
    story: [
      "The word coolie traces to South Asian languages where kuli (Tamil: கூலி, Hindi: क़ुली) simply meant 'wages' or 'hire.' A kuli worker was someone hired for wages—a laborer, but not inherently degraded. The word described an economic relationship, not a racial category or a judgment of worth.",
      "Colonial powers transformed both the workers and the word. After Britain abolished slavery in 1834, plantation owners across the empire needed new sources of cheap labor. They turned to the 'coolie trade'—recruiting workers from India and China under contracts that often amounted to debt bondage. Millions were transported to Caribbean sugar plantations, Pacific guano mines, African railways, and Southeast Asian rubber estates.",
      "The word coolie absorbed the conditions it described. What began as a neutral term for hired labor became associated with the brutal coolie system: workers contracted under false pretenses, transported in deadly conditions, bound to years of labor with few rights. The word accumulated the shame of exploitation, the sweat of tropical fields, the deaths in cramped ships.",
      "Today coolie is widely considered offensive in English, a slur that reduces human beings to their exploited labor. Yet the word's history matters precisely because it traces how colonialism transformed not just people but language. A simple Tamil word for wages became a marker of racialized exploitation—and studying that transformation reveals uncomfortable truths about how empires extracted labor and inscribed hierarchy into vocabulary."
    ],
    journey: [
      { location: "South India", period: "ancient", form: "கூலி", script: "கூலி", context: "Tamil word meaning wages or hire", color: "#8b5a2b", coordinates: [80.3, 13.1] },
      { location: "India", period: "1600s", form: "kuli/coolie", context: "Europeans encounter the term", color: "#8b5a2b", coordinates: [72.9, 19.1] },
      { location: "British Empire", period: "1830s-1920s", form: "coolie", context: "Word transforms under coolie labor system", color: "#6b2d3d", coordinates: [-61.5, 10.5] },
      { location: "Global", period: "1900s", form: "coolie", context: "Spreads as both term and slur", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Present", period: "today", form: "coolie", context: "Recognized as offensive, studied historically", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Tamil", ipa: "/kuːli/", text: "கூலி", lang: "ta" },
      { label: "Hindi", ipa: "/kuːliː/", text: "क़ुली", lang: "hi" },
      { label: "English (colonial)", ipa: "/ˈkuː.li/", text: "coolie", lang: "en" }
    ],
    relatives: [
      { word: "indentured", language: "Latin/English", connection: "the contract system that bound coolie laborers", available: false },
      { word: "chai", language: "Hindi", connection: "another Hindi word transformed by colonial trade", available: true, slug: "chai" },
      { word: "wages", language: "Germanic", connection: "the original meaning of kuli", available: false },
      { word: "labor", language: "Latin", connection: "the broader category the word came to define", available: false }
    ],
    meaningNow: "Coolie stands as a case study in how colonial systems corrupt language. The word didn't begin as a slur—colonialism made it one. Understanding this transformation matters because the pattern repeats: neutral terms become loaded with the power structures that employ them.\n\nThe word's difficult history is precisely why it deserves study rather than mere avoidance. Millions of workers lived and died under the coolie system; their descendants span the globe from Guyana to Fiji. The word carries their history—the exploitation they endured and the communities they built despite it. Erasing the word risks erasing that memory. Understanding it honors their story while acknowledging the harm the term inflicted."
  },
  {
    slug: "selfie",
    word: "selfie",
    romanization: "selfie",
    language: "English (Australian slang)",
    hook: "An Australian drunk apologized for a blurry photo—and accidentally named the defining act of a generation.",
    story: [
      "On September 13, 2002, a user named 'Hopey' posted to an Australian internet forum about injuring his lip at a friend's 21st birthday party. He included a photo of his stitched wound with an apology: 'sorry about the focus, it was a selfie.' This is the earliest known use of the word—born from Australian English's love of diminutive -ie/-y endings (barbie for barbecue, arvo for afternoon).",
      "The technology preceded the word by over a century. Robert Cornelius took what's considered the first photographic self-portrait in 1839. The concept accelerated with front-facing phone cameras in the 2000s. But the linguistic innovation—naming this act with a casual, dismissive diminutive—was distinctly Australian.",
      "The word spread slowly at first, then explosively. By 2012, selfie appeared in Time magazine's list of top buzzwords. In 2013, Oxford Dictionaries named it Word of the Year, noting a 17,000% increase in usage. The Australian forum post had spawned a global vocabulary shift in just over a decade.",
      "Selfie quickly generated compounds and derivatives: selfie stick, selfie culture, belfie (buttocks selfie), drelfie (drunk selfie). The word itself became a cultural flashpoint—praised as democratic self-expression, criticized as narcissistic obsession. Love it or hate it, the word captured something about how we live now."
    ],
    journey: [
      { location: "Australia", period: "2002", form: "selfie", context: "First known use on Australian internet forum", color: "#c41e3a", coordinates: [151.2, -33.9] },
      { location: "Internet", period: "2004-2010", form: "selfie", context: "Word spreads through social media", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global media", period: "2012", form: "selfie", context: "Time magazine lists as top buzzword", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Oxford", period: "2013", form: "selfie", context: "Named Word of the Year", color: "#4a5568", coordinates: [-1.3, 51.8] },
      { location: "Global", period: "present", form: "selfie", context: "Universal term across languages", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Australian English", ipa: "/ˈsel.fi/", text: "selfie", lang: "en-AU" },
      { label: "American English", ipa: "/ˈsɛl.fi/", text: "selfie", lang: "en-US" },
      { label: "Japanese adaptation", ipa: "/seɾɯɸiː/", text: "セルフィー", lang: "ja" }
    ],
    relatives: [
      { word: "self-portrait", language: "English", connection: "the formal term selfie replaced", available: false },
      { word: "emoji", language: "Japanese", connection: "another new word for digital self-expression", available: true, slug: "emoji" },
      { word: "barbie", language: "Australian English", connection: "same diminutive suffix (-ie) pattern", available: false },
      { word: "photograph", language: "Greek", connection: "the broader category selfies belong to", available: false }
    ],
    meaningNow: "Selfie demonstrates how quickly language can change in the internet age. A casual word in an obscure forum post became a global term in a decade—a journey that once took centuries now happens in years.\n\nThe word's Australian origins matter. That characteristic -ie ending gave selfie its casual, slightly self-deprecating tone. We don't take 'self-portraits'—that sounds pretentious. We take selfies, acknowledging both the act and its absurdity. The word contains its own gentle mockery. Perhaps that's why it spread so fast: it lets us document ourselves while pretending not to take it too seriously."
  },
  {
    slug: "spam",
    word: "SPAM",
    romanization: "spam",
    language: "English (brand name)",
    hook: "Canned meat became unwanted email—because of a Monty Python sketch about Vikings.",
    story: [
      "In 1937, Hormel Foods introduced a canned precooked meat product. The name SPAM was coined by actor Kenneth Daigneau, who won $100 in a naming contest. The exact meaning remains debated—'Spiced Ham' and 'Shoulder of Pork and Ham' are popular theories, but Hormel has never officially confirmed. The product became famous during World War II, feeding Allied troops across the globe.",
      "The word's transformation began in 1970 with Monty Python's Flying Circus. Their 'Spam sketch' featured a cafe where every dish contained Spam, while Vikings drowned out conversation by chanting 'Spam, spam, spam, spam...' The sketch satirized the inescapable, repetitive nature of something unwanted—Spam was everywhere, overwhelming, impossible to avoid.",
      "In the 1980s, early internet users on MUDs (Multi-User Dungeons) began using 'spam' for repetitive, disruptive messages—often literally typing 'SPAM SPAM SPAM' in reference to the sketch. The term spread to Usenet newsgroups, then to email. By the 1990s, spam meant any unwanted bulk electronic message. Hormel Foods, despite initial discomfort, eventually accepted the dual meaning.",
      "Today the lowercase spam (unwanted messages) is far more commonly used than the uppercase SPAM (canned meat). The brand name that fed armies became the word for digital pollution. Monty Python's absurdist comedy created a permanent link between a Minnesota meat product and the plague of unsolicited email."
    ],
    journey: [
      { location: "Minnesota, USA", period: "1937", form: "SPAM", context: "Hormel introduces canned meat product", color: "#c41e3a", coordinates: [-93.1, 44] },
      { location: "Global", period: "1940s", form: "Spam", context: "Product feeds WWII troops worldwide", color: "#4a5568", coordinates: [0, 51.5] },
      { location: "BBC, UK", period: "1970", form: "spam", context: "Monty Python sketch creates cultural reference", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Internet", period: "1980s-90s", form: "spam", context: "Term adopted for unwanted messages", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "present", form: "spam", context: "Universal term for junk email", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Original brand", ipa: "/spæm/", text: "SPAM", lang: "en" },
      { label: "Modern (email)", ipa: "/spæm/", text: "spam", lang: "en" },
      { label: "Verb form", ipa: "/spæm/", text: "to spam", lang: "en" }
    ],
    relatives: [
      { word: "phishing", language: "English", connection: "another food-inspired cybersecurity term", available: false },
      { word: "ham", language: "English", connection: "legitimate email—opposite of spam in tech slang", available: false },
      { word: "meme", language: "English", connection: "another word transformed by internet culture", available: true, slug: "meme" },
      { word: "viral", language: "Latin/English", connection: "another biological metaphor for digital spread", available: false }
    ],
    meaningNow: "Spam traces an unlikely path from corporate branding through surrealist comedy to cybersecurity terminology. The journey reveals how meaning accumulates through cultural references rather than logical derivation. There's no inherent connection between canned meat and junk email—except for one BBC sketch that made the connection unforgettable.\n\nHormel Foods faced an impossible situation: their trademark had been repurposed to mean something annoying. They eventually embraced it, asking only that the meat product be capitalized (SPAM) while the email type use lowercase (spam). It's a remarkable case of a company accepting that culture had outgrown their control of a word they invented."
  },
  {
    slug: "twerk",
    word: "twerk",
    romanization: "twerk",
    language: "English (possibly from Wolof)",
    hook: "An ancient dance move emerged from West African traditions through Black American culture—then sparked moral panic when a pop star performed it on television.",
    story: [
      "Dances involving rhythmic hip and buttock movements have deep roots in West African cultures, where such movements carried spiritual and celebratory significance. Some linguists trace 'twerk' to the Wolof word 'degu' (to shake or vibrate), though the etymology remains debated. What's certain is that the dance traditions brought by enslaved Africans survived and evolved in the Americas, particularly in New Orleans and the broader Gulf Coast.",
      "The word 'twerk' appeared in New Orleans bounce music culture by at least the early 1990s. DJ Jubilee's 1993 track 'Do the Jubilee All' includes the instruction to 'twerk baby.' The dance and the word were integral to bounce—a regional hip-hop style known for call-and-response, repetitive beats, and celebratory, body-positive dancing. For decades, twerking thrived in Black communities largely unnoticed by mainstream media.",
      "The word exploded into mainstream awareness in 2013 when Miley Cyrus performed twerking at the MTV Video Music Awards. The performance sparked immediate controversy and introduced millions to both the word and the dance. Oxford Dictionaries added 'twerk' that same year. But the sudden visibility came with erasure: mainstream coverage often ignored the dance's long history and cultural significance.",
      "The twerk controversy reflected deeper tensions about Black cultural expression, appropriation, and respectability politics. Critics argued that white performers profited from Black dance traditions while Black practitioners faced judgment for the same movements. The word's journey from Wolof villages to New Orleans bounce to global pop culture carries this complicated legacy."
    ],
    journey: [
      { location: "West Africa", period: "ancient", form: "traditional dances", context: "Hip-movement dances in Wolof and other cultures", color: "#8b5a2b", coordinates: [-16.5, 14.7] },
      { location: "New Orleans", period: "1800s-1900s", form: "bounce dance", context: "African dance traditions evolve in diaspora", color: "#8b5a2b", coordinates: [-90.1, 30] },
      { location: "New Orleans", period: "1990s", form: "twerk", script: "twerk", context: "Word appears in bounce music culture", color: "#c41e3a", coordinates: [-90.1, 30] },
      { location: "MTV VMAs", period: "2013", form: "twerk", context: "Mainstream explosion after Miley Cyrus performance", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "twerk", context: "Internationally known dance and word", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "American English", ipa: "/twɜːrk/", text: "twerk", lang: "en-US" },
      { label: "Possible Wolof origin", ipa: "/degu/", text: "degu", lang: "wo" },
      { label: "British English", ipa: "/twɜːk/", text: "twerk", lang: "en-GB" }
    ],
    relatives: [
      { word: "bounce", language: "English", connection: "New Orleans music genre where twerk emerged", available: false },
      { word: "jazz", language: "disputed/African", connection: "another word tracing African American musical innovation", available: true, slug: "jazz" },
      { word: "mapouka", language: "Ivorian", connection: "similar West African dance tradition", available: false },
      { word: "booty", language: "English", connection: "related slang often used with twerking", available: false }
    ],
    meaningNow: "Twerk's journey reveals patterns in how Black cultural innovations enter the mainstream. The dance existed for decades—celebrated in its communities, ignored by outsiders—until a white performer brought it to a wider audience. Then the word entered dictionaries while debates raged about appropriation, authenticity, and who profits from Black creativity.\n\nThe etymology matters because it connects contemporary dance to centuries of tradition. Twerking isn't just a provocative move; it descends from West African dances that enslaved people carried across the Atlantic and preserved against all odds. When we understand that history, we see twerking differently—not as moral scandal but as cultural survival, not as novelty but as continuity. The word carries that history, whether mainstream culture acknowledges it or not."
  },
  {
    slug: "klong",
    word: "คลอง",
    romanization: "khlong",
    language: "Thai",
    hook: "Before roads ruled Bangkok, canals were its streets—and the Thai word for waterway names a city's watery past.",
    story: [
      "Bangkok was built on water. When King Rama I established his capital in 1782, he chose a site in the Chao Phraya River delta, creating a city threaded with natural waterways and artificial canals. In Thai, these channels are called khlong (คลอง). For over a century, khlongs were Bangkok's primary transportation network—the city's veins, carrying people, goods, and life itself.",
      "Early European visitors called Bangkok the 'Venice of the East.' The comparison was apt: residents traveled by boat, markets floated on the water, houses lined canal banks on stilts. The khlong system wasn't just transportation—it was agriculture, drainage, commerce, and community. Life oriented toward the water because the water was the way.",
      "Modernization transformed the city. Beginning in the late 19th century and accelerating through the 20th, khlongs were filled in to create roads. The city that once floated began to drive. Today most of Bangkok's original canal network has disappeared under asphalt. The remaining khlongs struggle with pollution and neglect, though some still host floating markets and serve as flood drainage.",
      "The word khlong survives in place names throughout Bangkok—Khlong Toei, Khlong San, Khlong Saen Saep—preserving the memory of waterways even where canals no longer exist. English speakers often spell it 'klong,' dropping the aspirated 'kh' that Thai distinguishes. The word has entered travel writing and urban studies as scholars examine Bangkok's transformation from water city to traffic-choked metropolis."
    ],
    journey: [
      { location: "Thailand", period: "ancient", form: "คลอง", script: "คลอง", context: "Thai word for canal or waterway", color: "#2d4a3b", coordinates: [100.5, 13.8] },
      { location: "Bangkok", period: "1782", form: "khlong", context: "Canal-based capital established", color: "#2d4a3b", coordinates: [100.5, 13.8] },
      { location: "Bangkok", period: "1850s", form: "klong/khlong", context: "Europeans document 'Venice of the East'", color: "#4a7c7c", coordinates: [100.5, 13.8] },
      { location: "Bangkok", period: "1900s", form: "khlong", context: "Canals filled for roads; word preserves memory", color: "#4a5568", coordinates: [100.5, 13.8] },
      { location: "Global", period: "present", form: "klong", context: "Enters English in travel and urban studies", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Thai", ipa: "/kʰlɔːŋ/", text: "คลอง", lang: "th" },
      { label: "English approximation", ipa: "/klɒŋ/", text: "klong", lang: "en" },
      { label: "Thai (aspirated)", ipa: "/kʰlɔːŋ˧/", text: "khlong", lang: "th" }
    ],
    relatives: [
      { word: "tuk-tuk", language: "Thai", connection: "another Thai word for urban transportation", available: true, slug: "tuk-tuk" },
      { word: "canal", language: "Latin/Italian", connection: "the European equivalent concept", available: false },
      { word: "sampan", language: "Chinese", connection: "boat type used on khlongs", available: false },
      { word: "wai", language: "Thai", connection: "Thai cultural term increasingly known internationally", available: false }
    ],
    meaningNow: "Klong tells the story of a city's transformation. The word survives in place names and tourist attractions while the waterways themselves disappeared beneath roads and buildings. Bangkok traded its canals for traffic, its boats for cars—and now faces flooding that the khlong system once managed.\n\nThe word has gained new relevance as climate change and urban flooding make water management critical. Planners study Bangkok's original khlong network, asking whether the water city can return. Some surviving khlongs are being restored; new ones are proposed for flood control. The Thai word for canal may yet name Bangkok's future as well as its past."
  },
  {
    slug: "amah",
    word: "阿媽",
    romanization: "amah",
    language: "Cantonese/Portuguese",
    hook: "The word for mother became the word for servant—a linguistic twist that reveals colonialism's transformation of intimate relationships.",
    story: [
      "In Cantonese, 阿媽 (aa3 maa1) means mother or grandmother—a term of familial intimacy and respect. Portuguese colonizers in Macau encountered this word and began applying it to the local women they employed as domestic servants and nursemaids. The term of endearment became a job title. What was intimate became institutional.",
      "The usage spread throughout Portuguese and then British colonial Asia. In Hong Kong, Singapore, and Malaya, amah came to mean a Chinese female domestic worker, particularly one who cared for children. The amahs occupied a strange position: intimately involved in raising colonial children, yet servants; using a word that meant 'mother' while being explicitly not mothers to those in their care.",
      "Some amahs formed their own remarkable tradition. The 'black and white' amahs of Singapore—named for their distinctive uniform—often took vows of celibacy, formed sisterhoods, and built independent lives through their labor. They sent remittances home, supported each other in old age, and maintained their dignity within a system designed to subordinate them.",
      "Today the word amah persists in Southeast Asian English, though domestic workers now come from the Philippines, Indonesia, and elsewhere. The term carries its colonial weight: a mother's name given to women who raised other people's children, who performed maternal labor for wages. The word's journey from endearment to employment status traces how colonialism restructured the most basic human relationships."
    ],
    journey: [
      { location: "Guangdong, China", period: "ancient", form: "阿媽", script: "阿媽", context: "Cantonese word for mother/grandmother", color: "#2d4a3b", coordinates: [113.3, 23.1] },
      { location: "Macau", period: "1550s", form: "amah", context: "Portuguese apply term to domestic servants", color: "#4a7c7c", coordinates: [113.5, 22.2] },
      { location: "Hong Kong", period: "1840s+", form: "amah", context: "British colonialism spreads the usage", color: "#4a5568", coordinates: [114.2, 22.3] },
      { location: "Singapore/Malaya", period: "1900s", form: "amah", context: "'Black and white' amah tradition develops", color: "#8b5a2b", coordinates: [103.8, 1.3] },
      { location: "Southeast Asia", period: "present", form: "amah", context: "Word persists for domestic helpers", coordinates: [103.8, 1.3] }
    ],
    sounds: [
      { label: "Cantonese", ipa: "/aː˧ maː˥/", text: "阿媽", lang: "yue" },
      { label: "Portuguese colonial", ipa: "/ɐˈmɐ/", text: "amah", lang: "pt" },
      { label: "English (SEA)", ipa: "/ˈɑː.mə/", text: "amah", lang: "en" }
    ],
    relatives: [
      { word: "ayah", language: "Hindi/Portuguese", connection: "similar term for nursemaid in South Asia", available: false },
      { word: "mama", language: "universal", connection: "the near-universal word for mother this derives from", available: false },
      { word: "tofu", language: "Chinese", connection: "another Chinese word transformed through colonial contact", available: true, slug: "tofu" },
      { word: "nanny", language: "English", connection: "Western equivalent role, different etymology", available: false }
    ],
    meaningNow: "Amah encapsulates the contradictions of colonial domestic labor. Women called 'mother' who weren't treated as mothers; intimate labor performed by those kept at social distance; the word for family applied to the carefully maintained separation of families.\n\nThe term survives today, though debates continue about its appropriateness. For some, it carries too much colonial baggage. For others, it honors the generations of women who raised families not their own with skill and care. The word's future depends on how we reckon with its past—whether we can use a mother's name while acknowledging the power structures that twisted its meaning."
  },
  {
    slug: "karate",
    word: "空手",
    romanization: "karate",
    language: "Japanese",
    hook: "The 'empty hand' art was born from necessity—Okinawan peasants forbidden weapons turned their bodies into defenses.",
    story: [
      "The characters 空手 literally mean 'empty hand'—kara (空, empty) and te (手, hand). But the word contains hidden history. Originally, Okinawan martial arts were written as 唐手 (also pronounced 'karate'), meaning 'China hand,' acknowledging the influence of Chinese martial arts. In the 1930s, as Japanese nationalism intensified, Okinawan masters changed the first character from 唐 (China) to 空 (empty), distancing the art from China while keeping the pronunciation.",
      "Karate developed in Okinawa, the Ryukyu Islands kingdom that maintained independence until Japanese annexation in 1879. Legend holds that when Japanese rulers banned weapons, Okinawans developed unarmed combat out of necessity. Whether literally true or not, karate did emerge from a culture under foreign domination, created by people denied conventional means of defense.",
      "The art reached mainland Japan in the early 20th century, introduced by Okinawan masters like Funakoshi Gichin. Japanese martial arts culture systematized karate into schools (styles), ranks (the colored belt system), and kata (formal exercises). What had been village self-defense became codified art, then international sport.",
      "After World War II, American servicemen stationed in Japan and Okinawa brought karate home. Dojos opened in American cities; Hollywood featured karate in action films; children enrolled in after-school classes. The word entered English dictionaries. The empty hand had become a global brand."
    ],
    journey: [
      { location: "Okinawa", period: "1400s-1800s", form: "唐手", script: "唐手", context: "Martial arts develop under Chinese influence", color: "#c41e3a", coordinates: [127.7, 26.2] },
      { location: "Okinawa", period: "1800s", form: "tī/te", context: "Local fighting arts called simply 'hand'", color: "#c41e3a", coordinates: [127.7, 26.2] },
      { location: "Japan", period: "1920s-30s", form: "空手", script: "空手", context: "Character changed, art systematized", color: "#c41e3a", coordinates: [139.7, 35.7] },
      { location: "United States", period: "1950s-60s", form: "karate", context: "American servicemen bring art home", color: "#4a5568", coordinates: [-118.2, 34.1] },
      { location: "Global", period: "present", form: "karate", context: "Olympic sport, practiced worldwide", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Japanese", ipa: "/kaɾate/", text: "空手", lang: "ja" },
      { label: "Okinawan", ipa: "/kaɾati/", text: "空手", lang: "ryu" },
      { label: "English", ipa: "/kəˈrɑː.ti/", text: "karate", lang: "en" }
    ],
    relatives: [
      { word: "kung fu", language: "Chinese", connection: "Chinese martial arts that influenced karate's development", available: true, slug: "kung-fu" },
      { word: "judo", language: "Japanese", connection: "another Japanese martial art that went global", available: false },
      { word: "dojo", language: "Japanese", connection: "training hall—another martial arts word in English", available: false },
      { word: "emoji", language: "Japanese", connection: "another Japanese compound entering English unchanged", available: true, slug: "emoji" }
    ],
    meaningNow: "Karate's etymology contains both erasure and reinvention. The character change from 'China hand' to 'empty hand' served Japanese nationalism but also reflected Okinawa's complex identity—neither fully Japanese nor Chinese, forging its own culture from multiple influences.\n\nToday karate is practiced by millions worldwide. It became an Olympic sport in 2020, the empty hand filling stadiums. But debates continue about what's been lost in systematization and internationalization. The village art developed by Okinawan peasants defending themselves against samurai became points-based competition governed by international federations. The word 'empty hand' remains, but what that hand contains keeps changing."
  },
  {
    slug: "kimchi",
    word: "김치",
    romanization: "gimchi",
    language: "Korean",
    hook: "Fermented cabbage became national identity—a word that tastes like Korea itself.",
    story: [
      "The word 김치 (gimchi) may derive from 침채 (chimchae, 'soaked vegetables') in older Korean. The dish itself predates the word by centuries—Koreans have been fermenting vegetables since at least the Three Kingdoms period (37 BCE - 668 CE). But what we recognize as modern kimchi, with its characteristic red chili pepper color, dates only to the late 18th century, after Portuguese traders introduced chili peppers to East Asia.",
      "Kimchi isn't one dish but a category: over 200 varieties exist, varying by region, season, and ingredient. While baechu-kimchi (napa cabbage kimchi) dominates internationally, Koreans make kimchi from radishes, cucumbers, green onions, and countless other vegetables. Each family has recipes passed down through generations. The annual kimjang (communal kimchi-making) is a cultural institution.",
      "The word's international journey accelerated in the late 20th century. Korean immigration, the Korean Wave (Hallyu) of pop culture, and growing interest in fermented foods brought kimchi to global attention. In 2001, the Codex Alimentarius (international food standards body) recognized kimchi, partly resolving disputes with Japan over whether Japanese 'kimuchi' was the same food.",
      "In 2013, UNESCO inscribed kimjang—the communal practice of making and sharing kimchi—as Intangible Cultural Heritage of Humanity. The recognition wasn't for the food alone but for what it represents: Korean identity, community bonds, the transmission of knowledge across generations. A pickled cabbage became a symbol of cultural survival."
    ],
    journey: [
      { location: "Korea", period: "ancient", form: "침채/지", script: "沈菜/漬", context: "Early vegetable fermentation practices", color: "#c41e3a", coordinates: [126.9, 37.5] },
      { location: "Korea", period: "1700s", form: "김치", script: "김치", context: "Chili peppers create modern kimchi", color: "#c41e3a", coordinates: [126.9, 37.5] },
      { location: "Korea", period: "1900s", form: "kimchi", context: "Standardized romanization develops", color: "#c41e3a", coordinates: [126.9, 37.5] },
      { location: "Global", period: "1990s+", form: "kimchi", context: "Korean Wave spreads food and word", color: "#4a5568", coordinates: [-118.2, 34.1] },
      { location: "UNESCO", period: "2013", form: "kimchi", context: "Kimjang recognized as cultural heritage", coordinates: [2.3, 48.9] }
    ],
    sounds: [
      { label: "Korean", ipa: "/kim.tɕʰi/", text: "김치", lang: "ko" },
      { label: "English", ipa: "/ˈkɪm.tʃi/", text: "kimchi", lang: "en" },
      { label: "Japanese", ipa: "/kimɯtɕi/", text: "キムチ", lang: "ja" }
    ],
    relatives: [
      { word: "sauerkraut", language: "German", connection: "European fermented cabbage tradition", available: false },
      { word: "tofu", language: "Chinese", connection: "another East Asian food word gone global", available: true, slug: "tofu" },
      { word: "gochujang", language: "Korean", connection: "chili paste often paired with kimchi", available: false },
      { word: "hallyu", language: "Korean", connection: "Korean Wave that spread kimchi globally", available: false }
    ],
    meaningNow: "Kimchi demonstrates how food can carry national identity. For Koreans, it's not just nutrition—it's history, family, home. The dish survived Japanese colonial attempts to suppress Korean culture; it accompanied immigrants to new countries; it appears at every Korean meal, breakfast through dinner.\n\nThe word's global spread raises familiar questions about authenticity and ownership. Is mass-produced, pasteurized kimchi sold in supermarkets the same food as grandmother's recipe fermented in earthenware jars? Can a dish be Korean when made in Kansas? The word travels more easily than the traditions it names. But that gap between the word and the practice is precisely where cultural negotiation happens—and where kimchi remains not just food but identity."
  }
];
