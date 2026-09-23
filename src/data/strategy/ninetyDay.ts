// 90 Day Blueprint (brief §32) — Concept Sample. Understand before
// touching anything; Clarify the decision environment; Connect
// consultation to follow-up. Scale decisions come after, from data.
export type NinetyDayPhase = {
  range: string;
  title: string;
  items: string[];
  detail: string[];
  gate: string;
};

// Decision Gates (editorial rebuild §22/§23) — "SCALE IS A DECISION," not
// an automatic next step. Each phase shows 3–4 items in the Main Story;
// the rest folds under a detail disclosure. Gate questions are the
// Japanese sentence itself, not an English "Decision Gate" label.
export const ninetyDayPhases: NinetyDayPhase[] = [
  {
    range: "0〜30日",
    title: "現状を知る",
    items: ["Analytics / Search Console", "予約・相談データ", "Capacity", "Baseline"],
    detail: ["Booking Data", "Consultation Data", "Source Data", "Cancellation"],
    gate: "本当のボトルネックはどこか？",
  },
  {
    range: "31〜60日",
    title: "判断しやすくする",
    items: ["Concern Journey", "価格情報の整理", "Selective Beauty Map", "Consultation Brief"],
    detail: ["Content Links", "Tracking設計"],
    gate: "新しい導線は使われているか？",
  },
  {
    range: "61〜90日",
    title: "導線をつなぐ",
    items: ["Nurture", "Pre-consultation", "Follow-up"],
    detail: ["CRM設計", "初期CRO"],
    gate: "何を伸ばす価値があるか？",
  },
];
