import { Reveal, FadeText } from "@/components/Reveal";

const noise = ["Treatment", "SNS", "Price", "Trend", "Review", "Campaign"];
const clarity = ["Concern", "Priority", "Risk", "Price", "Consultation"];

// Visual Peak 01. An editorial data graphic, not an ad-style funnel — no
// icons, no gradient arrows, just typography and a rule to carry the
// transformation from noise to clarity.
export function MarketTensionVisual() {
  return (
    <div id="tension-visual" className="rhythm-peak scroll-mt-24 bg-dark text-base">
      <div className="canvas">
        <FadeText>
          <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-metal">
            TOO MUCH INFORMATION. TOO LITTLE CLARITY.
          </p>
        </FadeText>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Reveal>
            <p className="font-ui-en text-[10px] tracking-[0.2em] text-metal/70">NOISE</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
              {noise.map((n, i) => (
                <span
                  key={n}
                  className="font-display italic text-metal"
                  style={{ fontSize: `${15 + ((i * 7) % 12)}px`, opacity: 0.5 + (i % 3) * 0.15 }}
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col items-center gap-2 py-4 md:py-0">
            <span className="h-10 w-px bg-line-strong md:h-px md:w-10" />
            <span className="font-heading-jp text-[13px] text-base">ÉNORA</span>
            <span className="h-10 w-px bg-line-strong md:h-px md:w-10" />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-ui-en text-[10px] tracking-[0.2em] text-accent">CLARITY</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {clarity.map((c) => (
                <li key={c} className="font-heading-jp text-[19px] text-base md:text-[22px]">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-16 max-w-lg">
          <p className="font-body-jp text-[13.5px] leading-loose text-metal">
            美容医療では、Treatment名・Before/After・SNSトレンド・価格・インフルエンサー・口コミ・キャンペーンが大量に存在する。ユーザーが本当に必要としているのは、情報の量ではなく、自分にとっての判断材料の整理である。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
