# The Journey: Theme System

## Overview

The Journey supports two distinct visual themes, each with its own metaphorical identity:

- **Night Sky** (Dark) - The default, immersive experience
- **Parchment** (Light) - A scholarly, manuscript-inspired alternative

Both themes maintain the app's atmospheric, reverent quality while accommodating different user preferences and contexts.

---

## Philosophy

### Night Sky (Dark Mode)
*"Exploring an ancient library at midnight, discovering secrets by starlight"*

- Words emerge from darkness like stars
- Amber glows like candlelight
- The globe floats in the void of time
- Paths trace light through darkness

### Parchment (Light Mode)
*"Studying ancient manuscripts in morning light, tracing ink across aged paper"*

- Words appear as manuscript annotations
- Gold accents like illuminated manuscripts
- The globe rests on cartographic parchment
- Paths drawn in iron gall ink

---

## Color Palettes

### Night Sky (Dark)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a14` | Main background (abyss) |
| `--bg-secondary` | `#12121e` | Cards, surfaces (ink) |
| `--bg-tertiary` | `#1a1a24` | Elevated surfaces (deep-water) |
| `--text-primary` | `#f0ede6` | Headings, primary text (moonlight) |
| `--text-secondary` | `#a8b0b8` | Body text (mist) |
| `--text-tertiary` | `#6b6866` | Subtle text (fog) |
| `--accent` | `#d4a574` | Interactive elements (amber-glow) |
| `--accent-muted` | `#d4a57440` | Borders, subtle accents |
| `--border` | `#f0ede610` | Subtle dividers |
| `--border-strong` | `#f0ede620` | Visible borders |

### Parchment (Light)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#f8f5ef` | Main background (aged paper) |
| `--bg-secondary` | `#fffefa` | Cards, surfaces (vellum) |
| `--bg-tertiary` | `#f0ebe0` | Elevated surfaces (parchment shadow) |
| `--text-primary` | `#2a2520` | Headings, primary text (iron gall ink) |
| `--text-secondary` | `#5c554a` | Body text (faded ink) |
| `--text-tertiary` | `#8a8378` | Subtle text (pencil) |
| `--accent` | `#b8860b` | Interactive elements (gold leaf) |
| `--accent-muted` | `#b8860b30` | Borders, subtle accents |
| `--border` | `#2a252010` | Subtle dividers |
| `--border-strong` | `#2a252020` | Visible borders |

---

## Component Adaptations

### BubbleNav (Home Globe)

| Aspect | Night Sky | Parchment |
|--------|-----------|-----------|
| Background | Transparent/void | Subtle paper texture gradient |
| Bubble fill | `rgba(26, 26, 36, 0.7)` | `rgba(255, 254, 250, 0.9)` |
| Bubble border | Language tint colors | Darker language tints |
| Text color | Moonlight | Iron gall ink |
| Explored state | Muted gray | Sepia/faded |

### Journey Map

| Aspect | Night Sky | Parchment |
|--------|-----------|-----------|
| Land masses | Dark blue-gray | Aged map tan |
| Ocean/void | Near black | Cream/off-white |
| Path strokes | Glowing, light trails | Ink strokes, hand-drawn feel |
| Nodes | Glowing orbs | Ink dots with gold halos |
| Labels | Light on dark | Dark on light |

### Cards & Surfaces

| Aspect | Night Sky | Parchment |
|--------|-----------|-----------|
| Background | Glass-like, translucent dark | Paper-like, subtle texture |
| Borders | Glowing accent edges | Embossed, letterpress |
| Shadows | Subtle glow outward | Traditional drop shadows |
| Hover states | Brighten/glow | Lift/shadow deepen |

### Typography

| Aspect | Night Sky | Parchment |
|--------|-----------|-----------|
| Headings | Moonlight (#f0ede6) | Iron gall (#2a2520) |
| Body | Mist (#a8b0b8) | Faded ink (#5c554a) |
| Quotes | Italic, ethereal | Italic, manuscript style |
| Scripts | Native color maintained | Native color maintained |

---

## Implementation

### CSS Custom Properties

```css
:root {
  /* Default: Night Sky */
  --bg-primary: #0a0a14;
  --bg-secondary: #12121e;
  --bg-tertiary: #1a1a24;
  --text-primary: #f0ede6;
  --text-secondary: #a8b0b8;
  --text-tertiary: #6b6866;
  --accent: #d4a574;
  --accent-muted: #d4a57440;
  --border: #f0ede610;
  --border-strong: #f0ede620;
}

[data-theme="parchment"] {
  --bg-primary: #f8f5ef;
  --bg-secondary: #fffefa;
  --bg-tertiary: #f0ebe0;
  --text-primary: #2a2520;
  --text-secondary: #5c554a;
  --text-tertiary: #8a8378;
  --accent: #b8860b;
  --accent-muted: #b8860b30;
  --border: #2a252010;
  --border-strong: #2a252020;
}
```

### Tailwind Integration

Theme-aware utility classes:
- `bg-theme-primary` → `var(--bg-primary)`
- `text-theme-primary` → `var(--text-primary)`
- `border-theme` → `var(--border)`
- etc.

### React Context

```tsx
interface ThemeContextType {
  theme: 'night-sky' | 'parchment' | 'system';
  resolvedTheme: 'night-sky' | 'parchment';
  setTheme: (theme: ThemeContextType['theme']) => void;
}
```

---

## User Preferences

### Storage

- **Logged in users**: Stored in Supabase `user_preferences` table
- **Anonymous users**: Not available (dark mode only)

### Profile UI

```
Appearance
──────────────────────────────
Theme

◉ Night Sky
  Explore by starlight

○ Parchment
  Study by daylight

○ System
  Match device setting
```

---

## Feature Flag

**Flag Key:** `theme_selection`

- **Admin only (testing)**: Theme selector visible in profile
- **Enabled for all**: All logged-in users can select theme
- **Disabled**: Dark mode only, no selector shown

---

## Migration Path

### Phase 1: Behind Feature Flag (Current)
- Build theme system
- Admin testing only
- Gather feedback

### Phase 2: Beta Release
- Enable for all logged-in users
- Monitor usage analytics
- Iterate on specific components

### Phase 3: Full Release
- Consider anonymous user support (localStorage)
- Marketing around "Parchment" theme
- Potential seasonal themes (future)

---

## Analytics Events

- `theme_changed`: { from, to, trigger: 'profile' | 'system' }
- `theme_preference_set`: { theme }

---

## Accessibility Notes

- Both themes maintain WCAG AA contrast ratios
- Parchment theme may be preferred by users with:
  - Light sensitivity to dark UIs
  - Certain types of dyslexia
  - Preference for traditional reading experience
- Night Sky theme may be preferred by users with:
  - Light sensitivity / photophobia
  - Evening usage patterns
  - OLED screens (battery efficiency)

---

## What Stays Constant

Regardless of theme:
- Typography choices (Cormorant, Source Serif)
- Animation timing and easing
- Layout and spacing
- The reverent, scholarly tone
- Language-specific accent colors (adjusted for contrast)
- Video/image exports (always use Night Sky for brand consistency)

---

## Open Questions

1. Should the splash/loading screen respect theme or always be dark?
2. Should PWA theme-color meta tag update with theme?
3. Should we offer a "reading mode" for long story sections?
4. Future: Seasonal themes (e.g., "Autumn Manuscript")?
