import { Reveal, FadeText } from "@/components/Reveal";
import { researchItems } from "@/data/strategy/research";

export function ResearchBasis() {
  return (
    <div id="research" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Research Basis</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          このStrategyの前提となる外部データ。数字を用いる箇所には、必ず出典を明記する。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {researchItems.map((r, i) => (
          <Reveal key={r.source} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[36px_1fr_auto] md:items-baseline md:gap-6">
              <span className="font-ui-en text-[10px] italic text-accent-text">DATA</span>
              <p className="font-body-jp text-[13.5px] leading-relaxed text-ink/80">{r.finding}</p>
              <p className="font-ui-en whitespace-nowrap text-[11px] text-ink/45">
                {r.source} — {r.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
