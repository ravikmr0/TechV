import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryRestaurantsCafes() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Restaurants & Cafes"
        subtitle="Smart ordering, forecasting, and loyalty."
        description="Use AI to streamline operations and craft personalized guest experiences—from demand forecasting to smart menus and CRM."
        useCases={[
          "Sales and demand forecasting",
          "Menu optimization and dynamic pricing",
          "Reservation and queue management assistants",
          "Loyalty segmentation and offers",
          "Inventory planning and waste reduction",
        ]}
        outcomes={[
          "Higher table turns and revenue",
          "Lower food waste",
          "Repeat visits and loyalty growth",
        ]}
      />
      <Footer />
    </>
  );
}
