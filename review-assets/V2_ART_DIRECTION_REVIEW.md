# ÉNORA V2 ART DIRECTION REVIEW

対象: `enora-aesthetic` (https://enora-aesthetic.vercel.app)
起点: V1完成サイトに対する「DESIGN QUALITY」特化のブラッシュアップ指示
変更範囲: 全ページの構造・タイポグラフィ・配色ペーシング・画像トリミング・モーション。ブランド戦略(SELECTIVE AESTHETICS / NOT MORE. MORE CONSIDERED. / Beauty Curator positioning / 心理導線)は変更なし。

## 1. Visual Problems Found

V1は「高級美容サイトとして正しく作れている」状態だったが、以下の意味で「Art Directorが意図的に編集した」レベルには達していなかった。

- Home全体が同じテンションで進行し、Visual Peakが存在しなかった(Heroもその他のSectionも同じ強度)。
- Sectionの多くがHeading + Text + Imageという同じ構造の反復で、Editorialというよりコーポレートサイトの見た目に寄っていた。
- Concern Explorer / Treatments / People / Journalが「均等なCard Grid」で構成され、写真の構図とレイアウトが連動していなかった。
- 全Sectionがほぼ同じ背景色(Alabaster)で、暗→明のリズムが実質NOT MOREとFinal CTAの2箇所にしかなかった。
- 見出しがほぼ全てShippori Minchoで、Medical TrustのようなClinical情報のSectionでもBrand的な明朝体のままだった。
- 下層ページ(Concerns/Treatments/Philosophy/Team/First Visit/Price/Journal/Consultation)が全ページ同一のHero構成(eyebrow → 見出し → 説明文)で、Homeだけが特別に見える状態だった。
- Treatment Detailが「Title→説明→料金目安→FAQ」という一般的なテンプレート構成で、医療情報としての整理が弱かった。

## 2. Design Changes

- **3 Act構成**: HomeをACT 01 DESIRE(Hero/Point of View/Concern Explorer) → ACT 02 SELECT(Selective Approach/Treatments/NOT MORE) → ACT 03 TRUST(Medical Trust/Consultation Journey/Space/People/Price/Journal) → Final CTAで再びEmotionへ、という設計に組み替えた。
- **3つのVisual Peak**: Hero(Peak 01, フルブリード)、NOT MORE(Peak 02, 巨大タイポの暗転Section)、Space(Peak 03, 非対称な写真だけのSection)を最大強度に設定し、それ以外のSectionは意図的に抑制した。
- **非対称グリッド**: Point of View(4/8分割)、Concern Explorer(左リスト/右可変ビジュアル)など、中央揃えではない5/7・4/8型のグリッドを採用。
- **Spacing Rhythm見直し**: `.rhythm`をclamp(88px…220px)に拡張し、Visual Peak専用の`.rhythm-peak`(clamp(96px…220px))を新設。Information Sectionは`.rhythm-tight`のまま据え置き、強弱の差を明確化。

## 3. Photography Changes

- 全画像に`desktopPosition` / `mobilePosition`(object-position)を持たせるフォーカルポイント管理を`src/lib/images.ts`に導入。Tailwindのarbitrary object-positionクラスを生成する`focal()`ヘルパーを追加し、Hero・Space・People(Director)・Treatments Lookbook等で明示的に指定。
- **画像QA事故の再発防止**: V1で「タイトルと中身が一致しない画像」を2枚出荷してしまった反省を踏まえ、今回は全ての使用中画像をブラウザで実際にレンダリングしたスクリーンショットで目視確認する工程を徹底した。その結果、既存の`handDetail`(手のクローズアップのはずが抽象的なグラデーション画像だった)を実際のブラウザ描画で発見し、実写の手の写真に差し替えた(この差し替えはHome Selective ApproachとTeamページのCare Specialist双方に影響)。
- Space SectionをFull-bleed(100%) + 非対称2枚(40%/60%)の3枚構成に再設計し、「PRIVATE / QUIET / CONSIDERED」の短いCaptionのみを添えた。

## 4. Typography Changes

- Emotion系Section(Hero/Point of View/NOT MORE/Final CTA/Philosophy Manifesto)はShippori Mincho + Bodoni Modaのserif中心を維持。
- Clinical系Section(Medical Trust / Treatment DetailのSAMPLE INFORMATION / Price)はInter(sans)の比率を上げ、Medical Trustは見出し以外ほぼsans-serifに切り替えて「Clinical Precision」を演出。
- Type ScaleをCSS変数化(`.text-hero` `.text-statement` `.text-h2` `.text-body-lg`、すべてclamp())し、Hero・NOT MORE・Section Statementにのみ大型タイポを限定使用(乱用防止)。

## 5. Layout / Grid Changes

- **Concern Explorer**: 8枚の均等Cardをやめ、左に番号付きTypographic List、右にHover/Tapで切り替わる大判画像という「Typographic Concern Index」に再設計(モバイルはタップで展開するアコーディオン)。
- **Treatments (Home)**: 5カテゴリーをLookbook形式の番号付きIndexに変更。奇数行/偶数行で画像位置を反転させ、Hoverで画像が拡大。
- **Selective Approach**: Observe(全幅画像+小さいCaption)/ Select(タイポグラフィのみ)/ Plan(分割レイアウト)と、3ステップをあえて別の構造にした。
- **People**: Medical Directorのみ大判Portrait+Philosophy、残り2名は小さいEditorial Layoutに格下げして情報の階層を作った。
- **Journal**: 1記事をFeatured(大)、残り2記事をText中心のIndexにする、Magazine Index形式に変更(Homeとジャーナル一覧ページ両方に適用)。
- **Treatment Detail**: WHO MAY CONSIDER IT / WHAT IT IS / WHAT TO DISCUSS FIRSTの3カラムを新設し、下部にSAMPLE INFORMATIONとしてTreatment Content / Cost / Duration・Frequency / Downtime / Risks・Considerations / Aftercareを医療文書的な定義リストで整理(§30の広告規制安全設計に対応)。

## 6. Pacing Changes

Section単位で背景色を切り替え、明暗のリズムを設計した(§25準拠)。

| Section | 背景 |
|---|---|
| Hero | フルブリード写真 |
| Point of View | Alabaster |
| Concern Explorer | Mineral(Surface) |
| Selective Approach | Alabaster |
| Treatments Index | Alabaster |
| NOT MORE | Deep Plum Black |
| Medical Trust | Bright White(#fbfaf7) |
| Consultation Journey | Bright White(#fbfaf7) |
| Space | Ink(Dark, 写真主体) |
| People | Alabaster |
| Price(Home teaser) | Bright White(#fbfaf7) |
| Care Journal | Alabaster |
| Final CTA | Deep Plum Black |

## 7. Mobile Art Direction

- Hero/Space/Treatment Detailなど主要Sectionのフォーカルポイントをdesktop/mobileで個別設定。
- Concern Explorerはモバイルでは右側の可変ビジュアルを廃し、タップで説明とリンクを展開するアコーディオンに変更(デスクトップと同じ情報だが、モバイルは横並びパネルを持てないため別UIにした)。
- Consultation Journeyはデスクトップの横長ラインをやめ、モバイルは縦タイムラインでDecideのみ視覚的に拡大。
- Mobile Sticky CTAを高さ54pxに縮小し、「悩みから探す / 相談予約」の静かな2分割テキストリンクに変更(従来の大きい2ボタンから縮小)。
- HeaderはHomeのみ、Hero上でTransparent→Scroll後Alabaster+Blurへ切り替わる仕様を実装(他ページは常時Alabaster)。

## 8. Medical UX Improvements

- Treatment DetailにWHO MAY CONSIDER IT / WHAT IT IS / WHAT TO DISCUSS FIRSTを新設し、施術ごとにRisks / Considerations・Aftercareを必須項目として明記(§30の医療広告安全設計に準拠。保証表現・誇大表現・架空症例は不使用)。
- Peopleセクション・Teamページ双方に「※『ビューティー・キュレーター』はÉNORA内部の役割上の呼称であり、医療資格の名称ではありません」の注記を追加(§17指摘対応)。
- Medical Trust SectionをBright/Sans-serif中心に切り替え、Emotion Section群から視覚的トーンを明確に分離。

## 9. Reference Analysis

再確認した6サイト(La Prairie / ALCHEMĒ Health / NuuSkin / COSMO FINART / Beauty On Clinic Ginza / Augustinus Bader)との比較観点:

- **Photography Scale**: 参照サイト群はHeroや大判Sectionで写真を大胆に使うが、ÉNORAはFull-bleed Heroとフォーカルポイント指定でこれに近づけつつ、5カテゴリー分の商用ロケ写真がないため、Lookbook Index全体を写真主体にはしていない(コンセプトプロジェクトの制約として妥当と判断)。
- **Whitespace / Dark-Light Pacing**: NOT MORE・Space・Final CTAの3点暗転と、Medical Trustの白抜けSectionにより、参照サイト群にある「暗→明の切り替えでモードが変わる」体験を再現。
- **CTA Restraint**: 参照サイト群同様、Final CTAをボタンではなくText+Line CTAに変更。
- 模倣ではなく、これらの観点を「原則」として抽出し直した結果、レイアウト・配色・タイポグラフィはÉNORA独自のまま(参照サイトの配色・ロゴ・写真は一切使用していない)。

## 10. Removed Generic / AI Design Patterns

- Concern Explorer / Treatments / Journalの均等Card Gridを廃止。
- Rounded Card、Gold装飾、ピンク/ベージュ単色サイト、Doctor+White Coat+満面の笑顔、全Section中央揃え、全部同じ写真比率・同じAnimationのいずれも不使用(§33チェックリスト全項目確認済み)。
- `order`ユーティリティで画像位置を反転させていたTreatments Lookbookの実装バグ(不均等トラック幅のグリッドで`order`を使うと、要素が意図しないトラック幅を継承し、画像が巨大化・テキストが圧縮されて折り返す)を発見し、明示的な`col-start`指定に置き換えて修正。

## 11. Remaining Concerns

- 5カテゴリーの施術Lookbookに使っている画像は、ÉNORA独自の商用撮影ではなくストック写真の転用(コンセプトプロジェクトの制約)。実案件化する場合は同一カメラマン・同一ロケでのシリーズ撮影に差し替えるべき。
- Concern Explorerの可変ビジュアルは5カテゴリー分の画像を8つの悩みで使い回している(1カテゴリーに複数の悩みが紐づく)。悩みごとに専用カットがあるとさらに説得力が増す。
- Medical Trust / Consultation Journeyで使っている`#fbfaf7`は`--color-base`(#f2efea)とは別の即席の明色で、デザイントークンとして正式に登録していない(グローバルCSSへの追加は今回見送った)。将来的にトークン化を検討。
- Playwright実機QAはChromiumのみ(Desktop 1440/1920, Tablet 768, Mobile 390/430)。Safari/Firefoxでのobject-position・backdrop-filterの挙動は未検証。

## 12. Human Art Director Review Points

- Treatments Lookbookで使用している5枚(肌質・透明感毛穴・輪郭・予防的ケア・身体コンディション)の写真選定が、カテゴリーの世界観として適切か最終確認をお願いしたい。
- Medical Trust / Consultation JourneyのBright White(#fbfaf7)が、Alabaster(#f2efea)との差として十分に感じられるか、実機での色確認をお願いしたい。
- Home全体のスクロール尺(約16,000px)が長くなっているため、初見クライアントには「NOT MOREまでで世界観、そこから先はTrust」と案内する運用が現実的。
