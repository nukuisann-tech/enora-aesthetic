import { Reveal, FadeText } from "@/components/Reveal";

const principles = [
  { en: "Consultation", ja: "カウンセリング", body: "施術前に十分な時間を取り、悩みと状態を確認します。" },
  { en: "Explanation", ja: "説明", body: "効果だけでなく、限界や不確実性についても説明します。" },
  { en: "Price Transparency", ja: "価格の透明性", body: "追加費用が発生しうる条件を事前に提示します。" },
  { en: "Risk Information", ja: "リスク情報", body: "副作用・合併症の可能性を隠さず共有します。" },
  { en: "After Care", ja: "アフターケア", body: "施術後の経過確認と相談窓口を用意します。" },
];

export function MedicalTrust() {
  return (
    <section className="rhythm border-t rule bg-[#fbfaf7]">
      <div className="frame">
        <FadeText>
          <p className="eyebrow text-[12px]">Medical Trust</p>
        </FadeText>
        <Reveal delay={0.1}>
          <h2 className="font-heading-jp mt-4 text-[26px] leading-[1.5] text-ink md:text-[32px]">
            感覚だけで、選ばないために。
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-line-strong">
          {principles.map((p, i) => (
            <Reveal key={p.en} delay={0.04 * i}>
              <div className="grid grid-cols-[36px_1fr] items-baseline gap-x-5 gap-y-1 border-b border-line py-6 md:grid-cols-[48px_220px_1fr]">
                <span className="font-ui-en text-[12px] text-ink/65">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-ui-en text-[15px] font-medium tracking-wide text-ink md:text-[16px]">
                  {p.en}
                  <span className="font-body-jp ml-3 text-[12px] font-normal text-ink/65">{p.ja}</span>
                </p>
                <p className="font-body-jp col-span-2 text-[13px] leading-relaxed text-ink/65 md:col-span-1">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
