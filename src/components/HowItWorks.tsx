import { motion } from "framer-motion";
import { Phone, Wrench, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Strategy & Discovery",
    description: "We learn about your business, lead sources, and sales process to design the perfect automation strategy.",
    duration: "30-min call",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Build & Integration",
    description: "Our team builds and integrates your personalized AI follow-up system with your existing tools.",
    duration: "1-2 weeks",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Optimize",
    description: "Go live with full support. We continuously monitor performance and optimize for maximum conversions.",
    duration: "Ongoing",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-36 bg-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Call To{" "}
            <span className="text-gradient-premium">Full Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get fully automated in just a few weeks—not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0">
                    <ArrowRight className="absolute -right-0 -top-2 text-primary/50 w-5 h-5" />
                  </div>
                )}
                
                <div className="card-premium p-8 relative z-10 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-premium flex items-center justify-center text-primary-foreground font-bold shadow-large">
                    {step.step}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {step.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
