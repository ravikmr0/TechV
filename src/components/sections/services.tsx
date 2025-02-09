import { Card } from "@/components/ui/card";
import { Brain, Monitor, Bot, Cog } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "AI models, NLP, ML solutions, AI-driven automation",
  },
  {
    icon: Monitor,
    title: "IT Services & Consulting",
    description: "Cloud solutions, cybersecurity, enterprise IT",
  },
  {
    icon: Bot,
    title: "AI Agent Design",
    description: "Conversational AI, virtual assistants, AI-powered chatbots",
  },
  {
    icon: Cog,
    title: "Custom Software Development",
    description: "Web & mobile applications, automation tools",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Businesses with Next-Gen IT & AI Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From AI-driven automation to IT consulting, we provide tailored
            solutions for business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <GradientButton size="lg">Explore Our Services</GradientButton>
        </div>
      </div>
    </section>
  );
}
