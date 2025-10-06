import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/use-page-title";
import { ArrowRight, ExternalLink, Github, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"],
    status: "Completed",
    client: "RetailTech Solutions",
  },
  {
    id: 2,
    title: "Smart Healthcare Management System",
    description:
      "An integrated healthcare platform featuring patient management, appointment scheduling, and AI-assisted diagnostics.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    tags: ["Healthcare", "AI", "React", "Python"],
    status: "In Progress",
    client: "MedCare Network",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description:
      "Real-time financial analytics and reporting dashboard with predictive modeling and risk assessment capabilities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["FinTech", "Analytics", "Dashboard", "AI"],
    status: "Completed",
    client: "FinanceFlow Inc",
  },
  {
    id: 4,
    title: "Smart Manufacturing IoT Platform",
    description:
      "IoT-enabled manufacturing platform with predictive maintenance, quality control, and production optimization.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    tags: ["IoT", "Manufacturing", "Predictive Analytics", "Cloud"],
    status: "Completed",
    client: "Industrial Solutions Ltd",
  },
  {
    id: 5,
    title: "AI Customer Service Chatbot",
    description:
      "Intelligent chatbot system with natural language processing, sentiment analysis, and seamless human handoff.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    tags: ["AI", "NLP", "Chatbot", "Customer Service"],
    status: "In Progress",
    client: "ServicePro Global",
  },
  {
    id: 6,
    title: "Blockchain Supply Chain Tracker",
    description:
      "Blockchain-based supply chain management system ensuring transparency, traceability, and authenticity.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    tags: ["Blockchain", "Supply Chain", "Transparency", "Security"],
    status: "Completed",
    client: "LogiChain Solutions",
  },
];

export default function Projects() {
  usePageTitle("Client Success Projects & Case Studies");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.6))] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-0 px-4 py-2 mb-6">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Innovative Projects
              <span className="text-amber-400"> Delivered</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Explore our portfolio of successful AI implementations and digital
              transformation projects across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        } border-0`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-3">
                        {project.client}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
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

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex-1"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with our
              expertise in AI and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
