import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { industryGroups } from "@/data/industry-catalog";


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

      {/* Groups */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {industryGroups.map((group, gi) => (
            <div key={gi}>
              <h2 className="text-2xl font-bold mb-6">{group.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((i, idx) => (
                  <Link key={idx} to={`/industries/${i.slug}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <h3 className="text-lg font-semibold mb-2">{i.title}</h3>
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
          ))}
        </div>
      </section>
    </div>
  );
}
