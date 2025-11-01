import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

const teamMembers = [
  {
    name: "Sundar Tomar",
    role: "Co-Founder & Director",
    image: "/images/sundar.jpg",
    experience: "at Tech Vexor | Driving business growth through strategic leadership and fund management.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
  {
    name: "Ravi Kumar",
    role: "Founder & CEO",
    image: "/images/ravi.jpg",
    experience: "Leading Tech Vexor’s vision with a focus on technology, brand building, and sustainable business expansion.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
  {
    name: "Neha Sharma",
    role: "Chief Technology Officer",
    image: "/images/neha.jpeg",
    experience: "Driving innovation and technology strategy to accelerate business growth and digital transformation.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
];

const achievements = [
  {
    icon: Users,
    title: "100+ Happy Clients",
    description: "Trusted by businesses worldwide",
  },
  {
    icon: Target,
    title: "500+ Projects Delivered",
    description: "Successfully completed projects",
  },
  {
    icon: Award,
    title: "50+ Awards Won",
    description: "Industry recognition and excellence",
  },
  {
    icon: Globe,
    title: "25+ Countries Served",
    description: "Global reach and impact",
  },
];

export default function About() {
  usePageTitle("About Tech Vexor Digital Innovation Team");

  return (
    <div className="min-h-screen bg-white">
      <Header />
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              About Tech Vexor
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future with
              <span className="text-amber-200"> AI Innovation</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              We are a forward-thinking technology company specializing in AI
              solutions, cloud computing, and digital transformation. Our
              mission is to empower businesses with cutting-edge technology that
              drives growth and innovation.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Founded on Innovation
                </h3>
                <p className="text-gray-600 mb-6">
                  Tech Vexor was founded in 2020 with a vision to bridge the gap
                  between traditional business operations and modern AI
                  technology. We started as a small team of passionate
                  developers and have grown into a trusted partner for
                  businesses worldwide.
                </p>
                <p className="text-gray-600">
                  Today, we continue to push the boundaries of what's possible
                  with AI, helping our clients stay ahead in an increasingly
                  digital world.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <achievement.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl border border-gray-100"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-indigo-100"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and methodologies to
                  deliver cutting-edge solutions that give our clients a
                  competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Client Success</h3>
                <p className="text-gray-600">
                  Your success is our success. We work closely with our clients
                  to understand their unique challenges and deliver tailored
                  solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Quality Excellence
                </h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, from
                  code quality to customer service, ensuring exceptional results
                  every time.
                </p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions can help you achieve your
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
