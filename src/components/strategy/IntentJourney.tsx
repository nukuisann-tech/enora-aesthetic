import { Reveal, FadeText } from "@/components/Reveal";

const stages = [
  { level: "LOW INTENT", label: "Explore", items: ["Concern", "Journal", "Philosophy"] },
  {
    level: "MIDDLE INTENT",
    label: "Define",
    items: ["Selective Beauty Map", "Treatment Information", "Price", "First Visit"],
  },
  { level: "HIGH INTENT", label: "Consult", items: ["Consultation Brief", "Book Consultation"] },
  { level: "POST CONSULTATION", label: "Decide", items: ["Proceed", "Consider", "No Treatment"] },
  { level: "CONTINUITY", label: "Continue", items: ["Aftercare", "Follow-up", "Long-term Care"] },
];

export function IntentJourney() {
  return (
    <div id="intent" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Intent Journey</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          ユーザーの温度に応じてCTAを変える。すべての人をいきなりConsultationへ押し込まない。
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
        {stages.map((s, i) => (
          <Reveal key={s.level} delay={0.05 * i}>
            <div className={`border-t-2 pt-4 ${i === 2 ? "border-accent-text" : "border-line-strong"}`}>
              <p className="font-ui-en text-[9.5px] tracking-[0.12em] text-ink/45">{s.level}</p>
              <p className="font-display mt-1 text-[18px] italic text-ink">{s.label}</p>
              <ul className="mt-3 flex flex-col gap-1">
                {s.items.map((item) => (
                  <li key={item} className="text-[12px] leading-relaxed text-ink/65">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
