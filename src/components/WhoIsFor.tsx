import { motion } from "framer-motion";
import { Briefcase, Users, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Service-Based Businesses",
    description: "Contractors, consultants, and professional service providers who need consistent lead follow-up.",
    stat: "3x faster response",
  },
  {
    icon: Users,
    title: "Agencies & Consultants",
    description: "Marketing agencies, business consultants, and B2B service firms managing multiple client relationships.",
    stat: "50% more demos",
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    description: "Home services, medical practices, and local retailers with steady inbound lead flow.",
    stat: "40% less no-shows",
  },
  {
    icon: TrendingUp,
    title: "Growing Teams",
    description: "Scaling companies that need consistent, automated follow-up without hiring more staff.",
    stat: "10hrs saved/week",
  },
];

const WhoIsFor = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            Perfect Fit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built For Businesses That{" "}
            <span className="text-gradient-premium">Can't Afford</span> To Lose Leads
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI automation system is designed for businesses where every lead counts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-premium p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-premium flex items-center justify-center shadow-medium group-hover:shadow-cyan transition-shadow">
                  <audience.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {audience.description}
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <span className="text-sm font-semibold text-gradient">{audience.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
