import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { articles } from "@/data/journal";

export const metadata: Metadata = {
  title: "ジャーナル",
  description: "施術を決める前に、知っておいてほしいことを綴る場所です。",
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-base">
      {/* Magazine-index hero — a masthead, not a heading block. */}
      <section className="rhythm-tight border-b border-line-strong">
        <div className="frame text-center">
          <p className="eyebrow text-[12px]">Vol. 01 — Care Journal</p>
          <FadeText delay={0.1}>
            <h1 className="font-display mt-3 text-[52px] italic text-ink md:text-[84px]">
              Journal
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-heading-jp mt-2 text-[13px] text-ink/50">
              施術を決める前に、知っておいてほしいこと。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame">
          <Reveal>
            <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-14">
              <ImageReveal className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={image(featured.image, 1600)}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 768px) 55vw, 90vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${focal(featured.image)}`}
                />
              </ImageReveal>
              <div>
                <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent">
                  Featured — {featured.category}
                </p>
                <h2 className="font-heading-jp mt-3 text-[26px] leading-snug text-ink md:text-[32px]">
                  {featured.title}
                </h2>
                <p className="font-body-jp mt-4 max-w-sm text-[13.5px] leading-relaxed text-ink/55">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-block text-[12px] tracking-wide text-ink underline decoration-line underline-offset-8 group-hover:decoration-accent">
                  読む →
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 divide-y divide-line border-t border-b rule md:grid-cols-3 md:divide-y-0 md:divide-x">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={0.06 * (i + 1)}>
                <Link href={`/journal/${a.slug}`} className="group block px-0 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                  <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent">
                    {a.category}
                  </p>
                  <h3 className="font-heading-jp mt-3 text-[17px] leading-snug text-ink group-hover:text-accent">
                    {a.title}
                  </h3>
                  <p className="font-body-jp mt-3 text-[13px] leading-relaxed text-ink/50">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-[12px] tracking-wide text-ink/50 underline decoration-line underline-offset-4 group-hover:text-ink group-hover:decoration-accent">
                    読む →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
