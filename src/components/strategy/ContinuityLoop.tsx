import { Reveal, FadeText } from "@/components/Reveal";

const steps = ["Aftercare", "Follow-up", "Review(必要な場合)", "Long-term Plan"];

export function ContinuityLoop() {
  return (
    <div id="continuity" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">The Continuity System</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-h2 text-ink">
          通わせる、ではなく、
          <br />
          Continuity by Relevance。
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          再来率を無理に高める施策ではなく、本人の目的と状態に合わせて関わりを続ける。AftercareもGrowth
          Assetとして扱うが、Medical Advice自体はAutomationで個別判断しない。
        </p>
      </Reveal>

      <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-4">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className="border border-line-strong px-4 py-2.5 text-[13.5px] text-ink">{s}</span>
            {i < steps.length - 1 && <span className="text-ink/40">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
