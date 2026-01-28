import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Strategy & Discovery Call",
    description: "We learn about your business, lead sources, and sales process to design the perfect automation strategy.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Automation Build",
    description: "Our team builds and integrates your personalized AI follow-up system with your existing tools.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch, Monitor & Optimize",
    description: "Go live with full support. We continuously monitor performance and optimize for maximum conversions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From first call to full automation in just a few weeks.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/30 hover:shadow-cyan transition-all inline-block text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-soft">
                        <step.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-bold text-primary">Step {step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-cyan z-10" />

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
