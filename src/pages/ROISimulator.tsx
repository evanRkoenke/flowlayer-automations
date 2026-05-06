import { useState, useCallback } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, BarChart3, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SETUP_FEE = 3500;
const MONTHLY_RETAINER = 2000;
const ANNUAL_INVESTMENT = SETUP_FEE + MONTHLY_RETAINER * 12;

function fmt(n: number): string {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return "$" + Math.round(n).toLocaleString();
  return "$" + Math.round(n);
}

interface SliderRowProps {
  label: string;
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (val: number) => void;
}

const SliderRow = ({ label, min, max, step, value, display, onChange }: SliderRowProps) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
        <span className="text-base font-bold text-foreground">{display}</span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "hsl(222 30% 15%)" }}>
        <div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, hsl(187 85% 55%), hsl(217 91% 55%))",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ zIndex: 10 }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-primary shadow-cyan transition-transform hover:scale-110"
          style={{
            left: `calc(${pct}% - 10px)`,
            background: "linear-gradient(135deg, hsl(187 85% 60%), hsl(217 91% 55%))",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  color: "cyan" | "red" | "green" | "blue";
  delay: number;
}

const StatCard = ({ label, value, sub, icon: Icon, color, delay }: StatCardProps) => {
  const colors = {
    cyan: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/30", shadow: "shadow-cyan" },
    red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", shadow: "" },
    green: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", shadow: "" },
    blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", shadow: "" },
  };
  const c = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`card-premium p-6 border ${c.border} ${c.shadow}`}
    >
      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
        <Icon className={c.text} size={20} />
      </div>
      <div className={`text-2xl lg:text-3xl font-black ${c.text} mb-1`}>{value}</div>
      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </motion.div>
  );
};

