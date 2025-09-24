import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link, useNavigate } from "react-router-dom";
import { Star, Phone, ShieldCheck } from "lucide-react";

export function Hero() {
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const website = String(data.get("website") || "");
    const budget = String(data.get("budget") || "");
    const qs = new URLSearchParams({ name, email, website, budget });
    navigate(`/contact?${qs.toString()}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center" />
      <div className="container mx-auto px-4">
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
          {/* Left: Headline & CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Trusted IT & Marketing Partner in India
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Accelerate growth with ROI‑driven
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Marketing & Development</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-2xl">
              Websites, apps, SEO, ads, social, branding, and AI—engineered to deliver measurable revenue impact.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <GradientButton asChild size="lg">
                <Link to="/pricing">Get Pricing</Link>
              </GradientButton>
              <Button asChild variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/15">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-300 hover:text-white">
                <a href="tel:+917895849990"><Phone className="w-4 h-4 mr-2" /> +91 78958 49990</a>
              </Button>
            </div>

            {/* Trust metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl text-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm">4.9/5 | Reviews</span>
              </div>
              <div className="text-sm"><span className="font-semibold">500+</span> clients</div>
              <div className="text-sm"><span className="font-semibold">₹500Cr+</span> revenue influenced</div>
            </div>
          </div>

          {/* Right: Proposal form */}
          <div className="lg:ml-auto">
            <Card className="backdrop-blur bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl">Get a Proposal</CardTitle>
                <p className="text-sm text-slate-600">Tell us about your goals. We’ll share a tailored plan and quote.</p>
              </CardHeader>
              <form onSubmit={onSubmit}>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Work Email</label>
                    <Input type="email" name="email" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website / App</label>
                    <Input name="website" placeholder="example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Monthly Budget</label>
                    <Input name="budget" placeholder="e.g., ₹50,000–₹1,00,000" />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-3">
                  <GradientButton type="submit" className="w-full">Get My Proposal</GradientButton>
                </CardFooter>
              </form>
            </Card>
            <p className="mt-3 text-xs text-slate-400">By submitting, you agree to our terms and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
