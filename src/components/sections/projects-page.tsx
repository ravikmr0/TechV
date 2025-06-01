import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Brain, Shield, Cloud, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Financial Analytics Platform",
    description:
      "A comprehensive financial analytics solution using machine learning algorithms to predict market trends and optimize investment strategies.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["AI & ML", "Finance", "Data Analytics"],
    category: "AI Solutions",
  },
  {
    title: "Healthcare Management System",
    description:
      "An integrated healthcare platform that streamlines patient management, appointment scheduling, and medical record keeping for hospitals and clinics.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Healthcare", "Web Application", "Cloud"],
    category: "Software Development",
  },
  {
    title: "E-Commerce Mobile Application",
    description:
      "A feature-rich mobile shopping application with personalized recommendations, secure payment processing, and real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "UI/UX"],
    category: "Mobile Development",
  },
  {
    title: "Smart City Infrastructure Management",
    description:
      "An IoT-based solution for monitoring and managing urban infrastructure, including traffic systems, public utilities, and environmental sensors.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    tags: ["IoT", "Smart City", "Infrastructure"],
    category: "IoT Solutions",
  },
  {
    title: "Secure Banking Portal",
    description:
      "A highly secure online banking platform with advanced encryption, multi-factor authentication, and real-time fraud detection capabilities.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Cybersecurity", "Banking", "Web Application"],
    category: "Cybersecurity",
  },
  {
    title: "Supply Chain Management System",
    description:
      "A blockchain-based supply chain solution that ensures transparency, traceability, and efficiency across the entire logistics network.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    tags: ["Blockchain", "Supply Chain", "Enterprise"],
    category: "Blockchain Solutions",
  },
];

const expertise = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and requirements.",
  },
  {
    icon: Rocket,
    title: "Scalable Web & Mobile Applications",
    description:
      "Responsive, high-performance applications that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description:
      "Intelligent systems that analyze data, learn patterns, and make predictions to drive business growth.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Robust security measures to protect your digital assets and ensure regulatory compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud solutions and automated deployment pipelines for optimal performance and reliability.",
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Rocket className="w-16 h-16 text-indigo-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative Tech Solutions for a Digital Future
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Welcome to Tech Vexor Projects, where cutting-edge technology
              meets real-world solutions. We specialize in delivering top-tier
              IT services, including software development, web & mobile app
              solutions, AI & automation, and cloud computing.
            </p>
            <GradientButton size="lg">Explore Our Projects</GradientButton>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-indigo-500 hover:bg-indigo-600">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <GradientButton size="lg">View All Projects</GradientButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Partner with Tech Vexor to leverage cutting-edge technology
            solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GradientButton
              variant="secondary"
              size="lg"
              onClick={() => window.open("tel:+917895849990", "_self")}
            >
              Get a Free Consultation
            </GradientButton>
            <GradientButton variant="outline" size="lg">
              Learn More
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
