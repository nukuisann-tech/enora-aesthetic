import { Reveal, FadeText } from "@/components/Reveal";

const possibleServices = [
  "SEO / Content",
  "Instagram Creative",
  "Local Search",
  "Beauty Map",
  "Email / CRM",
  "Booking Optimization",
  "CRO",
  "Analytics",
  "Automation",
  "AI Navigator",
  "Paid Acquisition",
];

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

export function NextStepsAndBoundaries() {
  return (
    <div id="next-steps" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <FadeText>
            <p className="eyebrow text-[12px]">Next Growth Opportunities</p>
          </FadeText>
          <Reveal delay={0.06}>
            <p className="font-heading-jp mt-4 text-[17px] leading-[1.7] text-ink">
              Cross-Sell一覧ではなく、
              <br />
              Bottleneckから逆算する。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {possibleServices.map((s) => (
                <span key={s} className="border border-line px-3 py-1.5 text-[12px] text-ink/70">
                  {s}
                </span>
              ))}
            </div>
            <p className="font-ui-en mt-4 text-[10px] italic tracking-[0.1em] text-ink/45">
              FROM THE BOTTLENECK — 全部は売らない
            </p>
          </Reveal>
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
