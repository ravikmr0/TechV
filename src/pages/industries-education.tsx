import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEducation() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Education"
        subtitle="AI-based learning solutions that scale."
        description="Empower institutions and edtech with adaptive learning, student success analytics, and automated support with privacy in mind."
        useCases={[
          "Personalized and adaptive learning",
          "Student success and early warning systems",
          "Content generation and assessment",
          "Admissions and enrollment analytics",
          "Support chat and knowledge assistants",
        ]}
        outcomes={[
          "Higher completion and engagement",
          "Reduced support burden",
          "Data-driven decision making",
        ]}
      />
      <Footer />
    </>
  );
}
