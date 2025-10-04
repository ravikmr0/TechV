import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function DataSecurity() {
  usePageTitle("Data Security & Compliance Practices");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Security</h1>
            <p className="text-slate-300 max-w-3xl">Security-first practices across cloud, apps, and data.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              Tech Vexor helps businesses improve with secure-by-design technology. As a leading India-based IT and digital solutions company, we embed security throughout our delivery lifecycle.
            </p>
            <h2>Security Principles</h2>
            <ul>
              <li>Defense-in-depth and risk-based controls</li>
              <li>Least privilege and role-based access control</li>
              <li>Encryption in transit (TLS) and at rest (cloud-native KMS where applicable)</li>
              <li>Secure SDLC: threat modeling, code review, SAST/DAST, dependency scanning</li>
              <li>Vulnerability management and patching cadence</li>
            </ul>
            <h2>Operational Security</h2>
            <ul>
              <li>Monitoring, logging, and alerting for critical services</li>
              <li>Backup, disaster recovery, and incident response runbooks</li>
              <li>Vendor and sub-processor reviews with contractual safeguards</li>
              <li>Employee security awareness and access reviews</li>
            </ul>
            <h2>Compliance</h2>
            <p>
              We align controls with industry frameworks relevant to the engagement (e.g., ISO 27001, SOC 2, GDPR, HIPAA) and follow client-specific requirements where applicable.
            </p>
            <h2>Contact</h2>
            <p>
              For security inquiries, email <a href="mailto:security@techvexor.com">security@techvexor.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
