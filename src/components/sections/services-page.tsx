import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { serviceGroups } from "@/data/services-catalog";

const heroCTAs = [
  { label: "Talk to an Expert", href: "/contact" },
  { label: "See Case Studies", href: "/case-studies" },
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
          <div className="flex items-center justify-center gap-3">
            <GradientButton asChild size="lg">
              <Link to="#complete-services-list">Explore Our Services</Link>
            </GradientButton>
            <Link to="#complete-services-list" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
              Complete Services List
            </Link>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-20" id="complete-services-list">
        <div className="container mx-auto px-4 space-y-16">
          {serviceGroups.map((group, gi) => (
            <div key={gi}>
              <h2 className="text-2xl font-bold mb-6">{group.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((svc, si) => (
                  <Link key={si} to={`/services/${svc.slug}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
                      <p className="text-slate-600 mb-4">{svc.description}</p>
                      <ul className="space-y-2">
                        {svc.features.slice(0, 3).map((f, fi) => (
                          <li key={fi} className="flex items-start space-x-2 text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
