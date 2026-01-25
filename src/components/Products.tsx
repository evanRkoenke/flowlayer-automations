import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Settings } from "lucide-react";
import automationImage from "@/assets/ai-lead-follow-up-automation.png";
import setupImage from "@/assets/ai-lead-follow-up-setup.png";

const Products = () => {
  const products = [
    {
      icon: Sparkles,
      title: "AI Lead Follow-Up Automation",
      description:
        "Automate your sales outreach, nurture leads, and close more deals with intelligent AI workflows.",
      price: "$2,000",
      priceType: "recurring",
      priceLabel: "/month",
      image: automationImage,
      features: [
        "Automated lead nurturing sequences",
        "AI-powered response generation",
        "Multi-channel outreach (Email, SMS, Voice)",
        "Real-time analytics dashboard",
        "CRM integration",
        "24/7 lead engagement",
      ],
      popular: true,
    },
    {
      icon: Settings,
      title: "AI Lead Follow-Up Automation Setup",
      description:
        "Get fully set up with personalized automation for your business and start seeing results immediately.",
      price: "$3,500",
      priceType: "one-time",
      priceLabel: "one-time",
      image: setupImage,
      features: [
        "Custom workflow design",
        "Full system configuration",
        "CRM & tool integrations",
        "Personalized AI training",
        "Team onboarding session",
        "30-day support included",
      ],
      popular: false,
    },
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
            Choose Your <span className="text-gradient">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want ongoing automation or a complete setup, we have the perfect solution for your business.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-1 ${
                product.popular
                  ? "bg-gradient-to-b from-primary/50 to-primary/10"
                  : "bg-border"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="bg-card rounded-[calc(1.5rem-4px)] p-6 lg:p-8 h-full flex flex-col">
                {/* Product Image */}
                <div className="mb-6 rounded-xl overflow-hidden bg-accent/50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <product.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {product.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-muted-foreground">{product.priceLabel}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  className={`w-full ${
                    product.popular
                      ? "gradient-primary shadow-medium hover:shadow-large"
                      : ""
                  }`}
                  variant={product.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
