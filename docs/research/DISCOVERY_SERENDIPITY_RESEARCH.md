# Discovery & Serendipity Research

## Research Question

**How do people explore when there's no search intent?**

This research investigates discovery patterns to inform The Journey's discovery drawer design and overall exploration experience.

---

## Executive Summary

After analyzing discovery patterns across Spotify, Pinterest, TikTok, Netflix, museums, and academic research on information-seeking behavior, we've identified key principles for designing discovery in a small, curated catalog like The Journey.

### Key Findings

1. **Browsing dominates search** — Only 5-21% of users start with search; most prefer recognition over recall
2. **Serendipity requires balance** — The sweet spot is "unexpected but relevant," not pure randomness
3. **Curated rows beat infinite scroll** — Netflix's 80%+ discovery rate comes from themed, ranked rows
4. **Museums design for two types** — "Wanderers" want freedom; "structured explorers" want guidance
5. **Small catalogs are different** — With 150 items, exhaustive browsing is possible; focus on paths, not filters
6. **"Surprise Me" buttons fail** — Netflix killed theirs; feeds with built-in serendipity work better
7. **Berrypicking is natural** — Users collect information "bit by bit," evolving their intent as they explore

### Strategic Recommendations for The Journey

| Priority | Recommendation | Rationale |
|----------|----------------|-----------|
| 1 | **Curated Journeys** over filters | Create editorial paths ("Words of War," "Food's Travels") |
| 2 | **Visual browsing** | Show words on the globe; let recognition drive discovery |
| 3 | **Gentle suggestions** | "If you liked qahwa..." connections between words |
| 4 | **Serendipitous rotation** | Different words highlighted on each visit |
| 5 | **Minimal search** | Only add search at 200+ words; browsing scales for now |

---

## Part 1: Platform Analysis

### Spotify: Balancing Familiarity and Novelty

**How it works:**
Spotify's recommendation system (BaRT — Bandits for Recommendations as Treatments) combines three approaches:
- **Collaborative filtering:** "Users like you also liked..."
- **Content-based filtering:** Analyzing actual audio characteristics via neural networks
- **Natural language processing:** Understanding cultural trends and contexts

**Key insight on serendipity:**
> "A song might be very similar to your taste profile but if similar users always skipped that song, the system may rank it lower. Conversely, a slightly left-field song that nonetheless has high engagement from the few people who tried it might get a bump."

**The bubble problem:**
> "What we've gained in convenience, we've lost in curiosity. Our unlimited access lets us listen to diverse genres, but this abundance of choice actually makes our listening experience less expansive."

**2025 update:** Spotify now lets users "steer the algorithm with their own words" — creating custom discovery prompts. This suggests users want *agency* in their serendipity.

**Implications for The Journey:**
- Don't just show "similar" words — surface unexpected connections
- Let exploration history inform suggestions, but introduce novelty
- Consider letting users express preferences ("Show me words from trade routes")

---

### Pinterest: Graph-Based Discovery Without Search

**How it works:**
Pinterest uses three systems working together:
- **Content Graph:** Understanding what pins are about
- **User Graph:** Understanding what each person wants
- **Pixie System:** Walking through the content graph from recent engagements to find related content

**The random walk algorithm:**
> "Pixie finds the Pins most relevant to the user by applying a random walk algorithm for 100,000 steps. At each step, it selects a random neighbor and visits the node."

**Key insight:** Over 50% of all pins saved daily come from Pixie recommendations — not search.

**Board structure matters:**
> "Pinterest favors boards that are focused on single, specific topics rather than diverse collections. A board called 'Healthy Dinner Recipes' will perform better than a board called 'Food Ideas.'"

**Implications for The Journey:**
- Create focused "collections" (themed paths) rather than general categories
- The globe's spatial organization is valuable — words near each other create natural discovery
- "Explore from here" functionality could work like Pinterest's random walk

---

### TikTok: The Interest Graph Revolution

**How it works:**
TikTok's FYP represents a paradigm shift: content is shown based on predicted enjoyment, regardless of creator popularity or prior connection.

**The serendipity balance:**
> "TikTok's success lies in its unique integration of both predictive accuracy and serendipitous discovery, creating an 'indeterminacy center' that keeps users engaged."

