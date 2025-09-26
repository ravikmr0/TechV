import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryPublishing() {
  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Publishers & Book Writers"
        subtitle="Smarter editorial and reader growth."
        description="Use AI for editing assistance, audience development, and monetization across platforms."
        useCases={[
          "Editing and summarization assistants",
          "Audience analytics and newsletters",
          "Content recommendations",
          "SEO and distribution optimization",
          "Subscriptions and paywall analytics",
        ]}
        outcomes={[
          "Faster content pipelines",
          "Better reader engagement",
          "Increased revenue per reader",
        ]}
      />
      <Footer />
    </>
  );
}
