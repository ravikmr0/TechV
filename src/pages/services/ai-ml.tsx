import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function AIAndML() {
  usePageTitle("AI & Machine Learning - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="AI & Machine Learning"
        description="Advanced AI and ML solutions for intelligent automation"
        features={[
          "Custom AI model development",
          "Machine learning pipeline implementation",
          "Natural language processing",
          "Computer vision solutions",
          "Predictive analytics"
        ]}
        benefits={[
          "Automate complex processes",
          "Gain actionable insights from data",
          "Improve decision-making accuracy",
          "Reduce operational costs"
        ]}
      />
      <Footer />
    </div>
  );
}