# Design-system handoff — `ferguson-data`

## Summary
Dressed the polished `ferguson-data.mdx` draft in the V4 design system. Kept the composer/copywriter substance intact; restructured frontmatter, swapped in V4 component vocabulary and prop syntax, applied the editorial title/heading pattern (`<em>` on the punchier clause), promoted the two copywriter-flagged pull quotes into actual `PullQuote` slots, condensed the violet "reframe" callout into a single V4-shaped `InsightCallout`, removed the empty Y-sentence section, and placed a `BotanicalDivider` at the narrative hinge between research and intervention.

## V4 patterns applied
- **Frontmatter shape** matches `agetech.mdx` / `ferguson-cx.mdx` / `carmax.mdx`: single quotes, kebab tag list, schema-valid `year` (number), `specimen` + `specimenSignoff` paths, `status: draft` (per draft).
- **Imports** trimmed to components that actually exist: `StatRow`, `PullQuote`, `InsightCallout`, `BotanicalDivider`, `SpecimenSignoff`. The draft imported `StatCard` and `RoleCard`, neither of which exist in `site/src/components/` — both removed.
- **`StatRow`** converted from slot-children-with-`StatCard` to V4 prop syntax: `stats={[{ value, label }, ...]}`. Same four numbers as the polished draft, all sourced verbatim from the firm case.
- **Section headings** rewritten to the V4 em-on-payoff-clause pattern (e.g. `## Mapping a system <em>no one had ever seen end-to-end.</em>`).
- **Title** condensed to `'Treating product data as a service, <em>not a database.</em>'` — preserves the draft's central thesis in V4 cadence.
- **One `InsightCallout`** only, per V4 rhythm. The composer's longer violet callout was compressed into a single declarative card under a `Reframe` label, with a bold lead-in line and three sentences underneath. The `variant` prop the draft used does not exist on the V4 component and was dropped.
- **Two `PullQuote` blocks**, both copywriter-identified candidates: the "bottleneck isn't the tool" line near the top of section 1, and the "It's not a backlog" line inside "What the map made visible." Both are unattributed because neither comes from a named stakeholder yet — see open question 5 below.
- **`BotanicalDivider`** placed once, at the hinge between "Mapping a system…" (research) and "What the map made visible" (interpretation/intervention). This is the moment the case pivots from tangled to structured, which the V3 spec calls out as the only legitimate use.
- **`SpecimenSignoff`** placed at the end above the layout's back-link footer, mirroring the three V4 cases.
- **Removed**: every composer/copywriter handoff comment block (now in this file), the empty "What this case argues" Y-sentence section, the inline `{/* TODO ... */}` markers (carried into the open-questions list below), and the `RoleCard` import that had no rendered usage.

## Specimen assignment
**Cymbidium orchid** (V3 symbolism table: *Insight / synthesis projects — the unexpected cool-green thing you didn't know was there*).

Reasoning: the case's hero artifact is the 275-step experience map that surfaced a system no one at Ferguson had seen end-to-end. That is canonical insight/synthesis work. Other candidates considered:
- *Amaranthus (trailing)* — "the trailing, connecting thread across stages" also fits the 12-role journey map, but amaranthus is already assigned to `agetech`. Reusing it would dilute its meaning.
- *Fig, split* — "stakeholder or organizational work" fits, but it's already assigned to `carmax`.
- *Dried pods* — "legacy systems, end-of-life" fits the outdated back office, but the case is fundamentally about what *replaces* the legacy state, not about euthanizing it.

Cymbidium is unused in shipped V4 cases, so the meaning is available. **Whitney's call** — the draft frontmatter explicitly left this for her ("candidate motifs around root systems, tangling, or untangling"). If she prefers a different botanical, swap the two `specimen` / `specimenSignoff` paths and the `<SpecimenSignoff specimen="...">` value at the bottom of the MDX. The image assets at `/images/specimen-cymbidium.jpg` and `/images/signoff-cymbidium.png` do not exist yet — the `carmax` case has the same situation with `/images/specimen-fig.jpg`, so this is a known design-system bring-up state, not a regression.

## Schema-required fields with placeholder values
The content schema (`site/src/content/config.ts`) requires `year` (number), `role` (string), and `timeline` (string). The polished draft left all three as TODOs awaiting Whitney's interview. To keep the file schema-valid without pretending to know facts:
- `year: 2024` — best guess from the firm-case framing; flag for Whitney.
- `role: 'TBD — engagement role pending interview'`
- `team: 'TBD — Harmonic team composition pending interview'`
- `timeline: 'TBD — engagement dates pending interview'`

These render as visible "TBD" strings in the meta bar at the top of the case, which is intentional. They are obvious to a reader and easy to grep. Replace once Whitney confirms; do not ship to `published` status until she does.

## Open questions for Whitney (carried over from composer + copywriter rounds)
1. Year, timeline, team composition, and your specific role on this engagement.
2. Was the "data as a service" reframe yours, the team's, or Harmonic's standard frame? If yours, what did you have to do to make it land at Ferguson? (Determines whether the `InsightCallout` content stays or gets rewritten in your voice.)
3. What was the moment in the work you're proudest of, or the one you'd fight to keep?
4. Was there a turn — a stakeholder session, a research finding, a workshop disagreement — that changed the direction of the engagement? The firm case doesn't surface one; that's almost certainly a firm-voice artifact.
5. Quotes: do you have any stakeholder testimonials (Ferguson product-data lead, sponsor exec, vendor-side reps) we can use? The two `PullQuote` blocks are currently unattributed (your own writing). Either is stronger with a named source if one exists.
6. Confidentiality: confirm we can carry the Ferguson name, vendor counts, product counts, and capability counts at the level of specificity used here.
7. Specimen: confirm Cymbidium orchid or pick a different motif from the V3 symbolism table.

## For the art director
Highest-value artifacts the source implies but doesn't include:
- The 275-step experience map, even at low fidelity / blurred. Hero artifact for the case.
- The evolution map / backcast across three time horizons.
- A service blueprint excerpt showing front-stage and backstage.
- Any cluster board from the opportunity workshops.

Without those the case leans on body copy. If Whitney has Miro exports (even partially redacted), they would be high-leverage. The case currently has no `DarkBand` block — if artifacts arrive, a single `<DarkBand label="Artifacts">` after "What the map made visible" would be the natural home, mirroring the prototype band in `ferguson-cx.mdx`.

## What I did not change
- The copywriter's surgical-pass edits (em-dash removal, "stakeholder"/"co-creation"/"pain points" cleanup) all carried through. No reverting.
- The `Stakeholder Alignment` tag was already converted to `Cross-functional Alignment` in this rewrite, since the copywriter explicitly flagged it for Whitney's call and "Cross-functional" is the cleaner controlled-vocabulary term that aligns with `agetech`'s tag style. Easy to revert if Whitney prefers the original.
- No new `ProcessTimeline` section. The composer's working rule against methodology-march was deliberate; the three methods stay clustered as a single bulleted block under "Mapping a system…" rather than split into a six-phase march.

## Files
- Wrote: `site/src/content/cases/ferguson-data.mdx`
- Wrote: `site/handoff/ferguson-data.md` (this file)
- No git operations performed; the workflow handles commit/push.
