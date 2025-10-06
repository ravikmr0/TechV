import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Award,
  Coffee,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $180k",
    description:
      "Lead the development of cutting-edge AI solutions and machine learning models for our enterprise clients.",
    requirements: [
      "5+ years experience in ML/AI development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong understanding of deep learning algorithms",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$100k - $150k",
    description:
      "Drive product strategy and roadmap for our AI-powered solutions, working closely with engineering and design teams.",
    requirements: [
      "3+ years product management experience",
      "Background in AI/ML products",
      "Strong analytical and communication skills",
      "Experience with agile development methodologies",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "Data Science",
    location: "Austin / Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description:
      "Analyze complex datasets to derive insights and build predictive models that drive business decisions.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "3+ years experience in data analysis and modeling",
      "Proficiency in Python, R, SQL",
      "Experience with data visualization tools",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "DevOps Engineer - AI Infrastructure",
    department: "Engineering",
    location: "Seattle / Remote",
    type: "Full-time",
    salary: "$110k - $160k",
    description:
      "Build and maintain scalable infrastructure for AI/ML workloads and ensure reliable deployment pipelines.",
    requirements: [
      "4+ years DevOps/Infrastructure experience",
      "Experience with Kubernetes, Docker, CI/CD",
      "Knowledge of ML infrastructure and MLOps",
      "Cloud platform expertise (AWS, GCP, Azure)",
    ],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "UX Designer - AI Products",
    department: "Design",
    location: "Los Angeles / Remote",
    type: "Full-time",
    salary: "$80k - $120k",
    description:
      "Design intuitive user experiences for AI-powered applications and ensure seamless human-AI interactions.",
    requirements: [
      "3+ years UX design experience",
      "Portfolio showcasing AI/ML product design",
      "Proficiency in Figma, Sketch, or similar tools",
      "Understanding of AI/ML concepts and limitations",
    ],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Sales Engineer - AI Solutions",
    department: "Sales",
    location: "Chicago / Remote",
    type: "Full-time",
    salary: "$85k - $140k + Commission",
    description:
      "Work with sales team to demonstrate AI solutions to prospects and support technical aspects of the sales process.",
    requirements: [
      "2+ years technical sales experience",
      "Background in AI/ML or software engineering",
      "Strong presentation and communication skills",
      "Experience with enterprise software sales",
    ],
    posted: "4 days ago",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness programs",
  },
  {
    icon: Zap,
    title: "Professional Growth",
    description:
      "Learning budget, conference attendance, and mentorship programs",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Flexible hours, remote work options, and unlimited PTO policy",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description:
      "Market-rate salaries, equity options, and performance bonuses",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Inclusive environment with diverse teams and open communication",
  },
  {
    icon: DollarSign,
    title: "Financial Benefits",
    description:
      "401(k) matching, stock options, and financial planning assistance",
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with AI and technology.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe the best solutions come from diverse teams working together.",
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in our people's growth and encourage lifelong learning.",
  },
  {
    title: "Ethical AI",
    description:
      "We're committed to developing responsible and ethical AI solutions.",
  },
];

export default function Careers() {
  usePageTitle("Careers & Open Roles in AI and Marketing");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future of
              <span className="text-cyan-500"> AI with Us</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Join a team of passionate innovators working on cutting-edge AI
              solutions that transform businesses and improve lives around the
              world.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge className="bg-purple-100 text-purple-800">
                          {job.department}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.slice(0, 2).map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-gray-400">
                        Posted {job.posted}
                      </p>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button className="bg-purple-600 hover:bg-purple-700 w-full lg:w-auto">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Life at Tech Vexor
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We foster an environment where innovation thrives, ideas are
              valued, and every team member can make a meaningful impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                  alt="Team collaboration"
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">Collaborative Workspace</h3>
                <p className="text-gray-600 text-sm">
                  Open, modern offices designed for collaboration and creativity
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
                  alt="Learning and development"
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600 text-sm">
                  Regular workshops, conferences, and skill development
                  opportunities
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80"
                  alt="Team events"
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">Team Building</h3>
                <p className="text-gray-600 text-sm">
                  Regular team events, hackathons, and social activities
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
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our
              passion for AI innovation. Send us your resume and let's start a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
