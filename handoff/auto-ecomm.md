# Design-system-applier handoff — auto-ecomm

## Top-level flag (read this first)

**This case is not ready for the design system pass.** The polished draft at `drafts/auto-ecomm.mdx` is a structural skeleton of TODO comments with no body prose. The composer's previous round did not produce real content. Both the composer and copywriter handoff notes in that draft say so explicitly:

- Composer: "It is meant to be replaced wholesale once raw material and an interview transcript are added."
- Copywriter: "Status: nothing to polish… The draft is a structural skeleton of TODO comments with no body prose."

My hard rules forbid me from writing the case from the raw `.docx` files (the four files in `raw-case-material/auto-ecomm/`, which include the Fjord PDF and three Whitney drafts the critic verified decode cleanly). "Do not modify the prose. Do not invent content."

What I produced is therefore a **V4-shelled placeholder**: V4 frontmatter shape, V4 imports, the SpecimenSignoff in the right place, and the existing TODO comments preserved verbatim. `status` stays `'draft'`. It will render as a near-empty page if built; that is intentional. **Do not ship.**

The unblock, per the copywriter, is: re-run the composer in Origin mode against the raw material that is in fact present in `raw-case-material/auto-ecomm/`. Then critic, then copywriter, then re-run me.

## Layout archetype

**Hybrid, leaning 6-section.** Picked provisionally so the skeleton has a recognizable V4 shape; the real archetype call belongs to the next composer + applier round once the case has prose.

Reason: the copywriter's preview of the spine (ethnography + reframe + butcher-paper readout) sounds 6-section to me — narrative-led, fewer artifacts, one strong reframe — but the Fjord PDF may reveal enough research density to push it to 12-section. Re-decide once content lands.

## Components used (count 5 of 6 cap)

- **StatRow** (top of body) — V4 archetype opener; left as TODO/TODO so it visibly demands real metrics before publish.
- **PullQuote** (after "The turn" section) — placeholder, attribution and body both TODO. Copywriter flagged "Behind the Line of Visibility" as the obvious anchor for the next round.
- **BotanicalDivider** (between turn and design response) — single inline divider, matches the V4 botanical exception system.
- **InsightCallout** (after "What we did about it") — placeholder for the one design principle that should fall out of the reframe.
- **SpecimenSignoff** (very bottom) — required V4 end-of-case ornament. Path is a TODO placeholder.

I deliberately did not import or use `DarkBand` or `ProcessTimeline`: nothing in the (nonexistent) prose justifies them yet. Adding them would be inventing structural intent.

## Specimen choice

**TBD — left as `/images/specimen-TBD.jpg` and `/images/signoff-TBD.png` in the frontmatter.**

Reason: the design system rule (V3 PDF section 04, carried into V4) is that the specimen carries thematic weight from the case's spine. The auto-ecomm spine isn't fixed yet — depending on whether the final framing leans on dealership ethnography, the data-integrity reframe, or the cross-channel customer journey, a different botanical will fit. The composer handoff explicitly held this decision: "Specimen assignment also TBD; should be picked once the case's spine is set so the botanical motif carries thematic weight."

When the next round picks one, update both `specimen` and `specimenSignoff` in the MDX frontmatter, and the `<SpecimenSignoff specimen="…" />` path at the bottom of the file.

## Image assets referenced (TODO — Whitney to upload)

- `/images/specimen-TBD.jpg` — cover specimen, not yet chosen
- `/images/signoff-TBD.png` — end-of-case ornament, not yet chosen

No in-body imagery is referenced because there is no in-body prose to anchor it to. The Fjord PDF in `raw-case-material/auto-ecomm/` reportedly contains dealership and synthesis-wall photography; those become candidates for `DarkBand` figures once a real draft exists.

## Narrative content that didn't fit V4 vocabulary

None — there is no narrative content to fit. All structural moments are TODO comments, preserved verbatim from the polished draft so the next composer round can drop prose into them without rebuilding the spine.

## Open questions for Whitney

1. **Confirm this case should proceed at all.** The composer's round 1 open question still stands: is `auto-ecomm` a portfolio case Whitney wants to ship, or one she's testing whether to include? The framing of the next composer round depends on the answer.
2. **Confirm client identity and NDA posture.** Copywriter notes treat AutoNation / Fjord / Accenture as the spine. If any of that needs anonymizing, decide before the next composer pass so the prose lands in the right register.
3. **Time-horizon framing.** The critic flagged this as one of two upstream calls only Whitney can make: own the era vs. lead with a "what I'm still carrying forward" through-line. Affects opening tone.
4. **Scope honesty.** The critic also flagged: this engagement produced research, journeys, and a roadmap — not a shipped launch unless new evidence surfaces. Outcomes section needs to be framed accordingly.
5. **Specimen selection.** Pick after the spine is set. See specimen section above.

## Recommendation

Move this PR back to `composer-needed` (or whatever the equivalent label is) before merging. The MDX I produced will render but says nothing; shipping it as-is would put a TODO-titled page on the live site.
