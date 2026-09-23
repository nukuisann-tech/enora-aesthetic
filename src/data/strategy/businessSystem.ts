// Business Lens — four quiet lenses (editorial rebuild §19/§20), replacing
// the earlier five-lens English version. Good Growth is never judged by
// booking count alone.
export type BusinessLens = { name: string; watches: string };

export const businessLenses: BusinessLens[] = [
  { name: "集客", watches: "必要な人に届いているか。" },
  { name: "相談", watches: "相談前の準備が整っているか。" },
  { name: "運営", watches: "受け入れられる予約枠か。" },
  { name: "収益", watches: "売上・粗利益が成立しているか。" },
];
