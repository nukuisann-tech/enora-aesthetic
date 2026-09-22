import { Reveal, FadeText } from "@/components/Reveal";
import { ninetyDayPhases } from "@/data/strategy/ninetyDay";

export function NinetyDayBlueprint() {
  return (
    <div id="blueprint" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">First 90 Days — Concept Sample</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          最初から広告を増やすのではない。Scaleの判断はこの90日のデータを見てから行う。
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {ninetyDayPhases.map((phase, i) => (
          <Reveal key={phase.range} delay={0.06 * i}>
            <div className="border-t-2 border-accent pt-5">
              <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">{phase.range}</p>
              <p className="font-display mt-1 text-[22px] italic text-ink">{phase.title}</p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-[12.5px] leading-relaxed text-ink/70">
                    — {item}
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
