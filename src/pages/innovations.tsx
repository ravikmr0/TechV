import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { usePageTitle } from "@/hooks/use-page-title";
import { Brain, Shield, Cloud, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "LLM agents, ML systems, and MLOps that move from prototype to production.",
    href: "/ai-solutions",
  },
  {
    icon: Cloud,
    title: "Cloud & Platforms",
    description:
      "Cloud-native architectures, automation, and data platforms at scale.",
    href: "/services/cloud-solutions",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Zero Trust, secure SDLC, and continuous defenses built-in.",
    href: "/services/cybersecurity",
  },
  {
    icon: Sparkles,
    title: "Case Studies",
    description:
      "Real outcomes from startups to enterprises across industries.",
    href: "/case-studies",
  },
];

export default function Innovations() {
  usePageTitle("Innovation Lab & Emerging Tech");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Innovations</h1>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Discover how Tech Vexor blends AI, cloud, and secure engineering to
              deliver measurable business impact.
            </p>
            <div className="mt-8">
              <GradientButton asChild size="lg">
                <Link to="/contact">Start Your Project</Link>
              </GradientButton>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <Link to={h.href} key={i}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <h.icon className="w-10 h-10 text-indigo-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
                    <p className="text-slate-600 mb-4">{h.description}</p>
                    <div className="text-sm text-indigo-600 inline-flex items-center">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
