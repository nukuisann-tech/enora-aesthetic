import { Reveal, FadeText } from "@/components/Reveal";

const pillars = [
  { ja: "カウンセリング", en: "Consultation", body: "施術前に十分な時間を取り、悩みと状態を確認します。" },
  { ja: "説明", en: "Explanation", body: "効果だけでなく、限界や不確実性についても説明します。" },
  { ja: "価格の透明性", en: "Price Transparency", body: "追加費用が発生しうる条件を事前に提示します。" },
  { ja: "リスク情報", en: "Risk Information", body: "副作用・合併症の可能性を隠さず共有します。" },
  { ja: "アフターケア", en: "After Care", body: "施術後の経過確認と相談窓口を用意します。" },
];

export function MedicalTrust() {
  return (
    <section className="rhythm border-t rule bg-base">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-[30px] leading-[1.4] text-ink md:text-[38px]">
            感覚だけで、
            <br />
            選ばないために。
          </h2>
        </FadeText>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.en} delay={0.06 * i}>
              <span className="font-display block text-[13px] italic text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading-jp mt-3 text-[16px] text-ink">{p.ja}</h3>
              <p className="font-ui-en text-[10px] italic tracking-[0.14em] text-ink/40">{p.en}</p>
              <p className="font-body-jp mt-3 text-[13px] leading-relaxed text-ink/60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
