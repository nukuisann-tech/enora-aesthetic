import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, FadeText } from "@/components/Reveal";
import { allTreatments, findTreatment, categories } from "@/data/treatments";
import { concerns } from "@/data/concerns";
import { image, focal, type ImageKey } from "@/lib/images";
import { ConceptMedicalInfo } from "@/components/ConceptMedicalInfo";

const categoryVisual: Record<string, ImageKey> = {
  "skin-quality": "skinDetail",
  "tone-texture": "eyeDetail",
  contour: "mirrorYoung",
  "preventive-care": "curtainLight",
  "body-wellness": "handDetail",
};

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

const sampleInfo = (treatment: NonNullable<ReturnType<typeof findTreatment>>) => [
  { label: "Treatment Content", ja: "施術内容", value: treatment.content },
  {
    label: "Sample Standard Price",
    ja: "サンプル標準価格",
    value: `${treatment.samplePriceRange}（Illustrative Sample — Concept Project Only）`,
  },
  { label: "Duration / Frequency", ja: "回数・頻度の目安", value: treatment.durationFrequency },
  { label: "Downtime", ja: "ダウンタイム", value: treatment.downtime },
  { label: "Main Risks / Side Effects", ja: "主なリスク・副作用", value: treatment.risks },
  { label: "Aftercare", ja: "アフターケア", value: treatment.aftercare },
];

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
  const visualKey = category ? categoryVisual[category.id] : "skinDetail";

  return (
    <article className="bg-base">
      {/* Editorial image, name, short definition. */}
      <section className="rhythm-tight">
        <div className="canvas grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <Image
              src={image(visualKey, 1000)}
              alt={treatment.name}
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className={`object-cover ${focal(visualKey)}`}
            />
          </div>
          <div>
            {category && (
              <Link
                href={`/treatments#${category.id}`}
                className="font-ui-en text-[11px] italic tracking-[0.14em] text-accent-text"
              >
                {category.nameJa} / {category.nameEn}
              </Link>
            )}
            <FadeText delay={0.1}>
              <h1 className="font-display mt-4 text-[32px] italic text-ink md:text-[42px]">
                {treatment.nameEn}
              </h1>
              <p className="font-heading-jp mt-1 text-[16px] text-ink/70">{treatment.name}</p>
            </FadeText>
            <Reveal delay={0.2}>
              <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
                OVERVIEW
              </p>
              <p className="font-body-jp mt-3 max-w-md text-[14px] leading-loose text-ink/65">
                {treatment.summary}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who may consider it / What it is / What to discuss first. */}
      <section className="rhythm border-t rule">
        <div className="frame grid grid-cols-1 gap-10 md:grid-cols-3">
          <Reveal>
            <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
              WHO MAY CONSIDER IT
            </p>
            <p className="font-body-jp mt-3 text-[13.5px] leading-relaxed text-ink/70">
              {treatment.whoMayConsiderIt}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
              WHAT IT IS
            </p>
            <p className="font-body-jp mt-3 text-[13.5px] leading-relaxed text-ink/70">
              {treatment.whatItIs}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
              WHAT TO DISCUSS FIRST
            </p>
            <p className="font-body-jp mt-3 text-[13.5px] leading-relaxed text-ink/70">
              {treatment.discussFirst}
            </p>
          </Reveal>
        </div>

        {relatedConcerns.length > 0 && (
          <div className="frame mt-14 border-t rule pt-10">
            <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
              RELATED CONCERNS
            </p>
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
          </div>
        )}
      </section>

      {/* Sample information — read like a medical document: plain
          definition list, no brand flourish, readability first. */}
      <section className="rhythm-tight border-t rule bg-[#fbfaf7]">
        <div className="frame">
          <p className="font-ui-en text-[11px] font-medium tracking-[0.1em] text-ink/65">
            SAMPLE INFORMATION
          </p>
          <dl className="mt-6 divide-y divide-line border-t border-b rule">
            {sampleInfo(treatment).map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[240px_1fr] md:gap-6">
                <dt className="font-ui-en text-[12.5px] font-medium text-ink/65">
                  {row.label}
                  <span className="font-body-jp ml-2 text-[11px] font-normal text-ink/65">{row.ja}</span>
                </dt>
                <dd className="font-body-jp text-[13.5px] leading-relaxed text-ink/75">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="frame rhythm-tight">
        <div className="text-center">
          <Link
            href="/consultation"
            className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
          >
            カウンセリングを予約する
          </Link>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/price"
              className="text-[12.5px] tracking-wide text-ink/65 underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
            >
              料金について見る
            </Link>
            <Link
              href="/first-visit"
              className="text-[12.5px] tracking-wide text-ink/65 underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
            >
              初めての方へ
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <ConceptMedicalInfo />
        </div>
      </div>
    </article>
  );
}
