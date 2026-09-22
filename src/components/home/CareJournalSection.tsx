import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { image } from "@/lib/images";
import { articles } from "@/data/journal";

export function CareJournalSection() {
  return (
    <section className="rhythm border-t rule bg-surface">
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

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {articles.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={0.08 * i}>
              <Link href={`/journal/${a.slug}`} className="group block">
                <ImageReveal className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image(a.image, 900)}
                    alt={a.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </ImageReveal>
                <p className="font-ui-en mt-4 text-[10px] italic tracking-[0.16em] text-accent">
                  {a.category}
                </p>
                <h3 className="font-heading-jp mt-2 text-[17px] leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="font-body-jp mt-2 text-[12.5px] leading-relaxed text-ink/55">
                  {a.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
