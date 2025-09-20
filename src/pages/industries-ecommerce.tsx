import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEcommerce() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="E-commerce Stores"
        subtitle="Personalized shopping and smarter operations."
        description="Boost conversions and loyalty with AI-driven recommendations, search, pricing, and inventory intelligence across your storefronts."
        useCases={[
          "Product recommendations and bundling",
          "Semantic search and merchandising automation",
          "Dynamic pricing and promotion optimization",
          "Demand forecasting and inventory optimization",
          "Churn prediction and loyalty programs",
        ]}
        outcomes={[
          "Higher conversion rate and AOV",
          "Reduced stockouts and returns",
          "Improved CLV and retention",
        ]}
      />
      <Footer />
    </>
  );
}
