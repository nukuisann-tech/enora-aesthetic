import { Reveal, FadeText } from "@/components/Reveal";

const before = ["「毛穴が気になる」", "「何を受ければいいのか分からない」"];
const questions = ["何が気になる？", "何を避けたい？", "何を大切にしたい？"];
const after = [
  "「自然な変化を優先したい」",
  "「長いダウンタイムは避けたい」",
  "「費用は事前に把握したい」",
];

// Shows Beauty Map as a user transformation, not a feature list (editorial
// rebuild §14) — the value is turning a vague worry into words someone
// can actually bring to a consultation.
export function BeautyMapStory() {
  return (
    <div id="beauty-map-story" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">SELECTIVE BEAUTY MAP</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          施術を選ぶ前に、
          <br />
          自分の基準を整理する。
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col items-center gap-3 text-center">
        {before.map((b) => (
          <p key={b} className="font-heading-jp text-[15px] italic text-ink/55">
            {b}
          </p>
        ))}
      </div>

      <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-2">
        <span className="h-8 w-px bg-line-strong" />
        <p className="font-ui-en text-[10px] tracking-[0.1em] text-accent-text">BEAUTY MAP</p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {questions.map((q) => (
            <span key={q} className="font-body-jp text-[13px] text-ink/70">
              {q}
            </span>
          ))}
        </div>
        <span className="mt-2 h-8 w-px bg-line-strong" />
      </Reveal>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        {after.map((a) => (
          <p key={a} className="font-heading-jp text-[16px] text-ink">
            {a}
          </p>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <p className="font-display text-[17px] italic leading-relaxed text-ink md:text-[19px]">
          曖昧な悩みを、相談できる言葉へ変える。
        </p>
      </Reveal>
    </div>
  );
}
