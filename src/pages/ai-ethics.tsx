import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function AIEthics() {
  usePageTitle("AI Ethics & Responsible Innovation");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Ethics</h1>
            <p className="text-slate-300 max-w-3xl">Responsible AI for trustworthy outcomes.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              Tech Vexor designs AI systems to improve business outcomes while prioritizing safety, fairness, and transparency. As an India-grown technology partner, we champion responsible innovation.
            </p>
            <h2>Principles</h2>
            <ul>
              <li>Fairness & Inclusion: mitigate bias via data curation, testing, and review</li>
              <li>Privacy: minimize data, apply access controls, and protect sensitive information</li>
              <li>Transparency: communicate capabilities, limitations, and sources when possible</li>
              <li>Safety & Reliability: evaluate and monitor for accuracy and misuse</li>
              <li>Human Oversight: keep people in the loop for high-stakes decisions</li>
            </ul>
            <h2>Data & Model Governance</h2>
            <ul>
              <li>Document datasets, model versions, and evaluation metrics</li>
              <li>Respect IP and licensing of training data and tools</li>
              <li>Provide mechanisms to correct or remove data where appropriate</li>
            </ul>
            <h2>Use Guidelines</h2>
            <ul>
              <li>Prohibit harmful, illegal, or deceptive use cases</li>
              <li>Design guardrails and content filters matched to risk</li>
              <li>Continuously improve via feedback and incident review</li>
            </ul>
            <h2>Contact</h2>
            <p>
              For ethics questions, write to <a href="mailto:ethics@techvexor.com">ethics@techvexor.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
