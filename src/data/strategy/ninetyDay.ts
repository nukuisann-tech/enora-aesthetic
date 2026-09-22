// 90 Day Blueprint (brief §32) — Concept Sample. Understand before
// touching anything; Clarify the decision environment; Connect
// consultation to follow-up. Scale decisions come after, from data.
export type NinetyDayPhase = {
  range: string;
  title: string;
  items: string[];
};

export const ninetyDayPhases: NinetyDayPhase[] = [
  {
    range: "Day 0–30",
    title: "UNDERSTAND",
    items: [
      "Analytics",
      "Search Console",
      "Booking Data",
      "Consultation Data",
      "Source Data",
      "Cancellation",
      "Capacity",
      "Baseline",
    ],
  },
  {
    range: "Day 31–60",
    title: "CLARIFY",
    items: [
      "Concern Journey",
      "Price Information",
      "Content Links",
      "Selective Beauty Map",
      "Consultation Brief",
      "Tracking",
    ],
  },
  {
    range: "Day 61–90",
    title: "CONNECT",
    items: ["Nurture", "Pre-consultation", "Follow-up", "CRM設計", "初期CRO"],
  },
];
