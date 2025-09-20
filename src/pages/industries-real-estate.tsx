import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryRealEstate() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Real Estate Agencies"
        subtitle="Match the right properties to the right buyers."
        description="Accelerate deals with lead scoring, property matching, pricing insights, and intelligent agent assistants."
        useCases={[
          "Lead scoring and routing",
          "Property recommendations and alerts",
          "Market analytics and price predictions",
          "Document automation and summaries",
          "Client concierge chat and scheduling",
        ]}
        outcomes={[
          "Shorter sales cycles",
          "Higher close rates",
          "Better agent productivity",
        ]}
      />
      <Footer />
    </>
  );
}
