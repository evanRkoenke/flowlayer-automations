import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 gradient-premium" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Logo watermarks */}
        <img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-64 lg:w-80 opacity-10 rotate-12"
        />
        <img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-64 lg:w-80 opacity-10 -rotate-12"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium mb-8 border border-white/20 backdrop-blur-sm"
          >
            <Sparkles size={16} />
            Free Strategy Session
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Never Lose
            <br />
            Another Lead?
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Book a free strategy call and discover how FlowLayer AI can transform your sales pipeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-white text-flow-navy-900 hover:bg-white/90 shadow-large text-lg px-10 py-7 font-bold group"
            >
              <Calendar className="mr-2" size={22} />
              Book Your Free Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-lg px-10 py-7 font-semibold"
            >
              Contact Sales
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              30-minute strategy call
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              Custom proposal included
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
