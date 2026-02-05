import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Products", href: "#products", isAnchor: true },
    { label: "Features", href: "#features", isAnchor: true },
    { label: "About", href: "#about", isAnchor: true },
    { label: "Blog", href: "/blog", isAnchor: false },
    { label: "Contact", href: "#contact", isAnchor: true },
  ];

  const handleAnchorClick = (href: string) => {
    const sectionId = href.replace('#', '');
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-large" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={flowlayerLogo} 
              alt="FlowLayer AI" 
              className="h-14 lg:h-20 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.isAnchor ? (
                <button
                  key={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium link-underline"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium link-underline"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://calendly.com/evankoenke/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-premium shadow-medium hover:shadow-cyan transition-all text-primary-foreground font-semibold group px-6">
                Book a 30-Minute Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item) =>
                item.isAnchor ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAnchorClick(item.href);
                    }}
                    className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <a
                  href="https://calendly.com/evankoenke/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full gradient-premium text-primary-foreground font-semibold">
                    Book a 30-Minute Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
