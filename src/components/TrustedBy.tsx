import { motion } from "framer-motion";

const companies = [
  "Forbes",
  "TechCrunch", 
  "Fast Company",
  "Inc. 500",
  "Entrepreneur",
  "Business Insider",
  "Bloomberg",
  "Wall Street Journal",
];

const TrustedBy = () => {
  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium"
        >
          Featured in leading publications
        </motion.p>
        
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="text-xl lg:text-2xl font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-300 cursor-default"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
