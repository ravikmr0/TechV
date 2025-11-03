import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { useState } from "react";
import { sendContactEmail, sendAutoReply } from "@/lib/email";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = {
  phone: "+91 7895849990",
  email: "hello@techvexor.com",
  address: "123 Innovation Drive, Tech Hub, San Francisco, CA 94105",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
};

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Tech Hub, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@techvexor.com",
  },
  {
    city: "New York",
    address: "456 Business Ave, Manhattan, NY 10001",
    phone: "+1 (555) 234-5678",
    email: "ny@techvexor.com",
  },
  {
    city: "London",
    address: "789 Tech Street, Shoreditch, London EC2A 4DP",
    phone: "+44 20 7123 4567",
    email: "london@techvexor.com",
  },
  {
    city: "Mumbai",
    address: "321 Digital Plaza, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 1234 5678",
    email: "mumbai@techvexor.com",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/techvexor",
    color: "text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/techvexor",
    color: "text-blue-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/techvexor",
    color: "text-blue-700",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@techvexorofficial",
    color: "text-red-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "http://instagram.com/techvexor/",
    color: "text-pink-600",
  },
];

const faqs = [
  {
    question: "How long does a typical AI project take?",
    answer:
      "Project timelines vary based on complexity, but most AI implementations take 3-6 months from discovery to deployment.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely! We specialize in integrating AI solutions with existing systems and can work with most technology stacks.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including healthcare, finance, retail, manufacturing, and more. Our solutions are tailored to each industry's specific needs.",
  },
];

export default function Contact() {
  usePageTitle("Contact Tech Vexor Growth Experts");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email to Tech Vexor
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        // Send auto-reply to user
        await sendAutoReply(formData.email, formData.name);
        
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6">
              Let's Build Something
              <span className="text-orange-600"> Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business with AI? We're here to help you
              every step of the way. Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card className="p-8">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="text-red-800 font-medium">Failed to send message</p>
                        <p className="text-red-700 text-sm">Please check required fields and try again.</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com" 
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company/Business
                      </label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="website-development">Website Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="social-media-management">Social Media Management</option>
                        <option value="brand-building">Brand Building</option>
                        <option value="chatbot-development">Chatbot Development</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Budget
                      </label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">₹10k - ₹25k</option>
                        <option value="25k-50k">₹25k - ₹50k</option>
                        <option value="50k-100k">₹50k - ₹100k</option>
                        <option value="100k+">₹100k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-900"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

                {/* Quick Contact */}
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Social Media */}
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`${social.color} hover:opacity-80 transition-opacity`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Emergency Contact */}
                <Card className="p-6 bg-orange-50 border-orange-200">
                  <h3 className="text-xl font-semibold mb-2 text-orange-800">
                    Need Urgent Support?
                  </h3>
                  <p className="text-orange-700 mb-4">
                    For critical issues or urgent project needs, call our
                    emergency line:
                  </p>
                  <a href="tel:+917895849990">
                  <Button className="bg-slate-800 hover:bg-slate-900">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Line
                  </Button>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button variant="outline">View All FAQs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't wait to transform your business. Schedule a free
              consultation with our AI experts today and discover what's
              possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}