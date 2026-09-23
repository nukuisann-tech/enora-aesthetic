// KPI Tree (brief §29) — bottom-up, ending in Sustainable Growth, not a
// single Treatment Conversion Rate maximized in isolation ("No
// Treatment" is a valid outcome further down the funnel).
export const kpiTree: string[] = [
  "質の高い流入",
  "判断支援",
  "Consultation Brief",
  "準備が整った相談",
  "適切な施術判断",
  "粗利益",
  "持続的な成長",
];

// Website measurement events (brief §30) — design only, no fabricated
// data.
export const measurementEvents: string[] = [
  "Concern_View",
  "Concern_Direction_Click",
  "Journal_View",
  "Treatment_Info_View",
  "Risk_Info_View",
  "Price_View",
  "Beauty_Map_Start",
  "Beauty_Map_Complete",
  "Consultation_Start",
  "Consultation_Brief_Complete",
  "Booking_Complete",
];

// Business guardrails (brief V2 §06) — a marketing funnel alone cannot
// tell ÉNORA whether growth is sustainable. Capacity and Economics sit
// beside the funnel, not under it, because a healthy funnel with no
// Capacity or a negative Economics answer is not Growth.
export const capacityGuardrails: string[] = [
  "診療時間",
  "スタッフ稼働時間",
  "施術室の空き状況",
  "週あたりの予約枠",
];

export const economicsGuardrails: string[] = [
  "売上",
  "粗利益",
  "CAC(顧客獲得コスト)",
  "キャンセル・無断キャンセルのコスト",
];

export const growthFormula = "成長 = 質 × 受け入れ能力 × 収益性";
