import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryConstruction() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Construction Companies"
        subtitle="Deliver on-time and on-budget."
        description="Improve safety, forecasting, and coordination across projects with AI and analytics."
        useCases={[
          "Project forecasting and risk analysis",
          "Safety monitoring and incident insights",
          "Scheduling and resource optimization",
          "Document control and summarization",
          "Field reporting assistants",
        ]}
        outcomes={[
          "Fewer overruns",
          "Improved safety",
          "Faster closeout",
        ]}
      />
      <Footer />
    </>
  );
}
