# Design-system-applier handoff — allied (PR #14)

## Layout archetype
Hybrid leaning toward the 12-section archetype, scaffolded onto the polished draft's seven narrative sections.

Reason: The case is research- and process-dense (two phases, four-actor system, four future-state artifacts, workshop facilitation), but the polished prose is structured around a tight narrative reframe ("dealers weren't the bottleneck" / "service, not product") rather than a full process march. The 6-section sample's restraint and the 12-section sample's artifact treatments both apply. I preserved the composer's section structure exactly and applied V4 components at the structural moments the polished prose already invites.

## Components used (count 5 of 6 cap)
- **StatRow** — top of body, scope (engagement length, participants, actor types). Same placement pattern as agetech, ferguson-cx, carmax.
- **InsightCallout** (label="The reframe") — section 3, the "coordination problem, not a dealer problem" moment. The single most pull-able sentence in the case; sits where the composer placed it.
- **BotanicalDivider** — narrative hinge between the research sections (Phases 1 and the reframe) and the design phase (Phase 2 collaborative work). One use per case, per V3 Exception 2. This is the case's structural pivot from "what we found" to "what we built."
- **DarkBand** (label="The future-state artifacts") — single dark band carrying both artifact figures (blueprint slice + evolution map). Replaces the composer's two separate DarkBand+Screenshot TODOs. Mirrors the ferguson-cx two-figure dark-band pattern. Placed after the artifact descriptions so the visuals land near the prose that names them.
- **SpecimenSignoff** — final element, per V3 Exception 3.

PullQuote was deliberately omitted (see "Narrative content that didn't fit" below).

