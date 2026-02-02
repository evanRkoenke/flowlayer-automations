import { motion } from "framer-motion";
import { Mail, MessageSquare, UserCheck, Calendar, Plug, BarChart3, Settings, ArrowUpRight } from "lucide-react";

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
    title: "Appointment Booking",
    description: "Let qualified leads book directly on your calendar without back-and-forth.",
  },
  {
    icon: Plug,
    title: "CRM & Tool Integrations",
    description: "Seamlessly connect with your existing tech stack and workflows.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time dashboards showing conversion rates and ROI metrics.",
  },
  {
    icon: Settings,
    title: "Ongoing Optimization",
    description: "Continuous improvement and dedicated support to maximize results.",
  },
];

const WhatsIncluded = () => {
  return (
    <section className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-sm font-medium mb-6 uppercase tracking-wider">
            Full Package
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need,{" "}
            <span className="text-gradient-premium">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete system to capture, nurture, and convert leads automatically.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group card-premium p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-cyan transition-shadow">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
