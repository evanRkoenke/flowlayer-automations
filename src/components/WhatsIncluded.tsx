import { motion } from "framer-motion";
import { Mail, MessageSquare, UserCheck, Calendar, Plug, BarChart3, Settings } from "lucide-react";

const deliverables = [
  {
    icon: Mail,
    title: "AI-Powered Email Follow-Ups",
    description: "Personalized email sequences that adapt to lead behavior and engagement.",
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Up Automation",
    description: "Timely text messages that reach leads where they're most responsive.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification & Routing",
    description: "Automatically score and route leads to the right team member.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Automation",
    description: "Let qualified leads book directly on your calendar without back-and-forth.",
  },
  {
    icon: Plug,
    title: "CRM & Tool Integrations",
    description: "Seamlessly connect with your existing tech stack and workflows.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    description: "Real-time dashboards showing conversion rates and ROI metrics.",
  },
  {
    icon: Settings,
    title: "Ongoing Optimization & Support",
    description: "Continuous improvement and dedicated support to maximize results.",
  },
];

const WhatsIncluded = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Full Package
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What's <span className="text-gradient">Included</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to capture, nurture, and convert leads automatically.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-soft"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
