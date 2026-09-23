import { Reveal, FadeText } from "@/components/Reveal";
import { decisionRules } from "@/data/strategy/decisionRules";

export function DecisionRules() {
  return (
    <div id="decisions" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">こうなったら、こうする</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          「何でもできます」ではなく、詰まっている場所に応じて処方を変える。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {decisionRules.map((r, i) => (
          <Reveal key={r.ifThis} delay={0.04 * i}>
            <div className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[1fr_auto_1.2fr] md:items-baseline md:gap-6">
              <p className="font-body-jp text-[13.5px] text-ink/70">
                <span className="font-ui-en mr-2 text-[10px] italic text-accent-text">IF</span>
                {r.ifThis}
              </p>
              <span className="hidden text-ink/30 md:block">→</span>
              <p className="font-heading-jp text-[14px] text-ink">
                <span className="font-ui-en mr-2 text-[10px] italic text-ink/45">THEN</span>
                {r.thenThat}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
