import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import { Footer } from "@/components/sections/footer";

export default function HealthcareIndustry() {
  usePageTitle("Healthcare Industry Solutions - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection 
        title="Healthcare"
        subtitle="HIPAA-compliant technology solutions for healthcare providers"
        description="Modernize healthcare delivery with secure, compliant, and patient-centric technology solutions."
        useCases={[
          "Electronic health records (EHR) systems",
          "Telemedicine platforms",
          "Patient appointment scheduling",
          "Medical imaging and diagnostics AI",
          "Healthcare data analytics",
          "Patient engagement portals"
        ]}
        outcomes={[
          "99.9% system uptime",
          "50% reduction in administrative tasks",
          "Improved patient satisfaction scores",
          "HIPAA compliance guaranteed",
          "Enhanced care coordination"
        ]}
      />
      <Footer />
    </div>
  );
}