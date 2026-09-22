import type { Metadata } from "next";
import { PrintButton } from "@/components/strategy/PrintButton";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { ExecutiveSummary } from "@/components/strategy/ExecutiveSummary";
import { ExecutiveSkim } from "@/components/strategy/ExecutiveSkim";
import { ChapterNav } from "@/components/strategy/ChapterNav";
import { PartDivider } from "@/components/strategy/PartDivider";
import { MasterDecisionSystem } from "@/components/strategy/MasterDecisionSystem";
import { StrategicPremise } from "@/components/strategy/StrategicPremise";
import { ValidationSection } from "@/components/strategy/ValidationSection";
import { ResearchBasis } from "@/components/strategy/ResearchBasis";
import { MarketTensionVisual } from "@/components/strategy/MarketTensionVisual";
import { GrowthEngine } from "@/components/strategy/GrowthEngine";
import { AcquisitionChannels } from "@/components/strategy/AcquisitionChannels";
import { ContentPillars } from "@/components/strategy/ContentPillars";
import { BeautyMapInteractive } from "@/components/strategy/BeautyMapInteractive";
import { BeautyMapToHumanPeak } from "@/components/strategy/BeautyMapToHumanPeak";
import { IntentJourney } from "@/components/strategy/IntentJourney";
import { NurtureStrategy } from "@/components/strategy/NurtureStrategy";
import { ConsultationSystemTimeline } from "@/components/strategy/ConsultationSystemTimeline";
import { ConsultationBriefSection } from "@/components/strategy/ConsultationBriefSection";
import { QualifiedConsultation } from "@/components/strategy/QualifiedConsultation";
import { PrivacyByDesign } from "@/components/strategy/PrivacyByDesign";
import { ClinicalContentGovernance } from "@/components/strategy/ClinicalContentGovernance";
import { ConsultationOutcome } from "@/components/strategy/ConsultationOutcome";
import { ContinuityLoop } from "@/components/strategy/ContinuityLoop";
import { RetentionReferral } from "@/components/strategy/RetentionReferral";
import { AISection } from "@/components/strategy/AISection";
import { BusinessSystemLenses } from "@/components/strategy/BusinessSystemLenses";
import { KPITree } from "@/components/strategy/KPITree";
import { DecisionQualitySignals } from "@/components/strategy/DecisionQualitySignals";
import { DecisionRules } from "@/components/strategy/DecisionRules";
import { NinetyDayBlueprint } from "@/components/strategy/NinetyDayBlueprint";
import { ExistingAssetLeverage } from "@/components/strategy/ExistingAssetLeverage";
import { NextStepsAndBoundaries } from "@/components/strategy/NextStepsAndBoundaries";
import { GrowthLoop } from "@/components/strategy/GrowthLoop";
import { DifferenceFromTomori } from "@/components/strategy/DifferenceFromTomori";
import { StrategySummary } from "@/components/strategy/StrategySummary";
import { StrategyFooter } from "@/components/strategy/StrategyFooter";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "ÉNORA AESTHETICのGrowth Strategy Concept — 予約を増やす前に、判断の質を上げる。Decision Quality Growthという考え方のPortfolio Study。",
};

export default function GrowthStrategyPage() {
  return (
    <div className="bg-base">
      <PrintButton />
      <StrategyHero />
      <ExecutiveSummary />
      <ExecutiveSkim />
      <ChapterNav />

      <div className="strategy-doc">
        <MasterDecisionSystem />

        <PartDivider
          id="tension"
          no="01"
          label="The Tension"
          thesis="情報は増えているのに、判断の質は上がっていない。"
        />
        <StrategicPremise />
        <ValidationSection />
        <ResearchBasis />
        <MarketTensionVisual />

        <PartDivider
          id="decision-engine"
          no="02"
          label="The Decision Engine"
          thesis="ゴールは予約ではなく、良い決定である。"
        />
        <GrowthEngine />
        <AcquisitionChannels />
        <ContentPillars />
        <BeautyMapInteractive />
        <BeautyMapToHumanPeak />
        <IntentJourney />

        <PartDivider
          id="consultation-system"
          no="03"
          label="The Consultation System"
          thesis="相談は、情報収集ではなく、対話の質を上げる場にする。"
        />
        <NurtureStrategy />
        <ConsultationSystemTimeline />
        <ConsultationBriefSection />
        <QualifiedConsultation />
        <PrivacyByDesign />
        <ClinicalContentGovernance />
        <ConsultationOutcome />

        <PartDivider
          id="continuity-system"
          no="04"
          label="The Continuity System"
          thesis="関係を続けるのは、通わせるためではなく、必要なときにそばにいるためである。"
        />
        <ContinuityLoop />
        <RetentionReferral />
        <AISection />

        <PartDivider
          id="business-system"
          no="05"
          label="The Business System"
          thesis="成長は、QualityとCapacityとEconomicsの掛け算で決まる。"
        />
        <BusinessSystemLenses />
        <KPITree />
        <DecisionQualitySignals />
        <DecisionRules />
        <NinetyDayBlueprint />
        <ExistingAssetLeverage />
        <NextStepsAndBoundaries />
        <GrowthLoop />
        <DifferenceFromTomori />
        <StrategySummary />
      </div>

      <StrategyFooter />
    </div>
  );
}
