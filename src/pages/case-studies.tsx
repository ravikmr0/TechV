import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Star,
  Award,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Revolution",
    client: "Global E-commerce Platform",
    industry: "E-commerce",
    challenge:
      "A leading e-commerce platform was struggling with escalating customer service costs and response times averaging 24+ hours, leading to declining customer satisfaction scores and increased churn rates.",
    solution:
      "We developed and deployed an advanced AI-powered customer service ecosystem featuring intelligent chatbots with natural language processing, automated ticket routing, sentiment analysis, and seamless human handoff capabilities.",
    results: [
      { metric: "Response Time", improvement: "85% faster", icon: Clock },
      {
        metric: "Cost Reduction",
        improvement: "60% savings",
        icon: DollarSign,
      },
      {
        metric: "Customer Satisfaction",
        improvement: "40% increase",
        icon: Users,
      },
      {
        metric: "Resolution Rate",
        improvement: "90% automated",
        icon: TrendingUp,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
  },
  {
    id: 2,
    title: "Predictive Maintenance for Manufacturing",
    client: "Leading Automotive Manufacturer",
    industry: "Manufacturing",
    challenge:
      "The automotive manufacturer faced frequent unexpected equipment breakdowns resulting in costly production line shutdowns, emergency repairs, and missed delivery deadlines, impacting their reputation and bottom line.",
    solution:
      "Our team implemented a comprehensive predictive maintenance solution using IoT sensors, machine learning algorithms, and real-time analytics to monitor equipment health, predict failures before they occur, and optimize maintenance schedules.",
    results: [
      {
        metric: "Downtime Reduction",
        improvement: "70% decrease",
        icon: Clock,
      },
      {
        metric: "Maintenance Costs",
        improvement: "45% savings",
        icon: DollarSign,
      },
      {
        metric: "Equipment Efficiency",
        improvement: "35% increase",
        icon: TrendingUp,
      },
      {
        metric: "Prediction Accuracy",
        improvement: "95% accurate",
        icon: Users,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    tags: ["Predictive Analytics", "IoT", "Machine Learning", "Manufacturing"],
  },
  {
    id: 3,
    title: "Fraud Detection System for Banking",
    client: "Regional Banking Institution",
    industry: "Finance",
    challenge:
      "The regional bank was experiencing a surge in sophisticated fraud attempts while their existing systems generated excessive false positives, creating friction for legitimate customers and increasing operational costs.",
    solution:
      "We engineered a state-of-the-art machine learning fraud detection system incorporating behavioral analytics, transaction pattern recognition, and real-time risk scoring to accurately identify fraudulent activities while minimizing false positives.",
    results: [
      {
        metric: "Fraud Detection",
        improvement: "98% accuracy",
        icon: TrendingUp,
      },
      { metric: "False Positives", improvement: "80% reduction", icon: Users },
      { metric: "Processing Speed", improvement: "Real-time", icon: Clock },
      {
        metric: "Annual Savings",
        improvement: "$2.5M saved",
        icon: DollarSign,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: [
      "Fraud Detection",
      "Machine Learning",
      "Real-time Processing",
      "Banking",
    ],
  },
  {
    id: 4,
    title: "Smart Inventory Management System",
    client: "Retail Chain Network",
    industry: "Retail",
    challenge:
      "The retail chain was losing millions annually due to inventory imbalances - frequent stockouts of popular items and excessive overstock of slow-moving products, resulting in lost sales and increased carrying costs.",
    solution:
      "We developed an intelligent inventory management platform using advanced demand forecasting algorithms, seasonal trend analysis, and automated reordering systems to optimize stock levels across all locations and product categories.",
    results: [
      {
        metric: "Inventory Turnover",
        improvement: "50% increase",
        icon: TrendingUp,
      },
      {
        metric: "Stockout Reduction",
        improvement: "75% decrease",
        icon: Users,
      },
      {
        metric: "Carrying Costs",
        improvement: "30% savings",
        icon: DollarSign,
      },
      { metric: "Forecast Accuracy", improvement: "92% accurate", icon: Clock },
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Retail Analytics",
      "Supply Chain",
    ],
  },
  {
    id: 5,
    title: "Medical Diagnosis Assistant",
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge:
      "The healthcare network needed to improve diagnostic accuracy and speed while managing increasing patient volumes and reducing the burden on medical professionals, particularly in radiology and pathology departments.",
    solution:
      "Our team created an AI-powered diagnostic assistant leveraging computer vision, deep learning, and comprehensive medical data analysis to support healthcare professionals in making faster, more accurate diagnoses while maintaining the highest standards of patient care.",
    results: [
      { metric: "Diagnosis Speed", improvement: "60% faster", icon: Clock },
      {
        metric: "Accuracy Rate",
        improvement: "94% accurate",
        icon: TrendingUp,
      },
      {
        metric: "Patient Throughput",
        improvement: "40% increase",
        icon: Users,
      },
      {
        metric: "Cost per Diagnosis",
        improvement: "35% reduction",
        icon: DollarSign,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    tags: ["Computer Vision", "Medical AI", "Diagnostic Support", "Healthcare"],
  },
  {
    id: 6,
    title: "Smart Energy Management Platform",
    client: "Commercial Real Estate Company",
    industry: "Energy",
    challenge:
      "The commercial real estate company was facing escalating energy costs across their portfolio of office buildings, with inefficient HVAC systems, lighting, and overall building management leading to significant operational expenses and environmental impact.",
    solution:
      "We implemented a comprehensive smart building solution featuring IoT sensors, AI-driven optimization algorithms, and automated control systems to intelligently manage energy consumption, optimize building operations, and reduce environmental footprint.",
    results: [
      {
        metric: "Energy Savings",
        improvement: "40% reduction",
        icon: DollarSign,
      },
      {
        metric: "Carbon Footprint",
        improvement: "35% decrease",
        icon: TrendingUp,
      },
      {
        metric: "Operational Efficiency",
        improvement: "50% improvement",
        icon: Users,
      },
      { metric: "ROI Achievement", improvement: "18 months", icon: Clock },
    ],
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    tags: ["Smart Buildings", "Energy Optimization", "IoT", "Sustainability"],
  },
];

export default function CaseStudies() {
  usePageTitle("Case Studies & Success Stories");

  const industries = useMemo(() => Array.from(new Set(caseStudies.map(cs => cs.industry))), []);
  const allTags = useMemo(() => Array.from(new Set(caseStudies.flatMap(cs => cs.tags))), []);
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string>("All");
  const [tag, setTag] = useState<string>("All");

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = q === "" || cs.title.toLowerCase().includes(q) || cs.client.toLowerCase().includes(q) || cs.challenge.toLowerCase().includes(q) || cs.solution.toLowerCase().includes(q) || cs.tags.some(t => t.toLowerCase().includes(q));
      const matchesIndustry = industry === "All" || cs.industry === industry;
      const matchesTag = tag === "All" || cs.tags.includes(tag);
      return matchesQuery && matchesIndustry && matchesTag;
    });
  }, [query, industry, tag]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-indigo-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <Badge className="bg-blue-100 text-oringe-800 hover:bg-blue-200 border-0 px-4 py-2">
                Client Success Stories
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-50 mb-8 leading-tight">
              Transforming Businesses with
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                {" "}
                AI Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Discover how industry leaders achieved remarkable results through
              our cutting-edge AI solutions and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
                <a href="#stories">Explore Success Stories</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg">
                <a href="/contact">Start Your Journey</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-md">
              <label className="block text-sm font-medium text-slate-600 mb-1">Search case studies</label>
              <Input type="search" placeholder="Search by keyword, client, or tag" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Industry</label>
                <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="h-9 px-3 rounded-md border border-input bg-background text-sm">
                  <option>All</option>
                  {industries.map((ind) => (
                    <option key={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Tag</label>
                <select value={tag} onChange={(e) => setTag(e.target.value)} className="h-9 px-3 rounded-md border border-input bg-background text-sm">
                  <option>All</option>
                  {allTags.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="self-end">
                <Button variant="ghost" onClick={() => { setQuery(""); setIndustry("All"); setTag("All"); }}>Clear</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="stories" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real transformations, measurable impact, lasting partnerships
              </p>
            </div>
            <div className="space-y-20">
              {filtered.map((study, index) => (
                <Card
                  key={study.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div
                      className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">
                          {study.industry}
                        </Badge>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium mb-6">
                          {study.client}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900">
                            The Challenge
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900">
                            Our Solution
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-6 text-gray-900">
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl"
                            >
                              <div className="flex items-center mb-2">
                                <result.icon className="w-6 h-6 text-blue-600 mr-2" />
                                <p className="text-2xl font-bold text-blue-600">
                                  {result.improvement}
                                </p>
                              </div>
                              <p className="text-sm text-gray-700 font-medium">
                                {result.metric}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 w-fit">
                        <a href={`/contact?subject=${encodeURIComponent("Case Study: " + study.title)}`}>Read Full Case Study <span className="inline-flex"><ArrowRight className="w-4 h-4 ml-2" /></span></a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Proven Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our commitment to delivering exceptional
                results
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  100+
                </div>
                <p className="text-gray-700 font-medium">Successful Projects</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  95%
                </div>
                <p className="text-gray-700 font-medium">Client Satisfaction</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  $50M+
                </div>
                <p className="text-gray-700 font-medium">
                  Client Savings Generated
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  25+
                </div>
                <p className="text-gray-700 font-medium">Industries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the ranks of industry leaders who have transformed their
              businesses with our AI solutions. Let's create your next
              breakthrough together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <a href="/contact">Start Your Transformation</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                <a href="tel:+917895849990">Schedule Free Consultation</a>
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Proven track record</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
