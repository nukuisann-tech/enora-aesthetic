import { Reveal, FadeText } from "@/components/Reveal";

const phases = [
  { phase: "BEFORE", items: ["Beauty Map", "Consultation Brief", "First Visit Information"] },
  { phase: "DURING", items: ["Listen", "Discuss", "Decide"] },
  { phase: "AFTER", items: ["Summary", "Consider", "Follow-up"] },
];

// One time axis, not three cards (brief §46) — the point is that
// booking a consultation isn't the finish line, it's the midpoint.
export function ConsultationSystemTimeline() {
  return (
    <div id="consultation-timeline" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">The Consultation System</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-h2 text-ink">
          予約完了は、
          <br />
          ゴールではない。
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="hidden md:block">
          <div className="absolute left-0 right-0 top-[9px] h-px bg-line-strong" />
          <div className="grid grid-cols-3 gap-10">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={0.08 * i} className="relative pt-10">
                <span className="absolute left-0 top-0 h-4.5 w-4.5 rounded-full border-2 border-accent bg-base" />
                <p className="font-ui-en text-[11px] tracking-[0.16em] text-accent-text">{p.phase}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="font-heading-jp text-[17px] text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 border-l border-line-strong pl-6 md:hidden">
          {phases.map((p) => (
            <div key={p.phase} className="relative">
              <span className="absolute -left-[29px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base" />
              <p className="font-ui-en text-[11px] tracking-[0.16em] text-accent-text">{p.phase}</p>
              <ul className="mt-2 flex flex-col gap-1">
                {p.items.map((item) => (
                  <li key={item} className="font-heading-jp text-[16px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
