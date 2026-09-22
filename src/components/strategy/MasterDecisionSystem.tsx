import { Reveal, FadeText } from "@/components/Reveal";
import { decisionSystemNodes } from "@/data/strategy/decisionSystem";

// A Flow diagram (brief §29 — no new Visual Grammar type). This section
// adds no new strategic content; it names the one path that Growth
// Engine, Intent Journey, Consultation System and Growth Loop each show
// a different slice of, so the relationship between them is visible in
// one place instead of re-explained four times.
export function MasterDecisionSystem() {
  return (
    <div id="decision-system" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">The ÉNORA Decision System — Master Map</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-xl text-h2 text-ink">
          このあと続く4つのSectionは、
          <br />
          すべて同じ1本の道の一部である。
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong md:hidden" />
        <span className="absolute left-0 right-0 top-[9px] hidden h-px bg-line-strong md:block" />

        <div className="grid grid-cols-1 gap-8 pl-7 md:grid-cols-4 md:gap-x-6 md:gap-y-14 md:pl-0 md:pt-10">
          {decisionSystemNodes.map((n, i) => (
            <Reveal key={n.stage} delay={0.04 * i} className="relative">
              <span className="absolute -left-7 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base md:-top-10 md:left-0" />
              <p className="font-display text-[16px] italic text-ink">{n.stage}</p>
              <p className="font-body-jp mt-1 text-[12.5px] leading-relaxed text-ink/65">{n.detail}</p>
              <p className="font-ui-en mt-2 text-[9.5px] tracking-[0.08em] text-accent-text">
                {n.livesIn}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
