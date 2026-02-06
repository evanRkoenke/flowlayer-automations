import { motion } from "framer-motion";
import { Target, Users, Rocket, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import flowlayerLogo from "@/assets/flowlayer-logo.png";
import evanPhoto from "@/assets/evan-koenke.jpg";

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
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={flowlayerLogo}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] opacity-[0.02]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Mind Behind{" "}
            <span className="text-gradient-premium">FlowLayer AI</span>
          </h2>
        </motion.div>

        {/* Founder Spotlight */}
        <div className="max-w-6xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing border card */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/50 via-flow-blue-500/40 to-primary/50 opacity-60 blur-sm" />
            <div className="relative rounded-3xl bg-card border border-border overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Photo Column */}
                <div className="lg:col-span-2 relative">
                  <div className="relative h-full min-h-[400px] lg:min-h-[560px]">
                    {/* Gradient overlay on photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
                    <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent z-10 lg:from-transparent" />
                    <img
                      src={evanPhoto}
                      alt="Evan Koenke — Founder of FlowLayer AI"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Subtle cyan glow behind photo */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/10 blur-[80px] rounded-full z-0" />
                  </div>
                </div>

                {/* Bio Column */}
                <div className="lg:col-span-3 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div className="mb-2">
                      <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                        Founder & CEO
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                      Evan Koenke
                    </h3>
                    <div className="space-y-5 mb-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Evan is the visionary behind FlowLayer AI — a next-generation automation consultancy built to help businesses{" "}
                        <span className="text-foreground font-semibold">never miss another lead</span>. With a deep passion for artificial intelligence and sales optimization, he founded FlowLayer to bridge the gap between cutting-edge AI technology and real-world revenue growth.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        His approach is hands-on and results-driven: every automation is custom-engineered to fit each client's unique pipeline, ensuring faster follow-ups, higher conversion rates, and scalable growth —{" "}
                        <span className="text-foreground font-semibold">all running 24/7 on autopilot</span>.
                      </p>
                      <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/40 pl-5">
                        "I believe every business deserves enterprise-level AI — not just the Fortune 500. FlowLayer exists to make that a reality."
                      </p>
                    </div>

                    {/* CTA & Socials */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href="https://calendly.com/evankoenke/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="gradient-premium shadow-medium hover:shadow-cyan transition-all text-primary-foreground font-semibold group px-6">
                          Book a Call with Evan
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <a
                        href="mailto:evankoenke@gmail.com"
                        className="w-11 h-11 rounded-full glass border-glow-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                        aria-label="Email Evan"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values & Stats */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Our <span className="text-gradient-premium">Core Values</span>
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              The principles that drive every automation we build.
            </p>

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
