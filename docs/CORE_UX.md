# The Journey — Core UX Specification

## Experience Philosophy

**The user is a traveler, not a reader.**

Every interaction should feel like movement through space and time. The user doesn't "navigate" or "browse"—they *journey*.

---

## Screen Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         HOME                                    │
│                  (10 words floating)                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ tap word
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      WORD WORLD                                 │
│              (layered, scrollable depth)                        │
│                                                                 │
│   ┌──────────┐                                                  │
│   │ Layer 1  │ ─── The Word (original script)                   │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 2  │ ─── The Hook (one intriguing line)               │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 3  │ ─── The Story (atmospheric history)              │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 4  │ ─── The Journey (interactive map)                │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 5  │ ─── The Sound (pronunciation)                    │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 6  │ ─── The Relatives (connected words)              │
│   └──────────┘                                                  │
│        │                                                        │
│        ▼ scroll/tap                                             │
│   ┌──────────┐                                                  │
│   │ Layer 7  │ ─── The Meaning Now (present day)                │
│   └──────────┘                                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ exit / back
                              ▼
                            HOME
```

---

## Home Screen

### Layout
- Dark background (#0a0a0f)
- 10 words floating in space, gently drifting
- Words positioned organically, not in a grid
- Each word in its native script + romanization below
- Subtle glow on hover/touch

### Behavior
- Words have very slow, ambient drift animation
- On hover (desktop): word brightens, glow intensifies
- On touch (mobile): ripple effect, then transition
- Visited words have a subtle marker (soft inner glow)

### Entry Animation
- Words fade in staggered (100ms delay each)
- Each emerges from below, drifts to position
- Total reveal: ~2 seconds

### Title/Branding
- "The Journey" in top left, very subtle
- Optional tagline below: "Ten words. Ten worlds."
- Should not compete with the words

---

## Word World (The Core Experience)

### Overall Structure
- Single continuous scroll (vertical)
- Each "layer" is a full-viewport section
- Smooth scroll-snap to each layer (optional, can be turned off)
- Progress indicator on right edge (subtle dots)

### Interaction Model

**Primary: Scroll**
- Vertical scroll moves through layers
- Each layer has a natural "rest point"
- Content within layers may have horizontal scroll (Journey map)

**Secondary: Tap**
- Tappable elements are subtle but clear
- Journey map nodes are tappable
- Relative words are tappable
- Sound plays on tap

**Tertiary: Swipe**
- Swipe right to exit back to home
- Swipe between relative words

---

## Layer Specifications

### Layer 1: The Word

**Content:**
- The word in its original script (large, centered)
- Romanization below (smaller)
- Language indicator (subtle, e.g., "Arabic")

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│              قهوة                   │
│             qahwa                   │
│                                     │
│            Arabic                   │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Animation:**
- Word fades in slowly (1.2s)
- Subtle breathing animation while at rest
- Faint glow pulses

**Typography:**
- Original script: Cormorant Garamond or native font, 72px+
- Romanization: Source Serif 4, 24px
- Language: Source Serif 4, 14px, muted color

---

### Layer 2: The Hook

**Content:**
- One sentence that creates intrigue
- Should make the user *need* to know more
- No explanation yet—just the surprise

**Examples:**
- "A word that kept Sufi monks awake for midnight prayers."
- "This word once meant to tear flesh from bone."
- "The sound of a harbor being swallowed."

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│   "A word that kept Sufi monks      │
│    awake for midnight prayers."     │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Animation:**
- Text emerges word-by-word or fades in whole
- Slight drift upward as it appears
- Quotes in a different, subtle color

**Typography:**
- Source Serif 4 Italic, 28px
- Generous line-height (1.8)
- Centered, max-width 600px

---

### Layer 3: The Story

**Content:**
- 2-4 paragraphs of atmospheric history
- Not encyclopedic—evocative
- Specific details that create scene
- Who first spoke this word? Where? Why?

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│   In the highlands of Ethiopia,     │
│   where coffee plants grew wild,    │
│   the beans were first chewed       │
│   for their stimulating effect...   │
│                                     │
│   The word traveled with the        │
│   beans—first to Yemen, where       │
│   Sufi monks discovered...          │
│                                     │
└─────────────────────────────────────┘
```

**Animation:**
- Paragraphs fade in sequentially as user scrolls
- Each paragraph emerges from below
- Reading pace: unhurried

**Typography:**
- Source Serif 4, 18px
- Line-height: 1.75
- Max-width: 600px
- Paragraph spacing: 32px

---

### Layer 4: The Journey (Map)

**Content:**
- Visual representation of the word's path
- Geographic + temporal
- Each stop is a node with: location, time period, word form

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ● Ethiopia ─────── ● Yemen ─────── ● Constantinople          │
│     qahwa              qahwa           kahve                    │
│     ~1400              1450s           1500s                    │
│                                            │                    │
│                                            │                    │
│            ● Vienna ─────── ● Venice ──────┘                    │
│              Kaffee           caffè                             │
│              1680s            1570s                             │
│                │                                                │
│                │                                                │
│                └────────────── ● London                         │
│                                  coffee                         │
│                                  1650s                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Horizontal scroll if map is wider than viewport
- Tap any node to expand details:
  - Word in local script
  - Brief context (1-2 sentences)
  - Pronunciation (audio)
