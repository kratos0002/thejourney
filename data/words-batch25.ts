import type { Word } from "./word-types";

export const batch25: Word[] = [
  {
    slug: "sabotage",
    word: "sabot",
    romanization: "sabot",
    language: "French",
    hook: "French workers threw their wooden shoes into the machinery—or so the legend goes. The truth is subtler, but the word stuck.",
    story: [
      "In French, a sabot is a wooden clog—the cheap, sturdy shoe of the working class. The word sabotage entered French in the 1890s meaning 'to work clumsily' or 'to bungle'—literally to clatter along in sabots like an unskilled worker. The connection was social: sabot-wearers were the poor, and their work was assumed to be crude.",
      "The popular legend claims that angry French workers threw their sabots into factory machines to break them during labor disputes. While this specific image is probably mythical, the association between sabotage and deliberate disruption of work hardened during the French labor struggles of the late 19th century. Syndicalists adopted sabotage as a legitimate tactic—not destroying machines, but working slowly, following rules to the letter, producing deliberately sloppy output.",
      "English borrowed sabotage during World War I, when it took on its modern meaning: deliberate destruction or disruption, especially of an enemy's equipment, infrastructure, or operations. The labor connotation faded; the espionage connotation took over. Saboteurs became the shadowy figures who blew up bridges and cut telegraph lines.",
      "The wooden shoe at the word's heart is now invisible. Nobody pictures clogs when they hear sabotage—they picture explosions, cyberattacks, or deliberate undermining. A word born from class contempt ('those clumsy clog-wearers') became a word for sophisticated destruction."
    ],
    journey: [
      { location: "France", period: "medieval", form: "sabot", script: "sabot", context: "French wooden clog working-class footwear", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "France", period: "1890s", form: "sabotage", script: "sabotage", context: "French labor movement deliberate work disruption", color: "#6b2d3d", coordinates: [2.3, 48.9] },
      { location: "London", period: "1910s", form: "sabotage", script: "sabotage", context: "English adoption via WWI espionage meaning", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "sabotage", context: "Deliberate destruction espionage cyberwarfare self-sabotage", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "French", ipa: "/sa.bo.taʒ/", text: "sabotage", lang: "fr" },
      { label: "English", ipa: "/ˈsæb.ə.tɑːʒ/", text: "sabotage", lang: "en" }
    ],
    relatives: [
      { word: "sabot", language: "French", connection: "wooden clog—the shoe that started it all", available: false },
      { word: "boycott", language: "English", connection: "from Captain Boycott—another protest tactic that became a word", available: false },
      { word: "embargo", language: "English", connection: "from Spanish—another word for deliberate economic disruption", available: true, slug: "embargo" }
    ],
    meaningNow: "Sabotage has found a new home in psychology: self-sabotage, the act of undermining your own success. The word has turned inward—from workers destroying factory machines to individuals destroying their own progress.\n\nThe wooden shoe is gone. The class warfare is gone. What remains is the essential action: breaking something that's working, whether it's a machine, a bridge, or your own life. The clumsy clog-wearer became the sophisticated spy became the therapist's diagnosis."
  },
  {
    slug: "quarantine",
    word: "quarantina",
    romanization: "quarantina",
    language: "Venetian Italian",
    hook: "Venice invented forty days of isolation to stop the plague—and gave the world a word we all learned to hate in 2020.",
    story: [
      "In 1377, the city of Ragusa (modern Dubrovnik) required ships to anchor offshore for thirty days—a trentina—before passengers could disembark, to prove they weren't carrying plague. Venice extended this to forty days: quaranta giorni, a quarantina. The number forty had biblical resonance—Jesus's forty days in the desert, the forty days of Lent—lending spiritual authority to a practical health measure.",
      "Venice had good reason for caution. The Black Death of 1347-1351 had killed roughly a third of Europe's population, and plague returned in waves for centuries. The quarantine was one of the first public health interventions in history—a recognition that disease could be contained by controlling human movement.",
      "The word spread with the practice. French adopted it as quarantaine, English as quarantine. The forty-day period was eventually abandoned in favor of disease-specific isolation periods, but the word stuck. By the 1800s, quarantine meant any period of isolation to prevent disease spread, regardless of duration.",
      "In 2020, the word became universally known in a way Venice's plague doctors never imagined. Billions of people experienced quarantine simultaneously. A 14th-century Venetian maritime regulation became the defining experience of a 21st-century pandemic."
    ],
    journey: [
      { location: "Ragusa", period: "1377", form: "trentina", context: "Dubrovnik thirty-day isolation ships plague prevention", color: "#5c5a4a", coordinates: [18.1, 42.6] },
      { location: "Venice", period: "1448", form: "quarantina", script: "quarantina", context: "Venice extends to forty days biblical resonance", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Paris", period: "1500s", form: "quarantaine", script: "quarantaine", context: "French adoption plague prevention spreads", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1660s", form: "quarantine", script: "quarantine", context: "English adoption Great Plague of London", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "2020", form: "quarantine", context: "COVID-19 pandemic universal experience", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Venetian Italian", ipa: "/kwa.ran.ˈti.na/", text: "quarantina", lang: "it" },
      { label: "English", ipa: "/ˈkwɒɹ.ən.tiːn/", text: "quarantine", lang: "en" }
    ],
    relatives: [
      { word: "quaranta", language: "Italian", connection: "forty—the number at the word's heart", available: false },
      { word: "Lent", language: "English", connection: "forty-day period—same biblical resonance", available: false },
      { word: "typhus", language: "English", connection: "another disease word with Greek origins", available: true, slug: "typhus" }
    ],
    meaningNow: "Before 2020, quarantine was a word most people associated with history books and zombie movies. Then it became everyone's daily reality—lockdowns, isolation periods, contact tracing.\n\nThe Venetian merchants who created the quarantina would recognize what happened: a port city, terrified of disease arriving by ship, controlling movement to buy time. The scale changed—from harbors to entire nations—but the logic didn't. Venice's forty days became the world's template for survival."
  },
  {
    slug: "pajamas",
    word: "पाजामा",
    romanization: "pāyjāma",
    language: "Hindi/Urdu from Persian",
    hook: "What Indians wore in public, the British took home and wore to bed.",
    story: [
      "In Persian, pāy means 'leg' and jāma means 'garment'—so pāyjāma is literally a 'leg-garment,' or loose trousers. In India, pajamas were everyday public clothing—comfortable, breathable trousers worn by men and women across the subcontinent, perfectly adapted to the climate.",
      "British colonists in India adopted pajamas for their own comfort, wearing them around the house and for sleeping in the tropical heat. When they returned to England, they brought the garments—and the word—with them. But in Britain's colder climate, pajamas shifted from daywear to sleepwear exclusively.",
      "By the late 1800s, pajamas in English meant clothing worn specifically for sleeping—the opposite of their function in India. The same garment that Indians wore to the market, the British wore to bed. The cultural translation inverted the purpose entirely.",
      "American English kept the spelling 'pajamas' while British English went with 'pyjamas'—a rare case where the American spelling is closer to the original Hindi/Persian. Both pronunciations drift further from the Hindi original with each generation."
    ],
    journey: [
      { location: "Persia", period: "ancient", form: "pāyjāma", script: "پایجامه", context: "Persian leg garment loose comfortable trousers", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "India", period: "~1600s", form: "pāyjāma", script: "पाजामा", context: "Hindi/Urdu everyday public clothing across subcontinent", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Calcutta", period: "1700s", form: "pajama", context: "British colonists adopt for casual and sleepwear", color: "#9b4a2c", coordinates: [88.4, 22.6] },
      { location: "London", period: "1800s", form: "pyjamas", script: "pyjamas", context: "British usage becomes exclusively sleepwear", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "pajamas", context: "Universal sleepwear loungewear", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Hindi/Urdu", ipa: "/paː.dʒaː.maː/", text: "पाजामा", lang: "hi" },
      { label: "American English", ipa: "/pəˈdʒɑː.məz/", text: "pajamas", lang: "en" },
      { label: "British English", ipa: "/pəˈdʒɑː.məz/", text: "pyjamas", lang: "en-GB" }
    ],
    relatives: [
      { word: "veranda", language: "English", connection: "another Indian comfort word adopted by colonists", available: true, slug: "veranda" },
      { word: "bungalow", language: "English", connection: "from Bengali—Indian domestic architecture word", available: true, slug: "bungalow" },
      { word: "khaki", language: "English", connection: "from Persian/Urdu—another Indian garment word", available: true, slug: "khaki" },
      { word: "shampoo", language: "English", connection: "from Hindi—another Indian domestic word colonists brought home", available: true, slug: "shampoo" }
    ],
    meaningNow: "The pandemic made pajamas socially acceptable in a way no fashion trend ever could. Working from home meant living in pajamas—the Indian public garment had finally returned to daytime use, four centuries after the British demoted it to bedtime.\n\nThe word carries a colonial irony: the British took something Indians wore proudly in public and made it private, intimate, slightly embarrassing. 'Still in your pajamas?' was a criticism. The original pāyjāma was never embarrassing. It was just what you wore."
  },
  {
    slug: "avatar",
    word: "अवतार",
    romanization: "avatāra",
    language: "Sanskrit",
    hook: "A Hindu god's earthly incarnation became your online profile picture.",
    story: [
      "In Sanskrit, avatāra (अवतार) means 'descent'—from ava ('down') and tṛ ('to cross over'). It describes the deliberate incarnation of a deity, particularly Vishnu, into earthly form. Hindu theology recognizes ten primary avatars of Vishnu: Matsya the fish, Kurma the tortoise, Rama, Krishna, and others—each descending to earth at a moment of cosmic crisis.",
      "The word entered English in the late 1700s through translations of Hindu texts, initially keeping its religious meaning. Writers used it to describe any incarnation or embodiment—an 'avatar of justice,' an 'avatar of evil.' The metaphorical extension was natural: if a god could descend into a mortal form, any abstract concept could manifest in a concrete one.",
      "The digital transformation came in 1985, when the online game Habitat used 'avatar' for the graphical representation of a user in virtual space. The parallel was deliberate: just as Vishnu descends into physical form to interact with the mortal world, you descend into digital form to interact with the virtual one.",
      "Neal Stephenson's novel Snow Crash (1992) popularized the term, and by the 2000s, avatar was standard vocabulary for any digital self-representation. When James Cameron chose the word for his 2009 film—about humans projecting consciousness into alien bodies—the circle was nearly complete: descent into another form, updated for science fiction."
    ],
    journey: [
      { location: "India", period: "~500 BCE", form: "avatāra", script: "अवतार", context: "Sanskrit divine descent Vishnu incarnations", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "London", period: "1784", form: "avatar", script: "avatar", context: "English translations of Hindu texts divine incarnation", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "San Francisco", period: "1985", form: "avatar", context: "Habitat online game digital representation", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "Global", period: "1992", form: "avatar", context: "Snow Crash novel popularizes virtual identity term", color: "#4a5568", coordinates: [-122, 47.6] },
      { location: "Global", period: "present", form: "avatar", context: "Digital identity profile picture virtual self", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/ə.ʋə.taː.rə/", text: "अवतार", lang: "hi" },
      { label: "English", ipa: "/ˈæv.ə.tɑːɹ/", text: "avatar", lang: "en" }
    ],
    relatives: [
      { word: "karma", language: "English", connection: "another Sanskrit concept that English simplified", available: true, slug: "karma" },
      { word: "nirvana", language: "English", connection: "another Hindu/Buddhist theological term in English", available: true, slug: "nirvana" },
      { word: "guru", language: "English", connection: "another Sanskrit word for a spiritual concept", available: true, slug: "guru" },
      { word: "juggernaut", language: "English", connection: "another Hindu concept reshaped by English", available: true, slug: "juggernaut" }
    ],
    meaningNow: "Your social media avatar—that tiny image representing you online—carries the theological weight of Hindu divine incarnation. It's the most dramatic demotion in etymology: from god manifesting on earth to save the universe, to a 200-pixel profile photo on Twitter.\n\nBut the core logic holds. An avatar is still a descent into a different form to operate in a different world. Vishnu became a fish to navigate the cosmic flood. You become a photo to navigate the internet. The scale changed. The principle didn't."
  },
  {
    slug: "carnival",
    word: "carne levare",
    romanization: "carne levare",
    language: "Medieval Latin/Italian",
    hook: "The world's biggest party is named after giving up meat—because Carnival is the last feast before Lent's long fast.",
    story: [
      "The most widely accepted etymology traces carnival to Medieval Latin carne levare—'to remove meat'—or Italian carnelevare, describing the final days of feasting before the Christian season of Lent, during which meat was forbidden. Carnival was the last chance to eat, drink, and celebrate before forty days of fasting and penitence.",
      "An alternative etymology suggests carnem vale—'farewell to meat'—which captures the same idea more poetically. Either way, the word names a goodbye: one last explosion of pleasure before self-denial. This explains Carnival's essential character—the excess, the costumes, the abandonment of social norms—as a release valve before enforced discipline.",
      "Venice's Carnival dates to the 11th century. The masks became its most famous feature—anonymity allowed social hierarchies to dissolve temporarily. Servants could mock masters. The forbidden became permitted. The word carnival encoded this temporary inversion: a world without rules, named after a world of rules about to begin.",
      "Brazilian Carnival, the largest in the world, draws on both European and African traditions. Portuguese colonists brought the word and the Christian calendar; enslaved Africans brought drumming, dance, and the spirit that transformed a European farewell-to-meat into the most spectacular celebration on earth."
    ],
    journey: [
      { location: "Rome", period: "~600 CE", form: "carne levare", context: "Medieval Latin remove meat pre-Lenten feast", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "Venice", period: "1000s", form: "carnevale", script: "carnevale", context: "Venetian masked festival pre-Lenten tradition", color: "#5c5a4a", coordinates: [12.3, 45.4] },
      { location: "Paris", period: "1500s", form: "carnaval", script: "carnaval", context: "French adoption Mardi Gras tradition", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Rio de Janeiro", period: "1700s", form: "carnaval", context: "Portuguese and African traditions merge", color: "#8b5a2b", coordinates: [-43.2, -22.9] },
      { location: "Global", period: "present", form: "carnival", context: "World's largest festival celebration spectacle", coordinates: [-43.2, -22.9] }
    ],
    sounds: [
      { label: "Italian", ipa: "/kar.ne.ˈva.le/", text: "carnevale", lang: "it" },
      { label: "Portuguese", ipa: "/kaɾ.na.ˈval/", text: "carnaval", lang: "pt-BR" },
      { label: "English", ipa: "/ˈkɑːɹ.nɪ.vəl/", text: "carnival", lang: "en" }
    ],
    relatives: [
      { word: "Mardi Gras", language: "French", connection: "Fat Tuesday—same pre-Lenten feast different name", available: false },
      { word: "carnal", language: "English", connection: "from Latin caro flesh—same root", available: false },
      { word: "Lent", language: "English", connection: "the fasting season that gives Carnival its purpose", available: false }
    ],
    meaningNow: "Carnival has floated free of its Catholic calendar. Now it means any festive event with rides, games, and spectacle—county carnivals, traveling carnivals, carnival atmosphere. The meat is forgotten. The fast is forgotten. Only the celebration survives.\n\nBut in Rio, Venice, New Orleans, and Trinidad, the original meaning persists: Carnival is the feast before the fast, the excess before the restraint. The word still names a goodbye, even if most of the world has forgotten what it's saying goodbye to."
  },
  {
    slug: "tobacco",
    word: "tabaco",
    romanization: "tabaco",
    language: "Spanish from Taíno/Arawak",
    hook: "The word might name the plant, the pipe, or the act of smoking—nobody's sure, because the people who coined it were almost entirely wiped out.",
    story: [
      "When Columbus reached the Caribbean in 1492, his crew observed the Taíno people smoking rolled leaves through a Y-shaped pipe they called tabaco—or possibly tabaco was their name for the rolled leaves themselves, or the pipe, or the act of smoking. Spanish colonists adopted the word but were never entirely sure what it originally referred to.",
      "The confusion persists because the Taíno language is extinct. The Taíno people of Hispaniola, Cuba, and Puerto Rico were devastated by Spanish colonization—enslaved, killed by disease, and culturally destroyed within decades of contact. Their language survives only in the words Spanish borrowed: tobacco, hurricane, hammock, canoe, barbecue.",
      "Spanish carried the word—and the plant—back to Europe. Within a century, tobacco had circled the globe. The Portuguese brought it to Africa and Asia. Jean Nicot (whose name gave us 'nicotine') introduced it to the French court. Sir Walter Raleigh popularized it in England. The word traveled with the addiction.",
      "By the 1600s, tobacco was the economic foundation of colonial Virginia—the crop that made slavery profitable in North America. A Taíno word for a ritual plant became the name of an industry that shaped empires, enslaved millions, and now kills eight million people per year."
    ],
    journey: [
      { location: "Caribbean", period: "pre-1492", form: "tabaco", context: "Taíno word for pipe plant or smoking practice", color: "#8b5a2b", coordinates: [-72, 18.5] },
      { location: "Hispaniola", period: "1492", form: "tabaco", context: "Columbus crew observes and records Taíno smoking", color: "#8b5a2b", coordinates: [-70, 19] },
      { location: "Seville", period: "1500s", form: "tabaco", script: "tabaco", context: "Spanish adopt word and plant bring to Europe", color: "#5c5a4a", coordinates: [-6, 37.4] },
      { location: "Virginia", period: "1612", form: "tobacco", script: "tobacco", context: "John Rolfe plants commercial tobacco colonial economy", color: "#2d4a3b", coordinates: [-76.8, 37.2] },
      { location: "Global", period: "present", form: "tobacco", context: "Global crop industry 8 million deaths per year", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Taíno (reconstructed)", ipa: "/ta.ˈba.ko/", text: "tabaco", lang: "es" },
      { label: "English", ipa: "/təˈbæk.oʊ/", text: "tobacco", lang: "en" }
    ],
    relatives: [
      { word: "nicotine", language: "English", connection: "from Jean Nicot who introduced tobacco to France", available: false },
      { word: "hurricane", language: "English", connection: "from Taíno hurakán—same extinct language", available: true, slug: "hurricane" },
      { word: "hammock", language: "English", connection: "from Taíno hamaka—another surviving Taíno word", available: true, slug: "hammock" },
      { word: "canoe", language: "English", connection: "from Arawak/Taíno—same Caribbean language family", available: true, slug: "canoe" }
    ],
    meaningNow: "Tobacco is one of the most consequential words in history. The plant it names reshaped global economics, drove colonization, fueled slavery, and now causes more preventable deaths than any other product on earth.\n\nThe Taíno who named it are gone. Their language is extinct. But their word persists in every surgeon general's warning, every tax stamp, every no-smoking sign. Tabaco may be the most widely read word from a dead language in the world."
  },
  {
    slug: "lemon",
    word: "لیمون",
    romanization: "laymūn",
    language: "Arabic from Persian/Sanskrit",
    hook: "A fruit that traveled from the Himalayas to your gin and tonic—picking up a new name at every border.",
    story: [
      "The lemon originated in the foothills of the Himalayas, in what is now northeastern India and Myanmar. The Sanskrit word nimbū (निम्बू) or a related Dravidian form gave Persian līmū, which Arabic adopted as laymūn (ليمون). Each language passed the fruit and its name westward along trade routes.",
      "Arab traders brought lemons to the Middle East and North Africa by the 9th century. The Moors introduced them to Spain and Sicily, where they thrived in the Mediterranean climate. Italian made it limone, Old French made it limon, and English arrived at lemon by the 1400s.",
      "Lemons transformed from luxury to necessity when the British Navy discovered that citrus juice prevented scurvy. In 1747, James Lind proved that lemon juice cured the disease that killed more sailors than combat. By 1795, the Royal Navy mandated daily citrus rations—earning British sailors the nickname 'limeys' (though they'd switched to cheaper limes by then).",
      "The word lemon also developed a negative slang meaning in American English by the early 1900s: a defective product, a bad purchase. 'Lemon laws' protect consumers from buying defective cars. The sour taste became a metaphor for disappointment—when life gives you lemons."
    ],
    journey: [
      { location: "Himalayas", period: "ancient", form: "nimbū", script: "निम्बू", context: "Sanskrit/Dravidian origin wild citrus foothills", color: "#9b4a2c", coordinates: [88, 27] },
      { location: "Persia", period: "~500 CE", form: "līmū", script: "لیمو", context: "Persian adoption cultivated citrus", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Baghdad", period: "~800 CE", form: "laymūn", script: "ليمون", context: "Arabic traders spread across Mediterranean", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Sicily", period: "~1000 CE", form: "limone", script: "limone", context: "Arab introduction to southern Europe", color: "#5c5a4a", coordinates: [13.4, 38.1] },
      { location: "London", period: "1400s", form: "lemon", script: "lemon", context: "English via Old French", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Royal Navy", period: "1795", form: "lemon", context: "Citrus juice mandated prevents scurvy limeys", color: "#4a5568", coordinates: [-1.1, 50.8] },
      { location: "Global", period: "present", form: "lemon", context: "Universal fruit slang for defective product", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Arabic", ipa: "/laj.muːn/", text: "ليمون", lang: "ar" },
      { label: "Italian", ipa: "/li.ˈmo.ne/", text: "limone", lang: "it" },
      { label: "English", ipa: "/ˈlɛm.ən/", text: "lemon", lang: "en" }
    ],
    relatives: [
      { word: "lime", language: "English", connection: "from French/Spanish—same Persian root different citrus", available: false },
      { word: "orange", language: "English", connection: "from Sanskrit nāranga—another citrus word same trade routes", available: false },
      { word: "cinnamon", language: "English", connection: "another spice word from the same Eastern trade routes", available: true, slug: "cinnamon" },
      { word: "mango", language: "English", connection: "from Tamil—another Indian fruit word that went global", available: true, slug: "mango" }
    ],
    meaningNow: "When life gives you lemons, make lemonade. The most clichéd motivational phrase in English is built on a Himalayan fruit named by Sanskrit speakers, traded by Persians, sold by Arabs, cultivated by Sicilians, and prescribed by the British Navy.\n\nThe lemon is now so common it's a symbol for something unwanted. But for most of human history, it was precious—a tropical fruit available only to the wealthy, a medical miracle that saved thousands of sailors' lives. The word remembers the journey even when the fruit is taken for granted."
  },
  {
    slug: "chocolate",
    word: "xocolātl",
    romanization: "xocolātl",
    language: "Nahuatl",
    hook: "The Aztec drink was bitter, spicy, and sacred—nothing like the candy bar that inherited its name.",
    story: [
      "In Nahuatl, the language of the Aztecs, xocolātl meant 'bitter water'—from xococ ('bitter') and ātl ('water'). The drink was made from roasted cacao beans ground with water, chili peppers, and sometimes vanilla or honey. It was frothy, spicy, and consumed cold or at room temperature. Montezuma reportedly drank fifty cups a day.",
      "Cacao had deep spiritual significance in Mesoamerica. The beans were used as currency, offered to gods, and consumed at rituals. The drink was associated with Quetzalcoatl, the feathered serpent deity. Chocolate was literally the drink of the gods—not a treat but a sacrament.",
      "Spanish conquistadors brought cacao back to Europe in the 1500s, but the bitter drink wasn't an immediate hit. Europeans adapted it by adding sugar and heating it, transforming the cold bitter Aztec preparation into the hot sweet drink that swept through European courts. The word survived the recipe change: chocolat in French, cioccolato in Italian, chocolate in English.",
      "The final transformation came in 1847 when Joseph Fry created the first solid eating chocolate. The Aztec bitter drink became a Swiss candy bar. Everything about the product changed—temperature, texture, sweetness, form—but the Nahuatl word endured, now naming something its original speakers wouldn't recognize."
    ],
    journey: [
      { location: "Mesoamerica", period: "~1500 BCE", form: "kakaw", context: "Olmec/Maya cultivate cacao sacred plant", color: "#8b5a2b", coordinates: [-90, 17] },
      { location: "Tenochtitlan", period: "~1400 CE", form: "xocolātl", script: "xocolātl", context: "Aztec bitter sacred drink chili and cacao", color: "#8b5a2b", coordinates: [-99.1, 19.4] },
      { location: "Seville", period: "1528", form: "chocolate", script: "chocolate", context: "Cortés brings cacao to Spanish court", color: "#5c5a4a", coordinates: [-6, 37.4] },
      { location: "Paris", period: "1650s", form: "chocolat", context: "French court adds sugar makes it sweet and hot", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Bristol", period: "1847", form: "chocolate", context: "Fry creates first solid eating chocolate bar", color: "#4a5568", coordinates: [-2.6, 51.5] },
      { location: "Global", period: "present", form: "chocolate", context: "Multi-billion dollar confection industry", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Nahuatl", ipa: "/ʃo.ko.laːtɬ/", text: "xocolātl", lang: "nah" },
      { label: "Spanish", ipa: "/tʃo.ko.ˈla.te/", text: "chocolate", lang: "es" },
      { label: "English", ipa: "/ˈtʃɒk.lɪt/", text: "chocolate", lang: "en" }
    ],
    relatives: [
      { word: "cacao", language: "English", connection: "from Maya kakaw—the raw bean before processing", available: false },
      { word: "vanilla", language: "English", connection: "from Nahuatl tlilxochitl via Spanish—often paired with chocolate", available: false },
      { word: "tomato", language: "English", connection: "from Nahuatl tomatl—another Aztec word in English", available: true, slug: "tomato" },
      { word: "avocado", language: "English", connection: "from Nahuatl āhuacatl—another Mesoamerican food word", available: true, slug: "avocado" }
    ],
    meaningNow: "Chocolate is now the world's most popular flavor, a $130 billion global industry built on a Nahuatl word for bitter water. The original drink was cold, spicy, and sacred. The modern product is sweet, solid, and everywhere—in Easter eggs, Valentine's boxes, and vending machines.\n\nThe word is the only thing the Aztec original and the modern candy bar share. Everything else was replaced. But xocolātl persists in every language that says chocolate—a Nahuatl sound, five centuries old, on every tongue."
  },
  {
    slug: "balcony",
    word: "balcone",
    romanization: "balcone",
    language: "Italian from Germanic",
    hook: "A Germanic word for 'beam' became the Italian platform where Romeo heard Juliet—and Shakespeare made it the most romantic structure in architecture.",
    story: [
      "The word traces back to Old High German balko, meaning 'beam' or 'scaffold'—a structural timber projecting from a wall. Lombardic (the Germanic language of northern Italian invaders) brought the word to Italy, where it became balcone—a platform projecting from a building's wall, supported by brackets or beams.",
      "Italian architecture embraced the balcony as both functional and social. In Mediterranean climates, balconies extended living space outdoors, caught breezes, and allowed residents to observe street life below. Italian cities filled with balconied buildings—each one a small stage overlooking the public theater of the street.",
      "Shakespeare's Romeo and Juliet (c. 1597) immortalized the balcony as the setting for the most famous love scene in Western literature—though Shakespeare never actually uses the word 'balcony' in the play (the stage direction is simply 'Juliet appears above'). The 'balcony scene' label came from later productions, but it stuck permanently.",
      "English borrowed balcony from Italian in the 1610s, just after Shakespeare's time. The word entered theaters too—the balcony became the upper seating area, and 'the cheap seats' gained a name that sounded vaguely romantic, even if the view was terrible."
    ],
    journey: [
      { location: "Germany", period: "~500 CE", form: "balko", context: "Old High German beam scaffold projecting timber", color: "#4a5568", coordinates: [10, 50] },
      { location: "Northern Italy", period: "~600 CE", form: "balcone", context: "Lombardic Germanic adoption projecting platform", color: "#5c5a4a", coordinates: [9.2, 45.5] },
      { location: "Verona", period: "~1300s", form: "balcone", script: "balcone", context: "Italian architecture widespread residential feature", color: "#5c5a4a", coordinates: [11, 45.4] },
      { location: "London", period: "1610s", form: "balcony", script: "balcony", context: "English borrowed from Italian architectural term", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "balcony", context: "Architectural feature theater seating Romeo and Juliet", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Italian", ipa: "/bal.ˈko.ne/", text: "balcone", lang: "it" },
      { label: "English", ipa: "/ˈbæl.kə.ni/", text: "balcony", lang: "en" }
    ],
    relatives: [
      { word: "balk", language: "English", connection: "from same Germanic root—a beam, then an obstacle", available: false },
      { word: "veranda", language: "English", connection: "from Hindi—another word for an outdoor extension of a building", available: true, slug: "veranda" },
      { word: "piano", language: "English", connection: "from Italian—another Italian architectural/cultural word in English", available: true, slug: "piano" }
    ],
    meaningNow: "The balcony became unexpectedly significant during the COVID-19 pandemic, when Italians sang from their balconies during lockdown. The architectural feature designed for watching street life became a stage for performing to it.\n\nShakespeare would have understood. The balcony has always been about the relationship between private and public space—a place where you're home but visible, sheltered but exposed. Romeo and Juliet, Italian tenors during lockdown—the balcony is where private feeling becomes public expression."
  },
  {
    slug: "orange",
    word: "नारंग",
    romanization: "nāraṅga",
    language: "Sanskrit via Persian and Arabic",
    hook: "The fruit came before the color—and the word lost a letter at every border it crossed.",
    story: [
      "In Sanskrit, nāraṅga (नारंग) named the bitter orange tree, possibly derived from a Dravidian source. The word traveled west through Persian (nārang), then Arabic (nāranj), picking up and dropping sounds at each stop. When it reached Old Spanish as naranja, the initial 'n' was still intact.",
      "The critical mutation happened in French. Une norenge was misheard and reanalyzed as une orenge—the 'n' jumped from the noun to the article. This process, called 'wrong division' or 'misdivision,' is the same force that turned 'a napron' into 'an apron' and 'a nadder' into 'an adder' in English. The orange lost its nose.",
      "English borrowed the 'n'-less version from French as orange in the 1300s. But here's the remarkable thing: before the fruit arrived in Europe, English had no word for the color orange. The hue existed, but it was simply called 'geoluhread'—yellow-red. The fruit gave the color its name, not the other way around.",
      "Spanish naranja, Portuguese laranja, and Arabic nāranj all preserve letters that English and French dropped. The word has been traveling for over two thousand years, losing consonants like luggage falling off a cart at every border crossing."
    ],
    journey: [
      { location: "India", period: "ancient", form: "nāraṅga", script: "नारंग", context: "Sanskrit/Dravidian bitter orange tree original name", color: "#9b4a2c", coordinates: [78, 25] },
      { location: "Persia", period: "~500 CE", form: "nārang", script: "نارنگ", context: "Persian adoption bitter orange cultivation", color: "#4a3b6b", coordinates: [52, 35.7] },
      { location: "Baghdad", period: "~800 CE", form: "nāranj", script: "نارنج", context: "Arabic trade spreads fruit across Mediterranean", color: "#4a3b6b", coordinates: [44.4, 33.3] },
      { location: "Seville", period: "~1000 CE", form: "naranja", script: "naranja", context: "Moors introduce oranges to Spain", color: "#5c5a4a", coordinates: [-6, 37.4] },
      { location: "Paris", period: "1300s", form: "orenge", script: "orenge", context: "French drops initial n through misdivision", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "London", period: "1300s", form: "orange", script: "orange", context: "English borrows French form fruit names color", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "orange", context: "Universal fruit color juice breakfast staple", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Sanskrit", ipa: "/naː.raːŋ.ɡa/", text: "नारंग", lang: "hi" },
      { label: "Arabic", ipa: "/naː.randʒ/", text: "نارنج", lang: "ar" },
      { label: "English", ipa: "/ˈɒɹ.ɪndʒ/", text: "orange", lang: "en" }
    ],
    relatives: [
      { word: "naranja", language: "Spanish", connection: "preserves the lost 'n' from Arabic", available: false },
      { word: "lemon", language: "English", connection: "from Arabic/Persian—same citrus trade route", available: true, slug: "lemon" },
      { word: "apron", language: "English", connection: "same misdivision: a napron became an apron", available: false },
      { word: "mango", language: "English", connection: "from Tamil—another Indian fruit word that traveled west", available: true, slug: "mango" }
    ],
    meaningNow: "Nothing rhymes with orange—the famous claim is mostly true in English (though 'door hinge' comes close). But the word's real distinction is that it named a color that had no name. Before oranges arrived in England, there was no 'orange.' There was only yellow-red.\n\nThe fruit changed not just English vocabulary but English perception. Having a word for a color makes you see it differently—a phenomenon linguists call the Sapir-Whorf effect. The Sanskrit nāraṅga didn't just name a fruit. It taught English to see a color."
  }
];
