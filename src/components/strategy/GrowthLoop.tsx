import { Reveal, FadeText } from "@/components/Reveal";

const loop = [
  "Better Content",
  "Better Understanding",
  "Better Consultation",
  "Better Decision",
  "Better Experience",
  "Better Trust",
  "Better Referral",
];

// Visual Peak 03 — deliberately a different loop shape from Tomori's
// Product → Content → Next Customer (brief §33).
export function GrowthLoop() {
  return (
    <div id="loop" className="rhythm-peak scroll-mt-24 bg-dark text-base">
      <div className="canvas text-center">
        <FadeText>
          <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-metal">Growth Loop</p>
        </FadeText>

        <div className="mx-auto mt-12 flex max-w-md flex-col items-center">
          {loop.map((step, i) => (
            <Reveal key={step} delay={0.05 * i} className="flex flex-col items-center">
              <p className="font-display text-[19px] italic text-base md:text-[22px]">{step}</p>
              <span className="py-2.5 text-metal/50">↓</span>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <p className="font-display text-[19px] italic text-accent md:text-[22px]">
              Better Content
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.5} className="mt-16">
          <p className="font-heading-jp text-[22px] leading-[1.6] text-base md:text-[28px]">
            BETTER DECISIONS
            <br />
            CREATE BETTER GROWTH.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
