import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { articles } from "@/data/journal";

export function CareJournalSection() {
  const [featured, ...rest] = articles;

  return (
    <section className="rhythm border-t rule bg-base">
      <div className="frame">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <FadeText>
            <p className="eyebrow text-[12px]">Care Journal</p>
          </FadeText>
          <Link
            href="/journal"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            すべて読む →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Reveal>
            <Link href={`/journal/${featured.slug}`} className="group block">
              <ImageReveal className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={image(featured.image, 1400)}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 768px) 55vw, 90vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${focal(featured.image)}`}
                />
              </ImageReveal>
              <p className="font-ui-en mt-5 text-[10px] italic tracking-[0.16em] text-accent">
                {featured.category}
              </p>
              <h3 className="font-heading-jp mt-2 text-[22px] leading-snug text-ink">
                {featured.title}
              </h3>
              <p className="font-body-jp mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/55">
                {featured.excerpt}
              </p>
            </Link>
          </Reveal>

          <div className="flex flex-col divide-y divide-line border-t rule">
            {rest.slice(0, 2).map((a, i) => (
              <Reveal key={a.slug} delay={0.08 * (i + 1)}>
                <Link href={`/journal/${a.slug}`} className="group block py-6">
                  <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent">
                    {a.category}
                  </p>
                  <h3 className="font-heading-jp mt-2 text-[16px] leading-snug text-ink group-hover:text-accent">
                    {a.title}
                  </h3>
                  <span className="mt-3 inline-block text-[12px] tracking-wide text-ink/50 underline decoration-line underline-offset-4 group-hover:text-ink group-hover:decoration-accent">
                    読む →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
