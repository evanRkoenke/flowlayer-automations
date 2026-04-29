import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhoIsFor from "@/components/WhoIsFor";
import Products from "@/components/Products";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <WhoIsFor />
        <Products />
        <WhatsIncluded />
        <HowItWorks />
        <Features />
        <Integrations />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
