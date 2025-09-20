import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceITConsulting() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="IT Consulting"
        subtitle="Strategy, architecture, and roadmaps that align tech with business."
        description="We assess your current systems, identify gaps, and build a pragmatic plan to modernize and scale. From cloud readiness to data strategy, our consulting accelerates outcomes."
        features={[
          "Technology strategy and modernization roadmap",
          "Solution architecture and platform selection",
          "Cloud readiness and TCO analysis",
          "Security and compliance assessments",
          "Change management and adoption support",
        ]}
        benefits={[
          "Reduce risk and avoid costly rework",
          "Faster time-to-value with clear prioritization",
          "Future-proof foundations for growth",
        ]}
      />
      <Footer />
    </>
  );
}
