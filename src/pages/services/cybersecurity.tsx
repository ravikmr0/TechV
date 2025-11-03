import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function Cybersecurity() {
  usePageTitle("Cybersecurity Services - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Cybersecurity Services"
        description="Comprehensive security solutions to protect your digital assets"
        features={[
          "Security assessment and auditing",
          "Penetration testing",
          "Security operations center (SOC)",
          "Incident response and recovery",
          "Compliance and risk management"
        ]}
        benefits={[
          "Protect against cyber threats",
          "Ensure regulatory compliance",
          "Minimize security risks",
          "Build customer trust"
        ]}
      />
      <Footer />
    </div>
  );
}