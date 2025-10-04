import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  Brain,
  Bot,
  Eye,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Target,
} from "lucide-react";

const aiSolutions = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description:
      "Custom ML models for predictive analytics, pattern recognition, and automated decision-making.",
    features: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Automated Decision Making",
      "Data Classification",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Intelligent conversational AI that understands context and provides human-like interactions.",
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Context Awareness",
      "24/7 Availability",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    description:
      "Advanced image and video analysis for quality control, security, and automation.",
    features: [
      "Object Detection",
      "Facial Recognition",
      "Quality Inspection",
      "Real-time Analysis",
    ],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Extract insights from text data, automate content generation, and enable voice interfaces.",
    features: [
      "Sentiment Analysis",
      "Text Summarization",
      "Language Translation",
      "Voice Recognition",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Forecast trends, identify risks, and optimize operations with advanced analytics.",
    features: [
      "Demand Forecasting",
      "Risk Assessment",
      "Performance Optimization",
      "Market Analysis",
    ],
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description:
      "Intelligent threat detection and automated security responses to protect your business.",
    features: [
      "Threat Detection",
      "Anomaly Detection",
      "Automated Response",
      "Fraud Prevention",
    ],
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "AI diagnostics, patient monitoring, and treatment optimization",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  },
  {
    name: "Finance",
    description: "Risk assessment, fraud detection, and algorithmic trading",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    name: "Retail",
    description:
      "Customer insights, inventory optimization, and personalized recommendations",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  },
  {
    name: "Manufacturing",
    description:
      "Quality control, predictive maintenance, and process optimization",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline operations",
  },
  {
    icon: Target,
    title: "Better Decision Making",
    description: "Data-driven insights for strategic planning",
  },
  {
    icon: BarChart3,
    title: "Cost Reduction",
    description: "Optimize resources and reduce operational costs",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Proactive threat detection and prevention",
  },
];

export default function AISolutions() {
  usePageTitle("AI Solutions for Growth & Automation");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Intelligent Solutions for
              <span className="text-purple-600"> Modern Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Harness the power of artificial intelligence to transform your
              business operations, enhance customer experiences, and drive
              unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Explore AI Solutions
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <solution.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-500 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our AI Development Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description:
                    "We analyze your business needs and identify AI opportunities",
                },
                {
                  step: "02",
                  title: "Strategy & Planning",
                  description:
                    "Develop a comprehensive AI strategy tailored to your goals",
                },
                {
                  step: "03",
                  title: "Development & Training",
                  description:
                    "Build and train AI models using your data and requirements",
                },
                {
                  step: "04",
                  title: "Testing & Validation",
                  description:
                    "Rigorous testing to ensure accuracy and reliability",
                },
                {
                  step: "05",
                  title: "Deployment & Integration",
                  description:
                    "Seamless integration with your existing systems",
                },
                {
                  step: "06",
                  title: "Monitoring & Optimization",
                  description:
                    "Continuous monitoring and improvement of AI performance",
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions can transform your operations
              and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
