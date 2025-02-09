import { Card } from "@/components/ui/card";
import { Building2, Stethoscope, ShoppingBag, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Finance & Banking",
    description:
      "AI-powered risk assessment, fraud detection, and automated trading systems",
    metrics: "45% reduction in fraud incidents",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Diagnostic assistance, patient care optimization, and medical image analysis",
    metrics: "80% faster diagnosis time",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Inventory management, customer behavior analysis, and personalized recommendations",
    metrics: "3x increase in customer engagement",
  },
  {
    icon: Briefcase,
    title: "Enterprise Solutions",
    description:
      "Process automation, data analytics, and intelligent decision support systems",
    metrics: "60% improvement in efficiency",
  },
];

export function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how our AI solutions drive success across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-indigo-500"
            >
              <industry.icon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-slate-600 mb-4">{industry.description}</p>
              <div className="text-sm font-semibold text-indigo-500">
                {industry.metrics}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
