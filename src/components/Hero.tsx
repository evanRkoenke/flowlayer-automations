import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import automationImage from "@/assets/ai-lead-follow-up-automation.png";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background overflow-hidden">
      {/* Background decorative elements - Dark theme with cyan glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow" />
        {/* Subtle logo watermark */}
        <motion.img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute top-1/4 right-0 w-64 lg:w-96 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={16} className="text-primary" />
              AI-Powered Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI Lead Follow-Up{" "}
              <span className="text-gradient">Automation</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Automate your sales outreach, nurture leads, and close more deals with intelligent AI workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="gradient-primary shadow-cyan hover:shadow-large transition-all text-lg px-8 py-6 text-primary-foreground font-semibold"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                14-day free trial
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-cyan animate-float border border-primary/20">
              <img
                src={automationImage}
                alt="AI Lead Follow-Up Automation"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating price badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-card rounded-2xl p-4 shadow-cyan border border-primary/20"
            >
              <div className="text-sm text-muted-foreground mb-1">Starting at</div>
              <div className="text-3xl font-bold text-gradient">$2,000</div>
              <div className="text-sm text-primary font-medium">/month</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