**Multiple discovery pathways:**
- For You page (algorithmic)
- Following feed (social)
- Live feed
- Music feed
- Search with auto-complete

**2025 focus:** The algorithm now emphasizes "micro-virality" — building around communities, not random viral hits. Shares and Saves are weighted heavily.

**Implications for The Journey:**
- Multiple entry points to discovery (globe, lists, paths, random)
- "Interest graph" thinking: words connected by theme, not just geography
- The equivalent of "Shares" is word exploration — surface "most explored" words

---

### Netflix: Curated Rows Beat Choice Paralysis

**How it works:**
> "Each row on Netflix is curated around a specific theme, such as 'Because You Watched,' 'Trending Now,' or 'Top Picks for You.' The content within these rows is ranked according to relevance and predicted engagement."

**Row placement science:**
> "Research has shown that users tend to focus on the top left of the screen, so the material most likely to be selected by users is placed to the left of the recommendation rows."

**The 80% stat:** Over 80% of what people watch on Netflix comes from personalized recommendations — not search or browsing the full catalog.

**Human + algorithmic curation:**
> "Manual curation doesn't scale, but algorithmic curation can feel impersonal. Netflix strikes the balance by using algorithms to power human-feeling experiences. Their category names feel playful and specific rather than robotic."

**Choice paralysis solution:**
> "With over 15,000 titles available, presenting users with an endless grid of options would be overwhelming. Instead, Netflix curates personalized rows... Users don't need to process thousands of options—they're presented with algorithmically curated choices that feel manageable and relevant."

**Implications for The Journey:**
- Consider row-based organization on a future "collection" view
- Playful, specific naming for paths ("Words That Crossed Oceans")
- Limit visible options to reduce overwhelm
- Position "best bet" words prominently (top-left on globe?)

---

### Museums: Designing for Wanderers and Explorers

**Two visitor types:**
> "Visitors tend to have two main navigation styles: museum wanderers who prefer the freedom to discover themselves, and structured explorers who want more of a guided explanation."

**The serendipity principle:**
> "The best wayfinding systems should allow for – and even encourage – aimless wandering and serendipitous discovery, providing just enough, unobtrusive information for those who want it, while enabling others to delight in losing themselves."

**The 60% frustration stat:**
> "A 2022 study by the Visitor Experience Group found that more than 60% of museum visitors have experienced confusion or frustration due to inadequate signage or unclear layout."

**Design solution:**
> "Designed and implemented well, wayfinding and signage can fade into the background while empowering people to explore a museum or art gallery with confidence, curiosity, and comfort."

**Spatial features affect experience:**
> "Studies on this topic have usually linked peculiar spatial features—layout, wayfinding, intensity and type of lighting, colours—to general self-report evaluations, such as satisfaction feeling."

**Implications for The Journey:**
- The globe IS the wayfinding — it's our spatial organization
- Serve both types: wanderers (tap any word) and explorers (curated paths)
- Subtle indicators (glows, visited states) without intrusive labels
- The discovery drawer should "fade into the background" when not needed

---

## Part 2: Behavioral Research

### Browse vs. Search: The Recognition Advantage

**Search is rare:**
> "Searchers are more rare. Research at the Nielsen Norman Group indicates that most people just aren't very good at searching. Only about 5% of users were using search."

Other studies find 11-21% start with search, but browsers are always the majority.

**Why browsing wins:**
> "Recognition, as used by browsers, is simply determining that a link is the correct path forward. Recall, which is needed for searching, requires digging into your memory to find words that describe what you want."

> "People are better at recognizing things than recalling them from memory. It's much easier and faster to click on a link than to enter a search term."

**Evolving intent:**
> "Information needs are often unstable and may evolve as a user learns more about a subject area."

> "Unable to formulate the search phrase precisely right, they would need to trust the results returned by the engine. Finding that they're promising but not quite right, they may switch to browsing."

**Implications for The Journey:**
- The globe with visual words supports recognition over recall
- Search can wait until 200+ words
- Users' interests will evolve as they explore — let them "wander"
- Filter chips (origin, theme) support browsing without requiring recall

