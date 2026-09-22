import { Reveal, FadeText } from "@/components/Reveal";

const stages = [
  { title: "SELECTIVE BEAUTY MAP", subtitle: "Personal Clarity" },
  { title: "YOUR CONSULTATION BRIEF", subtitle: "Shared Context" },
  { title: "HUMAN CONSULTATION", subtitle: "Better Conversation" },
];

// Visual Peak 02 — ÉNORA's single biggest differentiator (brief V2 §16):
// a personal tool that produces a document, that produces a better
// human conversation. No competitor asset does all three in one line.
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
                <p className="font-heading-jp text-[17px] leading-[1.5] text-base md:text-[19px]">
                  {s.title}
                </p>
                <p className="font-ui-en mt-2 text-[10px] italic tracking-[0.1em] text-accent">
                  {s.subtitle}
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
            自分の基準が、共有情報になり、
            <br />
            より良い対話になる。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
