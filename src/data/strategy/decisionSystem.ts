// The ÉNORA Decision System (brief V2 §03) — one master map that shows how
// Growth Engine / Intent Journey / Consultation System / Growth Loop
// already relate to each other. No new stages are introduced here; each
// node names a concept that already exists elsewhere on this page.
export type DecisionSystemNode = {
  stage: string;
  detail: string;
  livesIn: string;
};

export const decisionSystemNodes: DecisionSystemNode[] = [
  { stage: "Discovery", detail: "Concernに気づく", livesIn: "The Growth Engine" },
  { stage: "Self Understanding", detail: "自分の基準を整理する", livesIn: "Selective Beauty Map" },
  { stage: "Clarity", detail: "何を優先するか言語化できる", livesIn: "The Growth Engine / Intent Journey" },
  { stage: "Shared Context", detail: "その基準をクリニック側と共有する", livesIn: "Consultation Brief" },
  { stage: "Human Consultation", detail: "情報ではなく対話で判断を深める", livesIn: "The Consultation System" },
  { stage: "Decision", detail: "Proceed / Consider / Not Now / No Treatmentのいずれか", livesIn: "Consultation Outcome" },
  { stage: "Continuity", detail: "決定後も関係を続ける", livesIn: "The Continuity System" },
  { stage: "Trust", detail: "次のDecisionにも選ばれる", livesIn: "The Growth Loop" },
];
