import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Bot,
  BarChart3,
  Brain,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description:
        "Respond to leads in under 30 seconds, not hours. Our AI ensures no opportunity slips through the cracks.",
      highlight: "<30 sec",
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description:
        "Let AI handle repetitive follow-ups while you focus on closing deals and growing your business.",
      highlight: "Always On",
    },
    {
      icon: Bot,
      title: "Smart Personalization",
      description:
        "Intelligent workflows that adapt to lead behavior, sending the right message at the perfect time.",
      highlight: "AI-Powered",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your funnel performance with real-time dashboards and detailed reports.",
      highlight: "Real-Time",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Algorithms that continuously improve response quality and conversion rates over time.",
      highlight: "Self-Improving",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with industry standards to keep your data safe.",
      highlight: "SOC 2",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-36 bg-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful <span className="text-gradient-premium">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your lead follow-up and scale your business efficiently.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-premium p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-premium flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <feature.icon className="text-primary-foreground" size={28} />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  {feature.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
