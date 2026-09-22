import { Reveal, FadeText } from "@/components/Reveal";

const steps = [
  { en: "Listen", ja: "聞く", body: "まず、悩みと生活背景を聞きます。" },
  { en: "Assess", ja: "確認する", body: "肌・輪郭・既往歴などを専門的に確認します。" },
  { en: "Discuss", ja: "話し合う", body: "選択肢と、あえて選ばない理由も含めて話します。" },
  { en: "Select", ja: "選ぶ", body: "必要な範囲だけをお客様自身が選びます。" },
  { en: "Decide", ja: "決める", body: "急かさず、持ち帰って決めていただいて構いません。" },
];

export function ConsultationExperience() {
  return (
    <section className="rhythm border-t rule bg-surface">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-[30px] leading-[1.4] text-ink md:text-[38px]">
            施術を決める前の時間を、
            <br />
            いちばん丁寧に。
          </h2>
        </FadeText>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong md:left-0 md:right-0 md:top-[7px] md:h-px md:w-auto md:bg-line-strong" />
          <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.en} delay={0.08 * i} className="relative pl-8 md:pl-0 md:pt-10">
                <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface md:left-1/2 md:-translate-x-1/2" />
                <p className="font-display text-[19px] italic text-ink md:text-center">{s.en}</p>
                <p className="font-heading-jp text-[13px] text-ink/70 md:text-center">{s.ja}</p>
                <p className="font-body-jp mt-2 max-w-[180px] text-[12px] leading-relaxed text-ink/55 md:mx-auto md:text-center">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
