import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";

export const metadata: Metadata = {
  title: "施術",
  description: "施術は5つの領域で整理しています。数ではなく、必要な範囲で選びます。",
};

export default function TreatmentsPage() {
  return (
    <div className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">Treatments</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.4] text-ink md:text-[44px]">
              施術は、
              <br />5つの領域で整理しています。
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mt-6 max-w-lg text-[14.5px] leading-loose text-ink/70">
              ここに掲載しているのはコンセプトプロジェクトとしてのサンプル施術です。
              実際の提案はカウンセリングで個別に設計します。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm flex flex-col gap-24 md:gap-32">
        {categories.map((c) => (
          <div key={c.id} id={c.id} className="scroll-mt-24 frame">
            <Reveal>
              <div className="flex items-baseline gap-4 border-b rule pb-6">
                <span className="font-display text-[15px] italic text-ink/40">{c.no}</span>
                <h2 className="font-heading-jp text-[24px] text-ink md:text-[30px]">
                  {c.nameJa}
                  <span className="font-ui-en ml-3 text-[12px] italic tracking-[0.14em] text-accent">
                    {c.nameEn}
                  </span>
                </h2>
              </div>
              <p className="font-body-jp mt-6 max-w-2xl text-[14px] leading-loose text-ink/65">
                {c.description}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.treatments.map((t, ti) => (
                <Reveal key={t.slug} delay={0.06 * (ti + 1)}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group flex h-full flex-col justify-between border rule p-6 transition-colors hover:border-accent"
                  >
                    <div>
                      <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent">
                        Sample Treatment
                      </p>
                      <h3 className="font-display mt-3 text-[20px] italic text-ink">
                        {t.nameEn}
                      </h3>
                      <p className="font-heading-jp text-[14px] text-ink/70">{t.name}</p>
                      <p className="font-body-jp mt-4 text-[13px] leading-relaxed text-ink/60">
                        {t.summary}
                      </p>
                    </div>
                    <span className="mt-6 inline-block text-[12px] tracking-wide text-ink underline decoration-line underline-offset-8 group-hover:decoration-accent">
                      詳しく見る →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
