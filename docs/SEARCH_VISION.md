# Search Vision: "The Summoning"

> Instead of searching, users summon words from the depths. You're calling out into an ancient library — words that recognize something in your call rise up to meet you.

---

## Philosophy

Standard search is transactional: type → results list → pick one. It breaks immersion and treats words as database items.

**The Journey** is about wonder, discovery, and unexpected connections. Search should embody this — transforming a utility into an experience.

---

## The Full Experience (Future Vision)

### 1. Invocation
- No visible search bar cluttering the home screen
- Tap anywhere on the globe or press any key
- A subtle glow appears at the bottom — minimal, ethereal input field fades in

### 2. The Call
- As you type, the screen dims slightly
- The globe slows its rotation
- A soft ripple emanates outward from center

### 3. Rising
- Matching words glow on the globe — bubbles pulse with light
- They drift slightly toward center, growing prominent
- Non-matching words fade into darkness

### 4. Whispers
- Instead of a results list, ethereal "whispers" float below input
- These are the hooks: *"A word that kept Sufi monks awake..."*
- They fade in and out gently, inviting curiosity

### 5. Selection
- Tap a glowing bubble or whisper to begin that journey
- The word chose to reveal itself to you

### 6. Empty State
- *"No word has answered your call... yet"*
- Suggest similar words or invite word request
- Never feels like failure — the journey hasn't been written yet

---

## Implementation Phases

### Phase 1: Filtering — "The Discovery Drawer"

A drawer-based filtering experience that feels like choosing paths to walk, not querying a database.

---

#### Closed State
- Very subtle glow or line at the bottom of the home screen
- Faint text: *"Explore paths..."* in fog color
- Or minimal handle indicator — almost invisible until discovered
- Does not distract from the globe experience

#### Opening the Drawer
- **Trigger**: Swipe up from bottom OR tap the subtle indicator
- **Animation**: Semi-transparent drawer rises smoothly (~35% of screen height)
- **Backdrop**: Blur effect, respects the abyss aesthetic
- **Globe**: Remains visible and interactive above the drawer

#### Drawer Layout
```
───────────────────────────────────────────────────────
  By origin
  [Arabic] [Sanskrit] [Latin] [Japanese] [Persian] [Malay] →

  By path
  [Silk Road] [Colonial Exchange] [Sacred Texts] [Trade Ports] →

  By theme
  [Trade] [Food & Drink] [Religion] [Science] [War] [Nature] →
───────────────────────────────────────────────────────
```

- **Rows**: Each dimension is a horizontal scrollable row
- **Chips**: Tap to toggle, glows amber when active
- **Multi-select**: Multiple chips can be active within a row
- **Cross-row**: Selections across rows combine with AND logic
- **Real-time**: Globe updates immediately as filters change

#### Globe Behavior While Filtering
| State | Opacity | Scale | Animation |
|-------|---------|-------|-----------|
| Matching | 100% | 1.0 | Subtle pulse |
| Non-matching | 15% | 0.9 | None |

- Words fade but don't disappear — feels like adjusting focus
- Soft count appears near title: *"15 journeys"*
- Globe can subtly rotate to center on filtered cluster

#### Active Filter Indicator (Drawer Closed)
- When filters active and drawer closed, show subtle indicator
- Options: soft amber dot, or text *"3 paths active"*
- Tap indicator to reopen drawer
- "Clear all" action to reset filters

#### Empty Filter State
- If filter combination yields zero results:
- Message: *"No journeys walk all these paths..."*
- Suggest removing a filter
- Show closest partial matches

---

#### Filter Dimensions Detail

**By Origin (Language Family)**
| Chip | Languages Included |
|------|-------------------|
| Arabic | Arabic, Swahili (Arabic-origin words) |
| Sanskrit | Sanskrit, Hindi, Pali |
| Latin | Latin, French, Italian, Spanish, Portuguese |
| Greek | Ancient Greek, Modern Greek |
| Germanic | German, Dutch, Norse, Yiddish |
| Japanese | Japanese |
| Chinese | Mandarin, Hokkien, Cantonese |
| Persian | Farsi |
| Malay | Malay, Indonesian, Tagalog |
| Slavic | Russian, Czech, Polish |
| Celtic | Irish, Welsh, Scottish Gaelic |
| Indigenous | Nahuatl, Quechua, Aboriginal languages |

**By Path (Journey Type)**
| Chip | Description |
|------|-------------|
| Silk Road | Words that traveled overland Asia ↔ Europe |
| Colonial Exchange | Words brought through colonization |
| Sacred Texts | Words spread through religious transmission |
| Trade Ports | Words that traveled by sea trade |
| Scholarly | Words transmitted through academia |
| Migration | Words carried by diaspora communities |

**By Theme**
| Chip | Examples |
|------|----------|
| Trade | bazaar, cargo, tariff |
| Food & Drink | coffee, tea, sugar, ketchup |
| Religion | karma, nirvana, amen |
| Science | algorithm, algebra, chemistry |
| War | assassin, admiral |
| Nature | tsunami, monsoon |
| Body & Mind | yoga, zen |

---

#### Future Evolution: Orbital Rings

A more ambitious, magical filtering experience for later:

