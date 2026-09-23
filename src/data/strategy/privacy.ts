// Privacy by Design (brief V2 §17/§18/§19).
export type DataPrinciple = { title: string; body: string };

export const dataPrinciples: DataPrinciple[] = [
  { title: "少なく集める", body: "Beauty Mapは、氏名・電話番号・メールアドレスを最初に求めない。" },
  { title: "用途を明確にする", body: "集めた情報の用途を、集める前に本人へ示す。" },
  { title: "慎重に扱う", body: "医療情報へのアクセスは、必要な役割の人間だけに限定する。" },
  { title: "必要な間だけ持つ", body: "目的が終わった情報を、期限なく保持し続けない。" },
];

export type DataLayer = { name: string; examples: string[]; note?: string };

export const dataLayers: DataLayer[] = [
  {
    name: "マーケティングデータ",
    examples: ["流入チャネル", "閲覧ページ", "広告接触"],
  },
  {
    name: "相談準備データ",
    examples: ["Concern", "Avoid", "Priority"],
    note: "Beauty Map / Consultation Briefで扱う範囲はここまで。",
  },
  {
    name: "医療情報",
    examples: ["既往歴", "服薬情報", "施術記録"],
    note: "マーケティングオートメーションへは流さない。",
  },
];
