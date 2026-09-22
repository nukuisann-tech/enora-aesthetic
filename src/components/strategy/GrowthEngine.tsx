import { Reveal, FadeText } from "@/components/Reveal";

const before = ["Discover", "Explore", "Understand", "Define", "Trust", "Consult"];

// One editorial journey, not a circle diagram (brief §44) — a single
// vertical line at every viewport, with Decide visually singled out at
// its center rather than treated as just another step. What happens
// after Decide (Continue / Advocate) is not repeated here — it already
// has its own chapters (The Continuity System, The Growth Loop), and
// showing it a third time was pure duplication (brief V2 §26).
export function GrowthEngine() {
  return (
    <div id="engine" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">The Growth Engine</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-xl text-h2 text-ink">
          最後を「買う」ではなく、
          <br />
          「決める」にする。
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-md">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong" />
        <div className="flex flex-col gap-7">
          {before.map((step, i) => (
            <Reveal key={step} delay={0.04 * i} className="relative pl-8">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base" />
              <p className="font-display text-[17px] italic text-ink">{step}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="relative pl-8 py-2">
            <span className="absolute left-[-6px] top-1 h-6 w-6 rounded-full border-2 border-ink bg-accent" />
            <p className="font-display text-[32px] italic text-ink md:text-[38px]">Decide</p>
            <p className="font-body-jp text-[12.5px] text-ink/60">
              Treatmentする / しないを含めて判断する。
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
