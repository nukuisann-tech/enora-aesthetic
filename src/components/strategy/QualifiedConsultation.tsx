import { Reveal, FadeText } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const conditions = [
  "Consultation BriefまたはBeauty Mapを事前に完了している",
  "Concern・Avoid・Priorityのいずれかを自分の言葉で説明できる",
  "Price・Riskの基本情報にすでに目を通している",
];

export function QualifiedConsultation() {
  return (
    <div id="qualified-consultation" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Defining Qualified Consultation</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          Qualifiedとは、
          <br />
          「見込みが高い」ではなく「準備ができている」。
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          High Value Lead / Low Value Leadのようなランク付けはしない。以下のいずれかに当てはまる状態を、Better
          Prepared Consultationと呼ぶ。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {conditions.map((c, i) => (
          <Reveal key={c} delay={0.05 * i}>
            <div className="flex items-baseline gap-4 py-4">
              <span className="font-ui-en text-[11px] text-ink/35">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-body-jp text-[13.5px] text-ink/80">{c}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <StrategyNote>
          準備ができていない相談が悪いわけではない。ただし準備ができている相談ほど、Consultation時間を対話に使えるため、両者を区別して観察する。
        </StrategyNote>
      </div>
    </div>
  );
}
