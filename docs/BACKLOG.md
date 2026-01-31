# The Journey — Feature Backlog

Consolidated from completed research and ongoing product development. Organized by theme, prioritized within each section.

---

## Shipped

- [x] **Cabinet of Curiosities** — Personal collection view at `/cabinet` showing explored words as museum artifacts. Shelf-based layout, breathing glows, cultural color tinting, horizontal scroll on mobile. Behind `cabinet_of_curiosities` feature flag.
- [x] **Share Cards (Poster/Moment)** — Museum-quality share cards for individual words.
- [x] **Share Card Light/Dark Toggle** — Dark and light theme options for share cards with parchment-toned light palette and adjusted cultural accents.
- [x] **Profile Panel Cabinet Link** — "Your Cabinet" link in profile panel when flag enabled and words explored.
- [x] **Daily Word Ritual** — Header subtitle shows daily word's hook once per day (localStorage gated). Tappable to navigate to word. Behind `daily_word_ritual` feature flag.

---

## High Priority

### Daily Engagement

- [x] **Daily Word Ritual** — ~~A daily featured word on the home screen/globe.~~ Shipped as header subtitle hook (once per day, localStorage gated, tappable). No bubble glow — the hook is a whisper, not a spotlight. *(Source: Engagement Research, Learning Science Research)*

- [ ] **Word of the Day with Memory Weaving** — Combine new daily content with callbacks to words the user is about to forget. "Also: Remember qahwa? Here's something you didn't know..." *(Source: Spaced Repetition Research)*

### Retention & Memory

- [ ] **"Remember This?" Gentle Prompts (The Echo)** — Light-touch retrieval practice 3+ days after exploring a word. Show the hook as a riddle, let user try to recall, reveal with a new detail. Never scored, never punitive. *(Source: Spaced Repetition Research — testing effect produces 33% better retention)*

- [ ] **Half-Life Regression Model** — Track per-word memory strength; schedule resurfacing intelligently. Simplified version of Duolingo's HLR: `recall_probability = 2^(-days_since_last_seen / half_life)`. Surface words when recall drops below 0.5. *(Source: Spaced Repetition Research)*

- [ ] **Passive Review on Home Screen** — Rotate previously explored words with new contextual hooks. Words about to be forgotten glow differently on the globe. A "Revisit" row framed as invitation, not obligation. *(Source: Spaced Repetition Research — passive review still produces 40-60% of active testing benefit)*

### Discovery & Browsing

- [x] **Curated Journeys** — Editorial paths like "Words of War," "Food's Travels," "The Silk Road's Vocabulary." Themed collections that create routes through the word catalog. Behind `discovery_drawer` feature flag. *(Source: Discovery Research — curated rows beat infinite scroll)*

- [ ] **Gentle Suggestions / Connections** — "If you liked qahwa, you might enjoy..." connections between words based on theme, origin, or route. *(Source: Discovery Research)*

### SEO Technical Fixes (from SEO Research)

- [x] **DefinedTerm Schema + BreadcrumbList** — Replace Article JSON-LD with DefinedTerm on word pages. Add BreadcrumbList for navigation. Add AudioObject for pronunciation. *(Source: SEO Strategy Research — Merriam-Webster gold standard)*

- [x] **Keyword-Optimized Metadata** — Update title templates to target "origin of [word]", "where does [word] come from" patterns. Fix metadata duplication between page.tsx and layout.tsx. Add canonical URLs. *(Source: SEO Strategy Research)*

---

## Medium Priority

### Deeper Content & Earned Experiences

- [ ] **Hidden Connections** — Connections between words that only become visible after exploring both. "These two words were born in the same golden age of Islamic scholarship..." Glowing threads on the globe. *(Source: Engagement Research)*

- [ ] **Depth Reveals** — Extended content that appears after thorough exploration. After fully exploring a word: an epilogue. After 10+ words: Language Family visualization. After 3+ continents: Timeline view. These simply appear, never announced as "unlocks." *(Source: Engagement Research — earned depth is the premium progression model)*

- [ ] **Progressive Elaboration on Re-encounter** — Each time a user re-encounters a word, reveal something new: a pronunciation detail, a cultural context, a connection. Transforms review into deeper exploration. *(Source: Spaced Repetition Research)*

### Sharing & Social

- [ ] **"Hook" Share Card** — One surprising fact per card, optimized for social currency and dark social (WhatsApp/DMs). Subtle branding, no CTA. *(Source: Social & Sharing Research — 84% of sharing is dark social)*

- [ ] **"Year in Etymology" Wrapped** — Annual Spotify Wrapped-style experience. "Your words span 4 continents and 2,500 years." Creates sharing urgency and FOMO. *(Source: Social & Sharing Research)*

- [ ] **Connection Share Cards** — Share the surprising link between two words the user has explored. *(Source: Social & Sharing Research — connection posts get highest Reddit engagement)*

### Cabinet Enhancements

- [ ] **Save/Favorite ("Top Shelf")** — Active curation within the cabinet. Explored words appear automatically; saved words get premium placement on the "top shelf." *(From product discussion)*

- [ ] **Language Grouping** — At 10+ words, enable group-by-language toggle in the cabinet. CabinetMilestones component exists but is currently removed from the page. *(Component built, needs reintegration)*

- [ ] **Cabinet Search/Filter** — At 20+ explored words, add a search/filter mechanism within the cabinet. *(Future scale need)*

### SEO & Site Architecture (from SEO Research)

- [ ] **Language-of-Origin Hub Pages** — Create `/origin/[language]` pages listing all words from that language with hooks. Serve as topical authority hubs and internal linking anchors. *(Source: SEO Strategy Research — internal linking = 4x traffic)*

