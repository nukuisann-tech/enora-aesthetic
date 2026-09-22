import { Reveal, FadeText } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const outcomes = [
  { label: "Proceed", nextAction: "施術予約 → Pre-Treatment情報の送付" },
  { label: "Consider", nextAction: "Consultation Summary + 追加の判断材料をFollow-upで送付" },
  { label: "Not Now", nextAction: "Decision Support Contentのみ継続配信(再相談を急かさない)" },
  { label: "No Treatment", nextAction: "Follow-upを終了、または一般的なSkin Careの接点のみ残す" },
];
const followUp = ["Consultation Summary", "Questions", "Relevant Treatment Information", "Price", "Risk", "Contact Route"];

export function ConsultationOutcome() {
  return (
    <div id="outcome" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Consultation Outcome</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          Consultationの結果をTreatment Conversionだけで評価しない。以下はすべて正常なDecisionとして扱う。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {outcomes.map((o, i) => (
          <Reveal key={o.label} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[160px_1fr] md:items-baseline md:gap-8">
              <p className="font-display text-[16px] italic text-ink">{o.label}</p>
              <p className="font-body-jp text-[13px] leading-relaxed text-ink/70">
                <span className="font-ui-en mr-2 text-[10px] tracking-[0.08em] text-accent-text">
                  NEXT ACTION —
                </span>
                {o.nextAction}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">
            IF NOT DECIDED YET — SEND, DON&apos;T PUSH
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {followUp.map((f) => (
              <li key={f} className="text-[13px] leading-relaxed text-ink/75">
                — {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <StrategyNote>
            Discount・Deadline・追い込みは禁止。即決しなかった相手に送るのは、判断材料の続きであって、値引きではない。
          </StrategyNote>
        </Reveal>
      </div>
    </div>
  );
}
