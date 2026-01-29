# Spaced Repetition & Retention Research

## Research Question

**How do people actually learn and remember etymologies — and how should The Journey support retention without becoming homework?**

This research covers the science of spaced repetition, how leading apps implement retention systems, and how to apply these principles to exploratory/narrative content like etymology journeys.

---

## Executive Summary

### Key Findings

1. **The forgetting curve is real and predictable** — Without review, learners lose ~56% of new information within 1 hour and ~75% within 6 days. But strategically timed reviews can flatten the curve dramatically.
2. **SM-2 is the gold standard but is designed for flashcards** — The Journey needs a model closer to Duolingo's half-life regression, which accounts for word difficulty, learner history, and contextual factors.
3. **Narrative content has natural retention advantages** — Stories are 6-7x more memorable than isolated facts. Etymology journeys are inherently narrative, which is a major advantage over flashcard-based language apps.
4. **Testing beats re-reading by 50-80%** — The "testing effect" is one of the most robust findings in cognitive science. Even low-stakes, gentle retrieval prompts dramatically improve retention.
5. **Interleaving beats blocking for long-term retention** — Mixing word origins (Arabic, Sanskrit, Japanese) produces better retention than grouping by origin, despite feeling harder in the moment.
6. **Passive review has measurable value** — Simply re-encountering previously seen content (without active recall) produces ~40-60% of the benefit of active testing.
7. **Premium apps prove gentle > gamified** — Calm, Headspace, and Masterclass achieve high retention through invitation, not obligation. No streaks needed.

### Strategic Recommendations for The Journey

| Priority | Recommendation | Rationale |
|----------|----------------|-----------|
| 1 | **"Remember This?" gentle prompts** | Light-touch retrieval practice that fits the museum aesthetic |
| 2 | **Half-life regression model** | Track per-word memory strength; schedule resurfacing intelligently |
| 3 | **Narrative re-encounters** | Show etymology fragments in new contexts rather than flashcard format |
| 4 | **Interleaved daily words** | Mix origins and themes in daily suggestions |
| 5 | **Passive review in home screen** | Rotate previously explored words with new contextual hooks |
| 6 | **"Word of the Day" with memory weaving** | Combine new content with callbacks to words the user is about to forget |

---

## Part 1: The Science of Forgetting and Remembering

### The Ebbinghaus Forgetting Curve

Hermann Ebbinghaus published his landmark study "Memory: A Contribution to Experimental Psychology" in 1885. Using nonsense syllables (to eliminate the effect of meaning), he measured retention at precise intervals.

**Original Ebbinghaus Data:**

| Time After Learning | Retention |
|---------------------|-----------|
| 20 minutes | 58% |
| 1 hour | 44% |
| 9 hours | 36% |
| 1 day | 33% |
| 2 days | 28% |
| 6 days | 25% |
| 31 days | 21% |

**The mathematical model:**

```
R = e^(-t/S)
```

Where:
- `R` = retention (0 to 1)
- `t` = time since learning
- `S` = memory strength (stability)
- `e` = Euler's number

**Critical insight for The Journey:** Ebbinghaus used *meaningless* syllables. Real-world retention for meaningful, narrative content is significantly higher. A 2019 meta-analysis by Averell & Heathcote found that meaningful material shows roughly 2x the retention of nonsense syllables at every interval. Etymology stories, with their vivid imagery and narrative structure, fall into the "meaningful" category.

**The spacing effect — Ebbinghaus's other discovery:**

Ebbinghaus also found that distributed practice (spreading study over time) dramatically outperforms massed practice (cramming). 68 repetitions spread over 3 days produced the same retention as 38 repetitions in a single sitting — but the spaced group retained the material far longer.

**Optimal review intervals (from modern research):**

Research by Cepeda et al. (2008) in "Spacing Effects in Learning" (the largest meta-analysis of spacing effects, analyzing 254 studies with 14,000+ participants) found:

| Desired Retention Period | Optimal First Review | Optimal Spacing Ratio |
|--------------------------|----------------------|----------------------|
| 1 week | 1-2 days | ~20-40% of retention interval |
| 1 month | 1 week | ~20-40% of retention interval |
| 1 year | 3-4 weeks | ~10-20% of retention interval |

The "spacing ratio" insight: the optimal gap between reviews is roughly 10-30% of the desired retention period. If you want to remember something for a year, the first review should happen about 3-5 weeks after initial learning.

---

### The Leitner System (1972)

Sebastian Leitner's box system is the simplest practical implementation of spaced repetition:

**How it works:**

```
Box 1: Review every day        (new/forgotten items)
Box 2: Review every 2 days     (learned once)
Box 3: Review every 4 days     (learned twice)
Box 4: Review every 9 days     (learned three times)
Box 5: Review every 14 days    (well-learned items)
```

**Rules:**
- All new items start in Box 1
- Correct answer → promote to next box
- Wrong answer → demote back to Box 1
- Higher boxes = longer intervals between reviews

**Strengths:**
- Dead simple to implement
- No algorithm needed — just box assignments and dates
- Intuitive for users to understand their progress ("I have 3 words in Box 5!")

**Weaknesses:**
- Fixed intervals don't adapt to individual learning speed
- Binary correct/wrong doesn't capture partial knowledge
- No account for item difficulty
- Demotion to Box 1 is punitive — a single mistake erases all progress

