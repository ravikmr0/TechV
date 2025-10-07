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
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center" />

      <motion.div
        className="absolute -top-20 -left-20 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[30rem] lg:w-[30rem] rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full bg-violet-500/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[100vw] overflow-hidden">
        <div className="relative z-10 grid items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16 py-6 sm:py-12 md:py-20 lg:grid-cols-2 lg:py-24 xl:py-28 min-h-[calc(100svh-4rem)]">
          <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-2.5 sm:space-y-4 md:space-y-6 overflow-hidden">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-cyan-100 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </motion.div>
              <span className="hidden xs:inline">Tech Vexor • AI Growth Agency</span>
              <span className="xs:hidden">Tech Vexor</span>
            </motion.span>

            <motion.h1
              className="text-xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold sm:leading-tight text-white"
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
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We blend AI strategy, responsive web engineering, and performance marketing to accelerate demand generation across every channel.
            </motion.p>

            <motion.div
              className="overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2.5 md:px-4 md:py-3 w-full max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1].map((row) => (
                  <div key={row} className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={`${row}-${index}`}
                        className="rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[10px] sm:text-xs md:text-sm font-medium text-white shadow-lg"
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
              className="h-0.5 sm:h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 mx-auto lg:mx-0"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5 md:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.span
                className="inline-flex items-center gap-0.5 sm:gap-1 md:gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 md:px-3.5 text-[10px] sm:text-xs md:text-sm text-emerald-200 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(52, 211, 153, 0.15)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                </motion.div>
                <span className="hidden sm:inline">India's performance-first agency</span>
                <span className="sm:hidden">Performance-first</span>
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-0.5 sm:gap-1 md:gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 md:px-3.5 text-[10px] sm:text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white/70">Success</span>
                <span className="rounded-full bg-white/25 px-1 py-0.5 sm:px-2 font-semibold text-white text-[10px] sm:text-xs md:text-sm">96%</span>
              </motion.span>
              <motion.span
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 md:px-3.5 text-[10px] sm:text-xs md:text-sm text-white/70"
                whileHover={{ scale: 1.05 }}
              >
                <span className="hidden sm:inline">Trusted by 120+ scale-ups</span>
                <span className="sm:hidden">120+ Clients</span>
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-1.5 sm:gap-2.5 md:gap-3 items-stretch sm:items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <GradientButton asChild size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base shadow-2xl h-9 sm:h-11 md:h-12 px-3 sm:px-4">
                  <Link to="/pricing">Get Pricing</Link>
                </GradientButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base border-white/25 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-9 sm:h-11 md:h-12 px-3 sm:px-4"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base text-slate-200 hover:text-white hover:bg-white/10 h-9 sm:h-11 md:h-12 px-3 sm:px-4">
                  <a href="tel:+917895849990">
                    <Phone className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="hidden sm:inline">+91 78958 49990</span>
                    <span className="sm:hidden">Call Now</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg mx-auto lg:max-w-none order-first lg:order-last">
            <motion.div
              className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[520px] 2xl:h-[560px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
                  <div
                    className="h-full w-full opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                      backgroundSize: "16px 16px",
                      color: "#60a5fa",
                    }}
                  />
                </div>

                <motion.div
                  className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-60 lg:w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute inset-0 flex items-center justify-center px-1 sm:px-4 md:px-6 lg:px-8">
                  <div className="relative w-full max-w-[160px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm">
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
                            className={`relative mb-1.5 sm:mb-2 md:mb-4 lg:mb-6 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl bg-gradient-to-br ${service.color} p-2 sm:p-3 md:p-4 lg:p-5 shadow-2xl`}
                            animate={isActive ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Icon className="h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 text-white" strokeWidth={1.5} />
                            <motion.div
                              className="absolute inset-0 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl bg-white/20"
                              animate={{ opacity: [0, 0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-1.5 md:mb-2 px-0.5 sm:px-2">
                            {service.title}
                          </h3>
                          <motion.div
                            className="h-0.5 sm:h-0.5 md:h-1 w-8 sm:w-10 md:w-12 lg:w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                            initial={{ scaleX: 0 }}
                            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2">
                  {services.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all ${
                        index === activeService ? "w-4 sm:w-5 md:w-6 lg:w-8 bg-cyan-400" : "w-1 sm:w-1.5 md:w-2 bg-white/30"
                      }`}
                      onClick={() => setActiveService(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${services[index].title}`}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -inset-1 sm:-inset-2 md:-inset-3 lg:-inset-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-lg sm:blur-xl md:blur-2xl lg:blur-3xl -z-10"
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
