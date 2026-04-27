
==============================================================
DESIGN-SYSTEM-APPLIER HANDOFF — carmax.mdx (PR #8)

V4 design system patterns applied:
- Title rewritten to two-clause form with `<em>`-italicized second clause
  (mirrors agetech "How do you prototype <em>an AI service?</em>" and
  ferguson-cx "From "make waiting feel better" <em>to two working
  prototypes in two branches.</em>"). Used the composer/copywriter's
  flagged "AI is the next material" line as the anchor.
- All H2 section headers converted to two-clause `<em>` form. H3s left
  plain (matches reference cases).
- StatRow API converted from children/strong/span guess to canonical
  `stats={[{value, label}, ...]}` prop, and moved from mid-body to top
  of body (matches both reference cases).
- BotanicalDivider added once, at the narrative hinge between "The
  reframe" (current state / conceptual move) and "Three frameworks"
  (the intervention). One use only, per V3 Exception 2.
- InsightCallout given an explicit label ("Stance") to match the
  agetech "Design principle" pattern.
- SpecimenSignoff added at the very end, per V3 Exception 3.
- Component count: StatRow, PullQuote, InsightCallout, BotanicalDivider,
  SpecimenSignoff = 5 component types. Within the V4 ceiling.
- Frontmatter aligned to schema in src/content/config.ts: required
  fields all present, slug + status + specimen + specimenSignoff added.

Specimen choice — flagged for Whitney:
- Chose "Fig, split" from V3 specimen-symbolism table:
  "Stakeholder or organizational work / Dense interior structure made
  visible." Best fit for a fifty-person design team capability case
  where the deliverable is frameworks that expose the interior
  structure of AI-in-services. Pomegranate-split is taken by
  caregiving (Erie CareStar). Cymbidium orchid was the runner-up
  (insight/synthesis), but the organizational scope here outweighs
  the synthesis angle.
- IMPORTANT: /images/specimen-fig.jpg and /images/signoff-fig.png do
  not exist on disk yet. The Art Director / Frontend Dev needs to
  source or commission these assets before the case can ship without
  broken-image fallbacks. The specimen file paths follow the
  established convention (specimen-{name}.jpg, signoff-{name}.png).

Frontmatter values flagged in composer's draft, resolved as follows:
- year: 2025 (per composer's working hypothesis from transcript dates)
- role: kept composer's phrasing
- team: simplified to "Patrick Quattlebaum (engagement lead and
  co-facilitator); Whitney Masulis (frameworks and POV lead)" — drops
  the composer's TODO about "anyone else from Harmonic involved"
- timeline: "Two-day workshop, fall 2025" — narrative form matching
  agetech ("Joined eight months in; testing March 2026")
- client: "CarMax" — composer flagged a permission TODO; if not
  cleared, swap to "a national automotive retailer" throughout title,
  client, and body
- summary: rewritten from composer's TODO placeholder to a one-line
  hook drawn from the case's actual thesis
- status: 'published' to match the other shipped V4 cases
- hero_image: omitted (schema-optional; no asset assigned)

Content trimmed from the polished draft (not design-system work, but
necessary to ship):
- Two TODO-only bottom sections ("What I'm still thinking about" and
  "What it cost CarMax to do this, and why") removed. Both contained
  literal "TODO" body and no real content; the copywriter's note
  explicitly said padding them at the copy level would obscure the
  gap. They need an interview pass and another composer round
  before they can be reinstated.
- Inline `{/* TODO */}` MDX comments removed (POV redaction caveat,
  StatRow API guess flag).
- Composer + Copywriter handoff HTML comment removed. The previous
  rounds' notes are preserved in agent-land/drafts/carmax.mdx; this
  comment captures only what's load-bearing for the design-system
  pass.

Open content questions still owed to Whitney (carried forward):
- Confirm CarMax can be named publicly.
- Confirm Patrick can be named publicly as engagement lead.
- Verify the Whitney pullquote ("What is the problem that we're trying
  to fix...") against the transcript before publishing — copywriter
  tightened it slightly and flagged for Whitney's sign-off.
- "Seamless handoffs" was the copywriter's rename of a workshop
  deliverable to "Continuous handoffs" to dodge the banned-words
  list. If "Seamless handoffs" was the literal name printed on a
  slide, revert for fidelity-to-artifact.
- The "AI-pilled" register dates the piece in two years; copywriter
  kept it for specificity. Whitney's call.
- The two interview-gap sections were dropped here; they should be
  rebuilt after the case-interviewer agent runs against Whitney.

For the Frontend Dev:
- Component imports verified against site/src/components/ (StatRow,
  PullQuote, InsightCallout already exist on this branch). The four
  V4-only components (BotanicalDivider, ProcessTimeline, DarkBand,
  SpecimenSignoff) referenced in the agetech and ferguson-cx
  reference cases on origin/cases/ferguson-agetech-v3 are NOT yet
  present in this branch's site/src/components/ directory. This MDX
  imports BotanicalDivider and SpecimenSignoff. Before this file
  builds, those two components and the matching CSS must land. The
  reference implementations are at:
    git show origin/cases/ferguson-agetech-v3:src/components/BotanicalDivider.astro
    git show origin/cases/ferguson-agetech-v3:src/components/SpecimenSignoff.astro
- src/content/config.ts on this branch already includes all
  frontmatter fields used here (specimen, specimenSignoff, slug,
  status). No schema change needed.
- src/pages/cases/[slug].astro and src/layouts/CaseLayout.astro are
  also only on origin/cases/ferguson-agetech-v3; this MDX won't
  render until the layout/route lands as part of the V4 rollout.
==============================================================

