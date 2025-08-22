import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    quote:
      "Tech Vexor's AI solutions increased our operational efficiency by 80%. Their expertise in fintech is unmatched.",
    metrics: "80% increase in efficiency",
  },
  {
    name: "Michael Chen",
    role: "CEO, HealthTech Innovations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote:
      "The AI-powered diagnostic system developed by Tech Vexor reduced our processing time by 60%.",
    metrics: "60% reduction in processing time",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, RetailTech",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "Their custom AI agent revolutionized our customer service, handling 75% of inquiries automatically.",
    metrics: "75% automation in customer service",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Success Stories
        </h2>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="p-8 bg-white/5 backdrop-blur-sm border-0">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4"
                    />
                    <blockquote className="text-sm sm:text-xl text-slate-300 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-indigo-400 font-semibold mb-2">
                      {testimonial.metrics}
                    </div>
                    <cite className="text-white font-semibold">
                      {testimonial.name}
                    </cite>
                    <p className="text-slate-400 mb-6">{testimonial.role}</p>
                    <Link to="/case-studies">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
