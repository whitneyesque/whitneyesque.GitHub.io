# Design-system-applier handoff — sfpl

## Layout archetype

**6-section narrative-led** (with one mid-body process strip and one InsightCallout)

Reason: the case is narrative-led — its argument is "design the conditions for a plan to land before drafting the plan." It has one structural artifact (the 5-session arc) but otherwise lives in prose. The 12-section research/process archetype would over-scaffold a case whose strength is its through-line, not its artifact density.

## Components used (count 4 of 6 cap, plus the two botanical exceptions)

- **StatRow** — opening, four headline metrics (32 ambassadors, 5 sessions, 28 branches, unanimous adoption). Converted from polished draft's `StatCard`-children form to V4's `stats` array prop shape.
- **ProcessTimeline** — anchors the "Mechanism" section with the five Ambassador sessions. (V4's deployed component prefixes labels as "Phase 01 / Phase 02..." — see open question below for whether "Phase" reads correctly when the case calls them "Sessions" / "Workshops".)
- **PullQuote** ×3 — two ambassador feedback quotes (already public in Harmonic's published case study) plus the City Librarian quote at the outcome.
- **InsightCallout** — wraps the single sentence "Feedback wasn't collected; it was visibly metabolized" as the design principle for the trust section. Lifted from its original paragraph location (last sentence of the opening paragraph in that section) and elevated to a callout immediately after the paragraph. No prose was rewritten; one sentence was lifted.
- **BotanicalDivider** (exception) — placed at the narrative hinge between "Mechanism" (what we ran) and "Designing for trust" (the design philosophy behind it). One per case, per the V3 rule.
- **SpecimenSignoff** (exception) — final element of the case.

Components considered and rejected:
- **DarkBand** — the artifacts section is a candidate but the composer/critic flagged it as the most exposed (list-without-evidence, authorship not yet asserted). Putting a DarkBand spotlight on a structurally weak section would amplify the problem rather than solve it. Left in plain prose.
- **`RoleCard`** (used in the polished draft) — does not exist in the deployed `whitneyesque.github.io/src/components/`. Promoted the RoleCard's heading line to a short H2 ("Service designer on the engagement, co-owner of the Ambassador Program.") and kept the body paragraph beneath it. Both pieces are exact-quoted from the polished draft. This is the cleanest available conversion since the V4 vocabulary doesn't include a role-context card.
- **`ProcessStrip`** (used in the polished draft) — does not exist in deployed components. Replaced with `ProcessTimeline`, which is the analogous V4 component that ferguson-cx.mdx ships with.
- **`StatCard`** (used in the polished draft) — does not exist as a standalone deployed component. The deployed `StatRow` takes a `stats` array prop, not children; converted accordingly.
- **InsightCallout for the artifacts insight** — considered, rejected. Pulling "That traceability is the design problem inside this kind of engagement" into a callout would either reorder the paragraph or duplicate text. Left as-is.

## Specimen choice

**Wisteria** — proposed.

Reason: SFPL's case shape is "many strands held together as one" (32 ambassadors across 28 branches, two parallel tracks, five sessions, woven into a single strategic plan). Wisteria's cascading interlinked clusters — many small flowers held in a single vine — visually maps to that "many-into-one" theme. The agetech amaranthus and ferguson protea are both already-used; wisteria is the closest available match for the alignment/weaving narrative the composer flagged.

**This is a proposal, not a confirmed assignment.** I do not have direct access to the V3 design system specimen-assignment table (the PDF is in `agent-land/reference/portfoliodesignsystem_04_21_2026v3.pdf` but I'm unable to render it in this environment). If the table assigns a different specimen to public-sector / organizational-change work, please change `specimen` and `specimenSignoff` in the MDX frontmatter.

Other specimens worth considering if wisteria doesn't fit:
- **Yarrow** — historically the "thousand-leaved" plant used for divination and gathering; could fit the "many voices into one decision" theme.
- **Olive branch** — civic / public-sector resonance.
- **Magnolia** — civic ceremony, public grace.

## Image assets referenced (TODO — Whitney to upload)

Required for the specimen choice currently in the MDX:
- `/images/specimen-wisteria.jpg` — cover specimen, used at the top of the case page (V4 hero treatment).
- `/images/signoff-wisteria.png` — small cropped detail for the end-of-case `<SpecimenSignoff />`.

If you change the specimen, both paths need to update in frontmatter (`specimen`, `specimenSignoff`) and in the `<SpecimenSignoff specimen="..." />` call at the bottom of the body.

No in-body images are referenced. The case is intentionally prose-led, matching the V4 reference cases (agetech, ferguson-cx). If we add workshop photography later (`All Staff.jpg`, `SFPL presenting.JPG`, `mteam-ambs.jpg`, the values-mapping posters), the cleanest insertion would be a `<DarkBand>` block in the Mechanism or Artifacts sections — but that's a future round, not this one.

## Narrative content that didn't fit V4 vocabulary

- **The "What I'm still thinking about" closing reflection section** in the polished draft has an empty body (the composer flagged three possible spines but left the body to Whitney's interview voice). I dropped the section entirely from the V4 MDX. The agent rule "do not invent content" applies; the section can be added back in a future round once Whitney records a closing reflection.
- **The `RoleCard` block** had no V4 equivalent. The role context (Whitney's position in the consortium, the constant-presence-translator framing) survived as a short H2 + one body paragraph rather than a card. The exact wording of both pieces is preserved.
- **Inline `{/* TODO ... */}` JSX comments** from the polished draft were stripped from the body. They're documented below for tracking; none of them affect rendering.

## TODOs from the polished draft (for tracking — handed off, not invented)

The polished draft carried these inline TODOs. None require action from this round; they are flagged here so Whitney can decide what to address in the next composer pass.

1. **Session names** — the five Ambassador session names in `ProcessTimeline` are inferred from artifact filenames in `raw-case-material/sfpl/`. They should be confirmed against `Ambassador Series Detailed Agenda.2020518.xlsx`.
2. **A specific scene from inside a session** — the case currently lacks a moment of recognition, tension, or pushback that would earn the "trust as a deliverable" framing. The composer recommended running the case-interviewer agent before the next composer round.
3. **Authorship of artifacts** — the artifacts paragraph names categories (values profiles, moment cards, opportunity cards, the SFPL Collaboration Board) without claiming Whitney's authorship. Confirm which are hers and the section can be made more specific.
4. **Midyear progress report evidence** — `ITEM-3.1-Vision-2030-Midyear-Progress-Report-LC.pdf` is in the raw materials. If it mentions ambassador-driven or staff-driven implementation moves, that's the strongest possible closer for this case.
5. **Whitney's closing reflection** — three possible spines drafted in the polished draft; needs interview voice, not invention.
6. **Hero image candidate** — the polished draft's frontmatter had `hero_image: "/images/cases/sfpl/hero.jpg"` (candidates: `All Staff.jpg`, `SFPL presenting.JPG`). I removed `hero_image` from the V4 frontmatter because the V4 reference cases (agetech, ferguson-cx, carmax) don't use it — the cover treatment comes from `specimen`. If the V4 layout supports a separate hero, this can be added back.

## Open questions for Whitney

1. **Specimen.** Is wisteria right? See the specimen-choice section above for alternatives. If the V3 specimen-assignment table prescribes a specific botanical for civic / public-sector / organizational-change cases, that takes priority.
2. **ProcessTimeline label prefix.** The deployed `ProcessTimeline` component prefixes each step with the word "Phase" (so it'll render as "Phase 01 — Orient & Surface", etc.). The Ambassador series called these Sessions or Workshops, not Phases. If "Phase 01" reads wrong, the options are: (a) accept it as a stylistic choice, (b) rename the component's label internally, or (c) remove `ProcessTimeline` and use plain prose for the five-session list. I went with (a) for this draft.
3. **"Designing for trust" InsightCallout.** I lifted "Feedback wasn't collected; it was visibly metabolized" out of the paragraph it closed and elevated it to its own callout. The original paragraph reads cleanly without that sentence; the callout reads cleanly with it. If you'd rather I keep the sentence in-paragraph and skip the callout, the case still has 3 components plus the two botanical exceptions and stays well within the cap.
4. **Title em-accent placement.** I split the title at the natural beat: `Turning 32 staff into catalysts <em>for a five-year strategic plan.</em>` Other reasonable splits would be `<em>Turning 32 staff into catalysts</em> for a five-year strategic plan.` or a different formulation entirely (the polished draft's composer note left this open).
5. **Title repetition with summary.** Both the title and the summary use "catalysts." The copywriter noted this was intentional but flagged it for your call. If you want them varied, the summary line can be edited without affecting the V4 structure.
