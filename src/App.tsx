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
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
