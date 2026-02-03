# Language History Feature — Structured Backlog

> **Vision**: Bring the same cinematic, map-driven storytelling we use for individual words to entire languages. Show how Sanskrit, Persian, Arabic, and other languages spread across the world through conquest, trade, and religion.

---

## Why This Feature

We've already proven the core concept: **geographic journeys make etymology memorable**. The JourneyMap component transforms abstract word histories into visceral experiences—watching a word travel from Arabia to Venice to London creates spatial memory that sticks.

Languages are just macro-scale word journeys. They spread through the same forces (trade routes, empires, religious expansion) but across regions rather than discrete points. If users love watching "coffee" travel from Yemen to Vienna, they'll love watching Arabic spread from a desert peninsula to 26 countries.

### Strategic Value

1. **Content leverage**: One language history page connects dozens of word pages (all Arabic-origin words link to Arabic history)
2. **SEO opportunity**: "History of the Arabic language" is a high-intent search query
3. **Differentiation**: No other etymology resource offers animated language spread visualization
4. **Retention hook**: Language histories create "aha" moments that bring users back

---

## Milestone 1: Foundation (MVP)

**Goal**: Ship one complete language history page (Sanskrit) with zone-based map visualization.

### 1.1 Data Model & Types
- [ ] Create `LanguageHistory` interface in `data/language-types.ts`
- [ ] Create `LanguagePhase` interface for era-based progression
- [ ] Create `LanguageRegion` interface for geographic zones
- [ ] Add language family taxonomy (Indo-European, Semitic, Sino-Tibetan, etc.)

```typescript
// Target data structure
interface LanguageHistory {
  slug: string;                    // "sanskrit"
  language: string;                // "Sanskrit"
  script: string;                  // "संस्कृत"
  romanization: string;            // "Saṃskṛta"
  languageFamily: string;          // "Indo-Aryan"
  parentFamily: string;            // "Indo-European"
  hook: string;                    // Compelling one-liner
  originRegion: string;            // "Northwest India"
  originPeriod: string;            // "~1500 BCE"
  currentSpeakers: string;         // "~24,000 native; 300M+ liturgical"

  story: string[];                 // 3-4 paragraph overview
  phases: LanguagePhase[];         // 4-6 major eras
  relatedWords: string[];          // Slugs of words from this language
}

interface LanguagePhase {
  era: string;                     // "1500-500 BCE"
  name: string;                    // "Vedic Period"
  form: string;                    // "Vedic Sanskrit"
  regions: LanguageRegion[];
  context: string;                 // Why it spread/changed
  keyEvents: string[];             // "Panini's grammar codified"
  color: string;                   // Phase color for map
}

interface LanguageRegion {
  name: string;                    // "Northwest India"
  modernCountries: string[];       // ["India", "Pakistan"]
  speakerCount: string;            // "~2 million"
  dominance: 'native' | 'prestige' | 'liturgical' | 'trade' | 'colonial';
  coordinates: [number, number];   // Center point for region
  radius?: number;                 // Approximate spread radius in km
}
```

### 1.2 First Language Data: Sanskrit
- [ ] Research and write Sanskrit language history
- [ ] Define 5-6 major phases (Vedic → Classical → Expansion → Decline → Modern)
- [ ] Map geographic spread for each phase
- [ ] Identify key events and transitions
- [ ] Cross-reference with existing Sanskrit-origin words in collection

### 1.3 Language History Map Component
- [ ] Fork `JourneyMap.tsx` → `LanguageHistoryMap.tsx`
- [ ] Replace point-and-arc rendering with zone/region rendering
- [ ] Implement phase-based animation (regions glow and expand)
- [ ] Add era timeline at bottom (clickable phases)
- [ ] Support multiple simultaneous regions per phase
- [ ] Add speaker count labels on regions
- [ ] Implement zoom to fit all active regions per phase

