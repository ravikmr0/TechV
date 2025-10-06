import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";

const featuredPost = {
  id: 1,
  title: "The Future of AI in Business: 2025 Trends and Predictions",
  excerpt:
    "Explore the latest AI trends that will shape business operations in 2025, from autonomous systems to ethical AI implementation.",
  author: "Sarah Johnson",
  date: "January 15, 2025",
  readTime: "8 min read",
  category: "AI Trends",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  featured: true,
};

const blogPosts = [
  {
    id: 2,
    title: "How Machine Learning is Revolutionizing Healthcare Diagnostics",
    excerpt:
      "Discover how ML algorithms are improving diagnostic accuracy and patient outcomes in modern healthcare.",
    author: "Dr. Mike Chen",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Healthcare AI",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  },
  {
    id: 3,
    title: "Building Secure AI Systems: Best Practices for 2025",
    excerpt:
      "Learn essential security practices for AI implementation and how to protect your AI systems from threats.",
    author: "John Smith",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "AI Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
  },
  {
    id: 4,
    title: "The ROI of AI Implementation: Measuring Success",
    excerpt:
      "A comprehensive guide to measuring and maximizing the return on investment for AI projects.",
    author: "Emily Davis",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Business Strategy",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    id: 5,
    title: "Natural Language Processing: From Chatbots to Content Generation",
    excerpt:
      "Explore the evolution of NLP technology and its applications in modern business communications.",
    author: "Alex Rodriguez",
    date: "January 5, 2025",
    readTime: "9 min read",
    category: "NLP",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
  },
  {
    id: 6,
    title: "Computer Vision in Manufacturing: Quality Control Revolution",
    excerpt:
      "How computer vision is transforming quality control processes in manufacturing industries.",
    author: "Lisa Wang",
    date: "January 3, 2025",
    readTime: "6 min read",
    category: "Computer Vision",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
  },
  {
    id: 7,
    title: "Ethical AI: Building Responsible AI Systems",
    excerpt:
      "Understanding the importance of ethical considerations in AI development and deployment.",
    author: "Dr. Sarah Johnson",
    date: "December 30, 2024",
    readTime: "8 min read",
    category: "AI Ethics",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
  },
];

const categories = [
  "All Posts",
  "AI Trends",
  "Machine Learning",
  "Healthcare AI",
  "AI Security",
  "Business Strategy",
  "NLP",
  "Computer Vision",
  "AI Ethics",
];

export default function Blog() {
  usePageTitle("Insights & Resources Blog");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6">
              AI Insights &
              <span className="text-green-600"> Tech Innovations</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Stay updated with the latest trends, insights, and best practices
              in AI, machine learning, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0 ? "bg-green-600 hover:bg-green-700" : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="mb-3 bg-gray-100 text-gray-800 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-600 hover:text-green-700"
                      >
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest AI trends,
              insights, and best practices delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
