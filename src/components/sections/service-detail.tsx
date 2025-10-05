import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { usePageTitle } from "@/hooks/use-page-title";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  benefits?: string[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ServiceDetailSection({
  title,
  description,
  features,
  benefits = [],
  subtitle,
  ctaLabel = "Talk to an expert",
  ctaHref = "/contact",
}: ServiceDetailProps) {
  usePageTitle(`${title} Services & Solutions`);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-3xl mb-2">{subtitle}</p>
          )}
          <p className="text-lg text-slate-300 max-w-3xl">{description}</p>
          <div className="mt-8 flex items-center space-x-4">
            <GradientButton asChild>
              <Link to={ctaHref}>{ctaLabel}</Link>
            </GradientButton>
            <Link to="/services" className="text-slate-300 hover:text-white">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What we deliver</h2>
              <ul className="space-y-3">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Why it matters</h2>
              <ul className="space-y-3">
                {benefits.length > 0 ? (
                  benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Tailored to your goals with measurable outcomes.</li>
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
