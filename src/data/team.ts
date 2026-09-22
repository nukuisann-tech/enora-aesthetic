import type { ImageKey } from "@/lib/images";

export type Person = {
  slug: string;
  role: string;
  roleEn: string;
  name: string;
  thought: string;
  bio: string;
  image: ImageKey;
  imageAlt: string;
};

export const people: Person[] = [
  {
    slug: "director",
    role: "統括医師",
    roleEn: "Medical Director",
    name: "白石 環",
    thought: "処方する前に、\nしなくていい理由を探しています。",
    bio: "施術の適応だけでなく、適応外・時期尚早・不要という判断まで含めて説明する立場を担当。",
    image: "consultationRoom",
    imageAlt: "診察室で患者と落ち着いて対話する診察の様子",
  },
  {
    slug: "curator",
    role: "ビューティー・キュレーター",
    roleEn: "Beauty Curator",
    name: "北村 悠子",
    thought: "あなたの言葉より先に、\nあなたの表情を見ています。",
    bio: "初回カウンセリングの窓口。悩みの言語化を手伝い、必要な範囲だけを一緒に絞り込む。",
    image: "eyeDetail",
    imageAlt: "表情を静かに見つめる、目もとのクローズアップ",
  },
  {
    slug: "specialist",
    role: "ケア・スペシャリスト",
    roleEn: "Care Specialist",
    name: "土屋 芽依",
    thought: "肌に触れる前に、\nその日の調子を聞いています。",
    bio: "施術当日のコンディション確認と、アフターケアの説明を担当。",
    image: "handDetail",
    imageAlt: "施術前の落ち着いた手もとのクローズアップ",
  },
];

export function findPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}
