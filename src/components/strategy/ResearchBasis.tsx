import { Reveal, FadeText } from "@/components/Reveal";
import { researchItems, researchLimitation } from "@/data/strategy/research";

// A Source Index, not the star of the page (brief §31) — Organization
// and Report stay visible as plain text (so they survive with the URL
// gone, e.g. in print — brief §09), while Population/Sample/Finding
// fold under <details> so the section doesn't dominate the scroll.
export function ResearchBasis() {
  return (
    <div id="research" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">調査・設計根拠</p>
      </FadeText>

      <div className="mt-8 flex flex-col divide-y divide-line border-t border-b border-line">
        {researchItems.map((r, i) => (
          <Reveal key={r.no} delay={0.05 * i}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4">
                <span className="flex items-baseline gap-4">
                  <span className="font-ui-en text-[10px] italic text-accent-text">{r.no}</span>
                  <span>
                    <span className="font-heading-jp text-[14.5px] text-ink">{r.organization}</span>
                    <span className="font-body-jp ml-2 text-[12px] text-ink/55">
                      {r.report}({r.published})
                    </span>
                  </span>
                </span>
                <span className="font-ui-en flex-shrink-0 text-[10px] text-ink/40 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-4 grid grid-cols-1 gap-4 pl-8 md:grid-cols-[140px_1fr] md:gap-6">
                <p className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">POPULATION</p>
                <p className="font-body-jp text-[12.5px] text-ink/70">
                  {r.population} — {r.sampleSize}
                </p>
                <p className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">FINDING</p>
                <p className="font-body-jp text-[12.5px] leading-relaxed text-ink/70">{r.finding}</p>
                <p className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">
                  WHY IT MATTERS
                </p>
                <p className="font-body-jp text-[12.5px] leading-relaxed text-ink/70">
                  {r.whyItMatters}
                </p>
                <p className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">SOURCE</p>
                <a
                  href={r.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui-en text-[12px] text-accent-text underline decoration-line underline-offset-4 hover:text-ink"
                >
                  {r.sourceLabel} ↗
                </a>
              </div>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-6 max-w-lg border-l-2 border-line-strong pl-4">
        <p className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">RESEARCH LIMITATION</p>
        <p className="font-body-jp mt-1.5 text-[12px] leading-relaxed text-ink/60">
          {researchLimitation}
        </p>
      </Reveal>
    </div>
  );
}
