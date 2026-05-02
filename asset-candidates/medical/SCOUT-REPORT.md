# Asset scout: medical

Review the candidates below and reply with your choices. Then re-run the workflow in directed mode with your instructions filled in.

The MDX has five `<Placeholder />` components, but only one is visual (the workshop photo). The DarkBand currently uses HTML scaffolding for two figures (HME map, SS map) and the frontmatter references `specimen-pomegranate.jpg` / `signoff-pomegranate.png` — those are visual asks too even though they aren't `<Placeholder />` components. The remaining three placeholders are critic-flag prose rewrites and one quote verification — out of scope for asset-harvester, listed at the bottom for your awareness.

---

## Workshop photo — "redacted Miro/whiteboard from the prioritization session, with the four-lens grid visible"

Kind: image (in-body figure, between the five-themes paragraph and the "did the job the CX leader had asked for" paragraph)

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/medical/workshop-recap-page-21.png) | `workshop-recap-page-21.png` | "Top Twenty HMW Tally" — explicit four-column scoring table (Quick Win · Complexity · Rev Gen · Impact + Rev Total). Matches the prose's exact four-lens framing. Most literal answer to the ask. |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/medical/workshop-recap-page-08.png) | `workshop-recap-page-08.png` | "Opportunity Voting Recap" — Miro-style sticky-note wall with trophy icons on top-voted HMWs. More visual energy and shows participants voted, but no explicit four-lens column structure. |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/medical/workshop-recap-page-13.png) | `workshop-recap-page-13.png` | "Top Opportunities Deep Dive" section divider with a Miro overview of sticky notes scattered on a 2x2 axis. More atmospheric / "the room arguing" vibe; less precise on the four lenses. |

**Recommendation:** option 1 — the prose names the four lenses literally ("most valuable to providers, quick wins, most complex challenges, greatest revenue potential"); page 21's tally is the only candidate that lands all four columns visibly in one frame.

If you want a composite (recommended in the visual-director's alternative): option 2 + option 1 side-by-side could carry "Day 1 voting wall + Day 2 four-lens tally" in a single image. Say the word and we'll composite in directed mode.

---

## DarkBand · HME respiratory therapist experience map (Fig. 01)

Kind: image (DarkBand figure — currently HTML scaffolding placeholder text inside `<DarkBand>` block)

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/medical/hme-exp-map-page-1.png) | `hme-exp-map-page-1.png` | The actual HME experience map artifact with Resmed branding visible. Wide aspect — designed as a single horizontal map. Carries Composer's "blurred-with-callout" treatment naturally because the small type is unreadable at thumbnail scale. |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/medical/hme-participant-profiles-page-1.png) | `hme-participant-profiles-page-1.png` | First HME participant profile (anonymized portrait + key quotes/attributes). Could substitute if you want the DarkBand to lean "the people we talked to" rather than "the artifact we delivered." |

**Recommendation:** option 1 — the handoff flagged this as the primary map asset and the DarkBand label ("Synthesis output · two experience maps") names it explicitly. Treat as redacted/blurred per the Composer's art-director note.

---

## DarkBand · Sleep specialist experience map (Fig. 02)

Kind: image (DarkBand figure — second HTML scaffolding placeholder)

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/medical/ss-exp-map-page-1.png) | `ss-exp-map-page-1.png` | The Sleep Specialist experience map artifact with Resmed branding. Same horizontal format as the HME map, designed as a paired set. |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/medical/ss-participant-profiles-page-1.png) | `ss-participant-profiles-page-1.png` | Sleep Specialist 01 participant profile (one of seven). Same substitution logic as above — pick this if you'd rather the band carry "providers we interviewed." |

**Recommendation:** option 1 — pairs with the HME map at the same scale and visual treatment, which is the symmetric two-figure layout the DarkBand is built for.

---

## Specimen · pomegranate-split (frontmatter `specimen` + `specimenSignoff`)

Kind: image (botanical illustration — hero ornament + end-of-case signoff pair)

The handoff names `/images/specimen-pomegranate.jpg` and `/images/signoff-pomegranate.png` but the design-system-applier left both as TODO. The pomegranate-split SVGs the V4 mockup uses (`reference/portfolio-mockups-v4.html` per the agent definition) are illustrated specimens, not photographs — not the kind of asset that lives in `raw-case-material/`.

| # | Preview | File | Notes |
|---|---------|------|-------|
| — | — | — | None of the raw material is a botanical illustration. |

---

## Gaps — no suitable asset found

- **Specimen pomegranate (`/images/specimen-pomegranate.jpg`)** — illustrated botanical for the hero ornament. Source candidates: pull the SVG from the V4 mockup at `agent-land/reference/portfolio-mockups-v4.html` and convert to JPG, or hand-paint/source a pomegranate-split image. The handoff says protea is the alternative if you'd rather match the existing site cases that already use specimen illustrations (rose · agetech, ranunculus · ferguson-cx, protea · sfpl, cymbidium · ferguson-data).
- **Specimen signoff pomegranate (`/images/signoff-pomegranate.png`)** — end-of-case ornament; same source story. Per the design-system-applier handoff, the live site doesn't currently render `specimenSignoff` (no `<SpecimenSignoff />` component yet), so this is keep-on-file only.
- **Workshop photo of humans in the room** — the visual-director called out as ideal "Product and CX teams arguing over the artifact." No literal photographs of the workshop room exist in the raw material — only Miro/whiteboard captures. The recommended option 1 above is a screen capture, not a physical-room photo. If you want bodies-in-frame, that's a future capture.

---

## Other placeholders in this MDX (not visual — listed for your awareness)

The remaining four `<Placeholder />` components in `medical.mdx` aren't asset-harvester scope. They're prose/quote work for the copywriter or you directly:

- **Line 35 · thesis-lede on first screen (Critic Issue 1, HIGH)** — section-level prose ask. No image candidate needed.
- **Line 70 · compress strategy section to one paragraph (Critic Issue 3, MEDIUM)** — prose compression. No image.
- **Line 135 · verify sleep-specialist pull quote against `All SP Transcripts.docx` (Critic Issue 4a, MEDIUM)** — quote verification. The transcript exists at `agent-land/raw-case-material/medical/All SP Transcripts.docx` (372 KB). Search for verbatim lines on patient-blame dynamics; if no near-verbatim hit, the alt is to drop the PullQuote treatment and let the indirect-attribution sentence above carry the finding.
- **Line 214 · post-engagement signal (Critic Issue 2, HIGH)** — needs new copy in your voice (or an explicit "proof comes over the next year" caveat). No image.
