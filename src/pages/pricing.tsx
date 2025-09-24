import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const webPlans = [
  {
    name: "Starter Website",
    price: "₹25,000–₹60,000",
    tagline: "5–10 pages, fast launch",
    features: [
      "Responsive design",
      "CMS or static setup",
      "Basic SEO + analytics",
      "Contact forms & lead capture",
      "Speed & accessibility best practices",
    ],
  },
  {
    name: "Business Website",
    price: "₹60,000–₹1,20,000",
    tagline: "Custom UI, integrations",
    popular: true,
    features: [
      "Custom components & animations",
      "Blog or resources section",
      "3rd‑party integrations (CRM, chat, payments)",
      "On‑page SEO + schema",
      "Performance optimization",
    ],
  },
  {
    name: "E‑commerce",
    price: "₹1,20,000–₹3,00,000",
    tagline: "Shopify/Woo/Headless",
    features: [
      "Catalog, cart, checkout",
      "Payments, shipping, taxes",
      "Discounts, coupons, wishlist",
      "Optimized product pages",
      "Basic training & handover",
    ],
  },
];

const dmPlans = [
  {
    name: "Starter",
    price: "₹15,000–₹35,000/mo",
    tagline: "Foundational growth",
    features: [
      "Account setup & audits",
      "Organic + light paid mix",
      "Monthly reporting",
      "Tracking & pixels",
    ],
  },
  {
    name: "Growth",
    price: "₹35,000–₹75,000/mo",
    tagline: "Multi‑channel performance",
    popular: true,
    features: [
      "Google/Search + Social ads",
      "Landing pages + CRO basics",
      "Content calendar",
      "Weekly reporting & insights",
    ],
  },
  {
    name: "Performance",
    price: "₹75,000–₹2,00,000/mo",
    tagline: "Scale with attribution",
    features: [
      "Full‑funnel media mix",
      "Advanced analytics & dashboards",
      "Retention (email/WhatsApp)",
      "Experimentation roadmap",
    ],
  },
];

const smmPlans = [
  {
    name: "Basic",
    price: "₹12,000–₹25,000/mo",
    tagline: "2–3 platforms",
    features: [
      "8–12 posts/mo",
      "Captions & scheduling",
      "Community management (basic)",
      "Monthly performance summary",
    ],
  },
  {
    name: "Standard",
    price: "₹25,000–₹45,000/mo",
    tagline: "3–4 platforms + video",
    popular: true,
    features: [
      "15–20 posts/mo + reels",
      "Creative design & templates",
      "Comment/DM handling",
      "Competitor insights",
    ],
  },
  {
    name: "Pro",
    price: "₹45,000–₹90,000/mo",
    tagline: "Full social ops",
    features: [
      "Always‑on calendar",
      "Influencer coordination",
      "UGC & campaign management",
      "Detailed reporting",
    ],
  },
];

const brandPlans = [
  {
    name: "Logo Pack",
    price: "₹18,000–₹40,000",
    tagline: "Logo + basics",
    features: [
      "3–4 concepts + revisions",
      "Color & typography",
      "Brand assets & exports",
      "Usage guide (lite)",
    ],
  },
  {
    name: "Brand Identity System",
    price: "₹60,000–₹1,50,000",
    tagline: "Complete system",
    popular: true,
    features: [
      "Logo suite & rules",
      "Stationery & social kit",
      "Voice & tone basics",
      "Brand guidelines PDF",
    ],
  },
  {
    name: "UI/UX Design",
    price: "₹4,000–₹12,000/screen",
    tagline: "Web/App interfaces",
    features: [
      "Research & wireframes",
      "Design system & components",
      "Clickable prototypes",
      "Developer handoff",
    ],
  },
];

function PlanCard({ plan }: { plan: { name: string; price: string; tagline: string; features: string[]; popular?: boolean } }) {
  return (
    <Card className={`flex flex-col h-full ${plan.popular ? "border-indigo-500" : ""}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          {plan.popular && <Badge className="bg-indigo-500">Most Popular</Badge>}
        </div>
        <div className="text-3xl font-bold mt-1">{plan.price}</div>
        <div className="text-slate-500 text-sm">{plan.tagline}</div>
      </CardHeader>
      <CardContent className="gap-2 flex flex-col">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
            <span className="text-slate-700">{f}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex gap-2">
          <GradientButton asChild>
            <a href="https://wa.me/917895849990" target="_blank" rel="noreferrer">Talk to Sales</a>
          </GradientButton>
          <Button asChild variant="outline">
            <a href="/contact">Request Quote</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent, Competitive Pricing</h1>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Flexible packages for Website Development, Digital Marketing, Social Media Management, and Branding & Design.
              Prices vary by scope and complexity; taxes extra.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Website Development</h2>
            <p className="text-center text-slate-600 mb-8">One‑time project cost. Hosting/domain billed separately.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Digital Marketing</h2>
            <p className="text-center text-slate-600 mb-8">Monthly retainers. Ad spend excluded.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dmPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Social Media Management</h2>
            <p className="text-center text-slate-600 mb-8">Content, scheduling, and community. Production shoots extra.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {smmPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Branding & Design</h2>
            <p className="text-center text-slate-600 mb-8">One‑time design fees. Printing or development billed separately.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brandPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-sm text-slate-600 space-y-2">
              <div>• Exact quotes depend on scope, features, integrations, timeline, and brand guidelines.</div>
              <div>• GST as applicable. Long‑term retainers and bundled packages receive preferred pricing.</div>
              <div>• NDA available on request. We work with startups, SMBs, and enterprises.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
