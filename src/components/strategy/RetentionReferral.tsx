import { Reveal, FadeText } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const retentionSignals = [
  "Repeat When Appropriate",
  "Follow-up Completion",
  "Long-term Relationship",
  "Patient Experience",
  "Revenue per Relationship",
];

export function RetentionReferral() {
  return (
    <div id="retention" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow text-[12px]">Retention</p>
          <p className="font-body-jp mt-4 text-[13.5px] leading-loose text-ink/65">
            「必要なときにまたここへ相談したい」を目指す。見る指標：
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {retentionSignals.map((s) => (
              <li key={s} className="text-[13px] text-ink/75">
                — {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <FadeText>
            <p className="eyebrow text-[12px]">Referral</p>
          </FadeText>
          <p className="font-body-jp mt-4 text-[13.5px] leading-loose text-ink/65">
            紹介特典が中心ではない。信頼できるConsultation
            Experienceそのものが紹介のきっかけになる。
          </p>
          <p className="font-heading-jp mt-5 border-l-2 border-accent pl-4 text-[16px] italic leading-relaxed text-ink">
            「ここは何でも勧めてこなかったよ。」
          </p>
          <div className="mt-6">
            <StrategyNote>
              医療領域のため、紹介施策・口コミ利用・広告転用は実案件で最新規制を確認する。架空Reviewは作らない。
            </StrategyNote>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
