# Design-system-applier handoff — quick-serve

## Layout archetype
6-section / narrative-led

Reason: Quick-serve is a narrative-led case where the spine is a single conceptual reframe (loyalty → defection). It does not have multiple prototypes, formal phased process, or research-artifact density. The 6-section archetype lets the prose do the work without padding it with components that have no source material to fill them. The case ends up at 9 H2 sections with 4 distinct component types — closer in shape to agetech.mdx than to ferguson-cx.mdx.

## Components used (count 4 of 6 cap)
- **StatRow** — top of body, mirrors agetech and ferguson-cx placement. Three real numbers from the source (100+ ideas, ~40 concepts, 3 mo).
- **InsightCallout** — wraps "The reframe" body, the case's load-bearing conceptual move. Already present in the polished draft; kept as-is. Dropped the `tone="cerulean"` prop because the live `InsightCallout.astro` only accepts `label`.
- **BotanicalDivider** — placed once, after the InsightCallout and before "The combined journey." Marks the V3 Exception 2 hinge between the diagnostic phase (research → reframe) and the design response (journey → workshop → recap → distillation).
- **SpecimenSignoff** — V3 Exception 3, end of case.

Components considered but not used:
- **PullQuote** — composer/copywriter both noted the case has zero source quotes. The copywriter flagged Whitney's own lines ("Loyalty programs are a downstream lever," "That reframe is the case") as candidates, but those are already in the body and elevating them would either duplicate the prose or modify it. The two strong participant quotes the copywriter identified ("Bad bread makes a bad sandwich," "Nothing impressive or special about [X] locations") are on page 5 of the source PDF and are NOT in the polished draft, so adding them would be inventing content. Held for the next composer round.
- **DarkBand** — would naturally house the combined-journey artifact and workshop stills, but no figure assets exist for this case. Adding placeholder DarkBand frames with "asset TBD" captions would carry visual weight that the underlying content can't yet support. Skipped pending real artifacts (see asset list below).
- **ProcessTimeline** — no formal phased process is documented in the source. The case is research-then-workshop-then-distillation, narrated, not a named methodology like ferguson-cx's seven-phase framework.

## Specimen choice
**Cymbidium orchid**

Reason: V3 specimen-symbolism table assigns Cymbidium orchid to "Insight / synthesis projects" with the phrase "The unexpected cool-green thing you didn't know was there." That maps directly onto the case's spine: the reframe is the unexpected thing the client didn't know was there, and the trust-gap and language-barrier findings are both insights surfaced from synthesis. The other specimens were either taken (Pomegranate-split = caregiving / Erie CareStar; Amaranthus = agetech; Protea = ferguson-cx; Fig-split = carmax per its handoff) or didn't fit (Dried pods is for legacy / end-of-life systems).

(If you want a different specimen, change `specimen` and `specimenSignoff` in the MDX frontmatter and update the asset paths to match.)

## Image assets referenced (TODO — Whitney to upload)
- `/images/specimen-cymbidium.jpg` — cover specimen watermark, V3 Exception 1. Does not yet exist; needs source/commission.
- `/images/signoff-cymbidium.png` — end-of-case signoff ornament, V3 Exception 3. Does not yet exist; needs source/commission. Same specimen as cover, cropped tighter.

No in-body image assets are referenced. The case ships text-only inside the body. If/when the journey map, workshop stills, or distillation matrix become available (see "Open questions" below), the natural insert points are flagged in the handoff section below.

## Narrative content that didn't fit V4 vocabulary
- **The "Outcomes" section was removed.** The polished draft carried a meta-acknowledgement section that read "This section is intentionally blank pending Whitney's input. The composer will not invent business outcomes." That sentence works inside the draft pipeline but reads as a placeholder if shipped to a published case page. Precedent from carmax (handoff: "Two TODO-only bottom sections...were removed") supports omitting empty-by-design sections at the design-system pass. The gap remains real and is the single most damaging thing about the case for senior portfolio readers — flagged in "Open questions" below.
- **Inline `{/* TODO */}` MDX comments removed.** The polished draft had four (combined-journey artifact request, StatRow API guess, distillation specifics, outcomes prompt). All consolidated into this handoff so the MDX renders clean.
- **Pull-quote slot left empty.** As noted under "Components considered but not used," elevating any of the copywriter-flagged candidates would either duplicate body prose or invent participant content. The case would be measurably stronger with a participant quote in the trust-gap paragraph; that's a content task, not a design-system task.
- **Combined-journey artifact slot left empty.** Composer flagged this as the strongest single-artifact opportunity in the case. Without an asset, no DarkBand was added. When Whitney has a sanitized or stylized journey image, the natural insert point is between "The combined journey" and "The co-design workshop" sections, in a DarkBand wrapper.

## Open questions for Whitney

1. **Confirm the year (2018).** Composer flagged this as a placeholder — the source PDF doesn't state the year. If 2018 is wrong, change `year:` in frontmatter.
2. **Confirm the client anonymization.** The body uses "a global quick-service restaurant chain" throughout. If the client has since become public-knowledge or the NDA has lapsed, swap it in (title, client field, and body references).
3. **Confirm specimen choice (Cymbidium orchid).** Reasoning above. Alternative would be the runner-up, but every other specimen on the table is taken or wrong-domain.
4. **The Outcomes gap.** The case currently ends on "Distillation: from 100 to 40" and jumps straight to "Four things I'm carrying forward." Senior portfolio readers will notice the missing outcomes beat. Even one paragraph from you on what the client did with the 40 concepts (pilot? rollout? reverted to the original loyalty brief?) would close the largest hole in the case. Until then the case ships missing what agetech and ferguson-cx both have.
5. **Hero quote / pullquote.** The case has zero PullQuote components. If you can recall a participant quote from the field research (the trust-gap section is the natural anchor), or if you'd want to elevate one of your own lines to a featured quote, that would give the body a visual rhythm beat it's currently lacking.
6. **Combined-journey artifact.** A redacted or stylized version of the customer/employee journey is the strongest single artifact this case could carry. If pages 5–6 of the source PDF contain reproducible visuals, or if a sanitized recreation is feasible, that's the highest-impact asset to source.
7. **Distillation specifics.** The polished draft names the 100→40 counts but not the concepts themselves. A representative concept (or three) and the criteria the team used to evaluate them would make the distillation section concrete instead of abstract. Holding for the next composer round.
8. **Recap video access.** The recap-video section describes the artifact but the artifact itself isn't referenced. If the video is recoverable (or even a still frame from it), it would land naturally in that section.

## Component / build dependencies for Frontend Dev
- All four components used (StatRow, InsightCallout, BotanicalDivider, SpecimenSignoff) exist on the current site branch under `src/components/`. No component scaffolding required.
- Frontmatter validates against `src/content/config.ts` — all fields are present-or-optional. `slug` is in the file (matching agetech and ferguson-cx precedent) but is silently stripped by Zod's default behavior since it's not in the schema; harmless.
- `hero_image` was in the polished draft frontmatter pointing at `/images/cases/quick-serve/hero.jpg`; omitted here because no asset exists and the field is schema-optional. carmax precedent.
- The two specimen image paths are referenced but the assets don't exist yet — the case will render with broken image fallbacks until those land.
