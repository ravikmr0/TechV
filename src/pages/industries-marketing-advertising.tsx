import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryMarketingAdvertising() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Marketing & Advertising Agencies"
        subtitle="Campaigns that optimize themselves."
        description="Drive performance with creative generation, audience insights, and multi-channel optimization."
        useCases={[
          "Audience discovery and segmentation",
          "Creative generation and testing",
          "Attribution and budget allocation",
          "SEO and content assistants",
          "Reporting and insights copilot",
        ]}
        outcomes={[
          "Better ROAS and CPA",
          "Faster campaign iteration",
          "Stronger client retention",
        ]}
      />
      <Footer />
    </>
  );
}
