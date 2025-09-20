import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { Chrome, Github, Mail } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(provider: "google" | "github") {
    try {
      setLoading(true);
      setError(null);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: { redirectTo: window.location.origin },
      });
      if (error) setError(error.message);
    } catch (e: any) {
      setError(e?.message || "Sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  const envMissing = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Login</h1>
            <p className="text-slate-300">Access your Tech Vexor dashboard and projects</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-xl">
            <Card className="p-8">
              {envMissing && (
                <div className="mb-4 rounded-md bg-amber-50 text-amber-800 p-3 text-sm">
                  Social login needs Supabase credentials configured. You can continue with the UI preview; sign-in will be disabled until configured.
                </div>
              )}
              <div className="space-y-3">
                <Button
                  disabled={envMissing || loading}
                  onClick={() => signIn("google")}
                  className="w-full bg-white text-slate-800 hover:bg-slate-100 border"
                >
                  <Chrome className="w-4 h-4 mr-2" /> Continue with Google
                </Button>
                <Button
                  disabled={envMissing || loading}
                  onClick={() => signIn("github")}
                  className="w-full bg-slate-900 text-white hover:bg-black"
                >
                  <Github className="w-4 h-4 mr-2" /> Continue with GitHub
                </Button>
              </div>

              <div className="my-6 flex items-center text-slate-400">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="px-3 text-xs">or</span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                <Input placeholder="Email address" type="email" />
                <Input placeholder="Password" type="password" />
                <Button disabled className="w-full">
                  <Mail className="w-4 h-4 mr-2" /> Email sign-in (disabled)
                </Button>
              </form>

              {error && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
