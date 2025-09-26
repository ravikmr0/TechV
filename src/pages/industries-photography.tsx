import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryPhotography() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Photography Studios"
        subtitle="Streamlined bookings and asset workflows."
        description="Automate scheduling, proofing, and delivery while using AI to organize and enhance media libraries."
        useCases={[
          "Booking and scheduling automation",
          "Smart galleries and client proofing",
          "Tagging, search, and curation",
          "AI edit suggestions and presets",
          "Client portals and payments",
        ]}
        outcomes={[
          "Fewer no-shows and admin tasks",
          "Faster turnaround",
          "Better client experience",
        ]}
      />
      <Footer />
    </>
  );
}
