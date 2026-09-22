// Privacy by Design (brief V2 §17/§18/§19).
export type DataPrinciple = { title: string; body: string };

export const dataPrinciples: DataPrinciple[] = [
  { title: "Collect Less", body: "Beauty Mapは、氏名・電話番号・メールアドレスを最初に求めない。" },
  { title: "Use Clearly", body: "集めた情報の用途を、集める前に本人へ示す。" },
  { title: "Access Carefully", body: "Medical Informationへのアクセスは、必要な役割の人間だけに限定する。" },
  { title: "Keep Only As Needed", body: "目的が終わった情報を、期限なく保持し続けない。" },
];

export type DataLayer = { name: string; examples: string[]; note?: string };

export const dataLayers: DataLayer[] = [
  {
    name: "Marketing Data",
    examples: ["流入チャネル", "閲覧ページ", "広告接触"],
  },
  {
    name: "Consultation Preparation Data",
    examples: ["Concern", "Avoid", "Priority"],
    note: "Beauty Map / Consultation Briefで扱う範囲はここまで。",
  },
  {
    name: "Medical Information",
    examples: ["既往歴", "服薬情報", "施術記録"],
    note: "Marketing Automationへは流さない。",
  },
];