**Relevance to The Journey:**
The Leitner metaphor maps well to The Journey's "collection" concept. Instead of boxes, think of it as words at different "depths of knowing":
- **Glimpsed** — Seen the word on the home screen but not explored
- **Visited** — Explored the word's journey once
- **Familiar** — Can recall the basic etymology
- **Known** — Can recall the story, the path, the connections
- **Owned** — Part of your permanent vocabulary; you use it in conversation

This is more elegant than numbered boxes and fits the museum/travel metaphor.

---

### The SM-2 Algorithm (SuperMemo / Anki)

SM-2, created by Piotr Wozniak in 1987 and refined through 1990, is the algorithm behind Anki and many spaced repetition systems. It remains influential despite being over 35 years old.

**Core mechanics:**

After each review, the user rates their recall on a 0-5 scale:
- **0** — Complete blackout, no recognition
- **1** — Wrong answer, but recognized the correct one
- **2** — Wrong answer, but it felt familiar
- **3** — Correct answer with serious difficulty
- **4** — Correct answer after hesitation
- **5** — Perfect, instant recall

**The interval formula:**

```
For the first review:   I(1) = 1 day
For the second review:  I(2) = 6 days
For subsequent reviews: I(n) = I(n-1) * EF
```

Where EF (Ease Factor) starts at 2.5 and adjusts:

```
EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
```

Where `q` = quality of response (0-5). EF never drops below 1.3.

**What this produces in practice:**

For a word rated "4" (correct with hesitation) each time:
- Review 1: Day 1
- Review 2: Day 6
- Review 3: Day 15 (6 * 2.5)
- Review 4: Day 38 (15 * 2.5)
- Review 5: Day 94
- Review 6: Day 235
- Review 7: Day 588 (~1.6 years)

**For a difficult word (rated "3" each time):**
- EF drops to ~1.3 over time
- Intervals grow much more slowly: 1, 6, 8, 10, 13, 17, 22...
- The algorithm keeps difficult words on a tighter review cycle

**Strengths:**
- Adapts to individual item difficulty
- Intervals grow exponentially for well-known items (efficient)
- Battle-tested across millions of Anki users

