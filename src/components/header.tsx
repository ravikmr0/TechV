import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Diamond, LogIn, Rocket, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Services",
    icon: <Diamond className="w-4 h-4" />,
    href: "/services",
  },
  {
    label: "Projects",
    icon: <Diamond className="w-4 h-4" />,
    href: "/projects",
  },
  { label: "AI Solutions", icon: <Diamond className="w-4 h-4" />, href: "#" },
  { label: "Contact", icon: <Diamond className="w-4 h-4" />, href: "#" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
            <Link to="/">
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
            <nav className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-1 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="items-center space-x-1 text-slate-300 hover:text-white"
              >
                <Rocket className="w-4 h-4" />
                <span>Explore Our Innovations</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="items-center space-x-1 text-slate-300 hover:text-white"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Button>
              <GradientButton
                size="sm"
                onClick={() =>
                  window.open("https://wa.me/917895849990", "_blank")
                }
              >
                Get Started
              </GradientButton>
            </div>
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
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Menu
              </span>
              <button
                className="text-white p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors py-2 text-lg"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Our Innovations
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white text-lg"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </Button>
              <GradientButton
                className="w-full text-lg"
                onClick={() =>
                  window.open("https://wa.me/917895849990", "_blank")
                }
              >
                Get Started
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
