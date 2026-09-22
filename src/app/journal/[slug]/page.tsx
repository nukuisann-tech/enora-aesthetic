import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { articles, findArticle } from "@/data/journal";
import { findConcern } from "@/data/concerns";
import { findCategory } from "@/data/treatments";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const relatedConcern = article.relatedConcernId ? findConcern(article.relatedConcernId) : undefined;
  const relatedCategory = article.relatedCategoryId ? findCategory(article.relatedCategoryId) : undefined;

  return (
    <article className="bg-base">
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/7]">
        <Image
          src={image(article.image, 2000)}
          alt={article.imageAlt}
          fill
          sizes="100vw"
          className={`object-cover ${focal(article.image)}`}
          priority
        />
      </div>

      <div className="frame rhythm-tight max-w-2xl">
        <p className="font-ui-en text-[11px] italic tracking-[0.16em] text-accent-text">
          {article.category}
        </p>
        <FadeText delay={0.1}>
          <h1 className="font-heading-jp mt-4 text-[28px] leading-[1.5] text-ink md:text-[36px]">
            {article.title}
          </h1>
        </FadeText>

        <Reveal delay={0.2}>
          <p className="font-heading-jp mt-8 border-l-2 border-accent pl-5 text-[17px] italic leading-relaxed text-ink/80">
            {article.pullQuote}
          </p>
        </Reveal>

        {/* No per-paragraph motion here — a reading page is one of the
            deliberately still sections (brief §26). */}
        <div className="mt-10 flex flex-col gap-6">
          {article.body.map((paragraph, i) => (
            <p key={i} className="font-body-jp text-[14.5px] leading-loose text-ink/75">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Journal is decision support, not a blog — every article
            offers a next step in more than one direction rather than
            funneling everyone straight to Consultation. */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t rule pt-10 sm:grid-cols-3">
          {relatedConcern && (
            <div>
              <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">RELATED CONCERN</p>
              <Link
                href={`/concerns#${relatedConcern.id}`}
                className="font-heading-jp mt-2 block text-[14px] text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {relatedConcern.label}
              </Link>
            </div>
          )}
          {relatedCategory && (
            <div>
              <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">
                RELATED TREATMENT CATEGORY
              </p>
              <Link
                href={`/treatments#${relatedCategory.id}`}
                className="font-heading-jp mt-2 block text-[14px] text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {relatedCategory.nameJa}
              </Link>
            </div>
          )}
          <div>
            <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">CONSULTATION</p>
            <Link
              href="/consultation"
              className="font-heading-jp mt-2 block text-[14px] text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              相談する
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t rule pt-8">
          <Link
            href="/journal"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            ← ジャーナル一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
