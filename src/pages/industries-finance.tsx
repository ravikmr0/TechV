import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import { usePageTitle } from "@/hooks/use-page-title";

export default function IndustryFinance() {
  usePageTitle("Finance Industry Solutions & Growth Strategies");

  return (
    <>
      <Header />
      <IndustryDetailSection
        title="Finance"
        subtitle="AI-powered risk assessment and smarter operations."
        description="From credit risk modeling to fraud detection and compliance automation, we help financial institutions make faster, safer decisions."
        useCases={[
          "Credit scoring and risk assessment",
          "Fraud detection and anomaly monitoring",
          "Customer segmentation and personalization",
          "KYC/AML and regulatory automation",
          "Forecasting and portfolio optimization",
        ]}
        outcomes={[
          "Lower losses and higher approval accuracy",
          "Reduced operational costs and manual work",
          "Regulatory confidence and audit readiness",
        ]}
      />
      <Footer />
    </>
  );
}
