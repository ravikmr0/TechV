import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import { Footer } from "@/components/sections/footer";

export default function FinanceIndustry() {
  usePageTitle("Finance Industry Solutions - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection 
        title="Finance"
        subtitle="Secure and compliant technology solutions for financial services"
        description="Transform your financial services with cutting-edge technology solutions designed for security, compliance, and scalability."
        useCases={[
          "Fraud detection and prevention systems",
          "Automated loan processing and underwriting",
          "Real-time risk assessment and management",
          "Customer onboarding and KYC automation",
          "Trading platform development",
          "Payment processing solutions"
        ]}
        outcomes={[
          "40% reduction in fraud losses",
          "60% faster loan processing times",
          "Enhanced regulatory compliance",
          "Improved customer experience",
          "Reduced operational costs"
        ]}
      />
      <Footer />
    </div>
  );
}