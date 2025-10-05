import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Sparkles, ChevronRight, Code, Rocket, Brain, Palette, TrendingUp, Shield } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const tags = ["Website", "Social Media", "Digital Marketing", "Performance Marketing"] as const;

  const services = [
    { icon: Code, title: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, title: "AI & Automation", color: "from-violet-500 to-purple-500" },
    { icon: Palette, title: "UI/UX Design", color: "from-pink-500 to-rose-500" },
    { icon: TrendingUp, title: "Digital Marketing", color: "from-orange-500 to-amber-500" },
    { icon: Rocket, title: "Cloud Solutions", color: "from-green-500 to-emerald-500" },
    { icon: Shield, title: "Cybersecurity", color: "from-red-500 to-pink-500" },
  ];

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center" />

      <motion.div
        className="absolute -top-40 -left-40 h-80 w-80 md:h-[30rem] md:w-[30rem] rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 md:h-[32rem] md:w-[32rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid items-center gap-8 lg:gap-16 py-12 sm:py-16 lg:grid-cols-2 lg:py-20 xl:py-24">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-cyan-100 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              Tech Vexor • AI Growth Agency
            </motion.span>

            <motion.h1
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Build Intelligent,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                High-Converting
              </span>{" "}
              Experiences
            </motion.h1>

            <motion.p
              className="mt-5 text-base text-white/70 sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We blend AI strategy, responsive web engineering, and performance marketing to accelerate demand generation across every channel.
            </motion.p>

            <motion.div
              className="mt-7 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1].map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={`${row}-${index}`}
                        className="rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 px-4 py-1.5 text-sm font-medium text-white shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm px-3.5 py-1.5 text-sm text-emerald-200 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(52, 211, 153, 0.15)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                India's performance-first agency
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white/70">Success Rate</span>
                <span className="rounded-full bg-white/25 px-2.5 py-0.5 font-semibold text-white">96%</span>
              </motion.span>
              <motion.span
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-sm text-white/70"
                whileHover={{ scale: 1.05 }}
              >
                Trusted by 120+ scale-ups
              </motion.span>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GradientButton asChild size="lg" className="w-full sm:w-auto shadow-2xl">
                  <Link to="/pricing">Get Pricing</Link>
                </GradientButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/25 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 sm:w-auto"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="ghost" size="lg" className="w-full text-slate-200 hover:text-white hover:bg-white/10 sm:w-auto">
                  <a href="tel:+917895849990">
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="hidden sm:inline">+91 78958 49990</span>
                    <span className="sm:hidden">Call Us</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:max-w-none">
            <motion.div
              className="relative h-[400px] sm:h-[480px] lg:h-[520px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
                  <div
                    className="h-full w-full opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                      backgroundSize: "24px 24px",
                      color: "#60a5fa",
                    }}
                  />
                </div>

                <motion.div
                  className="absolute left-1/2 top-1/2 h-64 w-64 sm:h-80 sm:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-48 w-48 sm:h-60 sm:w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-sm px-8">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isActive = index === activeService;
                      return (
                        <motion.div
                          key={index}
                          className="absolute inset-0 flex flex-col items-center justify-center text-center"
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20,
                            scale: isActive ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            className={`relative mb-6 rounded-2xl bg-gradient-to-br ${service.color} p-5 shadow-2xl`}
                            animate={isActive ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Icon className="h-12 w-12 sm:h-14 sm:w-14 text-white" strokeWidth={1.5} />
                            <motion.div
                              className="absolute inset-0 rounded-2xl bg-white/20"
                              animate={{ opacity: [0, 0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <motion.div
                            className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                            initial={{ scaleX: 0 }}
                            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {services.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === activeService ? "w-8 bg-cyan-400" : "w-2 bg-white/30"
                      }`}
                      onClick={() => setActiveService(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
