# The Journey — Research Agenda

## Purpose

This document outlines research initiatives to elevate The Journey into the best etymology learning app in the world. Each research area addresses a strategic gap between current state and world-class product.

---

## Research Areas Overview

| # | Research Area | Impact | Effort | Status |
|---|---------------|--------|--------|--------|
| 1 | Learning Science & Retention | Very High | High | **Complete** |
| 2 | Discovery & Serendipity | High | Medium | **Complete** |
| 3 | Social & Sharing Behavior | High | Low | **Complete** |
| 4 | Audio & Pronunciation Experience | Medium | Medium | Not Started |
| 5 | Gamification Without Cheapening | Medium | Medium | **Complete** |
| 6 | Educator & Classroom Use | High | Low | Not Started |
| 7 | Accessibility & Internationalization | Medium | Low | Not Started |
| 8 | Mobile App vs. Web | Medium | Low | Not Started |
| 9 | Content Pipeline & AI | High | Medium | Not Started |
| 10 | Comparative Linguistics Visualization | Medium | High | Not Started |

---

## 1. Learning Science & Retention

**Question:** How do people actually learn and remember etymologies?

**Why it matters:** Beautiful content without evidence-based retention is just entertainment. Duolingo won by understanding spaced repetition. We could own "learning etymology" vs. just "exploring etymology."

**Research questions:**
- What makes an etymology "sticky"? (narrative, surprise, personal relevance?)
- Should we implement spaced repetition prompts? ("Remember qahwa from 3 days ago?")
- Do visual journeys improve recall vs. text-only etymology?
- What's the ideal "dosage"? One word per day? 3 per session?
- How do memory palace techniques apply to geographic journeys?

**Competitive insight:** No etymology app does this well.

**Outputs:**
- [ ] Literature review on narrative-based learning
- [ ] Analysis of spaced repetition in language apps
- [ ] Recommendations for retention features

---

## 2. Discovery & Serendipity

**Question:** How do people explore when there's no search intent?

**Why it matters:** The "Summoning" vision (SEARCH_VISION.md) is beautiful but untested. The discovery drawer is half-built. We need to understand how people actually want to discover words when they don't know what they're looking for.

**Research questions:**
- How do Spotify, Pinterest, and TikTok create discovery without search?
- What's the ideal "browse" experience for 150-500 items?
- Do filters help or hurt serendipity?
- Should we have curated "journeys within journeys"? (paths like "Words of War," "Food's Travels")
- What's the role of randomness? ("Surprise me" button)
- How do museums design for wandering vs. directed exploration?
- What triggers the shift from "just browsing" to "I need to explore this"?

**Current state:**
- Discovery drawer partially built (behind feature flag)
- Filter taxonomy defined but not validated
- No user research on discovery patterns

**Outputs:**
- [ ] Competitive analysis of discovery UX patterns
- [ ] Museum/gallery exploration research
- [ ] Recommendations for discovery drawer design
- [ ] Curated journey/path proposals

**Status:** In Progress

---

## 3. Social & Sharing Behavior

**Question:** Why do people share learning content? What makes them stop scrolling?

**Why it matters:** Share cards are designed (SHARE_CARD_DESIGN_PROPOSAL.md) but not validated. Understanding what actually gets shared in the education/culture space will improve conversion.

**Research questions:**
- What etymology content goes viral? (Twitter etymology accounts, Reddit r/etymology)
- What's the optimal information density for a share card?
- Do "I learned this" posts outperform "look at this cool thing"?
- What's Brilliant.org, Duolingo, and Headspace's sharing strategy?
- Should cards have audio/video or just static images?
- What triggers sharing? Surprise? Identity signaling? Gifting knowledge?

**Outputs:**
- [ ] Viral etymology content analysis
- [ ] Sharing motivation taxonomy
- [ ] Share card A/B test recommendations

---

## 4. Audio & Pronunciation Experience

**Question:** How should pronunciation work in an etymology app?

**Why it matters:** Sound is 1/7 of our layers. We have TTS fallback and Forvo integration planned, but the *experience* around sound isn't designed.

**Research questions:**
- How do Forvo, Drops, and language apps handle authentic pronunciation?
- Should users hear the *evolution* of pronunciation? (qahwa → kahve → coffee in sequence)
- What's the role of phonetic visualization? (waveforms, mouth diagrams)
- Should users be able to record themselves and compare?
- How do you handle extinct pronunciations? (PIE reconstructions)
- What makes pronunciation memorable vs. forgettable?

**Outputs:**
- [ ] Audio UX competitive analysis
- [ ] Pronunciation evolution feature spec
- [ ] Forvo integration requirements

---

## 5. Gamification Without Cheapening

**Question:** How do you create engagement without streaks and badges feeling tacky?

**Why it matters:** Our brand is "museum-quality" — but museums don't have retention. The tension between wonder and engagement is unsolved.

