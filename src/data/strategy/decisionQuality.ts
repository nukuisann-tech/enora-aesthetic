// Decision Quality Signals (brief V2 §04) — observable signals, grouped
// by when they occur. Never combined into a single score: a score
// implies false precision this Concept Project has no data to support.
export type SignalGroup = {
  group: string;
  signals: string[];
};

export const decisionQualitySignals: SignalGroup[] = [
  {
    group: "相談前",
    signals: [
      "Consultation Brief / Beauty Mapの完了有無",
      "価格・リスク情報の閲覧有無",
      "事前質問の記入有無",
    ],
  },
  {
    group: "相談中",
    signals: [
      "基本情報の説明に費やす時間(短いほど準備ができている可能性)",
      "本人発の質問の数",
      "Concern・Avoid・Priorityを自分の言葉で説明できるか",
    ],
  },
  {
    group: "相談後",
    signals: [
      "判断の種類(進める / 考える / 今はやらない / 施術しない)",
      "「考える」に対するフォローアップ反応率",
      "再相談時に前回の内容を覚えているか",
    ],
  },
  {
    group: "運営",
    signals: [
      "相談時間のばらつき(準備状況の代理指標)",
      "スタッフの相談前準備時間",
      "未準備来院によるキャンセル・延長率",
    ],
  },
];

export const decisionQualityDisclaimer =
  "これらは「施術しない」を失敗として扱わないための観察軸であり、単一の判断品質スコアを算出する指標ではない。定量化できるものと、定性的に確認するものが混在する。";
