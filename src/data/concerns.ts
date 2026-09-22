/**
 * Concern architecture (brief §09, restructured per V3 §03).
 * This is content navigation, not medical diagnosis. A single concern
 * deliberately does not map to a single treatment category — the same
 * surface complaint can have different underlying directions depending
 * on the person, and presenting one direct answer would be Treatment
 * Seller behavior, not Beauty Curator behavior.
 */
export type Direction = {
  /** Present when this direction corresponds to a real treatment category. */
  categoryId?: string;
  /** Display label — either the category's name or a non-treatment path. */
  label: string;
  /** Why this direction can apply to the concern. */
  note: string;
};

export type Concern = {
  id: string;
  label: string;
  description: string;
  /** What actually varies person to person under this one complaint. */
  variesBecause: string;
  possibleDirections: Direction[];
  /**
   * True for concerns where jumping to a treatment category would be
   * premature — the honest first step is a conversation, not a page.
   */
  consultFirst?: boolean;
  journalSlug?: string;
};

export const concerns: Concern[] = [
  {
    id: "texture",
    label: "肌の質感",
    description: "ハリや滑らかさの変化が気になる",
    variesBecause: "乾燥によるものか、加齢によるものかで、考える方向が変わります。",
    possibleDirections: [
      { categoryId: "skin-quality", label: "Skin Quality", note: "肌そのものの状態を扱う方向" },
      { categoryId: "preventive-care", label: "Preventive Care", note: "将来的な変化への予防を優先する方向" },
    ],
    journalSlug: "how-to-choose-only-what-you-need",
  },
  {
    id: "clarity",
    label: "透明感",
    description: "顔全体がぼんやりくすんで見える",
    variesBecause: "色むらによるものか、乾燥による見え方の変化かで、考える方向が変わります。",
    possibleDirections: [
      { categoryId: "tone-texture", label: "Tone / Texture", note: "肌表面の色むら・質感にアプローチする方向" },
      { categoryId: "skin-quality", label: "Skin Quality", note: "乾燥による見え方の変化を整える方向" },
    ],
    journalSlug: "the-word-natural",
  },
  {
    id: "pores",
    label: "毛穴",
    description: "毛穴の開き・目立ちが気になる",
    variesBecause: "皮脂・乾燥・加齢など、目立つ原因が人によって異なります。",
    possibleDirections: [
      { categoryId: "tone-texture", label: "Tone / Texture", note: "毛穴の目立ちにアプローチする方向" },
      { categoryId: "skin-quality", label: "Skin Quality", note: "乾燥が背景にある場合に整える方向" },
    ],
  },
  {
    id: "dryness",
    label: "乾燥",
    description: "季節や年齢による乾燥を感じる",
    variesBecause: "季節性のものか、生活習慣によるものかで、優先順位が変わります。",
    possibleDirections: [
      { categoryId: "skin-quality", label: "Skin Quality", note: "肌そのものの状態を扱う方向" },
      { label: "Lifestyle / Consultation", note: "生活習慣の見直しを含めて相談する方向" },
    ],
  },
  {
    id: "contour",
    label: "フェイスライン",
    description: "輪郭のもたつきや左右差が気になる",
    variesBecause: "骨格・表情筋の使い方・むくみなど、背景が人によって異なります。",
    possibleDirections: [
      { categoryId: "contour", label: "Contour", note: "フェイスラインを整える方向" },
      { categoryId: "body-wellness", label: "Body / Wellness", note: "むくみや姿勢が背景にある場合の方向" },
    ],
  },
  {
    id: "eye-area",
    label: "目元",
    description: "くま・乾燥・影・たるみ感が気になる",
    variesBecause: "同じ「目元が気になる」でも、背景によって考える方向は異なります。",
    possibleDirections: [
      { categoryId: "skin-quality", label: "Skin Quality", note: "乾燥や質感が背景にある場合の方向" },
      { categoryId: "contour", label: "Contour", note: "たるみ感が背景にある場合の方向" },
      { label: "Lifestyle / Consultation", note: "睡眠や生活リズムを含めて相談する方向" },
    ],
  },
  {
    id: "aging-signs",
    label: "エイジングサイン",
    description: "将来的な変化に備えておきたい",
    variesBecause: "今すぐ必要か、時期尚早かは、年齢や状態によって判断が分かれます。",
    possibleDirections: [
      { categoryId: "preventive-care", label: "Preventive Care", note: "予防的な位置づけで備える方向" },
      { label: "Lifestyle / Consultation", note: "「まだ必要ない」という結論も含めて相談する方向" },
    ],
    journalSlug: "not-doing-is-also-a-choice",
  },
  {
    id: "tired-look",
    label: "疲れた印象",
    description: "実際の疲労以上に疲れて見える",
    variesBecause: "睡眠や生活リズムなど、美容施術以外の要因も含めて整理する必要があります。",
    possibleDirections: [
      { label: "Lifestyle / Consultation", note: "生活習慣を含めてまず相談する方向" },
      { categoryId: "body-wellness", label: "Body / Wellness", note: "身体のコンディションを整える方向" },
    ],
    consultFirst: true,
    journalSlug: "downtime-and-daily-life",
  },
];

export function findConcern(id: string) {
  return concerns.find((c) => c.id === id);
}
