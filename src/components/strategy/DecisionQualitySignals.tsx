import { Reveal, FadeText } from "@/components/Reveal";
import { decisionQualitySignals, decisionQualityDisclaimer } from "@/data/strategy/decisionQuality";
import { ClaimTag } from "./ClaimTag";
import { StrategyNote } from "./StrategyNote";

// An Index (brief §29's Visual Grammar), deliberately not a Dashboard —
// there is no score, no gauge, no color-coded "good/bad" band. Signals
// are named, not measured, on this Concept Project.
export function DecisionQualitySignals() {
  return (
    <div id="decision-signals" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">判断の質を見る指標</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          「判断の質」を、
          <br />
          スコアではなく観察軸で見る。
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-3">
        <ClaimTag type="STRATEGY" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
        {decisionQualitySignals.map((g, i) => (
          <Reveal key={g.group} delay={0.05 * i}>
            <p className="text-[11px] tracking-[0.04em] text-accent-text">{g.group}</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {g.signals.map((s) => (
                <li key={s} className="text-[13px] leading-relaxed text-ink/75">
                  — {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <StrategyNote>{decisionQualityDisclaimer}</StrategyNote>
      </div>
    </div>
  );
}
