// Capacity-aware IF/THEN rules (brief V2 §07) — makes "More Bookings Are
// Not Always Better" concrete instead of just asserted.
export type CapacityRule = { condition: string; result: string };

export const capacityRules: CapacityRule[] = [
  {
    condition: "IF 予約完了率が上がる AND 医師の受け入れがすでに満床",
    result: "THEN 増えるのはキャンセル・待ち時間であり、成長ではない。",
  },
  {
    condition: "IF 準備が整った相談が増える AND スタッフ稼働時間が変わらない",
    result: "THEN 1件あたりの相談品質が下がる。",
  },
  {
    condition: "IF 広告費を増やす AND 受け入れ体制が固定されている",
    result: "THEN CACだけが上がり、売上は比例して増えない。",
  },
];
