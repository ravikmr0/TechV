import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    slug: "fintech-ai-transformation",
    title: "FinTech Company Achieves 40% Cost Reduction with AI",
    industry: "Finance",
    challenge: "Manual processing of loan applications causing delays",
    solution: "AI-powered automation and risk assessment",
    results: "40% cost reduction, 60% faster processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    slug: "healthcare-cloud-migration",
    title: "Healthcare Provider Scales Operations with Cloud Solutions",
    industry: "Healthcare",
    challenge: "Legacy systems limiting scalability and patient data access",
    solution: "Complete cloud migration with HIPAA compliance",
    results: "99.9% uptime, 50% infrastructure cost savings",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    slug: "retail-chatbot-success",
    title: "E-commerce Platform Boosts Sales with AI Chatbot",
    industry: "Retail",
    challenge: "High customer service costs and slow response times",
    solution: "24/7 AI chatbot with personalized recommendations",
    results: "30% increase in conversions, 70% reduction in support costs",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  }
];

export default function CaseStudiesIndex() {
  usePageTitle("Case Studies - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-slate-600">
              Discover how we've helped businesses transform with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <Badge className="w-fit mb-2">{study.industry}</Badge>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-500 mb-1">Challenge</h4>
                      <p className="text-slate-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-500 mb-1">Solution</h4>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
                        <h4 className="font-semibold text-indigo-900">Results</h4>
                      </div>
                      <p className="text-indigo-700 font-medium">{study.results}</p>
                    </div>
                    <Button asChild variant="link" className="p-0">
                      <Link to={`/case-studies/${study.slug}`}>
                        Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}