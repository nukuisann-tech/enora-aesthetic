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
  /** True only for the medical role — drives which disclosure copy applies. */
  isMedical: boolean;
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
    isMedical: true,
  },
  {
    slug: "curator",
    role: "ビューティー・キュレーター",
    roleEn: "Beauty Curator",
    name: "北村 悠子",
    thought: "あなたの言葉より先に、\nあなたの表情を見ています。",
    bio: "初回カウンセリングの窓口として、相談内容の整理とご案内を担当。施術の医学的な適応判断は医師が行います。",
    image: "eyeDetail",
    imageAlt: "表情を静かに見つめる、目もとのクローズアップ",
    isMedical: false,
  },
  {
    slug: "coordinator",
    role: "ケア・コーディネーター",
    roleEn: "Care Coordinator",
    name: "土屋 芽依",
    thought: "肌に触れる前に、\nその日の調子を聞いています。",
    bio: "施術当日のご案内とアフターケアに関するご説明を担当。医療的な判断は医師が行います。",
    image: "handDetail",
    imageAlt: "施術前の落ち着いた手もとのクローズアップ",
    isMedical: false,
  },
];

export function findPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}
