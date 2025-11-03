import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import ServicesPage from "@/components/sections/services-page";
import { Footer } from "@/components/sections/footer";

export default function Services() {
  usePageTitle("Services - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesPage />
      <Footer />
    </div>
  );
}