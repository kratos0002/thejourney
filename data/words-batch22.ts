import type { Word } from "./word-types";

export const batch22: Word[] = [
  {
    slug: "juggernaut",
    word: "जगन्नाथ",
    romanization: "Jagannāth",
    language: "Sanskrit/Odia",
    hook: "A Hindu god's chariot procession became English for any unstoppable force.",
    story: [
      "In the sacred city of Puri, on India's eastern coast, the annual Rath Yatra festival draws millions of devotees. Enormous wooden chariots—some over forty feet tall—carry the deity Jagannāth ('Lord of the Universe,' from Sanskrit jagat 'world' + nātha 'lord') through the streets. The chariots are so massive they require thousands of people to pull them.",
      "European travelers in the 14th century witnessed these processions and were staggered by their scale. Some wrote exaggerated or fabricated accounts claiming that devotees threw themselves under the chariot's wheels as sacrificial offerings. These stories were largely colonial myth, but they spread across Europe and shaped the English word.",
      "By the 1600s, juggernaut had entered English meaning an enormous, crushing force that cannot be stopped—a thing that destroys everything in its path. The religious context was stripped away, leaving only the image of an unstoppable object rolling forward without regard for what lies beneath.",
      "The original Jagannāth—a beloved, benevolent deity worshipped with joy and devotion—was transformed by colonial misunderstanding into a metaphor for blind, destructive power. The word English speakers use bears almost no resemblance to what Odia devotees experience at Puri."
    ],
    journey: [
      { location: "Puri", period: "~1000 CE", form: "Jagannāth", script: "ଜଗନ୍ନାଥ", context: "Odia deity Lord of the Universe Rath Yatra", color: "#9b4a2c", coordinates: [85.8, 19.8] },
      { location: "Puri", period: "1300s", form: "Jagannāth", context: "European travelers witness chariot festival", color: "#9b4a2c", coordinates: [85.8, 19.8] },
      { location: "London", period: "1600s", form: "juggernaut", script: "juggernaut", context: "Enters English as unstoppable crushing force", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Britain", period: "1800s", form: "juggernaut", context: "British colonial writings reinforce the myth", color: "#4a5568", coordinates: [-1.5, 52.5] },
      { location: "Global", period: "present", form: "juggernaut", context: "Metaphor for any unstoppable powerful entity", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Odia/Sanskrit", ipa: "/dʒə.ɡən.naːtʰ/", text: "जगन्नाथ", lang: "hi" },
      { label: "English", ipa: "/ˈdʒʌɡ.ə.nɔːt/", text: "juggernaut", lang: "en" }
    ],
    relatives: [
      { word: "avatar", language: "English", connection: "from Sanskrit avatāra—another Hindu concept reshaped by English", available: true, slug: "avatar" },
      { word: "karma", language: "English", connection: "another Sanskrit philosophical term simplified in English", available: true, slug: "karma" },
      { word: "guru", language: "English", connection: "Sanskrit spiritual concept that shifted meaning in English", available: true, slug: "guru" },
      { word: "thug", language: "English", connection: "another Indian word distorted by colonial narratives", available: true, slug: "thug" }
    ],
    meaningNow: "Every time a sports commentator calls a team 'a juggernaut' or a headline describes a company as 'an unstoppable juggernaut,' they're unknowingly referencing a joyful Hindu festival—filtered through centuries of colonial misrepresentation.\n\nIn Puri, the Rath Yatra continues every year, unchanged. The chariots roll, the devotees sing, and the Lord of the Universe makes his annual journey through the streets. The English word has nothing to do with this reality. It never did."
  },
  {
    slug: "raccoon",
    word: "ärähkun",
    romanization: "ärähkun",
    language: "Powhatan (Algonquian)",
    hook: "The animal that washes its food taught English colonists a word—and the colonists destroyed the people who spoke it.",
    story: [
      "When English colonists arrived in Virginia in 1607, they encountered an animal they'd never seen: a clever, masked creature that appeared to wash its food before eating. The Powhatan people—an Algonquian-speaking confederacy—called it ärähkun or aroughcun, meaning 'one who scratches with its hands.'",
      "Captain John Smith recorded the word in 1608, spelling it variously as aroughcun and raugroughcun. The colonists couldn't quite capture the Algonquian sounds in English letters, and the word was squeezed and shortened over decades until it became raccoon by the mid-1600s.",
      "The Powhatan language—part of the Virginia Algonquian family—is now extinct. The people who named the raccoon were devastated by disease, war, and displacement within a century of English contact. But their word survived, embedded in a language that helped destroy theirs.",
      "Raccoon is one of hundreds of English words borrowed from Algonquian languages—alongside moose, skunk, opossum, moccasin, and tomahawk. These words are often the only surviving traces of languages that were spoken for thousands of years before European contact."
    ],
    journey: [
      { location: "Virginia", period: "pre-1607", form: "ärähkun", context: "Powhatan Algonquian one who scratches with hands", color: "#2d4a3b", coordinates: [-76.6, 37.5] },
      { location: "Jamestown", period: "1608", form: "aroughcun", context: "John Smith records the Powhatan word", color: "#2d4a3b", coordinates: [-76.8, 37.2] },
      { location: "Virginia Colony", period: "1650s", form: "raccoon", script: "raccoon", context: "Anglicized shortened form", color: "#4a5568", coordinates: [-77.4, 37.5] },
      { location: "North America", period: "1700s+", form: "raccoon", context: "Spreads across American English", color: "#4a5568", coordinates: [-84, 39.8] },
      { location: "Global", period: "present", form: "raccoon", context: "Known worldwide via American media", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Powhatan (reconstructed)", ipa: "/aːɾæhkun/", text: "ärähkun", lang: "en" },
      { label: "English", ipa: "/ɹəˈkuːn/", text: "raccoon", lang: "en" }
    ],
    relatives: [
      { word: "opossum", language: "English", connection: "from Powhatan apassum—another Virginia Algonquian animal name", available: false },
      { word: "moose", language: "English", connection: "from Eastern Abenaki moz—Algonquian language family", available: false },
      { word: "canoe", language: "English", connection: "another Indigenous American word absorbed into English", available: true, slug: "canoe" },
      { word: "tomato", language: "English", connection: "from Nahuatl—another Indigenous American language contribution", available: true, slug: "tomato" }
    ],
    meaningNow: "The raccoon has become a symbol of urban adaptability—raiding trash cans, living in attics, thriving alongside humans. The animal adapted. The language that named it did not.\n\nEvery time someone says 'raccoon,' they're speaking a word from a language that no longer exists, naming an animal for a behavior that no one remembers noticing first. The Powhatan saw the scratching hands. English kept only the sound."
  },
  {
    slug: "taffeta",
    word: "تافته",
    romanization: "tāfta",
    language: "Persian",
    hook: "Persian weavers named their finest cloth 'twisted'—and the word rustled through every court in Europe.",
    story: [
      "In Persian, tāftan means 'to twist' or 'to spin,' and tāfta is the past participle: 'twisted' or 'woven.' The name described the technique—a tight, plain weave that produced a crisp, shimmering fabric with a distinctive rustle. Persian weavers had perfected this technique for centuries, producing tāfta that was traded from Isfahan to Beijing.",
      "The fabric and its name traveled the Silk Road in both directions. Italian merchants in the medieval Mediterranean encountered it and borrowed the word as taffetà. French adopted it as taffetas. By the 1300s, taffeta was the luxury fabric of European courts—used for gowns, linings, and the elaborate costumes of the ruling class.",
      "Shakespeare mentions taffeta repeatedly. In Love's Labour's Lost, he mocks 'taffeta phrases' and 'silken terms'—using the fabric as a metaphor for speech that's pretty but insubstantial. The association stuck: taffeta meant luxury, but also a kind of showy superficiality.",
      "Today taffeta remains in use for formal gowns, wedding dresses, and eveningwear. The crisp rustle that Persian weavers built into the fabric—that sound of twisted threads moving against each other—is still its defining characteristic. You hear taffeta before you see it."
    ],
    journey: [
      { location: "Persia", period: "~500 CE", form: "tāfta", script: "تافته", context: "Persian weavers twisted plain-weave silk", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Baghdad", period: "800s", form: "tāfta", context: "Abbasid trade spreads fabric across Islamic world", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Venice", period: "1300s", form: "taffetà", script: "taffetà", context: "Italian merchants import to European courts", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "London", period: "1400s", form: "taffeta", script: "taffeta", context: "English courts Shakespeare references", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "taffeta", context: "Formal gowns wedding dresses eveningwear", coordinates: [2.3, 48.9] }
    ],
    sounds: [
      { label: "Persian", ipa: "/tɒːf.ˈtɒ/", text: "تافته", lang: "fa" },
      { label: "English", ipa: "/ˈtæf.ɪ.tə/", text: "taffeta", lang: "en" }
    ],
    relatives: [
      { word: "tabby", language: "English", connection: "another fabric word from the Islamic world", available: true, slug: "tabby" },
      { word: "khaki", language: "English", connection: "Persian/Urdu fabric word that entered English", available: true, slug: "khaki" },
      { word: "satin", language: "English", connection: "possibly from Zaytoun (Quanzhou)—another Silk Road fabric name", available: false }
    ],
    meaningNow: "Taffeta is a word you mostly encounter now at bridal shops and costume departments. It sounds old-fashioned—a relic of a more formal era.\n\nBut the fabric itself is timeless engineering: the tight twist that gives taffeta its body and its rustle is the same technique Persian weavers perfected over a millennium ago. The word just names what the hands already knew how to do."
  },
  {
    slug: "antenna",
    word: "antenna",
    romanization: "antenna",
    language: "Latin from Italian",
    hook: "A sailing ship's yardarm became an insect's feeler became the thing on your roof catching radio waves.",
    story: [
      "In Latin, antenna meant a sail-yard—the horizontal pole crossing a ship's mast from which sails hung. It was nautical vocabulary, nothing more. Roman sailors used the word for centuries without any hint of its future meanings.",
      "Then Italian naturalists in the 1600s needed a word for the sensory appendages on insects' heads—those thin, probing structures that feel the world. They chose antenna, because the feelers looked like the slender yard-arms of a sailing ship. A nautical term became a biological one.",
      "The third transformation came in 1895, when Guglielmo Marconi began his radio experiments in Bologna. The long metal rods he raised to transmit and receive electromagnetic waves resembled both insect antennae and ship's yards. Italian called them antenne. English borrowed the term directly.",
      "One Latin word now carries three entirely different meanings: a ship's spar, an insect's sensory organ, and a device for receiving electromagnetic signals. Each meaning arrived through a visual metaphor—someone saw a resemblance and extended the word. The sail-yard reaches into the wind; the insect's feeler reaches into the dark; the radio antenna reaches into the invisible spectrum."
    ],
    journey: [
      { location: "Rome", period: "~200 BCE", form: "antenna", script: "antenna", context: "Latin nautical term sail-yard crossbar on mast", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Italy", period: "1600s", form: "antenna", context: "Naturalists apply it to insect sensory organs", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Bologna", period: "1895", form: "antenna", context: "Marconi uses for radio transmission apparatus", color: "#5c5a4a", coordinates: [11.3, 44.5] },
      { location: "London", period: "1900s", form: "antenna", script: "antenna", context: "English adopts for radio and television receivers", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "antenna", context: "Wireless communication cellular networks", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Latin", ipa: "/anˈten.na/", text: "antenna", lang: "la" },
      { label: "Italian", ipa: "/anˈtɛn.na/", text: "antenna", lang: "it" },
      { label: "English", ipa: "/ænˈtɛn.ə/", text: "antenna", lang: "en" }
    ],
    relatives: [
      { word: "antler", language: "English", connection: "possibly from same root—ante 'before' + ocular 'eye'", available: false },
      { word: "radio", language: "English", connection: "from Latin radius—the technology antenna serves", available: false },
      { word: "wifi", language: "English", connection: "modern wireless that made physical antennas invisible", available: false }
    ],
    meaningNow: "We say someone 'has their antennae up' when they're alert and sensitive to signals—an insect metaphor applied to human perception applied to social awareness. The word keeps extending itself.\n\nYour phone has antennas you can't see. Insects have antennae you can. Roman ships had antennas you could climb. The same word, reaching in three different directions, catching three different kinds of signal."
  },
  {
    slug: "mortgage",
    word: "mort gage",
    romanization: "mort gage",
    language: "Old French",
    hook: "The word for your home loan literally means 'death pledge.'",
    story: [
      "In Old French, mort meant 'dead' and gage meant 'pledge.' A mort gage was a death pledge—not because failure to pay would kill you (though in earlier centuries, debtor's prison came close), but because the pledge itself 'died' one way or another. If you paid, the pledge died because the debt was fulfilled. If you failed, the pledge died because the property was forfeit.",
      "The term entered English law through the Norman Conquest. Anglo-Norman lawyers used mortgage to describe a specific kind of property arrangement: the borrower pledged land to the lender, who collected the rents until the debt was repaid. If the debt was never repaid, the land was lost forever—the pledge died.",
      "Sir Edward Coke, the great 17th-century English jurist, explained the term explicitly: 'It seemeth that the cause why it is called mortgage is, for that it is doubtful whether the feoffee will pay at the day limited... and if he doth not pay, then the land which is put in pledge upon condition for the payment of the money, is taken from him for ever, and so dead.'",
      "The legal instrument has transformed beyond recognition since medieval times—modern mortgages involve banks, interest rates, and 30-year payment schedules the Normans couldn't have imagined. But the name persists, still carrying its original grimness. Your mortgage is a death pledge, whether you know it or not."
    ],
    journey: [
      { location: "Normandy", period: "~1000 CE", form: "mort gage", context: "Old French legal term death pledge", color: "#4a5568", coordinates: [-0.4, 49.2] },
      { location: "London", period: "1100s", form: "mortgage", script: "mortgage", context: "Anglo-Norman law property pledge system", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "England", period: "1600s", form: "mortgage", context: "Coke's legal commentary codifies meaning", color: "#4a5568", coordinates: [-1.3, 51.8] },
      { location: "United States", period: "1930s", form: "mortgage", context: "Federal Housing Administration standardizes 30-year mortgage", color: "#4a5568", coordinates: [-77, 38.9] },
      { location: "Global", period: "present", form: "mortgage", context: "Universal home financing instrument", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Old French", ipa: "/mɔrt ɡaːʒ/", text: "mort gage", lang: "fr" },
      { label: "English", ipa: "/ˈmɔːɹ.ɡɪdʒ/", text: "mortgage", lang: "en" }
    ],
    relatives: [
      { word: "mortal", language: "English", connection: "from same Latin root mors—death", available: false },
      { word: "engage", language: "English", connection: "from same root gage—pledge", available: false },
      { word: "salary", language: "English", connection: "another financial word with a surprising literal meaning", available: true, slug: "salary" }
    ],
    meaningNow: "Nearly every homeowner in the developed world has a mortgage. It's the most normalized financial instrument in existence—so routine that the word has lost all its dark poetry.\n\nBut say it slowly: death pledge. You are pledging a portion of your life's earnings for decades in exchange for shelter. The medieval lawyers who coined the term understood something about debt that we've papered over with fixed rates and online portals. The pledge is still there. It still dies."
  },
  {
    slug: "tulip",
    word: "tülbend",
    romanization: "tülbend",
    language: "Ottoman Turkish from Persian",
    hook: "The flower that crashed an economy was named after a turban—and both words come from the same root.",
    story: [
      "In Persian, dulband meant turban—the wrapped headdress worn across the Islamic world. Ottoman Turkish borrowed it as tülbend. When European diplomats visited Constantinople in the 1500s, they admired the flowers that Ottoman courtiers wore tucked into their turbans. They asked what the flowers were called, and someone—perhaps misunderstanding the question—said tülbend, pointing at the turban.",
      "The Europeans took the word home, thinking it was the flower's name. French made it tulipe, English made it tulip. The flower already had a name in Turkish—lale (لاله), from Persian—but the misunderstanding was already spreading across Europe, and the wrong name stuck.",
      "Then came the mania. In the 1630s, the Dutch Republic went mad for tulips. At the peak of Tulip Mania in early 1637, single bulbs sold for more than ten times a skilled craftsman's annual income. Some bulbs traded for more than houses. Then the market collapsed in February 1637—one of history's first recorded speculative bubbles.",
      "The word turban and the word tulip are the same word, separated by a diplomatic misunderstanding. And both the fabric wrap and the flower share a visual logic: they fold in on themselves, layer over layer, unfurling from a central point."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "dulband", script: "دلبند", context: "Persian word for turban wrapped headdress", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Istanbul", period: "1500s", form: "tülbend", script: "تولبند", context: "Ottoman courtiers wear flowers in turbans", color: "#6b2d3d", coordinates: [29, 41] },
      { location: "Vienna", period: "1554", form: "tulipa", context: "Habsburg ambassador Busbecq brings bulbs and word to Europe", color: "#5c5a4a", coordinates: [16.4, 48.2] },
      { location: "Amsterdam", period: "1630s", form: "tulp", script: "tulp", context: "Tulip Mania first speculative bubble", color: "#4a5568", coordinates: [4.9, 52.4] },
      { location: "Global", period: "present", form: "tulip", context: "Netherlands national symbol spring flower worldwide", coordinates: [4.9, 52.4] }
    ],
    sounds: [
      { label: "Ottoman Turkish", ipa: "/tyl.bend/", text: "tülbend", lang: "tr" },
      { label: "Dutch", ipa: "/tʏlp/", text: "tulp", lang: "nl" },
      { label: "English", ipa: "/ˈtjuː.lɪp/", text: "tulip", lang: "en" }
    ],
    relatives: [
      { word: "turban", language: "English", connection: "same Persian root dulband—the fabric wrap", available: false },
      { word: "tulip", language: "Dutch", connection: "tulp—center of Tulip Mania 1637", available: false },
      { word: "lemon", language: "English", connection: "another word that traveled Persian to European via trade", available: true, slug: "lemon" },
      { word: "kiosk", language: "English", connection: "another Ottoman Turkish word adopted through European contact", available: true, slug: "kiosk" }
    ],
    meaningNow: "Tulip Mania remains history's most famous speculative bubble—referenced every time Bitcoin spikes or tech stocks crash. The flower that was named by accident became a cautionary tale about irrational markets.\n\nBut the tulip itself is innocent. It's still the Netherlands' national symbol, still blooms every spring in neat Dutch rows, still carries the ghost of a Persian turban in its name and in its shape—petals folding inward like silk wrapped around a head."
  },
  {
    slug: "giraffe",
    word: "زرافة",
    romanization: "zarāfa",
    language: "Arabic",
    hook: "Medieval Europeans thought it was half-camel, half-leopard—and borrowed its name from the Arabic for 'fast walker.'",
    story: [
      "Arabic speakers called the animal zarāfa (زرافة), likely meaning 'fast walker' or possibly derived from an earlier African language. The giraffe was well known in the Islamic world—caliphs and sultans kept them as exotic court animals, and they appeared in Arabic natural history texts for centuries before Europeans encountered them.",
      "When the Medici received a giraffe as a diplomatic gift from the Mamluk Sultan of Egypt in 1486, Florence was stunned. Europeans had vague classical references to the animal—Pliny called it camelopardalis, 'camel-leopard,' believing it was a hybrid—but most had never seen one. The Arabic name arrived with the animal: Italian adapted zarāfa into giraffa.",
      "The giraffe caused a sensation wherever it appeared in Europe. Lorenzo de' Medici paraded his through the streets of Florence. In 1827, a giraffe sent from Egypt to King Charles X of France walked from Marseille to Paris, drawing massive crowds at every stop along the 550-mile route.",
      "English borrowed giraffe from French in the 1590s. The older Latinate name camelopard survived in scientific nomenclature—the giraffe's species name is still Giraffa camelopardalis—but in everyday language, the Arabic name won completely."
    ],
    journey: [
      { location: "East Africa", period: "ancient", form: "unknown", context: "Native habitat possible African language origin", color: "#8b5a2b", coordinates: [37, -1.3] },
      { location: "Cairo", period: "~800 CE", form: "zarāfa", script: "زرافة", context: "Arabic natural history court animal diplomacy", color: "#4a3b6b", coordinates: [31.2, 30] },
      { location: "Florence", period: "1486", form: "giraffa", script: "giraffa", context: "Medici receive giraffe from Mamluk Sultan", color: "#5c5a4a", coordinates: [11.3, 43.8] },
      { location: "Paris", period: "1827", form: "girafe", script: "girafe", context: "Egyptian gift walks from Marseille to Paris", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "giraffe", context: "Known worldwide children's favorite zoo animal", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/zaˈraːfa/", text: "زرافة", lang: "ar" },
      { label: "Italian", ipa: "/dʒiˈraf.fa/", text: "giraffa", lang: "it" },
      { label: "English", ipa: "/dʒɪˈɹɑːf/", text: "giraffe", lang: "en" }
    ],
    relatives: [
      { word: "camelopardalis", language: "Latin", connection: "Pliny's name—camel-leopard hybrid—still the species name", available: false },
      { word: "okapi", language: "English", connection: "the giraffe's only living relative discovered in 1901", available: true, slug: "okapi" },
      { word: "jaguar", language: "English", connection: "another animal whose name crossed from one continent's language to another's", available: true, slug: "jaguar" }
    ],
    meaningNow: "The giraffe is so familiar now—a children's toy, a zoo staple, an emoji—that it's hard to imagine the shock it caused in Renaissance Europe. An animal that shouldn't exist: too tall, too spotted, too strange.\n\nThe Arabic name survived because no European language had a word for this animal. They'd never needed one. Sometimes a word enters a language for the simplest reason: the thing it names just showed up."
  },
  {
    slug: "sapphire",
    word: "σάπφειρος",
    romanization: "sappheiros",
    language: "Greek from Hebrew/Sanskrit",
    hook: "A gemstone name that traveled from ancient India to King Solomon's throne—and nobody agrees on which stone it originally meant.",
    story: [
      "The word traces through Greek sappheiros (σάπφειρος) from Hebrew sappīr (סַפִּיר), which may derive from Sanskrit śanipriya ('dear to Saturn') or possibly from a Dravidian source. The ancient trail of the word mirrors the ancient trail of the gems themselves—from Sri Lankan and Indian mines through Middle Eastern trade routes to the Mediterranean.",
      "But here's the puzzle: the stone the ancients called sappheiros or sappīr was probably not what we call sapphire today. Most scholars believe the biblical sappīr—the stone said to adorn Solomon's throne and pave God's footstool in Exodus—was actually lapis lazuli, the deep blue stone from Afghanistan. True sapphire (a variety of corundum) wasn't clearly distinguished until the Roman period.",
      "The name jumped from one blue stone to another as trade expanded and mineralogy improved. Medieval Europeans applied sapphire specifically to the transparent blue corundum we know today. The stone became associated with royalty, clergy, and divine favor—cardinals wore sapphire rings, and the British Crown Jewels are studded with them.",
      "So the word sapphire names a stone it wasn't originally about, derives from a language nobody can agree on, and traveled a trade route that predates recorded history. The gem is transparent; its etymology is opaque."
    ],
    journey: [
      { location: "Sri Lanka", period: "ancient", form: "unknown", context: "Gem mining blue stones traded westward", color: "#2d4a6b", coordinates: [80.8, 7.9] },
      { location: "India", period: "~1000 BCE", form: "śanipriya", script: "शनिप्रिय", context: "Sanskrit dear to Saturn possible origin", color: "#2d4a6b", coordinates: [78, 25] },
      { location: "Jerusalem", period: "~900 BCE", form: "sappīr", script: "סַפִּיר", context: "Hebrew Bible Solomon's throne likely lapis lazuli", color: "#4a3b6b", coordinates: [35.2, 31.8] },
      { location: "Athens", period: "~300 BCE", form: "sappheiros", script: "σάπφειρος", context: "Greek adopted for blue gemstones", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Rome", period: "~100 CE", form: "sapphirus", context: "Latin distinguishes corundum from lapis", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Global", period: "present", form: "sapphire", context: "Precious gemstone royalty engagement rings", coordinates: [-0.1, 51.5] }
    ],
    sounds: [
      { label: "Hebrew", ipa: "/sap.piːr/", text: "סַפִּיר", lang: "he" },
      { label: "Ancient Greek", ipa: "/sáp.pʰeː.ros/", text: "σάπφειρος", lang: "el" },
      { label: "English", ipa: "/ˈsæf.aɪ.ə/", text: "sapphire", lang: "en" }
    ],
    relatives: [
      { word: "ruby", language: "English", connection: "from Latin rubeus red—another precious corundum just different color", available: false },
      { word: "lapis lazuli", language: "English", connection: "the stone sappīr probably originally meant", available: false },
      { word: "azure", language: "English", connection: "from Arabic/Persian lazaward—another blue stone word", available: true, slug: "azure" },
      { word: "diamond", language: "English", connection: "from Greek adamas—another ancient gemstone name", available: false }
    ],
    meaningNow: "Sapphire engagement rings became globally famous when Prince Charles gave one to Lady Diana in 1981. The same ring now sits on Kate Middleton's hand. A stone from Sri Lankan earth, named by a word from ancient India, set in British royal tradition.\n\nThe word itself did what the stone does—it caught light from every direction and refracted it into something that looks simple but isn't. Say 'sapphire' and you see blue. But the history behind the word is anything but transparent."
  },
  {
    slug: "flannel",
    word: "gwlanen",
    romanization: "gwlanen",
    language: "Welsh",
    hook: "One of the few Welsh words to conquer the world—a humble woolen cloth from the valleys.",
    story: [
      "Welsh is one of the oldest living languages in Europe, but it has contributed remarkably few words to English. Flannel is the notable exception. From Welsh gwlanen, derived from gwlân meaning 'wool,' flannel named the soft, napped woolen fabric that Welsh weavers produced in quantity from the Middle Ages onward.",
      "Wales had the perfect conditions for wool production: abundant sheep, wet climate for processing fiber, and a long weaving tradition. Gwlanen—soft, warm, affordable woolen cloth—was Wales's primary export for centuries. English adopted the word as flannel by the 1500s.",
      "Flannel became the fabric of the working class and the military. British soldiers' undergarments were flannel. Working men's shirts were flannel. The phrase 'flannel shirt' became shorthand for manual labor. When Welsh flannel mills industrialized in the 1700s, production soared and prices dropped, making warm clothing accessible to millions.",
      "In the late 20th century, flannel was reborn. Grunge musicians in Seattle wore flannel shirts ironically, then sincerely, then iconically. A Welsh woolen cloth became the uniform of Pacific Northwest counterculture. Kurt Cobain made gwlanen cool in a way medieval Welsh weavers could never have predicted."
    ],
    journey: [
      { location: "Wales", period: "~1300s", form: "gwlanen", context: "Welsh weavers soft napped woolen cloth", color: "#2d4a3b", coordinates: [-3.8, 52.1] },
      { location: "England", period: "1500s", form: "flannel", script: "flannel", context: "English adopts Welsh textile word", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "British Empire", period: "1700s", form: "flannel", context: "Military undergarments working class staple", color: "#4a5568", coordinates: [-3.2, 51.5] },
      { location: "Seattle", period: "1990s", form: "flannel", context: "Grunge movement iconic fabric", color: "#2d4a3b", coordinates: [-122.3, 47.6] },
      { location: "Global", period: "present", form: "flannel", context: "Fashion casual wear British slang for washcloth", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Welsh", ipa: "/ˈɡu̯laːnɛn/", text: "gwlanen", lang: "cy" },
      { label: "English", ipa: "/ˈflæn.əl/", text: "flannel", lang: "en" }
    ],
    relatives: [
      { word: "wool", language: "English", connection: "from Germanic—the material flannel is made from", available: false },
      { word: "tweed", language: "English", connection: "another British Isles fabric named for its origin region", available: false },
      { word: "khaki", language: "English", connection: "another fabric word that became cultural shorthand", available: true, slug: "khaki" },
      { word: "denim", language: "English", connection: "from French de Nîmes—another fabric named for where it was made", available: false }
    ],
    meaningNow: "In British English, flannel also means 'insincere talk'—to flannel someone is to sweet-talk them with empty words. The connection may be that flannel cloth is soft and woolly—like flattery.\n\nFrom Welsh sheep farms to Seattle stages to a British idiom for nonsense, flannel has lived many lives. It's one of the few words where Welsh—a language English has marginalized for centuries—snuck into the global vocabulary and stayed."
  },
  {
    slug: "zenith",
    word: "سمت",
    romanization: "samt ar-ra's",
    language: "Arabic",
    hook: "A medieval scribe's copying error turned an Arabic astronomical term into the English word for the highest point.",
    story: [
      "In Arabic, samt ar-ra's (سمت الرأس) means 'direction of the head'—the point in the sky directly above you. Arab astronomers used this precise term in their sophisticated celestial calculations. When their texts were translated into Medieval Latin, samt became cenit—but a scribe misread the 'm' as 'ni,' and the error became permanent.",
      "The mangled word entered Old Spanish as zenit, then Old French as cenith, and finally English as zenith. At each step, the word moved further from its Arabic original, but the meaning held steady: the highest point in the sky, the point directly overhead.",
      "Arab astronomers of the Islamic Golden Age—al-Battānī, al-Ṣūfī, Ibn al-Haytham—were the most advanced in the world from the 8th to the 14th centuries. European astronomy was built on translations of their work. Dozens of astronomical terms in English are Arabic: nadir, azimuth, almanac, and the names of most visible stars—Betelgeuse, Aldebaran, Rigel, Vega.",
      "Zenith eventually escaped astronomy entirely. By the 1600s, it meant any peak or highest point: the zenith of a career, the zenith of an empire. The astronomical precision was replaced by metaphorical grandeur. The point directly above your head became a way of saying 'as high as it gets.'"
    ],
    journey: [
      { location: "Baghdad", period: "~900 CE", form: "samt ar-ra's", script: "سمت الرأس", context: "Arabic astronomy direction of the head overhead point", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Toledo", period: "1100s", form: "cenit", script: "cenit", context: "Latin translation scribal error m becomes ni", color: "#5c5a4a", coordinates: [-4, 39.9] },
      { location: "Paris", period: "1300s", form: "cenith", script: "cenith", context: "Old French astronomical texts", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1380s", form: "zenith", script: "zenith", context: "Chaucer uses in Treatise on the Astrolabe", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "zenith", context: "Peak highest point metaphorical and astronomical", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/samt ar.raʔs/", text: "سمت الرأس", lang: "ar" },
      { label: "English", ipa: "/ˈzɛn.ɪθ/", text: "zenith", lang: "en" }
    ],
    relatives: [
      { word: "nadir", language: "English", connection: "from Arabic naẓīr—the opposite point directly below", available: true, slug: "nadir" },
      { word: "azimuth", language: "English", connection: "from Arabic as-sumūt—horizontal direction", available: false },
      { word: "algebra", language: "English", connection: "another Arabic scientific term that shaped Western knowledge", available: true, slug: "algebra" },
      { word: "zero", language: "English", connection: "from Arabic ṣifr—another mathematical gift", available: true, slug: "zero" }
    ],
    meaningNow: "Zenith endures as one of English's most elegant words—brief, sharp, and vertical. It sounds like what it means: a word that ends on a high note.\n\nBut it's also a monument to error. A scribe miscopied a letter, and the mistake became permanent. The Arabic samt ar-ra's is unrecognizable in zenith. Every time someone says they've reached the zenith of something, they're speaking a word shaped by a medieval typo that no one bothered to correct."
  }
];
