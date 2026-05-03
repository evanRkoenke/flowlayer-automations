import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Zap, Play, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import automationImage from "@/assets/ai-lead-follow-up-automation.png";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return (
    <span>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-32 bg-background overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-flow-blue-500/15 rounded-full blur-[150px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Subtle logo watermark */}
        <motion.img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute top-1/4 right-0 w-64 lg:w-96 opacity-[0.03] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Premium badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Lead Automation
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Never Lose{" "}
              <span className="text-gradient-premium">Another Lead</span>{" "}
              Again
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your sales pipeline with intelligent AI workflows that respond instantly, nurture persistently, and convert consistently—24/7.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Setup in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>ROI guaranteed</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://calendly.com/evankoenke/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gradient-premium shadow-premium hover:shadow-glow transition-all duration-300 text-lg px-8 py-7 text-primary-foreground font-semibold group"
                >
                  Start Automating
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-7 group"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                See How It Works
              </Button>
            </div>

            {/* Stats row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Businesses Automated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={2} suffix="M+" />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Leads Processed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={35} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Conversion Lift</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 -m-8 gradient-glow opacity-60 blur-2xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-premium border border-primary/20 glass">
              <div className="absolute inset-0 shimmer pointer-events-none" />
              <img
                src={automationImage}
                alt="AI Lead Follow-Up Automation Dashboard"
                className="w-full h-auto relative"
              />
            </div>
            
            {/* Floating stats badge */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-4 -left-4 lg:top-8 lg:-left-8 glass-strong rounded-xl p-4 shadow-large border border-primary/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Zap className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Response Time</div>
                  <div className="text-lg font-bold text-gradient">&lt; 30 seconds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
