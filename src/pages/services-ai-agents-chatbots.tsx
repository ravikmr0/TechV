import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceAIAgentsChatbots() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="AI Agent & Chatbot Design"
        subtitle="Conversational AI that actually solves tasks."
        description="We design and implement LLM-powered agents and chatbots tailored to your workflows—grounded in your data, secure, and reliable."
        features={[
          "Conversation design and guardrails",
          "RAG over private data and systems integration",
          "Tool use and workflow automation",
          "Analytics, feedback loops, and improvement",
          "Multimodal interfaces (voice, vision)",
        ]}
        benefits={[
          "Reduced support load and faster resolution",
          "Higher conversion and customer satisfaction",
          "Automation of repetitive tasks",
        ]}
      />
      <Footer />
    </>
  );
}
