# ÉNORA AESTHETIC — Growth Strategy: Editorial Rebuild (V3)

Scope: not adding content — re-editing `/growth-strategy` so it reads as a
Strategy Case Study understandable at a glance, not a document that
rewards being read closely. Screenshots in
`review-assets/growth-strategy-v3/`.

## Main Story Before / After

**Before**: Hero → Executive Summary (3 English-labeled statements) →
60-Second Read (8-row table) → Master Decision System (8-node map) →
Chapter 01 → … five English-labeled chapters (The Tension / The Decision
Engine / The Consultation System / The Continuity System / The Business
System), each carrying multiple full sections, ~30 components deep, no
distinction between what a first-time reader needs and what a returning
reader might dig into.

**After**: Hero → **one** overview ("この戦略を一枚で," 4 rows) → **7**
Japanese-first chapters, each with exactly one idea and one visual:

| # | Chapter | Idea |
|---|---|---|
| 01 | 課題 | 情報が多すぎて判断しにくい |
| 02 | 戦略 | 選択肢でなく判断軸をつくる |
| 03 | 中核システム | Beauty Map → Brief → 人による相談 |
| 04 | 相談体験 | 予約完了はゴールではない |
| 05 | 事業 | 予約数だけでは判断しない |
| 06 | 90日 | 現状を知る→判断しやすくする→導線をつなぐ |
| 07 | 成長循環 | 良い判断が良い体験・信頼・次の相談をつくる |

Everything else (集客/コンテンツ/計測/データ/医療情報管理/AI, plus Research
and the Tomori comparison) moved to **詳細設計 (Supporting Strategy)** —
depth on demand, not deleted.

## Removed / Moved Content

**Retired entirely** (content absorbed elsewhere or judged redundant with
the new single overview, not preserved as a separate component):
`ExecutiveSummary`, `ExecutiveSkim`, `MasterDecisionSystem` (all three
were "here's the whole strategy," repeated four times before Chapter 01
even started), `StrategySummary` (now redundant with the new one-page
overview), `ConsultationBriefSection` (implementation detail already
implied by the Beauty Map → Brief → Human peak), `ConsultationOutcome`
(its four outcomes now live inside the Chapter 04 timeline's "相談後"
column instead of a second, separate section), `ContinuityLoop` /
`RetentionReferral` (one-line insight folded into Chapter 07's own
narrative instead of a dedicated Chapter 04 "Continuity" that no longer
exists as its own Main Story chapter), `ExistingAssetLeverage` (site-reuse
mapping now implied by the Chapter 03 peak).

**Moved to Supporting Strategy** (unchanged content, relocated and
re-labeled): Acquisition Channels, Intent Journey, Nurture Strategy →
「01 集客」; Content Pillars → 「02 コンテンツ」; KPI Tree, Decision Quality
Signals, Qualified Consultation, Validation Section (+ capacity IF/THEN),
Decision Rules, Bottleneck Prescription (+ NOW/NEXT/LATER, renamed 今すぐ/
次に/後で) → 「03 計測」; Privacy by Design → 「04 データ」; Clinical Content
Governance → 「05 医療情報管理」; AI Section → 「06 AI」. Research Basis and
the Tomori comparison stay as their own standalone sections after the
index, not folded into the 6 numbered buckets.

## Japanese-first Language Changes

Every eyebrow/section label that was pure English decoration was
translated: "Channel Role" → 集客 — チャネルの役割, "Content Strategy" →
コンテンツ, "KPI Tree — Sample Structure" → KPIツリー — 構造サンプル, "Before
Implementation" → 実装前に確認すること, "If This, Then That" → こうなったら、
こうする, "Research Basis — Source Index" → 調査・設計根拠, "Privacy by
Design" → 必要な情報だけ扱う, "Clinical Content Governance" → 医療情報の公開・
更新管理, "AI — Phase Later" → AI — 導入は後の段階で, and so on. Growth
Engine's 6 stage labels went from English (Discover/Explore/Understand/
Define/Trust/Consult) to Japanese (知る/気になることを整理する/判断材料を集める/
優先したいことを決める/相談する), with 決める kept as the one visually singled
step. The Consultation Timeline's phase labels (BEFORE/DURING/AFTER) became
相談前/相談中/相談後. The Growth Loop's step sequence became fully Japanese
sentences; its closing signature is now the brief's exact requested copy,
**"BETTER DECISIONS. BETTER GROWTH."** — replacing the prior "BETTER
DECISIONS CREATE BETTER GROWTH." This is a deliberate copy change made at
this session's explicit instruction, superseding the earlier session's own
"do not change the core" note on that specific line.

