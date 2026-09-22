import type { Metadata } from "next";
import { PrintButton } from "@/components/strategy/PrintButton";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { ExecutiveSummary } from "@/components/strategy/ExecutiveSummary";
import { ChapterNav } from "@/components/strategy/ChapterNav";
import { PartDivider } from "@/components/strategy/PartDivider";
import { StrategicPremise } from "@/components/strategy/StrategicPremise";
import { ValidationSection } from "@/components/strategy/ValidationSection";
import { ResearchBasis } from "@/components/strategy/ResearchBasis";
import { MarketTensionVisual } from "@/components/strategy/MarketTensionVisual";
import { GrowthEngine } from "@/components/strategy/GrowthEngine";
import { AcquisitionChannels } from "@/components/strategy/AcquisitionChannels";
import { ContentPillars } from "@/components/strategy/ContentPillars";
import { BeautyMapMockup } from "@/components/strategy/BeautyMapMockup";
import { IntentJourney } from "@/components/strategy/IntentJourney";
import { NurtureStrategy } from "@/components/strategy/NurtureStrategy";
import { ConsultationSystemTimeline } from "@/components/strategy/ConsultationSystemTimeline";
import { ConsultationBriefSection } from "@/components/strategy/ConsultationBriefSection";
import { ConsultationOutcome } from "@/components/strategy/ConsultationOutcome";
import { ContinuityLoop } from "@/components/strategy/ContinuityLoop";
import { RetentionReferral } from "@/components/strategy/RetentionReferral";
import { AISection } from "@/components/strategy/AISection";
import { KPITree } from "@/components/strategy/KPITree";
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
      <ChapterNav />

      <div className="strategy-doc">
        <PartDivider id="tension" no="01" label="The Tension" />
        <StrategicPremise />
        <ValidationSection />
        <ResearchBasis />
        <MarketTensionVisual />

        <PartDivider id="decision-engine" no="02" label="The Decision Engine" />
        <GrowthEngine />
        <AcquisitionChannels />
        <ContentPillars />
        <BeautyMapMockup />
        <IntentJourney />

        <PartDivider id="consultation-system" no="03" label="The Consultation System" />
        <NurtureStrategy />
        <ConsultationSystemTimeline />
        <ConsultationBriefSection />
        <ConsultationOutcome />

        <PartDivider id="continuity-system" no="04" label="The Continuity System" />
        <ContinuityLoop />
        <RetentionReferral />
        <AISection />

        <PartDivider id="business-system" no="05" label="The Business System" />
        <KPITree />
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
