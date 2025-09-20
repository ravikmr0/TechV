import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceCybersecurity() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="Cybersecurity & Data Protection"
        subtitle="Secure by design across apps, cloud, and data."
        description="We harden your systems with proactive security: threat modeling, secure architecture, and continuous defense to protect your business and customers."
        features={[
          "Security assessments and penetration testing",
          "Zero Trust architecture and identity",
          "Data protection, encryption, and key management",
          "Compliance (SOC2, HIPAA, GDPR) guidance",
          "Security operations and incident response",
        ]}
        benefits={[
          "Reduced breach risk and faster recovery",
          "Increased customer trust and compliance",
          "Security embedded into delivery lifecycle",
        ]}
      />
      <Footer />
    </>
  );
}
