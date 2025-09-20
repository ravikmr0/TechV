import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryFitnessWellness() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Fitness & Wellness Centers"
        subtitle="Member engagement and retention."
        description="Use AI to personalize training, optimize classes, and streamline operations for gyms and studios."
        useCases={[
          "Churn prediction and retention campaigns",
          "Smart class scheduling and capacity",
          "Personalized programs and nutrition guidance",
          "Sales CRM and lead routing",
          "Support bots and self-service",
        ]}
        outcomes={[
          "Higher membership retention",
          "Better utilization of classes",
          "Increased add-on sales",
        ]}
      />
      <Footer />
    </>
  );
}
