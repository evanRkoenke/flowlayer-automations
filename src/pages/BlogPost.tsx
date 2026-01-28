import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogContent = {
  "why-businesses-bleed-leads": {
    title: "Why Most Businesses Bleed Leads (And How Smart Automation Stops It)",
    author: "FlowLayer AI",
    date: "January 26, 2026",
    readTime: "8 min read",
    content: `
Here's a painful truth: right now, someone who could become your best customer is slipping through your fingers.

Not because they don't want what you're selling. Not because your competitor is better. But because by the time you follow up, they've already moved on.

## The Silent Killer of Revenue

Picture this: A lead fills out your form at 3 PM on a Tuesday. They're interested. Ready to buy. Maybe even excited.

Your sales rep sees the notification... eventually. Between meetings, lunch, and fifty other tasks. By the time they reach out Wednesday morning, that hot lead has gone cold. They've already talked to three competitors. The moment has passed.

This isn't a failure of effort. It's a failure of infrastructure.

**The brutal reality?** The average business takes 47 hours to follow up with a web lead. In that same timeframe, your prospect has already made a decision. Just not with you.

## Why Manual Follow-Up Is Losing You Money

Even your best salespeople can't:

- Respond to leads at 11 PM on a Sunday
- Remember to follow up exactly 3 days later with every prospect
- Personalize messages at scale without burning out
- Track which follow-up sequences actually work

They're juggling too much. And every dropped ball is revenue walking out the door.

The cost isn't just the lost sale. It's the wasted ad spend. The marketing dollars that generated a lead nobody captured. The compounding effect of hundreds of "almosts" that never converted.

## What If Every Lead Got Your Best Response, Every Time?

This is where AI follow-up automation fundamentally changes the equation.

Imagine: A lead comes in at 2 AM. Within 60 seconds, they receive a personalized text acknowledging their interest. By morning, a tailored email is waiting with exactly the information they need. Three days later, if they haven't responded, a strategic check-in lands in their inbox.

No human coordination required. No leads forgotten. No opportunities lost to timing.

**Here's what modern AI automation actually handles:**

- **Instant response** — Every lead gets contacted in seconds, not hours. When interest is highest.
- **Intelligent personalization** — Messages adapt based on lead source, interest level, and behavior. Not generic templates.
- **Perfect persistence** — The system knows exactly when to follow up, how many times, and when to stop (so you never seem desperate or spammy).
- **Seamless handoffs** — Hot leads get routed to the right salesperson instantly. Your team jumps in only when it matters.
- **Continuous optimization** — Track open rates, response rates, and conversions. Know what's working. Double down on it.

## The Numbers Don't Lie

Companies that contact leads within 5 minutes are **100x more likely** to connect than those who wait 30 minutes.

Businesses using automated follow-up see conversion rates jump by **30-50%** on average.

The difference? They're there when the prospect is ready. Every single time.

## Beyond Tools: Building a System That Actually Works

Here's what most businesses get wrong about automation: they bolt on a generic tool and expect magic.

Real results come from custom workflows designed around how your business actually sells.

At FlowLayer AI, we don't hand you software and wish you luck. We architect intelligent systems that:

- **Capture and qualify** — Automatically identify which leads deserve immediate attention
- **Communicate intelligently** — Send the right message, on the right channel, at the right time
- **Convert seamlessly** — Book appointments, answer questions, and move prospects forward without manual work
- **Deliver insights** — Show you exactly where leads convert and where they drop off

Your CRM, your lead sources, your sales process — everything works together as one unified machine.

## What This Actually Means for Your Business

Your sales team stops playing catch-up and starts having real conversations with qualified prospects who are actually ready to talk.

Your marketing dollars work harder because leads don't evaporate before someone reaches them.

Your revenue becomes more predictable because your follow-up process is consistent, measurable, and optimized.

## The Choice Is Simple

You can keep relying on spreadsheets, good intentions, and hoping your team remembers to follow up.

Or you can build a system where every lead gets your best shot. Automatically. Consistently. Profitably.

The businesses winning in 2026 aren't working harder. They're working smarter. They've stopped treating follow-up like a chore and started treating it like the revenue engine it actually is.

**AI-powered automation doesn't replace your sales team. It makes every person on it 10x more effective.**

And in a market where speed and consistency are everything, that's not just an advantage. It's survival.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Parse markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="space-y-2 my-6">
            {currentList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const parseInline = (text: string) => {
      return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl lg:text-3xl font-bold text-foreground mt-12 mb-6">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.replace('- ', ''));
      } else if (trimmed === '') {
        flushList();
      } else {
        flushList();
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed my-4 text-lg"
            dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="bg-card rounded-2xl border border-border hover:border-primary/30 p-8 text-center transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to stop the bleeding?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Schedule a demo with FlowLayer AI and we'll show you exactly how much revenue you're leaving on the table — and how to capture it.
              </p>
              <Button size="lg" className="gradient-primary shadow-cyan hover:shadow-large text-primary-foreground font-semibold">
                Schedule Your Demo
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No generic pitch. No cookie-cutter solution. Just a real conversation about building automation that actually fits your business.
              </p>
            </div>
          </motion.div>
        </article>
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default BlogPost;
