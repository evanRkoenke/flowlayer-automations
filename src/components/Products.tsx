import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Settings, Shield, Zap } from "lucide-react";
import automationImage from "@/assets/ai-lead-follow-up-automation.png";

const Products = () => {
  const setupFeatures = [
    "Custom workflow design",
    "Full system configuration",
    "CRM & tool integrations",
    "Personalized AI training",
    "Team onboarding session",
    "30-day support included",
  ];

  const ongoingFeatures = [
    "Automated lead nurturing sequences",
    "AI-powered response generation",
    "Multi-channel outreach (Email, SMS, Voice)",
    "Real-time analytics dashboard",
    "CRM integration",
    "24/7 lead engagement",
  ];

  return (
    <section id="products" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
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
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Complete AI Lead{" "}
            <span className="text-gradient-premium">Automation System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to capture, nurture, and convert leads—fully managed for you.
          </p>
        </motion.div>

        {/* Single Premium Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-primary/60 via-primary/20 to-transparent">
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full gradient-premium text-primary-foreground text-sm font-semibold shadow-large z-10">
              ✨ Complete Solution
            </div>

            <div className="bg-card rounded-[calc(1.5rem-2px)] p-8 lg:p-12 border border-primary/10">
              {/* Product Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 rounded-2xl overflow-hidden bg-secondary/50 border border-border shadow-large"
              >
                <img
                  src={automationImage}
                  alt="AI Lead Follow-Up Automation"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-premium flex items-center justify-center shadow-cyan">
                  <Sparkles className="text-primary-foreground" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    AI Lead Follow-Up Automation
                  </h3>
                  <p className="text-muted-foreground mt-1">Done-for-you AI system that works 24/7</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="glass rounded-2xl p-8 mb-10 border border-primary/20">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Setup Fee */}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-medium">
                      <Settings size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">One-Time Setup</p>
                      <p className="text-4xl font-bold text-gradient-premium">$3,500</p>
                      <p className="text-xs text-muted-foreground mt-1">Custom build + integration</p>
                    </div>
                  </div>
                  {/* Monthly Fee */}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center flex-shrink-0 shadow-medium">
                      <Zap size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Then Monthly</p>
                      <p className="text-4xl font-bold text-gradient-premium">$2,000<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                      <p className="text-xs text-muted-foreground mt-1">Full automation + support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Setup Features */}
                <div>
                  <h4 className="font-bold text-foreground mb-6 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Settings size={16} className="text-primary" />
                    </div>
                    What's Included in Setup
                  </h4>
                  <ul className="space-y-4">
                    {setupFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft">
                          <Check size={14} className="text-primary-foreground" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ongoing Features */}
                <div>
                  <h4 className="font-bold text-foreground mb-6 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Sparkles size={16} className="text-primary" />
                    </div>
                    Ongoing Automation
                  </h4>
                  <ul className="space-y-4">
                    {ongoingFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft">
                          <Check size={14} className="text-primary-foreground" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-3 mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground font-medium">30-Day Money-Back Guarantee • No Long-Term Contracts</span>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full gradient-premium shadow-premium hover:shadow-glow text-primary-foreground font-semibold text-lg py-7 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Book a free strategy call to see if we're a fit
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
