import type { Metadata } from "next";
import { PrintButton } from "@/components/strategy/PrintButton";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategyOverview } from "@/components/strategy/StrategyOverview";
import { ChapterNav } from "@/components/strategy/ChapterNav";
import { PartDivider } from "@/components/strategy/PartDivider";
import { StrategicPremise } from "@/components/strategy/StrategicPremise";
import { MarketTensionVisual } from "@/components/strategy/MarketTensionVisual";
import { GrowthEngine } from "@/components/strategy/GrowthEngine";
import { BeautyMapStory } from "@/components/strategy/BeautyMapStory";
import { BeautyMapInteractive } from "@/components/strategy/BeautyMapInteractive";
import { BeautyMapToHumanPeak } from "@/components/strategy/BeautyMapToHumanPeak";
import { ConsultationSystemTimeline } from "@/components/strategy/ConsultationSystemTimeline";
import { BusinessSystemLenses } from "@/components/strategy/BusinessSystemLenses";
import { NinetyDayBlueprint } from "@/components/strategy/NinetyDayBlueprint";
import { GrowthLoop } from "@/components/strategy/GrowthLoop";
import { SupportingStrategy } from "@/components/strategy/SupportingStrategy";
import { ResearchBasis } from "@/components/strategy/ResearchBasis";
import { DifferenceFromTomori } from "@/components/strategy/DifferenceFromTomori";
import { StrategyFooter } from "@/components/strategy/StrategyFooter";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "ÉNORA AESTHETICのGrowth Strategy Concept — 予約を増やす前に、判断の質を上げる。Decision Quality Growthという考え方のPortfolio Study。",
};

// Main Story is exactly 7 Japanese-first chapters, read start to finish in
// under a minute; Supporting Strategy (詳細設計) holds everything else as
// depth-on-demand. See GROWTH_STRATEGY_V3 review for the before/after of
// this restructure — the prior version stacked four separate "here's the
// whole strategy" overviews before Chapter 01 even started.
export default function GrowthStrategyPage() {
  return (
    <div className="bg-base">
      <PrintButton />
      <StrategyHero />
      <StrategyOverview />
      <ChapterNav />

      <div className="strategy-doc">
        <PartDivider id="problem" no="01" label="課題" />
        <StrategicPremise />
        <MarketTensionVisual />

        <PartDivider id="strategy" no="02" label="戦略" />
        <GrowthEngine />

        <PartDivider id="core-system" no="03" label="中核システム" />
        <BeautyMapStory />
        <BeautyMapInteractive />
        <BeautyMapToHumanPeak />

        <PartDivider id="consultation-experience" no="04" label="相談体験" />
        <ConsultationSystemTimeline />

        <PartDivider id="business" no="05" label="事業" />
        <BusinessSystemLenses />

        <PartDivider id="ninety-days" no="06" label="90日" />
        <NinetyDayBlueprint />

        <PartDivider id="growth-loop" no="07" label="成長循環" />
        <GrowthLoop />

        <SupportingStrategy />
        <ResearchBasis />
        <DifferenceFromTomori />
      </div>

      <StrategyFooter />
    </div>
  );
}
