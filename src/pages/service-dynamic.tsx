import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { usePageTitle } from "@/hooks/use-page-title";
import { useParams, Link } from "react-router-dom";
import { serviceIndex } from "@/data/services-catalog";

export default function ServiceDynamic() {
  const { slug } = useParams();
  const entry = slug ? serviceIndex[slug] : undefined;
  const pageTitle = entry ? `${entry.title} Services & Solutions` : "Service Not Found";
  usePageTitle(pageTitle);

  if (!entry) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold mb-2">Service not found</h1>
              <p className="text-slate-600 mb-6">Please choose from our catalog.</p>
              <Link className="text-indigo-600 underline" to="/services">Back to Services</Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ServiceDetailSection
        title={entry.title}
        description={entry.description}
        features={entry.features}
        benefits={entry.benefits}
      />
      <Footer />
    </>
  );
}
