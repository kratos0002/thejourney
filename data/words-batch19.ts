import type { Word } from "./word-types";

export const batch19: Word[] = [
  {
    slug: "chocolate",
    word: "xocolatl",
    romanization: "xocolatl",
    language: "Nahuatl",
    hook: "The bitter water of the gods became the world's sweetest obsession—an Aztec drink transformed into global indulgence.",
    story: [
      "The word chocolate descends from the Nahuatl xocolatl, likely combining xococ (bitter) and atl (water). For the Aztecs and Maya before them, chocolate wasn't a sweet treat but a sacred, bitter beverage. Cacao beans were so valuable they served as currency. The drink—often mixed with chili, vanilla, or flowers—was reserved for elites, warriors, and religious ceremonies.",
      "When Spanish conquistadors arrived in the early 16th century, they encountered Aztec emperor Montezuma drinking xocolatl from golden goblets. Hernan Cortes brought cacao beans back to Spain around 1528. The Spanish adapted the bitter drink to European tastes, adding sugar and serving it hot. They jealously guarded the secret for nearly a century before it spread to other European courts.",
      "The word transformed as it traveled. Spanish rendered xocolatl as chocolate. French adopted chocolat, Italian cioccolato, English chocolate. Each language softened the Nahuatl sounds while the drink itself sweetened to match European preferences. By the 19th century, solid eating chocolate was invented, completing the transformation from sacred Aztec beverage to global confection.",
      "Today chocolate is a multi-billion dollar industry. The word appears in nearly every language on Earth. Yet the cacao tree still grows where the Maya first cultivated it, and the Nahuatl origin persists in every syllable. When we say chocolate, we're speaking Aztec—invoking a drink that emperors believed gave them divine power."
    ],
    journey: [
      { location: "Mesoamerica", period: "1900 BCE", form: "kakaw", context: "Maya cultivate cacao, develop chocolate drinks", color: "#8b4513", coordinates: [-90.5, 14.6] },
      { location: "Tenochtitlan", period: "1400s", form: "xocolatl", script: "xocolatl", context: "Aztec elite drink bitter cacao beverage", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "Spain", period: "1528", form: "chocolate", context: "Cortes introduces cacao to Spanish court", color: "#c41e3a", coordinates: [-3.7, 40.4] },
      { location: "Europe", period: "1600s", form: "chocolate/chocolat", context: "Sweetened drink spreads across continent", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "chocolate", context: "Universal word and beloved food", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/ʃokoˈlatɬ/", text: "xocolatl", lang: "nah" },
      { label: "Spanish", ipa: "/tʃokoˈlate/", text: "chocolate", lang: "es" },
      { label: "English", ipa: "/ˈtʃɒk.lət/", text: "chocolate", lang: "en" }
    ],
    relatives: [
      { word: "cacao", language: "Nahuatl", connection: "the bean from which chocolate is made", available: false },
      { word: "vanilla", language: "Spanish/Nahuatl", connection: "another Mesoamerican flavor that traveled with chocolate", available: false },
      { word: "chipotle", language: "Nahuatl", connection: "another Nahuatl food word gone global", available: true, slug: "chipotle" },
      { word: "mocha", language: "Arabic", connection: "another word blending coffee and chocolate cultures", available: false }
    ],
    meaningNow: "Chocolate's journey from sacred Aztec drink to everyday indulgence traces the transformation of the Americas after European contact. The Aztecs believed cacao was a gift from the feathered serpent god Quetzalcoatl. Europeans stripped away the spiritual significance, added sugar, and created an industry.\n\nToday debates continue about chocolate's ethics—child labor in cacao farming, environmental destruction, fair trade practices. The word that once named a drink of emperors now labels mass-produced candy bars. Yet craft chocolate makers are rediscovering traditional preparations, and some Mexican families still make xocolatl the old way. The Nahuatl word survives, carrying millennia of history in three syllables."
  },
  {
    slug: "coyote",
    word: "coyotl",
    romanization: "coyotl",
    language: "Nahuatl",
    hook: "The trickster of Aztec mythology became America's most adaptable predator—and a word for those who smuggle humans across borders.",
    story: [
      "In Nahuatl, coyotl named the clever canid that thrived across Mesoamerica. The Aztecs recognized the coyote's cunning: in their mythology, Huehuecoyotl (Old Coyote) was a trickster god of music, dance, and mischief. The animal's intelligence and adaptability made it a powerful symbol—admired, feared, never underestimated.",
      "Spanish colonizers adopted the word with minimal change, and coyote entered English by the early 19th century as American settlers pushed westward into coyote territory. Unlike wolves, which humans nearly exterminated, coyotes expanded their range. They learned to live alongside people, raiding garbage, hunting pets, howling in suburban neighborhoods. The trickster adapted.",
      "The word gained a darker meaning in the 20th century. Along the US-Mexico border, coyote came to mean a smuggler who guides migrants across illegally—for a price. The term captures something essential: like the animal, human coyotes operate in shadows, survive through cunning, and thrive in the dangerous spaces between worlds. The trickster mythology finds new expression.",
      "Today coyotes (the animals) range from Alaska to Panama, from wilderness to downtown Los Angeles. They've proven impossible to control, their population growing even as humans try to eliminate them. The Aztec word for a clever survivor now names the most successful predator in the Americas—and the people who profit from desperate border crossings."
    ],
    journey: [
      { location: "Mesoamerica", period: "pre-Columbian", form: "coyotl", script: "coyotl", context: "Aztec word for the trickster canid", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "New Spain", period: "1500s", form: "coyote", context: "Spanish adopt Nahuatl word", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "American West", period: "1800s", form: "coyote", context: "English adopts word as settlers expand", color: "#4a5568", coordinates: [-106.6, 35.1] },
      { location: "US-Mexico border", period: "1900s", form: "coyote", context: "Word gains meaning of human smuggler", color: "#6b2d3d", coordinates: [-110.9, 31.3] },
      { location: "North America", period: "present", form: "coyote", context: "Animal thrives; word carries dual meaning", coordinates: [-100, 40] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/koˈjotɬ/", text: "coyotl", lang: "nah" },
      { label: "Spanish", ipa: "/koˈʝote/", text: "coyote", lang: "es" },
      { label: "English", ipa: "/kaɪˈoʊ.ti/", text: "coyote", lang: "en" }
    ],
    relatives: [
      { word: "ocelot", language: "Nahuatl", connection: "another Nahuatl animal name in English", available: true, slug: "ocelot" },
      { word: "trickster", language: "English", connection: "the mythological role coyote plays", available: false },
      { word: "wolf", language: "Germanic", connection: "related canid with different cultural symbolism", available: false },
      { word: "pollero", language: "Spanish", connection: "alternate term for human smuggler", available: false }
    ],
    meaningNow: "The coyote embodies adaptation. The animal survived where wolves couldn't, learning to coexist with humans who wanted it dead. The word expanded similarly, adding meanings while keeping its core sense of cunning survival in hostile terrain.\n\nThe human coyote—the smuggler—carries a morally complex legacy. Some exploit desperate migrants; others help families reunite. The word doesn't judge, just describes a role that exists because borders exist. Like the animal trickster god of Aztec mythology, the human coyote operates in ambiguous moral space, neither hero nor villain but survivor. The Nahuatl word contains all these meanings, ancient and modern, animal and human."
  },
  {
    slug: "ocelot",
    word: "ocelotl",
    romanization: "ocelotl",
    language: "Nahuatl",
    hook: "Aztec jaguar warriors wore its spotted skin into battle—the wild cat's Nahuatl name now graces everything from video games to luxury cars.",
    story: [
      "The ocelotl held sacred status in Aztec civilization. This medium-sized spotted cat, native to the Americas, was associated with the elite ocelot warriors (ocelomeh), who wore its pelts and earned the right to its name through battlefield valor. The word ocelotl meant both the animal and the warrior rank. To be called ocelot was to be recognized as fierce, beautiful, and deadly.",
      "Spanish colonizers documented the ocelotl and borrowed the word. European naturalists classified the animal as Leopardus pardalis, but the common name remained the Nahuatl-derived ocelot. The cat's striking spotted coat made it desirable to fur traders; by the 20th century, hunting and habitat loss had severely reduced ocelot populations.",
      "Conservation efforts have helped stabilize ocelot numbers, though the species remains vulnerable. In the United States, a small population survives in South Texas, carefully monitored and protected. The word ocelot now appears in wildlife documentaries, conservation campaigns, and environmental legislation.",
      "Beyond biology, ocelot has become a cultural brand. Salvador Dali famously kept an ocelot named Babou as a pet. Video games feature ocelot characters. Luxury brands evoke its spotted elegance. The Aztec warrior's namesake has traded battlefields for popular culture, its Nahuatl name carrying connotations of exotic beauty and power across languages and centuries."
    ],
    journey: [
      { location: "Mesoamerica", period: "pre-Columbian", form: "ocelotl", script: "ocelotl", context: "Aztec word for wild cat and elite warriors", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "New Spain", period: "1500s", form: "ocelote", context: "Spanish document the animal and word", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "Europe", period: "1700s", form: "ocelot", context: "Naturalists adopt Nahuatl-derived name", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Americas", period: "1900s", form: "ocelot", context: "Conservation concern as populations decline", color: "#2d4a3b", coordinates: [-97.5, 26.1] },
      { location: "Global", period: "present", form: "ocelot", context: "Wildlife symbol and cultural icon", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/oˈselotɬ/", text: "ocelotl", lang: "nah" },
      { label: "Spanish", ipa: "/oseˈlote/", text: "ocelote", lang: "es" },
      { label: "English", ipa: "/ˈɒs.ə.lɒt/", text: "ocelot", lang: "en" }
    ],
    relatives: [
      { word: "jaguar", language: "Tupi", connection: "larger American wild cat, also with indigenous name", available: false },
      { word: "coyote", language: "Nahuatl", connection: "another Nahuatl animal name", available: true, slug: "coyote" },
      { word: "margay", language: "Tupi", connection: "related spotted cat with indigenous name", available: false },
      { word: "leopard", language: "Greek", connection: "Old World spotted cat ocelot was compared to", available: false }
    ],
    meaningNow: "The ocelot's journey from Aztec warrior symbol to endangered species to pop culture icon traces shifting human relationships with wild animals. The Aztecs revered the ocelot; colonizers commodified it; conservationists now fight to save it; marketers exploit its exotic appeal.\n\nThe Nahuatl word survives all these transformations. Whether describing an endangered cat in Texas brush country or a character in a video game, ocelot carries its indigenous origins. The spotted warriors of Tenochtitlan would recognize neither the dwindling wild populations nor the digital avatars, but they would know their word, still naming something fierce and beautiful after five centuries."
  },
  {
    slug: "chipotle",
    word: "chilpoctli",
    romanization: "chilpoctli",
    language: "Nahuatl",
    hook: "The Aztecs smoke-dried their chilies for preservation—creating a flavor that conquered global cuisine and named a restaurant empire.",
    story: [
      "The word chipotle combines two Nahuatl elements: chilli (chili pepper) and poctli (smoke). Chilpoctli described the ancient Mesoamerican practice of smoke-drying ripe jalapeno peppers, transforming them into something deeper, more complex. The smoking preserved the peppers while creating a distinctive flavor—earthy, spicy, sweet, with hints of tobacco and chocolate.",
      "After the Spanish conquest, chipotle peppers remained integral to Mexican cuisine, particularly in the cuisine of central and northern Mexico. They appeared in adobo sauces, stews, and marinades. For centuries, chipotle was a regional ingredient, unknown outside Mexico and the American Southwest.",
      "The late 20th century brought chipotle to global attention. Canned chipotle peppers in adobo sauce became available internationally. Food writers discovered the smoky flavor. Then in 1993, a Denver burrito restaurant named itself Chipotle Mexican Grill, eventually growing into an international chain. The Nahuatl word became a brand—and introduced millions to its pronunciation.",
      "Today chipotle flavoring appears in everything from mayonnaise to potato chips to barbecue sauce. The word has transcended its original meaning, sometimes describing any smoky-spicy flavor regardless of the actual pepper used. The Aztec technique of smoke-drying chilies has been industrialized, globalized, and in some cases, reduced to artificial flavoring—but the Nahuatl word persists."
    ],
    journey: [
      { location: "Mesoamerica", period: "pre-Columbian", form: "chilpoctli", script: "chilpoctli", context: "Aztecs smoke-dry jalapenos for preservation", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "Mexico", period: "colonial era", form: "chipotle", context: "Spanish spelling, Mexican cuisine staple", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "US Southwest", period: "1900s", form: "chipotle", context: "Regional ingredient in Tex-Mex cuisine", color: "#4a5568", coordinates: [-106.6, 35.1] },
      { location: "Denver", period: "1993", form: "Chipotle", context: "Restaurant chain spreads the word globally", color: "#4a5568", coordinates: [-104.9, 39.7] },
      { location: "Global", period: "present", form: "chipotle", context: "International flavor and brand name", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/tʃilˈpoktɬi/", text: "chilpoctli", lang: "nah" },
      { label: "Mexican Spanish", ipa: "/tʃiˈpotle/", text: "chipotle", lang: "es-MX" },
      { label: "English", ipa: "/tʃɪˈpoʊt.leɪ/", text: "chipotle", lang: "en" }
    ],
    relatives: [
      { word: "chocolate", language: "Nahuatl", connection: "another Nahuatl food word gone global", available: true, slug: "chocolate" },
      { word: "jalapeno", language: "Spanish", connection: "the fresh pepper that becomes chipotle when smoked", available: false },
      { word: "adobo", language: "Spanish", connection: "the sauce chipotles are often packed in", available: false },
      { word: "guacamole", language: "Nahuatl", connection: "another Nahuatl culinary term", available: true, slug: "guacamole" }
    ],
    meaningNow: "Chipotle's story illuminates how a preservation technique became a flavor preference, then a global brand. The Aztecs smoked chilies because they had to—it was practical food storage. Centuries later, we seek out that smoky taste not from necessity but desire.\n\nThe restaurant chain brought unexpected linguistic consequences. Millions learned to pronounce chipotle (often incorrectly—it's chi-POHT-lay, not chi-POLE-tay) who had never encountered the actual pepper. The word became more famous than the ingredient. Whether this represents cultural appreciation or appropriation depends on perspective, but the Nahuatl origin is undeniable: every time someone orders a burrito bowl, they're speaking Aztec."
  },
  {
    slug: "guacamole",
    word: "ahuacamolli",
    romanization: "ahuacamolli",
    language: "Nahuatl",
    hook: "Avocado sauce became Super Bowl essential—the Aztec word for a simple dip now names America's favorite game-day food.",
    story: [
      "Guacamole derives from the Nahuatl ahuacamolli, combining ahuacatl (avocado) and molli (sauce). The Aztecs created this simple preparation centuries before European contact, mashing ripe avocados with salt, chilies, and tomatoes. The dish was practical—avocados spoil quickly once cut, so mashing them with acidic tomatoes extended their usability.",
      "Spanish conquistadors encountered guacamole and struggled with its pronunciation. Ahuacamolli became aguacamole, then guacamole. The dish remained regional for centuries, prepared in Mexican homes and local restaurants but virtually unknown internationally. Even in the United States, guacamole was exotic outside the Southwest until the late 20th century.",
      "The avocado industry's marketing efforts changed everything. California growers promoted avocados as healthy and versatile. Tex-Mex cuisine went mainstream. By the 1990s, guacamole had become a fixture at American parties, particularly during football season. The association with the Super Bowl became so strong that avocado prices spike every January.",
      "Today guacamole appears on menus worldwide, from Tokyo to London to Sydney. The word has spawned variations—'guac' as casual shorthand, 'holy guacamole' as exclamation. Debates rage over proper ingredients: Is adding peas acceptable? What about garlic? The Aztec original remains the template, but guacamole has become a canvas for global improvisation."
    ],
    journey: [
      { location: "Mesoamerica", period: "pre-Columbian", form: "ahuacamolli", script: "ahuacamolli", context: "Aztecs create avocado sauce", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "New Spain", period: "1500s", form: "guacamole", context: "Spanish adapt word and dish", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "Mexico/US Southwest", period: "1800s-1900s", form: "guacamole", context: "Regional dish in Mexican cuisine", color: "#2d4a3b", coordinates: [-106.6, 35.1] },
      { location: "United States", period: "1980s-90s", form: "guacamole", context: "Tex-Mex boom spreads guacamole nationally", color: "#4a5568", coordinates: [-118.2, 34.1] },
      { location: "Global", period: "present", form: "guacamole/guac", context: "International appetizer, Super Bowl staple", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/awakaˈmolːi/", text: "ahuacamolli", lang: "nah" },
      { label: "Spanish", ipa: "/ɡwakaˈmole/", text: "guacamole", lang: "es" },
      { label: "English", ipa: "/ˌɡwɑː.kəˈmoʊ.li/", text: "guacamole", lang: "en" }
    ],
    relatives: [
      { word: "avocado", language: "Nahuatl", connection: "from ahuacatl, the fruit guacamole is made from", available: false },
      { word: "tamale", language: "Nahuatl", connection: "another Nahuatl food word in English", available: true, slug: "tamale" },
      { word: "mole", language: "Nahuatl", connection: "from molli (sauce), the same root word", available: false },
      { word: "salsa", language: "Spanish", connection: "often served alongside guacamole", available: false }
    ],
    meaningNow: "Guacamole represents the successful globalization of a simple indigenous recipe. Unlike many foods that were transformed beyond recognition, guacamole remains essentially what the Aztecs made: mashed avocado with seasonings. The core hasn't changed in five centuries.\n\nThe word's casual abbreviation to 'guac' signals its complete absorption into American English. When a Nahuatl compound gets shortened for convenience, the borrowing is complete. Americans who say 'extra guac' aren't consciously speaking Aztec, but they are. The avocado sauce that sustained Mesoamerican civilizations now sustains an industry worth billions—and every bowl carries its Nahuatl name."
  },
  {
    slug: "tamale",
    word: "tamalli",
    romanization: "tamalli",
    language: "Nahuatl",
    hook: "Wrapped in corn husks and steamed since ancient times—the original portable meal gave English a word and the Americas a tradition.",
    story: [
      "The tamalli was Mesoamerica's perfect food. Masa (corn dough) wrapped around filling, enclosed in corn husks or banana leaves, then steamed—portable, preservable, and endlessly variable. Archaeological evidence suggests tamales date back to 8000 BCE. Aztec warriors carried them as field rations. The word tamalli simply meant 'wrapped' in Nahuatl, describing the essential characteristic.",
      "Spanish colonizers adopted both the food and the word, changing tamalli to tamal (singular) and tamales (plural). The dish spread throughout Latin America, each region developing distinctive varieties. In Mexico alone, hundreds of tamale types exist, varying by filling, wrapping, and regional tradition. The word gained diminutive forms—tamalito, tamalini—and entered countless compound words.",
      "In the United States, tamales became associated with Mexican and Central American immigrant communities. Making tamales is traditionally a communal, multi-generational activity—the tamalada—where families gather to prepare hundreds for holidays. The dish carries cultural weight far beyond its ingredients.",
      "English speakers often use 'tamale' as both singular and plural, sometimes adding an unnecessary 's' for 'tamales.' The phrase 'hot tamale' became slang for an attractive or spicy person. The Nahuatl word has been stretched, adapted, and occasionally mangled, but it persists—naming a food that has wrapped sustenance in corn husks for ten thousand years."
    ],
    journey: [
      { location: "Mesoamerica", period: "8000 BCE", form: "tamalli", script: "tamalli", context: "Ancient portable food of corn dough and filling", color: "#8b4513", coordinates: [-90.5, 14.6] },
      { location: "Aztec Empire", period: "1400s", form: "tamalli", context: "Warrior rations and ceremonial food", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "New Spain", period: "1500s", form: "tamal", context: "Spanish adopt word, dish spreads regionally", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "Latin America", period: "1600s+", form: "tamal/tamales", context: "Regional varieties develop across Americas", color: "#2d4a3b", coordinates: [-86.9, 14.1] },
      { location: "United States", period: "1900s+", form: "tamale", context: "Immigrant communities maintain tradition", coordinates: [-118.2, 34.1] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/taˈmalːi/", text: "tamalli", lang: "nah" },
      { label: "Spanish (singular)", ipa: "/taˈmal/", text: "tamal", lang: "es" },
      { label: "English", ipa: "/təˈmɑː.li/", text: "tamale", lang: "en" }
    ],
    relatives: [
      { word: "guacamole", language: "Nahuatl", connection: "another Nahuatl food word, often served together", available: true, slug: "guacamole" },
      { word: "masa", language: "Spanish", connection: "the corn dough tamales are made from", available: false },
      { word: "tortilla", language: "Spanish", connection: "another corn-based food with Mesoamerican roots", available: false },
      { word: "dumpling", language: "English", connection: "parallel concept in other cuisines", available: false }
    ],
    meaningNow: "The tamale persists because it works. Ten thousand years after someone first wrapped corn dough around a filling, the basic concept remains unimproved. Modern tamales use the same technique as ancient ones. The word tamalli, describing something wrapped, still describes exactly what a tamale is.\n\nTamales carry particular significance as cultural preservation. The tamalada—the communal making of tamales—passes techniques and recipes across generations. In immigrant communities, tamales connect families to homelands. The food resists industrialization; mass-produced tamales exist but pale beside homemade ones. The Nahuatl word names something that machines can't quite replicate: a dish best made by many hands, carrying memories in every unwrapped husk."
  },
  {
    slug: "mezcal",
    word: "mexcalli",
    romanization: "mexcalli",
    language: "Nahuatl",
    hook: "The Aztecs roasted agave hearts and called them cooked maguey—later, someone distilled that sweetness into Mexico's smoky spirit.",
    story: [
      "Mezcal derives from the Nahuatl mexcalli, combining metl (maguey/agave) and ixcalli (cooked). The word originally described the roasted heart of the agave plant, a food source for Mesoamerican peoples. The agave's core, when slow-roasted in earthen pits, becomes sweet and caramelized. This cooked maguey sustained communities for millennia before anyone thought to distill it.",
      "Distillation arrived with Spanish colonizers. By the late 1500s, someone—indigenous craftspeople, Spanish settlers, or Filipino sailors, depending on the theory—applied distillation technology to fermented agave. The result was mezcal: a spirit carrying the roasted agave's distinctive smoke. The word that named a food now named a drink.",
      "Tequila is technically a type of mezcal, made specifically from blue agave in designated regions. But while tequila industrialized and globalized, traditional mezcal remained artisanal, produced in small batches by mezcaleros using ancestral techniques. Each village had its own style; each batch reflected its maker.",
      "The 21st century brought a mezcal renaissance. Bartenders discovered its complexity; connoisseurs sought out small-batch varieties. The smoky spirit that had seemed primitive compared to tequila was revalued as sophisticated and traditional. Production regulations were established, protected designations created. The Nahuatl word for cooked agave now names one of the world's most sought-after spirits."
    ],
    journey: [
      { location: "Mesoamerica", period: "pre-Columbian", form: "mexcalli", script: "mexcalli", context: "Roasted agave heart as food", color: "#8b4513", coordinates: [-99.1, 19.4] },
      { location: "Oaxaca", period: "1500s", form: "mezcal", context: "Distillation creates the spirit", color: "#c41e3a", coordinates: [-96.7, 17.1] },
      { location: "Mexico", period: "1600s-1900s", form: "mezcal", context: "Regional spirit, artisanal production", color: "#2d4a3b", coordinates: [-99.1, 19.4] },
      { location: "Global", period: "2000s+", form: "mezcal", context: "Craft spirit renaissance, international demand", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Present", period: "today", form: "mezcal", context: "Protected designation, premium spirit category", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Classical Nahuatl", ipa: "/meʃˈkalːi/", text: "mexcalli", lang: "nah" },
      { label: "Mexican Spanish", ipa: "/mesˈkal/", text: "mezcal", lang: "es-MX" },
      { label: "English", ipa: "/mɛsˈkæl/", text: "mezcal", lang: "en" }
    ],
    relatives: [
      { word: "tequila", language: "Spanish", connection: "mezcal variety that became its own category", available: false },
      { word: "pulque", language: "Nahuatl", connection: "fermented agave drink predating distillation", available: false },
      { word: "maguey", language: "Taino/Spanish", connection: "another word for agave", available: false },
      { word: "chipotle", language: "Nahuatl", connection: "another Nahuatl word for something smoke-transformed", available: true, slug: "chipotle" }
    ],
    meaningNow: "Mezcal's etymology reminds us that before the spirit, there was the food. Roasted agave sustained people; distillation came later. The word mexcalli named sustenance before it named intoxication. Understanding that history changes how we taste the spirit.\n\nToday's mezcal boom creates tensions. Global demand strains agave supplies; some plants take decades to mature. Industrial producers threaten artisanal traditions. Protected designations both preserve and restrict. The Nahuatl word carries all this complexity: ancient food technique, colonial-era alchemy, craft tradition, and global commodity. When you sip mezcal, you're tasting cooked maguey transformed by five centuries of history."
  },
  {
    slug: "papaya",
    word: "papaya",
    romanization: "papaya",
    language: "Taino/Arawak",
    hook: "Caribbean islanders named this fruit before Columbus arrived—their word outlasted their civilization and spread to every tropical language.",
    story: [
      "When Christopher Columbus reached the Caribbean in 1492, he encountered the Taino people and their foods. Among these was a large, orange-fleshed fruit the Taino called papaya (or a similar word in related Arawakan languages). The Spanish adopted the word directly, one of the few Taino terms to survive the catastrophic destruction of Caribbean indigenous populations.",
      "The papaya plant spread rapidly through the tropics after European contact. Portuguese traders carried it to Africa and Asia within decades of Columbus's voyages. By 1600, papayas grew in India, the Philippines, and throughout the tropical world. The word traveled with the fruit, adapted into dozens of languages: papaye in French, Papaya in German, papaia in Italian.",
      "The fruit became a staple across tropical regions, valued for its sweetness, its digestive enzymes (papain), and its ease of cultivation. Different cultures developed different names—pawpaw in some English dialects, mamao in Brazil, malakor in Thailand—but papaya remained dominant internationally. The Taino word outlived the Taino themselves.",
      "Today papaya is among the world's most consumed fruits, grown in every tropical and subtropical region. The word appears in international food trade, agricultural research, and supermarkets worldwide. A Caribbean language with no native speakers left behind a word that billions use."
    ],
    journey: [
      { location: "Caribbean", period: "pre-Columbian", form: "papaya", script: "papaya", context: "Taino/Arawak word for tropical fruit", color: "#8b4513", coordinates: [-69.9, 18.5] },
      { location: "Spain", period: "1500s", form: "papaya", context: "Spanish adopt Taino word", color: "#c41e3a", coordinates: [-3.7, 40.4] },
      { location: "Tropics worldwide", period: "1500s-1600s", form: "papaya/papaye", context: "Fruit and word spread globally", color: "#2d4a3b", coordinates: [77.2, 28.6] },
      { location: "Global", period: "present", form: "papaya", context: "International word for Carica papaya", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Spanish (from Taino)", ipa: "/paˈpaʝa/", text: "papaya", lang: "es" },
      { label: "English", ipa: "/pəˈpaɪ.ə/", text: "papaya", lang: "en" },
      { label: "French", ipa: "/pa.paj/", text: "papaye", lang: "fr" }
    ],
    relatives: [
      { word: "barbecue", language: "Taino", connection: "another Taino word that went global", available: true, slug: "barbecue" },
      { word: "guava", language: "Arawak", connection: "another Caribbean fruit name from Arawakan languages", available: false },
      { word: "mamao", language: "Portuguese", connection: "Brazilian term for papaya", available: false },
      { word: "pawpaw", language: "English", connection: "alternate name used in some regions", available: false }
    ],
    meaningNow: "Papaya represents linguistic survival against impossible odds. The Taino people who named this fruit were nearly annihilated within decades of European contact—by disease, violence, and enslavement. Their language has no fluent speakers today. Yet their word for one fruit achieved immortality, spoken in every tropical country.\n\nThe papaya's journey also illustrates the Columbian Exchange—the massive transfer of plants, animals, and diseases between hemispheres after 1492. A fruit that evolved in the Americas now grows worldwide, its Taino name intact. When someone in Thailand or Tanzania says papaya, they're using a word from a Caribbean island, preserved because the fruit proved useful while its namers did not. The etymology carries this weight: a civilization's ghost, surviving in the name of breakfast fruit."
  },
  {
    slug: "barbecue",
    word: "barbacoa",
    romanization: "barbacoa",
    language: "Taino",
    hook: "Caribbean islanders smoked meat on wooden frames—their word for the grill became America's favorite way to cook.",
    story: [
      "The Taino people of the Caribbean cooked meat on elevated wooden frameworks called barbacoa (the exact original form is debated). This method allowed smoking and slow-cooking over indirect heat, preserving meat in the tropical climate while imparting smoky flavor. Spanish colonizers encountered the technique and adopted both the method and the word.",
      "Spanish explorers carried barbacoa throughout the Americas. The word adapted to local languages and cooking styles: barbecue in English, barbacoa remaining in Spanish but shifting to describe slow-cooked meat rather than the grill itself. In the American South, barbecue became an institution—regional styles developed, rivalries formed, and the cooking method became cultural identity.",
      "American barbecue spawned endless variations: Texas brisket, Carolina pulled pork, Kansas City ribs, Memphis dry rub. Each region claims superiority; all trace to the Taino technique. The word expanded from noun (the grill, the meat, the event) to verb (to barbecue). It shortened to BBQ, became an emoji, named countless restaurants.",
      "Today barbecue is a global phenomenon. Japanese yakiniku, Korean gogi-gui, South African braai, Argentine asado—many cultures have grilling traditions, but 'barbecue' specifically names the American version that spread worldwide. The Taino wooden frame, adapted through five centuries of cooking, became a word for gathering, celebration, and smoked meat across the English-speaking world."
    ],
    journey: [
      { location: "Caribbean", period: "pre-Columbian", form: "barbacoa", script: "barbacoa", context: "Taino word for wooden smoking frame", color: "#8b4513", coordinates: [-69.9, 18.5] },
      { location: "Spanish Americas", period: "1500s", form: "barbacoa", context: "Spanish adopt technique and word", color: "#c41e3a", coordinates: [-99.1, 19.4] },
      { location: "American South", period: "1600s+", form: "barbecue", context: "English adaptation, regional styles develop", color: "#4a5568", coordinates: [-86.8, 33.5] },
      { location: "United States", period: "1900s", form: "BBQ", context: "National tradition, competitive culture", color: "#4a5568", coordinates: [-94.6, 39.1] },
      { location: "Global", period: "present", form: "barbecue/BBQ", context: "International word for American-style grilling", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Spanish (from Taino)", ipa: "/baɾβaˈkoa/", text: "barbacoa", lang: "es" },
      { label: "American English", ipa: "/ˈbɑːr.bɪ.kjuː/", text: "barbecue", lang: "en-US" },
      { label: "British English", ipa: "/ˈbɑː.bɪ.kjuː/", text: "barbecue", lang: "en-GB" }
    ],
    relatives: [
      { word: "papaya", language: "Taino", connection: "another Taino word that survived", available: true, slug: "papaya" },
      { word: "potato", language: "Taino", connection: "another Caribbean word that changed global eating", available: true, slug: "potato" },
      { word: "grill", language: "French", connection: "related cooking method, different etymology", available: false },
      { word: "smoke", language: "Germanic", connection: "the essential technique barbecue involves", available: false }
    ],
    meaningNow: "Barbecue's etymology connects America's most beloved cooking tradition to Caribbean indigenous technology. The Taino wooden frame became the Southern pit, became the backyard grill, became competitive cooking shows and restaurant chains. The word expanded with the culture.\n\nBarbecue also carries complex racial history. In the American South, enslaved Africans often did the actual cooking, developing techniques and recipes that white owners claimed. The history of barbecue is inseparable from the history of American race relations—Black pitmasters created traditions that were long denied credit. The Taino word names a practice that accumulated this weight: indigenous technique, African expertise, American mythology. Every barbecue gathers these histories, whether the people gathered acknowledge them or not."
  },
  {
    slug: "potato",
    word: "batata",
    romanization: "batata",
    language: "Taino",
    hook: "One Caribbean word for sweet potato became the name for a completely different Andean tuber—a case of mistaken identity that fed the world.",
    story: [
      "The word potato traces a path of confusion. When Spanish colonizers reached the Caribbean, they encountered the Taino people cultivating sweet potatoes, which the Taino called batata. The Spanish adopted the word. Later, when the Spanish reached South America, they found the Inca cultivating a different tuber—what we now call the potato (Solanum tuberosum). They called this new vegetable by the familiar Caribbean name, confusingly applying batata to something quite different.",
      "Spanish patata (derived from batata) became English potato by the late 16th century. The original sweet potato kept a version of its Taino name in many languages, while the Andean tuber claimed another version. Two unrelated plants, one Caribbean word, endless confusion. English distinguished them as 'potato' and 'sweet potato,' but the shared etymology remains.",
      "The Andean potato transformed world history. Introduced to Europe in the late 1500s, it eventually became a staple crop from Ireland to Russia. The potato enabled population growth, survived in poor soils, and stored well through winters. When potato blight struck Ireland in the 1840s, a million people died and millions more emigrated. A mislabeled tuber had become a civilization-altering food.",
      "Today the potato is the world's fourth-largest crop. French fries, chips, mash, vodka—the potato takes countless forms. The word potato appears in every European language, derived from the Taino batata that properly belongs to a different vegetable. The confusion persists five centuries later."
    ],
    journey: [
      { location: "Caribbean", period: "pre-Columbian", form: "batata", script: "batata", context: "Taino word for sweet potato", color: "#8b4513", coordinates: [-69.9, 18.5] },
      { location: "South America", period: "1530s", form: "patata/batata", context: "Spanish apply Taino word to Andean tuber", color: "#c41e3a", coordinates: [-77, -12] },
      { location: "Spain", period: "1570s", form: "patata", context: "Word and tuber reach Europe", color: "#c41e3a", coordinates: [-3.7, 40.4] },
      { location: "England", period: "1590s", form: "potato", context: "English adaptation of Spanish word", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "potato", context: "World's fourth-largest food crop", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "Taino (reconstructed)", ipa: "/baˈtata/", text: "batata", lang: "tnq" },
      { label: "Spanish", ipa: "/paˈtata/", text: "patata", lang: "es" },
      { label: "English", ipa: "/pəˈteɪ.toʊ/", text: "potato", lang: "en" }
    ],
    relatives: [
      { word: "barbecue", language: "Taino", connection: "another Taino word that transformed", available: true, slug: "barbecue" },
      { word: "tomato", language: "Nahuatl", connection: "another American food word (from tomatl)", available: false },
      { word: "sweet potato", language: "English/Taino", connection: "the vegetable batata originally named", available: false },
      { word: "papa", language: "Quechua", connection: "the original Andean word for the potato", available: false }
    ],
    meaningNow: "The potato's etymology is a story of colonial confusion. Spanish conquistadors weren't careful botanists; they applied a familiar word to an unfamiliar food. The Taino batata named sweet potatoes; the Quechua papa named what we call potatoes. But papa never made it into English—batata did, transformed beyond recognition.\n\nThe real Andean word, papa, survives in Spanish as an alternate term and in the scientific name Solanum tuberosum's common Latin American usage. But English speakers say potato, using a Caribbean word for a South American plant, testament to the linguistic chaos of colonization. The word's journey mirrors the tuber's: transplanted, transformed, severed from origins, and impossible to imagine the world without."
  }
];
