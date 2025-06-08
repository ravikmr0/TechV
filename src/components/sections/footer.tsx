import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog & Insights", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const contactInfo = {
  phone: "+91 7895849990",
};

const services = [
  "IT Consulting & Cloud Solutions",
  "AI & Machine Learning Development",
  "AI Agent & Chatbot Design",
  "Cybersecurity & Data Protection",
  "Custom Software & Web Development",
];

const industries = [
  "Finance – AI-powered risk assessment",
  "Healthcare – Smart AI diagnostics",
  "Retail – AI-driven customer insights",
  "Manufacturing – Intelligent automation",
  "Education – AI-based learning solutions",
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/techvexor",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/techvexor" },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/techvexor",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@techvexor",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "http://instagram.com/techvexor/",
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          {/* Quick Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
            <Button
              variant="link"
              className="text-indigo-400 hover:text-indigo-300 pl-0 mt-4"
            >
              Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Industry Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6">Industry Solutions</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry} className="text-slate-300">
                  {industry}
                </li>
              ))}
            </ul>
            <Button
              variant="link"
              className="text-indigo-400 hover:text-indigo-300 pl-0 mt-4"
            >
              See Industry Use Cases <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <p className="text-slate-300 mb-4 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              {contactInfo.phone}
            </p>
            <Card className="p-4 bg-white/5 backdrop-blur-sm border-slate-800 mb-6">
              <p className="text-sm text-slate-300 mb-4">
                Stay Ahead with AI & IT Innovations – Join Our Exclusive
                Newsletter!
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Button className="bg-indigo-500 hover:bg-indigo-600">
                  Subscribe
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h4 className="font-semibold">
                Follow us for AI Insights & Tech Updates!
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="fixed bottom-4 right-4 z-50 flex space-x-4">
          <a href="tel:+917895849990">
            <GradientButton>🚀 Get a Free Consultation</GradientButton>
          </a>
          <Button className="bg-indigo-500 hover:bg-indigo-600">
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 pt-8 pb-12">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <span>ISO Certified</span>
            <span>•</span>
            <span>Google Cloud Partner</span>
            <span>•</span>
            <span>Microsoft Azure Certified</span>
            <span>•</span>
            <span>Trusted by 100+ Businesses</span>
            <span>•</span>
            <span>Award-Winning AI Solutions</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
            <div>© 2025 Tech Vexor. All Rights Reserved.</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Data Security
              </a>
              <a href="#" className="hover:text-white">
                AI Ethics
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
