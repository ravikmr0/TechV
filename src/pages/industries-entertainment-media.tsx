import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEntertainmentMedia() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Entertainment & Media"
        subtitle="Audience growth and content intelligence."
        description="Increase engagement and revenue with audience insights, recommendations, and creative automation."
        useCases={[
          "Personalized content recommendations",
          "Audience segmentation and growth",
          "Ad targeting and yield optimization",
          "Creative assistance and repurposing",
          "Rights and metadata management",
        ]}
        outcomes={[
          "Higher watch time and ARPU",
          "Reduced churn",
          "Faster content pipelines",
        ]}
      />
      <Footer />
    </>
  );
}
