import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Most clients are fully launched within 2-3 weeks. This includes our discovery call, custom automation build, integration with your existing tools, and thorough testing before going live.",
  },
  {
    question: "What tools do you integrate with?",
    answer: "We integrate with all major CRMs (HubSpot, Salesforce, GoHighLevel), calendar tools (Calendly, Google Calendar), communication platforms (Twilio, email providers), and automation tools (Zapier, Make). If you use it, we can likely connect to it.",
  },
  {
    question: "Is this done-for-you or software only?",
    answer: "FlowLayer AI is a fully done-for-you service. We handle the strategy, build, integration, and ongoing optimization. You don't need to learn any software or build anything yourself—we do all the heavy lifting.",
  },
  {
    question: "Do you provide the messaging?",
    answer: "Yes! Our team crafts all email and SMS copy based on your brand voice and proven conversion frameworks. We A/B test messaging and continuously optimize for better results.",
  },
  {
    question: "How do we measure results?",
    answer: "You get access to a real-time dashboard showing key metrics: response rates, conversion rates, appointments booked, and revenue attributed to automation. We also provide monthly performance reports with optimization recommendations.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "We offer a 30-day money-back guarantee. If you're not seeing measurable improvements in your lead follow-up within the first 30 days, we'll refund your setup fee—no questions asked.",
  },
];

const FAQ = () => {
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
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-premium">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting started with FlowLayer AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl border border-border px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-cyan transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary py-6 transition-colors font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
