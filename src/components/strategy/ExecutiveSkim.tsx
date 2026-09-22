import { Reveal, FadeText } from "@/components/Reveal";

const rows = [
  { label: "PROBLEM", value: "情報が多すぎて、判断できない。" },
  { label: "ANSWER", value: "予約数の前に、判断の質を上げる。" },
  { label: "SYSTEM", value: "Beauty Map → Consultation Brief → Human Consultation → Continuity" },
  { label: "CORE KPI", value: "Qualified Consultation(準備ができている相談)" },
  { label: "BUSINESS GUARDRAIL", value: "Capacity(Doctor / Staff / Room / Slots)とEconomics(Revenue / Gross Profit / CAC)" },
  { label: "GOVERNANCE", value: "医療情報はDraft→Medical Review→Compliance Checkを経て公開する想定" },
  { label: "AI", value: "AI AFTER CLARITY. 医療判断が発生する時点で人間に引き継ぐ。" },
  { label: "GROWTH LOOP", value: "BETTER DECISIONS CREATE BETTER GROWTH." },
];

// The 60-second read (brief §28) — distinct from the 3-statement
// ExecutiveSummary above it. This is the layer a busy owner reads once;
// everything below is the same content in full detail.
export function ExecutiveSkim() {
  return (
    <div className="canvas rhythm-tight">
      <FadeText>
        <p className="eyebrow text-[12px]">60-Second Read</p>
      </FadeText>
      <Reveal delay={0.06} className="mt-6 border border-line-strong">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-1 gap-1 px-6 py-3.5 md:grid-cols-[200px_1fr] md:gap-6 ${
              i < rows.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45">{r.label}</p>
            <p className="font-body-jp text-[13px] leading-relaxed text-ink">{r.value}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
