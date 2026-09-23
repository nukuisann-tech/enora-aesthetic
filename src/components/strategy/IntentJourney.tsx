import { Reveal, FadeText } from "@/components/Reveal";

const stages = [
  { level: "まだ情報収集中", label: "探る", items: ["悩み一覧", "コンテンツ", "私たちの考え"] },
  {
    level: "自分の基準を整理中",
    label: "整理する",
    items: ["Selective Beauty Map", "施術情報", "価格", "初めての方へ"],
  },
  {
    level: "相談を検討中",
    label: "相談する",
    items: ["Consultation Brief", "相談を予約"],
  },
  { level: "相談後", label: "決める", items: ["進める", "考える", "施術しない"] },
  { level: "継続", label: "続ける", items: ["継続的な関係づくり(後述)"] },
];

export function IntentJourney() {
  return (
    <div id="intent" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">検討段階別の導線</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          ユーザーの温度に応じてCTAを変える。すべての人をいきなり相談へ押し込まない。
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
        {stages.map((s, i) => (
          <Reveal key={s.level} delay={0.05 * i}>
            <div className={`border-t-2 pt-4 ${i === 2 ? "border-accent-text" : "border-line-strong"}`}>
              <p className="text-[10px] tracking-[0.04em] text-ink/45">{s.level}</p>
              <p className="font-display mt-1 text-[17px] italic text-ink">{s.label}</p>
              <ul className="mt-3 flex flex-col gap-1">
                {s.items.map((item) => (
                  <li key={item} className="text-[12px] leading-relaxed text-ink/65">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
