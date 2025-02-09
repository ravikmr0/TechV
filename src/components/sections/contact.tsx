import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientButton } from "@/components/ui/gradient-button";

export function Contact() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get a Free AI Strategy Session
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Business Needs
                </label>
                <Textarea
                  placeholder="Tell us about your project and requirements"
                  className="min-h-[120px]"
                />
              </div>
              <div className="text-center">
                <GradientButton size="lg" className="w-full md:w-auto">
                  Schedule Consultation
                </GradientButton>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
