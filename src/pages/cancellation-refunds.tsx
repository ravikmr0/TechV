import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function CancellationRefunds() {
  usePageTitle("Cancellation & Refund Policy Details");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
            <p className="text-slate-300 max-w-3xl">Last updated: 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              At Tech Vexor we aim to deliver high-quality services and a transparent experience. This policy explains how cancellations and refunds are handled for consultations, retainers, projects, subscriptions, and any product purchases made through our platform.
            </p>

            <h2>Scope</h2>
            <p>
              This policy applies to all paid engagements, including one-time professional services, recurring subscriptions, and product purchases, unless a separate written agreement or Statement of Work (SOW) specifies different terms.
            </p>

            <h2>Cancellation</h2>
            <ul>
              <li>
                Pre-Engagement: If you cancel before work begins or before a non-refundable payment is used, we will issue a full refund minus any processing fees where applicable.
              </li>
              <li>
                Projects & SOWs: For ongoing projects, cancellations must be communicated in writing. Charges for time and materials completed up to the cancellation date, plus any non-recoverable third-party costs, will apply.
              </li>
              <li>
                Subscriptions: You may cancel subscription services at any time. Cancellation prevents future billing but does not automatically refund periods already paid unless otherwise stated in your plan or promotional terms.
              </li>
            </ul>

            <h2>Refunds</h2>
            <p>
              Refund eligibility depends on the service type and timing:
            </p>
            <ul>
              <li>
                One-time Services: Refunds for one-time engagements are considered on a case-by-case basis. If work has not commenced and no non-recoverable costs were incurred, we typically issue a full refund.
              </li>
              <li>
                Recurring Services: For subscription plans, we may offer pro-rata refunds for unused time at our discretion and in accordance with the plan terms.
              </li>
              <li>
                Products: Refunds for physical or digital products follow our product-specific return policy (see Shipping & Returns). Defective or materially non-conforming products will be repaired, replaced, or refunded.
              </li>
              <li>
                Payment Disputes: If a payment is disputed through your payment provider, we will cooperate with the investigation and may provisionally suspend services until the dispute is resolved.
              </li>
            </ul>
+
            <h2>How to Request a Cancellation or Refund</h2>
            <ol>
              <li>Contact your Tech Vexor account manager or email <a href="mailto:support@techvexor.com">support@techvexor.com</a>.</li>
              <li>Provide the order or invoice number, date of purchase, and reason for the request.</li>
+
              <li>Our team will acknowledge your request within 3 business days and outline next steps.</li>
+            </ol>
+
            <h2>Exceptions & Non-Refundable Items</h2>
            <ul>
+
              <li>Payments for work already completed, delivered milestones, or irrevocable third-party license fees are generally non-refundable.</li>
+
              <li>Discounted, promo, or trial services may have specific limits—these will be communicated at the time of purchase.</li>
+
            </ul>
            <h2>Dispute Resolution</h2>
            <p>
              If you disagree with a cancellation or refund decision, please escalate the matter to our legal team at <a href="mailto:legal@techvexor.com">legal@techvexor.com</a>. We will review and respond promptly. These terms are subject to the governing law stated in our Terms & Conditions.
            </p>
            <h2>Contact</h2>
            <p>
              For questions about cancellations or refunds, reach out to <a href="mailto:support@techvexor.com">support@techvexor.com</a> or use the contact form on our website.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
