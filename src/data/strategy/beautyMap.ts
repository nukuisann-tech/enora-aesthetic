// Selective Beauty Map V2 (brief V2 §14/§15) — a real client-side
// prototype, not a static mockup. Three questions, one result screen.
// No server, no storage: every answer lives only in this component's
// state and disappears on reset or reload.
export type BeautyMapQuestion = {
  id: "concern" | "avoid" | "priority";
  no: string;
  question: string;
  kind: "multi" | "single";
  options: string[];
};

export const beautyMapQuestions: BeautyMapQuestion[] = [
  {
    id: "concern",
    no: "01",
    question: "WHAT CONCERNS YOU?",
    kind: "multi",
    options: ["肌の質感", "透明感", "毛穴", "フェイスライン", "目元"],
  },
  {
    id: "avoid",
    no: "02",
    question: "WHAT DO YOU WANT TO AVOID?",
    kind: "multi",
    options: ["大きな変化", "長いダウンタイム", "頻繁な通院"],
  },
  {
    id: "priority",
    no: "03",
    question: "WHAT MATTERS MOST?",
    kind: "single",
    options: ["Natural Result", "Minimal Downtime", "Budget Clarity"],
  },
];

export type PriorityGuide = {
  priority: string;
  questionsToAsk: string[];
  prepareForConsultation: string[];
};

// This is what turns the result into a Consultation Preparation Asset
// (brief §15), not a Treatment Recommendation — nothing here names a
// treatment.
export const priorityGuides: Record<string, PriorityGuide> = {
  "Natural Result": {
    priority: "Natural Result",
    questionsToAsk: [
      "自然な変化に見えるまで、施術は何回くらい必要か",
      "「自然」と感じる基準を、症例でどう確認できるか",
      "効果が強く出すぎた場合、調整や元に戻す方法はあるか",
    ],
    prepareForConsultation: [
      "現在の状態がわかる写真",
      "気になる部分を自分で指せる準備",
      "「自然」の具体例(画像や言葉)",
    ],
  },
  "Minimal Downtime": {
    priority: "Minimal Downtime",
    questionsToAsk: [
      "ダウンタイム中に具体的にどんな症状が出るか",
      "仕事や外出に戻れるまでの目安期間",
      "メイクや日常生活でどこまで隠せるか",
    ],
    prepareForConsultation: [
      "予定が詰まっている期間のカレンダー",
      "仕事・外出上の制約条件",
      "過去にダウンタイムで困った経験のメモ(あれば)",
    ],
  },
  "Budget Clarity": {
    priority: "Budget Clarity",
    questionsToAsk: [
      "提示価格に含まれる範囲(施術・薬剤・アフターケア)",
      "追加費用が発生し得るケース",
      "複数回必要な場合の総額の目安",
    ],
    prepareForConsultation: [
      "想定しているおおよその予算感",
      "一括か分割かの希望",
      "比較検討している他院があればその概要",
    ],
  },
};
