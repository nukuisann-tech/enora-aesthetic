export type Chapter = { id: string; no: string; label: string };

// Main Story is exactly 7 Japanese-first chapters (Editorial rebuild
// brief §04/§39) plus one entry for Supporting Strategy (詳細設計) — not
// a 15-item nav, and not the prior 5-chapter English-labeled set.
export const chapters: Chapter[] = [
  { id: "problem", no: "01", label: "課題" },
  { id: "strategy", no: "02", label: "戦略" },
  { id: "core-system", no: "03", label: "中核システム" },
  { id: "consultation-experience", no: "04", label: "相談体験" },
  { id: "business", no: "05", label: "事業" },
  { id: "ninety-days", no: "06", label: "90日" },
  { id: "growth-loop", no: "07", label: "成長循環" },
  { id: "supporting-strategy", no: "—", label: "詳細設計" },
];
