import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustrySports() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Sports Teams & Clubs"
        subtitle="Engage fans and support performance."
        description="Enhance fan experiences and support coaching with analytics, personalization, and automation."
        useCases={[
          "Fan segmentation and campaigns",
          "Ticketing and membership optimization",
          "Performance analytics assistants",
          "Content and social automation",
          "Sponsorship analytics",
        ]}
        outcomes={[
          "Higher attendance and revenue",
          "Improved fan loyalty",
          "Better coaching insights",
        ]}
      />
      <Footer />
    </>
  );
}
