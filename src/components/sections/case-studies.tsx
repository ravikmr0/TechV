import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
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
    name: "Yogesh Chaudhary",
    title: "Founder & CEO",
    company: "EMCOBE Engineering & Consultants",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    quote:
      "Tech Vexor has professionally developed the EMCOBE Engineering & Consultants website delivering a modern, high-performance, and visually engaging digital presence",
    metrics: "98% increase in efficiency",
  },
  {
    name: "Sudheer Kumar",
    title: "Founder & CEO",
    company: "Harishyam Infra Pvt. Ltd.",
    image: "https://scontent.fdel27-7.fna.fbcdn.net/v/t39.30808-6/557143563_1483592059547578_5155762935498424155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=646rwRbwbL0Q7kNvwGN1KEh&_nc_oc=Adn7OEbryI9NICy6K64tOm4OBjpI_FdA1uffDIFUdDGpn8HL6g_BwHsFWj-fuqIg5hMbsen4jDB9xMYGlx25GxcK&_nc_zt=23&_nc_ht=scontent.fdel27-7.fna&_nc_gid=5hJ_81G9vGGAOciIBpNBkA&oh=00_AfeOlFp6Bbn0YL4Lqyv30LORAlkX_a5UBHquHOOyEBOdJg&oe=68ED5CCC",
    quote:
      "Tech Vexor has expertly developed the website for Harishyam Infra Pvt. Ltd., creating a sleek, professional, and performance-driven online presence.",
    metrics: "94% reduction in processing time",
  },
  {
    name: "Sunil Kumar",
    title: "Head Chef & Owner",
    company: "Omno's Pizza",
    image: "https://www.omnospizza.com/images/sunil.png",
    quote:
      "Tech Vexor has creatively developed the website for Omno’s Pizza crafting a vibrant, appetizing, and user-friendly digital experience that perfectly reflects the brand’s delicious identity.",
    metrics: "75% automation in customer service",
  },
  
];

export function CaseStudies() {
  const [api, setApi] = useState<any>(null);
  const timer = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const tick = () => {
      if (!paused) api.scrollNext();
    };
    timer.current = window.setInterval(tick, 2500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [api, paused]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Success Stories
        </h2>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Carousel className="max-w-5xl mx-auto" setApi={setApi} opts={{ align: "start", loop: true }}>
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
                    <p className="text-slate-400 mb-6">{testimonial.title}, {testimonial.company}</p>
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
          <CarouselPrevious className="text-slate-950" />
          <CarouselNext className="text-slate-950" />
          </Carousel>
        </div>

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
