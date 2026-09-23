import { Reveal, FadeText } from "@/components/Reveal";
import { contentPillars } from "@/data/strategy/contentPillars";
import { ClaimTag } from "./ClaimTag";

export function ContentPillars() {
  return (
    <div id="content" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">コンテンツ</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          SEO記事の量産ではなく、
          <br />
          Decision Supportとして設計する。
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        {contentPillars.map((p, i) => (
          <Reveal key={p.id} delay={0.05 * i}>
            <span className="font-display text-[28px] italic text-accent-text">{p.letter}</span>
            <h3 className="font-heading-jp mt-2 text-[16px] text-ink">{p.title}</h3>
            <p className="font-body-jp mt-1 text-[13px] italic text-ink/55">「{p.question}」</p>
            <div className="mt-4 mb-1.5">
              <ClaimTag type="SAMPLE" />
            </div>
            <ul className="flex flex-col gap-1.5">
              {p.examples.map((ex) => (
                <li key={ex} className="text-[12.5px] leading-relaxed text-ink/70">
                  — {ex}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 max-w-lg border-l-2 border-line-strong pl-4">
        <p className="font-body-jp text-[12.5px] leading-relaxed text-ink/60">
          実案件での優先順位は、Search
          Demand × Decision Value × Business Relevanceの掛け合わせで決定する。上記はConcept
          Exampleであり、Target Keyword Listではない。
        </p>
      </Reveal>
    </div>
  );
}
