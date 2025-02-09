import { GradientButton } from "@/components/ui/gradient-button";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Neural network background animation */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Innovate. Automate. Dominate.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Transform Your Business with AI & IT Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Tech Vexor delivers state-of-the-art IT services, AI development, and
          AI agent design to revolutionize your business operations.
        </p>

        <GradientButton size="lg">Get a Free Consultation</GradientButton>
      </div>
    </div>
  );
}
