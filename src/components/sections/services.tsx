import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import {
  Code2,
  Shield,
  Settings,
  Brain,
  Cloud,
  Network,
  HeadsetIcon,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "IT & Software Development",
    description:
      "Custom software solutions, web & mobile app development, API integration",
    link: "/services/software-development",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Security audits, threat protection, compliance management, data security",
    link: "/services/cybersecurity",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description:
      "24/7 system monitoring, maintenance, IT infrastructure management",
    link: "/services/managed-services",
  },
  {
    icon: Brain,
    title: "Digital Transformation & AI",
    description:
      "AI integration, process automation, digital strategy consulting",
    link: "/services/digital-transformation",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Hosting",
    description: "Cloud migration, hosting solutions, scalable infrastructure",
    link: "/services/cloud-computing",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Network design, implementation, security & maintenance",
    link: "/services/networking",
  },
  {
    icon: HeadsetIcon,
    title: "Tech Support & IT Outsourcing",
    description: "24/7 technical support, IT consulting, resource augmentation",
    link: "/services/tech-support",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Digital Solutions",
    description:
      "Online store development, payment integration, digital marketing",
    link: "/services/ecommerce",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From software development to AI integration, we provide end-to-end
            technology solutions for your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="absolute -inset-2 rounded-lg bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-sm font-medium text-indigo-500 hover:text-indigo-600 inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <GradientButton asChild size="lg" className="group">
            <Link to="/services">
              <span>Explore All Services</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
