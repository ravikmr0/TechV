import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryLogisticsTransportation() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Logistics & Transportation"
        subtitle="On-time, efficient, and visible."
        description="Optimize routes, predict ETAs, and increase network visibility with AI for fleets and carriers."
        useCases={[
          "Route optimization and dispatch",
          "ETA prediction and delay alerts",
          "Network visibility and exceptions",
          "Demand forecasting and capacity planning",
          "Document extraction and automation",
        ]}
        outcomes={[
          "Lower fuel and operating costs",
          "Improved on-time performance",
          "Better customer communication",
        ]}
      />
      <Footer />
    </>
  );
}