### 1.4 Language Page
- [ ] Create `/language/[slug]/page.tsx` route
- [ ] Design page layout (map + story + phases + related words)
- [ ] Add phase detail panel (click phase → see context, events, speaker counts)
- [ ] Link to related words from collection
- [ ] Add "Words from this language" section

### 1.5 Navigation & Discovery
- [ ] Add "Language Histories" section to discovery drawer
- [ ] Link from word pages to their source language history
- [ ] Add language history cards to browse page

---

## Milestone 2: Core Languages

**Goal**: Build out the three most impactful language histories.

### 2.1 Persian Language History
- [ ] Research Persian spread (Old → Middle → New Persian)
- [ ] Map Achaemenid → Sasanian → Islamic → Mughal phases
- [ ] Show peak as lingua franca (Turkey to India)
- [ ] Cross-reference existing Persian-origin words

### 2.2 Arabic Language History
- [ ] Research Arabic spread with Islamic expansion
- [ ] Map pre-Islamic → Conquest → Golden Age → Modern phases
- [ ] Show current 26-country reach
- [ ] Cross-reference existing Arabic-origin words

### 2.3 Component Enhancements
- [ ] Add language comparison mode (show two languages side-by-side)
- [ ] Add "competition zones" where languages overlapped
- [ ] Improve region rendering (soft edges, gradient falloff)
- [ ] Add historical trade routes as context layer (Silk Road, Spice Routes)

---

## Milestone 3: Indo-European Family

**Goal**: Show the great language family that connects Sanskrit, Persian, Greek, Latin, and most European languages.

### 3.1 Additional Languages
- [ ] Greek (Ancient → Koine → Byzantine → Modern)
- [ ] Latin (Classical → Vulgar → Romance split)
- [ ] Proto-Indo-European (reconstruction, theoretical homeland)

### 3.2 Language Family Tree View
- [ ] Create `LanguageFamilyTree` component
- [ ] Show branching from Proto-Indo-European
- [ ] Interactive: click branch to see that language's history
- [ ] Timeline mode: show when branches diverged

### 3.3 Connection Features
- [ ] "Cognate explorer": Show related words across IE languages
- [ ] "Shared roots": Highlight PIE roots that became words in multiple languages
- [ ] Link language histories to each other where they influenced one another

---

## Milestone 4: Global Language Families

**Goal**: Expand beyond Indo-European to show world language diversity.

### 4.1 Semitic Languages
- [ ] Arabic (already done in M2)
- [ ] Hebrew (Ancient → Medieval → Modern revival)
- [ ] Aramaic (lingua franca of ancient Near East)

### 4.2 Sino-Tibetan Languages
- [ ] Chinese (Classical → regional varieties → Mandarin standardization)
- [ ] Show character system evolution

### 4.3 Other Major Families
- [ ] Austronesian (Malay, Indonesian, Tagalog spread across Pacific)
- [ ] Niger-Congo (Bantu expansion across Africa)
- [ ] Dravidian (Tamil, Telugu — pre-Indo-European India)

### 4.4 World Language Map
- [ ] Create global overview showing all language families
- [ ] Color-code by family
- [ ] Click family → see member languages
- [ ] "Languages of the Silk Road" curated journey

---

## Milestone 5: Personalization & Learning

**Goal**: Connect language histories to the Language Biography feature.

### 5.1 Language Biography Integration
- [ ] Let users mark languages they connect to
- [ ] Personalized language history suggestions
- [ ] "Your language contributed X words to English"
- [ ] Show user's languages on the global family map

### 5.2 Learning Features
- [ ] "Guess the spread" — predict where language went next
- [ ] Spaced repetition for language history facts
- [ ] Quiz: "Which language family does X belong to?"
- [ ] Connection reveals: "Sanskrit and English are cousins"

### 5.3 Cabinet Integration
- [ ] Add "Languages Explored" section to cabinet
- [ ] Show language family coverage (% of IE languages explored)
- [ ] Milestone: "You've explored 3 Semitic languages"

