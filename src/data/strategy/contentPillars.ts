// Content strategy (brief §11) — four pillars, each answering one
// question a person actually has before a treatment name enters the
// picture. Not an SEO article farm.
export type ContentPillar = {
  id: string;
  letter: string;
  title: string;
  question: string;
  examples: string[];
};

export const contentPillars: ContentPillar[] = [
  {
    id: "understand-concern",
    letter: "A",
    title: "UNDERSTAND YOUR CONCERN",
    question: "私が気にしているのは、本当に何？",
    examples: [
      "疲れて見えると感じたとき、最初に整理したいこと",
      "毛穴が気になるとき、施術名より先に確認したいこと",
    ],
  },
  {
    id: "understand-choice",
    letter: "B",
    title: "UNDERSTAND THE CHOICE",
    question: "施術をどう比較する？",
    examples: [
      "価格だけでは比較しにくい理由",
      "ダウンタイムを予定から考える",
      "1回の変化と継続ケアの違い",
    ],
  },
  {
    id: "understand-risk",
    letter: "C",
    title: "UNDERSTAND THE RISK",
    question: "何を確認してから決める？",
    examples: [
      "美容医療のカウンセリングで聞いておきたいこと",
      "リスク・副作用の読み方",
      "当日に決めなくてもいい理由",
    ],
  },
  {
    id: "understand-priority",
    letter: "D",
    title: "UNDERSTAND YOUR PRIORITY",
    question: "私は何を大事にしたい？",
    examples: ["Natural Result", "Minimal Downtime", "Budget Clarity", "Privacy", "Long-term Plan"],
  },
];
