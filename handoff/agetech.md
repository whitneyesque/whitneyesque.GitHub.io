# Design-system-applier handoff — agetech

## Layout archetype
Hybrid, leaning 6-section.

Reason: Narrative-led case (concept → reframe → testing → pivot → outcome), but with two distinct testing arcs (cohort 1 / cohort 2) and a mid-study redesign that earns its own H2. Eight H2 sections in total — heavier than the pure 6-section archetype but lighter than the 12-section research-heavy archetype.

## Components used (count 5 of 6 cap)
- **StatRow** — top of body, three outcome stats (12 caregivers / 8 modes / 2-month beta) drawn from the polished draft's StatRow at the bottom of "The decision." Moved to the top to match V4 convention. Stat content is unchanged.
- **InsightCallout (×2)** — both as written in the polished draft. "Design principle" follows the compassionate language paragraph. "Strategic reframe" anchors the pivot section.
- **PullQuote (×2)** — both as written in the polished draft. "I just gave you all that information…" anchors the cohort 1 backwards-flow finding. "We can't get him to stop." anchors the cohort 2 executive-sponsor moment.
- **BotanicalDivider** — placed between the build section ("Two intertwined problems") and the testing section ("The first cohort showed us…"). This is the case's narrative hinge: the move from "what we built" to "what we learned when real caregivers used it."
- **SpecimenSignoff** — at the very bottom, pomegranate-split, matching frontmatter `specimenSignoff`.

Components considered and skipped:
- **ProcessTimeline** — would need invented phase labels (the polished draft doesn't enumerate a project phase taxonomy the way Ferguson-CX does). Skipped to avoid inventing content.
- **DarkBand** — would need an invented intro paragraph and section header to house the wireframe / GPT-conversation artifacts. Skipped to avoid inventing content. If Whitney wants the prototype artifacts surfaced visually, this is the most natural place to add a 6th component in a future round.

## Specimen choice
**pomegranate-split**

Reason: Inherited from the polished draft frontmatter (`specimen: "pomegranate-split"`) and confirmed by `raw-case-material/agetech/CASE-CONTEXT.md`, which assigns "pomegranate, split" to this case based on the V3 design system symbolism: "Hard truths, things split open, memento mori." The end-stage-dementia participant moment, the forecast-as-verdict moment, and the broader theme of caregivers carrying decisions about their parents' decline all earn that symbolism.

Note: the previous shipped V4 file at `src/content/cases/agetech.mdx` used `amaranthus`. This handoff overwrites it with pomegranate-split per the polished draft + case-context. If Whitney intentionally chose amaranthus for the live site and wants to keep it, change `specimen` and `specimenSignoff` in the MDX frontmatter back to amaranthus.

(If you want a different specimen, change `specimen` and `specimenSignoff` in the MDX frontmatter.)

## Image assets referenced (TODO — Whitney to upload)
- `/images/specimen-pomegranate-split.jpg` — cover specimen, referenced in frontmatter `specimen` field
- `/images/signoff-pomegranate-split.png` — end-of-case ornament, referenced in frontmatter `specimenSignoff` and as the prop on `<SpecimenSignoff />`

No in-body image assets are referenced because no DarkBand or inline figure was used. If you want to surface the prototype artifacts inside the case, candidate paths/source files (use the blurred/redacted versions per `CASE-CONTEXT.md`):
- `/images/agetech/blueprint-blurred.png` (source: `raw-case-material/agetech/blueprint-blurred.png`) — service blueprint
- `/images/agetech/chatgotlofi.svg` (source: `raw-case-material/agetech/chatgotlofi.svg`) — chat lo-fi
- `/images/agetech/forecastlofi.svg` (source: `raw-case-material/agetech/forecastlofi.svg`) — forecast lo-fi
- `/images/agetech/dashboardlofi.svg` (source: `raw-case-material/agetech/dashboardlofi.svg`) — dashboard lo-fi
- `/images/agetech/gpt-conversation-redacted.png` and `/images/agetech/gpt-conversation-2-redacted.png` — GPT conversation screenshots
- `/images/agetech/interviewboard-blurred.png` — research synthesis board

These are NOT referenced in the MDX as written. They are listed here so the assets can be staged before deciding whether to add a DarkBand in a follow-up round.

## Narrative content that didn't fit V4 vocabulary
- **Insertion 5 — "What to watch for in yourself."** The polished draft preserves this as a long JSX comment placeholder; I trimmed and copied that placeholder into the new file at the same structural location (between cohort 2 and "The decision"). The prose for the section does not yet exist — Whitney needs a participant transcript moment that reacts to the caregiver self-care content, or a decision to drop the section entirely. The placeholder won't render; it just keeps the structure visible in source.
- **Composer/Critic/Copywriter handoff notes.** The polished draft has a long trailing JSX comment block with notes for downstream editors (composer/critic/copywriter/art director). I dropped that block from the published MDX — it's process scaffolding that doesn't belong in the shipped file. If Whitney wants those notes preserved in the repo, they live in `agent-land/drafts/agetech.mdx` on the composer branch.
- **The four-persona AI-collaborator workflow.** The composer/critic flagged this as compressed (a single paragraph). I preserved the paragraph as written in the polished draft. If a future round expands it, the natural V4 home would be a new H3 ("Routing the build through expert personas") inside the "Two intertwined problems" section, matching the previously shipped V4 file's structure — but that requires new prose, not visual scaffolding.

## Open questions for Whitney

- **Specimen swap.** The previously shipped `agetech.mdx` used amaranthus; this version uses pomegranate-split per the polished draft + case context. If amaranthus was a deliberate live-site choice, revert the two frontmatter fields and the `<SpecimenSignoff />` prop.
- **StatRow placement.** I moved the StatRow to the top of the body (V4 convention, matching `ferguson-cx.mdx` and the previously shipped `agetech.mdx`). The polished draft had it embedded near the end of "The decision." If you'd rather keep stats near the outcome paragraph instead of as a hero stat-row, move the `<StatRow … />` block to just before the "Four things" H2.
- **Title casing.** I converted `"How Do You Prototype an AI Service?"` (polished draft, title case) to `'How do you prototype <em>an AI service?</em>'` (V4 convention: lowercase with em accent). If you want the title-cased version preserved, restore from the draft.
- **Client-line phrasing.** Polished draft has `"Agetech initiative inside a Fortune 500 insurer"`. Previously shipped V4 used the tighter `"Fortune 500 insurer (innovation team)"`. Both are within redaction rules. I kept the polished draft's longer phrasing; swap if you prefer the short form.
- **`role` and `team` lines.** The polished draft's `role` and `team` strings are longer than the previously shipped V4 file's (which used `"UX & service design lead"` and `"Innovation team, internal CX, data science"`). I preserved the polished draft's text. If those fields render with a max width on the case page and the longer strings wrap awkwardly, swap to the shorter previously shipped versions.
- **`tone` prop on InsightCallout.** The polished draft's `<InsightCallout>` calls had `tone="cerulean"` and `tone="violet"` props. The actual `InsightCallout.astro` component does not accept a `tone` prop, so I dropped both. If a tone variant is wanted, the component would need to be extended first.
- **Insertion 5 — keep placeholder or remove?** The placeholder won't render but it does add ~30 lines to the source. If the section is unlikely to be filled in this round, removing the comment block is fine; the surrounding prose stands without it.
