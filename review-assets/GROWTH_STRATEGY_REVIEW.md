# ÉNORA GROWTH STRATEGY REVIEW

対象: `/growth-strategy` (https://enora-aesthetic.vercel.app/growth-strategy)
Industry 02の Growth Strategy Concept。灯森工務店(Industry 01)のStrategyページとComponent Logicは一部共有しつつ、Visual DirectionとGrowth Modelそのものは完全に別設計とした。

## Strategic Thesis

中心思想は **DECISION QUALITY GROWTH**。「予約を増やす前に、判断の質を上げる。」

一般的な美容医療Growthの型(広告→LP→予約→Treatment)を採用せず、Content→Concern
Discovery→Decision Support→Trust→Consultation Brief→Consultation→Informed
Decision→Continuityという、UNCERTAINTY→CLARITYを設計するモデルにした。Booking
Volumeを唯一の上位Objectiveにせず、Consultation
Quality・Show-up Rate・Decision Clarity・Repeat・Gross Profitまで含めて見る設計にしている(Strategic
Premise / KPI Treeに反映)。

## Research Basis

3つの外部情報源を、数値の捏造なしで引用。

- ジャストシステム「美容医療・美容整形に関する調査」(2026) — 公式サイトが主要情報源の上位、SNSも重要な接点。
- 矢野経済研究所「美容医療の消費者調査」(2025–2026) — 価格の明瞭さが施設選びで重視される。
- 厚生労働省の医療広告関連ガイドライン等 — 自由診療における治療内容・リスク・標準的費用の情報提供の重要性。

いずれも定性的な記述にとどめ、出典が持たない具体的なパーセンテージ等は創作していない。各項目に出典・年を明記(`DATA`タグ)。

## Growth Engine

DISCOVER→EXPLORE→UNDERSTAND→DEFINE→TRUST→CONSULT→**DECIDE**→CONTINUE→ADVOCATEの一本の縦Journeyとして実装(円環図は不使用)。DECIDEのみTypographyを大きくし(32〜38px)、丸マーカーも塗りつぶして視覚的に強調。最後の到達点を「買う」ではなく「決める」にする、というbrief §08の指示をそのまま構造化した。

## Acquisition

Search / Instagram / Official Website / Local Search / Referralの5チャネルに限定し、TikTok・YouTube・大量広告は初期段階で扱わないことを明記。各チャネルにRole・Detail・Destinationを1セットずつ持たせ、チャネル数の拡張ではなく役割の明確化を優先する設計にした。

## Content System

4 Pillars(Understand Your Concern / Understand the Choice / Understand the Risk / Understand Your
Priority)。SEO記事の量産ではなく、Treatment名より先に確認したい問いへの回答として設計。各Pillarに実例タイトルを2〜5本添えた。

## Selective Beauty Map

このページ最大のPortfolio
Asset。5画面(WHAT CONCERNS YOU? → WHAT DO YOU WANT TO AVOID? → WHAT MATTERS
MOST? → YOUR BEAUTY PRIORITIES → YOUR CONSULTATION
BRIEF)を、実際に動いているツールのように見えるMockupとして実装(チェックボックス・ラジオボタン・進捗ドットまで再現)。「おすすめの施術は◯◯」という診断結果は一切出さない。NOT A
DIAGNOSISの明記を隣接配置し、最終判断はMedical Professionalが行うことを明示。

最後の画面(YOUR CONSULTATION
BRIEF)は、既存Websiteで実装済みのConsultation Brief機能(MAIN CONCERN / AVOID /
PRIORITY)とそのまま接続する設計にし、Mockupで終わらせず実装済み資産へ橋渡しした。

## Consultation System

予約完了をゴールにせず、BEFORE(Beauty Map・Consultation
Brief・First Visit情報)→DURING(Listen・Discuss・Decide)→AFTER(Summary・Consider・Follow-up)を一本の時間軸として可視化(brief
§46の指示どおり3枚Cardにしていない)。Consultation
Outcomeとして Proceed / Consider / Not Now / No Treatment
をすべて正常なDecisionとして扱い、即決しなかった相手への追い込み(Discount・Deadline)を明示的に禁止した。

Nurture Sequenceは「Decision Sequence」として6通のメッセージを設計し、LINEを前提にせずEmail
/ 実案件のCRMチャネルを使う想定にした。

## Continuity

Continuity by
Relevance(Aftercare→Follow-up→Review→Long-term
Plan)として、「通わせる」という思想を明示的に排除。RetentionはRepeat率の最大化ではなく、Repeat
When Appropriate / Follow-up Completion /
Patient Experienceで評価する設計にした。Referralは紹介特典ではなく「ここは何でも勧めてこなかったよ。」という信頼体験そのものを中心Messageとした。

## AI Strategy

Phase 1では導入しない。導入する場合の役割はAI Decision
Navigatorに限定し、Diagnosis / Treatment
Recommendation / Risk Judgment / Medical
Adviceは明示的に禁止。「AI AFTER CLARITY. NOT
BEFORE.」を大きなCopyとして、AIを入れないという判断ができることを見せるデザインにした。導入条件(FAQ
Data・Consultation Data等)も明記。

## KPI Design

最上位をSustainable
Growthとし、Treatment Conversion Rate単体を最大化するTreeにしていない(「No
Treatment」も適切なDecisionになり得るため)。Qualified Traffic → Decision Support →
Consultation Brief → Qualified Consultations → Appropriate Treatment
Decisions → Gross Profit → Sustainable
Growthの7段構成。Website Measurement Eventsも設計のみ提示し、架空の実測データは一切生成していない。

## 90 Day Blueprint

Day 0–30 UNDERSTAND(Analytics・Booking Data・Capacity等のBaseline取得)→Day
31–60 CLARIFY(Concern Journey・Price情報・Beauty
Map・Consultation Brief整備)→Day 61–90
CONNECT(Nurture・Pre-consultation・CRM設計・初期CRO)。Scale判断(SEO
Scale・Instagram Scale・Paid Ads・AI)はこの90日のデータを見てから行うことを明記し、「最初から広告」ではない設計であることを視覚的にも示した。

## Medical / Ethical Safeguards

- Beauty MapはNOT A DIAGNOSISを明記し、Treatment推薦・適応判断を行わない。
- Consultation Outcomeで「No Treatment」を正常な結果として扱い、Discount / Deadline / 追い込みを明示的に禁止。
- AI SectionでDiagnosis・Treatment Recommendation・Medical Adviceを明示的に禁止。
- Referralセクションで架空Reviewを作らないこと、紹介施策の医療広告上の扱いは実案件で確認する前提であることを明記。
- 全体を通じて、Fake Testimonial・Before/After・症例数・No.1表現などは一切使用していない(brief §27 DO NOT ADD準拠)。
- ページ末尾のStrategyFooterで、数値記述には出典を明記していること・実案件では医師監修情報等に置換する前提であることを統一して開示。

## Design System

- Emotion 30 / Logic 70。Website本体(Emotion 65 / Logic
  35)より分析的なトーンに転換しつつ、Corporate Consulting
  Deck化を避け、円グラフ・ドーナツグラフ・カラフルな棒Chartは一切使用していない。
- Visual Grammarを FLOW(Growth Engine / Continuity Loop)・MATRIX(Decision
  Rules)・INDEX(Validation / Acquisition / Content
  Pillars)・MOCKUP(Selective Beauty
  Map)の4種類に限定(brief §54準拠)。
- Typography: Brand/Emotion要素はBodoni
  Moda(Display Serif)、Data/System要素はZen Kaku Gothic
  New(Sans)+ Inter。Chapter Divider番号はBodoni、Chapter
  Labelは Inter大文字トラッキングで、Emotion⇄Systemの切り替えをTypographyだけでも表現。
- Color: Website本体のMuted
  Mauve使用量をさらに削減し、Alabaster・Ink・Rule
  Lineを主役に。Deep Plum
  Blackを3つのVisual Peak(Market Tension / Growth
  Loop、Websiteと同じ暗転パターン)にのみ使用。
- Motion: Opacity(FadeText)・Line/Image Reveal(ImageReveal)・Subtle
  Translate(Reveal)の3ファミリーのみ使用。Animated Counter・Parallax・Scroll
  Hijackingは不使用。DifferenceFromTomoriの比較Tableは意図的に無Animation(brief
  §57「動かないSectionも作る」に対応)。

## Difference from TOMORI

ページ末尾に、Problem / Strategy / Growth
Asset / Growth Loopの4軸比較Tableを設置。灯森(検討期間を設計する / 10 Years Later Home
Plan / Product→Content→Next
Customer)とÉNORA(判断品質を設計する / Selective Beauty
Map / Decision→Experience→Trust→Next
Relationship)が、Colorだけでなく思考・UX・Growth
Modelそのもので異なることを、比較した瞬間に分かる構成にした。

## Mobile

390px / 844pxでフルページ確認済み(横スクロール・コンソールエラーともに検出なし)。特に確認した箇所：

- Selective Beauty
  Mapの5画面Mockupは横スクロールCard群として実装(ページ全体の横スクロールは発生しない、Card群のコンテナ内のみでスクロール)。
- Difference from
  Tomoriの比較Tableは、Mobileでは横スクロールTableではなくAXISごとのスタックCardへ作り分けている(横スワイプなしで全項目を読める)。
- Consultation System Timelineは、Desktop横軸→Mobile縦Timelineへ明示的に作り分け(Desktop Diagramの単純な縮小はしていない)。
- Chapter Navは Desktop
  Fixed縦Nav → Mobile Sticky横スクロールStripへ切り替え(Website本体のChapterNavと同じComponent
  Logic、Visual StyleはÉNORA仕様に変更)。

## Print

`@media print`で`.no-print`要素(ChapterNav・PrintButton・Header・Footer等)が実際に非表示になることをPlaywright(`emulateMedia`)で確認済み。PDF出力(`page.pdf()`)も正常に生成されることを確認(232KB)。`.strategy-doc > div`と`table`に`break-inside:
avoid`を適用し、Section・比較Tableが印刷時にページ途中で分断されにくいようにした(完全な保証ではなく、一般的なブラウザのprint実装に依存する)。

## Remaining Concerns

- Research
  Basisの3件は、ブリーフで提示された定性的な要約をそのまま採用している。実案件では、各調査の原文・調査年・サンプルサイズ等を一次資料で再確認したうえで引用する。
- KPI Tree・Measurement
  Eventsは構造のみを示すDesignであり、実測データ・目標数値は一切含まれない(意図的な仕様)。
- Selective Beauty
  Mapは静的なMockupであり、実際にインタラクティブに動作するToolではない(Growth Strategyページとしての意図どおり)。
