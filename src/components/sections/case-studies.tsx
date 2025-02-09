import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    quote:
      "Tech Vexor's AI solutions increased our operational efficiency by 80%. Their expertise in fintech is unmatched.",
    metrics: "80% increase in efficiency",
  },
  {
    name: "Michael Chen",
    role: "CEO, HealthTech Innovations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    quote:
      "The AI-powered diagnostic system developed by Tech Vexor reduced our processing time by 60%.",
    metrics: "60% reduction in processing time",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, RetailTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
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
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </section>
  );
}
