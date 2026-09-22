// Business System — five quiet lenses (brief V2 §32), not a dashboard.
export type BusinessLens = { name: string; watches: string };

export const businessLenses: BusinessLens[] = [
  { name: "Demand", watches: "Qualified Attention" },
  { name: "Decision", watches: "Consultation Readiness" },
  { name: "Operations", watches: "Show-up / Capacity" },
  { name: "Economics", watches: "Revenue / Gross Profit" },
  { name: "Relationship", watches: "Follow-up / Appropriate Repeat" },
];
