import Image from "next/image";
import { Reveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";

const steps = [
  { en: "Listen", ja: "聞く", body: "悩みと生活背景を聞きます。" },
  { en: "Assess", ja: "確認する", body: "肌・輪郭・既往歴を確認します。" },
  { en: "Discuss", ja: "話し合う", body: "選ばない理由も含めて話します。" },
  { en: "Select", ja: "選ぶ", body: "必要な範囲だけを選びます。" },
];

export function ConsultationExperience() {
  return (
    <section className="rhythm border-t rule bg-[#fbfaf7]">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-[26px] leading-[1.5] text-ink md:text-[32px]">
            施術を決める前の時間を、
            <br />
            いちばん丁寧に。
          </h2>
        </FadeText>

        <div className="relative mt-20 md:mt-28">
          {/* Desktop: one continuous line runs the full width; a single
              photo floats above it near the midpoint instead of one
              thumbnail per stage. */}
          <div className="hidden md:block">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-line-strong" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.en} delay={0.06 * i} className="relative pt-10">
                  <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-[#fbfaf7]" />
                  <p className="font-display text-[19px] italic text-ink">{s.en}</p>
                  <p className="font-heading-jp text-[13px] text-ink/60">{s.ja}</p>
                  <p className="font-body-jp mt-2 max-w-[160px] text-[12px] leading-relaxed text-ink/50">
                    {s.body}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={0.3} className="relative pt-10">
                <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-ink bg-accent" />
                <p className="font-display text-[24px] italic text-ink">Decide</p>
                <p className="font-heading-jp text-[13px] text-ink/70">決める</p>
                <p className="font-body-jp mt-2 max-w-[160px] text-[12px] leading-relaxed text-ink/60">
                  急かさず、持ち帰って決めていただけます。
                </p>
              </Reveal>
            </div>

            <div className="relative mx-auto -mt-4 h-40 w-64 overflow-hidden">
              <Image
                src={image("skinDetail", 700)}
                alt="肌の質感を写したクローズアップ"
                fill
                sizes="256px"
                className={`object-cover ${focal("skinDetail")}`}
              />
            </div>
          </div>

          {/* Mobile: vertical timeline, Decide visually larger. */}
          <div className="flex flex-col gap-8 border-l rule pl-6 md:hidden">
            {steps.map((s) => (
              <div key={s.en} className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-[#fbfaf7]" />
                <p className="font-display text-[17px] italic text-ink">
                  {s.en} <span className="font-heading-jp text-[13px] not-italic text-ink/60">{s.ja}</span>
                </p>
                <p className="font-body-jp mt-1 text-[12.5px] leading-relaxed text-ink/50">{s.body}</p>
              </div>
            ))}
            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ink bg-accent" />
              <p className="font-display text-[22px] italic text-ink">
                Decide <span className="font-heading-jp text-[14px] not-italic text-ink/70">決める</span>
              </p>
              <p className="font-body-jp mt-1 text-[12.5px] leading-relaxed text-ink/60">
                急かさず、持ち帰って決めていただけます。
              </p>
            </div>
          </div>
        </div>

        <p className="font-body-jp mt-16 max-w-md border-l-2 border-accent pl-4 text-[12.5px] italic leading-relaxed text-ink/55">
          施術しないという結論も、正しい相談結果のひとつです。
        </p>
      </div>
    </section>
  );
}