---

### The "Surprise Me" Button Problem

**Netflix killed it:**
> "With very little fanfare, Netflix sunset a UX feature that was half a decade in development. The company's Surprise Me feature, which played a randomized movie or show with the click of a button, was discontinued due to low use."

**Why it failed:**
> "While the Surprise Me button has failed, 'surprise me' is the fundamental sentiment driving the internet's UX today. Instead of a singular button, 'surprise me' has become the entire feed."

**Better approach:**
> "These feeds are designed to expedite the element of surprise. Instead of tapping a button and waiting to see what happens next, these feeds build the Surprise Me button into every single flick of your thumb."

**When random works:**
> "When deciding which items should be chosen, the computer should not pick 'whatever random item it can get' but 'a relevant random item.'"

**Implications for The Journey:**
- Don't add a "Random Word" button — it will be underused
- Instead, make the globe itself serendipitous:
  - Different words highlighted/glowing on each visit
  - Subtle animation drawing attention to unexplored words
  - "Featured word" rotation
- Randomness should feel curated, not arbitrary

---

### Berrypicking & Information Foraging Theory

**Berrypicking model (Bates):**
> "Information seeking does not follow a systematic search process but more commonly takes the form of 'berry picking', or finding information bit by bit using a range of sources."

> "Searches are evolving and occur bit by bit. A person constantly changes their search terms in response to the results returned."

**Information foraging theory:**
> "Based on the 'information scent' concept, information seekers detect and use cues (e.g., Web links or bibliographic citations) to move from one information patch to another, looking for relevant information."

> "Individuals weigh the costs of performing an action against the potential information gain."

**Exploratory search characteristics:**
> "Exploratory search is a specialised form of information searching behaviour that is open-ended, dynamic and multi-faceted in nature."

> "Exploratory information retrieval often involves ill-defined search goals and evolving criteria for evaluation of relevance."

**Implications for The Journey:**
- Users will "berry pick" — exploring one word leads to another via relatives
- The "information scent" is the hook — make hooks visible and compelling
- Support evolving exploration: show "recently explored" and "related to what you've seen"
- "Relatives" feature is crucial — it's the link between information patches

---

## Part 3: Recommendations for The Journey

### Discovery Drawer Design

Based on this research, here's how the discovery drawer should evolve:

**Current vision (from SEARCH_VISION.md):**
- Filter chips: By origin, By path, By theme
- Globe highlights matching words
- Real-time filtering

**Research-informed updates:**

| Original Design | Research-Informed Revision |
|-----------------|---------------------------|
| 3 filter rows (origin, path, theme) | Reduce to 2: **Journeys** (curated paths) + **Themes** |
| Multi-select chips | Single-select within rows (simpler mental model) |
| Technical origin names (Sanskrit, Germanic) | Evocative names ("Sacred Words of India," "Viking Echoes") |
| Filter = hide non-matching | Filter = dim non-matching (museum "focus" metaphor) |
| No personalization | Add "Continue Your Journey" — words related to last explored |

### Curated Journeys (New Feature)

Instead of pure filters, create **editorial paths** — themed explorations:

| Journey Name | Words Included | Hook |
|--------------|----------------|------|
| **The Spice Road** | qahwa, ketchup, sugar, tea, curry | "Words that traveled with merchants" |
| **Words of War** | assassin, algorithm, admiral, guerrilla | "Language born from conflict" |
| **Sacred Etymologies** | karma, nirvana, amen, hallelujah | "Words from temples and texts" |
| **The Colonial Exchange** | taboo, tattoo, safari, boondocks | "Words that crossed with empires" |
| **Untranslatable** | saudade, wanderlust, ubuntu, hygge | "Words no language could replace" |
| **Food's Travels** | qahwa, tomato, avocado, tofu, whiskey | "The journey from field to fork" |

**Implementation:**
- Horizontal carousel of journey cards in discovery drawer
- Tap a journey → globe rotates to show those words highlighted
- Each journey has a brief intro ("These words followed the Silk Road...")
- Progress indicator: "3 of 7 explored"

### Globe Behavior Updates

