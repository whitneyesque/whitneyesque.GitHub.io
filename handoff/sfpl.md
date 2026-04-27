==============================================================
DESIGN-SYSTEM-APPLIER HANDOFF — sfpl.mdx (PR #7)

Note on environment:
The workflow brief referenced an agent definition at
agent-land/.claude/agents/design-system-applier.md and a V4
mockups HTML at agent-land/reference/portfolio-mockups-v4.html.
Neither file is present in the prepared filesystem. I worked
from the two shipped V4 cases (agetech.mdx, ferguson-cx.mdx),
the existing site/src/components/, and the carmax handoff note
as the authoritative V4 patterns. Flagging in case the
upstream brief still expects those files to exist.

V4 design system patterns applied:
- Title rewritten to two-clause form with `<em>`-italicized
  second clause (mirrors agetech "How do you prototype <em>an
  AI service?</em>" and ferguson-cx "From "make waiting feel
  better" <em>to two working prototypes in two branches.</em>").
  Used the polished draft's summary line as the anchor: a
  146-year-old library + thirty-two staff + the strategy room.
- All H2 section headers converted to two-clause `<em>` form
  where the section is doing real narrative work. Two H2s
  ("The turn." and "What the case is really about.") were
  intentionally left as plain single-sentence headers because
  the sections themselves are placeholders pending Whitney's
  interview; dressing them in the full V4 form would imply
  resolved content where there isn't any.
- StatRow API converted from the polished draft's V3-era
  children pattern (StatCard children inside StatRow) to the
  canonical V4 prop pattern: `stats={[{value, label}, ...]}`.
  Stats are the same conservative, verifiable four the
  composer chose: 32 ambassadors, 5 priorities, 6-year plan,
  0 dissenting votes. Labels rewritten in V4 register
  (sentence case, no Title Case).
- BotanicalDivider added once, at the narrative hinge between
  "The real problem" (problem framing) and "The ambassador
  model" (the design intervention). Mirrors the placement in
  carmax.mdx (after the reframe, before the frameworks). One
  use only, per V3 Exception 2.
- SpecimenSignoff added at the very end, per V3 Exception 3.
- RoleCard import dropped (not a V4 component). The composer's
  RoleCard placeholder content was preserved as a regular H2
  section ("My role (pending Whitney's interview)") with the
  same TODO discipline. Dropping the heavier RoleCard frame
  also signals more accurately that the role is unresolved
  rather than authored.
- StatCard import dropped (folded into StatRow's prop API).
- InsightCallout import dropped (the composer reserved it for
  the "turn" section, but the turn is still a TODO; following
  the V4 cleanliness rule of importing only what's used).
- Component count: StatRow, PullQuote, BotanicalDivider,
  SpecimenSignoff = 4 component types. Within the V4 ceiling.
- Frontmatter aligned to the V4 schema used by agetech and
  ferguson-cx: title, client, year, role, team, timeline, tags,
  summary, specimen, specimenSignoff, slug, status. The polished
  draft's `hero_image` field was dropped — neither shipped V4
  case uses it, and the schema-optional field has no asset
  assigned.

Specimen choice — flagged for Whitney and the Art Director:
- Chose "redwood" as the working specimen. Rationale: the
  composer's specimen TODO explicitly suggested "weaving /
  threading / shared rooting" for a multi-stakeholder
  strategic plan. Redwoods literally share root systems
  underground, which is the structural argument of the case
  (frontline + leadership rooted into the same strategic
  fabric). Bonus alignment: the redwood is California-civic
  and 146 years of institutional longevity reads as a
  longevity-tree case, not a flowering-prototype case.
  Pomegranate-split (Erie CareStar), amaranthus (agetech),
  protea (ferguson), and fig-split (carmax) are all taken.
- Without the V3 specimen-symbolism table loaded into the
  prepared filesystem, I could not verify the official
  assignment. Flagging redwood as a working choice, not a
  final one.
- IMPORTANT: /images/specimen-redwood.jpg and
  /images/signoff-redwood.png do not exist on disk. The Art
  Director / Frontend Dev needs to source or commission these
  assets before the case can ship without broken-image
  fallbacks. File-path convention follows the established
  specimen-{name}.jpg, signoff-{name}.png pattern.

Frontmatter values: what survived from the draft, what changed:
- title: rewrote from the draft's literal "TODO — Whitney's
  frame for SFPL" to the V4 two-clause form. The composer's
  summary line carried the load.
- client: 'San Francisco Public Library' — kept. Composer
  flagged anonymization; Vision 2030 is a public document
  attributed to SFPL by name, so naming is safe absent a
  contrary instruction from Whitney.
- year: 2024 — kept (year of plan adoption).
- role: kept the composer's placeholder verbatim, including
  the TODO prefix. Felt wrong to dress the role line in
  resolved language when Whitney's contribution is the
  single biggest open question on the case.
- team: kept verbatim.
- timeline: kept the composer's TODO framing, lightly
  compressed.
- tags: kept verbatim (Service Design, Strategic Planning,
  Public Sector, Workshop Facilitation, Co-creation). The
  copywriter's note flagged "Co-creation" as on her banned
  list but explicitly chose not to change it because tag
  taxonomy is an IA decision, not a copy decision. Carrying
  the same call forward.
- summary: kept verbatim.
- status: 'draft' (composer's value) kept, not promoted to
  'published'. Unlike carmax where the body content was
  substantively complete and only metadata TODOs remained,
  this case has structural narrative TODOs (the role, the
  turn, the closing thesis) that would mislead a reader if
  the case shipped now.

Content trimmed from the polished draft (not design-system
work, but necessary to render a clean MDX):
- All MDX comment blocks (`{/* ... */}`) removed. The polished
  draft used them for composer/copywriter handoff notes,
  inline TODOs, and editorial commentary. Per the workflow
  brief, those break the MDX parser when they contain
  backticks or braces, and the V4 reference cases keep
  comment blocks short and rare. The load-bearing TODO
  language was lifted into the body prose where the section
  itself was a placeholder ("The turn", "What the case is
  really about"); other comment blocks were dropped because
  they were notes from one round to the next, not content.
- The trailing COMPOSER HANDOFF NOTES and COPYWRITER NOTES
  comment block was removed entirely. That's a convention
  the V4 reference cases don't follow, and the handoff
  belongs in this file (per the workflow brief), not at the
  bottom of the rendered MDX.
- The `RoleCard` placeholder content survived but the
  component wrapper did not. The H2 + paragraph + TODO
  framing carries the same information without the V3
  RoleCard chrome.

Open content questions still owed to Whitney (carried forward
from the composer and copywriter):
- Run the case-interviewer agent before the next composer
  round. Without Whitney's voice, the case is a polished
  third-party summary.
- Confirm public naming for SFPL and Vision 2030 (working
  assumption: both safe).
- Confirm 2024 as the adoption year and the engagement window
  (2023–2024 is the working hypothesis).
- Confirm the ambassador model framing as the structural
  spine.
- Resolve the "Co-creation" tag (keep, replace with
  "Participatory Strategy" or "Staff Engagement", or drop)
  before the next composer round so body and tags are aligned.
- Pick the case's lead read (hiring manager, prospective
  client, peer). The MDX names all three and flags the call.
- Specimen: confirm or reject "redwood" against the V3
  specimen-symbolism table.

For the Frontend Dev:
- Component imports verified against site/src/components/:
  StatRow, PullQuote, BotanicalDivider, SpecimenSignoff are
  all present on this branch.
- Frontmatter shape matches the V4 cases shipped at
  src/content/cases/agetech.mdx and ferguson-cx.mdx. If
  src/content/config.ts validates the same set of fields,
  no schema change is needed.
- Specimen image assets do NOT exist on disk
  (/images/specimen-redwood.jpg, /images/signoff-redwood.png).
  The case will render with broken images until the Art
  Director ships the redwood specimen, or until the specimen
  is reassigned and the path updated.
- Hero image: omitted (the V4 reference cases don't use
  hero_image; if the site's case layout expects one, fall
  back to specimen).
==============================================================
