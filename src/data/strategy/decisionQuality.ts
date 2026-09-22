// Decision Quality Signals (brief V2 §04) — observable signals, grouped
// by when they occur. Never combined into a single score: a score
// implies false precision this Concept Project has no data to support.
export type SignalGroup = {
  group: string;
  signals: string[];
};

export const decisionQualitySignals: SignalGroup[] = [
  {
    group: "BEFORE CONSULTATION",
    signals: [
      "Consultation Brief / Beauty Mapの完了有無",
      "Price・Risk情報の閲覧有無",
      "事前質問の記入有無",
    ],
  },
  {
    group: "DURING CONSULTATION",
    signals: [
      "基本情報の説明に費やす時間(短いほど準備ができている可能性)",
      "本人発の質問の数",
      "Concern・Avoid・Priorityを自分の言葉で説明できるか",
    ],
  },
  {
    group: "AFTER CONSULTATION",
    signals: [
      "Decisionの種類(Proceed / Consider / Not Now / No Treatment)",
      "Considerに対するFollow-up反応率",
      "再相談時に前回の内容を覚えているか",
    ],
  },
  {
    group: "OPERATIONS",
    signals: [
      "相談時間のばらつき(準備状況の代理指標)",
      "スタッフの相談前準備時間",
      "未準備来院によるキャンセル・延長率",
    ],
  },
];

export const decisionQualityDisclaimer =
  "これらはNo Treatmentを失敗として扱わないための観察軸であり、単一のDecision Quality Scoreを算出する指標ではない。定量化できるものと、定性的に確認するものが混在する。";
