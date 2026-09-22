import { Hero } from "@/components/home/Hero";
import { PointOfView } from "@/components/home/PointOfView";
import { ConcernExplorer } from "@/components/home/ConcernExplorer";
import { SelectiveApproach } from "@/components/home/SelectiveApproach";
import { TreatmentsIndex } from "@/components/home/TreatmentsIndex";
import { BrandStatement } from "@/components/home/BrandStatement";
import { MedicalTrust } from "@/components/home/MedicalTrust";
import { ConsultationExperience } from "@/components/home/ConsultationExperience";
import { SpaceSection } from "@/components/home/SpaceSection";
import { PeopleSection } from "@/components/home/PeopleSection";
import { PriceTransparency } from "@/components/home/PriceTransparency";
import { CareJournalSection } from "@/components/home/CareJournalSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PointOfView />
      <ConcernExplorer />
      <SelectiveApproach />
      <TreatmentsIndex />
      <BrandStatement />
      <MedicalTrust />
      <ConsultationExperience />
      <SpaceSection />
      <PeopleSection />
      <PriceTransparency />
      <CareJournalSection />
      <FinalCta />
    </>
  );
}
