import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoIsFor from "@/components/WhoIsFor";
import Products from "@/components/Products";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhoIsFor />
        <Products />
        <WhatsIncluded />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Integrations />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
