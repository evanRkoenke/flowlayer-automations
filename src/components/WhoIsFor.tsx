import { motion } from "framer-motion";
import { Briefcase, Users, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "You're Doing Too Much Manually",
    description: "If your week is full of repetitive tasks — sending the same emails, answering the same questions, chasing the same leads — we eliminate all of it with custom AI.",
    stat: "10+ hrs saved/week",
  },
  {
    icon: MapPin,
    title: "Your Leads Aren't Converting",
    description: "If people are reaching out but not hearing back fast enough, or falling through the cracks entirely, we build systems that follow up instantly and consistently — 24/7.",
    stat: "3x faster response",
  },
  {
    icon: Users,
    title: "Your Client Experience Is Inconsistent",
    description: "If new clients aren't being onboarded smoothly or your process feels different every time, we automate the entire journey so every client gets a five-star experience.",
    stat: "40% less churn",
  },
  {
    icon: TrendingUp,
    title: "You're Ready to Scale Without Hiring",
    description: "If you want to grow your business but can't afford to add staff for every task, AI automation lets you handle more volume with the same team — or less.",
    stat: "Custom built for you",
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
            We Build AI Systems For{" "}
            <span className="text-gradient-premium">Any Business</span> In Any Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a coach, contractor, retailer, or consultant — if you're doing repetitive work manually, we can automate it.
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
