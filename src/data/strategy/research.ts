// External research basis (brief V2 §08/§09). Every entry was checked
// against its actual source before inclusion — one citation from the
// original brief (a JustSystems survey) could not be verified to exist
// via search and had no locatable source page, so it was dropped rather
// than kept on the strength of the brief alone. "Key Finding" only
// states what the linked source itself states; where a source's full
// content sits behind a paid report we don't have access to, the entry
// says so instead of asserting a finding we can't check.
export type ResearchItem = {
  no: string;
  organization: string;
  report: string;
  published: string;
  population: string;
  sampleSize: string;
  finding: string;
  whyItMatters: string;
  sourceUrl: string;
  sourceLabel: string;
};

export const researchItems: ResearchItem[] = [
  {
    no: "01",
    organization: "矢野経済研究所",
    report: "美容医療市場に関する調査",
    published: "2025年6月25日",
    population: "美容医療関連の医療施設・関連企業・関連団体等",
    sampleSize: "非公開(直接面談・電話ヒアリング・郵送調査・文献調査の併用)",
    finding:
      "2024年の美容医療市場規模は前年比106.2%の6,310億円。非外科的施術が中心で、対応する医療機関の裾野が皮膚科・美容皮膚科・形成外科等へ広がっている。",
    whyItMatters:
      "市場自体が拡大局面にあり、価格競争ではなく判断支援で選ばれる余地があることの背景情報として。",
    sourceUrl: "https://www.yano.co.jp/press-release/show/press_id/3844",
    sourceLabel: "矢野経済研究所 プレスリリース(2025/6/25)",
  },
  {
    no: "02",
    organization: "矢野経済研究所",
    report: "2026 美容医療の展望と戦略 ～消費者調査編～",
    published: "2026年7月10日",
    population: "20〜50代女性(経験者200名・興味層200名)",
    sampleSize: "400名(インターネット消費者調査)",
    finding:
      "調査項目に「施設選択基準」が含まれることを、公開されている販売ページ上で確認した。個別の集計結果は有料レポート内のみに記載されており、本Concept Projectでは未確認。",
    whyItMatters:
      "施設選択基準という調査領域が存在すること自体は、価格・情報の分かりやすさが検討要因になり得るという仮説の傍証として扱う(断定はしない)。",
    sourceUrl: "https://pr.mono.ipros.com/yano/product/detail/2000622095/",
    sourceLabel: "矢野経済研究所レポート販売ページ",
  },
  {
    no: "03",
    organization: "厚生労働省",
    report: "医療広告ガイドラインに関するQ&A / 医療広告規制におけるウェブサイト等の事例解説書(第5版)",
    published: "Q&A: 平成30年8月 / 事例解説書第5版: 令和7年3月",
    population: "自由診療を行う医療機関(規制対象)",
    sampleSize: "該当なし(行政ガイドライン)",
    finding:
      "限定解除の要件として、自由診療に係る治療内容・費用等に関する事項、および主なリスクに関する事項についての情報提供が求められている。",
    whyItMatters:
      "Price / Risk情報を「隠さない」設計は任意のUX判断ではなく、自由診療で情報提供が求められる領域と重なる。",
    sourceUrl: "https://www.mhlw.go.jp/content/001439423.pdf",
    sourceLabel: "厚生労働省 事例解説書(第5版, 令和7年3月)",
  },
];

export const researchLimitation =
  "上記の外部調査は、美容医療市場全体の傾向を理解するための参考情報であり、ÉNORAの想定顧客(30〜45歳・価格感度Low〜Middleの女性)を直接代表するものではない。実案件では、対象読者層に近いセグメントでの一次調査、または実施設の相談データの分析を優先する。";