const ROISimulator = () => {
  const [jobValue, setJobValue] = useState(15000);
  const [closeRate, setCloseRate] = useState(10);
  const [missedLeads, setMissedLeads] = useState(15);
  const [adminHours, setAdminHours] = useState(40);
  const [adminRate, setAdminRate] = useState(25);

  const calc = useCallback(() => {
    const cr = closeRate / 100;
    const lostRevenue = missedLeads * 12 * cr * jobValue;
    const timeWasted = adminHours * adminRate * 12;
    const totalLeakage = lostRevenue + timeWasted;
    const netGain = totalLeakage - ANNUAL_INVESTMENT;
    const roi = (netGain / ANNUAL_INVESTMENT) * 100;
    const breakevenJobs = ANNUAL_INVESTMENT / (jobValue * cr);
    const maxBar = Math.max(totalLeakage, ANNUAL_INVESTMENT, 1);
    return {
      lostRevenue,
      timeWasted,
      totalLeakage,
      netGain,
      roi: Math.max(0, roi),
      breakevenJobs: Math.ceil(breakevenJobs * 10) / 10,
      leakagePct: Math.min((totalLeakage / maxBar) * 100, 100),
      investmentPct: Math.min((ANNUAL_INVESTMENT / maxBar) * 100, 100),
      gainPct: netGain > 0 ? Math.min((netGain / maxBar) * 100, 100) : 0,
    };
  }, [jobValue, closeRate, missedLeads, adminHours, adminRate]);

  const r = calc();

  const reset = () => {
    setJobValue(15000);
    setCloseRate(10);
    setMissedLeads(15);
    setAdminHours(40);
    setAdminRate(25);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">

        {/* Hero */}
        <section className="relative overflow-hidden pb-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-glow-subtle text-primary text-sm font-semibold mb-8 uppercase tracking-wider">
                <Zap size={14} />
                Free ROI Calculator
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                How Much Is Your Business{" "}
                <span className="text-gradient-premium">Bleeding</span>{" "}
                Without Automation?
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Adjust the sliders below to see exactly how much revenue you're losing — and how fast Flowlayer AI pays for itself.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Simulator */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Lost Revenue" value={fmt(r.lostRevenue)} sub="Annual missed lead revenue" icon={TrendingUp} color="red" delay={0} />
            <StatCard label="Time Wasted" value={fmt(r.timeWasted)} sub="Annual admin cost" icon={Clock} color="blue" delay={0.1} />
            <StatCard label="Total Leakage" value={fmt(r.totalLeakage)} sub="Revenue + time lost per year" icon={BarChart3} color="blue" delay={0.2} />
            <StatCard label="Potential ROI" value={`${Math.round(r.roi)}%`} sub="Return on investment" icon={DollarSign} color="cyan" delay={0.3} />
          </div>

          {/* Controls + Investment */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">

            {/* Sliders */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-premium p-8"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1 h-5 rounded-full gradient-premium" />
                <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Your Business Metrics</h2>
              </div>

              <SliderRow label="Average Job Value" id="jobValue" min={1000} max={50000} step={500} value={jobValue} display={`$${jobValue.toLocaleString()}`} onChange={setJobValue} />
              <SliderRow label="Close Rate" id="closeRate" min={5} max={80} step={5} value={closeRate} display={`${closeRate}%`} onChange={setCloseRate} />
              <SliderRow label="Monthly Missed Leads" id="missedLeads" min={1} max={100} step={1} value={missedLeads} display={`${missedLeads}`} onChange={setMissedLeads} />
              <SliderRow label="Monthly Admin Hours Wasted" id="adminHours" min={1} max={160} step={1} value={adminHours} display={`${adminHours} hrs`} onChange={setAdminHours} />
              <SliderRow label="Admin Hourly Rate" id="adminRate" min={10} max={100} step={5} value={adminRate} display={`$${adminRate}/hr`} onChange={setAdminRate} />

              <button
                onClick={reset}
                className="w-full mt-2 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border rounded-xl hover:border-primary/30 hover:text-primary transition-all"
              >
                ↺ Reset to Defaults
              </button>
            </motion.div>

            {/* Investment Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-premium p-8"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1 h-5 rounded-full gradient-premium" />
                <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Flowlayer AI Investment</h2>
              </div>

              {[
                { label: "One-Time Setup Fee", value: "$3,500" },
                { label: "Monthly Retainer", value: "$2,000 / mo" },
                { label: "Annual Retainer", value: "$24,000" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-bold text-foreground">{row.value}</span>
                </div>
              ))}

              <div className="mt-4 space-y-2">
                {["AI Voice Receptionist", "Roofing Lead Tracker", "Expense Tracker", "Full Setup by Flowlayer"].map((item) => (
                  <div key={item} className="flex justify-between items-center py-2.5 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{item}</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      Included
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-primary/20">
                <span className="text-base font-bold text-foreground">Year 1 Total</span>
                <span className="text-2xl font-black text-primary">$27,500</span>
              </div>
            </motion.div>
          </div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-premium p-8 mb-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-5 rounded-full gradient-premium" />
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Financial Impact Comparison</h2>
            </div>

            {[
              { label: "Current Annual Leakage", value: fmt(r.totalLeakage), pct: r.leakagePct, color: "from-red-600 to-red-400", shadow: "shadow-[0_0_16px_rgba(239,68,68,0.4)]" },
              { label: "Flowlayer AI Year 1 Investment", value: "$27,500", pct: r.investmentPct, color: "from-blue-600 to-primary", shadow: "shadow-[0_0_16px_rgba(79,142,247,0.4)]" },
              { label: "Net Annual Gain With Flowlayer AI", value: r.netGain > 0 ? fmt(r.netGain) : "$0", pct: r.gainPct, color: "from-emerald-600 to-emerald-400", shadow: "shadow-[0_0_16px_rgba(52,211,153,0.4)]" },
            ].map((bar) => (
              <div key={bar.label} className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground font-medium">{bar.label}</span>
                  <span className="font-bold text-foreground">{bar.value}</span>
                </div>
                <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${bar.color} ${bar.shadow}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.pct}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="absolute top-1 left-2 right-2 h-1 bg-white/20 rounded-full" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Breakeven */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-premium p-10 mb-6 text-center border-glow-subtle relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/3 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
            <div className="relative">
              <span className="inline-block px-4 py-2 rounded-full glass border-glow-subtle text-primary text-xs font-bold mb-4 uppercase tracking-widest">
                Break-Even Point
              </span>
              <div className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                <span className="text-gradient-premium">{r.breakevenJobs} jobs</span> saved per year
              </div>
              <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                At ${jobValue.toLocaleString()} per job and a {closeRate}% close rate, saving just{" "}
                <strong className="text-foreground">{r.breakevenJobs} jobs per year</strong> covers your entire
                Flowlayer AI investment.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative overflow-hidden rounded-2xl text-center py-16 px-8"
          >
            <div className="absolute inset-0 gradient-premium" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Ready to Stop Bleeding Revenue?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Flowlayer AI sets up your full automation system in under 1 hour — AI voice receptionist, lead tracker, and expense tracker all running on autopilot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://calendly.com/evankoenke/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-flow-navy-900 hover:bg-white/90 shadow-large text-lg px-10 py-7 font-bold group">
                    Book Your Free Call
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </a>
                <a href="mailto:evankoenke@gmail.com">
                  <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 text-lg px-10 py-7 font-semibold">
                    Contact Sales
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />Evan Koenke</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />(941) 284-1742</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />flowlayerai.com</span>
              </div>
            </div>
          </motion.div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ROISimulator;
