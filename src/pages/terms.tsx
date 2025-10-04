import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Terms() {
  usePageTitle("Terms & Conditions Overview");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-slate-300 max-w-3xl">Last updated: 2025</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              Welcome to Tech Vexor. By accessing or using our website, products, or services, you agree to these Terms & Conditions.
            </p>
            <h2>Services</h2>
            <p>
              We provide consulting and engineering services in IT, cloud, AI, cybersecurity, and digital marketing. Specific scopes, deliverables, and fees are defined in individual statements of work (SOWs) or agreements.
            </p>
            <h2>Use of Site</h2>
            <ul>
              <li>Do not misuse the site or interfere with its operation.</li>
              <li>Do not attempt unauthorized access to data or systems.</li>
              <li>Provide accurate information when contacting us.</li>
            </ul>
            <h2>Intellectual Property</h2>
            <p>
              All content on this site is owned by or licensed to Tech Vexor and protected by law. You may not copy, modify, or distribute content without permission.
            </p>
            <h2>Warranties & Disclaimers</h2>
            <p>
              Services are provided on an "as-is" basis unless otherwise specified in a written agreement. We disclaim implied warranties to the extent permitted by law.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Tech Vexor is not liable for indirect, incidental, special, or consequential damages arising from use of our site or services.
            </p>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of courts in India, unless otherwise agreed in writing.
            </p>
            <h2>Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use indicates acceptance of the updated terms.
            </p>
            <h2>Contact</h2>
            <p>
              For questions, contact <a href="mailto:legal@techvexor.com">legal@techvexor.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
