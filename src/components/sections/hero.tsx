import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const tags = ["Website", "Social Media", "Digital Marketing", "Performance Marketing"] as const;
  const metrics = [
    { label: "Organic Traffic", value: "+142%", caption: "Last 90 days" },
    { label: "Leads Won", value: "+78%", caption: "Month over month" },
    { label: "ROAS", value: "4.2×", caption: "Average client lift" },
    { label: "CTR", value: "3.8%", caption: "Paid media campaigns" },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-800">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center" />
      <motion.div
        className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-indigo-500/25 blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-purple-500/25 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_520px] lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Tech Vexor • AI Growth Agency
            </motion.span>

            <motion.h1
              className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              Build Intelligent, High-Converting Experiences
            </motion.h1>

            <motion.p
              className="mt-4 text-base text-white/80 sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              We blend AI strategy, responsive web engineering, and performance marketing to accelerate demand generation across every channel.
            </motion.p>

            <motion.div
              className="mt-6 hidden overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <motion.div
                className="flex items-center gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1].map((row) => (
                  <div key={row} className="flex items-center gap-4 pr-6">
                    {tags.map((tag, index) => (
                      <span
                        key={`${row}-${index}`}
                        className="rounded-full bg-gradient-to-r from-indigo-500/80 to-purple-500/80 px-3 py-1 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              className="mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                <Sparkles className="h-4 w-4" /> India’s performance-first agency
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
                Success Rate
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-white">96%</span>
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                Trusted by 120+ scale-ups
              </span>
            </motion.div>

            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link to="/services" aria-label="Explore services" className="group relative inline-block">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl transition group-hover:opacity-50" />
                <motion.span
                  className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition group-hover:shadow-2xl sm:h-20 sm:w-20"
                  animate={{ boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0.35)",
                    "0 0 0 12px rgba(255,255,255,0)"
                  ] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                >
                  <span className="mr-1 text-[11px] font-medium sm:text-xs">Explore</span>
                  <ChevronRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <GradientButton asChild size="lg" className="w-full sm:w-auto">
                <Link to="/pricing">Get Pricing</Link>
              </GradientButton>
              <Button
                asChild
                variant="outline"
                className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full text-slate-200 hover:text-white sm:w-auto">
                <a href="tel:+917895849990">
                  <Phone className="mr-2 h-4 w-4" /> +91 78958 49990
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:ml-auto">
            <div className="relative hidden h-[340px] w-full md:block lg:h-[420px] xl:h-[460px]">
              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute left-6 top-8 rounded-2xl bg-white/90 px-5 py-4 text-slate-900 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-xs text-slate-500">Organic Traffic</div>
                <div className="text-2xl font-bold">+142%</div>
                <div className="text-xs text-emerald-600">Last 90 days</div>
              </motion.div>

              <motion.div
                className="absolute right-8 top-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-4 text-white shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-white/70">Leads Won</div>
                <div className="text-2xl font-bold">+78%</div>
                <div className="text-xs text-white/70">MoM</div>
              </motion.div>

              <motion.div
                className="absolute left-8 bottom-12 rounded-xl bg-white/90 px-4 py-3 text-slate-900 shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-500">ROAS</div>
                <div className="text-xl font-semibold">4.2×</div>
              </motion.div>

              <motion.div
                className="absolute right-8 bottom-10 rounded-xl bg-white/90 px-4 py-3 text-slate-900 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-slate-500">CTR</div>
                <div className="text-xl font-semibold">3.8%</div>
              </motion.div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]">
                <div
                  className="h-full w-full opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    color: "#94a3b8",
                  }}
                />
              </div>
            </div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-4 md:hidden sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-white backdrop-blur"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="text-xs uppercase tracking-wide text-indigo-100/80">{metric.label}</div>
                  <div className="mt-2 text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs text-white/70">{metric.caption}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
