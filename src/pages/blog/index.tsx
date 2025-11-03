import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "ai-transformation-2025",
    title: "AI Transformation in 2025: What Businesses Need to Know",
    excerpt: "Explore the latest AI trends and how they're reshaping business operations across industries.",
    date: "2025-01-15",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    slug: "cloud-migration-guide",
    title: "Complete Guide to Cloud Migration for Enterprises",
    excerpt: "Step-by-step strategies for successful cloud migration with minimal disruption.",
    date: "2025-01-10",
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Essential security measures every business should implement to protect their digital assets.",
    date: "2025-01-05",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  }
];

export default function BlogIndex() {
  usePageTitle("Blog & Insights - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-slate-600">
              Stay updated with the latest trends in AI, cloud computing, and technology innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 mb-2 inline-block">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link to={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}