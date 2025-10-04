import { Services } from "./sections/services";
import { WhyChooseUs } from "./sections/why-choose-us";
import { CaseStudies } from "./sections/case-studies";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Header } from "./header";
import { Hero } from "./sections/hero";
import { AIDemo } from "./sections/ai-demo";
import { UseCases } from "./sections/use-cases";
import { TrustBadges } from "./sections/trust-badges";
import { usePageTitle } from "@/hooks/use-page-title";

function Home() {
  usePageTitle("AI Transformation & Digital Growth Agency");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <AIDemo />
      <UseCases />
      <WhyChooseUs />
      <TrustBadges />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
