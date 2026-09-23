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

---

## Addendum: Final Cleanup Pass (Freeze)

Scope of this pass: no new strategy, no new sections, no new diagrams —
only finishing the Japanese-first language work inside Supporting
Strategy (詳細設計), fixing hybrid Japanese/English sentences in the Main
Story, and adding brand-term glosses on first use. The approved 7-chapter
Main Story, the one-page overview, and the Beauty Map → Brief → Human
peak were **not** touched structurally.

### Japanese-first pass on Supporting Strategy

Translated every remaining English UI label/list inside 詳細設計 that
wasn't a genuine brand or industry term:

- Acquisition Channels: role labels (`Active Problem Discovery` →
  悩みを検索している段階, `Decision Environment` → 判断材料を確認する場所, etc.),
  destinations (`DESTINATION —` → 主な導線 —), and the underlying
  `channels.ts` detail copy.
- Intent Journey: stage levels (`LOW/MIDDLE/HIGH INTENT` →
  まだ情報収集中/自分の基準を整理中/相談を検討中), stage verbs (`Explore/Define/
  Consult/Decide/Continue` → 探る/整理する/相談する/決める/続ける), and item lists.
- KPI Tree: the tree's own node labels (`Qualified Traffic` → 質の高い流入,
  `Sustainable Growth` → 持続的な成長, etc.), the headline (`Treatment
  Conversion Rate` → 施術成約率), `CAPACITY/ECONOMICS GUARDRAIL` labels, and
  the growth formula itself (`GROWTH = QUALITY × CAPACITY × ECONOMICS` →
  `成長 = 質 × 受け入れ能力 × 収益性`).
- Decision Quality Signals: group labels (`BEFORE/DURING/AFTER
  CONSULTATION` → 相談前/相談中/相談後, matching Chapter 04's own vocabulary
  exactly) and the outcome list (`Proceed/Consider/Not Now/No Treatment` →
  進める/考える/今はやらない/施術しない).
- Privacy by Design: the four principle titles (`Collect Less` →
  少なく集める, etc.), the three data layer names, and `THREE SEPARATE DATA
  LAYERS` → 3つに分けて扱うデータ.
- Clinical Content Governance: the six workflow steps (`Draft` → 下書き,
  `Medical Review` → 医師レビュー, etc.) and the seven content-type tags.
- AI section: `AI MAY HANDLE` / `HUMAN HANDOFF — REQUIRED` / `WHEN TO
  IMPLEMENT` labels and their three lists, fully translated.
- Bottleneck Prescription: case titles (`Low Discovery` → 認知が少ない, etc.),
  `SIGNAL/RESPONSE` → 兆候/対応, `NOW/NEXT/LATER` → 今すぐ/次に/後で, and the
  full "やらないこと" list.
- Decision Rules, Nurture, Content Pillars, 90-Day detail items, Research
  Basis labels (`POPULATION/FINDING/WHY IT MATTERS/SOURCE` → 対象/確認できた
  こと/この戦略への示唆/出典) — all translated on the same principle.

### Hybrid-sentence fixes in the Main Story

- BusinessSystemLenses: "良いGrowthは" → "良い成長は".
- NinetyDayBlueprint: "Scaleの判断は" → "拡大の判断は"; "Scaleは、判断である。" →
  "拡大は、自動では決めない。"
- ClinicalContentGovernance heading: "Treatment・Price・Riskの情報は" →
  "施術・価格・リスクの情報は".
