import { Card } from "@/components/ui/card";
import { Shield, Award, Star, CheckCircle } from "lucide-react";

const clients = [
  {
    name: "Google Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
  },
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    name: "IBM Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  {
    name: "Oracle Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

const badges = [
  {
    icon: Shield,
    name: "ISO 27001",
    description: "Certified Security Management",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    name: "GDPR Compliant",
    description: "Data Protection Excellence",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Star,
    name: "AI Excellence",
    description: "Top-Rated Solutions Provider",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: CheckCircle,
    name: "Cloud Verified",
    description: "Enterprise-Grade Security",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Partnering with global technology leaders to deliver exceptional
            solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-12 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto max-w-[150px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${badge.gradient} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {badge.name}
                </h3>
                <p className="text-sm text-white/80">{badge.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
