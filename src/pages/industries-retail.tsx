import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryRetail() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Retail"
        subtitle="AI-driven customer insights and personalization."
        description="Use AI to optimize merchandising, pricing, and marketing. Deliver personalized experiences across channels that increase LTV."
        useCases={[
          "Next-best action and personalization",
          "Demand forecasting and inventory optimization",
          "Pricing and promotion optimization",
          "Customer service automation",
          "Churn prediction and loyalty programs",
        ]}
        outcomes={[
          "Higher conversion and basket size",
          "Lower stockouts and markdowns",
          "Improved retention and loyalty",
        ]}
      />
      <Footer />
    </>
  );
}
