// If This, Then That (brief §31) — symptom-to-response rules, so the
// strategy reads as "we prescribe based on where it's actually stuck,"
// not "here is everything we could sell you."
export type DecisionRule = {
  ifThis: string;
  thenThat: string;
};

export const decisionRules: DecisionRule[] = [
  { ifThis: "認知が少ない", thenThat: "Search / Instagram / Local Search" },
  { ifThis: "SNS流入は多いが、サイトへ来ない", thenThat: "コンテンツ / プロフィール導線の見直し" },
  { ifThis: "サイト流入はあるが、悩みが探索されない", thenThat: "情報設計の見直し" },
  { ifThis: "悩みのページは読まれるが、次へ進まない", thenThat: "関連コンテンツ / Selective Beauty Map" },
  { ifThis: "予約は開始されるが、完了しない", thenThat: "予約フォームの体験改善" },
  { ifThis: "予約は多いが、来院しない", thenThat: "リマインド / 期待値設計" },
  {
    ifThis: "相談は多いが、施術を選択しない",
    thenThat:
      "すぐ広告を増やさない。まず問い合わせの質・価格期待値・施術との適合・カウンセリングの進め方を確認する。",
  },
  { ifThis: "再来率が低い", thenThat: "アフターケア / フォローアップ / 体験" },
  { ifThis: "スタッフ対応負荷が高い", thenThat: "CRM / 自動化、その後にAI" },
];