**Research questions:**
- How do high-end apps (Calm, Masterclass) handle progress without gamification?
- What does "collection" feel like for luxury products? (vinyl records, art books)
- Can we create "earned" experiences? (unlock deeper layer after exploring 10 words)
- What's the psychology of "completionism" for intellectual content?
- How does the NYT Crossword create daily habit without cheapening?
- What's the difference between "achievement" and "discovery" framing?

**Outputs:**
- [x] Luxury app engagement analysis
- [x] Collection psychology research
- [x] Elegant progress system design

**Status:** Complete — See `/docs/research/ENGAGEMENT_RETENTION_RESEARCH.md`

---

## 6. Educator & Classroom Use

**Question:** How would teachers actually use this?

**Why it matters:** "Classroom mode" exists but no research on the B2B/education opportunity. This is a potential revenue multiplier.

**Research questions:**
- How do etymology units fit into language arts, history, linguistics curricula?
- What do teachers need? (lesson plans, exportable content, student tracking)
- What's the competitive landscape? (Etymonline for schools? Dictionary.com?)
- What's the pricing model for education? (per seat, site license, freemium)
- Should we have a "teacher dashboard" with curated word packs?
- What age groups benefit most from etymology education?

**Outputs:**
- [ ] Curriculum integration analysis
- [ ] Teacher needs assessment
- [ ] B2B pricing research
- [ ] Education feature roadmap

---

## 7. Accessibility & Internationalization

**Question:** How do we make etymology accessible to everyone?

**Why it matters:** We support multiple scripts, but haven't researched accessibility deeply. This is both ethical and market expansion.

**Research questions:**
- How do screen readers handle multi-script content?
- Should the app itself be available in multiple languages?
- How do we handle RTL languages in the journey map?
- What's the cognitive accessibility angle? (dyslexia-friendly fonts, reading aids)
- Can we serve deaf users with visual pronunciation representations?
- What are WCAG requirements for our specific use cases?

**Outputs:**
- [ ] Screen reader compatibility audit
- [ ] RTL support requirements
- [ ] Accessibility feature roadmap

---

## 8. Mobile App vs. Web

**Question:** Should The Journey be a native app?

**Why it matters:** We're PWA-ready but haven't validated the app store opportunity. Mobile apps can mean better retention and monetization.

**Research questions:**
- What's the user expectation for "premium knowledge" apps? (App Store vs. web)
- How do Calm, Headspace, Brilliant monetize differently on mobile?
- What's the role of notifications for daily habits?
- Should we have offline-first for commute learning?
- What's the cost/benefit of React Native vs. staying web-only?
- What are App Store review requirements for educational content?

**Outputs:**
- [ ] Platform strategy recommendation
- [ ] Native vs. PWA feature comparison
- [ ] Notification strategy design

---

## 9. Content Pipeline & AI

**Question:** How do we scale to 500+ words without sacrificing quality?

**Why it matters:** Each word takes 3-4 hours to create. At that rate, scaling is slow. Can AI help without losing the magic?

**Research questions:**
- What parts of word creation can AI assist? (research, first draft, coordinate lookup)
- How do other "curated content" products scale? (MasterClass, Blinkist)
- Should we have user-submitted words with editorial review?
- What's the quality bar for AI-generated vs. human-written content?
- How do we maintain voice and brand with AI assistance?
- What's the verification process for etymology claims?

**Outputs:**
- [ ] AI-assisted content workflow design
- [ ] Quality control checklist
- [ ] User submission system design

---

## 10. Comparative Linguistics Visualization

**Question:** How do we show relationships between words?

**Why it matters:** The "relatives" feature is basic. Etymology trees and language family connections could be a killer differentiator.

**Research questions:**
- How do linguists visualize language evolution? (cognate trees, family trees)
- What's the state of interactive etymology visualization?
- Should we show the PIE (Proto-Indo-European) root as a "common ancestor"?
- How do we make complex relationships understandable to non-linguists?
- Could we have a "language family" view showing all connected words?
- What data structure changes are needed to support trees?

**Outputs:**
- [ ] Etymology visualization survey
- [ ] Language family tree prototype
- [ ] Data model recommendations

---

## Research Process

### For Each Research Area:

1. **Define scope** — Clarify specific questions and success criteria
2. **Gather sources** — Academic papers, competitor analysis, user interviews
3. **Synthesize findings** — Document key insights
4. **Generate recommendations** — Actionable product/design proposals
5. **Create artifacts** — Specs, mockups, or prototypes as needed

### Documentation

Each completed research area produces:
- A detailed research document in `/docs/research/`
- Key findings summary
- Recommendations with priority levels
- Open questions for future research

---

## Timeline

| Quarter | Focus Areas |
|---------|-------------|
| Q1 2026 | Discovery & Serendipity, Social & Sharing |
| Q2 2026 | Learning Science, Audio Experience |
| Q3 2026 | Educator/B2B, Gamification |
| Q4 2026 | Visualization, Content Pipeline |

---

*Document created: January 2026*
*Last updated: January 2026*
