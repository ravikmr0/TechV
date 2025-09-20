import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import {
  Cloud,
  Code,
  CheckCircle,
  Brain,
  Bot,
  Shield,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "IT Consulting",
    href: "/services/it-consulting",
    items: [
      "Technology strategy & roadmaps",
      "Solution architecture",
      "Cloud readiness & TCO",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    items: [
      "Migration & modernization",
      "IaC & automation",
      "Cost optimization",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    href: "/services/ai-ml",
    items: [
      "Data pipelines & MLOps",
      "Model development",
      "Responsible AI",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    href: "/services/ai-agents-chatbots",
    items: [
      "Conversation design",
      "RAG over private data",
      "Tool use & automation",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    href: "/services/cybersecurity",
    items: [
      "Assessments & pen testing",
      "Zero Trust & identity",
      "Compliance guidance",
    ],
  },
  {
    icon: Code,
    title: "Custom Software & Web",
    href: "/services/custom-software",
    items: [
      "Product UX/UI",
      "Modern web & mobile",
      "CI/CD & observability",
    ],
  },
];

const benefits = [
  "Industry Expertise – Experienced professionals delivering tailored solutions.",
  "Cutting-Edge Technology – Leveraging the latest tools and trends.",
  "Results-Driven Approach – Focused on business growth and ROI.",
  "Client-Centric Focus – Customized strategies for unique business needs.",
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto text-center mb-8">
            At Tech Vexor, we offer a wide range of cutting-edge digital
            services tailored to elevate your brand and drive business growth.
            Our expert team ensures that your digital presence stands out in a
            competitive market.
          </p>
          <div className="text-center">
            <GradientButton size="lg">Explore Our Services</GradientButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <service.icon className="w-12 h-12 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-slate-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Tech Vexor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-indigo-500" />
                  <p className="text-slate-600">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
