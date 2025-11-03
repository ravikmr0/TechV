import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function ITConsulting() {
  usePageTitle("IT Consulting Services - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="IT Consulting Services"
        description="Strategic technology consulting to optimize your business operations"
        features={[
          "Technology strategy and roadmap development",
          "Digital transformation consulting",
          "IT infrastructure assessment and optimization",
          "Cloud migration planning and execution",
          "Technology vendor selection and management"
        ]}
        benefits={[
          "Reduce IT costs by up to 30%",
          "Improve operational efficiency",
          "Stay ahead of technology trends",
          "Make informed technology decisions"
        ]}
      />
      <Footer />
    </div>
  );
}