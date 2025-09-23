import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Diamond, LogIn, Rocket, Search, Menu, X } from "lucide-react";
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
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Contact", href: "/contact" },
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
                    <div className="grid gap-3 p-4 md:w-[700px] lg:w-[900px] grid-cols-2 lg:grid-cols-3">
                      {serviceGroups.slice(0, 3).map((group, gi) => (
                        <div key={gi}>
                          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{group.name}</h4>
                          <ul className="space-y-1">
                            {group.items.slice(0, 4).map((svc, si) => (
                              <li key={si}>
                                <Link to={`/services/${svc.slug}`} className="text-sm text-slate-700 hover:text-indigo-600">
                                  {svc.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="self-end">
                        <Link to="/services" className="text-sm text-indigo-600 hover:underline">Explore all services →</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[700px] lg:w-[900px] grid-cols-2 lg:grid-cols-3">
                      {industryGroups.slice(0, 3).map((group, gi) => (
                        <div key={gi}>
                          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{group.name}</h4>
                          <ul className="space-y-1">
                            {group.items.slice(0, 4).map((ind, ii) => (
                              <li key={ii}>
                                <Link to={`/industries/${ind.slug}`} className="text-sm text-slate-700 hover:text-indigo-600">
                                  {ind.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="self-end">
                        <Link to="/industries" className="text-sm text-indigo-600 hover:underline">See industry use cases →</Link>
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

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="items-center space-x-1 text-slate-300 hover:text-white"
              >
                <Link to="/innovations">
                  <Rocket className="w-4 h-4" />
                  <span>Explore Our Innovations</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="items-center space-x-1 text-slate-300 hover:text-white"
              >
                <Link to="/login">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
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
              <div>
                <h4 className="text-slate-400 uppercase text-xs mb-2">Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceGroups.flatMap((g) => g.items).slice(0, 8).map((svc, i) => (
                    <Link key={i} to={`/services/${svc.slug}`} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">
                      {svc.title}
                    </Link>
                  ))}
                </div>
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-indigo-400 hover:text-indigo-300 text-sm mt-2 inline-block">Explore all services →</Link>
              </div>

              <div className="pt-4">
                <h4 className="text-slate-400 uppercase text-xs mb-2">Industries</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industryGroups.flatMap((g) => g.items).slice(0, 8).map((ind, i) => (
                    <Link key={i} to={`/industries/${ind.slug}`} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">
                      {ind.title}
                    </Link>
                  ))}
                </div>
                <Link to="/industries" onClick={() => setIsMenuOpen(false)} className="text-indigo-400 hover:text-indigo-300 text-sm mt-2 inline-block">See more industries →</Link>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-2">
                {navItems.map((item, index) => (
                  <Link key={index} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white text-base">
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-3">
              <Button asChild variant="ghost" className="w-full justify-start text-slate-300 hover:text-white text-lg">
                <Link to="/innovations" onClick={() => setIsMenuOpen(false)}>
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Our Innovations
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start text-slate-300 hover:text-white text-lg">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <LogIn className="w-5 h-5 mr-2" />
                  Login
                </Link>
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
