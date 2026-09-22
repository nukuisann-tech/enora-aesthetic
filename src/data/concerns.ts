/**
 * Concern architecture (brief §09).
 * This is content navigation, not medical diagnosis — it exists so a
 * visitor who doesn't know a treatment name can still find their way to
 * a relevant category and, eventually, a consultation.
 */
export type Concern = {
  id: string;
  label: string;
  description: string;
  categoryId: string;
  journalSlug?: string;
};

export const concerns: Concern[] = [
  {
    id: "texture",
    label: "肌の質感",
    description: "ハリや滑らかさの変化が気になる",
    categoryId: "skin-quality",
    journalSlug: "how-to-choose-only-what-you-need",
  },
  {
    id: "clarity",
    label: "透明感",
    description: "顔全体がぼんやりくすんで見える",
    categoryId: "tone-texture",
    journalSlug: "the-word-natural",
  },
  {
    id: "pores",
    label: "毛穴",
    description: "毛穴の開き・目立ちが気になる",
    categoryId: "tone-texture",
  },
  {
    id: "dryness",
    label: "乾燥",
    description: "季節や年齢による乾燥を感じる",
    categoryId: "skin-quality",
  },
  {
    id: "contour",
    label: "フェイスライン",
    description: "輪郭のもたつきや左右差が気になる",
    categoryId: "contour",
  },
  {
    id: "eye-area",
    label: "目元",
    description: "目の下のたるみ・くまが気になる",
    categoryId: "contour",
  },
  {
    id: "aging-signs",
    label: "エイジングサイン",
    description: "将来的な変化に備えておきたい",
    categoryId: "preventive-care",
    journalSlug: "not-doing-is-also-a-choice",
  },
  {
    id: "tired-look",
    label: "疲れた印象",
    description: "実際の疲労以上に疲れて見える",
    categoryId: "body-wellness",
    journalSlug: "downtime-and-daily-life",
  },
];

export function findConcern(id: string) {
  return concerns.find((c) => c.id === id);
}
