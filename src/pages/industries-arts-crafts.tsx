import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryArtsCrafts() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Drawing & Painting Businesses"
        subtitle="Showcase, sell, and schedule with ease."
        description="Manage commissions, classes, and online sales with AI that assists across workflows."
        useCases={[
          "Online portfolio and store assistants",
          "Class scheduling and waitlists",
          "Commission intake and quoting",
          "Artwork tagging and search",
          "Marketing and social helpers",
        ]}
        outcomes={[
          "Higher sales and bookings",
          "Less admin work",
          "Better client communication",
        ]}
      />
      <Footer />
    </>
  );
}
