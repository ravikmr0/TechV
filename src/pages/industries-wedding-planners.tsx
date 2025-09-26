import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryWeddingPlanners() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Wedding Planners"
        subtitle="Delight couples with organized magic."
        description="Use AI to coordinate timelines, vendors, and communications with ease."
        useCases={[
          "Timeline and checklist assistants",
          "Vendor discovery and matching",
          "Budget tracking and approvals",
          "Guest communications and portals",
          "Design mood boards and proposals",
        ]}
        outcomes={[
          "Less admin time",
          "More upsell opportunities",
          "Stress-free client experience",
        ]}
      />
      <Footer />
    </>
  );
}