## Specimen choice
**fig-split** (kept from the composer's frontmatter)

Reason: The composer assigned `fig-split` per the V3 specimen-symbolism table — "stakeholder or organizational work / dense interior structure made visible." The deliverable here is a service blueprint, capability inventory, and two views of an evolution map: literal interior structure of a multi-actor service made visible. That fits the symbol cleanly.

I converted the bare `fig-split` frontmatter value to the path convention the shipped V4 cases use (`/images/specimen-fig-split.jpg`, `/images/signoff-fig-split.png`).

CarMax already uses `fig` (single, plain), so `fig-split` reads as a deliberately distinct asset within the same botanical family. If `fig-split` and `fig` are not in fact different specimens in the V3 table, Whitney's call:
- Stay with `fig-split` if it's a real distinct asset.
- Swap to `cymbidium-orchid` (insight/synthesis — the providers-not-dealers turn).
- Swap to `amaranthus-trailing` (multi-actor coordination spine; but agetech already uses `amaranthus`, so this would also collide).

To change, edit `specimen` and `specimenSignoff` in the MDX frontmatter and update the SpecimenSignoff `specimen` prop at the bottom of the file.

## Image assets referenced (TODO — Whitney to upload)
- `/images/specimen-fig-split.jpg` — cover specimen image. Confirm specimen choice first; commission/source asset.
- `/images/signoff-fig-split.png` — end-of-case ornament, tighter crop of the cover specimen.
- `/images/allied/blueprint-slice.png` (or similar) — cropped slice of the future-state service blueprint showing the status milestone row and at least one orange "big rock" sticky note. Source: lucid/Miro export referenced in the Final Presentation deck. Currently rendered as a `case-darkband-figure-placeholder`; replace placeholder div with `<img>` once asset lands. Whitney to choose the crop; she calls the status milestone row out as a unique feature of this blueprint in the artifact walkthrough video, so that should be visible.
- `/images/allied/evolution-map-by-concept.png` (or similar) — cropped slice of the by-feature-concept view of the evolution map (the view that shows multi-disciplinary dependencies most clearly). Same placeholder/replacement pattern.

## Narrative content that didn't fit V4 vocabulary
- **PullQuote** — the polished draft has a `{/* TODO: PullQuote */}` slot (line 40) but no source quote in the raw materials I read. Per the agent's hard rule against inventing content, I left the component out. Two paths to fill it:
  1. The copywriter recommended promoting "The blueprint told the truth about what wasn't decided yet, and named who would need to decide it." (currently in body prose) into a PullQuote. That requires lifting a sentence out of body prose; an editor's call, not a design-system call.
  2. Source a participant voice from `Research Findings - v1.0 | Allied RefundPlus.pdf` or workshop transcripts.
  Either would slot naturally between section 2 ("What the service had grown into") and section 3 ("The turn"), where the composer originally placed the TODO.
- **The composer's inline `[TODO: Whitney — flesh this out with specifics...]` bracket** in the "My role" section was editorial scaffolding that would have rendered as visible text. I dropped it. The prose preceding it (workshop participation, blueprint and evolution map construction, consolidation of concept directions, final readout) is intact and reads as a complete-but-thin paragraph. The interview-pass content the bracket was holding space for is captured in the open questions below.
- **Composer's HTML comment block at the bottom of the polished draft** (handoff notes from composer + copywriter): removed. Those notes live in `agent-land/drafts/allied.mdx` for future rounds; this handoff captures only what's load-bearing for the design pass.

## Open questions for Whitney

### Title
The polished draft's title is plain: "RefundPlus: Designing the future state of a multi-actor refund service." I applied the V4 `<em>` italicization to the second clause but did not rewrite. The composer flagged the title as open to a more atmospheric Gardener-voice rewrite. Two stronger candidates drawn from existing prose, if you want to swap:
- `'Inside Allied it was a product. <em>Outside, it behaved like a service.</em>'` (anchors the reframe)
- `'A bootstrapped pilot, <em>and the federal rule that broke it.</em>'` (anchors the opening, but composes a fragment)

I stayed conservative because (a) the composer was explicit that the title was open for Whitney's call and (b) the carmax precedent for rewriting titles required pulling an existing line, which the allied prose makes harder.

### Section headings
Only one section heading received the `<em>` two-clause treatment ("The turn: <em>dealers weren't the bottleneck</em>") because it was the only head with a natural colon split. The other six section heads are plain, which makes the case visually less ornamented than agetech / ferguson-cx / carmax. If you want the V4 rhythm more strongly, the path is to ask the copywriter for a pass that introduces natural splits in the H2s. Not in scope for this agent.

### Status set to 'published' — but two sections are still thin
I set `status: 'published'` per the V4 standard. The "My role" and "What I'm still thinking about" sections are intentionally thin pending the case-interviewer pass the composer recommended. The case is structurally complete and won't break the work-grid card; it just reads soft at the close. If you'd rather hold publication until the interview round, downgrade to `status: 'draft'` in the frontmatter. The composer's draft was marked `'draft'`.

### Blueprint slice + evolution map asset crops
The DarkBand currently renders two `case-darkband-figure-placeholder` divs with descriptive labels. Both placeholders need to be replaced with real `<img>` elements once the assets land. The structural HTML matches the ferguson-cx pattern; the swap should be mechanical.

### "Service vs. product" attribution
Composer + critic both flagged the paragraph attributing the service-vs-product reframe to specific facilitation choices as potentially overclaiming. Left as the copywriter handed it off; the editorial decision still belongs to the interview round.

### Allied named publicly
CASE-CONTEXT confirmed Allied can be named. If that changes, the swap points are: title (drop "RefundPlus", swap to a generic like "a financial services company"), client field, and several body mentions ("Allied Solutions", "Allied", "inside Allied").

## For the Frontend Dev
- All five imported components (`StatRow`, `InsightCallout`, `BotanicalDivider`, `DarkBand`, `SpecimenSignoff`) already exist on this branch under `site/src/components/`. No new components introduced.
- Frontmatter validates against `src/content/config.ts`: `title`, `client`, `year`, `role`, `team`, `timeline`, `tags`, `summary`, `specimen`, `specimenSignoff`, `slug`, `status` all present and correctly typed.
- The `team` string is long (44 words). The schema accepts it (`z.string().optional()`), but if the case-page header's team-line styling truncates or wraps awkwardly, that's the field to watch.
- DarkBand markup follows the ferguson-cx pattern verbatim (`case-darkband-figures`, `case-darkband-figure`, `case-darkband-figure-placeholder`, `case-darkband-figure-caption`). CSS for those classes is presumed already shipped with the V4 case-layout work.
