import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { usePageTitle } from "@/hooks/use-page-title";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryDetailProps {
  title: string;
  description: string;
  useCases: string[];
  outcomes?: string[];
  subtitle?: string;
}

export function IndustryDetailSection({
  title,
  description,
  useCases,
  outcomes = [],
  subtitle,
}: IndustryDetailProps) {
  usePageTitle(`${title} Industry Solutions & Growth Strategies`);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/industries" className="inline-flex items-center text-slate-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Industries
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-3xl mb-2">{subtitle}</p>
          )}
          <p className="text-lg text-slate-300 max-w-3xl">{description}</p>
          <div className="mt-8 flex items-center space-x-4">
            <GradientButton asChild>
              <Link to="/contact">Discuss Your Use Case</Link>
            </GradientButton>
            <Link to="/industries" className="text-slate-300 hover:text-white">
              See Industry Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Representative use cases</h2>
              <ul className="space-y-3">
                {useCases.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Business outcomes</h2>
              <ul className="space-y-3">
                {outcomes.length > 0 ? (
                  outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Operational efficiency, better decisions, and revenue growth.</li>
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
