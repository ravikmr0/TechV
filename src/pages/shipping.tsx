import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Shipping() {
  usePageTitle("Shipping & Returns Policy");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping & Returns</h1>
            <p className="text-slate-300 max-w-3xl">Last updated: 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-none">
            <p>
              This page explains our shipping, delivery expectations, and returns process for physical products and goods purchased from Tech Vexor. For digital products or services, please refer to the product-specific terms.
            </p>

            <h2>Shipping Methods & Delivery Times</h2>
            <p>
              We work with trusted couriers to deliver orders domestically and internationally. Delivery times depend on the shipping method selected at checkout, the destination, and customs clearance where applicable.
            </p>
            <ul>
              <li>Standard Domestic: 3–7 business days</li>
              <li>Expedited Domestic: 1–3 business days</li>
              <li>International: 7–21 business days (varies by country and customs)</li>
            </ul>

            <h2>Shipping Costs</h2>
            <p>
              Shipping charges are calculated at checkout based on the order weight, dimensions, destination, and chosen service. Where promotional free-shipping offers apply, the terms will be shown during checkout.
            </p>

            <h2>Order Processing</h2>
            <p>
              Orders are typically processed within 1–2 business days after payment confirmation. Processing time may increase for custom-built items or large-volume orders.
            </p>

            <h2>Tracking</h2>
            <p>
              Once your order ships, you will receive a confirmation email with tracking details. Use the tracking number to monitor your shipment on the carrier's website.
            </p>

            <h2>Customs, Duties & Taxes</h2>
            <p>
              For international shipments, customs duties and import taxes may apply and are the responsibility of the recipient unless otherwise stated. Delivery times may be affected by customs processing.
            </p>

            <h2>Returns & Exchanges</h2>
            <p>
              If you receive a damaged, defective, or incorrect item, please contact us within 14 days of delivery to arrange a return, replacement, or refund. Items must be returned in their original condition unless otherwise agreed.
            </p>
            <ul>
              <li>
                Return Authorization: Contact <a href="mailto:support@techvexor.com">support@techvexor.com</a> with your order number to receive return instructions.
              </li>
              <li>
                Return Shipping: We may provide a prepaid return label for qualifying returns; otherwise, return shipping costs are the responsibility of the customer unless the return is due to our error.
              </li>
              <li>
                Refund Processing: Refunds are issued to the original payment method within 5–10 business days of receiving the returned items and completing inspection.
              </li>
            </ul>

            <h2>Exceptions</h2>
            <ul>
              <li>
                Certain items — such as consumables, opened software licenses, or customized goods — may be ineligible for return unless defective.
              </li>
              <li>
                Lost-in-transit claims will be handled per the carrier's policy; we will assist filing claims for insured shipments.
              </li>
            </ul>

            <h2>Contact</h2>
            <p>
              For shipping or returns questions, email <a href="mailto:support@techvexor.com">support@techvexor.com</a> or use our contact form. Include your order number and a brief description of the issue.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
