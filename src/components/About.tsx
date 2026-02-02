import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Target, Users, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

const AnimatedStat = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const numericPart = value.replace(/[^0-9]/g, '');
  const prefix = value.replace(/[0-9]/g, '').replace('+', '');
  const hasPlus = value.includes('+');
  const target = parseInt(numericPart) || 0;
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{hasPlus ? '+' : ''}{suffix}
    </span>
  );
};

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
    <section id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] opacity-[0.02]"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
              About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Modern{" "}
              <span className="text-gradient-premium">AI Partner</span>{" "}
              For Growth
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              FlowLayer AI is a cutting-edge automation consultancy designed for businesses that want to streamline lead follow-ups and scale faster. We combine powerful AI with proven sales methodologies to create workflows that actually convert.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our mission is simple: <span className="text-foreground font-semibold">help you never miss another lead</span>. Whether you're a growing startup or an established enterprise, our AI solutions adapt to your needs and deliver measurable results.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-medium group-hover:shadow-cyan transition-shadow">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-lg">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient-premium mb-3">
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
