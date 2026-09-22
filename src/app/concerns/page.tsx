import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { concerns } from "@/data/concerns";
import { findCategory } from "@/data/treatments";

export const metadata: Metadata = {
  title: "悩みから探す",
  description: "施術名が分からなくても大丈夫です。気になることから探索してください。",
};

export default function ConcernsPage() {
  return (
    <div className="bg-base">
      {/* Typography-led hero — no photo, no boxed intro paragraph. The
          scale of the type itself is the page's opening statement. */}
      <section className="rhythm-tight">
        <div className="canvas grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-[12px]">Concerns</p>
          </div>
          <div className="md:col-span-9">
            <FadeText>
              <h1
                className="font-heading-jp text-ink"
                style={{ fontSize: "clamp(2.125rem, 5.5vw, 5rem)", lineHeight: 1.3 }}
              >
                施術名が分からなくても、
                <br />
                大丈夫です。
              </h1>
            </FadeText>
            <Reveal delay={0.15}>
              <p className="font-body-jp mt-8 max-w-md text-[13px] leading-loose text-ink/50">
                以下はあくまで診断ではなく、悩みから関連するケアの方向性を探すための道しるべです。
                最終的な判断はカウンセリングで行います。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame divide-y divide-line border-t border-b rule">
          {concerns.map((c, i) => {
            const category = findCategory(c.categoryId);
            return (
              <Reveal key={c.id} delay={0.04 * i}>
                <div id={c.id} className="scroll-mt-24 py-8 md:py-10">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr_1.6fr_auto] md:items-center md:gap-8">
                    <span className="font-display hidden text-[13px] italic text-ink/35 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-heading-jp text-[22px] text-ink">{c.label}</h2>
                      <p className="font-body-jp mt-1 text-[13px] text-ink/55">{c.description}</p>
                    </div>
                    {category && (
                      <p className="font-body-jp text-[13px] leading-relaxed text-ink/60">
                        <span className="eyebrow mr-2 text-[11px]">Care Direction —</span>
                        {category.description}
                      </p>
                    )}
                    {category && (
                      <Link
                        href={`/treatments#${category.id}`}
                        className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
                      >
                        {category.nameJa}を見る →
                      </Link>
                    )}
                  </div>
                  {c.journalSlug && (
                    <Link
                      href={`/journal/${c.journalSlug}`}
                      className="font-ui-en mt-4 inline-block text-[11px] italic tracking-[0.1em] text-accent underline decoration-line underline-offset-4"
                    >
                      関連するジャーナルを読む →
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="frame mt-16 text-center">
          <Link
            href="/consultation"
            className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
          >
            カウンセリングを予約する
          </Link>
        </div>
      </section>
    </div>
  );
}
