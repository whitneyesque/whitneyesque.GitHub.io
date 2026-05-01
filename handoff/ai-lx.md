# Design-system-applier handoff — ai-lx

## Layout archetype
6-section / narrative-led (with a lightly expanded body for the four named frameworks)

Reason: This case has no shipped product, no UI artifacts, no linear methodology to march through, and no quantitative customer outcome. Its load-bearing content is intellectual — a thesis (AI is a material), a set of frameworks (six principles, four dimensions, canvas, blueprint), and a reflection. That sits closer to the narrative-led 6-section archetype than the artifact-heavy 12-section one. The body runs longer than the strict 6-section sample because the four-dimensions section earns its H3 sub-structure, but the visual scaffolding stays sparse.

## Components used (count 5 of 6 cap)
- **StatRow** — opening bar (50 / 2 days / 4 / 6). Translated from the draft's `<StatRow><StatCard /></StatRow>` children syntax to the V4 `stats={[...]}` array syntax that the actual `StatRow.astro` component expects. Stat labels lightly normalised to V4 sentence case (e.g. "2 Day Workshop" → "2 days / Workshop, full team") to match agetech / ferguson-cx tone.
- **InsightCallout** (×2) — once for the "My role" attribution paragraph (replacing the draft's non-existent `<RoleCard>`), once for "The thesis" (the *AI in service of value* statement). The draft's `variant="violet"` prop was dropped — the live `InsightCallout` component does not accept a variant prop in V4.
- **BotanicalDivider** — placed at the narrative hinge between the reframe (AI is a material) and the first framework (Six AI design principles). One use, per V3/V4 rule.
- **PullQuote** (×3) — kept all three Whitney quotes the copywriter pulled: the John Henry/control quote after the Control model dimension, the "vibe coding / go back to sketching" quote in the pedagogy section, and the closing "what is the problem we're trying to fix" quote at the very end. The copywriter's additional pull-quote candidates ("Failure is a designed state," "Control is a knob, not a setting," "AI is on the canvas because it has to be, but it's not the center") were left as inline body text rather than promoted, per the hard rule against inventing/promoting content.
- **SpecimenSignoff** — closing ornament with `specimen="/images/signoff-pomegranate-split.png"`.

Components considered and skipped:
- **DarkBand** — could have housed a "frameworks gallery" treatment (six principles + four dimensions + canvas + blueprint as figure cards), but the case has no clean screenshot/diagram artifacts to put in those figures yet. Forcing DarkBand without real figures produces a dark band of placeholder text. Skipped; flagged below as a future treatment if Whitney commissions a four-dimensions diagram and a canvas redraw.
- **ProcessTimeline** — no linear seven-phase methodology in this case. Not applicable.

## Specimen choice
**pomegranate-split**

Reason: Carried over from the polished draft's frontmatter (`specimen: "pomegranate-split"`), per the agent rule: *if the polished draft already has a specimen, keep it.* The composer's rationale was that the case has a clean split structure throughout (principles vs. dimensions; explicit / ambient / mix; manual through autonomous; human actors vs. AI actors in the adapted blueprint), which fits a split-fruit motif.

Note: The previously-attempted version of this case at `site/src/content/cases/carmax.mdx` used `fig` as the specimen. If Whitney prefers fig (carry-over from a different earlier symbolism call) or wants a different botanical entirely, change `specimen` and `specimenSignoff` in the MDX frontmatter and rename the asset files accordingly.

(If you want a different specimen, change `specimen` and `specimenSignoff` in the MDX frontmatter.)

## Image assets referenced (TODO — Whitney to upload)
- `/images/specimen-pomegranate-split.jpg` — cover specimen image. Used by the case template's hero treatment.
- `/images/signoff-pomegranate-split.png` — closing ornament, rendered by `<SpecimenSignoff />` at the bottom of the case.

No in-body images are referenced in the MDX. The Art Director's image plan (in the composer's handoff at the bottom of the polished draft) recommends:
- Hero: `experience-canvas.jpg` (the new canvas; brand / moments / value / AI in the corner). Available in `raw-case-material/ai-lx/`.
- Reframe section: `individual-activity.jpg` or `ideation.jpg` (paper-not-laptops pedagogy). Available.
- Four Dimensions section: a clean diagram of the four dimensions framework — does not yet exist; Whitney would need to commission or draw.
- Canvas section: `experience-canvas.jpg` again, paired with a cleaned redraw (also does not exist).
- Blueprint section: `service-blueprint.jpg`. Available.
- Pedagogy section: `agenda-timing.jpg` or any of the IMG_5xxx workshop photos. Available, pending face/signage anonymisation.

