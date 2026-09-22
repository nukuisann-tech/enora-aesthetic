import { Reveal, FadeText } from "@/components/Reveal";

export function StrategyHero() {
  return (
    <div className="rhythm-tight pb-0">
      <div className="canvas">
        <Reveal>
          <p className="eyebrow text-[11px]">Industry 02 — Aesthetic Medicine</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-ink/45">
              Website Strategy
            </p>
            <h2 className="font-heading-jp mt-3 text-[24px] leading-[1.6] text-ink md:text-[30px]">
              美しさは、
              <br />
              足すより選ぶ。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-accent-text">
              Growth Strategy
            </p>
            <FadeText delay={0.15}>
              <h1 className="font-heading-jp mt-3 text-[24px] leading-[1.6] text-ink md:text-[30px]">
                予約を増やす前に、
                <br />
                判断の質を上げる。
              </h1>
            </FadeText>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="font-display text-[15px] italic tracking-[0.02em] text-ink/70 md:text-[17px]">
            BETTER DECISIONS. BETTER GROWTH.
          </p>
          <p className="font-ui-en mt-2 text-[10px] tracking-[0.24em] text-ink/40">
            SELECTIVE AESTHETICS — GROWTH SYSTEM
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-8">
          <span className="inline-flex border border-line-strong px-3 py-1.5 text-[10px] tracking-[0.1em] text-ink/55">
            CONCEPT STRATEGY — NOT ACTUAL CLIENT RESULTS
          </span>
        </Reveal>
      </div>
    </div>
  );
}
