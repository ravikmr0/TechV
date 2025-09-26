import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryGreenEnergy() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Green Energy Companies"
        subtitle="Forecast, optimize, and sustain."
        description="Monitor assets, forecast generation, and report ESG metrics with trustworthy data and AI."
        useCases={[
          "Asset monitoring and anomaly detection",
          "Generation and demand forecasting",
          "Maintenance scheduling and spares",
          "Carbon accounting and ESG reporting",
          "Market analytics and bidding",
        ]}
        outcomes={[
          "Higher uptime",
          "Optimized maintenance spend",
          "Reliable sustainability reporting",
        ]}
      />
      <Footer />
    </>
  );
}
