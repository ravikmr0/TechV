import { ServicesPage } from "@/components/sections/services-page";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Services() {
  usePageTitle("Digital Marketing & AI Services");

  return (
    <>
      <Header />
      <ServicesPage />
      <Footer />
    </>
  );
}
