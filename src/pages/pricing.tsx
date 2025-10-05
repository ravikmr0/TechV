import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { Check } from "lucide-react";

type Plan = { name: string; price: string; tagline: string; features: string[]; popular?: boolean };

function PlanCard({ plan }: { plan: Plan }) {
  const waText = encodeURIComponent(
    `Hi Tech Vexor, I'm interested in ${plan.name} (${plan.price}). ${plan.tagline}. Features I'm considering: ${plan.features.join(", ")}.`
  );
  const waLink = `https://wa.me/917895849990?text=${waText}`;
  const payLink = `/contact?subject=${encodeURIComponent("Pay Now: " + plan.name)}&message=${encodeURIComponent("I want to proceed with payment for " + plan.name + " (" + plan.price + ").")}`;

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
            <a href={waLink} target="_blank" rel="noreferrer">Talk to Sales</a>
          </GradientButton>
          <Button asChild variant="outline">
            <a href={payLink}>Pay Now</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// 1) IT & Software Solutions
const itPlans: Plan[] = [
  { name: "Website Development (Static/CMS)", price: "₹25,000–₹1,20,000", tagline: "Corporate, portfolio, CMS", features: ["Responsive UI", "Basic SEO & analytics", "Forms & integrations"] },
  { name: "Custom/E‑commerce/Marketplace", price: "₹1,20,000–₹6,00,000+", tagline: "Commerce & custom flows", features: ["Catalog & payments", "Shipping/tax setup", "Performance & SEO"] },
  { name: "Web Application Development", price: "₹2,00,000–₹12,00,000+", tagline: "SPA/SSR, APIs & data", features: ["TypeScript/React", "Secure APIs", "CI/CD & monitoring"] },
  { name: "Mobile App Development (Android/iOS/Hybrid)", price: "₹3,00,000–₹15,00,000+", tagline: "Native or cross‑platform", features: ["Auth, push, in‑app", "Offline‑first", "Store publishing"] },
  { name: "ERP/CRM Solutions", price: "₹4,00,000–₹25,00,000+", tagline: "Implement/customize", features: ["Data migration", "Workflows & training", "Integrations"] },
  { name: "SaaS Development", price: "₹6,00,000–₹30,00,000+", tagline: "Multi‑tenant MVP → scale", features: ["Billing/subscriptions", "Admin consoles", "Observability"] },
  { name: "API Development & Integrations", price: "₹1,00,000–₹6,00,000+", tagline: "OpenAPI, SDKs", features: ["Rate‑limits & caching", "Webhooks", "Docs & testing"] },
  { name: "Cloud Services (AWS/Azure/GCP)", price: "₹25,000–₹2,50,000+", tagline: "Setup/landing zones", features: ["IaC (Terraform)", "Monitoring & SRE", "Backup & DR"] },
  { name: "IT Consulting & Strategy", price: "₹50,000–₹5,00,000", tagline: "Audits & roadmaps", features: ["Discovery & architecture", "Prioritized initiatives", "Change mgmt"] },
  { name: "Cybersecurity & Data Protection", price: "₹1,50,000–₹10,00,000+", tagline: "Assess, harden, comply", features: ["Threat modeling", "IAM & encryption", "Pentest & runbooks"] },
  { name: "IT Support & Maintenance (AMC)", price: "₹15,000–₹1,50,000/mo", tagline: "Proactive support", features: ["SLA helpdesk", "Patching/backup", "24×7 monitoring"] },
  { name: "Software Testing & QA", price: "₹80,000–₹6,00,000+", tagline: "Automation/manual", features: ["Unit/E2E", "Perf & security", "CI gates"] },
  { name: "Chatbot & AI Automation", price: "₹1,50,000–₹12,00,000+", tagline: "LLM/RAG/Bots", features: ["Private data RAG", "Guardrails", "Analytics"] },
];

// 2) Digital Marketing services (per‑service typical retainers)
const dmServicePlans: Plan[] = [
  { name: "SEO (On/Off/Technical)", price: "₹25,000–₹90,000/mo", tagline: "Audits, content, links", features: ["Technical fixes", "Content & schema", "Authority building"] },
  { name: "ASO", price: "₹15,000–₹45,000/mo", tagline: "Keywords & creatives", features: ["Metadata & visuals", "A/B testing", "Review strategy"] },
  { name: "Paid Advertising (Search/Display/Programmatic)", price: "₹30,000–₹1,50,000/mo", tagline: "Campaign setup & ops", features: ["Account structure", "Creatives/LPs", "Attribution"] },
  { name: "Social Media Management", price: "₹12,000–₹90,000/mo", tagline: "Content + community", features: ["Calendars & design", "Scheduling & UGC", "Reporting"] },
  { name: "Social Media Advertising", price: "₹25,000–₹1,00,000/mo", tagline: "Paid social ops", features: ["Audience & creatives", "Testing", "Optimization"] },
  { name: "Email Marketing & Automation", price: "₹20,000–₹75,000/mo", tagline: "Flows & campaigns", features: ["ESP setup", "Journeys", "Deliverability"] },
  { name: "WhatsApp/SMS Marketing", price: "₹15,000–₹60,000/mo", tagline: "Conversational comms", features: ["Opt‑ins & templates", "Segmentation", "Analytics"] },
  { name: "Content Marketing & Copywriting", price: "₹25,000–₹1,00,000/mo", tagline: "Editorial machine", features: ["Briefs", "Production", "Distribution"] },
  { name: "Video Marketing (YouTube/Reels/TikTok)", price: "₹25,000–₹1,00,000/mo", tagline: "Audience growth", features: ["Programming", "Creative kits", "Analytics"] },
  { name: "Online Reputation Management (ORM)", price: "₹20,000–₹80,000/mo", tagline: "Listen & respond", features: ["Monitoring", "Response playbooks", "Review gen"] },
  { name: "Influencer Marketing", price: "₹30,000–₹1,50,000+/mo", tagline: "Creators & ops", features: ["Discovery & contracts", "Briefs", "Measurement"] },
  { name: "Conversion Rate Optimization (CRO)", price: "₹35,000–₹1,20,000/mo", tagline: "Experiments & UX", features: ["Heuristics", "A/B testing", "Personalization"] },
  { name: "Analytics, Tracking & Reporting", price: "₹20,000–₹1,00,000/mo", tagline: "Dashboards & attribution", features: ["GTM/GA4", "Attribution", "BI dashboards"] },
];

// 3) Branding & Design
const brandPlans: Plan[] = [
  { name: "Logo & Brand Identity", price: "₹18,000–₹40,000", tagline: "Logo + basics", features: ["3–4 concepts", "Color/typography", "Assets & exports"] },
  { name: "Brand Identity System", price: "₹60,000–₹1,50,000", tagline: "Complete system", features: ["Logo suite", "Stationery & social kit", "Guidelines PDF"] , popular: true},
  { name: "UI/UX Design (Web/Apps)", price: "₹4,000��₹12,000/screen", tagline: "Interfaces & systems", features: ["Research & wires", "Components", "Prototypes"] },
  { name: "Graphic Design (Print/Digital)", price: "₹10,000–₹60,000", tagline: "Campaign & social kits", features: ["Creatives", "Resize & variants", "Delivery packages"] },
  { name: "Infographics & Illustrations", price: "₹12,000–₹60,000", tagline: "Data stories", features: ["Concept & layout", "Custom art", "Final exports"] },
  { name: "Product & Packaging Design", price: "₹60,000–₹2,50,000", tagline: "Shelf‑ready packs", features: ["Concepts", "Dielines", "Print files"] },
  { name: "Brand Guidelines Development", price: "₹45,000–₹1,20,000", tagline: "Usage & rules", features: ["Voice & tone", "Visual rules", "Templates"] },
  { name: "Presentation & Pitch Deck", price: "₹25,000–₹1,20,000", tagline: "Investor/sales decks", features: ["Narrative", "Design", "Templates"] },
  { name: "Corporate Identity Kits", price: "₹15,000–₹60,000", tagline: "Stationery & assets", features: ["Cards & letterheads", "Email & docs", "Banners"] },
];

// 4) Video & Multimedia Production
const videoPlans: Plan[] = [
  { name: "Corporate Films & Brand Stories", price: "₹1,20,000–₹6,00,000+", tagline: "Script to edit", features: ["Scripting", "Shoot", "Edit & color"] },
  { name: "Explainer Videos (2D/3D/Whiteboard/Motion)", price: "₹60,000–₹3,00,000+", tagline: "Animation kits", features: ["Storyboard", "VO & music", "Mastering"] },
  { name: "Advertisement & Commercial Videos", price: "₹2,00,000–₹12,00,000+", tagline: "Performance ads", features: ["Concept", "Production", "Formats"] },
  { name: "Training & E‑learning Videos", price: "��80,000–₹4,00,000+", tagline: "Instructional", features: ["SME capture", "Modules", "LMS exports"] },
  { name: "Event & Conference Coverage (Live)", price: "₹1,00,000–₹5,00,000+", tagline: "Multi‑cam/live", features: ["Live switch", "Streaming", "Highlights"] },
  { name: "Short‑form Video (Reels/Shorts/TikTok)", price: "₹40,000–₹1,50,000/mo", tagline: "Always‑on", features: ["Hooks", "Editing", "Scheduling"] },
  { name: "Drone Shoot Services", price: "₹35,000–₹1,20,000", tagline: "Aerial capture", features: ["Licensed pilots", "4K/6K", "Compliance"] },
  { name: "Video Editing & Post‑Production", price: "₹20,000–₹1,50,000", tagline: "Polish & pace", features: ["Edits", "Sound design", "Color grade"] },
  { name: "Voiceover & Dubbing Services", price: "₹15,000–₹90,000", tagline: "Multi‑language", features: ["Talent", "Studios", "Localization"] },
];

// 5) Printing & Offline Marketing
const printPlans: Plan[] = [
  { name: "Business Cards/Flyers/Brochures/Posters", price: "₹5,000–₹60,000", tagline: "Design + print options", features: ["Design", "Material choices", "Delivery"] },
  { name: "Catalogues & Magazines", price: "₹25,000–₹2,00,000", tagline: "Editorial design", features: ["Layouts", "Proofs", "Finishing"] },
  { name: "Corporate Stationery", price: "₹10,000–₹60,000", tagline: "Office essentials", features: ["Letterheads/envelopes", "Diaries/notebooks", "Print mgmt"] },
  { name: "Packaging & Label Printing", price: "₹20,000–₹2,00,000", tagline: "Compliant labels", features: ["Dielines", "Materials", "Finishing"] },
  { name: "Merchandise Printing", price: "₹15,000–₹1,00,000", tagline: "T‑shirts, mugs, gifts", features: ["Design", "Sourcing", "Print"] },
  { name: "Large‑Format (Banners/Hoardings/Signage)", price: "₹20,000–₹2,50,000", tagline: "Outdoor specs", features: ["Color mgmt", "Weatherproof", "Install"] },
  { name: "POS Materials (Danglers/Standees/Displays)", price: "₹10,000–₹1,50,000", tagline: "Retail impact", features: ["Structure", "Graphics", "On‑site"] },
  { name: "Vehicle Branding & Wraps", price: "₹25,000–₹2,00,000", tagline: "Fleet/store wraps", features: ["Design", "Media", "Application"] },
];

// 6) Photography
const photoPlans: Plan[] = [
  { name: "Corporate & Team Photography", price: "₹15,000–₹80,000", tagline: "Headshots & teams", features: ["On‑site studio", "Retouching", "Assets"] },
  { name: "Product Photography", price: "₹20,000–₹1,50,000", tagline: "Catalog & lifestyle", features: ["Lighting", "Styling", "Retouching"] },
  { name: "Industrial & Manufacturing Photography", price: "₹40,000–₹2,00,000", tagline: "Plants & processes", features: ["Access planning", "Safety", "4K/RAW"] },
  { name: "Food Photography", price: "₹20,000–₹90,000", tagline: "Menus & campaigns", features: ["Styling", "Lighting", "Retouch"] },
  { name: "Real Estate & Interior Photography", price: "₹25,000–₹1,20,000", tagline: "Spaces & properties", features: ["HDR", "Staging", "Delivery"] },
  { name: "Event & Conference Photography", price: "₹25,000–₹1,50,000", tagline: "Coverage & highlights", features: ["Shotlists", "Backups", "Fast delivery"] },
  { name: "Drone Photography", price: "₹25,000–₹1,00,000", tagline: "Aerial stills", features: ["Pilots", "Permits", "Editing"] },
];

// 7) Customer Support & Telecalling
const supportPlans: Plan[] = [
  { name: "Inbound/Outbound Call Center", price: "₹18,000–₹45,000/agent/mo", tagline: "Seats & SLAs", features: ["Dialers & CRM", "Scripts", "QA & reporting"] },
  { name: "Tele‑sales & Lead Follow‑ups", price: "₹20,000–₹50,000/agent/mo", tagline: "Conversion ops", features: ["Cadence", "Qualification", "Handover"] },
  { name: "Appointment Scheduling & Verification", price: "₹15,000–₹40,000/agent/mo", tagline: "Reliable bookings", features: ["Calendars", "Automation", "SLAs"] },
  { name: "Customer Feedback & Surveys", price: "₹15,000–₹40,000/agent/mo", tagline: "Voice of customer", features: ["CSAT/NPS", "Dashboards", "Actions"] },
  { name: "WhatsApp/Chat Support", price: "₹18,000–₹45,000/agent/mo", tagline: "Conversational care", features: ["Bots + agents", "KB", "Analytics"] },
  { name: "Virtual Receptionist", price: "₹12,000–₹30,000/agent/mo", tagline: "24×7 hello", features: ["IVR", "Routing", "Messages"] },
];

// 8) Lead Generation & Growth
const leadPlans: Plan[] = [
  { name: "Pan‑India Leads: uPVC & Aluminium", price: "₹40,000–₹1,50,000/mo", tagline: "Targeted B2B", features: ["Audience maps", "Landing pages", "Qualification"] },
  { name: "B2B & B2C Lead Generation", price: "₹30,000–₹1,50,000/mo", tagline: "Multi‑channel", features: ["Paid + organic", "Funnels", "Scoring"] },
  { name: "International Lead Generation", price: "₹60,000–₹2,00,000/mo", tagline: "Cross‑border", features: ["Geo routing", "Privacy", "Localization"] },
  { name: "Landing Pages & Funnels", price: "₹35,000–₹1,20,000", tagline: "High‑CVR pages", features: ["Design & copy", "Integrations", "Testing"] },
  { name: "Performance Marketing Campaigns", price: "₹35,000–₹1,50,000/mo", tagline: "Always‑on", features: ["Budgets", "Optimization", "Attribution"] },
  { name: "Cold Email Outreach & Database", price: "₹30,000–₹1,00,000/mo", tagline: "Compliant outbound", features: ["Warmup", "Sequences", "Enrichment"] },
  { name: "Franchise & Dealer Network Development", price: "₹60,000–₹2,50,000", tagline: "Partner growth", features: ["ICP & playbooks", "Onboarding", "Portals"] },
];

// 9) Industry‑Specific Expertise (uPVC & Aluminium)
const industryPlans: Plan[] = [
  { name: "Marketing Strategy for uPVC Windows & Doors", price: "₹60,000–₹2,50,000", tagline: "Geo & channel mix", features: ["ICP planning", "Budgeting", "Reporting"] },
  { name: "Branding for Fabricators & Dealers", price: "₹45,000–₹1,50,000", tagline: "Trade identity", features: ["Identity system", "Collateral", "Guidelines"] },
  { name: "Lead Generation for Fabrication Businesses", price: "₹40,000–₹1,20,000/mo", tagline: "Local demand", features: ["Local SEO", "Paid search", "WhatsApp"] },
  { name: "Vendor & Distributor Network Development", price: "₹75,000–₹3,00,000", tagline: "Scale supply & reach", features: ["Partner discovery", "Contracts", "Portals"] },
  { name: "Social Media for Industry Growth", price: "₹25,000–₹90,000/mo", tagline: "Content + ads", features: ["Calendars", "Leads", "Analytics"] },
  { name: "3D Visualization for Windows/Doors", price: "₹1,00,000–₹5,00,000", tagline: "Models & configurators", features: ["3D models", "Viewers/AR", "Exports"] },
];

// 10) Extra Value‑Add Services
const extraPlans: Plan[] = [
  { name: "Business Consulting & Growth Strategy", price: "₹60,000–₹3,00,000", tagline: "Diagnostics → plan", features: ["Research", "Roadmaps", "PMO"] },
  { name: "Market Research & Competitor Analysis", price: "₹45,000–₹2,00,000", tagline: "Decisions with data", features: ["Surveys & interviews", "Competitive scans", "Insights"] },
  { name: "Data Entry & Virtual Assistance", price: "₹15,000–₹50,000/mo", tagline: "Back‑office", features: ["SLAs", "QA", "Security"] },
  { name: "HR & Recruitment Support", price: "₹35,000–₹1,50,000", tagline: "Source & onboard", features: ["ATS", "Assessments", "Onboarding"] },
  { name: "Event Management & Promotion", price: "₹60,000–₹5,00,000", tagline: "End‑to‑end ops", features: ["Concept", "Vendors", "Production"] },
  { name: "Corporate Training (Digital/IT/Marketing)", price: "₹45,000–₹2,50,000", tagline: "Capability building", features: ["Curriculum", "Labs", "Certification"] },
  { name: "Franchise Marketing & Expansion", price: "₹60,000–₹3,00,000", tagline: "Scale presence", features: ["Playbooks", "Activation", "Analytics"] },
  { name: "E‑commerce Store Setup (Shopify/Woo/Magento)", price: "₹60,000–₹3,00,000", tagline: "Launch & operate", features: ["Theme & apps", "Payments & shipping", "Ops"] },
  { name: "Payment Gateway Integration", price: "₹25,000–₹1,00,000", tagline: "Secure payments", features: ["Razorpay/Stripe", "Subscriptions", "Reconciliation"] },
  { name: "WhatsApp Chatbot Automation", price: "₹60,000–₹2,50,000", tagline: "Flows & APIs", features: ["Templates", "APIs", "Analytics"] },
  { name: "Local SEO & Google My Business", price: "₹20,000–₹80,000", tagline: "Dominate local", features: ["Listings", "Reviews", "Posts"] },
];

function Section({ title, subtitle, items, bg }: { title: string; subtitle?: string; items: Plan[]; bg?: boolean }) {
  return (
    <section className={bg ? "py-12 bg-slate-50" : "py-12"}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        {subtitle && <p className="text-center text-slate-600 mb-8">{subtitle}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  usePageTitle("Pricing for AI, Marketing & Technology Services");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent, Competitive Pricing</h1>
            <p className="text-slate-300 max-w-3xl mx-auto">
              INR pricing ranges across all our services. Final quotes depend on scope, integrations, and timelines. Taxes extra.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <GradientButton asChild>
                <a href="/services#complete-services-list">Complete Services List</a>
              </GradientButton>
              <Button asChild variant="outline">
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </section>

        <Section title="IT & Software Solutions" subtitle="Websites, apps, platforms, and secure engineering" items={itPlans} />
        <Section title="Digital Marketing Services" subtitle="Per‑service retainers; ad spend excluded" items={dmServicePlans} bg />
        <Section title="Branding & Design" subtitle="From identity to systems and assets" items={brandPlans} />
        <Section title="Video & Multimedia Production" subtitle="Production, editing, animation, and live" items={videoPlans} bg />
        <Section title="Printing & Offline Marketing" subtitle="Design + print options; unit costs vary by quantity" items={printPlans} />
        <Section title="Photography" subtitle="Creative, product, events, industrial" items={photoPlans} bg />
        <Section title="Customer Support & Telecalling" subtitle="Per‑agent monthly pricing with SLAs" items={supportPlans} />
        <Section title="Lead Generation & Growth" subtitle="Performance funnels and demand programs" items={leadPlans} bg />
        <Section title="Industry‑Specific Expertise (uPVC & Aluminium)" subtitle="Trade‑focused growth and branding" items={industryPlans} />
        <Section title="Extra Value‑Add Services" subtitle="Advisory, research, training, and ops" items={extraPlans} bg />

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
