import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function CloudSolutions() {
  usePageTitle("Cloud Solutions - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Cloud Solutions"
        description="Scalable cloud infrastructure and migration services"
        features={[
          "Cloud migration and modernization",
          "Multi-cloud and hybrid cloud architecture",
          "Cloud security and compliance",
          "DevOps and CI/CD implementation",
          "Cloud cost optimization"
        ]}
        benefits={[
          "99.9% uptime guarantee",
          "Scale on demand",
          "Reduce infrastructure costs",
          "Enhanced security and compliance"
        ]}
      />
      <Footer />
    </div>
  );
}