import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Diamond, LogIn, Rocket, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const navItems = [
  { label: "Services", icon: <Diamond className="w-4 h-4" /> },
  { label: "Projects", icon: <Diamond className="w-4 h-4" /> },
  { label: "AI Solutions", icon: <Diamond className="w-4 h-4" /> },
  { label: "Contact", icon: <Diamond className="w-4 h-4" /> },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Tech Vexor
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {/* Search Bar */}
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
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-1 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
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
              <GradientButton size="sm">Get Started</GradientButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors py-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Explore Our Innovations
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <GradientButton className="w-full">Get Started</GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
