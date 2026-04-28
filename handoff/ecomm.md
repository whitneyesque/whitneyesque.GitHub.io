# Design-system-applier handoff — ecomm

## Status flag (read this first)

This case is **not ready to ship.** The polished draft at `agent-land/drafts/ecomm.mdx` is a structural placeholder, not a draft. Every section body is a TODO instruction written to the next composer round, not prose meant for a reader. The composer, critic, and copywriter all explicitly declined to fill it in:

- **Composer (round 1):** Could not draft; flagged that `raw-case-material/ecomm/` has only `Ecommerce - Case Study.pdf` and no `CASE-CONTEXT.md`, `whitney-notes.md`, `interview-transcript.md`, or artifacts.
- **Critic:** Caught the composer's factual error about the folder being empty (the PDF exists), AND raised an upstream gating question — whether this case belongs in the portfolio at all, given the work as currently described reads as junior IXD support rather than service design.
- **Copywriter (round 1):** Declined to polish anything because there is no prose to polish. Polishing TODO instructions would be theatre.

The MDX I produced applies V4 structure to the placeholder so the file lints, schema-validates, and renders as a draft. It does **not** make the case ready to ship.

`status: 'draft'` is set deliberately. Per `src/content/config.ts`, draft cases are built but not linked from the work page. **Do not flip to `'published'` until the gating decision is made and an interview-driven composer round produces real prose.**

## Layout archetype

**6-section.**

Reason: the polished placeholder uses agetech's 6-section scaffold (Question → Situation → What we did → Evidence → Decision/outcome → Carrying forward). I preserved that shape verbatim because (a) the prose is locked by the upstream pipeline, and (b) the case has no spine yet — committing to the 12-section archetype would be inventing structure the case hasn't earned. When real material lands the next composer round can either keep this shape or reshape into the 12-section archetype if research/process density justifies it.

## Components used (count 4 of 6 cap)

- **StatRow** — bottom of "The decision / outcome" section. Three TODO metric slots, structurally identical to the polished draft. **API converted from V3 children syntax (`<StatRow><Stat value=... label=... /></StatRow>`) to V4 props syntax (`stats={[{value, label}, ...]}`).** This was a structural compatibility fix; the underlying `StatRow.astro` component on this branch only accepts the props form. Without this fix the file would not have rendered.
- **PullQuote** — "Evidence" section. Single TODO quote with a TODO attribution. Mirrors the agetech and ferguson-cx pattern of one decisive pullquote per case.
- **InsightCallout** — middle of "What we did" section. TODO-labelled callout for the case's central design principle once it surfaces. **Removed the `tone="cerulean"` prop the polished draft passed** — the V4 `InsightCallout.astro` component on this branch does not accept a tone prop, and the two reference V4 cases (agetech, ferguson-cx) do not use one. Astro silently ignores unknown props, but cleaner to drop.
- **SpecimenSignoff** — at the very end of the file, before EOF. Required V4 closer per the agent definition's hard rule. Passes `specimen="/images/signoff-camellia.png"` (see Specimen choice below).

Components considered and **not** added:
- **BotanicalDivider** — the V3/V4 hinge ornament. Used at the narrative pivot from "current state / research" to "intervention." There is no narrative yet, therefore no hinge to mark. Add when real prose lands.
- **ProcessTimeline** — used for explicit phased frameworks (ferguson-cx). The placeholder doesn't describe a phase model. Add only if the composer round names one.
- **DarkBand** — used when the case has named, photographable artifacts to feature (ferguson-cx prototypes). The case has no artifacts on disk. Skip until at least one artifact exists.

## Specimen choice

**Camellia** (proposed; please confirm or override).

Reason: the V3 design system specimen-symbolism table (`reference/portfoliodesignsystem_04_21_2026v3.pdf`, section 04) wasn't readable from this environment, so I'm reasoning from precedent rather than the canonical table:

