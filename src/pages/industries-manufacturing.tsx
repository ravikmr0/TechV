import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryManufacturing() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Manufacturing"
        subtitle="Intelligent automation and quality."
        description="Increase throughput and quality with predictive maintenance, defect detection, and optimized scheduling across plants."
        useCases={[
          "Predictive maintenance and downtime reduction",
          "Computer vision quality inspection",
          "Production scheduling and optimization",
          "Supply chain visibility and planning",
          "Worker safety monitoring",
        ]}
        outcomes={[
          "Higher OEE and lower scrap",
          "Fewer unplanned outages",
          "Improved on-time delivery",
        ]}
      />
      <Footer />
    </>
  );
}
