import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function PrivacyPolicy() {
  usePageTitle("Privacy Policy & Data Handling");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-slate-300 max-w-3xl">Last updated: 2025</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              Tech Vexor is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. We provide IT, AI, cloud, cybersecurity, and digital marketing services to help businesses grow—across India and globally.
            </p>
            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details (name, email, phone, company)</li>
              <li>Business information you share to explore or deliver services</li>
              <li>Usage data (analytics, device, cookies) to improve our site and offerings</li>
            </ul>
            <h2>How We Use Information</h2>
            <ul>
              <li>Provide, operate, and improve our products and services</li>
              <li>Respond to inquiries, proposals, and support requests</li>
              <li>Security, fraud prevention, and compliance</li>
              <li>Marketing with your consent and lawful interests (you can opt out anytime)</li>
            </ul>
            <h2>Cookies & Analytics</h2>
            <p>
              We use cookies and similar technologies to remember preferences, analyze traffic, and measure campaign performance. You can control cookies through your browser settings.
            </p>
            <h2>Data Sharing</h2>
            <p>
              We do not sell personal data. We may share data with trusted service providers and partners under contracts that protect your information (for example, cloud hosting, analytics, communications). We disclose information if required by law or to protect rights and safety.
            </p>
            <h2>Data Retention</h2>
            <p>
              We retain information only as long as necessary for the purposes described, to comply with legal obligations, or to resolve disputes.
            </p>
            <h2>Your Rights</h2>
            <p>
              Depending on your region, you may have rights to access, correct, delete, restrict, or object to processing of your personal data, and to data portability. Contact us to exercise these rights.
            </p>
            <h2>International Transfers</h2>
            <p>
              Where data is transferred across borders, we use appropriate safeguards consistent with applicable laws.
            </p>
            <h2>Updates</h2>
            <p>
              We may update this policy from time to time. Material changes will be highlighted here. Continued use of our services after changes means you accept the updated policy.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions or requests, contact Tech Vexor at <a href="mailto:privacy@techvexor.com">privacy@techvexor.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
