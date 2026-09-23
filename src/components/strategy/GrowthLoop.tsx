import { Reveal, FadeText } from "@/components/Reveal";

const loop = ["良い判断が、", "良い体験をつくる。", "良い体験が、", "信頼になる。", "信頼が、", "次の相談につながる。"];

// Visual Peak 04 — deliberately a different loop shape from Tomori's
// Product → Content → Next Customer. Japanese carries the narrative now
// (editorial rebuild §24); the English line becomes a one-time closing
// signature, not the main statement.
export function GrowthLoop() {
  return (
    <div className="rhythm-peak bg-dark text-base">
      <div className="canvas text-center">
        <FadeText>
          <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-metal">
            成長の循環
          </p>
        </FadeText>

        <div className="mx-auto mt-12 flex max-w-md flex-col items-center">
          {loop.map((step, i) => (
            <Reveal key={step} delay={0.05 * i}>
              <p className="font-heading-jp text-[19px] text-base md:text-[22px]">{step}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 max-w-md">
          <p className="font-body-jp text-[13px] leading-relaxed text-metal">
            信頼は、次の相談だけでなく、紹介にもつながる。
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-16">
          <p className="font-display text-[16px] italic tracking-[0.02em] text-accent md:text-[18px]">
            BETTER DECISIONS. BETTER GROWTH.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