None of these are wired into the MDX. They can be added later either as plain `<img>` tags inline or by introducing a DarkBand figure gallery once the diagrams exist.

## Narrative content that didn't fit V4 vocabulary
- **The `<RoleCard>` in the draft.** The site does not have a RoleCard component. The role attribution paragraph (Co-facilitator, lead researcher, framework author + the prose paragraph about what Whitney specifically led vs. what Patrick led) was moved into an `<InsightCallout label="My role">`. The H3 inside it was kept verbatim from the draft. This is the closest available primitive to what RoleCard was doing visually. If a real RoleCard component lands later, swap it back in directly.
- **The inline composer TODO comment** in the draft's Outcome section (`{/* TODO: confirm with Whitney whether any internal usage has surfaced two months out... */}`) was removed from the published MDX. The corresponding question is preserved in "Open questions for Whitney" below. Removing the comment from the body avoids any chance of the MDX parser tripping on a top-level comment containing braces or backticks.
- **The composer / critic / copywriter handoff comment block** at the bottom of the draft (lines 142–250) was not carried over. Per the agent definition: that conversation is internal to the Agent-Land repo; the published case ends cleanly with `<SpecimenSignoff />`.
- **The copywriter's banned-phrase rename of "Seamless handoffs" → "Continuous handoffs."** Kept as the copywriter wrote it. Whitney was flagged for a final word call on this principle name in the copywriter's notes; that decision belongs to her, not to me.

## Open questions for Whitney
1. **Specimen confirmation.** `pomegranate-split` was the composer's pick, with the note that it was carried in by analogy with agetech and ferguson-cx and the specific symbolic claim that the case has a clean split structure throughout. The earlier `carmax.mdx` attempt used `fig`. Confirm `pomegranate-split` or pick from your symbolism table; the asset files would need to be renamed to match.
2. **Title.** Carried the composer's "From X to Y" formulation in V4 form: `'From "we should do AI" <em>to a working vocabulary for AI in services.</em>'`. The composer flagged two alternates worth considering: *"AI Is a Material: A Two-Day Workshop That Gave 50 Designers a Practice, Not a Hammer"* or *"Putting AI in the Corner: Building a Practice for an Automotive Retailer's Design Team."* If you'd rather use one of those, change the `title` line in the frontmatter.
3. **Adoption follow-up.** The composer's handoff carried Whitney's open question about Patrick's planned two-month follow-up with the VP of design. The MDX no longer contains the inline TODO. If anything has surfaced about internal usage of the canvas, dimensions, or adapted blueprint, the Outcome section is the place to add a sentence — the case currently treats client re-engagement as the load-bearing outcome signal, and adoption evidence (if any) would meaningfully strengthen the close.
4. **"Continuous handoffs" rename.** Copywriter's substitute for the previously-banned "Seamless handoffs." Listed alternates: *Carried-over handoffs*, *Context-preserving handoffs*, *Handoffs that hold context*. Pick what sounds most like you, or leave as is.
5. **Coexistence with `cases/carmax.mdx`.** The site already contains a previous V4 attempt at this case at `src/content/cases/carmax.mdx` (uses the client name, fig specimen, different title, leaner body). The new file at `src/content/cases/ai-lx.mdx` is the canonical anonymised version per the polished draft. Decide whether to delete `carmax.mdx`, redirect from `/cases/carmax` to `/cases/ai-lx`, or keep both. I did not modify `carmax.mdx`.
6. **Replacing "complete" in the brief paragraph.** Copywriter swapped "holistic" → "complete" with a flag that the word is functional but not memorable. If a sharper word comes to you ("end-to-end," "whole-service," or just dropping the modifier), the line is yours to take. Currently reads: *Help them build complete solutions that aren't AI-for-AI's-sake.*
