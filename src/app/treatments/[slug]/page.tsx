import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, FadeText } from "@/components/Reveal";
import { allTreatments, findTreatment, categories } from "@/data/treatments";
import { concerns } from "@/data/concerns";

export function generateStaticParams() {
  return allTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = findTreatment(slug);
  if (!treatment) return {};
  return { title: treatment.name, description: treatment.summary };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = findTreatment(slug);
  if (!treatment) notFound();

  const category = categories.find((c) => c.treatments.some((t) => t.slug === slug));
  const relatedConcerns = concerns.filter((c) => treatment.forConcerns.includes(c.id));

  return (
    <article className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          {category && (
            <Link
              href={`/treatments#${category.id}`}
              className="font-ui-en text-[11px] italic tracking-[0.14em] text-accent"
            >
              {category.nameJa} / {category.nameEn}
            </Link>
          )}
          <FadeText delay={0.1}>
            <h1 className="font-display mt-6 text-[34px] italic text-ink md:text-[46px]">
              {treatment.nameEn}
            </h1>
            <p className="font-heading-jp mt-2 text-[18px] text-ink/70">{treatment.name}</p>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mt-6 max-w-xl text-[14.5px] leading-loose text-ink/70">
              {treatment.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="eyebrow text-[12px]">Care Direction</h2>
            <p className="font-body-jp mt-4 text-[14px] leading-loose text-ink/70">
              {treatment.careDirection}
            </p>

            {relatedConcerns.length > 0 && (
              <>
                <h2 className="eyebrow mt-10 text-[12px]">対象となる悩み</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedConcerns.map((c) => (
                    <Link
                      key={c.id}
                      href={`/concerns#${c.id}`}
                      className="border rule px-3 py-1.5 text-[12px] text-ink/70 transition-colors hover:border-accent"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border rule p-6">
              <h2 className="eyebrow text-[12px]">Before Consultation</h2>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="font-heading-jp text-[13px] text-ink/50">回数の目安</dt>
                  <dd className="font-body-jp mt-1 text-[14px] text-ink">{treatment.sessionNote}</dd>
                </div>
                <div>
                  <dt className="font-heading-jp text-[13px] text-ink/50">ダウンタイム</dt>
                  <dd className="font-body-jp mt-1 text-[14px] text-ink">{treatment.downtimeNote}</dd>
                </div>
                <div>
                  <dt className="font-heading-jp text-[13px] text-ink/50">カウンセリングで確認すること</dt>
                  <dd className="font-body-jp mt-1 text-[14px] text-ink">
                    {treatment.consultationNote}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="frame mt-16 border-t rule pt-10 text-center">
          <p className="font-body-jp text-[13px] text-ink/55">
            記載内容はコンセプトプロジェクトのサンプルです。実際の適応・回数・費用はカウンセリングで個別に判断します。
          </p>
          <Link
            href="/consultation"
            className="mt-6 inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
          >
            カウンセリングを予約する
          </Link>
        </div>
      </section>
    </article>
  );
}
