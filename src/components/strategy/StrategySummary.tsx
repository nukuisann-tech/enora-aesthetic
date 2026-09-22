import { Reveal, FadeText } from "@/components/Reveal";

const rows = [
  { label: "PROBLEM", value: "Information overload" },
  { label: "STRATEGY", value: "Decision quality" },
  { label: "PRIMARY ASSET", value: "Selective Beauty Map" },
  { label: "CONVERSION", value: "Consultation Brief" },
  { label: "RETENTION", value: "Continuity" },
  { label: "AUTOMATION", value: "Later" },
  { label: "CORE KPI", value: "Qualified Consultation" },
  { label: "BUSINESS KPI", value: "Gross Profit" },
  { label: "GROWTH LOOP", value: "Decision → Experience → Trust" },
];

export function StrategySummary() {
  return (
    <div id="summary" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Strategy in One Page</p>
      </FadeText>
      <Reveal delay={0.06} className="mt-8 border border-line-strong">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-1 gap-1 px-6 py-4 md:grid-cols-[220px_1fr] md:gap-6 ${
              i < rows.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">{r.label}</p>
            <p className="font-heading-jp text-[15px] text-ink">{r.value}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
