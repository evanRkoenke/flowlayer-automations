import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Home Services",
    content: "Before FlowLayer, we were losing 40% of our leads to slow follow-up. Now every lead gets contacted within seconds. Our conversion rate jumped 35% in the first month.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, Apex Marketing Agency",
    content: "The ROI was immediate. We're booking 3x more demos without adding staff. The AI handles the initial outreach perfectly, and my team only talks to qualified prospects.",
    rating: 5,
  },
  {
    name: "Jennifer Rodriguez",
    role: "Director, Coastal Medical Practice",
    content: "Our no-show rate dropped by 60% with automated appointment reminders. The system pays for itself every month just in recovered appointments.",
    rating: 5,
  },
];

const Testimonials = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses that stopped bleeding leads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
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
