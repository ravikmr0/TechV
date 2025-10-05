import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import { usePageTitle } from "@/hooks/use-page-title";
import { useParams, Link } from "react-router-dom";
import { industryIndex } from "@/data/industry-catalog";

export default function IndustryDynamic() {
  const { slug } = useParams();
  const entry = slug ? industryIndex[slug] : undefined;
  const pageTitle = entry ? `${entry.title} Industry Solutions & Growth Strategies` : "Industry Not Found";
  usePageTitle(pageTitle);

  if (!entry) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold mb-2">Industry not found</h1>
              <p className="text-slate-600 mb-6">Please choose from our catalog.</p>
              <Link className="text-indigo-600 underline" to="/industries">Back to Industry Solutions</Link>
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
      <IndustryDetailSection
        title={entry.title}
        subtitle={undefined}
        description={entry.description}
        useCases={entry.useCases}
        outcomes={entry.outcomes}
      />
      <Footer />
    </>
  );
}