- Animated path drawing on first view
- Nodes glow as you approach them

**Visual Style:**
- Nodes are soft circles with subtle glow
- Connecting lines are curved, flowing
- Background color shifts subtly by region (see Design Language)
- No literal map imagery—abstract, atmospheric

**Animation:**
- Path draws itself when layer comes into view
- 3-4 seconds for full path
- Nodes pulse gently once path reaches them

---

### Layer 5: The Sound

**Content:**
- Pronunciation of the word
- Multiple versions if the word changed significantly
- Audio playback buttons

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│          The Sound                  │
│                                     │
│   Original Arabic                   │
│   ┌───────────────────────┐         │
│   │  ▶  /ˈqah.wa/         │         │
│   └───────────────────────┘         │
│                                     │
│   Modern English                    │
│   ┌───────────────────────┐         │
│   │  ▶  /ˈkɒf.i/          │         │
│   └───────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

**Behavior:**
- Tap to play audio
- Visual waveform or ripple animation during playback
- Auto-play option (respect user settings)

**Typography:**
- IPA in JetBrains Mono
- Labels in Source Serif 4

---

### Layer 6: The Relatives

**Content:**
- Words that share the same root
- Words from the same language family
- Words that took different paths

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│          Related Words              │
│                                     │
│    ┌─────────┐    ┌─────────┐       │
│    │  café   │    │  Kaffee │       │
│    │ French  │    │ German  │       │
│    └─────────┘    └─────────┘       │
│                                     │
│    ┌─────────┐    ┌─────────┐       │
│    │ caffeine│    │  قهوة   │       │
│    │ English │    │  Urdu   │       │
│    └─────────┘    └─────────┘       │
│                                     │
└─────────────────────────────────────┘
```

**Behavior:**
- Each relative is tappable
- Tap leads to that word's journey (if available)
- Dimmed if word not yet in collection
- Hover/touch shows brief etymology

**Visual Style:**
- Cards floating in space
- Subtle depth/parallax
- Glow on interaction

---

### Layer 7: The Meaning Now

**Content:**
- How the word is used today
- What it has become
- The end of the journey = the present

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│          Today                      │
│                                     │
│   Coffee now names the drink, the   │
│   bean, the color, the culture.     │
│   It's a $400 billion industry.     │
│   But inside the word, Sufi monks   │
│   still pray through the night.     │
│                                     │
│                                     │
│         ● Save this word            │
│                                     │
└─────────────────────────────────────┘
```

**Content Approach:**
- Poetic, not statistical (unless stats create wonder)
- Connect past to present
- End with resonance, not information

**Action:**
- Option to save/bookmark the word
- Return to home

---

## Navigation & Wayfinding

### Progress Indicator
- Vertical dots on right edge
- Current layer: glowing
- Visited layers: softly lit
- Unvisited: dim
- Tappable to jump (but scroll encouraged)

### Exit
- Subtle "✕" or back arrow, top left
- Swipe right from left edge
- Home icon always accessible

### Orientation
- Current word name always subtly visible (top center)
- Never lost, but never intrusive

---

## Transitions

### Home → Word World
- Selected word grows and moves to center
- Other words fade and drift away
- Background deepens
- Duration: 800ms

### Layer → Layer (scroll)
- Content fades/slides with scroll position
- Parallax: background moves slower than foreground
- Smooth, no snapping unless intentional pause

### Word World → Home
- Current word shrinks and returns to position
- Other words drift back in
- Duration: 600ms

### Word → Related Word
- Crossfade between word worlds
- Brief moment of darkness between
- Duration: 1000ms total

---

## Responsive Behavior

### Mobile (< 768px)
- Full-screen immersion
- Bottom progress indicator (dots)
- Larger touch targets (48px minimum)
- Journey map scrolls horizontally
- Typography scales down proportionally

### Tablet (768px - 1024px)
- Same as mobile but more breathing room
- Side progress indicator

### Desktop (> 1024px)
- Centered content, max-width 900px
- Journey map may show more at once
- Hover states active
- Keyboard navigation (↑↓ for layers, ← for exit)

---

## Accessibility

### Screen Readers
- All content accessible
- Meaningful alt text for journey map
- Audio descriptions available

### Reduced Motion
- Respect `prefers-reduced-motion`
- Replace animations with fades
- Keep transitions minimal

### Keyboard
- Full keyboard navigation
- Tab through interactive elements
- Enter to select, Escape to exit

### High Contrast
- Support `prefers-contrast: high`
- Increase text contrast
- Strengthen interactive element visibility

---

## Performance

### Loading
- Home screen words load immediately
- Word world content lazy-loads
- Audio files load on demand
- Skeleton/shimmer states for loading

### Animation
- Use CSS transforms and opacity only
- GPU-accelerated animations
- 60fps target
- Reduce animation complexity on lower-power devices

---

## Empty & Error States

### Word Not Available
- If a relative word isn't in the collection:
  - Show dimmed card
  - "Coming soon" on tap
  - Never break the flow

### Audio Unavailable
- Show pronunciation text
- "Audio coming soon" indicator
- Never empty

### Loading
- Soft shimmer/pulse
- Maintain layout structure
- Never jarring
