import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryHealthcare() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Healthcare"
        subtitle="Smart AI diagnostics and care delivery."
        description="We build clinical and operational AI that augments providers, improves triage, and streamlines patient experiences with strong privacy."
        useCases={[
          "AI-assisted diagnostics and triage",
          "Patient journey automation and chat",
          "Clinical documentation and coding support",
          "Operational forecasting and staffing",
          "Population health analytics",
        ]}
        outcomes={[
          "Faster care and fewer readmissions",
          "Reduced clinician burnout",
          "Better patient satisfaction and access",
        ]}
      />
      <Footer />
    </>
  );
}
