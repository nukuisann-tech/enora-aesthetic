# ÉNORA AESTHETIC — Growth Strategy V2 Final Review

Scope: final brush-up of `/growth-strategy`, turning it from "a page with a
lot of marketing ideas" into a document a real aesthetic-clinic owner
could be handed as a Growth Operating System. Screenshots referenced
below live in `review-assets/growth-strategy-v2/`.

## Production Audit

Production HTML for `/growth-strategy` was fetched directly (`curl`) and
grepped before any change was made. It confirmed the reported issue: The
Consultation System timeline and the Tomori-comparison table each
rendered their content twice — once inside a `hidden md:block` block for
desktop, once inside a separate `md:hidden` block for mobile. Both were
rewritten (see below). A production build (`next build --webpack`) and a
`next start` production server were used for this review's final
screenshots and PDF, not the dev server, so what's documented here is
what actually ships.

## Duplicate DOM Findings

- `ConsultationSystemTimeline.tsx` — rewrote to render `phases.map()`
  once, with only two textless connector lines (mobile vertical / desktop
  horizontal) toggled by breakpoint. No phase name or item now exists
  twice in the DOM.
- `DifferenceFromTomori.tsx` — rewrote using CSS `display:table` /
  `table-row` / `table-cell` (via `md:table` etc.) on a single
  `rows.map()`, so the same divs become a real table on desktop and a
  stacked list on mobile through pure CSS reflow, not two renders. One
  residual case remains and is intentional: the axis label
  ("TOMORI KOMUTEN" / "ÉNORA AESTHETIC") appears once in the desktop
  header row and once per mobile row label, each hidden via
  Tailwind `hidden`/`md:hidden` — i.e. `display:none`, fully removed from
  the accessibility tree, so a screen reader only ever encounters one
  instance per breakpoint. Confirmed via a text-node walk of the live DOM
  (5 real nodes: 1 header cell + 4 mobile labels, only one set visible at
  a time depending on viewport).
- A crude substring count of `document.body.innerHTML` will show text
  appearing "twice" for any phrase — this is Next.js's own React Server
  Components flight-data payload (`self.__next_f.push(...)`), a script
  tag holding the serialized page for hydration. It is inert, not part
  of the rendered or accessible content, and present on every Next.js
  App Router page regardless of this project. Verified by walking actual
  DOM text nodes instead of raw HTML substrings.

## Strategic Simplification (§26 dedup)

- `GrowthEngine.tsx` — removed the trailing `Continue` / `Advocate`
  steps. That territory already belongs to The Continuity System and The
  Growth Loop chapters; repeating it a third time was pure duplication.
- `IntentJourney.tsx` — collapsed the "Continuity" stage's three repeated
  items (`Aftercare` / `Follow-up` / `Long-term Care`) into a single
  cross-reference to The Continuity System, instead of re-listing content
  that chapter already owns.
- New `MasterDecisionSystem.tsx` ("The ÉNORA Decision System") added as
  one consolidated map — Discovery → Self Understanding → Clarity →
  Shared Context → Human Consultation → Decision → Continuity → Trust —
  with each node naming which existing section it lives in. It
  introduces no new strategic content; it exists so the reader sees the
  one throughline instead of re-deriving it from four separate diagrams.

## Decision Quality Signals (§04)

New `DecisionQualitySignals.tsx`, placed in The Business System chapter
next to the KPI Tree. Explicitly not a score — observable signals only,
grouped Before Consultation / During Consultation / After Consultation /
Operations, with a `StrategyNote` stating directly that these are never
combined into a single Decision Quality Score.

## Qualified Consultation Definition (§05)

New `QualifiedConsultation.tsx`. Defines "Qualified" as **Better Prepared
Consultation** — three concrete conditions (Brief/Beauty Map completed,
can state Concern/Avoid/Priority, has seen Price/Risk info) — explicitly
not a High/Low Value Lead ranking. Placed in The Consultation System
chapter, directly after Consultation Brief.

## Research Corrections (§08/§09)

