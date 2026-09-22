import { Reveal, FadeText } from "@/components/Reveal";
import { bottleneckCases, priorityBuckets } from "@/data/strategy/bottleneck";

const doNotDo = [
  "Campaign乱発",
  "Discount依存",
  "Before / After依存",
  "架空Review",
  "大量Treatment追加",
  "とりあえずLINE",
  "とりあえずTikTok",
  "とりあえずAI",
  "予約数だけを追う",
  "広告を先に増やす",
  "医学的Treatment診断ツール",
];

// Bottleneck Prescription (brief §24) — not a service menu. Each case
// names one Signal a real clinic could observe, and the Response it
// points to; nothing here is "buy this package."
export function NextStepsAndBoundaries() {
  return (
    <div id="next-steps" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Bottleneck Prescription</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-heading-jp mt-4 max-w-lg text-[17px] leading-[1.7] text-ink">
          Cross-Sell一覧ではなく、
          <br />
          Bottleneckから逆算する。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {bottleneckCases.map((c, i) => (
          <Reveal key={c.no} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[200px_1fr_1fr] md:gap-8">
              <p className="font-display text-[16px] italic text-ink">
                <span className="font-ui-en mr-2 text-[11px] not-italic text-ink/35">{c.no}</span>
                {c.title}
              </p>
              <div>
                <p className="font-ui-en text-[9.5px] tracking-[0.08em] text-ink/45">SIGNAL</p>
                <p className="font-body-jp mt-1 text-[13px] leading-relaxed text-ink/70">{c.signal}</p>
              </div>
              <div>
                <p className="font-ui-en text-[9.5px] tracking-[0.08em] text-accent-text">RESPONSE</p>
                <p className="font-body-jp mt-1 text-[13px] leading-relaxed text-ink">{c.response}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">
            NOW / NEXT / LATER
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {priorityBuckets.map((b, i) => (
              <Reveal key={b.bucket} delay={0.05 * i}>
                <p className="font-display text-[14px] italic text-accent-text">{b.bucket}</p>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {b.items.map((item) => (
                    <li key={item} className="text-[13px] leading-relaxed text-ink/75">
                      — {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <FadeText>
            <p className="eyebrow text-[12px]">What Not To Do</p>
          </FadeText>
          <Reveal delay={0.06}>
            <ul className="mt-4 flex flex-col gap-2">
              {doNotDo.map((d) => (
                <li key={d} className="flex items-center gap-2 text-[13px] text-ink/70">
                  <span className="text-[color:var(--color-error)]">×</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
