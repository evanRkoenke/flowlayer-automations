import { motion } from "framer-motion";
import { Shield, Zap, Server, Lock } from "lucide-react";

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
    description: "SOC 2 compliant infrastructure with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Reliable automation that never misses a lead.",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    description: "Grows with your business from 10 to 10,000 leads.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your data stays yours. Full GDPR compliance.",
  },
];

const Integrations = () => {
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
            Seamless Integration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Works With Your <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect FlowLayer AI with the tools you already use. No disruption to your workflow.
          </p>
        </motion.div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-5 py-3 bg-card rounded-lg border border-border shadow-soft hover:shadow-cyan hover:border-primary/30 transition-all"
            >
              <span className="font-medium text-foreground">{integration}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
