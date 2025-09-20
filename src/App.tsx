import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./pages/services";
import Projects from "./pages/projects";
import About from "./pages/about";
import AISolutions from "./pages/ai-solutions";
import CaseStudies from "./pages/case-studies";
import Blog from "./pages/blog";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import routes from "tempo-routes";
import Industries from "./pages/industries";
import ServiceITConsulting from "./pages/services-it-consulting";
import ServiceCloudSolutions from "./pages/services-cloud-solutions";
import ServiceAIAndML from "./pages/services-ai-ml";
import ServiceAIAgentsChatbots from "./pages/services-ai-agents-chatbots";
import ServiceCybersecurity from "./pages/services-cybersecurity";
import ServiceCustomSoftware from "./pages/services-custom-software";
import IndustryFinance from "./pages/industries-finance";
import IndustryHealthcare from "./pages/industries-healthcare";
import IndustryRetail from "./pages/industries-retail";
import IndustryManufacturing from "./pages/industries-manufacturing";
import IndustryEducation from "./pages/industries-education";
import IndustryEcommerce from "./pages/industries-ecommerce";
import IndustryRestaurantsCafes from "./pages/industries-restaurants-cafes";
import IndustryRealEstate from "./pages/industries-real-estate";
import IndustryTravelTourism from "./pages/industries-travel-tourism";
import IndustryFitnessWellness from "./pages/industries-fitness-wellness";
import IndustryNonProfits from "./pages/industries-non-profits";
import IndustryEntertainmentMedia from "./pages/industries-entertainment-media";
import IndustryConsulting from "./pages/industries-consulting";
import IndustryMarketingAdvertising from "./pages/industries-marketing-advertising";
import IndustryPhotography from "./pages/industries-photography";
import IndustryLogisticsTransportation from "./pages/industries-logistics-transportation";
import IndustryFashionApparel from "./pages/industries-fashion-apparel";
import IndustryBeautySalonsSpas from "./pages/industries-beauty-salons-spas";
import IndustrySports from "./pages/industries-sports";
import IndustryPublishing from "./pages/industries-publishing";
import IndustryLocalServices from "./pages/industries-local-services";
import IndustryConstruction from "./pages/industries-construction";
import IndustryWeddingPlanners from "./pages/industries-wedding-planners";
import IndustryArtsCrafts from "./pages/industries-arts-crafts";
import IndustryGreenEnergy from "./pages/industries-green-energy";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Industry routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/finance" element={<IndustryFinance />} />
          <Route path="/industries/healthcare" element={<IndustryHealthcare />} />
          <Route path="/industries/retail" element={<IndustryRetail />} />
          <Route path="/industries/manufacturing" element={<IndustryManufacturing />} />
          <Route path="/industries/education" element={<IndustryEducation />} />
          <Route path="/industries/ecommerce" element={<IndustryEcommerce />} />
          <Route path="/industries/restaurants-cafes" element={<IndustryRestaurantsCafes />} />
          <Route path="/industries/real-estate" element={<IndustryRealEstate />} />
          <Route path="/industries/travel-tourism" element={<IndustryTravelTourism />} />
          <Route path="/industries/fitness-wellness" element={<IndustryFitnessWellness />} />
          <Route path="/industries/non-profits" element={<IndustryNonProfits />} />
          <Route path="/industries/entertainment-media" element={<IndustryEntertainmentMedia />} />
          <Route path="/industries/consulting" element={<IndustryConsulting />} />
          <Route path="/industries/marketing-advertising" element={<IndustryMarketingAdvertising />} />
          <Route path="/industries/photography" element={<IndustryPhotography />} />
          <Route path="/industries/logistics-transportation" element={<IndustryLogisticsTransportation />} />
          <Route path="/industries/fashion-apparel" element={<IndustryFashionApparel />} />
          <Route path="/industries/beauty-salons-spas" element={<IndustryBeautySalonsSpas />} />
          <Route path="/industries/sports" element={<IndustrySports />} />
          <Route path="/industries/publishing" element={<IndustryPublishing />} />
          <Route path="/industries/local-services" element={<IndustryLocalServices />} />
          <Route path="/industries/construction" element={<IndustryConstruction />} />
          <Route path="/industries/wedding-planners" element={<IndustryWeddingPlanners />} />
          <Route path="/industries/arts-crafts" element={<IndustryArtsCrafts />} />
          <Route path="/industries/green-energy" element={<IndustryGreenEnergy />} />

          {/* Service detail routes */}
          <Route path="/services/it-consulting" element={<ServiceITConsulting />} />
          <Route path="/services/cloud-solutions" element={<ServiceCloudSolutions />} />
          <Route path="/services/ai-ml" element={<ServiceAIAndML />} />
          <Route path="/services/ai-agents-chatbots" element={<ServiceAIAgentsChatbots />} />
          <Route path="/services/cybersecurity" element={<ServiceCybersecurity />} />
          <Route path="/services/custom-software" element={<ServiceCustomSoftware />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
