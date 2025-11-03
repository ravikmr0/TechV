import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Lightbulb, CheckCircle } from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  usePageTitle("Case Study - Vexor Technologies");

  // Mock case study data - in real app, fetch based on slug
  const caseStudy = {
    title: "Healthcare AI Implementation",
    client: "Regional Medical Center",
    industry: "Healthcare",
    duration: "8 months",
    teamSize: "12 specialists",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    tags: ["AI/ML", "Healthcare", "Automation"],
    overview: "A comprehensive AI implementation project that transformed patient care and operational efficiency at a leading regional medical center.",
    challenge: {
      title: "The Challenge",
      description: "The medical center was struggling with manual patient data management, slow diagnostic processes, and increasing operational costs. They needed a solution that could improve accuracy while reducing processing time.",
      points: [
        "Manual data entry causing delays and errors",
        "Inconsistent diagnostic processes across departments",
        "High operational costs due to inefficient workflows",
        "Difficulty in tracking patient outcomes and trends"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We developed a comprehensive AI-powered healthcare management system that automated key processes and provided intelligent diagnostic assistance.",
      points: [
        "AI-powered diagnostic assistant with machine learning algorithms",
        "Automated patient record management system",
        "Real-time data analytics and reporting dashboard",
        "Integration with existing hospital management systems"
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Diagnostic Speed", value: "40% faster", icon: TrendingUp },
        { label: "Accuracy Rate", value: "95% accuracy", icon: Target },
        { label: "Cost Reduction", value: "30% savings", icon: CheckCircle },
        { label: "Patient Satisfaction", value: "25% increase", icon: TrendingUp }
      ]
    },
    testimonial: {
      quote: "The AI implementation has revolutionized our operations. We're now able to provide faster, more accurate diagnoses while significantly reducing costs.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>

          <article>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
                <div>
                  <span className="font-medium">Client:</span> {caseStudy.client}
                </div>
                <div>
                  <span className="font-medium">Industry:</span> {caseStudy.industry}
                </div>
                <div>
                  <span className="font-medium">Duration:</span> {caseStudy.duration}
                </div>
                <div>
                  <span className="font-medium">Team Size:</span> {caseStudy.teamSize}
                </div>
              </div>
            </div>

            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div className="space-y-12">
              {/* Challenge Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    {caseStudy.challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{caseStudy.challenge.description}</p>
                  <ul className="space-y-2">
                    {caseStudy.challenge.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solution Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    {caseStudy.solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{caseStudy.solution.description}</p>
                  <ul className="space-y-2">
                    {caseStudy.solution.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    {caseStudy.results.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.results.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <metric.icon className="w-8 h-8 text-green-600" />
                        <div>
                          <div className="font-semibold text-gray-900">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{caseStudy.testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}