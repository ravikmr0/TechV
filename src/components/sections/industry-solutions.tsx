import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Building2, HeartPulse, ShoppingBag, Factory, GraduationCap, CheckCircle, Briefcase, Megaphone, Camera, Truck, Shirt, Leaf, Globe, Clapperboard, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Building2, title: "Finance", description: "AI-powered risk assessment, fraud detection, and compliance.", href: "/industries/finance" },
  { icon: HeartPulse, title: "Healthcare", description: "Smart diagnostics, patient triage, and care optimization.", href: "/industries/healthcare" },
  { icon: ShoppingBag, title: "Retail", description: "AI-driven customer insights and personalization.", href: "/industries/retail" },
  { icon: Factory, title: "Manufacturing", description: "Intelligent automation, predictive maintenance, quality control.", href: "/industries/manufacturing" },
  { icon: GraduationCap, title: "Education", description: "AI-based learning and student success solutions.", href: "/industries/education" },

  // New categories
  { icon: ShoppingBag, title: "E-commerce Stores", description: "Personalized shopping, recommendations, and conversion growth.", href: "/industries/ecommerce" },
  { icon: Users, title: "Restaurants & Cafes", description: "Smart menus, demand forecasting, and customer loyalty.", href: "/industries/restaurants-cafes" },
  { icon: Building2, title: "Real Estate Agencies", description: "Lead scoring, property matching, and market insights.", href: "/industries/real-estate" },
  { icon: Globe, title: "Travel & Tourism Companies", description: "Dynamic pricing, itinerary assistants, and upsell.", href: "/industries/travel-tourism" },
  { icon: HeartPulse, title: "Fitness & Wellness Centers", description: "Member engagement, scheduling, and retention analytics.", href: "/industries/fitness-wellness" },
  { icon: Sparkles, title: "Non-Profits & Charities", description: "Donor segmentation, grant tracking, and impact reporting.", href: "/industries/non-profits" },
  { icon: Clapperboard, title: "Entertainment & Media", description: "Audience insights, content recommendations, and ads.", href: "/industries/entertainment-media" },
  { icon: Briefcase, title: "Consulting Agencies", description: "Knowledge assistants, proposal automation, and BI.", href: "/industries/consulting" },
  { icon: Megaphone, title: "Marketing & Advertising", description: "Campaign optimization, attribution, and creative AI.", href: "/industries/marketing-advertising" },
  { icon: Camera, title: "Photography Studios", description: "Booking automation, asset curation, and client portals.", href: "/industries/photography" },
  { icon: Truck, title: "Logistics & Transportation", description: "Route optimization, ETA prediction, and visibility.", href: "/industries/logistics-transportation" },
  { icon: Shirt, title: "Fashion & Apparel Brands", description: "Trend prediction, size guidance, and returns reduction.", href: "/industries/fashion-apparel" },
  { icon: Sparkles, title: "Beauty Salons & Spas", description: "Smart scheduling, upsell, and personalized offers.", href: "/industries/beauty-salons-spas" },
  { icon: Users, title: "Sports Teams & Clubs", description: "Fan engagement, membership, and performance insights.", href: "/industries/sports" },
  { icon: BookOpen, title: "Publishers & Book Writers", description: "Editorial assistance, audience growth, and monetization.", href: "/industries/publishing" },
  { icon: Users, title: "Local Service Providers", description: "Lead routing, quotes, scheduling, and reviews.", href: "/industries/local-services" },
  { icon: Building2, title: "Construction Companies", description: "Project tracking, safety, and cost forecasting.", href: "/industries/construction" },
  { icon: Sparkles, title: "Wedding Planners", description: "Timeline automation, vendor matching, and portals.", href: "/industries/wedding-planners" },
  { icon: Camera, title: "Drawing & Painting Businesses", description: "Portfolio management, bookings, and e-commerce.", href: "/industries/arts-crafts" },
  { icon: Leaf, title: "Green Energy Companies", description: "Asset monitoring, forecasting, and sustainability KPIs.", href: "/industries/green-energy" },
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
