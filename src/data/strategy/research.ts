// External research basis (brief §06). Findings are stated only at the
// level of specificity the cited source actually supports — no invented
// percentages. Every entry carries its source; this page adds no
// numbers of its own.
export type ResearchItem = {
  source: string;
  year: string;
  finding: string;
};

export const researchItems: ResearchItem[] = [
  {
    source: "ジャストシステム「美容医療・美容整形に関する調査」",
    year: "2026",
    finding:
      "美容医療・美容整形の経験者・検討者1,187名を対象にした調査では、クリニックの公式サイトが主要な情報源の上位に挙がっており、SNSと並んで重要な情報接点になっている。",
  },
  {
    source: "矢野経済研究所「美容医療の消費者調査」",
    year: "2025–2026",
    finding:
      "施設選びの際、価格の分かりやすさ(明瞭さ)が重視される項目のひとつとして挙げられている。",
  },
  {
    source: "厚生労働省「医療広告規制に関するガイドライン・Q&A等」",
    year: "随時更新",
    finding:
      "自由診療については、治療内容・主なリスクや副作用・標準的な費用等の情報提供が重要とされている。",
  },
];
