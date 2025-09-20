import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryNonProfits() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Non-Profits & Charities"
        subtitle="Maximize impact with data-driven operations."
        description="Grow donations and streamline programs with donor analytics, grants automation, and supporter engagement."
        useCases={[
          "Donor segmentation and campaigns",
          "Grant pipeline and reporting",
          "Volunteer coordination assistants",
          "Impact measurement dashboards",
          "Website and content assistants",
        ]}
        outcomes={[
          "More donations per campaign",
          "Lower admin overhead",
          "Greater transparency and trust",
        ]}
      />
      <Footer />
    </>
  );
}
