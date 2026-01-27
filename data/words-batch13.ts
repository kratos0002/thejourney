import type { Word } from "./word-types";

export const newWordsBatch13: Word[] = [
  {
    slug: "nemesis",
    word: "Νέμεσις",
    romanization: "Nemesis",
    language: "Ancient Greek",
    hook: "The Greeks personified the punishment for pride—she's been chasing the arrogant ever since.",
    story: [
      "In Greek mythology, Nemesis was the goddess of divine retribution, particularly the punishment of hubris—the arrogance of mortals who overstepped their bounds. Her name comes from the Greek verb nemein, meaning to give what is due, to distribute. Nemesis distributed justice to those who had too much, restoring balance to a universe that demanded it.",
      "The ancients depicted Nemesis with scales (for balance), a measuring rod (for limits), and sometimes a sword or whip (for punishment). She was not cruel—she was necessary. When fortune raised someone too high, when pride swelled beyond measure, Nemesis arrived to restore equilibrium. The Greeks understood that excessive good fortune was as dangerous as bad.",
      "The word entered English in the 16th century, initially referring to the goddess herself. By the 19th century, it had generalized: your nemesis became any agent of your downfall, particularly one you had brought upon yourself. The word carried its mythology forward—a nemesis wasn't random bad luck, but earned retribution.",
      "Today nemesis has softened further. We use it for rivals, for persistent opponents, for the coworker who always one-ups us. But the original meaning persists in contexts like \"hubris and nemesis\"—the Greek formula that still describes how the mighty fall."
    ],
    journey: [
      { location: "Greece", period: "~700 BCE", form: "Nemesis", script: "Νέμεσις", context: "Goddess of divine retribution in mythology", color: "#5c5a4a", coordinates: [23.7, 38] },
      { location: "Athens", period: "500-300 BCE", form: "nemesis", context: "Concept central to Greek tragedy", color: "#5c5a4a", coordinates: [23.7, 37.9] },
      { location: "Rome", period: "100 BCE", form: "Nemesis", context: "Romans adopt the goddess for their pantheon", color: "#5c5a4a", coordinates: [12.5, 41.9] },
      { location: "England", period: "1560s", form: "nemesis", context: "Enters English via classical scholarship", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "nemesis", context: "Means arch-rival or agent of downfall", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Ancient Greek", ipa: "/né.me.sis/", text: "Νέμεσις", lang: "grc" },
      { label: "Latin", ipa: "/ˈne.me.sis/", text: "Nemesis", lang: "la" },
      { label: "English", ipa: "/ˈnem.ə.sɪs/", text: "nemesis", lang: "en" }
    ],
    relatives: [
      { word: "hubris", language: "Greek", connection: "the excessive pride that summons nemesis", available: true, slug: "hubris" },
      { word: "nemein", language: "Greek", connection: "to distribute—the verb root meaning 'give what is due'", available: false },
      { word: "chaos", language: "Greek", connection: "another Greek concept personified as cosmic force", available: true, slug: "chaos" },
      { word: "fortune", language: "Latin", connection: "Roman goddess—nemesis balanced fortune's gifts", available: false }
    ],
    meaningNow: "Nemesis has become domesticated in modern English—reduced from cosmic avenger to workplace rival. We call someone our nemesis if they beat us at trivia or always get the promotion.\n\nBut the original concept still applies. Every era has its nemesis stories: the tyrant overthrown, the corporation that grew too fast, the politician undone by the very tactics that built their power. The Greeks understood that success plants the seeds of its own destruction. Nemesis is just the gardener."
  },
  {
    slug: "condor",
    word: "kuntur",
    romanization: "kuntur",
    language: "Quechua",
    hook: "The Andean bird that carries souls to the sun—its name flew from Inca temples to California skies.",
    story: [
      "In the Quechua language of the Inca Empire, kuntur named the massive bird that soared above the Andes—the largest flying bird in the Western Hemisphere, with a wingspan reaching ten feet. For Andean peoples, the condor wasn't just an impressive animal; it was a sacred messenger between the world of the living and the realm of the sun.",
      "Inca cosmology divided the universe into three realms: the underworld (associated with the serpent), the earthly world (the puma), and the heavens (the condor). The condor represented the upper world, the realm of the gods and the sun. When important people died, condors were believed to carry their souls upward. The bird appears throughout Andean art, architecture, and ceremony.",
      "Spanish conquistadors heard kuntur and adapted it to their phonology: cóndor. The word traveled back to Europe with tales of the New World's marvels. By the 18th century, condor had entered English and French, naming both the Andean species and the related California condor discovered later.",
      "Today condors face extinction. The California condor dropped to just 27 birds in 1987 before captive breeding programs began recovery. The Andean condor remains vulnerable. The sacred carrier of souls now depends on human conservation efforts—the messenger from the heavens needs earthly help."
    ],
    journey: [
      { location: "Andes", period: "ancient", form: "kuntur", script: "kuntur", context: "Sacred bird in Inca cosmology", color: "#8b5a2b", coordinates: [-72, -13.5] },
      { location: "Cusco", period: "1400s", form: "kuntur", context: "Central to Inca religion and art", color: "#8b5a2b", coordinates: [-72, -13.5] },
      { location: "Spain", period: "1550s", form: "cóndor", context: "Spanish adapt the Quechua word", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Europe", period: "1700s", form: "condor", context: "Word spreads with natural history writing", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "California", period: "1800s", form: "condor", context: "Applied to North American species", coordinates: [-118.3, 34.1] }
    ],
    sounds: [
      { label: "Quechua", ipa: "/ˈkun.tur/", text: "kuntur", lang: "qu" },
      { label: "Spanish", ipa: "/ˈkon.dor/", text: "cóndor", lang: "es" },
      { label: "English", ipa: "/ˈkɒn.dɔːr/", text: "condor", lang: "en" }
    ],
    relatives: [
      { word: "puma", language: "Quechua", connection: "another Quechua animal word representing the earthly realm", available: false },
      { word: "jaguar", language: "Tupi-Guarani", connection: "South American predator word that also went global", available: true, slug: "jaguar" },
      { word: "vulture", language: "Latin", connection: "related scavenging bird family", available: false },
      { word: "coca", language: "Quechua", connection: "another sacred Andean word that traveled worldwide", available: false }
    ],
    meaningNow: "The condor's journey from sacred symbol to endangered species mirrors a larger story. Indigenous peoples saw the bird as divine; colonial science classified it as fauna; modern conservation fights to keep it alive at all.\n\nYet the original meaning persists in Andean communities. Condors still appear in ceremonies, artwork, and national symbols across South America. The bird on Peru's coat of arms isn't just wildlife—it's kuntur, the messenger to the sun. When conservationists work to save the species, they're preserving more than biology. They're keeping a word's oldest meaning alive."
  },
  {
    slug: "ombudsman",
    word: "ombudsman",
    romanization: "ombudsman",
    language: "Swedish",
    hook: "In 1809, Sweden invented a new kind of official—the people's representative against the powerful.",
    story: [
      "The Swedish word ombudsman combines ombud (representative, agent, proxy) with man (person). The compound literally means 'representative person'—someone who speaks on behalf of others. The concept existed in Swedish law for centuries, but it became famous in 1809 when Sweden's new constitution created the Justitieombudsman: a parliamentary official to investigate citizen complaints against government abuse.",
      "Sweden had just lost Finland to Russia, and the king had been deposed. The new constitutional order needed mechanisms to prevent future tyranny. The ombudsman would be appointed by parliament, independent of the executive, with power to investigate any government official. Citizens who felt wronged by bureaucracy had someone who would listen.",
      "For 150 years, the ombudsman remained a Swedish peculiarity. Then other nations noticed. Finland adopted the concept in 1920, Denmark in 1955, Norway in 1962. By the late 20th century, ombudsmen appeared worldwide—investigating everything from military abuses to university grievances to newspaper ethics.",
      "The word entered English unchanged because no equivalent existed. English had advocates, inspectors, and watchdogs, but nothing quite matched the ombudsman's combination of accessibility, independence, and investigative power. Swedish gave English the word because Sweden invented the job."
    ],
    journey: [
      { location: "Sweden", period: "medieval", form: "umbups maþer", script: "umbups maþer", context: "Old Swedish legal term for representative", color: "#4a5568", coordinates: [18.1, 59.3] },
      { location: "Stockholm", period: "1809", form: "ombudsman", context: "Constitutional office created after coup", color: "#4a5568", coordinates: [18.1, 59.3] },
      { location: "Finland", period: "1920", form: "oikeusasiamies", context: "First adoption outside Sweden", color: "#4a5568", coordinates: [24.9, 60.2] },
      { location: "Denmark", period: "1955", form: "ombudsmand", context: "Scandinavian spread continues", color: "#4a5568", coordinates: [12.6, 55.7] },
      { location: "Global", period: "1960s+", form: "ombudsman", context: "Adopted worldwide, enters English", coordinates: [-77, 38.9] }
    ],
    sounds: [
      { label: "Swedish", ipa: "/ˈɔmːbʉːdsˌman/", text: "ombudsman", lang: "sv" },
      { label: "English", ipa: "/ˈɒm.bʊdz.mən/", text: "ombudsman", lang: "en" }
    ],
    relatives: [
      { word: "ombud", language: "Swedish", connection: "representative, proxy—the root word", available: false },
      { word: "advocate", language: "Latin", connection: "similar role of speaking for others", available: false },
      { word: "smorgasbord", language: "Swedish", connection: "another Swedish word that entered English unchanged", available: false },
      { word: "parliament", language: "French", connection: "the body that appoints the ombudsman", available: false }
    ],
    meaningNow: "The ombudsman concept spread because modern bureaucracies needed it. As governments grew larger and more complex, citizens felt powerless against impersonal systems. The ombudsman promised someone would listen, investigate, and advocate.\n\nToday nearly every democracy has ombudsmen of some kind. Universities, corporations, and newspapers appoint them. The word has even been adapted: ombudsperson (gender-neutral), ombuds (shortened). Sweden's 1809 innovation proved prophetic—the powerful will always need watching, and someone must speak for those without power."
  },
  {
    slug: "yin-yang",
    word: "陰陽",
    romanization: "yīn yáng",
    language: "Mandarin Chinese",
    hook: "Shadow and light, passive and active—the Chinese saw the universe as opposites completing each other.",
    story: [
      "In Chinese philosophy, yīn (陰) originally meant the shady side of a hill, while yáng (陽) meant the sunny side. From this simple observation of a hillside—one side dark, one bright, constantly shifting as the sun moves—grew one of humanity's most influential concepts: that all existence consists of complementary opposites.",
      "The yin-yang concept developed over centuries, formalized during the Zhou Dynasty (1046-256 BCE) and elaborated by philosophers like Zou Yan. Yin represented darkness, passivity, femininity, cold, earth, and contraction. Yang represented light, activity, masculinity, heat, heaven, and expansion. Neither was good or evil—both were necessary, each containing the seed of the other.",
      "The famous yin-yang symbol (taijitu)—the circle with interlocking black and white halves, each containing a dot of the other's color—became one of the world's most recognized images. It visualizes the philosophy perfectly: opposites flowing into each other, never static, always balanced.",
      "The concept entered Western awareness through Jesuit missionaries in the 17th century and became widely known during the 20th century counterculture. Today yin-yang appears everywhere from philosophy courses to corporate logos, often simplified beyond its original subtlety."
    ],
    journey: [
      { location: "China", period: "~1000 BCE", form: "yīn yáng", script: "陰陽", context: "Concept develops from observing hillsides", color: "#2d4a3b", coordinates: [116.4, 39.9] },
      { location: "China", period: "300 BCE", form: "yīn yáng", context: "Zou Yan formalizes yin-yang school", color: "#2d4a3b", coordinates: [117, 36.7] },
      { location: "China", period: "200 BCE+", form: "yīn yáng", context: "Integrates with Confucianism and Taoism", color: "#2d4a3b", coordinates: [116.4, 39.9] },
      { location: "Europe", period: "1600s", form: "yin-yang", context: "Jesuit missionaries describe Chinese philosophy", color: "#4a5568", coordinates: [12.5, 41.9] },
      { location: "Global", period: "1900s+", form: "yin-yang", context: "Symbol becomes globally recognized", coordinates: [-122.4, 37.8] }
    ],
    sounds: [
      { label: "Mandarin", ipa: "/in˥ jɑŋ˧˥/", text: "陰陽", lang: "zh" },
      { label: "Cantonese", ipa: "/jɐm˥ jœŋ˧˥/", text: "陰陽", lang: "yue" },
      { label: "English", ipa: "/ˌjɪn ˈjæŋ/", text: "yin-yang", lang: "en" }
    ],
    relatives: [
      { word: "taijitu", language: "Chinese", connection: "the famous circular symbol representing yin-yang", available: false },
      { word: "qi", language: "Chinese", connection: "vital energy that yin-yang forces move", available: false },
      { word: "kung fu", language: "Chinese", connection: "Chinese term often associated with philosophical traditions", available: true, slug: "kung-fu" },
      { word: "tao/dao", language: "Chinese", connection: "the way—the larger philosophy yin-yang fits within", available: false }
    ],
    meaningNow: "Yin-yang has been both preserved and distorted in its global spread. The genuine concept offers profound insights: that opposites define each other, that extremes transform into their opposites, that balance is dynamic rather than static.\n\nBut Western pop culture often reduces it to a simple good/evil binary or a vague gesture toward 'balance.' The dots within each half—yin contains yang, yang contains yin—get ignored. The original philosophy was more radical: there is no pure light, no pure dark, no moment without both. That subtlety often gets lost when Chinese characters become English buzzwords."
  },
  {
    slug: "meme",
    word: "meme",
    romanization: "meme",
    language: "English (coined 1976)",
    hook: "Richard Dawkins invented a word for ideas that replicate like genes—then the internet proved him right.",
    story: [
      "In 1976, evolutionary biologist Richard Dawkins published The Selfish Gene, arguing that natural selection operates on genes rather than organisms. In the final chapter, he proposed that culture might work similarly: ideas, behaviors, and styles spread by copying themselves from mind to mind. He needed a word for a unit of cultural transmission analogous to the gene.",
      "Dawkins coined meme from the Greek mimema (something imitated), deliberately shortening it to rhyme with gene. A meme was anything that replicated through imitation: tunes, catchphrases, fashion, religious beliefs. Good memes spread; bad memes died out. Culture evolved through memetic selection.",
      "For two decades, meme remained an academic term, debated by philosophers and cognitive scientists. Then came the internet. Suddenly, cultural units could replicate with unprecedented speed and fidelity. By the 2000s, 'internet meme' described viral images, videos, and jokes—and eventually just meme alone meant shareable internet content.",
      "Dawkins watched his coinage transform. The academic concept of memetics faded while meme flourished in exactly the way he had theorized—replicating, mutating, competing for attention. The word that named cultural evolution became one of the most successful examples of it."
    ],
    journey: [
      { location: "Oxford", period: "1976", form: "meme", context: "Dawkins coins the term in The Selfish Gene", color: "#4a5568", coordinates: [-1.3, 51.8] },
      { location: "Academia", period: "1980s-90s", form: "meme", context: "Memetics debated as scientific theory", color: "#4a5568", coordinates: [-71.1, 42.4] },
      { location: "Internet", period: "1990s", form: "meme", context: "Early net culture adopts the term", color: "#4a5568", coordinates: [-122.4, 37.8] },
      { location: "4chan/Reddit", period: "2000s", form: "meme", context: "Image macros and viral content explode", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "2010s+", form: "meme", context: "Everyone knows what a meme is", coordinates: [0, 20] }
    ],
    sounds: [
      { label: "English (Dawkins)", ipa: "/miːm/", text: "meme", lang: "en" },
      { label: "Greek root", ipa: "/mǐː.mɛː.ma/", text: "μίμημα", lang: "grc" }
    ],
    relatives: [
      { word: "gene", language: "English", connection: "the biological analog Dawkins was imitating", available: false },
      { word: "mimesis", language: "Greek", connection: "imitation—the root concept", available: false },
      { word: "viral", language: "Latin/English", connection: "the metaphor we use for how memes spread", available: false },
      { word: "emoji", language: "Japanese", connection: "another new word for new digital communication", available: true, slug: "emoji" }
    ],
    meaningNow: "Meme is one of the rare academic coinages that escaped into mass usage—and changed meaning in the process. Dawkins meant something broad: any cultural unit that replicates. The internet narrowed it to shareable content, especially humorous images.\n\nBut perhaps the original meaning is returning. Political movements, conspiracy theories, and cultural trends spread with memetic ferocity. The internet has made Dawkins's abstraction concrete. We can watch memes mutate in real time, track their spread, observe their competition. The word for the gene of ideas has become one of the most successful idea-genes of our time."
  },
  {
    slug: "smorgasbord",
    word: "smörgåsbord",
    romanization: "smorgasbord",
    language: "Swedish",
    hook: "The bread-and-butter table that became a word for overwhelming abundance.",
    story: [
      "In Swedish, smörgåsbord combines smörgås (open sandwich, literally 'butter-goose'—the pat of butter floating on bread) with bord (table). Originally it described a specific tradition: the preliminary table of appetizers served before a formal Swedish meal, featuring bread, butter, cheese, herring, and cold cuts.",
      "The smörgåsbord evolved from medieval Scandinavian hospitality customs. When guests gathered, hosts displayed food on a side table for casual grazing before the main meal. By the 19th century, the tradition had become elaborate—dozens of dishes arranged artfully, guests returning multiple times with clean plates.",
      "Swedish emigrants brought the tradition to America, where it merged with the American buffet concept. Swedish restaurants popularized it. By the mid-20th century, smörgåsbord had entered English as a general term for any lavish buffet spread—and then metaphorically for any overwhelming variety.",
      "Today smörgåsbord rarely refers to actual Swedish food in English. We speak of a smörgåsbord of options, a smörgåsbord of choices, a smörgåsbord of evidence. The word traveled from a butter-laden table in Stockholm to a metaphor for abundance everywhere."
    ],
    journey: [
      { location: "Sweden", period: "medieval", form: "smörgås + bord", script: "smörgås + bord", context: "Hospitality traditions develop", color: "#4a5568", coordinates: [18.1, 59.3] },
      { location: "Sweden", period: "1800s", form: "smörgåsbord", context: "Elaborate appetizer tables become standard", color: "#4a5568", coordinates: [18.1, 59.3] },
      { location: "United States", period: "1890s", form: "smorgasbord", context: "Swedish immigrants open restaurants", color: "#4a5568", coordinates: [-93.3, 44.9] },
      { location: "America", period: "1930s", form: "smorgasbord", context: "Word enters mainstream English", color: "#4a5568", coordinates: [-74, 40.7] },
      { location: "Global", period: "present", form: "smorgasbord", context: "Metaphor for overwhelming variety", coordinates: [-122.4, 37.8] }
    ],
    sounds: [
      { label: "Swedish", ipa: "/ˈsmœrɡɔsˌbuːɖ/", text: "smörgåsbord", lang: "sv" },
      { label: "English", ipa: "/ˈsmɔːɡ.əs.bɔːrd/", text: "smorgasbord", lang: "en" }
    ],
    relatives: [
      { word: "buffet", language: "French", connection: "similar self-serve dining concept", available: false },
      { word: "ombudsman", language: "Swedish", connection: "another Swedish word English adopted unchanged", available: true, slug: "ombudsman" },
      { word: "smörgås", language: "Swedish", connection: "open sandwich—half of the compound", available: false },
      { word: "fika", language: "Swedish", connection: "Swedish coffee break tradition, increasingly known globally", available: false }
    ],
    meaningNow: "Smorgasbord has become almost entirely metaphorical in English. We rarely use it for actual buffets, preferring it for abstract abundance: a smorgasbord of career options, a smorgasbord of streaming content, a smorgasbord of political positions.\n\nThe metaphor carries hidden judgment. A smorgasbord suggests too much, not just enough. It implies we must choose from overwhelming options, that abundance itself is a burden. The word for a generous Swedish table now often expresses anxiety about excess. That shift reveals something about how abundance feels in the modern world."
  },
  {
    slug: "puma",
    word: "puma",
    romanization: "puma",
    language: "Quechua",
    hook: "The Inca word for their sacred mountain lion now sells sneakers worldwide.",
    story: [
      "In Quechua, the language of the Inca Empire, puma named the powerful cat that stalked the Andes—known in English also as mountain lion, cougar, or panther depending on region. For Andean peoples, the puma wasn't just a predator; it represented the earthly realm in the three-part Inca cosmos (condor for heavens, puma for earth, serpent for underworld).",
      "Spanish colonizers encountered the puma and adopted its Quechua name. The word traveled to Europe with other New World vocabulary. European naturalists classified the animal, but the Quechua name stuck—more distinctive than 'American lion' or other alternatives proposed.",
      "The puma's range is extraordinary: from Canadian Yukon to Patagonia, the widest range of any large terrestrial mammal in the Western Hemisphere. Its name traveled even further. In 1948, Rudolf Dassler founded a German sportswear company and named it Puma, seeking an animal name to rival his brother's company, Adidas.",
      "Today more people know puma as a shoe brand than as an animal. The Quechua word that named a sacred symbol of Inca cosmology now appears on sneakers, tracksuits, and soccer jerseys. The mountain lion's name runs marathons."
    ],
    journey: [
      { location: "Andes", period: "ancient", form: "puma", script: "puma", context: "Sacred animal in Inca cosmology", color: "#8b5a2b", coordinates: [-72, -13.5] },
      { location: "Cusco", period: "1400s", form: "puma", context: "City laid out in shape of puma", color: "#8b5a2b", coordinates: [-72, -13.5] },
      { location: "Spain", period: "1550s", form: "puma", context: "Spanish adopt Quechua word", color: "#5c5a4a", coordinates: [-3.7, 40.4] },
      { location: "Germany", period: "1948", form: "Puma", context: "Rudolf Dassler names his sportswear company", color: "#4a5568", coordinates: [11, 49.5] },
      { location: "Global", period: "present", form: "puma/Puma", context: "Animal name and global brand", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Quechua", ipa: "/ˈpu.ma/", text: "puma", lang: "qu" },
      { label: "Spanish", ipa: "/ˈpu.ma/", text: "puma", lang: "es" },
      { label: "English", ipa: "/ˈpjuː.mə/", text: "puma", lang: "en" }
    ],
    relatives: [
      { word: "condor", language: "Quechua", connection: "another Inca sacred animal word that went global", available: true, slug: "condor" },
      { word: "jaguar", language: "Tupi-Guarani", connection: "another American big cat with indigenous name", available: true, slug: "jaguar" },
      { word: "cougar", language: "Tupi via Portuguese", connection: "another name for the same animal", available: false },
      { word: "coca", language: "Quechua", connection: "another Quechua word with complex modern legacy", available: false }
    ],
    meaningNow: "The puma illustrates how indigenous words survive colonialism only to be colonized again by commerce. The Quechua name outlasted Spanish attempts to rename the animal. But corporate branding achieved what conquistadors couldn't: for millions, puma now means shoes first, cat second.\n\nYet the original meaning persists. In Peru, the puma remains a national symbol. Cusco's historic center still follows the puma-shaped layout the Inca planned. The earthly realm of Inca cosmology has adapted to a world where its name appears on athletic wear—but hasn't been forgotten."
  },
  {
    slug: "pistol",
    word: "píšťala",
    romanization: "pistala",
    language: "Czech",
    hook: "From medieval pipe to revolutionary weapon—the Hussites changed warfare and vocabulary.",
    story: [
      "In Czech, píšťala originally meant a pipe or tube—related to the verb pištět (to whistle or squeak). The word likely first referred to shepherd's pipes and wind instruments. But during the Hussite Wars of the 15th century, Czech innovators applied the name to a new weapon: a handheld gun small enough to fire from horseback.",
      "The Hussite Wars (1419-1434) were a revolutionary moment in military history. Czech followers of the reformer Jan Hus, facing crusades from Catholic Europe, developed new tactics and technologies. Their mounted soldiers carried small firearms—píšťaly—that gave cavalry unprecedented firepower. The weapon spread across Europe with its Czech name.",
      "German adopted the word as Pistole; Italian as pistola; French as pistolet; English as pistol. Each language adapted the pronunciation, but the Czech origin remained traceable. Some etymologists have proposed alternative origins (the city of Pistoia in Italy, for instance), but the Czech derivation has the strongest documentary support.",
      "By the 16th century, the pistol had evolved from military innovation to gentleman's accessory to dueling weapon. The word that began as a pipe had come to mean the small firearm that transformed personal combat and eventually policing, crime, and self-defense worldwide."
    ],
    journey: [
      { location: "Bohemia", period: "1400s", form: "píšťala", script: "píšťala", context: "Czech word for pipe applied to new weapon", color: "#5c5a4a", coordinates: [14.4, 50.1] },
      { location: "Central Europe", period: "1420-1434", form: "píšťala", context: "Hussite Wars spread the weapon and word", color: "#5c5a4a", coordinates: [14.4, 50.1] },
      { location: "Germany/Italy", period: "1500s", form: "Pistole/pistola", context: "Word adapts across languages", color: "#5c5a4a", coordinates: [11.3, 44.5] },
      { location: "England", period: "1570s", form: "pistol", context: "Enters English via continental wars", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "pistol", context: "Universal term for handgun", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Czech", ipa: "/ˈpiːʃcala/", text: "píšťala", lang: "cs" },
      { label: "German", ipa: "/pɪsˈtoːlə/", text: "Pistole", lang: "de" },
      { label: "English", ipa: "/ˈpɪs.təl/", text: "pistol", lang: "en" }
    ],
    relatives: [
      { word: "píšťala", language: "Czech", connection: "pipe, tube—the original meaning", available: false },
      { word: "robot", language: "Czech", connection: "another Czech word that named a world-changing innovation", available: true, slug: "robot" },
      { word: "gun", language: "Norse via English", connection: "the broader category pistols belong to", available: false },
      { word: "howitzer", language: "Czech", connection: "another military term with Czech origins", available: false }
    ],
    meaningNow: "The pistol transformed society in ways still unfolding. From Hussite cavalry to Wild West gunfighters to modern debates about gun control, the handheld firearm has shaped history. The Czech word for pipe became the name of one of humanity's most controversial inventions.\n\nThe etymology carries irony. Píšťala meant something that makes music—shepherd's pipes, whistles. The Hussites repurposed the word for something that makes a different kind of sound. The pipe that once played tunes learned to fire bullets. Words, like weapons, can be turned to new purposes."
  },
  {
    slug: "pogrom",
    word: "погром",
    romanization: "pogrom",
    language: "Russian",
    hook: "Russia gave the world a word for organized mass violence—because the world needed to name what was happening.",
    story: [
      "In Russian, pogrom (погром) comes from the verb gromit' (громить)—to destroy, to wreak havoc, to demolish. The prefix po- adds intensity: a pogrom is a thorough destruction. The word existed in Russian before it gained its terrible specific meaning, used for storms, raids, and general devastation.",
      "In 1881, following the assassination of Tsar Alexander II (falsely blamed on Jews), waves of anti-Jewish violence swept the Russian Empire. Mobs attacked Jewish communities in over 200 cities and towns, killing, destroying property, and forcing mass emigration. Russians had a word for this kind of organized destruction: pogrom. The word traveled internationally because the events did too.",
      "Pogroms continued into the 20th century, most devastatingly in 1903 (Kishinev) and 1905. Each wave sent more Jewish refugees westward, carrying the word with them. By World War I, pogrom had entered English, French, and German, no longer needing translation. It meant specifically anti-Jewish mass violence—and by extension, any organized persecution of a minority.",
      "The word eventually expanded beyond its specific Jewish context. We now speak of pogroms against other groups, though historians debate whether this dilutes the term's historical meaning. The Russian word for destruction named a particular kind of state-tolerated mob violence that recurred so often it required its own vocabulary."
    ],
    journey: [
      { location: "Russia", period: "ancient", form: "погром", script: "погром", context: "General word for destruction, devastation", color: "#4a5568", coordinates: [37.6, 55.8] },
      { location: "Russian Empire", period: "1881", form: "pogrom", context: "Waves of anti-Jewish violence begin", color: "#6b2d3d", coordinates: [30.5, 50.5] },
      { location: "Kishinev", period: "1903", form: "pogrom", context: "Devastating attack gains international attention", color: "#6b2d3d", coordinates: [28.8, 47] },
      { location: "Western Europe", period: "1880s+", form: "pogrom", context: "Refugees bring word to new countries", color: "#4a5568", coordinates: [2.3, 48.9] },
      { location: "Global", period: "present", form: "pogrom", context: "Word for organized ethnic violence", coordinates: [-74, 40.7] }
    ],
    sounds: [
      { label: "Russian", ipa: "/pɐˈɡrom/", text: "погром", lang: "ru" },
      { label: "Yiddish", ipa: "/ˈpɔɡrɔm/", text: "פּאָגראָם", lang: "yi" },
      { label: "English", ipa: "/ˈpɒɡ.rɒm/", text: "pogrom", lang: "en" }
    ],
    relatives: [
      { word: "gromit'", language: "Russian", connection: "to destroy—the verb root", available: false },
      { word: "genocide", language: "Greek/Latin", connection: "related term for mass violence, coined 1944", available: false },
      { word: "perestroika", language: "Russian", connection: "another Russian word entering English for historical events", available: true, slug: "perestroika" },
      { word: "Shoah", language: "Hebrew", connection: "term for the Holocaust, another word born from catastrophe", available: false }
    ],
    meaningNow: "Pogrom joined English vocabulary because English speakers needed to name events happening to people seeking refuge among them. The word's spread tracked the refugees' journeys—from the Pale of Settlement to London, Paris, and New York.\n\nThe word carries a warning. Pogroms didn't happen spontaneously; they were organized, tolerated, sometimes encouraged by authorities. The Russian word preserves this history: destruction that isn't random but systematic, violence that isn't isolated but coordinated. When we use the word, we invoke that pattern—and the obligation to recognize it when it recurs."
  },
  {
    slug: "paddy",
    word: "padi",
    romanization: "padi",
    language: "Malay",
    hook: "The rice field named the grain that feeds half of humanity.",
    story: [
      "In Malay, padi refers to rice in the field—the growing plant with grain still on the stalk. It's distinct from beras (hulled rice) and nasi (cooked rice). The Malay language, like many Asian languages, has specific vocabulary for rice at each stage of processing, reflecting the crop's cultural centrality.",
      "European traders encountered wet rice cultivation in the Malay Archipelago and adopted padi as paddy. The word came to mean both the rice plant and the flooded field where it grows—a paddy field or rice paddy. From this regional term, a global vocabulary spread with the global rice trade.",
      "Rice cultivation requires extraordinary labor: flooded fields must be built and maintained, seedlings transplanted by hand, water levels carefully managed. The paddy system developed independently in several Asian regions and spread through cultural contact. Today rice feeds more people than any other grain—over three billion people rely on it daily.",
      "The English word paddy now appears in terms like 'paddy wagon' (possibly from the fields where Irish immigrants worked, or ethnic slur—origins disputed) and 'paddy field' (redundant, since paddy already means field). The Malay word for wet rice traveled further than the water buffalo that once worked the paddies."
    ],
    journey: [
      { location: "Southeast Asia", period: "ancient", form: "padi", script: "padi", context: "Malay word for rice-in-field", color: "#2d4a3b", coordinates: [110, 0] },
      { location: "Malay Archipelago", period: "1500s", form: "padi", context: "Portuguese and Dutch traders encounter term", color: "#4a7c7c", coordinates: [110.4, -7.8] },
      { location: "British India", period: "1600s", form: "paddy", context: "English traders adopt the word", color: "#8b5a2b", coordinates: [80, 13] },
      { location: "Global trade", period: "1700s+", form: "paddy", context: "Word spreads with rice commerce", color: "#4a5568", coordinates: [-0.1, 51.5] },
      { location: "Global", period: "present", form: "paddy", context: "Standard term for wet rice and fields", coordinates: [116.4, 39.9] }
    ],
    sounds: [
      { label: "Malay", ipa: "/ˈpa.di/", text: "padi", lang: "ms" },
      { label: "English", ipa: "/ˈpæd.i/", text: "paddy", lang: "en" }
    ],
    relatives: [
      { word: "rice", language: "Greek via Latin", connection: "the general English term for the grain", available: false },
      { word: "sarong", language: "Malay", connection: "another Malay word that entered English", available: true, slug: "sarong" },
      { word: "beras", language: "Malay", connection: "husked rice—a different stage of processing", available: false },
      { word: "nasi", language: "Malay", connection: "cooked rice—yet another term", available: false }
    ],
    meaningNow: "Paddy reminds us that the world's most important food has vocabularies shaped by the cultures that depend on it most. English, from a wheat-based agricultural tradition, borrowed paddy because it lacked specific words for wet rice cultivation. The loan acknowledges expertise.\n\nToday rice paddies face threats from climate change, urbanization, and changing diets. The flooded fields that sustain billions require enormous water and labor. The Malay word preserves knowledge of a cultivation system that may need to adapt or disappear. When we say paddy, we're using a word from people who understood this grain so well they had names for each stage of its journey from field to bowl."
  }
];
