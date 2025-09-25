import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const tags = ["Website", "Social Media", "Digital Marketing", "Performance Marketing"] as const;

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
              className="mt-4 relative overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[0,1].map((row) => (
                  <div key={row} className="flex items-center gap-3 pr-6">
                    {tags.map((t, i) => (
                      <span
                        key={`${row}-${i}`}
                        className="text-base md:text-lg px-3 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
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

          {/* Right: Visual composition */}
          <div className="lg:ml-auto relative h-[420px]">
            {/* Soft glow panel */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            {/* Orbit rings */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-indigo-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-purple-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />
            {/* Metric cards */}
            <motion.div
              className="absolute left-6 top-8 rounded-2xl bg-white/90 text-slate-900 shadow-xl px-5 py-4"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-xs text-slate-500">Organic Traffic</div>
              <div className="text-2xl font-bold">+142%</div>
              <div className="text-xs text-emerald-600">Last 90 days</div>
            </motion.div>
            <motion.div
              className="absolute right-8 top-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl px-5 py-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs/5 opacity-80">Leads</div>
              <div className="text-2xl font-bold">+78%</div>
              <div className="text-xs/5 opacity-80">MoM</div>
            </motion.div>
            <motion.div
              className="absolute left-10 bottom-10 rounded-xl bg-white/90 text-slate-900 shadow-lg px-4 py-3"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs text-slate-500">ROAS</div>
              <div className="text-xl font-semibold">4.2×</div>
            </motion.div>
            <motion.div
              className="absolute right-6 bottom-8 rounded-xl bg-white/90 text-slate-900 shadow-lg px-4 py-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs text-slate-500">CTR</div>
              <div className="text-xl font-semibold">3.8%</div>
            </motion.div>
            {/* Dotted grid overlay */}
            <div className="absolute inset-0 rounded-3xl [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none">
              <div className="w-full h-full opacity-20" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "16px 16px", color: "#94a3b8" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
