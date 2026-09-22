// Capacity-aware IF/THEN rules (brief V2 §07) — makes "More Bookings Are
// Not Always Better" concrete instead of just asserted.
export type CapacityRule = { condition: string; result: string };

export const capacityRules: CapacityRule[] = [
  {
    condition: "IF Booking Completion率が上がる AND Doctor Capacityがすでに満床",
    result: "THEN 増えるのはCancellation・待ち時間であり、Growthではない。",
  },
  {
    condition: "IF Qualified Consultationが増える AND Staff Hoursが変わらない",
    result: "THEN 1件あたりのConsultation品質が下がる。",
  },
  {
    condition: "IF 広告費を増やす AND Capacityが固定されている",
    result: "THEN CACだけが上がり、Revenueは比例して増えない。",
  },
];
