// Bottleneck Prescription (brief V2 §24) — replaces a flat service menu.
// Each case names one observable Signal and the Response it points to,
// so the reader sees "diagnose first" rather than "buy everything."
export type BottleneckCase = {
  no: string;
  title: string;
  signal: string;
  response: string;
};

export const bottleneckCases: BottleneckCase[] = [
  {
    no: "01",
    title: "認知が少ない",
    signal: "検索・SNS経由の新規流入が少ない",
    response: "コンテンツとLocal Search整備を優先する",
  },
  {
    no: "02",
    title: "判断できていない",
    signal: "Website訪問はあるが、Beauty Map / Consultation Briefの完了率が低い",
    response: "Selective Beauty Mapの導線と価格・リスク情報の見やすさを見直す",
  },
  {
    no: "03",
    title: "予約に至らない",
    signal: "Consultation Brief完了後、予約に至らない",
    response: "予約フォームの摩擦とフォローアップのタイミングを見直す",
  },
  {
    no: "04",
    title: "来院しない",
    signal: "予約は取れているが、来院率が低い",
    response: "予約直前のリマインドと初回来院情報の事前送付を強化する",
  },
  {
    no: "05",
    title: "現場負荷が高い",
    signal: "相談数は十分だが、準備不足の来院が多く現場の負荷が高い",
    response: "相談準備が整った状態の条件を強め、集客より事前準備の質を優先する",
  },
];

export type PriorityBucket = { label: "今すぐ" | "次に" | "後で"; items: string[] };

export const priorityBuckets: PriorityBucket[] = [
  { label: "今すぐ", items: ["Consultation Brief導線の整備", "価格・リスク情報の可視性改善"] },
  { label: "次に", items: ["Selective Beauty MapのV2実装", "フォローアップの仕組み構築"] },
  { label: "後で", items: ["AI Decision Navigator", "広告出稿の拡大"] },
];
