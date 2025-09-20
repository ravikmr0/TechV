import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Building2, HeartPulse, ShoppingBag, Factory, GraduationCap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    title: "Finance",
    description: "AI-powered risk assessment, fraud detection, and compliance.",
    href: "/industries/finance",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Smart diagnostics, patient triage, and care optimization.",
    href: "/industries/healthcare",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "AI-driven customer insights and personalization.",
    href: "/industries/retail",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Intelligent automation, predictive maintenance, quality control.",
    href: "/industries/manufacturing",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "AI-based learning and student success solutions.",
    href: "/industries/education",
  },
];

export function IndustrySolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Purpose-built AI and software solutions tailored to your sector. Accelerate outcomes with proven use cases.
          </p>
          <div className="mt-8">
            <GradientButton asChild size="lg">
              <Link to="#use-cases">See Industry Use Cases</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((i, idx) => (
              <Link key={idx} to={i.href}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <i.icon className="w-10 h-10 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{i.title}</h3>
                  <p className="text-slate-600 mb-4">{i.description}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Explore use cases
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
