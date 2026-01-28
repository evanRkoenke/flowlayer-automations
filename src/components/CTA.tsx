import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-primary" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
            <Calendar size={16} />
            Book Your Free Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Lead Follow-Up?
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-10">
            Schedule a free demo and discover how FlowLayer AI can transform your sales process and help you close more deals on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-flow-navy-900 hover:bg-white/90 shadow-large text-lg px-8 py-6 font-semibold"
            >
              <Calendar className="mr-2" size={20} />
              Schedule Your Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Contact Sales
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/60">
            No commitment required • 30-minute call • Custom solution proposal
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