`research.ts` was rebuilt from scratch. The original brief's own
"JustSystems 2026, 1,187名" citation could not be verified to exist via
web search and was dropped rather than kept on faith. Replaced with
three sources, each checked via WebSearch + WebFetch + `curl` (200
status confirmed for all three): two 矢野経済研究所 market/consumer
reports and 厚生労働省's medical-advertising guideline set. Each entry now
carries the full citation shape (Organization / Report / Published /
Population / Sample Size / Finding / Why It Matters / Source), folds
behind `<details>` so it reads as a Source Index rather than the visual
star of the page, and a `RESEARCH LIMITATION` note states plainly that
none of this external research represents ÉNORA's actual persona.

## Unsupported Claims Removed

- `NurtureStrategy.tsx` — "まだ決めなくて大丈夫です、と言えるSequenceのほうが次
  の相談につながりやすい" (an asserted causal outcome) replaced with a
  description of what the sequence is designed to do, not a promise of
  what it causes.
- `channels.ts` / `AcquisitionChannels.tsx` — the Search channel's
  example queries are now explicitly tagged `HYPOTHESIS` via the new
  `ClaimTag` component and reworded to state they are Query Examples,
  not Search Console data.
- `ContentPillars.tsx` — Journal concept examples now carry a `SAMPLE`
  tag and a closing note stating real-world prioritization runs on
  Search Demand × Decision Value × Business Relevance, not on the listed
  examples themselves.
- Sitewide grep for causal-claim patterns
  (`につながる|が高まる|が増える|を高める|につながりやすい|しやすくなる|されやすい`)
  and for absolute-compliance language (`完全準拠|法的に問題ない`) both come
  back clean across `src/data/strategy/` and `src/components/strategy/`.

## Beauty Map Improvements (§14/§15/§16)

`BeautyMapMockup.tsx` (a static 5-screen mockup) was replaced by
`BeautyMapInteractive.tsx` — a genuinely interactive client-side
prototype (`useState`, no server, no storage). Three real questions
(Concern → Avoid → Priority), a Back/Next flow, and a result screen
titled "YOUR CONSULTATION BRIEF" that goes beyond "Your Priorities" to
include **Questions To Ask** and **Prepare For Consultation** — content
keyed off the chosen Priority, never naming a treatment. A visible
"DEMO ONLY" disclaimer and a Reset button are present. Verified via
Playwright keyboard-only interaction (focus → Enter/Space selects an
option, Tab → Next advances, disabled state respected).

