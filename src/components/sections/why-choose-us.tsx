import { Rocket, Shield, Zap, Target, LightbulbIcon } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Cutting-Edge AI Solutions",
    description:
      "We leverage advanced AI and ML to build intelligent, scalable systems.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable IT Services",
    description: "We ensure data security and robust IT infrastructure.",
  },
  {
    icon: Zap,
    title: "Custom AI Agent  Design",
    description:
      "We craft AI agents that enhance business productivity and automation.",
  },
  {
    icon: Target,
    title: "Expertise in Multiple Industries",
    description: "We serve finance, healthcare, retail, and tech startups.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose Tech Vexor?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-8 h-8 text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-lg">
          <LightbulbIcon className="w-12 h-12 text-white mx-auto mb-4" />
          <p className="text-xl text-white font-semibold">
            Empowering Businesses with Smart, Scalable, and Future-Ready AI & IT
            Solutions
          </p>
        </div>
      </div>
    </section>
  );
}