- [ ] **Related Words Cross-Linking** — Add "Related Words" section to word pages linking to 5-10 words sharing language, region, or journey path. *(Source: SEO Strategy Research)*

- [ ] **Browse/Index Page** — Alphabetical listing of all words at `/words` or `/browse`. Ensures all pages reachable within 2 clicks from home. HTML sitemap equivalent. *(Source: SEO Strategy Research)*

- [ ] **Direct-Answer Content Formatting** — Structure first paragraph of each word page for AI Overview citation: "The word [X] comes from [language] [word], meaning [meaning]." *(Source: SEO Strategy Research — GEO optimization)*

### Learning Science

- [ ] **"Your Connection" Prompts** — Optional, non-intrusive self-reference prompts after exploring a word. "When did you last use this word?" Leverages the self-reference effect (2x recall improvement). *(Source: Learning Science Research)*

- [ ] **"Guess the Origin" Moment** — Before revealing a word's full story, let users guess where it came from. Even wrong guesses create stronger encoding (generation effect). *(Source: Learning Science Research)*

- [ ] **Interleaved Daily Suggestions** — Mix origins and themes in daily word suggestions. Never show two words from the same origin in sequence. *(Source: Spaced Repetition Research — interleaving produces 43% better retention than blocking)*

---

## Lower Priority

### Return & Re-engagement

- [ ] **Return Warmth** — How the app greets returning users. After 3+ days: "3 new words arrived while you were away." After 7+ days: globe highlights unexplored words. After 30+ days: "Welcome back. The words waited." Never guilt. *(Source: Engagement Research)*

- [ ] **Seasonal Content Drops** — Quarterly themed word additions: "Spring 2026: Words of Water." Announced in advance, creates anticipation without obligation. Past seasonal words remain available. *(Source: Engagement Research)*

### Globe & Spatial Memory

- [ ] **Exploration Cartography** — Personal map showing explored territory on the globe. Connection lines between related explored words. Language family coverage as illuminated regions. *(Source: Engagement Research, Visual/Geographic Research — globe functions as natural memory palace)*

- [ ] **Journey Replay** — Let users re-walk a word's journey path on the globe to strengthen spatial encoding. *(Source: Visual/Geographic Research — mirrors memory palace rehearsal)*

- [ ] **Cross-Journey Connections on Globe** — When two words shared the same route segment (e.g., both traveled the Silk Road), visually connect them. *(Source: Visual/Geographic Research)*

### Audio & Pronunciation

- [ ] **Pronunciation Evolution** — Hear how a word's pronunciation changed at each journey stop: qahwa -> kahve -> coffee in sequence. *(Source: Research Agenda #4 — not yet researched)*

- [ ] **Audio Museum Guide** — Brief daily audio introduction to one word, like a museum audio guide. "Today, let's visit a word that traveled from Sanskrit through Greek..." *(Source: Engagement Research)*

### Personalization

- [ ] **Language Biography** — Let users indicate which languages they speak or connect to. Surface words from those families first. "Because you speak Spanish, you might be surprised where 'ojala' comes from." *(Source: Learning Science Research)*

- [ ] **Geographic Personalization** — Highlight when a word's journey passed through the user's region. "This word traveled through your city 400 years ago." *(Source: Learning Science Research — combines self-reference with spatial memory)*

- [ ] **User-Set Exploration Pace** — Let users choose their cadence: daily, a few times a week, weekly. App adapts suggestions accordingly. *(Source: Engagement Research)*

---

## Not Yet Researched (from Research Agenda)

These areas have open research items. Features here are speculative until research is completed.

| # | Area | Key Question |
|---|------|-------------|
| 4 | Audio & Pronunciation | How should pronunciation work in an etymology app? |
| 6 | Educator & Classroom Use | How would teachers actually use this? (B2B opportunity) |
| 7 | Accessibility & i18n | Screen readers with multi-script, RTL support, WCAG |
| 8 | Mobile App vs. Web | Native app vs. PWA, notification strategy |
| 9 | Content Pipeline & AI | How to scale to 500+ words without sacrificing quality |
| 10 | Comparative Linguistics Visualization | Etymology trees, language family connections |

---

## Anti-Patterns (What NOT to Build)

Based on research, these features are explicitly excluded:

| Feature | Why Not |
|---------|---------|
| Streaks | Loss aversion contradicts wonder. Creates anxiety, not curiosity. |
| Badges / Achievements | External rewards undermine intrinsic motivation (overjustification effect). |
| Leaderboards | Competition contradicts the contemplative, personal nature. |
| XP / Points | Quantifying exploration reduces it to a score. |
| Daily quests / challenges | Assignments undermine autonomy. |
| Levels (Bronze/Silver/Gold) | Hierarchy contradicts the egalitarian explorer identity. |
| Completion percentages | Turns exploration into a checklist. |
| Time-limited events | Urgency contradicts "slow luxury" positioning. |
| Streak freeze purchases | Monetizing anxiety. Brand-destroying. |
| Flashcard mode | Effective but destroys the experience. |
| Quiz scores | No percentages, grades, or right/wrong indicators. |

---

## Design Principles (for all backlog items)

1. **Content IS the reward** — Never create a meta-game that competes with actual content.
2. **Accumulation, not streaks** — Track total exploration, never consecutive days.
3. **Observation, not evaluation** — Tell users what they've done, never rank them.
4. **Invitation, not obligation** — Frame new content as gifts, not tasks.
5. **Depth reveals depth** — More exploration reveals more content, not more badges.
6. **The voice is the curator** — All messaging sounds like a museum curator, not a game master.
7. **Absence creates anticipation** — Returning users feel welcomed, not scolded.

---

*Created: January 2026*
*Sources: 7 completed research documents in `/docs/research/`*
*See also: RESEARCH_AGENDA.md for open research areas*
