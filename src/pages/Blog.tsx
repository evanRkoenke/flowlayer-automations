import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "why-businesses-bleed-leads",
    title: "Why Most Businesses Bleed Leads (And How Smart Automation Stops It)",
    excerpt: "Here's a painful truth: right now, someone who could become your best customer is slipping through your fingers. Not because they don't want what you're selling, but because by the time you follow up, they've already moved on.",
    author: "FlowLayer AI",
    date: "January 26, 2026",
    readTime: "8 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert strategies on AI automation, lead conversion, and scaling your business.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card rounded-2xl border border-border p-8 hover:shadow-cyan hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