- **Pinch in** on the globe
- Globe shrinks, orbital rings appear around it
- Each ring = a dimension (Origin, Path, Theme)
- Rings have tappable nodes for filtering
- Feels like adjusting a cosmic instrument
- **Pinch out** to return to full view

This requires significant gesture work but creates a unique, ownable interaction.

### Phase 2: Text Search
- Tap globe or press key to invoke search
- Fuzzy match across: slug, romanization, word, language, hook, story, journey locations
- Matching bubbles glow, non-matching fade
- Whispers (hooks) appear below input for matches

### Phase 3: Smart Suggestions
- "Words that traveled through Arabic"
- "Words from Asia to Europe"
- "Words born from trade"
- "Words that changed meaning completely"
- Pre-defined journeys through the collection

### Phase 4: Empty State & Discovery
- Suggest similar words when no match
- "While you're here... have you met 'serendipity'?"
- Word request integration

---

## Filter Taxonomy

### Language Families
| Family | Languages | Example Words |
|--------|-----------|---------------|
| Semitic | Arabic, Hebrew | qahwa, algorithm |
| Indo-Aryan | Sanskrit, Hindi, Pali | saans, karma, nirvana |
| Romance | Latin, French, Italian, Spanish | café, piano |
| Germanic | German, Dutch, Norse, Yiddish | klutz, mensch |
| East Asian | Chinese, Japanese, Hokkien | ketchup, tsunami |
| Austronesian | Malay, Tahitian, Tagalog | orangutan, bamboo |
| Slavic | Russian, Czech, Polish | vodka, mammoth |
| Turkic | Turkish, Mongolian | khan, horde |
| Celtic | Irish, Welsh | banshee, whiskey |
| Indigenous | Nahuatl, Dharug, Zulu | chocolate, boomerang |
| Greek | Ancient Greek | democracy, philosophy |
| Persian | Farsi | bazaar, caravan |

### Regions
- Middle East & North Africa
- South Asia
- East Asia & Southeast Asia
- Europe (Western)
- Europe (Eastern)
- Americas
- Sub-Saharan Africa
- Oceania

### Themes
- Trade & Commerce (words that traveled trade routes)
- Religion & Spirituality (monastery, temple origins)
- Food & Drink (culinary journeys)
- Science & Knowledge (scholarly transmission)
- War & Conquest (words spread by armies)
- Nature & Animals (natural world naming)
- Body & Mind (physical and mental concepts)
- Materials & Craft (artisan vocabulary)

---

## Visual Design Notes

### Filter UI
- Appears as a floating element, not a toolbar
- Semi-transparent, respects the abyss aesthetic
- Chips use language family colors (already defined in BubbleNav)
- Smooth transitions — filters feel like adjusting focus, not switching views

### Globe Behavior with Filters
- Non-matching bubbles: reduce opacity to 0.15, shrink slightly
- Matching bubbles: full opacity, subtle pulse
- Globe can auto-rotate to center on filtered results
- Count indicator: "12 words" in muted text

### Empty Filter State
- All filters active = no matches: "No words match all these paths"
- Suggest removing a filter or show "closest" matches

---

## Technical Considerations

### Feature Flag
- Flag key: `discovery_drawer`
- Build entire feature behind this flag
- Allows testing without affecting production users
- Enable for admin/beta users first

### Data Requirements
Each word needs metadata for filtering:
```typescript
interface WordFilterMeta {
  languageFamily: string;        // Primary family
  originRegion: string;          // Geographic origin
  themes: string[];              // Can have multiple
  journeyPath?: string;          // Silk Road, Colonial, etc.
  journeyLength: number;         // Derived from journey.length
}
```

**Implementation approach:**
1. Create a mapping file `lib/word-filters.ts` that derives metadata from existing word data
2. Map `word.language` → `languageFamily` using lookup table
3. Map `word.journey[0].location` → `originRegion`
4. Themes: manually curate or derive from story content keywords
5. No database changes needed initially

### Component Structure
```
components/
  home/
    DiscoveryDrawer.tsx      # Main drawer component
    FilterChip.tsx           # Individual chip component
    FilterRow.tsx            # Horizontal scrollable row
    useWordFilters.ts        # Hook for filter logic
lib/
  word-filters.ts            # Metadata derivation & filter logic
```

### Performance
- Filter logic runs client-side (100 words is trivial)
- No API calls needed for filtering
- Use CSS transitions for bubble opacity/scale (GPU accelerated)
- Drawer uses `framer-motion` for smooth open/close

### Accessibility
- Drawer should trap focus when open
- Chips should be keyboard navigable
- Screen reader: announce filter changes and result count
- Escape key closes drawer

---

## Success Metrics

- Filter usage rate (do users discover it?)
- Filter combinations used (what paths interest users?)
- Time to word selection (does filtering help discovery?)
- "Empty state" encounters (are filters too restrictive?)

---

## Open Questions

1. Should filters persist across sessions?
2. Should we show filter suggestions based on explored words?
3. How prominent should the filter UI be? Hidden until needed vs. always visible?
4. Should we gamify? "You've explored 3 of 8 Semitic words"

---

*Document created: January 2026*
*Updated: February 2026*
*Status: Phase 1 (Filtering) shipped. Phase 2 (Text Search) implemented — see [features/SEARCH_WORD_SPEC.md](features/SEARCH_WORD_SPEC.md)*
*Feature flag: `search_summoning` (signed-in users only)*
