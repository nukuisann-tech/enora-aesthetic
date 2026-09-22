import { Reveal, FadeText } from "@/components/Reveal";
import {
  kpiTree,
  measurementEvents,
  capacityGuardrails,
  economicsGuardrails,
  growthFormula,
} from "@/data/strategy/kpi";
import { StrategyNote } from "./StrategyNote";

export function KPITree() {
  return (
    <div id="kpi" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">KPI Tree — Sample Structure</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          Treatment Conversion Rateだけを、
          <br />
          単独で最大化しない。
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="font-ui-en mt-3 text-[11px] italic text-ink/45">
          SAMPLE — 実測値ではなく、KPIツリーの構造のみを示す
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-14 max-w-md">
        <div className="flex flex-col items-center">
          {kpiTree.map((node, i) => (
            <div key={node} className="flex flex-col items-center">
              {i > 0 && <span className="py-2 text-ink/35">↑</span>}
              <div
                className={`w-full border px-6 py-4 text-center ${
                  i === kpiTree.length - 1
                    ? "border-ink bg-ink text-base"
                    : "border-line-strong text-ink"
                }`}
              >
                <p className="font-heading-jp text-[15px] md:text-[16px]">{node}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.22} className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">
            WEBSITE MEASUREMENT EVENTS (DESIGN ONLY)
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {measurementEvents.map((e) => (
              <li key={e} className="font-ui-en text-[12px] text-ink/70">
                {e}
              </li>
            ))}
          </ul>
        </div>
        <StrategyNote>
          「No Treatment」も適切なDecisionになり得るため、Treatment
          Conversion単体を伸ばすTreeにしない。
        </StrategyNote>
      </Reveal>

      <Reveal delay={0.26} className="mt-16 border-t border-line pt-12">
        <p className="font-display text-center text-[17px] italic text-ink md:text-[20px]">
          {growthFormula}
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45">
              CAPACITY GUARDRAIL
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {capacityGuardrails.map((c) => (
                <li key={c} className="font-ui-en text-[12px] text-ink/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45">
              ECONOMICS GUARDRAIL
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {economicsGuardrails.map((e) => (
                <li key={e} className="font-ui-en text-[12px] text-ink/70">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-body-jp mx-auto mt-8 max-w-xl text-center text-[12.5px] leading-relaxed text-ink/55">
          Qualityの指標(左のTree)が上がっても、CapacityかEconomicsのどちらかが崩れていれば、それはGrowthではない。
        </p>
      </Reveal>
    </div>
  );
}
