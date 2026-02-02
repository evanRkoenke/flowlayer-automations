import { motion } from "framer-motion";
import { Shield, Zap, Server, Lock, Check } from "lucide-react";

const integrations = [
  "HubSpot",
  "Salesforce",
  "Zapier",
  "Stripe",
  "GoHighLevel",
  "Calendly",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Twilio",
  "OpenAI",
  "Make",
];

const trustPoints = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Reliable automation that never misses a lead.",
  },
  {
    icon: Server,
    title: "Scalable",
    description: "Grows from 10 to 10,000+ leads seamlessly.",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Your data stays yours. Full privacy control.",
  },
];

const Integrations = () => {
  return (
    <section className="py-24 lg:py-36 bg-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            Seamless Integration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Works With Your{" "}
            <span className="text-gradient-premium">Existing Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect FlowLayer AI with the tools you already use. Zero disruption to your workflow.
          </p>
        </motion.div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group px-6 py-4 glass rounded-xl border border-border hover:border-primary/40 hover:shadow-cyan transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-semibold text-foreground">{integration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-medium group-hover:shadow-cyan group-hover:scale-110 transition-all duration-300">
                <point.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
