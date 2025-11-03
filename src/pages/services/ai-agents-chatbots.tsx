import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function AIAgentsChatbots() {
  usePageTitle("AI Agents & Chatbots - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="AI Agents & Chatbots"
        description="Intelligent conversational AI and automated agents"
        features={[
          "Custom chatbot development",
          "AI-powered virtual assistants",
          "Multi-channel support integration",
          "Natural language understanding",
          "24/7 automated customer service"
        ]}
        benefits={[
          "Reduce support costs by 70%",
          "Improve response times",
          "Increase customer satisfaction",
          "Scale support operations"
        ]}
      />
      <Footer />
    </div>
  );
}