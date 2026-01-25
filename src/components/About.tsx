import { motion } from "framer-motion";
import { Target, Users, Rocket } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Businesses Automated" },
    { value: "2M+", label: "Leads Processed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "AI Availability" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every automation is tailored to your unique business needs and customer journey.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work alongside you as a true partner, not just a vendor, to ensure your success.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly evolving our AI to give you the competitive edge in lead conversion.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Modern, Reliable{" "}
              <span className="text-gradient">AI Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              FlowLayer AI is a cutting-edge AI automation consultancy designed for businesses that want to streamline lead follow-ups and scale faster. We combine powerful artificial intelligence with proven sales methodologies to create automation workflows that actually convert.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: help you never miss another lead. Whether you're a growing startup or an established enterprise, our AI solutions adapt to your needs and deliver measurable results.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 lg:p-8 border border-border text-center hover:shadow-medium transition-shadow"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
