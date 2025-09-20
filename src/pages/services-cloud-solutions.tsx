import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceCloudSolutions() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="Cloud Solutions"
        subtitle="Migrate, optimize, and build cloud-native."
        description="We design and implement secure, scalable cloud platforms across AWS, Azure, and GCP. Modernize workloads, automate delivery, and improve reliability."
        features={[
          "Cloud migration and re-platforming",
          "Infrastructure as Code and automation",
          "Scalability, reliability, and cost optimization",
          "Observability and incident response",
          "Data platforms and serverless architectures",
        ]}
        benefits={[
          "Lower operational costs and improved resilience",
          "Rapid delivery with automated pipelines",
          "Elastic scale to match demand",
        ]}
      />
      <Footer />
    </>
  );
}