A new Visual Peak, `BeautyMapToHumanPeak.tsx` ("Visual Peak 02" — the
slot the codebase's own comments show was never built), makes the
Beauty Map → Consultation Brief → Human Consultation chain ÉNORA's
stated biggest differentiator, matching the dark full-bleed treatment of
the other two peaks.

## Privacy / Data Governance (§17–§19)

New `PrivacyByDesign.tsx`. "VALUE BEFORE CAPTURE" as the section's
statement; four Data Principles (Collect Less / Use Clearly / Access
Carefully / Keep Only As Needed); three explicitly separate data layers
(Marketing Data / Consultation Preparation Data / Medical Information)
with a direct statement that Medical Information never flows into
Marketing Automation; a closing note stating the Beauty Map does not
collect medical history or medication information "because it might be
useful" — that belongs to a separate, formal Medical Intake process.

## Clinical Content Governance (§20/§21)

New `ClinicalContentGovernance.tsx`. Workflow: Draft → Medical Review →
Compliance Check → Publish → Periodic Review → Update/Archive, applied
to Treatment Description / Price / Risks / Drug-Device Info / Claims /
Images / Before-After. Content Ownership (Owner / Last Reviewed / Next
Review) described as the mechanism that prevents stale medical content.
Explicitly states this Concept Project's own content has not been
through Medical Review — the workflow is presented as the intended
real-world process, not a claim about this page.

## Capacity / Economics (§06/§07)

`kpi.ts` / `KPITree.tsx` — added Capacity (Doctor Hours / Staff Hours /
Treatment Room / Bookable Slots) and Economics (Revenue / Gross Profit /
CAC / Cancellation Cost) guardrails beside the existing funnel tree,
under `GROWTH = QUALITY × CAPACITY × ECONOMICS`. `ValidationSection.tsx`
gained three explicit capacity-aware IF/THEN rules making "More Bookings
Are Not Always Better" concrete instead of asserted. New
`BusinessSystemLenses.tsx` shows five quiet lenses (Demand / Decision /
Operations / Economics / Relationship) as an Index, not a dashboard.
`NinetyDayBlueprint.tsx` gained a Decision Gate question at the end of
each phase plus a closing "SCALE IS A DECISION" statement — no
automatic progression to ad spend.

## Information Density Reduction

`ResearchBasis.tsx` now uses native `<details>`/`<summary>` so
Population/Finding/Source fold under each source's name and report,
reducing the section's footprint to a compact index on first view.
`StrategySummary.tsx` and the new `ExecutiveSkim.tsx` (a 60-second
Problem/Answer/System/Core KPI/Guardrail/Governance/AI/Growth Loop
summary, distinct from the existing 3-statement Executive Summary) give
a busy reader a complete read without scrolling the full document.

## Mobile

All new sections (Privacy, Content Governance, Business Lenses, Decision
Quality Signals, Bottleneck Prescription, Beauty Map) were screenshotted
at 390px. None produce an unbroken wall of cards — they render as the
same quiet index/list patterns already used sitewide. No new
Progressive Disclosure was needed beyond the Research `<details>`
already in place; core Thesis statements (chapter dividers, Hero,
tagline copy) are never collapsed.

## Accessibility

Re-audited Consultation System, Tomori Comparison, and (newly) the
interactive Beauty Map for dual-DOM-render issues — see Duplicate DOM
Findings above. Keyboard-only pass confirmed for the Beauty Map widget
(focus, Enter/Space, Tab, disabled-state handling). No `outline-none` or
custom focus suppression exists anywhere in `src/components/strategy/`
or `globals.css` — all interactive elements keep the browser's default
focus ring. Reduced-motion emulation produced zero console/page errors.

One fix made during this pass, not in the original brief: the fixed
vertical ChapterNav (`xl:flex`, ~220px wide, `position: fixed`) was
found to visually overlap in-page content whenever that content's
rightmost text both reached near the right edge and sat near the
viewport's vertical center — surfaced by the new 4-column Privacy grid
("Keep Only As Needed" was rendered under the nav panel). Fixed with a
scoped `.canvas` right-padding rule for the 1280–1840px range (where the
canvas's own centering margin isn't yet wide enough to clear the nav on
its own); re-verified clean at 1280/1440/1920.

## Print / PDF

Re-verified against the production build (`next start`, not dev).
`page.emulateMedia({media:'print'})` + `page.pdf()` confirm: sticky
ChapterNav hidden, Print button hidden (`.no-print`), and — new this
pass — the Research Basis `<details>` content forced visible in print via
`.strategy-doc details:not([open]) > *:not(summary) { display: block }`,
so a printed copy doesn't lose Population/Finding/Source rows that were
collapsed on screen. PDF saved to
`review-assets/growth-strategy-v2/growth-strategy-v2.pdf`.

## Remaining Concerns

- `ChapterNav.tsx`'s `IntersectionObserver` sets `active` on intersect
  but never clears it when a chapter scrolls out of view without another
  becoming active — after a full scroll to the bottom and back to the
  very top, "01 The Tension" can be left highlighted even before the
  reader has scrolled into it again. This predates this pass, is outside
  the V2 brief's scope, and is noted here rather than fixed silently.
- The Beauty Map's per-Priority `questionsToAsk` / `prepareForConsultation`
  content (in `beautyMap.ts`) is original copy written for this pass, not
  sourced from a real clinic's actual consultation script — appropriate
  for a Concept Project, but worth flagging as content a real engagement
  would replace with the clinic's own material.
- No automated axe-core / Lighthouse accessibility scan was run (only
  manual keyboard + focus + reduced-motion + DOM-walk checks); if a real
  handoff needs a formal WCAG audit, that's a follow-up, not something
  this pass claims to have done.

## Technical QA Summary

- `npx tsc --noEmit` — clean.
- `npx eslint src/` — clean.
- `npm run build` (`next build --webpack`) — succeeds, `/growth-strategy`
  prerendered as static content.
- Playwright at 1920 / 1440 / 768 / 430 / 390 — zero console errors,
  zero `pageerror` events, zero horizontal overflow at any width.
- Keyboard-only Beauty Map interaction — verified.
- Reduced motion — zero errors.
- Print/PDF — verified against production build.

## Release Rule (§46)

All items above pass. **INDUSTRY 02 COMPLETE.**
