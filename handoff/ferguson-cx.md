# Design-system-applier handoff — ferguson-cx

## Layout archetype
**Hybrid, leaning 6-section.**

Reason: the case is narrative-led (a reframe from a vague brief into two named service breakdowns) but carries enough process density — a seven-phase framework, two prototypes, two branches — that it warrants a ProcessTimeline and a DarkBand for the prototype reveal. The shape lands at five narrative components plus the two botanical exceptions: one structural step heavier than Sample 1, well short of Sample 2.

## Components used (count 5 of 6 cap)
- **StatRow** — under the hero. The 2 / 7 / 2 line (prototypes deployed, phase framework, branches in testing) per the April 26 mockup.
- **ProcessTimeline** — opens the framework section. Lays out the seven phases (Monitor & Frame → Optimize) as the spine the rest of the case hangs from.
- **InsightCallout (label="The reframe")** — carries the load-bearing pivot. Holds the bolded "Waiting wasn't the problem" line and the bulleted Order Not Ready / Associate Not Present definitions.
- **DarkBand (label="The prototypes")** — full-bleed dark section housing the two prototype overviews (Make-It-Happen + KnockKnock) as side-by-side figures. Per the V3 alternation rhythm, this gives the page its one light → dark → light beat.
- **PullQuote** — used twice, both Kevin Sills (Round Rock branch lead). One in the "field staff started defending the work" section, one in "the work outlasted the engagement." Treating it as one component type.

Botanical exceptions (don't count against the cap):
- **BotanicalDivider** — placed once, between the framework setup and the InsightCallout reframe. This is the narrative hinge: pivot from "current state / how we ran the work" to "the insight that reorganized the design problem."
- **SpecimenSignoff** — at the very bottom, protea cropped tight.

## Specimen choice
**protea**

Reason: the V3 specimen-assignment table maps protea to research-heavy work with a tough exterior and complex interior — research that takes time to disclose its real shape. Fits this case: a vague "perception of waiting" brief that took months of upstream work (service blueprint, eight Counter Experience Principles, five Wait Time Scenarios) to crack open into the actual two-breakdown reframe. The Composer flagged cymbidium orchid (insight / synthesis) as the alternate if Whitney reads the case as more reframe-led than research-led.

(If you want a different specimen, change `specimen` and `specimenSignoff` in the MDX frontmatter.)

## Image assets referenced (TODO — Whitney to upload)
- `/images/specimen-protea.jpg` — cover specimen for the case hero (shared botanical asset)
- `/images/signoff-protea.png` — end-of-case ornament (shared botanical asset)
- DarkBand figures are currently rendered as `case-darkband-figure-placeholder` divs (the same scaffolding pattern the existing site cases use). Two image slots need real assets:
  - **Fig. 01 · Make-It-Happen, Round Rock branch** — source candidate from raw material: the Make-It-Happen prototype overview page from `Ferguson Prototypes SD 07292022-1225.pptx.pdf` (the three-component-box layout). Once asset is uploaded to e.g. `/images/cases/ferguson-cx/make-it-happen-overview.jpg`, swap the placeholder div for an `<img>`.
  - **Fig. 02 · KnockKnock, Tamarac branch** — source candidate: the KnockKnock prototype overview page from the same Prototypes deck (the five-component-box layout). Target path: `/images/cases/ferguson-cx/knockknock-overview.jpg`.

## Narrative content that didn't fit V4 vocabulary
- The eight Counter Experience Principles are described in body copy but never shown as an artifact, even though the raw material includes a strong principles SVG/JPEG. The Composer deliberately omitted a third visual block here to stay under the 6-component cap; the principles ride as prose. If Whitney wants them visible, the cleanest swap is to drop the StatRow and put a single principles illustration where the StatRow currently sits — but that costs the 2 / 7 / 2 anchor numbers. Flagging, not changing.
- The Composer's open question about restoring a third PullQuote (Kirsten Caraway from Ferguson CX leadership, or Marc Greeson from Tamarac) is unresolved. The polished draft kept both Sills quotes only, which I preserved. If Whitney wants leadership's voice on the page, the natural slot is right before the closing cross-pollination beat in "The work outlasted the engagement."
- No customer voice on the page. The Critic flagged this as a structural weakness; the polished draft doesn't have customer quotes to drop in. Not something the design layer can fix.

## Open questions for Whitney
- **Clearance.** "Ferguson Enterprises" is named throughout, and the Sills quotes name the branch lead directly. CASE-CONTEXT.md flags both as needing confirmation before publishing. The status is currently set to `published` in frontmatter — flip to `draft` if clearance isn't done.
- **Specimen confirmation.** Protea is the right call if you read the case as research-led. If the reframe is the bigger story, swap to cymbidium orchid (`specimen: '/images/specimen-cymbidium.jpg'` and matching signoff).
- **Design criteria specificity.** The case mentions "five design criteria" for Make-It-Happen and "seven" for KnockKnock without enumerating any. The Critic flagged this; the polished draft chose to let the count do the work. Worth a future revision pass if the next interview round surfaces 2–3 specific criteria to name.
