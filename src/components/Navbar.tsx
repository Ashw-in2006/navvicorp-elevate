import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass-dark backdrop-blur-2xl shadow-glass border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with Glow Effect */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-neon rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-neon p-3 rounded-xl transition-transform duration-500 group-hover:scale-110 shadow-glow">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-accent to-neon bg-clip-text text-transparent">
              Navvi Corporations
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white relative group"
                activeClassName="text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
            <Button 
              asChild 
              className="ml-4 magnetic-button bg-gradient-neon text-white border-0 shadow-glow"
            >
              <Link to="/contact">
                <Zap className="mr-2 h-4 w-4" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in glass-dark backdrop-blur-2xl rounded-2xl my-4 p-6 border border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-3 px-4 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5 rounded-lg"
                activeClassName="text-white bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              asChild 
              className="w-full mt-4 bg-gradient-neon text-white border-0 shadow-glow"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Zap className="mr-2 h-4 w-4" />
                Get Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