**Weaknesses:**
- The 0-5 rating scale is cognitively demanding ("Was that a 3 or a 4?")
- No account for the time between reviews (if you take a 2-month break, it doesn't adjust)
- No machine learning — doesn't improve with data
- Optimized for flashcard recall, not deeper understanding

**Evolution to SM-18 (current SuperMemo):**
Wozniak continued developing the algorithm. SM-18 (2019) incorporates:
- Memory stability and retrievability as separate variables
- Optimization based on the forgetting curve for individual items
- Better handling of lapses (forgetting previously known items)
- The concept of "desired retention" — letting users choose their target (e.g., 90% vs. 95%)

**FSRS (Free Spaced Repetition Scheduler):**
In 2022, Jarrett Ye developed FSRS as a modern, open-source alternative to SM-2 for Anki. It uses a machine learning model trained on millions of Anki reviews. Key improvements:
- 30% fewer reviews needed compared to SM-2 for the same retention
- Better prediction of forgetting probability
- Accounts for review spacing, difficulty, and learner patterns
- Now integrated as an option in Anki (since v23.10)

---

## Part 2: How Duolingo Implements Retention

### The Half-Life Regression Model (HLR)

Duolingo published their approach in a 2016 paper by Settles & Meeder: "A Trainable Spaced Repetition Model for Language Learning." This is arguably the most sophisticated production spaced repetition system.

**Core concept: Memory Half-Life**

Instead of fixed intervals, Duolingo models each word as having a "half-life" — the time at which there's a 50% chance the learner has forgotten it.

```
p(recall) = 2^(-delta/h)
```

Where:
- `p` = probability of recall (0 to 1)
- `delta` = time elapsed since last practice
- `h` = half-life of the memory (in days or hours)

**What determines the half-life?**

The half-life is computed via regression on features including:
- Number of times the word has been practiced
- Number of times the user got it wrong
- Time since last practice
- The word's inherent difficulty (some words are harder for everyone)
- Lexeme tag features (word type, cognate status, etc.)
- User's overall learning history

**The strength bar visualization:**

Each word in Duolingo shows a "strength bar" (0-100%):
- Full bar (gold) = high probability of recall
- Decaying bar = time to practice
- Empty bar = likely forgotten

This maps directly to the `p(recall)` value. Users don't see the math — they see an intuitive visual that tells them when words are "fading."

**Practice recommendations:**

Duolingo's system ranks all learned words by their estimated recall probability and surfaces the ones most at risk. The "Practice" button prioritizes:
1. Words closest to the "forgetting threshold" (typically p < 0.5)
2. Words the user has recently gotten wrong
3. Words that haven't been seen in a long time (even if previously strong)

**Why HLR is superior to SM-2 for The Journey:**

| Feature | SM-2 | Duolingo HLR |
|---------|------|-------------|
| Adapts to learner | Per-item EF only | Per-learner + per-item features |
| Uses machine learning | No | Yes (trained on 12B+ exercises) |
| Handles breaks | Poorly (resumes where you left off) | Well (models decay during absence) |
| Self-assessment required | Yes (0-5 scale) | No (inferred from performance) |
| Content type | Flashcards only | Any testable interaction |
| Difficulty factors | Single EF number | Multi-feature regression |

**Key data from Duolingo's research:**

- Students who follow the spaced repetition schedule retain vocabulary at 2x the rate of those who don't
- The optimal retention threshold for practice reminders is approximately p = 0.6 (trigger practice when recall probability drops to 60%)
- Words practiced in context (sentences) have ~30% longer half-lives than words practiced in isolation
- Cognates (words similar to learner's L1) have naturally longer half-lives

### What Makes Duolingo's Approach Effective

1. **Invisible complexity** — Users never see the algorithm. They just see "Practice" and strength bars.
2. **Context-based practice** — Words appear in sentences, not isolation, increasing both difficulty and retention.
3. **Adaptive difficulty** — If you keep getting a word right, it fades into the background. If you struggle, it appears more.
4. **Streaks as motivation** — The streak mechanic drives daily practice, ensuring regular spaced repetition occurs naturally.
5. **"Cracked" skill metaphor** — Skills "crack" (decay) over time, creating urgency to practice. This leverages loss aversion.

### Duolingo's Birdbrain Model (2023-2024)

Duolingo evolved HLR into "Birdbrain," a deep learning model that:
- Predicts the probability of a correct response for each exercise type
- Personalizes lesson difficulty in real-time
- Sequences exercises to maximize learning (mixing easy and hard)
- Considers "session fatigue" (accuracy drops within a session)

This produces a "desirable difficulty" — challenging enough to learn, not so hard it's frustrating. Research by Bjork & Bjork (2011) established that learning is maximized at roughly 85% accuracy.

---

## Part 3: How Memrise, Anki, and Quizlet Handle Retention

### Anki

**Philosophy:** Maximum user control, minimal hand-holding.

**Algorithm:** SM-2 (with FSRS as an option since late 2023)

**Key mechanics:**
- Cards are rated: Again, Hard, Good, Easy
- "Again" resets the card to a "relearn" state (1-minute and 10-minute intervals)
- "Good" advances the card at the current interval * ease factor
- "Easy" advances the card with a bonus multiplier
- New cards: 1 min → 10 min → 1 day → graduating interval
- Mature cards: intervals grow by EF (default 2.5)

**Review session design:**
- Daily deck-based sessions
- Mix of new cards (default: 20/day) and review cards
- No session length limit — users review until done
- "Due" cards must be reviewed today or they pile up (creating "review debt")

**Strengths for serious learners:**
- Complete transparency (users can see all scheduling data)
- Custom card types (cloze deletion, image occlusion, etc.)
- Community-shared decks
- Works offline

**Weaknesses:**
- High cognitive overhead (choosing Easy vs. Good is non-trivial)
- "Review debt" anxiety — missing a day creates a backlog
- No adaptation across cards — each card is independent
- Ugly, utilitarian design (actively hostile to casual users)
- No narrative or context — pure isolated recall

**Relevance to The Journey:**
Anki's approach is the *opposite* of what The Journey should be. However, Anki's effectiveness validates the core science. The lesson is: take the algorithm, discard the experience.

---

### Memrise

**Philosophy:** Memory techniques + entertainment + native speaker content.

**Algorithm:** Proprietary, garden-metaphor based.

**Key mechanics:**
- Words are "planted" (initial learning) and "watered" (reviewed)
- Each word has a growth stage: seed → sprout → growing → flower → full bloom
- Words "wilt" over time without review
- Review intervals roughly follow: 4 hours → 12 hours → 1 day → 3 days → 7 days → 14 days → 30 days → 90 days → 180 days

**Distinctive features:**
- **Mems** (user-created mnemonics): imagery, wordplay, or associations
- **Video clips of native speakers**: real-world pronunciation and context
- **Speed review mode**: rapid-fire recall testing
- **Difficult words list**: auto-generated from mistakes
- **Listening and speaking exercises**: not just reading

**Review session design:**
- "Classic Review": standard spaced repetition
- "Speed Review": time-pressured recall
- "Listening Skills": audio-only prompts
- "Learn with Locals": video-based exercises
- Sessions are 5-15 minutes, capped at a comfortable length

**Strengths:**
- Mnemonics (Mems) add a creative, personal dimension
- Multi-modal (video, audio, typing, multiple choice) creates varied retrieval paths
- Garden metaphor is intuitive and non-threatening
- No "review debt" anxiety — plants just wilt, they don't die

**Weaknesses:**
- The garden metaphor can feel childish for adult learners
- Community mems are often low quality
- Less control than Anki (can't customize intervals)
- Content limited to courses (can't add arbitrary content easily)

**Relevance to The Journey:**
The garden/growth metaphor is instructive. For The Journey, the equivalent could be "depth of knowing" — a word transitions from "glimpsed" to "owned" through repeated encounters. The non-punitive approach (wilting, not dying) is important for a wonder-focused app.

---

### Quizlet

**Philosophy:** Study flexibility + social features + simplicity.

**Algorithm:** Simple confidence-based sorting (not true spaced repetition until "Long-Term Learning" mode).

**Key mechanics:**
- Standard mode: users self-sort cards into "know" and "don't know" piles
- "Long-Term Learning" (Quizlet Plus feature, $35.99/year):
  - Uses a basic spaced repetition scheduler
  - Sends notifications when words are due for review
  - Tracks "mastery" per card
  - Intervals: same day → next day → 3 days → 7 days → 14 days → 30 days

**Study modes:**
- **Flashcards**: classic flip cards
- **Learn**: adaptive multiple choice + typed answers
- **Test**: generated practice tests
- **Match**: timed matching game
- **Gravity**: falling-asteroids typing game

**Strengths:**
- Extremely low friction to start (create set or find shared one)
- Multiple study modes keep practice varied
- Social features (shared sets, class groups) drive adoption
- Simple enough for anyone

**Weaknesses:**
- Basic spaced repetition (no difficulty adaptation, no per-item modeling)
- "Know/don't know" binary is crude
- Gamification is shallow
- No narrative or context
- Free tier is increasingly limited

**Relevance to The Journey:**
Quizlet demonstrates that variety in review format matters. The same content presented as flashcard, multiple choice, typed answer, and matching game creates multiple retrieval pathways and keeps practice from feeling monotonous. For The Journey, this suggests varying how retention prompts appear.

---

### Comparative Summary

| Feature | Anki | Duolingo | Memrise | Quizlet |
|---------|------|----------|---------|---------|
| **Algorithm** | SM-2 / FSRS | Half-life regression | Proprietary (garden stages) | Basic SR (Plus only) |
| **Adaptivity** | Per-card EF | Per-learner + per-item ML | Per-item stages | Binary know/don't |
| **Self-assessment** | Yes (4 buttons) | No (inferred) | No (inferred) | Yes (know/don't) |
| **Review format** | Flashcard only | Sentence exercises, audio, typing | Multi-modal | Multiple study modes |
| **Metaphor** | Deck of cards | Skill tree / strength bars | Garden | Study set |
| **Anxiety level** | High (review debt) | Medium (streak pressure) | Low (plants wilt gently) | Low (study at will) |
| **Narrative/context** | None | Sentence context | Video context | None |
| **Design quality** | Minimal/ugly | Polished/fun | Decent | Clean/corporate |
| **Target user** | Serious students | Casual-to-serious | Casual | Students (K-12, college) |

---

## Part 4: Spaced Repetition for Non-Flashcard Content

### The Challenge

Traditional spaced repetition assumes discrete, testable facts:
- Front: "What is the etymology of 'coffee'?"
- Back: "From Arabic 'qahwa'"

But The Journey's content is *experiential*:
- A story about Sufi monks
- A map showing a word's migration
- The sound of a word transforming
- Connections between related words

How do you apply spaced repetition to this?

### Research on Narrative-Based Retention

**Stories are inherently memorable:**

Research by Bower & Clark (1969) found that participants who created narrative stories to link word lists recalled **6-7x more words** than those who simply memorized the lists. This is the "narrative superiority effect."

More recent work by Szpunar, Jing, & Schacter (2014) found that episodic (story-based) memories are retained 2-3x longer than semantic (fact-based) memories at the same level of initial encoding.

**Why this matters for The Journey:**
The etymology stories ARE the retention mechanism. By wrapping facts (Arabic origin, trade route path, date of first English usage) in vivid narrative (Sufi monks, Venetian traders), the content is self-retaining to a degree that flashcard apps can't match.

**But narrative alone isn't enough:**

Even stories fade. Ebbinghaus's curve still applies — just with a higher baseline and slower decay. Research suggests meaningful content decays to about 50% at 2-3 days (vs. 25% for meaningless syllables). This means:
- After 1 visit to a word journey, a user retains ~80% at 1 hour
- After 1 day: ~60%
- After 3 days: ~45-50%
- After 1 week: ~35%
- After 1 month: ~20-25%

Still substantial forgetting. The question is how to prompt review elegantly.

### Passive Review (Re-Encounter Without Active Recall)

**Definition:** Showing previously seen content again without requiring the user to actively recall it. Examples:
- A previously explored word appearing on the home screen with a new hook
- A notification saying "The word qahwa traveled from Ethiopia to your cup"
- Seeing a word's journey fragment while exploring a different word

**Research on passive review effectiveness:**

Karpicke & Roediger (2008) compared four conditions:
1. Study-study-study-study (passive review)
2. Study-test-study-test (mixed)
3. Study-study-study-test
4. Study-test-test-test (maximum retrieval practice)

Results after 1 week:
- Condition 4 (maximum testing): 80% retention
- Condition 2 (mixed): 68% retention
- Condition 1 (passive only): 36% retention
- Condition 3 (study-heavy): 40% retention

**Key finding:** Passive review alone produces only ~40-50% of the benefit of active retrieval. BUT — in contexts where active testing feels inappropriate (like a premium exploration app), passive review still significantly outperforms zero review.

**The "testing with no stakes" sweet spot:**

Kornell, Hays, & Bjork (2009) found that even failed retrieval attempts (where the person can't remember and is shown the answer) improve later retention by 30-40% compared to just re-studying. The act of *trying* to remember, even unsuccessfully, strengthens the memory trace.

This suggests The Journey can prompt light recall ("Do you remember where this word traveled?") and still benefit retention even when the user thinks "I have no idea" and taps to see the answer.

### Practical Models for Non-Flashcard SR

**Model 1: Fragment Resurfacing**

Instead of showing the full word journey again, surface a *fragment* — a single piece that prompts partial recall:

- "This word kept Sufi monks awake" → Can you remember which word?
- Show the journey map with destination hidden → Where did it end up?
- Play the original pronunciation → Which word is this?

Each fragment tests a different aspect of the memory, creating varied retrieval pathways.

**Model 2: Contextual Weaving**

When a user explores a new word, weave in references to previously explored words:

- While exploring "algorithm": "Like qahwa (which you explored 3 days ago), this word also traveled from Arabic..."
- On the home screen: group previously explored words by connection to the new daily word

This is "passive review" embedded in active exploration.

**Model 3: Progressive Elaboration**

Each re-encounter reveals something new — a detail not included in the original journey:

- First visit: The main etymology story
- Second encounter (prompted): A detail about how pronunciation changed
- Third encounter: A cultural context you didn't see before
- Fourth encounter: A connection to another word

This transforms review from "see the same thing again" to "discover more." It aligns with The Journey's philosophy of depth over breadth.

**Model 4: Social Recall**

Prompt review through sharing mechanics:
- "Share what you learned about qahwa" — composing the share card requires recall
- "A friend explored 'algorithm' — did you know it connects to the word you learned?"

---

## Part 5: Interleaving vs. Blocking

### The Research

**Blocking:** Studying related items together (all Arabic-origin words, then all Sanskrit-origin words)
**Interleaving:** Mixing categories (Arabic, Sanskrit, Japanese, Germanic words in random order)

**Key studies:**

Rohrer & Taylor (2007) found that interleaved practice produced **43% better** performance on a delayed test compared to blocked practice, despite students performing *worse* during practice and *reporting* that blocking felt more effective.

Kornell & Bjork (2008) extended this to concept learning. Participants studied paintings by different artists. Those who saw interleaved examples (Artist A, B, C, A, B, C) were 78% accurate at identifying new paintings vs. 51% for blocked study — a massive advantage.

Birnbaum et al. (2013) confirmed the effect specifically for vocabulary learning. Interleaved vocabulary practice produced 20-30% better retention at 1-week delay.

**Why interleaving works:**

1. **Discrimination learning:** Interleaving forces the brain to distinguish between categories. "How is this Arabic origin different from that Sanskrit origin?" This builds richer mental models.
2. **Retrieval practice by context switching:** Each switch between categories requires re-loading the relevant mental framework, which constitutes a form of retrieval practice.
3. **Desirable difficulty:** Interleaving feels harder (and is harder during practice), but this difficulty is what drives deeper processing. Bjork's "desirable difficulties" framework explains that learning is maximized when practice is challenging but achievable.

**The illusion of blocked learning:**

Critically, learners consistently *believe* blocking is more effective. In Kornell & Bjork's study, 78% of participants judged blocking as the superior strategy — the exact opposite of the truth. This "illusion of competence" occurs because blocking produces fluent, easy practice that feels productive.

### Application to The Journey

**Current behavior:** Words are explored individually — no sequencing strategy.

**Recommended approach for daily suggestions and review:**

- **Interleave origins:** Don't show three Arabic-origin words in a row. Mix them.
- **Interleave themes:** Alternate between food words, war words, philosophy words.
- **Interleave difficulty:** Mix well-known words with less familiar ones.
- **BUT: Maintain narrative coherence within a single session.** If someone is exploring the Spice Road journey, don't interrupt with random words. Interleaving applies to *review* and *daily suggestions*, not to curated journeys.

**Specific implementation:**

When selecting the "Word of the Day" or "Words to Revisit":
1. Never pick two words from the same origin in sequence
2. Never pick two words from the same curated journey in sequence
3. Alternate between "new" and "review" words
4. If showing 3 words, ensure at least 2 different language families

---

## Part 6: The Testing Effect / Retrieval Practice

### The Core Finding

The "testing effect" (also called the "retrieval practice effect") is one of the most replicated findings in cognitive science.

**Roediger & Karpicke (2006)** — the landmark study:
- Group A: Study a passage, then study it again
- Group B: Study a passage, then take a test on it (no feedback)

Results:
- After 5 minutes: Group A scored higher (restudy = 81%, test = 75%)
- After 2 days: Group B scored higher (restudy = 54%, test = 68%)
- After 1 week: Group B scored dramatically higher (restudy = 42%, test = 56%)

**Being tested — even without feedback — produces ~33% better retention than restudying.**

**Meta-analysis by Rowland (2014):** Analyzed 159 studies on retrieval practice. Key findings:
- Average benefit of testing over restudying: d = 0.50 (medium-large effect)
- The benefit is larger for free recall than recognition (producing the answer from memory is better than selecting it)
- The benefit increases over time (testing is disproportionately better at longer delays)
- The benefit persists even with no feedback
- The benefit works across all content types: facts, concepts, procedures, and inferential knowledge

### Testing for Etymology: Beyond Q&A

Traditional testing (flashcards) is the most studied format, but retrieval practice works in many forms:

**Free recall (most effective, most effortful):**
- "Tell me about the word qahwa" — open-ended
- "What do you remember about how 'algorithm' got its name?"

**Cued recall (moderately effective):**
- "This word traveled from Ethiopia through Yemen to Venice..." → what word?
- Show the journey map with the word hidden → "Which word took this path?"

**Recognition (least effortful, still effective):**
- "Which of these words comes from Arabic?" (multiple choice)
- "True or false: 'Algorithm' comes from a mathematician's name"

**Generation (powerful hybrid):**
- "Can you think of other words that traveled trade routes?" (the answer doesn't need to be "correct" — the act of generating candidates improves memory for the target)
- "What other words might share a root with 'donate'?"

### Application to Etymology

**Why etymology is perfectly suited for testing:**

1. **Multiple testable dimensions per word:**
   - Origin language
   - Original meaning
   - The journey path (which countries/cultures)
   - Key historical figure or event
   - Modern meaning vs. original meaning
   - Related/cognate words

2. **Natural difficulty scaling:**
   - Easy: "Which language does 'qahwa' come from?" (recognition)
   - Medium: "Name two stops on coffee's journey from Ethiopia to English" (cued recall)
   - Hard: "How did the word change at each stop?" (free recall)

3. **The "aha" moment as retrieval trigger:**
   The hook ("A word that kept Sufi monks awake") serves as both attention-grabber and future retrieval cue. When prompted with the hook weeks later, the narrative comes flooding back.

**Recommended retrieval practice formats for The Journey:**

| Format | Example | Difficulty | Feels Like |
|--------|---------|------------|------------|
| Hook recall | "Do you remember which word kept Sufi monks awake?" | Easy | A riddle |
| Origin recall | Show word → "Where did this word begin?" | Medium | A memory prompt |
| Path recall | Show origin + destination → "How did it get there?" | Medium-Hard | A story prompt |
| Sound recall | Play original pronunciation → "Which word?" | Medium | A listening exercise |
| Connection recall | "What connects 'qahwa' and 'algorithm'?" | Hard | A thinking exercise |
| Generative | "What other English words came from Arabic?" | Hard | Exploration |

---

## Part 7: Gentle Retention Prompts

### The Design Challenge

The Journey is not Duolingo. Its identity is:
- Museum, not classroom
- Wonder, not obligation
- Invitation, not notification

Any retention system must feel like a continuation of the journey, not an interruption.

### How Premium Apps Handle "Come Back" Without Homework

**Calm:**
- Daily Calm: A new 10-minute meditation each day (content-led, not obligation-led)
- "Daily Calm is ready" notification — it's about *new content*, not incomplete tasks
- No mention of what you haven't done
- Streak is visible but de-emphasized; missing a day has no visual punishment
- Evening reminder: "Wind down with tonight's Sleep Story" — benefit-framed, not task-framed

**Headspace:**
- Daily notification: framed as an invitation, not a reminder
- "Your morning meditation is waiting" — possessive framing (it's *yours*, prepared for you)
- Progress is a journey metaphor: "You've completed 30 sessions on your journey"
- Missed days are invisible — no broken streaks, no guilt UI
- "Mindful moment" cards: a single insight or quote as ultra-low-friction touchpoint

**Masterclass:**
- "New lesson available" — always about what's new, not what's overdue
- No streaks, no points, no gamification
- "Continue watching" — Netflix-style, assumes you want to continue, doesn't demand it
- Weekly digest email: highlights one lesson with a compelling hook
- Progress expressed as completion percentage, not as obligation

**Brilliant.org:**
- Daily problems: a single, interesting challenge each day
- Framed as "Today's Challenge" — curiosity-driven, not retention-driven
- Problem is visible without opening the app (notification shows the question)
- No penalty for skipping days
- "You've solved 47 problems" — cumulative positivity, never "You missed 3 days"

**NYT Games (Wordle, Connections, Spelling Bee):**
- New puzzle daily — the habit is about fresh content, not reviewing old content
- Streaks exist but the game is intrinsically motivating regardless
- Social sharing ("I got it in 3!") drives return visits
- No notifications about past performance
- The puzzle IS the reason to return — it doesn't need external motivation

### Common Patterns in Elegant Retention

| Pattern | How It Works | Psychological Principle |
|---------|-------------|----------------------|
| **New content leads** | Daily notification is about fresh content, not review | Curiosity > obligation |
| **Invitation framing** | "Your morning meditation is waiting" not "You haven't meditated" | Autonomy > pressure |
| **Invisible misses** | No broken streak visuals, no guilt | Loss aversion is toxic long-term |
| **Cumulative positivity** | "You've explored 7 words" not "3 words are fading" | Growth mindset |
| **Ultra-low friction touchpoint** | A single quote, fact, or prompt (5 seconds) | Foot-in-the-door effect |
| **Benefit framing** | "Wind down with tonight's story" not "Complete today's session" | Self-interest > duty |

### Designing The Journey's Retention Prompts

**Principle: Every retention touchpoint should feel like a gift, not a task.**

**Prompt Type 1: "The Daily Word" (New Content + Passive Review)**

```
Push notification:
"saudade — A Portuguese word with no translation.
Your daily journey awaits."

In-app:
The daily word is presented with full exploration.
BUT — at the bottom: "Also: Remember qahwa?
Here's something you didn't know..."
[reveals a new detail about a previously explored word]
```

This bundles new content (the daily word) with passive review (the callback), making the review feel like a bonus, not homework.

**Prompt Type 2: "The Echo" (Gentle Active Recall)**

```
Push notification (3 days after exploring qahwa):
"A word that kept Sufi monks awake.
Do you remember its journey?"

Tap → Opens a simplified recall experience:
- Shows the hook
- User tries to remember the word
- Tap to reveal: "قهوة — qahwa → coffee"
- Then: "Here's a detail you might have missed..."
  [shows a previously unseen connection or fact]
```

This uses the testing effect (recall the word from its hook) but rewards the effort with new content. Even if the user can't recall, tapping to reveal still benefits retention (failed retrieval attempt + feedback).

**Prompt Type 3: "The Connection" (Contextual Weaving)**

```
Push notification:
"The word you explored yesterday and one from last week
share a surprising connection."

In-app:
"algorithm and qahwa both traveled from Arabic
to European languages via trade routes.
Two words, one path."
[shows a mini-map overlay of both journeys]
```

This prompts recall of both words simultaneously while delivering a novel insight. It reinforces the "web of words" mental model.

**Prompt Type 4: "The Question" (Social/Shareable)**

```
Push notification:
"Quick: Where does the word 'assassin' come from?
(You explored this 5 days ago.)"

Tap → Simple recall screen:
- "Tap to remember"
- Reveals the answer with share card option
- "Challenge a friend: Do they know?"
```

This leverages the testing effect AND social sharing as a retention mechanism. Explaining something to someone else (or sharing it) is one of the most powerful forms of retrieval practice.

**Prompt Type 5: "The Wander" (Passive Review via Home Screen)**

No notification needed. On the home screen:
- Previously explored words occasionally show a new hook or contextual tidbit
- "3 days since you visited qahwa" shown as a soft timestamp, not urgency
- Words the user is "about to forget" (per the retention model) glow slightly differently
- A "Revisit" row appears: "Words you haven't seen in a while" — framed as invitation, not obligation

### Notification Strategy

**Frequency:** Maximum 1 per day. Ideally 4-5 per week.

**Timing:** Based on user behavior patterns (when they typically open the app).

**Tone guidelines:**
- NEVER: "You haven't practiced in 3 days!" / "Your streak is about to break!" / "Don't forget!"
- ALWAYS: Lead with wonder, curiosity, or a gift
- Use the word's hook as the notification hook
- Frame as "here's something interesting" not "here's something you need to do"

**Opt-in cadence:**
During onboarding, offer:
- "Daily discoveries" (1/day)
- "A few times a week" (3-4/week)
- "Weekly digest" (1/week)
- "I'll explore on my own" (none)

---

## Part 8: Implementation Recommendations for The Journey

### Retention Model Architecture

**Recommended: Simplified Half-Life Regression**

For The Journey's use case (tens of words, not thousands), a simplified version of Duolingo's HLR is appropriate:

```
For each word the user has explored:

half_life = base_hl * (1 + practice_count)^strength_factor * difficulty_modifier

Where:
- base_hl = 1.0 day (starting half-life)
- practice_count = number of times the user has re-engaged with the word
- strength_factor = 1.5 (how much each re-engagement extends the half-life)
- difficulty_modifier = per-word constant (some etymologies are inherently more memorable)

recall_probability = 2^(-days_since_last_seen / half_life)
```

**Word difficulty factors (affect the difficulty_modifier):**
- Narrative vividness: Vivid stories (Sufi monks, assassins) → higher base retention
- Personal relevance: Words the user encounters in daily life (coffee, algorithm) → higher
- Phonetic similarity: Words that sound like English cognates → higher
- Journey length: More stops on the journey → more retrieval cues → higher
- Emotional weight: Saudade, ubuntu → emotional resonance aids retention

**What triggers a review prompt:**
- When `recall_probability` drops below 0.5 → the word is "fading"
- Maximum of 1-2 "fading" words surfaced per day
- Never surface a word within 24 hours of last encounter

### Data Model

```typescript
interface WordMemory {
  wordId: string;
  userId: string;

  // Tracking
  firstExploredAt: Date;
  lastSeenAt: Date;
  explorationCount: number;      // Full journey views
  echoCount: number;             // Gentle recall prompts answered
  passiveReviewCount: number;    // Times seen on home screen / in connections

  // Retention model
  halfLifeDays: number;          // Current estimated half-life
  recallProbability: number;     // Computed daily
  difficultyModifier: number;    // Per-word, adjustable

  // Engagement signals
  sharedCount: number;           // Sharing = strong retrieval
  timeSpentSeconds: number;      // Total time across all visits
  layersExplored: string[];      // Which layers they've seen
  audioPlayed: boolean;          // Whether they listened to pronunciation

  // Depth level
  depthLevel: 'glimpsed' | 'visited' | 'familiar' | 'known' | 'owned';
}
```

### Depth Level Progression

| Level | Criteria | Visual Treatment |
|-------|----------|------------------|
| **Glimpsed** | Seen on home screen, not explored | Default appearance |
| **Visited** | Explored at least Layer 1-3 | Subtle visited indicator |
| **Familiar** | Explored fully + 1 successful echo prompt | Soft glow |
| **Known** | 3+ successful echo prompts over 2+ weeks | Warm glow |
| **Owned** | Consistently recalled over 30+ days + shared at least once | Golden glow; half-life > 90 days |

### Feature Rollout Plan

**Phase 1 (MVP): Passive Review**
- Track which words users have explored and when
- Rotate "featured word" on home screen, biased toward words about to be forgotten
- Show new hooks/details for previously explored words
- No notifications yet

**Phase 2: The Echo**
- Implement half-life regression model
- Add "Echo" prompts: gentle recall exercises
- 1-2 per session, never forced
- Reward with new content on successful recall

**Phase 3: The Daily Journey**
- Daily push notification with new word + callback to fading word
- "Connection" prompts linking old and new words
- "Question" prompts with social sharing option

**Phase 4: Personalized Retention**
- ML model trained on user engagement data
- Personalized half-life per user per word
- Adaptive prompt frequency based on user engagement patterns
- "Your Year in Words" summary (annual retention report)

---

## Key Takeaways for The Journey

### What We Should Do

1. **Build a retention model** — Even a simple half-life model is vastly better than nothing. Track when users see words and estimate when they'll forget.

2. **Make review feel like discovery** — Every re-encounter should reveal something new. Progressive elaboration transforms "review" into "deeper exploration."

3. **Use gentle active recall** — The testing effect is too powerful to ignore. "Do you remember which word kept Sufi monks awake?" is a riddle, not a quiz.

4. **Interleave everything** — Daily suggestions should mix origins, themes, and difficulty levels. Never show three Arabic words in a row.

5. **Frame cumulatively** — "You've explored 7 words across 4 continents" beats "3 words are fading." Always count up, never count down.

6. **Respect the aesthetic** — Every retention feature must pass the museum test: would this feel at home in a beautifully designed exhibition? If not, redesign it.

### What We Should NOT Do

1. **No streaks** — Streaks create anxiety and punish life. They're effective for Duolingo's casual game audience but wrong for The Journey's contemplative identity.

2. **No review debt** — Words should never feel "overdue." Fading is gentle and natural, not a failure.

3. **No flashcard mode** — Pure flashcard review is effective but destroys the experience. If users want flashcards, they can use Anki.

4. **No quiz scores** — No percentages, no grades, no right/wrong indicators. Recall is rewarded with new content, not scored.

5. **No guilt notifications** — Never mention what the user hasn't done. Every touchpoint is an invitation to wonder.

6. **No competitive mechanics** — Leaderboards, points, and levels cheapen the experience. The only competition is with your own curiosity.

---

## Sources & References

### Foundational Research
- Ebbinghaus, H. (1885). "Memory: A Contribution to Experimental Psychology." Teachers College, Columbia University.
- Cepeda, N.J., Vul, E., Rohrer, D., Wixted, J.T., & Pashler, H. (2008). "Spacing effects in learning: A temporal ridgeline of optimal retention." Psychological Science, 19(11), 1095-1102.
- Bjork, R.A., & Bjork, E.L. (2011). "Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning." Psychology and the Real World, 56-64.

### Testing Effect / Retrieval Practice
- Roediger, H.L., & Karpicke, J.D. (2006). "Test-enhanced learning: Taking memory tests improves long-term retention." Psychological Science, 17(3), 249-255.
- Karpicke, J.D., & Roediger, H.L. (2008). "The critical importance of retrieval for learning." Science, 319(5865), 966-968.
- Rowland, C.A. (2014). "The effect of testing versus restudy on retention: A meta-analytic review of the testing effect." Psychological Bulletin, 140(6), 1432-1463.
- Kornell, N., Hays, M.J., & Bjork, R.A. (2009). "Unsuccessful retrieval attempts enhance subsequent learning." Journal of Experimental Psychology: Learning, Memory, and Cognition, 35(4), 989.

### Interleaving
- Rohrer, D., & Taylor, K. (2007). "The shuffling of mathematics problems improves learning." Instructional Science, 35(6), 481-498.
- Kornell, N., & Bjork, R.A. (2008). "Learning concepts and categories: Is spacing the 'enemy of induction'?" Psychological Science, 19(6), 585-592.
- Birnbaum, M.S., Kornell, N., Bjork, E.L., & Bjork, R.A. (2013). "Why interleaving enhances inductive learning." Memory & Cognition, 41(3), 392-402.

### Narrative & Memory
- Bower, G.H., & Clark, M.C. (1969). "Narrative stories as mediators for serial learning." Psychonomic Science, 14(4), 181-182.
- Szpunar, K.K., Jing, H.G., & Schacter, D.L. (2014). "Overcoming overconfidence in learning from video-recorded lectures." Journal of Experimental Psychology: Applied, 20(2), 104.

### Spaced Repetition Algorithms
- Wozniak, P.A. (1990). "Optimization of repetition spacing in the practice of learning." University of Technology in Poznan.
- Settles, B., & Meeder, B. (2016). "A trainable spaced repetition model for language learning." Proceedings of ACL 2016.
- Ye, J. (2022). "FSRS: Free Spaced Repetition Scheduler." Open source implementation.
- Averell, L., & Heathcote, A. (2011). "The form of the forgetting curve and the fate of memories." Journal of Mathematical Psychology, 55(1), 25-35.

### App & Platform Analysis
- Duolingo Research Blog: "How We Learn How You Learn" (2020)
- Duolingo Birdbrain system documentation (2023)
- Memrise product analysis: garden growth mechanics
- Quizlet Long-Term Learning feature documentation
- Calm, Headspace, Masterclass notification and engagement patterns (product teardowns)

---

*Research completed: January 2026*
*Status: Ready for implementation planning*
*Addresses: Research Agenda Item #1 — Learning Science & Retention*
