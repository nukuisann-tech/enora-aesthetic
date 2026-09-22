import { Reveal, FadeText } from "@/components/Reveal";

const steps = [
  {
    no: "01",
    en: "Observe",
    ja: "観察する",
    body: "肌・輪郭・生活・価値観を、施術ありきではなくまず観察します。",
  },
  {
    no: "02",
    en: "Select",
    ja: "選ぶ",
    body: "必要なものと、必要でないものを一緒に切り分けます。",
  },
  {
    no: "03",
    en: "Plan",
    ja: "計画する",
    body: "無理のないペースと順番で、施術計画に落とし込みます。",
  },
];

export function SelectiveApproach() {
  return (
    <section className="rhythm bg-base">
      <div className="frame">
        <FadeText>
          <p className="eyebrow text-[12px]">The Selective Approach</p>
        </FadeText>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={0.1 * i}>
              <div className="border-t-2 border-accent pt-6">
                <span className="font-display text-[13px] italic tracking-[0.2em] text-ink/40">
                  {s.no}
                </span>
                <h3 className="font-display mt-3 text-[26px] italic text-ink">{s.en}</h3>
                <p className="font-heading-jp mt-1 text-[15px] text-ink/70">{s.ja}</p>
                <p className="font-body-jp mt-4 text-[13.5px] leading-loose text-ink/60">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
