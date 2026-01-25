import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

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
    <footer className="bg-flow-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">
                FlowLayer <span className="text-flow-200">AI</span>
              </span>
            </a>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Your modern, reliable AI partner for businesses that want to streamline lead follow-ups and scale faster.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} />
                evankoenke@gmail.com
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} />
                (941) 284-1742
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} FlowLayer AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white/60 transition-colors text-sm"
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
