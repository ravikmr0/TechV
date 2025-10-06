import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { serviceGroups } from "@/data/services-catalog";
import { industryGroups } from "@/data/industry-catalog";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Login", href: "/login" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/90 backdrop-blur-sm" : "bg-transparent"}`}
    >
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/vexor-w.png"
                alt="Tech Vexor Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Tech Vexor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {/* Search Bar - Desktop Only */}
            <div className="flex items-center max-w-xs w-full relative">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 w-full"
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
              </div>
            </div>

            {/* Navigation Items */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-6 md:w-[500px] lg:w-[500px] grid-cols-2 ">
                      <div >
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Core Services</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/services/website-development" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Website Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/mobile-app-developmentt" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/chatbot-ai-automation" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              AI & Automation
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/cloud-services" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Cloud Solutions
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Marketing & Design</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/services/seo" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              SEO & Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/ui-ux" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              UI/UX Design
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/brand-identity" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Brand Identity
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/content-marketing" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Content Marketing
                            </Link>
                          </li>
                          <li className="pt-2 border-t border-slate-200">
                            <Link to="/services" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                              View All Services
                              <span className="text-xs">→</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-6 md:w-[500px] lg:w-[500px] grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Business & Tech</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/industries/software-development" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Software Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/ecommerce-general" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              E-commerce
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/digital-marketing-ads" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/banks-credit-unions" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Finance & Banking
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/residential-commercial-real-estate" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Real Estate
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Services & Retail</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/industries/hospitals-clinics" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Healthcare
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/schools" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/restaurants-catering" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Restaurants & Hospitality
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/food-processing" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Manufacturing
                            </Link>
                          </li>
                          <li className="pt-2 border-t border-slate-200">
                            <Link to="/industries" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                              View All Industries
                              <span className="text-xs">→</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple items */}
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${isActive(item.href) ? "text-white bg-slate-800" : "text-slate-300 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action Buttons removed as per sequence */}
          </div>

          {/* Mobile Search and Menu */}
          <div className="flex items-center space-x-4 lg:hidden ml-auto">
            <div className="relative w-full max-w-[140px]">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 py-1 h-8 text-sm bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
              />
              <Search className="w-3 h-3 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-slate-500" />
            </div>
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <img
                  src="/vexor-w.png"
                  alt="Tech Vexor Logo"
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Menu
                </span>
              </div>
              <button
                className="text-white p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              <div className="grid grid-cols-1 gap-3">
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">Services</Link>
                <Link to="/industries" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">Industries</Link>
                {navItems.map((item, index) => (
                  <Link key={index} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile action buttons removed; links provided above */}
          </div>
        </div>
      )}
    </header>
  );
}
