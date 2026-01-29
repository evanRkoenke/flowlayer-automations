import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Settings } from "lucide-react";
import automationImage from "@/assets/ai-lead-follow-up-automation.png";
import flowlayerLogo from "@/assets/flowlayer-logo.png";

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
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete AI Lead <span className="text-gradient">Automation Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get fully set up with personalized automation and ongoing AI-powered lead management to grow your business.
          </p>
        </motion.div>

        {/* Single Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-primary/50 to-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-medium">
              Complete Solution
            </div>

            <div className="bg-card rounded-[calc(1.5rem-1px)] p-6 lg:p-8 border border-primary/20">
              {/* Product Image */}
              <div className="mb-6 rounded-xl overflow-hidden bg-secondary border border-border">
                <img
                  src={automationImage}
                  alt="AI Lead Follow-Up Automation"
                  className="w-full h-auto"
                />
              </div>

              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft overflow-hidden">
                  <img src={flowlayerLogo} alt="FlowLayer AI" className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  AI Lead Follow-Up Automation
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8">
                Get a complete, done-for-you AI automation system that nurtures your leads 24/7 and closes more deals on autopilot.
              </p>

              {/* Pricing */}
              <div className="bg-secondary/50 rounded-2xl p-6 mb-8 border border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Setup Fee */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Settings size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">One-Time Setup</p>
                      <p className="text-2xl font-bold text-gradient">$3,500</p>
                    </div>
                  </div>
                  {/* Monthly Fee */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Then Monthly</p>
                      <p className="text-2xl font-bold text-gradient">$2,000<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Setup Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Settings size={18} className="text-primary" />
                    What's Included in Setup
                  </h4>
                  <ul className="space-y-3">
                    {setupFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ongoing Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-primary" />
                    Ongoing Automation
                  </h4>
                  <ul className="space-y-3">
                    {ongoingFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full gradient-primary shadow-cyan hover:shadow-large text-primary-foreground font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Start with a $3,500 setup fee, then $2,000/month for ongoing automation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
