import { Mail, Phone, MapPin, Linkedin, Twitter, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { label: "AI Automation", href: "#products" },
      { label: "Setup Service", href: "#products" },
      { label: "Pricing", href: "#products" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center mb-6">
                <img 
                  src={flowlayerLogo} 
                  alt="FlowLayer AI" 
                  className="h-14 w-auto"
                />
              </a>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your modern AI partner for businesses that want to streamline lead follow-ups and scale faster.
              </p>
              <Button
                className="gradient-premium text-primary-foreground font-semibold shadow-medium hover:shadow-cyan transition-all mb-6 group"
                asChild
              >
                <a
                  href="https://calendly.com/evankoenke/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar size={18} className="mr-2" />
                  Schedule Demo
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl glass border border-border hover:border-primary/40 hover:shadow-cyan flex items-center justify-center transition-all text-muted-foreground hover:text-primary"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl glass border border-border hover:border-primary/40 hover:shadow-cyan flex items-center justify-center transition-all text-muted-foreground hover:text-primary"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Products</h4>
              <ul className="space-y-4">
                {links.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:evankoenke@gmail.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <span>evankoenke@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+19412841742" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <span>(941) 284-1742</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <span>Sarasota, Florida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FlowLayer AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