- IntentJourney: "Consultationへ押し込まない" → "相談へ押し込まない".
- ValidationSection: the "MORE BOOKINGS ARE NOT ALWAYS BETTER." headline
  and its body sentence both rewritten in Japanese ("予約が増えることが、常に
  よいとは限らない。" / "…数ではなく、受け入れ体制・質・収益性まで確認して優先順位を決める。").
- QualifiedConsultation: dropped the bare "Qualifiedとは、" heading opener
  (redundant with the eyebrow above it) and translated "Better Prepared
  Consultation" / "High Value Lead" language throughout.
- DifferenceFromTomori: axis labels (Problem/Strategy/Growth Asset/Growth
  Loop → 課題/戦略/成長資産/成長循環) and both industries' loop descriptions
  translated to Japanese, matching Chapter 07's own established wording
  (判断 → 体験 → 信頼 → 次の相談).
- capacityRules.ts / decisionRules.ts / validation.ts: nouns translated
  (Booking Completion率 → 予約完了率, Doctor Capacity → 医師の受け入れ, Lead
  Quality → 問い合わせの質, Treatment Fit → 施術との適合, etc.) while keeping
  `IF`/`AND`/`THEN` as the established structural connector tags.

### Brand-term first-mention gloss

"Consultation Brief" now carries a one-time Japanese gloss at its true
first occurrence in reading order — the "この戦略を一枚で" overview's row 03
now reads "Beauty Map → Consultation Brief(相談前の整理内容) → 人による相談" —
rather than at a later, less prominent mention.

### Beauty Map UI controls

Per §10's own instruction to prioritize design consistency: translated
the interactive demo's functional navigation controls to Japanese
(`← Back` / `NEXT →` / `RESET` → `← 戻る` / `次へ →` / `最初からやり直す`) and its
result-screen field labels (`CONCERN/AVOID/PRIORITY` → 気になること/避けたい
こと/大切にしたいこと, `QUESTIONS TO ASK` → 相談で聞きたいこと, `PREPARE FOR
CONSULTATION` → 相談前に準備すること) — these are controls the user directly
operates, not stylized screen-mockup chrome. Left as English, deliberately:
the "Screen 01" corner label and the question headlines themselves
(`WHAT CONCERNS YOU?` etc.), which function as an intentional app-mockup
visual style, consistent with how the rest of the demo's frame is styled.

### What was deliberately left as English

- Brand/system names: SELECTIVE BEAUTY MAP, Consultation Brief, SELECTIVE
  AESTHETICS, DECISION QUALITY GROWTH, BETTER DECISIONS. BETTER GROWTH.
- Signature statements functioning as brand voice, not labels: "AI AFTER
  CLARITY. NOT BEFORE.", "WHEN IT BECOMES MEDICAL, HAND IT TO A HUMAN.",
  "VALUE BEFORE CAPTURE.", "TOO MUCH INFORMATION. TOO LITTLE CLARITY."
- Genuine industry/tool terms per §05: SEO, CRM, CRO, CAC, Analytics,
  Search Console, AI, and the DATA/HYPOTHESIS/STRATEGY/SAMPLE `ClaimTag`
  labels — the last of these now carry a small Japanese gloss
  (データ/仮説/戦略判断/例) directly in the tag itself.
- Literal technical identifiers: the `measurementEvents` analytics event
  names (`Beauty_Map_Start`, etc.) — these represent implementation-level
  identifiers, not reader-facing copy.
- Content Pillars' four pillar titles (UNDERSTAND YOUR CONCERN/CHOICE/
  RISK/PRIORITY) — kept as an intentional lettered (A/B/C/D) naming
  convention, not flagged in the brief's own examples.

### QA re-verification after this pass

- `npx tsc --noEmit` — clean.
- `npx eslint src/` — clean.
- `npm run build` (`next build --webpack`) — succeeds.
- Playwright at 1920/1440/768/430/390 — zero console errors, zero
  overflow.
- Beauty Map keyboard interaction re-verified with the new Japanese
  button labels (focus → Enter/Space selects, Tab → 次へ advances).
- All six Supporting Strategy panels opened and screenshotted individually
  to confirm the translated content renders correctly with no layout
  breakage.
- Print-mode force-open re-verified (`.strategy-doc details:not([open])`
  rule) — unaffected by this pass, still working.

### Final Freeze Checklist (§11)

| # | Check | Result |
|---|---|---|
| 1 | 5秒で中心戦略が分かる | PASS |
| 2 | 30秒でBeauty Mapまで分かる | PASS |
| 3 | 60秒で事業との接続まで分かる | PASS |
| 4 | 日本語だけ追って理解できる | PASS — Supporting Strategy now fully Japanese-first |
| 5 | 必要なら詳細まで読める | PASS — 詳細設計 accordion, unchanged structurally |
| 6 | Mobileで文字の壁がない | PASS — re-verified, no regressions from this pass |
| 7 | Brandの世界観を壊していない | PASS — brand/system names and signature lines preserved |
| 8 | Concept Projectだと明確 | PASS — badge + footer disclaimer unchanged |
| 9 | Build / Lint / Typecheck正常 | PASS |
| 10 | 実ブラウザQA正常 | PASS |

## INDUSTRY 02 — GROWTH STRATEGY FROZEN

Per this session's explicit instruction: no further optimization passes
on this page unless a real bug, a material factual error, or a
whole-portfolio integration requirement surfaces. Next work moves to
Industry 03.
