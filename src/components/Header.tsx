import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              FlowLayer <span className="text-gradient">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.isAnchor ? (
                <button
                  key={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log In
            </Button>
            <Button className="gradient-primary shadow-soft hover:shadow-medium transition-shadow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) =>
                item.isAnchor ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAnchorClick(item.href);
                    }}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Log In
                </Button>
                <Button className="gradient-primary">Get Started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
