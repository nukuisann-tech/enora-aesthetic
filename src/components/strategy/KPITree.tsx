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
        <p className="eyebrow text-[12px]">KPIツリー — 構造サンプル</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          施術成約率だけを、
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
          <p className="text-[11px] tracking-[0.04em] text-ink/45">
            計測イベント一覧(設計サンプルのみ)
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
          「施術しない」も適切な判断になり得るため、施術成約率単体を伸ばすツリーにしない。
        </StrategyNote>
      </Reveal>

      <Reveal delay={0.26} className="mt-16 border-t border-line pt-12">
        <p className="font-display text-center text-[17px] italic text-ink md:text-[20px]">
          {growthFormula}
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-[10.5px] tracking-[0.04em] text-ink/45">
              受け入れ体制のガードレール
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {capacityGuardrails.map((c) => (
                <li key={c} className="text-[12px] text-ink/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10.5px] tracking-[0.04em] text-ink/45">
              収益のガードレール
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {economicsGuardrails.map((e) => (
                <li key={e} className="text-[12px] text-ink/70">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-body-jp mx-auto mt-8 max-w-xl text-center text-[12.5px] leading-relaxed text-ink/55">
          品質の指標(左のツリー)が上がっても、受け入れ能力か収益性のどちらかが崩れていれば、それは成長ではない。
        </p>
      </Reveal>
    </div>
  );
}