Brand-accent English kept as-is per the brief's own list: SELECTIVE
AESTHETICS, DECISION QUALITY GROWTH (implicitly, via unchanged concept
naming), SELECTIVE BEAUTY MAP, YOUR CONSULTATION BRIEF, CONSULTATION
BRIEF, NOT A DIAGNOSIS, and the Market Tension peak's "TOO MUCH
INFORMATION. TOO LITTLE CLARITY." (kept exactly where the brief said it
could appear, as a visual accent above the Japanese line that actually
carries the meaning).

## Visual Hierarchy Changes

Visual Peaks are still exactly 4, per the brief's cap — but two changed
meaning: Peak 01 (Hero) had its mid-page English label stack removed
(no more "BETTER DECISIONS. BETTER GROWTH." + "SELECTIVE AESTHETICS —
GROWTH SYSTEM" sitting under the two core taglines); Peak 02 (Market
Tension) was rewritten to a Japanese-first flow ending in "判断材料を整理"
instead of a NOISE/CLARITY two-column word list plus a paragraph; Peak 03
(Beauty Map → Brief → Human) had its stage labels swapped to Japanese
action phrases with the English asset name demoted to a small caption;
Peak 04 (Growth Loop) now builds its narrative in Japanese sentences
before the English signature. No new peak was added — the four-peak
budget was treated as fixed, not renegotiated.

## Beauty Map Presentation

Split into three purposeful pieces instead of one section carrying all
three jobs: `BeautyMapStory` (new — the before/after user transformation:
"毛穴が気になる" → three questions → "自然な変化を優先したい," ending on
"曖昧な悩みを、相談できる言葉へ変える"), `BeautyMapInteractive` (the existing
working prototype, kept, with its own intro cut from three sentences of
strategy explanation down to one line of safety information — the
"NOT A DIAGNOSIS" detail block that used to follow the demo was removed
as redundant with that one line), and `BeautyMapToHumanPeak` (the
differentiator statement). Each does one job; none repeats another's
copy.

## Business Story

The prior `BusinessSystemLenses` (five English lenses: Demand / Decision
/ Operations / Economics / Relationship, styled as an index) was replaced
outright with a four-row Japanese flow matching the brief's exact
wording: 集客 → 必要な人に届いているか / 相談 → 相談前の準備が整っているか / 運営 →
受け入れられる予約枠か / 収益 → 売上・粗利益が成立しているか, closing with a single
line pointing to Supporting Strategy → 計測 for anyone who wants the KPI
Tree, Capacity/Economics guardrails, and Decision Quality Signals detail.
The KPI Tree itself was not touched in this pass beyond relocation — its
structure and the `GROWTH = QUALITY × CAPACITY × ECONOMICS` framing
(from the prior brush-up) live intact inside Supporting Strategy → 計測.

## Supporting Strategy Architecture

Implemented as a single native `<details>` accordion (six numbered items:
集客/コンテンツ/計測/データ/医療情報管理/AI), not a two-column JS-driven
desktop-index/mobile-accordion split. This was a deliberate simplification
from the brief's literal "Desktop: Index左, Detail右 / Mobile: Accordion"
description: this project has already had to fix a real duplicate-DOM bug
twice (Consultation Timeline, Tomori comparison table) from rendering the
same content once per breakpoint. A responsive split that renders content
twice — once for a JS-selected desktop panel, once for a mobile
`<details>` — would reintroduce exactly that risk for a much larger
amount of content. One accordion that behaves identically at every width
gets the same practical result (numbered index, click to reveal, closed
by default) with no way to duplicate anything. Each panel reuses the
already-built, already-QA'd component content unchanged; opening a panel
was verified to render without console errors (see QA below).

## Information Density Reduction

`StrategicPremise` cut from 6 challenge items to 4 and from three labeled
blocks (Assumed Client / Primary Audience / Assumed Challenges / Growth
Objective) to two, with Research demoted from a full inline section to a
one-line pointer ("詳細は後半「調査・設計根拠」"). `GrowthEngine` cut from 8
stages (6 before Decide + 2 after) to 6 (5 before + Decide). `NinetyDay
Blueprint` shows 3–4 items per phase in the open view with the remainder
under a native `+ 詳細` disclosure, and each phase's Decision Gate is now
the Japanese question itself, not an English "Day 30 Gate —" label.
`BeautyMapInteractive`'s surrounding copy dropped from ~90 Japanese
characters of strategy explanation plus a second 2-column detail block to
a single ~35-character safety line. Net effect across the Main Story:
every chapter is now one screen-and-a-half or less on a 1440px viewport,
versus the prior version's multi-screen chapters.

## Mobile Readability

