# ÉNORA FINAL REVIEW

対象: `enora-aesthetic` (https://enora-aesthetic.vercel.app)
起点: V2(Art Direction)完成サイトに対する「PRECISION」特化のブラッシュアップ指示。
V2で確立した3幕構成・3つのVisual Peak・Typographic Concern Index・Treatment Lookbook・Medical Trust・Consultation Journey・Typography・Color Palette・Photography Direction・Motion Familyは維持し、今回はデザインを追加/派手にするのではなく、業界理解・顧客心理・相談体験としての精度を上げることに集中した。

## 1. Strategic Inconsistencies Fixed

- **Concern → Treatmentの機械的な1対1対応を廃止**。`Concern`型を`categoryId: string`から`possibleDirections: Direction[]`へ再設計し、8つの悩みすべてに複数の方向性(カテゴリーへのリンク、または「Lifestyle / Consultation」という非Treatment方向)を持たせた。「目元」は brief の例示どおり Skin Quality / Contour / Lifestyle・Consultation の3方向、「疲れた印象」は`consultFirst: true`フラグを立て、CONSULT FIRSTバッジ付きでTreatmentへ直結させない設計にした。
- **CTA文言の統一**。「正式なお見積りを相談する」「費用について相談する」など、同じ行動(カウンセリング予約)に対して異なる文言が生じていた箇所を、Primary CTAはすべて「カウンセリングを予約する」に統一。Soft/Explorationの役割分担(相談する／悩みから探す)は維持。
- **Show, Don't Tellの徹底**。Price PageのCTAをボタンの見た目に合わせて文言統一する等、Brand Claimをコピーで繰り返すのではなく、実際のUI(Concern Directions・Price Architecture・Form)で証明する方向に寄せた。Home本文は意味のある削減余地が乏しかったため、無理な削減はしていない(brief §21の「無理に削らない」を優先)。

## 2. Medical Information Improvements

- **架空の医学的メカニズム表現を全面的に削除**。5施術すべての`whatItIs`/`content`を「〜を整える」という作用機序っぽい説明から、「〜について相談するケースを想定したConcept Project上のサンプルTreatmentです」という情報設計の見せ方の説明に書き換えた。「水分保持力を整える」のような、架空施術なのに実在の美容医療技術のように読める表現は、Concern側の`possibleDirections`のnoteも含めてすべて置き換えた。
- **Treatment DetailにOVERVIEWラベルを追加**し、WHO MAY CONSIDER IT / WHAT IT IS / WHAT TO DISCUSS FIRST の3カラムはそのまま維持。
- **SAMPLE INFORMATIONにSample Standard Priceを追加**(Cost表記から変更)。Treatment Content / Sample Standard Price / Duration・Frequency / Downtime / Main Risks・Side Effects / Aftercareの6項目を維持し、すべて「Illustrative Sample」であることを明示。
- **統一されたCONCEPT MEDICAL INFORMATIONコンポーネントを新設**(`src/components/ConceptMedicalInfo.tsx`)。Treatment DetailとPriceページのページ末尾に共通で配置し、ページごとに異なる免責文言が散在する状態を解消。内容は「Concept Project」「架空Treatment」「Sample Price」「実案件では医師監修情報へ置換」「最新の関連ガイドライン等を確認して制作」の5点に統一。

## 3. Price Transparency Improvements

- **¥/¥¥/¥¥¥の相対表示を廃止**し、5カテゴリーすべてに実案件を想定したSample Standard Price Rangeを設定(例: 肌質 ¥22,000–¥38,000、輪郭 ¥45,000–¥85,000)。すべて「Illustrative Sample」「CONCEPT PROJECT ONLY」の明示付き。
- **Price Pageの冒頭コピーを、実在クリニックのような振る舞いをする文言から変更**。「実際の料金はカウンセリング時に個別の施術内容に応じて提示します」(実在クリニックのような予約導線の言い方)を、「本ページの価格は、料金情報の見せ方を示すためのConcept Sampleです。実案件では、各施術の標準的な費用・追加費用の条件等を、クライアント提供情報に基づいて明示する想定です」という、Concept Projectとしての立場を明確にした表現へ差し替え。
- Treatment Detail側のSample Standard PriceとPrice Page側のSample Price Architectureは、同じカテゴリー単位のレンジを共有し、サイト内で金額の矛盾が起きないようにした。

## 4. Concern Journey Improvements

- Concerns Pageを「Care Direction(単数・断定)」から「POSSIBLE DIRECTIONS(複数・状況依存)」の表示へ再設計。各悩みに「なぜ人によって方向が異なるか」の一文(`variesBecause`)を追加し、複数の方向性を番号なしリストで提示。カテゴリーに紐づく方向はTreatmentsページへリンク、紐づかない方向(Lifestyle / Consultation)はリンクなしのプレーンテキストとして区別。
- Home Concern Explorerの動的ビジュアルは、旧来の「カテゴリー由来の画像」から「悩みごとの画像」(`concernVisual`)に変更し、Concern自体がもう単一カテゴリーを持たないという データモデルの変更に追従。
- 「疲れた印象」のコピーを、身体コンディションと印象の因果関係を断定する表現から、「睡眠や生活リズムなど、美容施術以外の要因も含めて整理する必要があります」という慎重な表現に修正し、Treatmentへの直結を避けた。

## 5. Consultation UX Improvements

- ConsultationFormに**「避けたいこと」**(複数選択、7項目: 大きな変化・長いダウンタイム・頻繁な通院・不明確な予算・施術未決定・注入系・まず話だけ)を追加。「何を選ぶか」だけでなく「何を選ばないか」までUXに組み込み、Beauty Curatorという Positioning をフォーム設計そのものに反映した。
- **「今回いちばん大切にしたいこと」**(単一選択、Natural Result / Minimal Downtime / Budget Clarity / Long-term Plan / Privacy / Not Sure Yet)を追加。
- ネイティブの`<select multiple>`(操作性が悪くAccessibility上も問題があった)をチェックボックス/ラジオボタングループに置き換え、操作性を改善。
- **Demo Completion画面を刷新**。単なる送信完了メッセージから、実際に入力された内容を集計する「YOUR CONSULTATION BRIEF」(MAIN CONCERN / AVOID / PRIORITY)へ変更。Playwrightでフォーム入力→送信→Brief内容の一致をDOM経由で確認済み(`肌の質感 / 乾燥`, `長いダウンタイムは避けたい`, `自然な変化`が正しく反映されることを検証)。

## 6. Copy Refinements

- Team用語を整理。「ケア・スペシャリスト / Care Specialist」を医療資格と誤認されにくい「ケア・コーディネーター / Care Coordinator」に変更。Beauty Curator/Care Coordinatorの役割説明を「相談内容の整理・ご案内」に限定し、「施術の医学的な適応判断は医師が行います」を両ロールの説明文とPeopleセクション/Teamページの注記に明記。
- Medical Directorのプロフィールに**CONCEPT PROFILE**タグを追加(Home People / Teamページ両方)。架空の学会・資格・症例数を作らない方針を維持しつつ、「これはConcept上のプロフィールである」ことを視覚的にも明示。
- Navigation labelの`practitioner`(英語小文字、他の日本語ラベルと不統一)を`チーム`に統一(Header・Footer・Home CTA文言すべて)。Teamページのeyebrowも`Practitioner`から`Our People`に変更。
- First Visitの「必要な範囲だけをお客様ご自身が選びます」を、カスタマーサービス的な「お客様」表現から「必要な範囲を、相談しながらご本人が選びます」という医療相談として落ち着いた表現に変更。
- Journalの役割を「Blog」から「Pre-Consultation Decision Support」として明確化。各記事末尾に RELATED CONCERN / RELATED TREATMENT CATEGORY / CONSULTATION の3方向リンクを追加し、全記事がConsultationへの一直線ではなく複数の次の一歩を提示する構造にした。

## 7. Photography System Audit

- `review-assets/v3/image-contact-sheet.png` に、サイトで使用中の9枚すべてを3×3グリッドで並べた画像を生成し、一枚単位ではなくセット全体で確認した。
- 確認観点(Skin Tone / White Balance / Contrast / Saturation / Lighting Direction / Editorial Quality / Age Diversity / AI Feel / Background Tone)で監査した結果、**最も浮いていた1枚(curtainLight)を特定して交換**。旧画像は他8枚がすべてカラー写真である中で唯一モノクロ/脱色されており、コンタクトシート上で明らかに別の撮影セットに見えた。同じ「窓辺の柔らかい光」というモチーフを保ちながら、暖色系のカラー写真に差し替えた(実在確認済み、Unsplash+のプレミアム画像ではないことを確認)。
- 残る注意点として、`skinDetail`(やや彩度の高いオレンジ寄り)と`eyeDetail`(艶感の強いビューティー撮影寄りのトーン)がセット内でわずかに浮いて見える。CSS Filterによる強制的な色統一はせず(brief §17の指示どおり)、次の交換候補として §11 に記載した。
- 色の統一はCrop/Overlay/選定の優先順位で対応し、肌色を不自然に加工するFilterは使用していない。

## 8. Accessibility

WCAG 2.1 AAのコントラスト比(4.5:1、装飾要素は3:1)を実際に計算し、以下を修正した。

- **`--color-accent`(#9b7e86)をテキスト色として使うと、Alabaster背景で約3.2:1、Mineral Surface背景で約2.6:1しかなく、通常テキストの4.5:1基準を大きく下回っていた**。`.eyebrow`のラベル(Concerns/Treatments/Philosophy等、サイト全域で使用)がすべてこれに該当。ink寄りに濃くした`--color-accent-text`(#67545a、Surface上で4.95:1)を新設し、テキスト用途の`text-accent`をすべて`text-accent-text`に置換(28箇所)。境界線・ドット・Hover下線など非テキスト装飾用途はWCAG 1.4.11(3:1基準、accentは3.2〜4.49:1で適合)のため元の`--color-accent`のまま維持。
- **`text-ink/35`〜`/60`が本文・ラベルとして使われている箇所は軒並みAA基準未達**(`/45`で2.87:1、`/55`で3.85:1など)だったため、装飾的な採番(「01」「02」のようなデザイン上のインデックス数字)を除く実質的なテキストをすべて`/65`(5.29:1以上)に引き上げた(21ファイル、約90箇所)。
- Footer・Space Section・Teamページヒーローなど、暗い背景/写真の上に載る`text-metal`・`text-base`の低不透明度指定も再計算し、`/60`〜`/80`を`/80`〜`/95`へ引き上げ、写真上のキャプションには`text-shadow`を追加して実際の写真内容に左右されない可読性を確保した。
- ConsultationFormの`<select multiple>`(操作性が低く、キーボード/スクリーンリーダー双方で扱いにくい)をチェックボックス/ラジオボタン群に置き換え、操作性を改善(§6と同じ変更、Accessibility上の理由も兼ねる)。

## 9. Mobile QA

Desktop 1440 / 1920、Tablet 768、Mobile 390 / 430の5解像度でPlaywright実機確認を実施(`review-assets/v3/full/`)。

- 新設したConsultationFormのチェックボックス/ラジオボタン群は、モバイルでも1カラムに自然に折り返し、タップ領域も十分な大きさで表示されることを確認。
- Concerns Pageの複数方向性リストは、モバイルでもカード化せず、番号なしリストのまま可読性を保って表示されることを確認。
- 全ページ・全解像度でコンソールエラー・横スクロールともに検出なし(`review-assets/v3/qa-errors.txt`)。
- Consultation Complete(YOUR CONSULTATION BRIEF)画面も5解像度でスクリーンショット取得済み。

## 10. Concept Project Transparency

- Price Pageの冒頭コピーを、実在クリニックのような振る舞いを避ける表現に修正(§3参照)。
- CONCEPT MEDICAL INFORMATIONコンポーネントをTreatment Detail・Priceページに統一配置し、「Concept Project」「架空Treatment」「Sample Price」「実案件では医師監修情報へ置換」の4点をページごとにばらつきなく明示。
- Medical DirectorにCONCEPT PROFILEタグ、Beauty Curator/Care Coordinatorに医療資格ではない旨の注記を追加し、人物面でも透明性を強化。
- テストデータ(口コミ・症例Before/After・実績数値)は引き続き一切追加していない(brief §28 No Testimonialsを維持)。

## 11. Remaining Concerns

- `skinDetail`と`eyeDetail`の色調(彩度・艶感)が、セット全体の落ち着いたトーンよりやや目立つ。今回は交換せず「監視対象」とした(§7参照)。実案件化する際は、この2枚を含めて同一カメラマン・同一ライティングでの再撮影を推奨。
- Sample Standard Price(¥22,000〜¥85,000のレンジ)は、日本の美容医療市場の一般的な価格帯を参考にしたConcept Project上の例示であり、実在クリニックの調査データに基づくものではない。実案件では必ずクライアント提供の実価格に置き換える。
- ConsultationFormの「避けたいこと」「今回いちばん大切にしたいこと」はデモ用にクライアントサイドで完結しており、実際の送信・保存は行われない(既存のDEMO FORM表記のとおり)。
- Accessibility監査はコントラスト比の計算的検証にとどまり、スクリーンリーダーでの実機読み上げ確認までは行っていない。

## 12. Human Review Points

- Sample Standard Priceの具体的なレンジ(カテゴリーごとの¥22,000〜¥85,000等)が、ターゲット顧客層(30〜45歳・価格感度Low〜Middle)の期待値と合っているか、実際の市場感覚での最終確認をお願いしたい。
- Concernの`possibleDirections`(特に「目元」の3方向、「疲れた印象」のConsult First扱い)が、実際のカウンセリング現場の感覚と整合しているか、医療監修的な視点でのレビューをお願いしたい。
- `skinDetail`/`eyeDetail`の交換要否について、コンタクトシート(`review-assets/v3/image-contact-sheet.png`)を見たうえでの判断をお願いしたい。
