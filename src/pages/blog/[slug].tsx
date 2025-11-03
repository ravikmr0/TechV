import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  usePageTitle("Blog Post - Vexor Technologies");

  // Mock blog post data - in real app, fetch based on slug
  const post = {
    title: "The Future of AI in Business Automation",
    content: `
      <p>Artificial Intelligence is revolutionizing how businesses operate, offering unprecedented opportunities for automation and efficiency. In this comprehensive guide, we'll explore the current landscape and future possibilities of AI in business automation.</p>
      
      <h2>Current State of AI Automation</h2>
      <p>Today's AI systems are already transforming various business processes, from customer service chatbots to predictive analytics and automated decision-making systems.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Increased operational efficiency</li>
        <li>Reduced human error</li>
        <li>24/7 availability</li>
        <li>Cost reduction</li>
        <li>Scalability</li>
      </ul>
      
      <h2>Future Trends</h2>
      <p>Looking ahead, we can expect to see even more sophisticated AI applications that will further transform business operations.</p>
    `,
    category: "AI & Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Vexor Technologies Team",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80"
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <article>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}