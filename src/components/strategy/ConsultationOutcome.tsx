import { Reveal, FadeText } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const outcomes = ["Proceed", "Consider", "Not Now", "No Treatment"];
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

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-wrap gap-3">
          {outcomes.map((o) => (
            <span
              key={o}
              className="font-display border border-line-strong px-4 py-2 text-[15px] italic text-ink"
            >
              {o}
            </span>
          ))}
        </div>
      </Reveal>

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
