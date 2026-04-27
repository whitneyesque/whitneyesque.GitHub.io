
==============================================================
DESIGN-SYSTEM-APPLIER HANDOFF — Allied.mdx (PR #5)

V4 design system patterns applied:
- Title rewritten from the draft's plain "Refund+ at Allied" to a
  two-clause form with `<em>`-italicized second clause:
  "A refund that crosses five companies. <em>And a story about who
  was slowing it down that did not survive contact with the data.</em>"
  Mirrors the agetech and ferguson-cx anchor pattern. Drawn from the
  load-bearing reframe in section 2 (the dealer-blame assumption that
  did not survive the data) without committing to a single thesis the
  case-interviewer pass has not yet confirmed.
- All H2 section headers converted to two-clause `<em>` form. The
  one H3-equivalent inline structure (the three-part assumption flip
  inside the InsightCallout) was preserved as-is from the polished
  draft.
- StatRow API uses canonical `stats={[{value, label}, ...]}` and
  sits at the very top of the body, between the imports and the
  first H2 — matches all three reference cases (agetech, ferguson-cx,
  carmax). Three stats kept (5 parties / 70 → 30 days / 9 months);
  the polished draft already had the right shape and the right number.
- BotanicalDivider added once, at the narrative hinge between the
  research/dealer-reframe section and the future-state-concepts
  section. One use only, per V3 Exception 2 — at the pivot from
  "current state / research" to "what we designed."
- InsightCallout kept its draft label "What we thought / What we
  learned." The arrow glyphs (→) wrapped in `&nbsp;` carry the
  reframe visually and were preserved verbatim from the polished
  draft. Worth verifying that the non-breaking spaces hold the arrow
  on its row at narrow breakpoints; Copywriter flagged this in the
  prior round.
- Four PullQuote components preserved verbatim from the draft,
  including the chat-attribution lines from the workshop section.
  Copywriter's prior-round flag about the "Workshop chat" attributions
  reading clinical (vs. "Workshop backchannel") is left for Whitney's
  voice call; not a design-system question.
- SpecimenSignoff added at the very end, per V3 Exception 3.
- DarkBand and ProcessTimeline intentionally NOT used. The three
  future-state concepts (Refund+ ′+′, Provider Direct, Provider BPO)
  are conceptual rather than visual prototypes, so DarkBand (which
  is built around figure cards) would be wrong. The case is not
  phase-driven in the way ferguson-cx is, so ProcessTimeline does
  not apply.
- Component count: StatRow, PullQuote, InsightCallout,
  BotanicalDivider, SpecimenSignoff = 5 component types. Matches
  the agetech and carmax envelope; ferguson-cx adds DarkBand and
  ProcessTimeline on top of the same base. Within the V4 ceiling.
- Frontmatter aligned to schema in src/content/config.ts: required
  fields all present, slug + status + specimen + specimenSignoff
  added.

Specimen choice — flagged for Whitney:
- Chose "Fig, split" from the V3 specimen-symbolism table:
  "Stakeholder or organizational work / Dense interior structure
  made visible." Best fit for a multi-party refund service whose
  interior was opaque even to its operators; the blueprint cracked
  it open. The composer's draft flagged fig-split as the recommended
  specimen and listed amaranthus-trailing (cross-functional connecting
  thread) and protea (research-heavy) as second choices. Both runner-
  ups are taken by other published cases (amaranthus by agetech,
  protea by ferguson-cx), so fig-split is the only clean option in
  the bench at this scale anyway.
- IMPORTANT: /images/specimen-fig-split.jpg and /images/signoff-fig-
  split.png do NOT exist on disk yet. site/public/images/ currently
  contains only specimen-amaranthus.jpg and specimen-protea.jpg. The
  Art Director / Frontend Dev needs to source or commission these
  assets before the case ships without broken-image fallbacks. The
  carmax case (PR #8) is in the same state for specimen-fig.jpg /
  signoff-fig.png; coordinating the bench production for both at
  once would be efficient. The specimen file paths follow the
  established convention (specimen-{name}.jpg, signoff-{name}.png).

Frontmatter values resolved:
- title: rewritten as above (was "Refund+ at Allied")
- year: 2024 (kept from draft; matches engagement dates)
- role: "Service designer, Harmonic Design" (sentence-cased to match
  carmax convention)
- team: kept the polished draft's full phrasing — five-person Harmonic
  team plus ~25 Allied colleagues across product, technology,
  operations, partnerships
- timeline: "Jan – Jun 2024 (Phases 2 – 3 of a nine-month engagement)" —
  spaces around en-dash to match ferguson-cx convention
- tags: kept the draft's four tags (Service Design, Service
  Blueprinting, Strategic Research, Enterprise)
- summary: kept the draft's one-line summary
- client: "Allied Solutions (auto / financial services)" — composer's
  Round-1 note documents the decision to name Allied because Refund+
  is publicly associated with the company. If Whitney wants the case
  anonymized to "a US auto-finance services company," the change is
  mechanical.
- status: 'draft' (NOT 'published'). Three of the polished draft's
  six sections still have load-bearing TODO content — see "Content
  trimmed" and "Open content questions" below. Setting status to
  'draft' keeps the case off the work grid until interview material
  lands. The other shipped V4 cases (agetech, ferguson-cx, carmax)
  ship at 'published'; Allied should not until the gaps fill.
- hero_image: omitted (schema-optional; no asset assigned)

Content trimmed from the polished draft (not design-system work,
but necessary to ship clean MDX):
- The entire "What I'm still thinking about" section was a single
  TODO block with four candidate spines for the case-interviewer
  agent. Removed wholesale — copywriter's prior-round note
  explicitly said to leave the TODO intact until interview material
  lands, and not to paper over it with copy. The candidate spines
  are preserved below in "Open content questions" so they aren't
  lost.
- The TODO list under "What changed for Allied" (about outcomes,
  build status, and Provider BPO authorship) was removed; the real
  content of that section (deliverables) was kept. The heading was
  rewritten so the section reads as descriptive of what was handed
  off rather than implying a missing aftermath paragraph: "What
  Allied got at delivery. <em>A blueprint, two evolution maps, and
  a capability inventory.</em>"
- All inline `<!-- TODO -->` HTML comments removed: the four
  scattered comment blocks (joining narrative confirmation, 138 → 3
  distillation, status milestone row authorship, and the Whitney
  contributions question). Their content is preserved below in
  "Open content questions."
- The large composer + copywriter handoff HTML comment block at
  the bottom of the polished draft (~280 lines) was removed
  entirely. Per the user's instruction, embedded handoff blocks
  break the MDX parser when they contain backticks or braces. The
  prior rounds' notes are preserved in
  agent-land/drafts/Allied.mdx; this handoff captures only what's
  load-bearing for the design-system pass and the next round.

Open content questions carried forward (priority order, from the
trimmed composer + copywriter notes):

  P1 — The argument / Y sentence. The case-composer flagged three
       candidate spines and the prior critic agreed the argument is
       not yet pinned down:
       (a) "Dismantling an internal narrative is the design work;
            the future state is the decoration." [the dealer-blame
            reframe — the spine the current title leans toward]
       (b) "A senior service designer's job is to hold the model
            when the room can't." [the remote-anchor frame]
       (c) "The most strategically valuable line of a future state
            is usually the one that changes what kind of company
            you are." [the Provider BPO frame]
       Each leads to a different center of gravity and a different
       title. The current title implies (a). If the interview lands
       on (b) or (c), the title is a one-line edit.

  P2 — Specific contributions. Three spots where Whitney's individual
       contribution is implied but not confirmed:
       - "I joined in Phase 2, contributing to research synthesis,
         future-state concept development, the collaborative
         blueprinting workshop, and the final deliverables." Confirm
         the right characterization of when she joined and how her
         scope was negotiated within the team.
       - The 138 → 3 distillation. Was there a specific concept or
         differentiator she pushed for? The Provider BPO pivot is
         the most strategically interesting move in the deck — was
         it her recommendation, the team's, or the Refund+ lead's?
       - The status-milestone row in the workshop section. The
         video walkthrough phrasing implies it was a Whitney-led
         innovation but the prior composer round could not confirm.
         The current MDX preserves "I also pushed for a row..." If
         that credit is not Whitney's, this is a one-line edit
         ("the team added" / "we added a row").

  P3 — Outcomes. The materials end at delivery. Did Allied fund
       the build? Which horizon did they prioritize (Refund+ ′+′,
       Provider Direct, Provider BPO, or a combination)? Has any
       of the future state shipped? Most hiring managers will read
       the outcomes section first. The current MDX ends at the
       delivery artifacts and does not speculate.

  P4 — The remote-anchor / chronic-illness frame. The composer's
       prior-round note documents that Whitney's remote attendance
       at the in-person workshop was partly a chronic-illness
       accommodation (hEDS / POTS / MCAS, disclosed in a March 25
       2024 email to Harmonic leadership). It is a legitimate craft
       frame for the "blueprinting from a chair" section but was
       deliberately kept out of the public draft because it is
       intimate and Whitney owns the disclosure call. The current
       MDX preserves the same restraint. If Whitney decides to
       disclose, the section can absorb the frame without structural
       change.

  P5 — Voice. Drafted in first person assuming portfolio convention;
       the only first-person source material is Whitney's emails.
       Confirm voice and tense. Matches the agetech case's
       first-person voice as currently drafted.

For the Frontend Dev:
- All five imported components (StatRow, PullQuote, InsightCallout,
  BotanicalDivider, SpecimenSignoff) exist in site/src/components/
  on this branch. Verified by listing the directory.
- src/content/config.ts on this branch already includes all
  frontmatter fields used here (specimen, specimenSignoff, status;
  slug is not in the schema but is preserved to match the convention
  of the three reference cases). No schema change needed.
- The two specimen image paths reference assets that do not yet
  exist in site/public/images/. The page will render with broken-
  image fallbacks until specimen-fig-split.jpg and signoff-fig-
  split.png are produced. Same situation as carmax (PR #8) —
  coordinate bench production.
- File is at site/src/content/cases/Allied.mdx with mixed-case
  filename to match the user's specified path. The other cases
  on disk are lowercase (agetech, carmax, ferguson-cx); confirm
  whether Astro's slug derivation should match (would mean renaming
  to allied.mdx and setting slug accordingly). Current slug field
  is 'Allied' to match the filename as specified.
==============================================================