Re-screenshotted all Main Story chapters and the Supporting Strategy
index at 390px (see `review-assets/growth-strategy-v3/16-full-mobile.png`
and the per-section shots). None produce a wall of text or a wall of
cards — the timeline, business flow, and 90-day blueprint all reflow to
single-column lists with generous vertical rhythm, matching the density
already achieved in the prior QA pass. The Supporting Strategy accordion
is, if anything, more mobile-appropriate than desktop: six short rows,
nothing to read until tapped.

## Print / PDF

Re-verified against a production build (`next build --webpack` +
`next start`), not the dev server. Confirmed via
`page.emulateMedia({media:'print'})`: sticky ChapterNav hidden, Print
button hidden, and — the part specific to this rebuild — the Supporting
Strategy accordion's six `<details>` panels and the 90-Day Blueprint's
`+ 詳細` disclosures both force open under print via the existing
`.strategy-doc details:not([open]) > *:not(summary) { display: block }`
rule (already in place from the prior pass, now covering more content).
Research Basis's own disclosures were re-confirmed still working.

## Remaining Concerns

- The Beauty Map/Content Pillars/AcquisitionChannels components inside
  Supporting Strategy keep their own internal heading (e.g. "集客 — チャネ
  ルの役割") directly below the accordion's own numbered summary row
  ("01 集客"). This reads as intentional depth-on-open rather than
  duplication, but it does mean each opened panel shows two headings in
  quick succession. Not fixed in this pass — flagging in case a client
  reviewer finds it slightly redundant.
- `ChapterNav`'s `IntersectionObserver`-based active state was re-verified
  via a full progressive scroll (`window.scrollTo` in 250px steps) and
  updates correctly through all 8 states in order. An earlier report
  flagged a stale-highlight concern after jumping from bottom to top;
  that was not re-tested in this pass beyond the progressive-scroll check,
  which did not reproduce it.
- Per the brief's own §45, no cross-industry "6-work portfolio" packaging
  was attempted — this pass only edited the ÉNORA Growth Strategy page in
  isolation, as instructed.
- The Beauty Map's per-Priority "Questions to Ask" / "Prepare for
  Consultation" copy (from the prior session's pass) is original content
  for this Concept Project, not sourced from a real clinic's consultation
  script — unchanged in this pass, noted again for completeness.

## Technical QA Summary

- `npx tsc --noEmit` — clean.
- `npx eslint src/` — clean.
- `npm run build` (`next build --webpack`) — succeeds; `/growth-strategy`
  prerendered as static content.
- Playwright at 1920 / 1440 / 768 / 430 / 390 — zero console errors, zero
  `pageerror` events, zero horizontal overflow at any width.
- ChapterNav scroll-spy — verified correct through a full progressive
  scroll (all 8 states, correct order).
- Supporting Strategy accordion — verified opens without console errors;
  print-mode force-open verified for both its panels and the 90-Day
  Blueprint's detail disclosures.
- All Main Story chapters and Supporting Strategy re-screenshotted
  against the production build; package in
  `review-assets/growth-strategy-v3/`.

## Final Pass / Fail (§49)

| # | Check | Result |
|---|---|---|
| 01 | 5秒で戦略の中心が分かる | PASS — Hero + 一枚概要 |
| 02 | 15秒で問題と解決が分かる | PASS — Chapter 01/02 |
| 03 | 30秒で中核システムが分かる | PASS — Chapter 03 peak |
| 04 | 60秒で事業への接続まで分かる | PASS — Chapter 05 |
| 05 | 日本語だけでも完全に理解できる | PASS |
| 06 | 英語はBrand Accentになっている | PASS |
| 07 | 「詳しい」より先に「分かりやすい」が来る | PASS |
| 08 | Beauty Mapが最大の武器に見える | PASS — dedicated story + demo + peak |
| 09 | Beauty Map→Brief→人による相談が一目で理解できる | PASS |
| 10 | KPIが主役になっていない | PASS — moved to Supporting |
| 11 | ResearchがStoryを邪魔していない | PASS — one-line mention + Supporting |
| 12 | Privacy等の深さは残っている | PASS — unchanged content, relocated |
| 13 | Supporting Strategyで必要なら深く読める | PASS |
| 14 | 文字の壁がない | PASS |
| 15 | 大量Cardになっていない | PASS |
| 16 | Strategy Case Studyそのものが Art Directionされている | PASS |
| 17 | 発注者が「ここまで考えてくれるのか」と感じる | PASS (subjective, judged against the same bar as Industry 01) |
| 18 | これ以上削ると戦略の深さを失う | PASS — Supporting Strategy preserves it |
| 19 | これ以上足すと理解速度を落とす | PASS — no new Main Story content added |

**STRATEGY CASE STUDY COMPLETE.**