---

## Technical Considerations

### Map Rendering

**Current (JourneyMap)**:
- Points connected by great-circle arcs
- Sequential animation (stop 1 → 2 → 3)
- Single path through discrete locations

**Needed (LanguageHistoryMap)**:
- Regions/zones that expand over time
- Phase-based animation (era 1 → era 2 → era 3)
- Multiple simultaneous regions per phase
- Soft boundaries (languages don't have hard edges)

**Implementation options**:
1. **Circle-based**: Draw circles at coordinates with radius = spread
   - Pros: Simple, works with existing D3 setup
   - Cons: Doesn't show actual country/region shapes

2. **Choropleth**: Color actual country/region polygons
   - Pros: Geographically accurate
   - Cons: Requires GeoJSON boundaries, modern countries didn't exist historically

3. **Heatmap/Gradient**: Radial gradients from center points
   - Pros: Beautiful, shows fuzzy boundaries naturally
   - Cons: More complex rendering

**Recommendation**: Start with circle-based (M1), evolve to gradient heatmap (M2+).

### Data Storage

**Option A**: TypeScript files (like words)
- Pros: Simple, consistent with current approach
- Cons: Harder to query relationships

**Option B**: Supabase tables
- Pros: Queryable, can link words ↔ languages in DB
- Cons: More infrastructure

**Recommendation**: Start with TypeScript (M1-M2), migrate to Supabase when we need relationships (M3+).

### Cross-Linking

Every word already has a `language` field. We can:
1. Add `languageSlug` field to words that have a language history page
2. Auto-generate "Related Words" on language pages by filtering `allWords`
3. Add "Learn about [Language]" link on word pages

---

## Design Principles

Inherit from the main backlog, plus:

1. **Zones, not borders**: Languages spread like water, not like nations. Show soft gradients, not hard lines.

2. **Eras, not years**: Group history into meaningful phases (4-6 per language). Don't overwhelm with dates.

3. **Why, not just where**: Each phase should explain WHY the language spread (empire, religion, trade).

4. **Connection to words**: Always link back to specific words. "Arabic spread here, and brought words like 'algorithm' and 'algebra'."

5. **Respect complexity**: Languages influence each other. Persian borrowed from Arabic; Arabic borrowed from Persian. Show these flows.

6. **Living languages**: Don't treat languages as museum pieces. Show modern speaker counts, current relevance.

---

## Success Metrics

### M1 (MVP)
- [ ] Sanskrit page live with animated map
- [ ] 3+ minutes average time on page
- [ ] Links working from Sanskrit-origin word pages

### M2 (Core Languages)
- [ ] 3 language histories live
- [ ] 10%+ of word page visitors click through to language history
- [ ] SEO: ranking for "history of [language]" queries

### M3+ (Growth)
- [ ] 10+ language histories
- [ ] Language family tree driving exploration
- [ ] Language Biography adoption rate

---

## Open Questions

1. **How do we show language death?** Some languages (Latin, Sanskrit) "died" as native languages but live on in descendants or liturgical use. How to visualize?

2. **Historical vs. modern boundaries?** The Roman Empire isn't on modern maps. Do we show historical empires as context?

3. **Dialect continuum?** Arabic "dialects" are often mutually unintelligible. Do we treat them as one language or many?

4. **Reconstructed languages?** Proto-Indo-European is theoretical. How do we visualize something we've never heard?

5. **Controversial origins?** Some language origins are disputed (PIE homeland debates). How do we handle scholarly disagreement?

---

## References

- Existing JourneyMap: `/components/word/JourneyMap.tsx`
- Word types: `/data/word-types.ts`
- Visual learning research: `/docs/research/VISUAL_GEOGRAPHIC_LEARNING_RESEARCH.md`
- Main backlog: `/docs/BACKLOG.md`

---

*Created: February 2026*
*Status: Planning*
*Owner: TBD*
