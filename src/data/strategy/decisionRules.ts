// If This, Then That (brief §31) — symptom-to-response rules, so the
// strategy reads as "we prescribe based on where it's actually stuck,"
// not "here is everything we could sell you."
export type DecisionRule = {
  ifThis: string;
  thenThat: string;
};

export const decisionRules: DecisionRule[] = [
  { ifThis: "認知が少ない", thenThat: "Search / Instagram / Local Search" },
  { ifThis: "SNS流入は多いが、サイトへ来ない", thenThat: "Content / プロフィール導線の見直し" },
  { ifThis: "サイト流入はあるが、Concernが探索されない", thenThat: "Information Architecture" },
  { ifThis: "Concernは読まれるが、次へ進まない", thenThat: "関連Content / Selective Beauty Map" },
  { ifThis: "予約は開始されるが、完了しない", thenThat: "Form UX" },
  { ifThis: "予約は多いが、来院しない", thenThat: "Reminder / 期待値設計" },
  {
    ifThis: "相談は多いが、Treatmentに進まない",
    thenThat:
      "すぐ広告を増やさない。まずLead Quality・価格期待値・Treatment Fit・カウンセリングProcessを確認する。",
  },
  { ifThis: "Repeatが低い", thenThat: "Aftercare / Follow-up / Experience" },
  { ifThis: "スタッフ対応負荷が高い", thenThat: "CRM / Automation、その後にAI" },
];
