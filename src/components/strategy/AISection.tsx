import { Reveal, FadeText } from "@/components/Reveal";

const allowed = ["Concern Navigation", "FAQ", "Relevant Content Discovery", "Consultation Brief整理", "Booking Assistance"];
const forbidden = ["Diagnosis", "Treatment Recommendation", "Risk Judgment", "Medical Advice", "Medication Advice", "Emergency Judgment"];
const prerequisites = ["FAQ Data", "Consultation Data", "User Questions", "Content Library", "Escalation Rules"];

// Deliberately small and quiet — the point of this section is that
// ÉNORA can justify NOT building this yet, not that it has an AI
// feature to show off.
export function AISection() {
  return (
    <div id="ai" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <div className="max-w-xl">
        <FadeText>
          <p className="eyebrow text-[12px]">AI — Phase Later</p>
        </FadeText>
        <Reveal delay={0.06}>
          <p className="font-display mt-4 text-[26px] italic leading-[1.3] text-ink md:text-[32px]">
            AI AFTER CLARITY.
            <br />
            NOT BEFORE.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-body-jp mt-4 text-[13.5px] leading-loose text-ink/65">
            Phase 1ではAIを導入しない。導入するとしても役割はAI Decision
            Navigatorに限定し、診断・推薦・医療判断は行わない。
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-display mt-8 text-[18px] italic leading-[1.4] text-ink md:text-[21px]">
            WHEN IT BECOMES MEDICAL,
            <br />
            HAND IT TO A HUMAN.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal>
          <p className="font-ui-en text-[10px] tracking-[0.1em] text-accent-text">AI MAY HANDLE</p>
          <ul className="mt-2 flex flex-col gap-1">
            {allowed.map((a) => (
              <li key={a} className="text-[12.5px] text-ink/75">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-ui-en text-[10px] tracking-[0.1em] text-[color:var(--color-error)]">
            HUMAN HANDOFF — REQUIRED
          </p>
          <ul className="mt-2 flex flex-col gap-1">
            {forbidden.map((f) => (
              <li key={f} className="text-[12.5px] text-ink/75">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45">
            WHEN TO IMPLEMENT
          </p>
          <ul className="mt-2 flex flex-col gap-1">
            {prerequisites.map((p) => (
              <li key={p} className="text-[12.5px] text-ink/75">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
