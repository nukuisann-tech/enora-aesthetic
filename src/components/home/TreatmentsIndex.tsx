import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";

export function TreatmentsIndex() {
  return (
    <section className="rhythm border-t rule bg-base">
      <div className="frame">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <FadeText>
            <h2 className="font-heading-jp text-[30px] leading-[1.3] text-ink md:text-[38px]">
              施術は、
              <br className="md:hidden" />5つの領域で整理しています。
            </h2>
          </FadeText>
          <Link
            href="/treatments"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            すべての施術を見る →
          </Link>
        </div>

        <div className="mt-14 divide-y divide-line border-t border-b rule">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={0.05 * i}>
              <Link
                href={`/treatments#${c.id}`}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-7 md:grid-cols-[80px_1fr_1.4fr]"
              >
                <span className="font-display text-[15px] italic text-ink/40">{c.no}</span>
                <span className="font-heading-jp text-[19px] text-ink transition-colors group-hover:text-accent md:text-[22px]">
                  {c.nameJa}
                  <span className="font-ui-en ml-3 text-[11px] italic tracking-[0.14em] text-ink/40">
                    {c.nameEn}
                  </span>
                </span>
                <span className="font-body-jp col-span-2 text-[13px] leading-relaxed text-ink/55 md:col-span-1">
                  {c.description}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
