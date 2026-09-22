export type Chapter = { id: string; no: string; label: string };

// Five chapters only (brief §40/§55) — not Tomori's 15-item nav. Each id
// anchors the chapter's opening PartDivider for the scroll-spy nav.
export const chapters: Chapter[] = [
  { id: "tension", no: "01", label: "The Tension" },
  { id: "decision-engine", no: "02", label: "The Decision Engine" },
  { id: "consultation-system", no: "03", label: "The Consultation System" },
  { id: "continuity-system", no: "04", label: "The Continuity System" },
  { id: "business-system", no: "05", label: "The Business System" },
];
