import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryTravelTourism() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Travel & Tourism Companies"
        subtitle="Personalized trips and operational excellence."
        description="Deliver tailored itineraries, dynamic offers, and proactive service with AI across channels."
        useCases={[
          "Itinerary assistants and trip planning",
          "Dynamic pricing and upsell",
          "Customer service automation",
          "Demand forecasting and capacity planning",
          "Reviews analysis and NPS insights",
        ]}
        outcomes={[
          "Higher attachment and ancillary revenue",
          "Reduced handling time",
          "Improved satisfaction and loyalty",
        ]}
      />
      <Footer />
    </>
  );
}
