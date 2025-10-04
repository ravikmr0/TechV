import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustrySolutionsPage } from "@/components/sections/industry-solutions";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Industries() {
  usePageTitle("Industries We Serve with AI & Marketing");

  return (
    <>
      <Header />
      <IndustrySolutionsPage />
      <Footer />
    </>
  );
}
