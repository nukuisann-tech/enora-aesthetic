import { Reveal, FadeText } from "@/components/Reveal";

const stages = [
  { title: "自分で整理する", name: "SELECTIVE BEAUTY MAP" },
  { title: "相手と共有する", name: "YOUR CONSULTATION BRIEF" },
  { title: "対話して決める", name: "HUMAN CONSULTATION" },
];

// Visual Peak 03 — ÉNORA's single biggest differentiator (editorial
// rebuild §16): Japanese carries the meaning now, English kept only as a
// small accent under each stage.
export function BeautyMapToHumanPeak() {
  return (
    <div id="beauty-to-human" className="rhythm-peak scroll-mt-24 bg-dark text-base">
      <div className="canvas text-center">
        <FadeText>
          <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-metal">
            The Biggest Differentiator
          </p>
        </FadeText>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-6">
          {stages.map((s, i) => (
            <div key={s.title} className="flex flex-col items-center md:flex-row md:items-start">
              <Reveal delay={0.08 * i} className="flex flex-col items-center text-center md:w-[190px]">
                <p className="font-heading-jp text-[19px] leading-[1.5] text-base">{s.title}</p>
                <p className="font-ui-en mt-2 text-[9.5px] italic tracking-[0.08em] text-accent">
                  {s.name}
                </p>
              </Reveal>
              {i < stages.length - 1 && (
                <span className="my-4 text-metal/50 md:mx-4 md:my-8">→</span>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.35} className="mt-16">
          <p className="font-heading-jp text-[22px] leading-[1.6] text-base md:text-[28px]">
            「考えていること」が、
            <br />
            「相談できる言葉」に変わる。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
