import { Reveal, FadeText } from "@/components/Reveal";
import { businessLenses } from "@/data/strategy/businessSystem";

// An Index, deliberately not a Dashboard (brief §32/§40) — five words and
// five phrases, no gauges, no numbers, no color bands.
export function BusinessSystemLenses() {
  return (
    <div id="business-lenses" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">The Business System — Five Lenses</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          Marketingだけを見る経営判断はしない。5つのレンズを同時に見る。
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
        {businessLenses.map((l, i) => (
          <Reveal key={l.name} delay={0.05 * i} className="border-t-2 border-line-strong pt-4">
            <p className="font-display text-[18px] italic text-ink">{l.name}</p>
            <p className="font-ui-en mt-1 text-[10.5px] tracking-[0.06em] text-ink/55">{l.watches}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
