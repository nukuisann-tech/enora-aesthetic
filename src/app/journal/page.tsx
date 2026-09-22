import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { articles } from "@/data/journal";

export const metadata: Metadata = {
  title: "ジャーナル",
  description: "施術を決める前に、知っておいてほしいことを綴る場所です。",
};

export default function JournalPage() {
  return (
    <div className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">Care Journal</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.5] text-ink md:text-[42px]">
              施術を決める前に、
              <br />
              知っておいてほしいこと。
            </h1>
          </FadeText>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={0.06 * i}>
              <Link href={`/journal/${a.slug}`} className="group block">
                <ImageReveal className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={image(a.image, 1200)}
                    alt={a.imageAlt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </ImageReveal>
                <p className="font-ui-en mt-5 text-[10px] italic tracking-[0.16em] text-accent">
                  {a.category}
                </p>
                <h2 className="font-heading-jp mt-2 text-[20px] leading-snug text-ink">
                  {a.title}
                </h2>
                <p className="font-body-jp mt-3 text-[13.5px] leading-relaxed text-ink/60">
                  {a.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
