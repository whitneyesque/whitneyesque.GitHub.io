# Asset scout: agetech

Review the candidates below and reply with your choices. Then re-run the workflow in directed mode with your instructions filled in.

---

## ⚠️ No `<Placeholder />` markers in the current MDX

`site/src/content/cases/agetech.mdx` ships without any `<Placeholder />` slots, and there is no `handoff/agetech.md`. The visual-director hasn't flagged specific holes here, so this scout is a **proactive inventory** — surfacing what visual material exists in `raw-case-material/agetech/` and proposing where it could land if you want to add imagery.

If you don't want to add any visuals, no further action is needed (the candidate folder will be cleaned up automatically when the workflow runs in directed mode, or you can ignore this PR).

---

## ⚠️ Redaction issues to know about before placing anything

Two assets the case-context describes as "redacted" or "blurred" still contain identifying information. Flag these before reusing:

- **`gpt-conversation-redacted.png` and `gpt-conversation-2-redacted.png`** — the chat UI is captured cleanly but the messages contain unredacted names (facilitator: "Paloma"; care recipient: "Ivanka"). Per CASE-CONTEXT.md, participants and facilitators should be role-only. Either replace the names with `[participant]` / `[care recipient]` and re-export, or pick crops that exclude the named exchanges.
- **`participants-blurred.jpg`** — the Zoom grid is only lightly blurred; faces are still recognizable and several Zoom name labels are legible (e.g. "Margaret", "Miriam Hornb…", "Alam, Shamona"). Needs a stronger blur or different framing before publication.

`blueprint-blurred.png` and `interviewboard-blurred.png` are properly anonymized and safe to use.

---

## Proposed placement opportunities

Each section below is a moment in the case where adding a visual would land. Pick which (if any) you want — and which candidate per slot — then re-run in directed mode.

### Hero / cover image (frontmatter `hero_image`)

The case currently has `specimen: '/images/specimen-rose.jpg'` but no `hero_image`. A hero would land above the StatRow.

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/blueprint-blurred.png) | `blueprint-blurred.png` | Wide blurred service blueprint — abstract, recognisably "service design," works as atmosphere not literal info |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/interviewboard-blurred.png) | `interviewboard-blurred.png` | Blurred Miro interview board — looser, lots of breathing room, more obviously "research workshop" |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/agetech/Screenshot%202026-04-10%20at%2011.02.38%20PM.png) | `Screenshot 2026-04-10 at 11.02.38 PM.png` | Wide overhead of the full Miro working area; reads as "the project at a glance" |

**Recommendation:** option 1 — the blurred blueprint is the most distinctive and most aligned with "service design" framing.

---

### Illustrating "I built a custom GPT" (after line 65, before "Two intertwined problems")

A screenshot of the actual GPT interaction would make the prototype feel real here.

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/gpt-conversation-redacted.png) | `gpt-conversation-redacted.png` | Vertical chat showing onboarding question flow — **needs name redaction (Paloma / Ivanka)** |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/gpt-conversation-2-redacted.png) | `gpt-conversation-2-redacted.png` | Continues the same conversation: care concerns, work flexibility, support — **same redaction issue** |

**Recommendation:** option 1 once names are scrubbed — it includes the diagnostic intake which best illustrates "the prototype had to behave like the service."

---

### Illustrating the lo-fi prototype shown to Cohort 1 (around the "we'd designed it backwards" section)

Three lo-fi mockups exist for the three core surfaces tested in the first cohort. These could be a side-by-side trio, or used individually.

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/chatgotlofi.png) | `chatgotlofi.svg` (preview: `chatgotlofi.png`) | The Ask CareStar / situational guidance chat surface |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/dashboardlofi.png) | `dashboardlofi.svg` (preview: `dashboardlofi.png`) | The dashboard participants reacted to as "summary of what they told us" |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/agetech/forecastlofi.png) | `forecastlofi.svg` (preview: `forecastlofi.png`) | The forecast wireframe (the one the executive flagged as "verdict, not guidance") |

**Recommendation:** all three as a small grid above the cohort-1 quote — illustrates exactly the surfaces the participant was reacting to in "I just gave you all that information. What did I get for it?"

---

### Higher-fidelity wireframes (in the redesign section, "The redesign" / "Cohort 2")

The `wireframing and sketching.pdf` artifacts include cleaner V2 wireframes for the post-redesign surfaces. Use one if you want to show how the experience evolved, not just what failed.

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/wireframing_and_sketching-page-30.png) | `wireframing_and_sketching-page-30.png` | CareStar Dashboard wireframe (action items, forecast summary, caregiver + care recipient cards, upcoming appointments) |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/wireframing_and_sketching-page-35.png) | `wireframing_and_sketching-page-35.png` | Care Recipient Profile wireframe — diagnoses, care team diagram, providers, care wishes |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/agetech/wireframing_and_sketching-page-40.png) | `wireframing_and_sketching-page-40.png` | Ask CareStar (situational guidance) — the surface the redesign elevated to first |
| 4 | ![option 4](SITE_RAW_BASE/asset-candidates/agetech/wireframing_and_sketching-page-45.png) | `wireframing_and_sketching-page-45.png` | All five core screens in one shot — useful as a "what got built" overview |

