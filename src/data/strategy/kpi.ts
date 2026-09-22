// KPI Tree (brief §29) — bottom-up, ending in Sustainable Growth, not a
// single Treatment Conversion Rate maximized in isolation ("No
// Treatment" is a valid outcome further down the funnel).
export const kpiTree: string[] = [
  "Qualified Traffic",
  "Decision Support",
  "Consultation Brief",
  "Qualified Consultations",
  "Appropriate Treatment Decisions",
  "Gross Profit",
  "Sustainable Growth",
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
  "Doctor Hours",
  "Staff Hours",
  "Treatment Room Availability",
  "Bookable Slots per Week",
];

export const economicsGuardrails: string[] = [
  "Revenue",
  "Gross Profit",
  "CAC (Customer Acquisition Cost)",
  "Cancellation / No-show Cost",
];

export const growthFormula = "GROWTH = QUALITY × CAPACITY × ECONOMICS";
