import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryBeautySalonsSpas() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Beauty Salons & Spas"
        subtitle="Schedule smarter and increase bookings."
        description="Automate bookings and marketing while recommending personalized services and products."
        useCases={[
          "Smart scheduling and reminders",
          "Loyalty and offers personalization",
          "Retail recommendations",
          "Reviews management",
          "Assistant for front-desk operations",
        ]}
        outcomes={[
          "Fewer no-shows",
          "Higher rebooking rates",
          "More retail attachment",
        ]}
      />
      <Footer />
    </>
  );
}
