// Acquisition channels (brief §09/§10) — five, each with one role, not a
// list of every platform that exists. TikTok / YouTube / broad paid are
// explicitly deferred, not "eventually all of them."
export type Channel = {
  id: string;
  name: string;
  role: string;
  detail: string;
  destination: string;
  /** True when `detail` contains an example that is a hypothesis, not
   * confirmed Search Console / keyword research data. */
  isHypothesis?: boolean;
};

export const channels: Channel[] = [
  {
    id: "search",
    name: "Search",
    role: "悩みを検索している段階",
    detail:
      "「毛穴 美容医療」のような施術名検索だけでなく、「毛穴 何したらいい」「美容医療 初めて」「ダウンタイム 少ない」のような、まだ施術名を知らない検索クエリの例を想定する(Search Console / Keyword Research未実施の例)。",
    destination: "悩み一覧 / コンテンツ / 初めての方へ",
    isHypothesis: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    role: "憧れの醸成と教育",
    detail:
      "質感・空間・美容観・悩みの教育・カウンセリングの考え方。予約を直接取ることより、ブランドとの相性をつくる。",
    destination: "Website(私たちの考え / 悩み一覧)",
  },
  {
    id: "website",
    name: "Official Website",
    role: "判断材料を確認する場所",
    detail:
      "最重要チャネル。価格・考え方・リスク・スタッフ紹介・施術情報を整理し、SNSではできない深い判断を支援する。",
    destination: "Selective Beauty Map / Consultation Brief",
  },
  {
    id: "local",
    name: "Local Search / Google Business Profile",
    role: "検討が進んだ段階",
    detail: "実案件では営業時間・所在地・予約導線などの基本情報を正確に整える。",
    destination: "相談予約",
  },
  {
    id: "referral",
    name: "Referral",
    role: "信頼の引き継ぎ",
    detail:
      "既存患者から次の患者へ。紹介・口コミの医療広告上の扱いは実案件で最新ルールを確認する前提。",
    destination: "相談",
  },
];
