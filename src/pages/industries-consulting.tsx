import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryConsulting() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Consulting Agencies"
        subtitle="Scale expertise with AI assistants."
        description="Accelerate research, proposals, and delivery with secure knowledge assistants and analytics."
        useCases={[
          "Knowledge retrieval and insights",
          "Proposal and SOW automation",
          "Engagement analytics and forecasting",
          "PMO copilots and reporting",
          "Client portals and data rooms",
        ]}
        outcomes={[
          "Higher utilization and win rates",
          "Faster delivery",
          "Improved client satisfaction",
        ]}
      />
      <Footer />
    </>
  );
}