**Recommendation:** option 3 (Ask CareStar) — it's the surface that made cohort 2 lean in, so it earns the placement. Option 4 is the alternative if you want one image to cover the whole product.

---

### Illustrating the questionnaire-architecture build (around "What to ask")

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/wireframing_and_sketching-page-25.png) | `wireframing_and_sketching-page-25.png` | Miro flow chart: Input data → Store data → Pull data → View data, with the CareStar Guidance modal series below |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/uncertainties_and_prioritizing_lofi_data_points-page-12.png) | `uncertainties_and_prioritizing_lofi_data_points-page-12.png` | Sticky-note schema for "Care Giver" (Who you are, Your care approach, What you want from CareStar, etc.) |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/agetech/uncertainties_and_prioritizing_lofi_data_points-page-20.png) | `uncertainties_and_prioritizing_lofi_data_points-page-20.png` | Sticky-note schema for "Care Receiver" companion to option 2 |

**Recommendation:** option 1 — most legible and most directly shows the architecture work (data flow + guidance surfaces in one frame).

---

### Illustrating the service blueprint (could replace InsightCallout treatment around "Design principle")

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/blueprint-blurred.png) | `blueprint-blurred.png` | The full service blueprint, blurred for publication. Wide aspect — reads well in a `<DarkBand>` or full-bleed treatment |

**Recommendation:** consider only if you want a "look at the artifact" moment. The case argues from process, not artifact, so this is optional.

---

### Illustrating the research workshop / process (any of the "process" sections)

| # | Preview | File | Notes |
|---|---------|------|-------|
| 1 | ![option 1](SITE_RAW_BASE/asset-candidates/agetech/Screenshot%202026-04-10%20at%2011.01.09%20PM.png) | `Screenshot 2026-04-10 at 11.01.09 PM.png` | Card sorting + forecast prioritization workspace |
| 2 | ![option 2](SITE_RAW_BASE/asset-candidates/agetech/Screenshot%202026-04-11%20at%209.49.28%20AM.png) | `Screenshot 2026-04-11 at 9.49.28 AM.png` | Notes on interview mechanics + a flow diagram of GPT-Scribe / Wizard / Facilitator roles (March 3 working session) |
| 3 | ![option 3](SITE_RAW_BASE/asset-candidates/agetech/Screenshot%202026-04-11%20at%209.49.58%20AM.png) | `Screenshot 2026-04-11 at 9.49.58 AM.png` | Wide Miro overview: lo-fi notes, March 11 update, recruiting matrix, completed participant data |
| 4 | ![option 4](SITE_RAW_BASE/asset-candidates/agetech/interviewboard-blurred.png) | `interviewboard-blurred.png` | Blurred interview board — already publication-safe |

**Recommendation:** option 2 if you want the human "behind-the-scenes" feel; option 4 if you want a clean publication-ready process shot.

**Caution:** `Screenshot 2026-04-10 at 11.01.19 PM.png` (Lo-Fi side-by-side workspace) contains a small video tile with a recognizable face on the right edge — exclude or crop before use.

---

## Gaps — no suitable asset found

- **A "Wizard of Oz" / behind-the-scenes shot** — the case has a strong moment ("I sent a message to the facilitator: skip the rest of the questions") but there's no photo of the research-team setup or the facilitator station. Would need to be staged or skipped.
- **Executive stakeholder testing the prototype** — the closing scene ("We can't get him to stop") would benefit from a photo of the unplanned session, but no photos exist in raw material from that moment.
- **A "before vs after" diptych of cohort-1 vs cohort-2 flow** — would be strong for the redesign turn but doesn't exist as a single artifact; would need to be composed.
- **Specimen / signoff** — `specimen` is set to `specimen-rose.jpg` in frontmatter but the case-context calls for **pomegranate, split** ("Hard truths, things split open, memento mori"). No pomegranate image exists in raw material — this is a separate ask, not something the asset-harvester can fill.

---

## Files dropped from candidates (FYI)

These were processed and removed before this report; flagging in case you want them back:

- All pages from `white-experiment-admin.pdf` — page 1 names the client ("ERIE NLI"), page 10 contains a real Microsoft Teams meeting URL + facilitator names.
- `Screenshot 2026-02-04 at 11.41.34 AM.png` — Harvest timesheet showing "Erie NLI" project codes.
- All pages from `CareStar GPT Masterclass McKinsey.pdf` — text-only McKinsey-style write-up, no visual artifacts.
- All pages from `Bryan GPT BRYAN GPT.pdf` — failed to render (filename quoting issue) and case-context flags it as "credibility/framing only, not a primary source."
- Pages 1–24 of `wireframing and sketching.pdf` and pages 1–19 of `determining wireframe components and uncertainties.pdf` — text-only design discussions, not visual artifacts.
- Unblurred SVG masters `service-blueprint.svg` and `interviewboard.svg` — case-context says "use blurred/redacted versions, do not use unblurred."
- `Aging _ Blueprints Working ... .svg` — byte-identical duplicate of `service-blueprint.svg`.

If you want any of these reprocessed, let me know in the directed-mode instructions.
