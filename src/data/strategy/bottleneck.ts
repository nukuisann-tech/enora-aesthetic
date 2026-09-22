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
    title: "Low Discovery",
    signal: "検索・SNS経由の新規流入が少ない",
    response: "Content Pillars(Decision Support Content)とLocal Search整備を優先する",
  },
  {
    no: "02",
    title: "Low Clarity",
    signal: "Website訪問はあるが、Beauty Map / Consultation Briefの完了率が低い",
    response: "Selective Beauty Mapの導線とPrice・Risk情報の見やすさを見直す",
  },
  {
    no: "03",
    title: "Low Booking Completion",
    signal: "Consultation Brief完了後、予約に至らない",
    response: "予約フォームの摩擦とNurture Sequenceのタイミングを見直す",
  },
  {
    no: "04",
    title: "Low Show-up",
    signal: "予約は取れているが、来院率が低い",
    response: "予約直前のリマインドとFirst Visit情報の事前送付を強化する",
  },
  {
    no: "05",
    title: "High Staff Load",
    signal: "Consultation数は十分だが、準備不足の来院が多くスタッフ負荷が高い",
    response: "Qualified Consultationの条件を強め、集客より事前準備の質を優先する",
  },
];

export type PriorityBucket = { bucket: "NOW" | "NEXT" | "LATER"; items: string[] };

export const priorityBuckets: PriorityBucket[] = [
  { bucket: "NOW", items: ["Consultation Brief導線の整備", "Price・Risk情報の可視性改善"] },
  { bucket: "NEXT", items: ["Selective Beauty MapのV2実装", "Nurture Sequenceの構築"] },
  { bucket: "LATER", items: ["AI Decision Navigator", "有料広告の拡大"] },
];
