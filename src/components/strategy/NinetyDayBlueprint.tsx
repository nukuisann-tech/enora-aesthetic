import { Reveal, FadeText } from "@/components/Reveal";
import { ninetyDayPhases } from "@/data/strategy/ninetyDay";

export function NinetyDayBlueprint() {
  return (
    <div className="canvas rhythm">
      <FadeText>
        <p className="eyebrow text-[12px]">最初の90日</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          最初から広告を増やすのではない。Scaleの判断は、この90日のデータを見てから行う。
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {ninetyDayPhases.map((phase, i) => (
          <Reveal key={phase.range} delay={0.06 * i}>
            <div className="border-t-2 border-accent pt-5">
              <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">{phase.range}</p>
              <p className="font-heading-jp mt-1 text-[19px] text-ink">{phase.title}</p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-[12.5px] leading-relaxed text-ink/70">
                    — {item}
                  </li>
                ))}
              </ul>
              {phase.detail.length > 0 && (
                <details className="group mt-2">
                  <summary className="font-ui-en cursor-pointer list-none text-[10px] tracking-[0.06em] text-ink/40">
                    + 詳細
                  </summary>
                  <ul className="mt-1.5 flex flex-col gap-1.5">
                    {phase.detail.map((item) => (
                      <li key={item} className="text-[12.5px] leading-relaxed text-ink/60">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <p className="font-heading-jp mt-5 border-t border-line pt-4 text-[14px] leading-relaxed text-ink">
                {phase.gate}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 max-w-xl text-center mx-auto">
        <p className="font-heading-jp text-[17px] text-ink">Scaleは、判断である。</p>
        <p className="font-body-jp mt-2 text-[12.5px] leading-relaxed text-ink/60">
          問いに答えられても、広告出稿の拡大は自動的には行わない。次のフェーズへ進むかどうかは、その都度判断する。
        </p>
      </Reveal>
    </div>
  );
}
