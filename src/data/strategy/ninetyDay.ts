// 90 Day Blueprint (brief §32) — Concept Sample. Understand before
// touching anything; Clarify the decision environment; Connect
// consultation to follow-up. Scale decisions come after, from data.
export type NinetyDayPhase = {
  range: string;
  title: string;
  items: string[];
  gate: string;
};

// Decision Gates (brief V2 §33) — "SCALE IS A DECISION," not an automatic
// next step. Each phase ends with a question, not a green light.
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
    gate: "Day 30 Gate — Capacityの上限は把握できたか?Baselineは信頼できる数字か?",
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
    gate: "Day 60 Gate — Qualified Consultationの比率は上がったか?それは偶然ではないか?",
  },
  {
    range: "Day 61–90",
    title: "CONNECT",
    items: ["Nurture", "Pre-consultation", "Follow-up", "CRM設計", "初期CRO"],
    gate: "Day 90 Gate — Capacityに余力があるか?Economicsは広告を増やしても崩れないか?",
  },
];
