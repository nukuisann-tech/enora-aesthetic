import { Reveal } from "@/components/Reveal";

const statements = [
  {
    no: "01",
    label: "The Problem",
    body: "情報が多いほど、ユーザーは決めやすくなるとは限らない。",
  },
  {
    no: "02",
    label: "The Strategy",
    body: "Treatmentを薦める前に、判断軸を整理する。",
  },
  {
    no: "03",
    label: "The Business Effect",
    body: "質の高い相談と、長期的な関係を増やす。",
  },
];

export function ExecutiveSummary() {
  return (
    <div className="rhythm-tight">
      <div className="canvas grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {statements.map((s, i) => (
          <Reveal key={s.no} delay={0.06 * i}>
            <div className="border-t-2 border-accent pt-6">
              <span className="font-display text-[15px] italic text-ink/35">{s.no}</span>
              <p className="font-ui-en mt-2 text-[11px] tracking-[0.14em] text-accent-text">
                {s.label}
              </p>
              <p className="font-heading-jp mt-4 text-[19px] leading-[1.6] text-ink md:text-[21px]">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
