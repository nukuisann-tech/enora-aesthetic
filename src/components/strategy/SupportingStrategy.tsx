import { Reveal, FadeText } from "@/components/Reveal";
import { AcquisitionChannels } from "./AcquisitionChannels";
import { IntentJourney } from "./IntentJourney";
import { NurtureStrategy } from "./NurtureStrategy";
import { ContentPillars } from "./ContentPillars";
import { KPITree } from "./KPITree";
import { DecisionQualitySignals } from "./DecisionQualitySignals";
import { QualifiedConsultation } from "./QualifiedConsultation";
import { ValidationSection } from "./ValidationSection";
import { DecisionRules } from "./DecisionRules";
import { NextStepsAndBoundaries } from "./NextStepsAndBoundaries";
import { PrivacyByDesign } from "./PrivacyByDesign";
import { ClinicalContentGovernance } from "./ClinicalContentGovernance";
import { AISection } from "./AISection";

const items = [
  { no: "01", label: "集客", content: () => (
    <>
      <AcquisitionChannels />
      <IntentJourney />
      <NurtureStrategy />
    </>
  ) },
  { no: "02", label: "コンテンツ", content: () => <ContentPillars /> },
  { no: "03", label: "計測", content: () => (
    <>
      <KPITree />
      <DecisionQualitySignals />
      <QualifiedConsultation />
      <ValidationSection />
      <DecisionRules />
      <NextStepsAndBoundaries />
    </>
  ) },
  { no: "04", label: "データ", content: () => <PrivacyByDesign /> },
  { no: "05", label: "医療情報管理", content: () => <ClinicalContentGovernance /> },
  { no: "06", label: "AI", content: () => <AISection /> },
];

// Main Story ends at Chapter 07. Everything here is DEPTH ON DEMAND
// (editorial rebuild §26/§27/§28) — a numbered index of six buckets, each
// a native <details> disclosure holding the original, already-built
// section content unchanged. A single accordion (not a JS-driven
// desktop-index/mobile-accordion split) was chosen deliberately: this
// project has twice already had to fix a literal duplicate-DOM bug from
// rendering the same content once per breakpoint, and one accordion that
// works identically at every width has no way to reintroduce that.
export function SupportingStrategy() {
  return (
    <div id="supporting-strategy" className="scroll-mt-24 border-t-2 border-ink pt-16">
      <div className="canvas">
        <FadeText>
          <p className="eyebrow text-[12px]">詳細設計</p>
        </FadeText>
        <Reveal delay={0.06}>
          <p className="font-body-jp mt-4 max-w-lg text-[13px] leading-relaxed text-ink/55">
            ここからは戦略の詳細設計。必要なところだけ開いて読める。
          </p>
        </Reveal>
      </div>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-line">
        {items.map((item) => (
          <details key={item.no} className="group">
            <summary className="canvas flex cursor-pointer list-none items-center gap-5 py-6">
              <span className="font-display text-[15px] italic text-accent-text">{item.no}</span>
              <span className="font-heading-jp text-[16px] text-ink">{item.label}</span>
              <span className="font-ui-en ml-auto flex-shrink-0 text-[11px] text-ink/40 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-6">{item.content()}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
