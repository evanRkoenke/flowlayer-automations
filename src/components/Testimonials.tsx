import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Home Services",
    content: "Before FlowLayer, we were losing 40% of our leads to slow follow-up. Now every lead gets contacted within seconds. Our conversion rate jumped 35% in the first month.",
    rating: 5,
    metric: "+35% conversions",
  },
  {
    name: "David Chen",
    role: "CEO, Apex Marketing Agency",
    content: "The ROI was immediate. We're booking 3x more demos without adding staff. The AI handles the initial outreach perfectly, and my team only talks to qualified prospects.",
    rating: 5,
    metric: "3x more demos",
  },
  {
    name: "Jennifer Rodriguez",
    role: "Director, Coastal Medical Practice",
    content: "Our no-show rate dropped by 60% with automated appointment reminders. The system pays for itself every month just in recovered appointments.",
    rating: 5,
    metric: "-60% no-shows",
  },
];

const Testimonials = () => {
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
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results From{" "}
            <span className="text-gradient-premium">Real Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses like yours stopped losing leads and started growing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium p-8 relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Metric badge */}
              <div className="inline-block px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-bold mb-6 shadow-medium">
                {testimonial.metric}
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border/50 pt-6">
                <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
