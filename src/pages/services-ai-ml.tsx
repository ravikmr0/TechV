import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceAIAndML() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="AI & Machine Learning Development"
        subtitle="From prototyping to production-grade AI."
        description="We build and deploy end-to-end AI systems: data pipelines, model training, evaluation, and serving. Unlock predictions, recommendations, and automation."
        features={[
          "Data engineering and feature pipelines",
          "Model development, evaluation, and monitoring",
          "MLOps and continuous training/serving",
          "Recommendation, forecasting, NLP, and vision",
          "Responsible AI and governance",
        ]}
        benefits={[
          "Measurable business impact from AI investments",
          "Operationalize models with robust MLOps",
          "Scalable, maintainable AI systems",
        ]}
      />
      <Footer />
    </>
  );
}
