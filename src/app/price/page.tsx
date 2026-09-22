import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";

export const metadata: Metadata = {
  title: "料金について",
  description: "価格も判断材料のひとつ。ÉNORAが考える料金の伝え方。",
};

const principles = [
  {
    title: "カウンセリング料金は事前に明示します",
    body: "初回カウンセリングにかかる費用は、予約時点でお伝えします。",
  },
  {
    title: "追加費用の条件は施術前に説明します",
    body: "状態によって追加処置が必要になる可能性がある場合、その条件と目安を事前に共有します。",
  },
  {
    title: "「今日決めないと」という誘導はしません",
    body: "期間限定の値引きを理由に即決を促すような案内はしていません。",
  },
];

export default function PricePage() {
  return (
    <div className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">Price</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.5] text-ink md:text-[42px]">
              価格も、
              <br />
              判断材料のひとつだから。
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mt-6 max-w-lg text-[14.5px] leading-loose text-ink/70">
              本ページはコンセプトプロジェクトのため、具体的な金額は記載していません。
              実際の料金はカウンセリング時に個別の施術内容に応じて提示します。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-8 border-t border-b rule py-2 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <div className="border-t-2 border-accent py-8">
                <h2 className="font-heading-jp text-[16px] leading-snug text-ink">{p.title}</h2>
                <p className="font-body-jp mt-3 text-[13px] leading-relaxed text-ink/60">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rhythm border-t rule bg-surface">
        <div className="frame">
          <FadeText>
            <p className="eyebrow text-[12px]">Investment Range (Relative)</p>
          </FadeText>
          <Reveal delay={0.1}>
            <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
              カテゴリー間のおおよその相対感です。実額ではなく、検討の目安としてご覧ください。
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-line border-t border-b rule">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={0.05 * i}>
                <div className="flex items-center justify-between gap-6 py-6">
                  <div>
                    <h3 className="font-heading-jp text-[16px] text-ink">{c.nameJa}</h3>
                    <p className="font-ui-en text-[11px] italic tracking-[0.12em] text-ink/40">
                      {c.nameEn}
                    </p>
                  </div>
                  <span className="font-display text-[18px] italic tracking-widest text-accent">
                    {"¥".repeat(i < 2 ? 1 : i < 4 ? 2 : 3)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rhythm-tight text-center">
        <div className="frame">
          <Link
            href="/consultation"
            className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
          >
            正式なお見積りを相談する
          </Link>
        </div>
      </section>
    </div>
  );
}