| Current | Recommended |
|---------|-------------|
| All words equal visibility | "Featured today" word with enhanced glow |
| Static on load | Subtle drift toward unexplored words |
| No relationship between words | Lines connecting related words on hover |
| Visited = muted | Visited = marked but still inviting |

### Search Strategy

**Recommendation: Delay search implementation**

With 150 words:
- The entire catalog can be visually scanned on the globe
- Filter + curated journeys cover most discovery needs
- Search requires recall, which is harder than recognition

**Implement search when:**
- Word count exceeds 250-300
- Analytics show users failing to find specific words
- User feedback requests search

**When adding search:**
- Follow "Summoning" vision: minimal, ethereal input
- Search hooks, not just word names
- Results as "whispers" floating below input

---

## Part 4: Open Questions for Future Research

1. **How do users currently navigate the globe?**
   - Heatmap of where users tap first
   - Path analysis: which words lead to which words?

2. **Do curated journeys increase exploration depth?**
   - A/B test: journey cards vs. filter chips only

3. **What triggers the shift from browsing to exploring a word?**
   - Is it the hook? The script? The position on globe?

4. **Should we show "popularity" signals?**
   - "Most explored" might help or might create bubbles

5. **How does exploration change over sessions?**
   - First visit: wide exploration
   - Return visits: continuation or fresh start?

---

## Sources

### Platform Analysis
- [Spotify Recommendation System Guide (Music Tomorrow)](https://www.music-tomorrow.com/blog/how-spotify-recommendation-system-works-complete-guide)
- [Spotify Prompted Playlists (Newsroom)](https://newsroom.spotify.com/2025-12-10/spotify-prompted-playlists-algorithm-gustav-soderstrom/)
- [Pinterest Algorithm (RecurPost)](https://recurpost.com/blog/pinterest-algorithm/)
- [Pixie Recommendation System (Pinterest Engineering)](https://medium.com/pinterest-engineering/an-update-on-pixie-pinterests-recommendation-system-6f273f737e1b)
- [TikTok Algorithm (Sprout Social)](https://sproutsocial.com/insights/tiktok-algorithm/)
- [Netflix Recommendation System (Attract Group)](https://attractgroup.com/blog/how-netflixs-personalize-recommendation-algorithm-works/)
- [Netflix PRS Workshop 2025 (Shaped)](https://www.shaped.ai/blog/key-insights-from-the-netflix-personalization-search-recommendation-workshop-2025)

### Museum & Wayfinding
- [Museum Wayfinding Examples (Bridgewater Studio)](https://www.bridgewaterstudio.net/blog/museum-wayfinding-13-inspiring-examples)
- [Visitor Flow in Museum Design (Quinn Evans)](https://www.quinnevans.com/news/orchestrating-visitor-flow-in-modern-museum-design)
- [Wayfinding Systems in Museums (MuseumNext)](https://www.museumnext.com/article/developing-wayfinding-systems-in-museums/)

### Browse vs. Search
- [Search vs. Browse (Algolia)](https://www.algolia.com/blog/ecommerce/search-vs-browse-satisfying-user-intent)
- [Search vs. Browse (MeasuringU)](https://measuringu.com/search-browse/)
- [Browse vs. Search (Nielsen Norman Group)](https://www.nngroup.com/articles/browse-vs-search/)

### Serendipity & Random
- [Netflix Killed Surprise Me (Fast Company)](https://www.fastcompany.com/90851139/netflix-killed-its-surprise-me-button-heres-why-the-shuffle-play-feature-never-made-much-sense)
- [Serendipity by Design (Practical UX)](https://www.practical-ux.com/serendipity-by-design.html)
- [Designing for Unexpected Encounters (IJDesign)](https://www.ijdesign.org/index.php/IJDesign/article/view/1059/402)

### Information Behavior Theory
- [Berrypicking and Information Foraging (Journal of Information Science)](https://journals.sagepub.com/doi/10.1177/0165551517713168)
- [Bates' Berrypicking Model (ResearchGate)](https://www.researchgate.net/publication/285171694_Bates'_Berrypicking_Model_1989_2002_2005)

---

*Research completed: January 2026*
*Status: Ready for design implementation*
