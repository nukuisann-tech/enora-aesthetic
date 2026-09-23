import { Reveal, FadeText } from "@/components/Reveal";

// Compressed to 6 Japanese steps (editorial rebuild §11/§12) — the prior
// version had 6 English labels before Decide (Discover…Consult) plus
// Continue/Advocate after it; Portfolio Case Study readers don't need to
// memorize 8–9 stages. "決める" stays the one visually singled-out step.
const before = ["知る", "気になることを整理する", "判断材料を集める", "優先したいことを決める", "相談する"];

export function GrowthEngine() {
  return (
    <div id="engine" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">戦略</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-xl text-h2 text-ink">
          選択肢を増やすのではなく、
          <br />
          判断軸をつくる。
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-md">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong" />
        <div className="flex flex-col gap-7">
          {before.map((step, i) => (
            <Reveal key={step} delay={0.04 * i} className="relative pl-8">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base" />
              <p className="font-heading-jp text-[16px] text-ink">{step}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="relative pl-8 py-2">
            <span className="absolute left-[-6px] top-1 h-6 w-6 rounded-full border-2 border-ink bg-accent" />
            <p className="font-display text-[32px] italic text-ink md:text-[38px]">決める</p>
            <p className="font-body-jp text-[12.5px] text-ink/60">
              施術する / しないを含めて判断する。
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
