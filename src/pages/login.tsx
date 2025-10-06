import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePageTitle } from "@/hooks/use-page-title";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { Chrome, Github, Mail } from "lucide-react";
import { useState } from "react";

export default function Login() {
  usePageTitle("Client Portal Login");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(provider: "google" | "github") {
    try {
      setLoading(true);
      setError(null);
      const client = getSupabase();
      if (!client) {
        setError("Social login is not configured.");
        return;
      }
      const { error } = await client.auth.signInWithOAuth({
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

  const envMissing = !isSupabaseConfigured;

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,181,216,0.25),transparent_45%)] bg-[#0F172A]" />

        <section className="py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Brand intro */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-slate-900 text-white p-10 shadow-xl ring-1 ring-white/10">
                <h1 className="text-4xl font-bold mb-4">Welcome back</h1>
                <p className="text-slate-300 mb-6 max-w-md">
                  Sign in to manage projects, track progress, and explore our latest innovations in AI, cloud, and cybersecurity.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center"><span className="mr-2">•</span> Enterprise-grade security</li>
                  <li className="flex items-center"><span className="mr-2">��</span> India’s trusted IT & digital partner</li>
                  <li className="flex items-center"><span className="mr-2">•</span> 24×7 support for critical workloads</li>
                </ul>
                <div className="mt-8 text-xs text-slate-400">
                  Trusted by teams at
                  <div className="mt-3 flex items-center gap-6 opacity-80">
                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                    <img className="h-6" src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="Google Cloud" />
                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" />
                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Auth card */}
            <div className="max-w-xl w-full mx-auto">
              <div className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/60 via-fuchsia-500/60 to-cyan-500/60 shadow-2xl">
                <Card className="p-8 bg-slate-800 rounded-2xl">
                  <h2 className="text-2xl font-semibold mb-6">Sign in to Tech Vexor</h2>
                  {envMissing && (
                    <div className="mb-4 rounded-md bg-amber-50 text-amber-800 p-3 text-sm">
                      Social login needs Supabase credentials configured. You can continue with the UI preview; sign-in will be disabled until configured.
                    </div>
                  )}
                  <div className="space-y-3">
                    <Button
                      disabled={envMissing || loading}
                      onClick={() => signIn("google")}
                      variant="outline"
                      className="w-full bg-white text-slate-800 hover:bg-slate-50"
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

                  <div className="my-6 flex items-center text-slate-200">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="px-3 text-xs">or sign in with email</span>
                    <div className="h-px bg-slate-200 flex-1" />
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1 text-slate-600">Email address</label>
                      <Input placeholder="name@company.com" type="email" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1 text-slate-600">Password</label>
                      <Input placeholder="••••••••" type="password" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="h-4 w-4" />
                        <label htmlFor="remember" className="text-slate-600">Remember me</label>
                      </div>
                      <a className="text-indigo-600 hover:underline" href="#">Forgot password?</a>
                    </div>
                    <Button disabled className="w-full">
                      <Mail className="w-4 h-4 mr-2" /> Continue with email (disabled)
                    </Button>
                    <p className="text-xs text-slate-500 text-center">
                      By continuing, you agree to our <a className="underline" href="/terms">Terms</a> and <a className="underline" href="/privacy-policy">Privacy Policy</a>.
                    </p>
                  </form>

                  {error && (
                    <p className="mt-4 text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
