export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
};

export type ServiceGroup = {
  name: string;
  items: ServiceEntry[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    name: "IT & Software Solutions",
    items: [
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Static, dynamic, CMS, custom, e‑commerce, and marketplace websites with performance and accessibility built‑in.",
        features: [
          "Next.js/React or CMS (WordPress/Shopify/Magento)",
          "SEO, analytics, and schema markup",
          "Payments, shipping, and catalog integrations",
        ],
        benefits: ["Faster launch", "Higher conversion", "Easy management"],
      },
      {
        slug: "web-application-development",
        title: "Web Application Development",
        description: "Modern SPA/SSR apps with secure APIs and scalable data layers.",
        features: ["TypeScript, GraphQL/REST", "RBAC and audit logs", "CI/CD and observability"],
        benefits: ["Reliable", "Secure", "Maintainable"],
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development (Android, iOS, Hybrid)",
        description: "Native and cross‑platform apps with offline‑first UX and stores release.",
        features: ["React Native/Flutter/Native", "Push, auth, in‑app purchases", "Automated testing"],
        benefits: ["Great UX", "Faster releases", "Lower TCO"],
      },
      {
        slug: "erp-crm-solutions",
        title: "ERP/CRM Solutions",
        description: "Implement and customize ERP/CRM with integrations and workflows.",
        features: ["Requirements to rollout", "Data migration", "Training & support"],
        benefits: ["Process visibility", "Productivity", "Compliance"],
      },
      {
        slug: "saas-development",
        title: "SaaS Development",
        description: "From MVP to multi‑tenant SaaS with billing and provisioning.",
        features: ["Multi‑tenancy", "Subscriptions & metering", "Admin consoles"],
        benefits: ["Scale", "Security", "Revenue ready"],
      },
      {
        slug: "api-integrations",
        title: "API Development & Third‑Party Integrations",
        description: "Stable, documented APIs and integrations with the tools you use.",
        features: ["OpenAPI", "Rate‑limits & caching", "SDKs and webhooks"],
        benefits: ["Interoperability", "Speed", "Observability"],
      },
      {
        slug: "cloud-services",
        title: "Cloud Services (Hosting, AWS/Azure/GCP Setup)",
        description: "Secure landing zones, automation, and cost optimization across clouds.",
        features: ["IaC (Terraform)", "Monitoring & SRE", "Backup and DR"],
        benefits: ["Reliability", "Cost control", "Scalability"],
      },
      {
        slug: "it-consulting-strategy",
        title: "IT Consulting & Strategy",
        description: "Roadmaps, architecture, and modernization aligned to business goals.",
        features: ["Discovery & audits", "Target architecture", "Change management"],
        benefits: ["Lower risk", "Prioritized value", "Future‑proof"],
      },
      {
        slug: "cybersecurity-data-protection",
        title: "Cybersecurity & Data Protection",
        description: "Threat modeling, Zero Trust, compliance, and incident readiness.",
        features: ["Assessments & pentests", "IAM and encryption", "Runbooks"],
        benefits: ["Risk down", "Trust up", "Compliance"],
      },
      {
        slug: "it-support-maintenance",
        title: "IT Support & Maintenance (AMC)",
        description: "Proactive support with SLAs and observability.",
        features: ["24×7 monitoring", "Patch & backup", "Helpdesk"],
        benefits: ["Uptime", "Fewer incidents", "Predictable cost"],
      },
      {
        slug: "software-testing-qa",
        title: "Software Testing & QA",
        description: "Automation and manual testing for quality at speed.",
        features: ["Unit/E2E tests", "Performance & security", "CI gates"],
        benefits: ["Fewer defects", "Confidence", "Faster release"],
      },
      {
        slug: "chatbot-ai-automation",
        title: "Chatbot & AI Automation Solutions",
        description: "LLM agents and chat for support, sales, and operations.",
        features: ["RAG over private data", "Guardrails", "Analytics"],
        benefits: ["Lower workload", "Higher CSAT", "Conversion"],
      },
    ],
  },
  {
    name: "Digital Marketing Services",
    items: [
      { slug: "seo", title: "SEO (On‑page, Off‑page, Technical)", description: "Organic growth with technical excellence and content.", features: ["Audits & fixes", "Content strategy", "Authority building"], benefits: ["Rankings", "Traffic", "Revenue"] },
      { slug: "aso", title: "App Store Optimization (ASO)", description: "Better app visibility and conversions.", features: ["Keywords", "Creatives", "A/B testing"], benefits: ["Installs", "CVR", "LTV"] },
      { slug: "paid-ads", title: "Paid Advertising (Google/Bing/Display/Remarketing/Programmatic)", description: "Full‑funnel performance campaigns.", features: ["Account structure", "Creative & landing pages", "Attribution"], benefits: ["ROAS", "Scale", "Insights"] },
      { slug: "social-management", title: "Social Media Management", description: "Always‑on content for FB/IG/LinkedIn/YouTube/X/Pinterest.", features: ["Calendars", "Design", "Community"], benefits: ["Reach", "Engagement", "Brand"] },
      { slug: "social-ads", title: "Social Media Advertising", description: "Paid social that converts.", features: ["Audience & creatives", "Testing", "Optimization"], benefits: ["CPA", "Growth", "LTV"] },
      { slug: "email-marketing", title: "Email Marketing & Automation", description: "Lifecycle journeys across segments.", features: ["ESP setup", "Flows & campaigns", "Deliverability"], benefits: ["Revenue", "Retention", "NPS"] },
      { slug: "whatsapp-sms", title: "WhatsApp/SMS Marketing", description: "Conversational campaigns and alerts.", features: ["Opt‑in", "Templates", "Analytics"], benefits: ["Open rates", "Speed", "ROI"] },
      { slug: "content-marketing", title: "Content Marketing & Copywriting", description: "Editorial machines that scale.", features: ["Briefs", "Production", "Distribution"], benefits: ["Authority", "Traffic", "Leads"] },
      { slug: "video-marketing", title: "Video Marketing (YouTube/Reels/TikTok)", description: "Audience‑first growth strategies.", features: ["Programming", "Creative", "Analytics"], benefits: ["Watch time", "Subs", "Sales"] },
      { slug: "orm", title: "Online Reputation Management (ORM)", description: "Monitor and improve brand perception.", features: ["Listening", "Response", "Review gen"], benefits: ["Trust", "Share of voice", "Deflection"] },
      { slug: "influencer", title: "Influencer Marketing", description: "Creators that match your brand and goals.", features: ["Discovery", "Contracts", "Measurement"], benefits: ["Reach", "Authenticity", "ROI"] },
      { slug: "cro", title: "Conversion Rate Optimization (CRO)", description: "Turn visitors into customers.", features: ["Experimentation", "Heuristics", "Personalization"], benefits: ["CVR", "AOV", "Revenue"] },
      { slug: "analytics", title: "Analytics, Tracking & Reporting", description: "Trusted data with dashboards.", features: ["GTM/GA4", "Attribution", "BI"], benefits: ["Clarity", "Speed", "Decisions"] },
    ],
  },
  {
    name: "Branding & Design",
    items: [
      { slug: "brand-identity", title: "Logo & Brand Identity Design", description: "Memorable identities and systems.", features: ["Discovery", "Logo & palette", "Design system"], benefits: ["Recognition", "Consistency", "Equity"] },
      { slug: "ui-ux", title: "UI/UX Design for Web & Apps", description: "Human‑centered flows and delightful UI.", features: ["Research", "Wireframes", "Hi‑fi designs"], benefits: ["Conversion", "Usability", "Speed"] },
      { slug: "graphic-design", title: "Graphic Design (Print & Digital)", description: "Creatives that perform across channels.", features: ["Campaign assets", "Social kits", "OOH & print"], benefits: ["Quality", "Impact", "Brand"] },
      { slug: "infographics", title: "Infographics & Illustrations", description: "Data that tells a story.", features: ["Data mapping", "Illustration", "Formats"], benefits: ["Clarity", "Shareability", "Authority"] },
      { slug: "product-packaging", title: "Product & Packaging Design", description: "Shelf‑ready sustainable packaging.", features: ["Concept to dieline", "Mockups", "Print files"], benefits: ["Stand‑out", "Protection", "Compliance"] },
      { slug: "brand-guidelines", title: "Brand Guidelines Development", description: "Guardrails for consistent growth.", features: ["Voice & tone", "Usage rules", "Templates"], benefits: ["Consistency", "Scale", "Efficiency"] },
      { slug: "pitch-decks", title: "Presentation & Pitch Deck Design", description: "Stories that win rooms.", features: ["Narrative", "Slides", "Templates"], benefits: ["Clarity", "Confidence", "Wins"] },
      { slug: "corporate-identity-kits", title: "Corporate Identity Kits", description: "Stationery and brand assets.", features: ["Cards & letterheads", "Email & docs", "Banners"], benefits: ["Professional", "Unified", "Ready"] },
    ],
  },
  {
    name: "Video & Multimedia Production",
    items: [
      { slug: "corporate-films", title: "Corporate Films & Brand Stories", description: "Narratives shot and edited for impact.", features: ["Scripting", "Shoot", "Edit & color"], benefits: ["Trust", "Recall", "Affinity"] },
      { slug: "explainer-videos", title: "Explainer Videos (2D/3D/Whiteboard/Motion)", description: "Explain value quickly.", features: ["Storyboard", "VO & music", "Mastering"], benefits: ["Understanding", "CVR", "Reach"] },
      { slug: "advertisement-videos", title: "Advertisement & Commercial Videos", description: "Performance‑ready ads.", features: ["Concept", "Production", "Format kits"], benefits: ["ROAS", "Awareness", "Sales"] },
      { slug: "training-elearning", title: "Training & E‑learning Videos", description: "Clear instructional content.", features: ["SME capture", "Modules", "LMS exports"], benefits: ["Engagement", "Outcomes", "Scale"] },
      { slug: "event-coverage", title: "Event & Conference Coverage (Live)", description: "Multi‑cam capture and streaming.", features: ["Live switch", "Streaming", "Highlights"], benefits: ["Reach", "Sponsorship", "Archive"] },
      { slug: "short-form-video", title: "Short‑form Video (Reels/Shorts/TikTok)", description: "Always‑on social video.", features: ["Hooks", "Editing", "Scheduling"], benefits: ["Growth", "Engagement", "Shareability"] },
      { slug: "drone-shoots", title: "Drone Shoot Services", description: "Aerial cinematography and inspection.", features: ["Licensed pilots", "4K/6K", "Compliance"], benefits: ["Wow", "Coverage", "Safety"] },
      { slug: "video-editing", title: "Video Editing & Post‑Production", description: "Polished edits with sound and color.", features: ["Edits", "Sound design", "Color grade"], benefits: ["Quality", "Speed", "Consistency"] },
      { slug: "voiceover", title: "Voiceover & Dubbing Services", description: "Multi‑language VO and dubbing.", features: ["Talent", "Studios", "Localization"], benefits: ["Reach", "Professional", "Accuracy"] },
    ],
  },
  {
    name: "Printing & Offline Marketing",
    items: [
      { slug: "business-cards", title: "Business Cards, Flyers, Brochures, Posters", description: "Beautiful print collateral.", features: ["Design", "Print", "Delivery"], benefits: ["Professional", "Fast", "Affordable"] },
      { slug: "catalogues-magazines", title: "Catalogues & Magazines", description: "Product and editorial print.", features: ["Layouts", "Proofs", "Finishing"], benefits: ["Quality", "Durability", "Impact"] },
      { slug: "corporate-stationery", title: "Corporate Stationery", description: "Letterheads, envelopes, diaries, notebooks.", features: ["Design systems", "Paper selection", "Print"], benefits: ["Consistency", "Brand", "Ready"] },
      { slug: "packaging-labels", title: "Packaging & Label Printing", description: "Compliant labels and boxes.", features: ["Dielines", "Materials", "Finishing"], benefits: ["Shelf impact", "Protection", "Compliance"] },
      { slug: "merch-printing", title: "Merchandise Printing", description: "T‑shirts, mugs, and gifts.", features: ["Design", "Sourcing", "Print"], benefits: ["Awareness", "Engagement", "Delight"] },
      { slug: "large-format", title: "Large‑Format Printing", description: "Banners, hoardings, and signage.", features: ["Outdoor specs", "Color mgmt", "Install"], benefits: ["Visibility", "Durability", "Brand"] },
      { slug: "pos-materials", title: "POS Materials", description: "Danglers, standees, and displays.", features: ["Structure", "Graphics", "On‑site"], benefits: ["Sales lift", "Guidance", "Recall"] },
      { slug: "vehicle-branding", title: "Vehicle Branding & Wraps", description: "Fleet and store wraps.", features: ["Design", "Media", "Application"], benefits: ["Reach", "Local impact", "Longevity"] },
    ],
  },
  {
    name: "Photography",
    items: [
      { slug: "corporate-team-photography", title: "Corporate & Team Photography", description: "Professional headshots and teams.", features: ["On‑site studio", "Retouching", "Assets"], benefits: ["Brand", "Trust", "Consistency"] },
      { slug: "product-photography", title: "Product Photography", description: "Catalog, e‑commerce, and lifestyle.", features: ["Lighting", "Styling", "Retouching"], benefits: ["Conversion", "Accuracy", "AOV"] },
      { slug: "industrial-photography", title: "Industrial & Manufacturing Photography", description: "Plants, processes, and safety.", features: ["Access planning", "Safety", "4K/RAW"], benefits: ["Showcase", "Recruiting", "Sales"] },
      { slug: "food-photography", title: "Food Photography", description: "Menus and campaigns.", features: ["Styling", "Lighting", "Retouch"], benefits: ["Appetite appeal", "Sales", "Brand"] },
      { slug: "real-estate-photography", title: "Real Estate & Interior Photography", description: "Properties and spaces.", features: ["HDR", "Staging", "Delivery"], benefits: ["Bookings", "Premiums", "Speed"] },
      { slug: "event-photography", title: "Event & Conference Photography", description: "Coverage and highlights.", features: ["Shotlists", "Backups", "Fast delivery"], benefits: ["PR", "Social", "Archive"] },
      { slug: "drone-photography", title: "Drone Photography", description: "Aerial stills and video.", features: ["Pilots", "Permits", "Editing"], benefits: ["Coverage", "Quality", "Safety"] },
    ],
  },
  {
    name: "Customer Support & Telecalling",
    items: [
      { slug: "call-center", title: "Inbound/Outbound Call Center", description: "Sales and support with SLAs.", features: ["Dialers", "Scripts", "QA"], benefits: ["CSAT", "Revenue", "Coverage"] },
      { slug: "telesales", title: "Tele‑sales & Lead Follow‑ups", description: "Close more with disciplined follow‑ups.", features: ["Cadence", "CRM", "Reporting"], benefits: ["Win‑rate", "Velocity", "Forecasting"] },
      { slug: "appointment-scheduling", title: "Appointment Scheduling & Verification", description: "Reliable bookings and confirmations.", features: ["Calendars", "Automation", "SLAs"], benefits: ["Show‑ups", "Utilization", "NPS"] },
      { slug: "customer-feedback", title: "Customer Feedback & Surveys", description: "Voice of customer programs.", features: ["CSAT/NPS", "Dashboards", "Actions"], benefits: ["Insights", "Retention", "Growth"] },
      { slug: "chat-support", title: "WhatsApp/Chat Support", description: "Conversational support with bots+humans.", features: ["Bots", "Agent console", "Knowledge base"], benefits: ["FCR", "Cost down", "CSAT"] },
      { slug: "virtual-receptionist", title: "Virtual Receptionist", description: "24×7 hello for your brand.", features: ["IVR", "Routing", "Messages"], benefits: ["Coverage", "Professional", "Delight"] },
    ],
  },
  {
    name: "Lead Generation & Growth",
    items: [
      { slug: "upvc-aluminium-pan-india-leads", title: "Pan‑India Leads for uPVC & Aluminium", description: "Targeted B2B demand generation.", features: ["Audience maps", "Landing pages", "Qualification"], benefits: ["Pipeline", "Quality", "Scale"] },
      { slug: "b2b-b2c-lead-gen", title: "B2B & B2C Lead Generation", description: "Performance funnels across channels.", features: ["Paid & organic", "Funnels", "Scoring"], benefits: ["Volume", "CPA", "Revenue"] },
      { slug: "international-lead-gen", title: "International Lead Generation", description: "Cross‑border demand with compliance.", features: ["Geo routing", "Privacy", "Localization"], benefits: ["New markets", "Scale", "Trust"] },
      { slug: "landing-pages-funnels", title: "Landing Page & Funnel Building", description: "High‑converting experiences.", features: ["Design", "Copy", "Testing"], benefits: ["CVR", "AOV", "Insights"] },
      { slug: "performance-marketing", title: "Performance Marketing Campaigns", description: "Always‑on paid growth.", features: ["Budgets", "Optimization", "Attribution"], benefits: ["ROAS", "Scale", "Clarity"] },
      { slug: "cold-email-outreach", title: "Cold Email Outreach & Database", description: "Compliant outbound at scale.", features: ["Warmup", "Sequences", "Enrichment"], benefits: ["Meetings", "Pipeline", "Deliverability"] },
      { slug: "franchise-dealer-development", title: "Franchise & Dealer Network Development", description: "Grow distribution with the right partners.", features: ["Partner ICP", "Ops playbooks", "Onboarding"], benefits: ["Coverage", "Revenue", "Consistency"] },
    ],
  },
  {
    name: "Industry‑Specific Expertise (uPVC & Aluminium)",
    items: [
      { slug: "upvc-marketing-strategy", title: "Marketing Strategy for uPVC Windows & Doors", description: "Win local markets with the right mix.", features: ["ICP & geo planning", "Channel mix", "Budget"], benefits: ["Leads", "Efficiency", "Growth"] },
      { slug: "fabricators-branding", title: "Branding for Fabricators & Dealers", description: "Stand‑out identities for trade.", features: ["Identity", "Collateral", "Guidelines"], benefits: ["Recall", "Trust", "Premiums"] },
      { slug: "fabrication-lead-gen", title: "Lead Generation for Fabrication Businesses", description: "Always‑on local demand.", features: ["Local SEO", "Paid search", "WhatsApp"], benefits: ["Pipeline", "CPA", "Growth"] },
      { slug: "vendor-distributor-network", title: "Vendor & Distributor Network Development", description: "Scale supply and reach.", features: ["Partner discovery", "Contracts", "Portals"], benefits: ["Coverage", "Reliability", "Velocity"] },
      { slug: "industry-social-media", title: "Social Media for Industry Growth", description: "Content and campaigns for trade.", features: ["Calendars", "Ads", "Leads"], benefits: ["Awareness", "Leads", "Retention"] },
      { slug: "product-3d-visualization", title: "3D Visualization for Windows/Doors", description: "Visualize SKUs in context.", features: ["3D models", "Configurators", "AR"], benefits: ["Conversion", "Clarity", "Delight"] },
    ],
  },
  {
    name: "Extra Value‑Add Services",
    items: [
      { slug: "business-consulting", title: "Business Consulting & Growth Strategy", description: "From diagnostics to strategy and execution.", features: ["Research", "Roadmaps", "PMO"], benefits: ["Focus", "Velocity", "Results"] },
      { slug: "market-research", title: "Market Research & Competitor Analysis", description: "Decisions backed by data.", features: ["Surveys & interviews", "Competitive scans", "Insights"], benefits: ["Confidence", "Positioning", "ROI"] },
      { slug: "data-entry-va", title: "Data Entry & Virtual Assistance", description: "Reliable back‑office at scale.", features: ["SLAs", "QA", "Security"], benefits: ["Accuracy", "Cost", "Speed"] },
      { slug: "hr-recruitment", title: "HR & Recruitment Support", description: "Source, assess, and onboard talent.", features: ["ATS", "Assessments", "Onboarding"], benefits: ["Time‑to‑hire", "Quality", "Retention"] },
      { slug: "event-management", title: "Event Management & Promotion", description: "End‑to‑end event ops.", features: ["Concept", "Vendors", "Production"], benefits: ["Attendance", "Impact", "NPS"] },
      { slug: "corporate-training", title: "Corporate Training (Digital/IT/Marketing)", description: "Capability building for teams.", features: ["Curriculum", "Labs", "Certification"], benefits: ["Performance", "Speed", "Quality"] },
      { slug: "franchise-marketing", title: "Franchise Marketing & Expansion", description: "Scale brand presence.", features: ["Playbooks", "Local activation", "Analytics"], benefits: ["Coverage", "Compliance", "Growth"] },
      { slug: "ecommerce-setup", title: "E‑commerce Store Setup (Shopify/Woo/Magento)", description: "Launch and operate high‑performing stores.", features: ["Theme & apps", "Payments & shipping", "Ops"], benefits: ["Speed", "Conversion", "LTV"] },
      { slug: "payment-gateway", title: "Payment Gateway Integration", description: "Secure payments across providers.", features: ["Razorpay/Stripe", "Subscriptions", "Reconciliation"], benefits: ["Trust", "Revenue", "Automation"] },
      { slug: "whatsapp-chatbot", title: "WhatsApp Chatbot Automation", description: "Engage and support at scale.", features: ["Flows", "APIs", "Analytics"], benefits: ["Speed", "CSAT", "Cost down"] },
      { slug: "local-seo-gmb", title: "Local SEO & Google My Business", description: "Dominate local search.", features: ["Listings", "Reviews", "Posts"], benefits: ["Calls", "Visits", "Leads"] },
    ],
  },
];

export const serviceIndex: Record<string, ServiceEntry> = Object.fromEntries(
  serviceGroups.flatMap((g) => g.items.map((i) => [i.slug, i]))
);
