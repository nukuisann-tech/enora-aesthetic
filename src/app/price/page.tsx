import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";
import { ConceptMedicalInfo } from "@/components/ConceptMedicalInfo";

export const metadata: Metadata = {
  title: "料金について",
  description: "価格も判断材料のひとつ。ÉNORAが考える料金の見せ方。",
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
    <div className="bg-surface">
      {/* Minimal-information hero — small type, no rule, generous empty
          space around it. The page's restraint starts before any copy
          is read. */}
      <section className="rhythm-peak">
        <div className="frame text-center">
          <p className="eyebrow text-[12px]">Price</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[24px] leading-[1.6] text-ink md:text-[30px]">
              価格も、判断材料のひとつだから。
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mx-auto mt-6 max-w-md text-[12.5px] leading-loose text-ink/65">
              本ページの価格は、料金情報の見せ方を示すためのConcept Sampleです。
              実案件では、各施術の標準的な費用・追加費用の条件等を、クライアント提供情報に基づいて明示する想定です。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm-tight">
        <div className="frame grid grid-cols-1 gap-8 border-t border-b rule py-2 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <div className="border-t-2 border-accent py-8">
                <h2 className="font-heading-jp text-[16px] leading-snug text-ink">{p.title}</h2>
                <p className="font-body-jp mt-3 text-[13px] leading-relaxed text-ink/65">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rhythm border-t rule bg-base">
        <div className="frame">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <FadeText>
              <p className="eyebrow text-[12px]">Sample Price Architecture</p>
            </FadeText>
            <span className="font-ui-en text-[10px] italic tracking-[0.14em] text-ink/65">
              CONCEPT PROJECT ONLY
            </span>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
              実案件で標準費用をどう分かりやすく提示するかを示すサンプルです。
              下記は実在クリニックの料金ではありません。
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-line border-t border-b rule">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={0.05 * i}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6">
                  <div>
                    <h3 className="font-heading-jp text-[16px] text-ink">{c.nameJa}</h3>
                    <p className="font-ui-en text-[11px] italic tracking-[0.12em] text-ink/65">
                      {c.nameEn}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-ui-en text-[10px] italic tracking-[0.1em] text-ink/65">
                      Illustrative Sample
                    </p>
                    <p className="font-display text-[19px] italic text-ink">
                      {c.samplePriceRange}
                    </p>
                  </div>
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
            カウンセリングを予約する
          </Link>
          <div className="mt-14">
            <ConceptMedicalInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
