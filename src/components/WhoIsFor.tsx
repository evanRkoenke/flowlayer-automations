import { motion } from "framer-motion";
import { Briefcase, Users, MapPin, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Service-Based Businesses",
    description: "Contractors, consultants, and professional service providers who need consistent lead follow-up.",
  },
  {
    icon: Users,
    title: "Agencies & Consultants",
    description: "Marketing agencies, business consultants, and B2B service firms managing multiple client relationships.",
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    description: "Home services, medical practices, and local retailers with steady inbound lead flow.",
  },
  {
    icon: TrendingUp,
    title: "Growing Teams",
    description: "Scaling companies that need consistent, automated follow-up without hiring more staff.",
  },
];

const WhoIsFor = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Perfect Fit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who FlowLayer AI Is <span className="text-gradient">For</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI automation system is designed for businesses that can't afford to lose leads to slow follow-up.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <audience.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
