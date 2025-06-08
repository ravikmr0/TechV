import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Revolution",
    client: "Global E-commerce Platform",
    industry: "E-commerce",
    challenge:
      "High customer service costs and long response times affecting customer satisfaction",
    solution:
      "Implemented intelligent chatbot with NLP capabilities and automated ticket routing system",
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
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
  },
  {
    id: 2,
    title: "Predictive Maintenance for Manufacturing",
    client: "Leading Automotive Manufacturer",
    industry: "Manufacturing",
    challenge:
      "Unexpected equipment failures causing production delays and high maintenance costs",
    solution:
      "Deployed IoT sensors and ML algorithms for predictive maintenance and real-time monitoring",
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
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    tags: ["Predictive Analytics", "IoT", "Machine Learning", "Manufacturing"],
  },
  {
    id: 3,
    title: "Fraud Detection System for Banking",
    client: "Regional Banking Institution",
    industry: "Finance",
    challenge:
      "Increasing fraud attempts and false positives affecting customer experience",
    solution:
      "Developed advanced ML model for real-time fraud detection with behavioral analysis",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
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
      "Inventory imbalances leading to stockouts and overstock situations",
    solution:
      "Implemented AI-driven demand forecasting and automated inventory optimization",
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
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
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
    challenge: "Need for faster and more accurate medical diagnosis support",
    solution:
      "Developed AI-powered diagnostic assistant using computer vision and medical data analysis",
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
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    tags: ["Computer Vision", "Medical AI", "Diagnostic Support", "Healthcare"],
  },
  {
    id: 6,
    title: "Smart Energy Management Platform",
    client: "Commercial Real Estate Company",
    industry: "Energy",
    challenge:
      "High energy costs and inefficient building management across multiple properties",
    solution:
      "Deployed IoT-based smart energy management system with AI optimization algorithms",
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
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
    tags: ["Smart Buildings", "Energy Optimization", "IoT", "Sustainability"],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="text-blue-600"> Real Clients</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how we've helped businesses across industries transform
              their operations with AI and achieve measurable results.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div
                      className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="mb-4">
                        <Badge className="mb-2 bg-gray-100 text-gray-800">
                          {study.industry}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {study.client}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>

                        <h4 className="font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-6">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">Results:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <result.icon className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="font-semibold text-blue-600">
                                  {result.improvement}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {result.metric}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Read Full Case Study{" "}
                        <ArrowRight className="w-4 h-4 ml-2" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  $50M+
                </div>
                <p className="text-gray-600">Client Savings Generated</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <p className="text-gray-600">Industries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
