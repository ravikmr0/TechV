import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.div
        className="absolute -top-28 -left-24 w-[28rem] h-[28rem] bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] bg-purple-500/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4">
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
          {/* Left: Headline & CTAs */}
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Business
            </motion.h1>
            <motion.div
              className="mt-4 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <motion.span
                className="text-lg md:text-xl px-3 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Digital Marketing
              </motion.span>
              <motion.span
                className="text-lg md:text-xl px-3 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Leads Generation
              </motion.span>
            </motion.div>
            <motion.div
              className="mt-3 h-1.5 w-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="mt-7 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <GradientButton asChild size="lg">
                <Link to="/pricing">Get Pricing</Link>
              </GradientButton>
              <Button asChild variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/15">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-300 hover:text-white">
                <a href="tel:+917895849990"><Phone className="w-4 h-4 mr-2" /> +91 78958 49990</a>
              </Button>
            </motion.div>
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