- **amaranthus** is taken (agetech / caregiving — duration, weight)
- **protea** is taken (ferguson-cx / Ferguson — architectural, industrial, B2B distribution)
- **fig** is taken (carmax / fifty-person design team — interior structure made visible)

For an e-commerce case I proposed camellia because it's a winter cultivar with strong commercial provenance (the tea industry, the Southern US ornamental trade), and its disciplined geometric petal whorl reads as "transactional clarity" without being on-the-nose about retail. It's also visually distinct from the three already-assigned specimens in the live site.

**This is a propose-and-flag, not a confident assignment.** If Whitney has a different specimen in mind, change `specimen` and `specimenSignoff` in the MDX frontmatter and the inline `specimen=` prop on `<SpecimenSignoff />`.

## Image assets referenced (TODO — Whitney to upload)

- `/images/specimen-camellia.jpg` — cover specimen, referenced from frontmatter `specimen` field. **Does not exist on disk.**
- `/images/signoff-camellia.png` — end-of-case ornament, referenced from frontmatter `specimenSignoff` and the `<SpecimenSignoff specimen=...>` prop. **Does not exist on disk.**

No in-body figures, hero image, screenshots, blueprints, or workshop photography are referenced. The polished draft's `hero_image: "/images/cases/ecomm/hero.jpg"` was dropped from frontmatter because (a) the schema makes hero_image optional, (b) the asset doesn't exist, and (c) the V4 reference cases (agetech, ferguson-cx) on this branch don't set it. If Whitney wants a hero, add the field back when an asset exists.

## Narrative content that didn't fit V4 vocabulary

None. There is no narrative content. Every section is a TODO instruction, and TODO instructions don't need a V4 component — they need an interview and a composer round.

What I removed (not narrative, but worth flagging):
- The top `{/* PLACEHOLDER DRAFT — ecomm ... */}` MDX comment from the polished draft.
- The bottom `{/* COMPOSER HANDOFF NOTES ... COPYWRITER NOTES ... */}` MDX comment block from the polished draft.

Both were removed per the agent definition's hard rule: "The MDX file should end cleanly with `<SpecimenSignoff />` ... no trailing comment block." The substance of those upstream notes is preserved in `agent-land/drafts/ecomm.mdx` for the next composer round.

## Open questions for Whitney

1. **Gating:** is this case in or out of the portfolio? The Critic raised a real strategic question about whether the underlying work (per the PDF) is service design or junior IXD support. Until that is resolved, no amount of design-system or copy work will produce a case that argues for itself. If it's out, delete the file. If it's in, run the case-interviewer agent against the PDF before the next composer round.
2. **Specimen:** confirm or override camellia. See Specimen choice above. The V3 PDF has the canonical assignment table; I couldn't read it from this environment.
3. **Anonymization:** the title currently reads `TODO: ecomm case title` and the client field reads `TODO: client or industry descriptor`. The PDF in raw material is named `Ecommerce - Case Study.pdf` — does it identify the client by name, and if so, can the client be named publicly? This decision shapes the title formula, the client field, and any verbatim quotes.
4. **Tags:** the polished draft frontmatter sets `['Service Design', 'E-commerce']`. The Critic flagged these as potentially over-claiming relative to the source material. I preserved them verbatim per the "do not modify the prose" rule, but they may need to change once the case's actual scope is settled.
5. **Title formula:** V4 titles use the two-clause `<em>`-italicized form ("How do you prototype <em>an AI service?</em>"). The placeholder title is a literal `TODO` string, which is structurally valid for a draft but not V4-shaped. The next composer round should produce a real two-clause title.

## For the next composer round

The most useful single action before another composer pass is to run the case-interviewer agent against the PDF that does exist (`raw-case-material/ecomm/Ecommerce - Case Study.pdf`) to extract: project facts, Whitney's role, anonymization constraints, candidate spine, candidate quotes, candidate metrics. With that interview transcript and a `CASE-CONTEXT.md` in the case folder, the composer has something to draft from. Without it, the next round produces another scaffold.
