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

### Phase 1: Filtering (Current)
Start with filter chips that let users narrow the globe by dimensions:

**Filter Dimensions:**
- **Language Family**: Semitic, Indo-Aryan, Romance, Germanic, East Asian, Austronesian, Indigenous, Slavic, Turkic, etc.
- **Region of Origin**: Middle East, South Asia, East Asia, Europe, Americas, Africa
- **Theme**: Trade, Religion, Food & Drink, Science, War, Nature, Body & Mind
- **Journey Length**: Short (2-3 stops), Medium (4-5 stops), Epic (6+ stops)

**UX:**
- Subtle filter icon near the header or floating at bottom
- Tap to reveal horizontal scrollable chips
- Active filters cause non-matching bubbles to fade (not disappear)
- Multiple filters combine (AND logic)
- Clear all button to reset

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

### Data Requirements
Each word needs metadata for filtering:
```typescript
interface WordMetadata {
  languageFamily: string[];      // Can belong to multiple
  originRegion: string;
  themes: string[];
  journeyLength: number;         // Derived from journey.length
}
```

This can be:
1. Added to word data files
2. Derived at runtime from existing data (language → family mapping)
3. Stored in Supabase as additional columns

### Performance
- Filter logic runs client-side (100 words is small)
- No API calls needed for filtering
- Debounce text search if added
- Use CSS transitions for bubble opacity/scale (GPU accelerated)

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
*Status: Phase 1 (Filtering) ready for implementation*
