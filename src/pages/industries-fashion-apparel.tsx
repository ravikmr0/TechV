import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryFashionApparel() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Fashion & Apparel Brands"
        subtitle="Trends, fit, and experiences that convert."
        description="Predict demand, guide sizing, and personalize storefronts to reduce returns and increase LTV."
        useCases={[
          "Trend and demand forecasting",
          "Size and fit guidance",
          "Visual search and recommendations",
          "Assortment and pricing optimization",
          "Returns reduction analytics",
        ]}
        outcomes={[
          "Higher conversion and AOV",
          "Fewer returns",
          "Faster merchandising cycles",
        ]}
      />
      <Footer />
    </>
  );
}
