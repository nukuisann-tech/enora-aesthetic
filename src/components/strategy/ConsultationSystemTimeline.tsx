import { Reveal, FadeText } from "@/components/Reveal";

// "相談後" now folds in the four outcome categories (Proceed / Consider /
// Not Now / No Treatment) directly, instead of repeating them again in a
// separate Consultation Outcome section (editorial rebuild §17/§18).
const phases = [
  { phase: "相談前", items: ["Beauty Map", "Consultation Brief", "初回来院情報"] },
  { phase: "相談中", items: ["聞く", "整理する", "話し合う", "決める"] },
  { phase: "相談後", items: ["進める", "考える", "今はやらない", "施術しない"] },
];

// One time axis, not three cards (brief §46). The phase content is
// rendered exactly once — only the connecting line is duplicated
// (mobile vertical / desktop horizontal), and those two lines carry no
// text, so there is nothing for a screen reader or crawler to read
// twice. An earlier version rendered the whole phases.map() a second
// time inside a `md:hidden` block for the mobile layout, which put
// every phase name and item in the DOM twice.
export function ConsultationSystemTimeline() {
  return (
    <div id="consultation-timeline" className="canvas rhythm scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">相談体験</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-h2 text-ink">
          予約完了は、
          <br />
          ゴールではない。
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* Decorative only — no text, so a mobile/desktop variant each
            isn't a content duplication. */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong md:hidden" />
        <span className="absolute left-0 right-0 top-[9px] hidden h-px bg-line-strong md:block" />

        <div className="grid grid-cols-1 gap-8 pl-7 md:grid-cols-3 md:gap-10 md:pl-0 md:pt-10">
          {phases.map((p, i) => (
            <Reveal key={p.phase} delay={0.06 * i} className="relative">
              <span className="absolute -left-7 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base md:-top-10 md:left-0" />
              <p className="font-heading-jp text-[13px] tracking-[0.08em] text-accent-text">{p.phase}</p>
              <ul className="mt-2 flex flex-col gap-1.5 md:mt-4 md:gap-2">
                {p.items.map((item) => (
                  <li key={item} className="font-heading-jp text-[16px] text-ink md:text-[17px]">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3} className="mt-14 text-center">
        <p className="font-display text-[17px] italic leading-relaxed text-ink md:text-[19px]">
          「施術しない」も、正しい判断のひとつ。
        </p>
      </Reveal>
    </div>
  );
}
