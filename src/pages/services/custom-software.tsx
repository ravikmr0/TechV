import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function CustomSoftware() {
  usePageTitle("Custom Software Development - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Custom Software Development"
        description="Tailored software solutions built for your unique business needs"
        features={[
          "Full-stack web application development",
          "Mobile app development (iOS & Android)",
          "Enterprise software solutions",
          "API development and integration",
          "Legacy system modernization"
        ]}
        benefits={[
          "Perfectly aligned with your business",
          "Scalable and maintainable code",
          "Faster time to market",
          "Competitive advantage"
        ]}
      />
      <Footer />
    </div>
  );
}