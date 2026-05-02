# Asset scout: ferguson-data

Review the candidates below and reply with your choices. Then re-run the workflow in directed mode with your instructions filled in.

The raw-case-material folder for this case (`raw-case-material/ferguson-data/`) contains only one file — `harmonic-ferguson-data-case`, a UTF-8 text writeup of the Harmonic firm case. No PDFs, images, docx files, or any other visual sources are present, so no candidate assets could be extracted. Every `<Placeholder />` in the MDX is a gap.

---

## Gaps — no suitable asset found

The MDX has four `<Placeholder />` slots plus two specimen/signoff assets. None can be filled from current raw material. What's needed for each, restated from the "What I need from you" section in the MDX and the design-system handoff:

- **Placeholder 1 — Top-of-case hero (after the StatRow).** A wide artifact that signals "making an invisible system visible." First choice: a low-fidelity / blurred crop of the 275-step experience map, framed wide enough to read as scale. Acceptable substitute: a workshop scene with the map taped across a wall and operators standing in front of it. Avoid stock construction-supply imagery.
  - **What Whitney needs to provide:** a Miro export (PNG or PDF, even partial / redacted) of the experience map zoomed out, OR a workshop photo showing the map on a wall.

- **Placeholder 2 — Inside "Mapping a system…" (after the 275-step paragraph).** The hero artifact for the case. The experience map itself, ideally a section legibly showing multiple swimlanes (vendor → product-data → sales/merch → customer-facing) so the twelve roles ribbon across. Redaction is fine; what matters is it reads as one continuous system.
  - **What Whitney needs to provide:** a higher-resolution Miro/Mural export of a multi-swimlane section of the 275-step experience map. PDF or PNG.

- **Placeholder 3 — Inside "What the map made visible…" (between "That number is large on purpose." and the pull quote).** The evolution map / backcast across three time horizons, sequencing the 290+ capabilities across the four-year horizon. Acceptable second choice: a service blueprint excerpt (front-stage / backstage).
  - **What Whitney needs to provide:** a Miro export of the evolution map / three-horizon backcast, OR a blueprint excerpt if the evolution map isn't releasable.

- **Placeholder 4 — Inside "A roadmap that funded itself" (after the numbered list).** A clean, presentation-grade rendering of the four-year phased plan — the artifact that went in front of the funding conversation. Polished diagram preferred over a redacted Miro export here.
  - **What Whitney needs to provide:** the deck slide or presentation-grade diagram of the four-year phased roadmap (PDF, PNG, or the slide itself).

- **Specimen — `/images/specimen-cymbidium.jpg`.** Cover image, Cymbidium orchid (V3 symbolism: insight / synthesis). The design-system-applier flagged this for Whitney's confirmation; it does not exist yet.
  - **What Whitney needs to provide:** confirm Cymbidium or swap to a different botanical from the V3 symbolism table, then provide the cover photograph at `/images/specimen-cymbidium.jpg` (or matching path for the swap).

- **Specimen signoff — `/images/signoff-cymbidium.png`.** End-of-case ornament, paired with the specimen above. Same situation — does not exist yet.
  - **What Whitney needs to provide:** the matching signoff PNG (transparent background) for whichever botanical is chosen.

---

## Notes for the directed-mode rerun

When Whitney has assets in hand, drop them into `agent-land/raw-case-material/ferguson-data/` (or attach to the directed-mode trigger), then re-run with `asset_instructions` naming each file and which placeholder it fills. Example:

> "Use `experience-map-overview.png` for placeholder 1 (hero). Use `experience-map-swimlanes.pdf` page 2 for placeholder 2. Use `evolution-map.png` for placeholder 3. Use `roadmap-4yr.pdf` page 1 for placeholder 4. Specimen confirmed Cymbidium; cover and signoff attached as `specimen-cymbidium.jpg` and `signoff-cymbidium.png`."
