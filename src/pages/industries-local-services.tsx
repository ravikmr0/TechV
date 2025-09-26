import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryLocalServices() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Local Service Providers"
        subtitle="Automate lead-to-job workflows."
        description="From quotes to reviews, streamline the full customer journey for local services."
        useCases={[
          "Lead capture, routing, and follow-up",
          "Instant quotes and scheduling",
          "Job management and checklists",
          "Review generation and referrals",
          "Website chat and knowledge base",
        ]}
        outcomes={[
          "Higher booking rates",
          "Reduced no-shows",
          "More 5-star reviews",
        ]}
      />
      <Footer />
    </>
  );
}
