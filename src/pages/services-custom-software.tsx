import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceCustomSoftware() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="Custom Software & Web Development"
        subtitle="Full-stack engineering for web, mobile, and platforms."
        description="We build secure, scalable products and platforms with modern stacks and UX. From MVPs to enterprise systems, we deliver end to end."
        features={[
          "Product discovery and UX/UI design",
          "API-first and microservices architectures",
          "Modern web and mobile apps",
          "Quality engineering and performance",
          "DevOps, CI/CD, and observability",
        ]}
        benefits={[
          "Faster delivery with reliable quality",
          "Maintainable codebases and documentation",
          "Solutions aligned to business outcomes",
        ]}
      />
      <Footer />
    </>
  );
}
