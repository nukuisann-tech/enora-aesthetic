import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";
import { image, focal } from "@/lib/images";

export const metadata: Metadata = {
  title: "施術",
  description: "施術は5つの領域で整理しています。数ではなく、必要な範囲で選びます。",
};

export default function TreatmentsPage() {
  return (
    <div className="bg-base">
      {/* Image + Index hero — a tall photo against a numbered preview of
          the five categories below, so the page opens on photography
          rather than another eyebrow/heading/paragraph block. */}
      <section className="rhythm-tight">
        <div className="canvas grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-16">
          <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <Image
              src={image("eyeDetail", 1000)}
              alt="美意識を見つめる、目もとのクローズアップ"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className={`object-cover ${focal("eyeDetail")}`}
            />
          </ImageReveal>
          <div>
            <p className="eyebrow text-[12px]">Treatments</p>
            <FadeText delay={0.1}>
              <h1 className="font-heading-jp mt-4 text-h2 text-ink">
                施術は、
                <br />5つの領域で。
              </h1>
            </FadeText>
            <ol className="mt-8 flex flex-col gap-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="font-body-jp flex items-baseline gap-4 py-1.5 text-[13.5px] text-ink/65 hover:text-ink"
                  >
                    <span className="font-display text-[12px] italic text-ink/35">{c.no}</span>
                    {c.nameJa}
                  </a>
                </li>
              ))}
            </ol>
          </div>
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
                  <span className="font-ui-en ml-3 text-[12px] italic tracking-[0.14em] text-accent-text">
                    {c.nameEn}
                  </span>
                </h2>
              </div>
              <p className="font-body-jp mt-6 max-w-2xl text-[14px] leading-loose text-ink/65">
                {c.description}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col divide-y divide-line border-t rule">
              {c.treatments.map((t, ti) => (
                <Reveal key={t.slug} delay={0.06 * (ti + 1)}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-6"
                  >
                    <div>
                      <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent-text">
                        Sample Treatment
                      </p>
                      <h3 className="font-display mt-2 text-[19px] italic text-ink">
                        {t.nameEn}
                        <span className="font-heading-jp ml-3 text-[13px] not-italic text-ink/65">
                          {t.name}
                        </span>
                      </h3>
                      <p className="font-body-jp mt-2 max-w-lg text-[13px] leading-relaxed text-ink/65">
                        {t.summary}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-[12px] tracking-wide text-ink underline decoration-line underline-offset-8 group-hover:decoration-accent">
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
