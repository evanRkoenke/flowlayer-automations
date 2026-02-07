import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, RotateCcw, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/use-chat";
import ReactMarkdown from "react-markdown";

const QUICK_PROMPTS = [
  "What does FlowLayer AI do?",
  "How much does it cost?",
  "How fast can we launch?",
  "Book a free call",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-premium shadow-premium hover:shadow-glow flex items-center justify-center transition-shadow group"
            aria-label="Open chat assistant"
          >
            <MessageCircle className="w-7 h-7 text-primary-foreground" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-4rem)] flex flex-col rounded-3xl overflow-hidden border border-border shadow-premium"
            style={{
              background: "hsl(222 47% 6% / 0.98)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-premium flex items-center justify-center shadow-medium">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">FlowLayer AI</h3>
                  <p className="text-xs text-primary flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    Online now
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearMessages}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                    aria-label="Clear chat"
                    title="New conversation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg gradient-premium flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-card border border-border rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                      <p className="text-foreground text-sm leading-relaxed">
                        Hey there! 👋 I'm FlowLayer's AI assistant. I can help you learn about our automation services, pricing, or anything else. What can I help with?
                      </p>
                    </div>
                  </div>

                  {/* Quick prompts */}
                  <div className="flex flex-wrap gap-2 pl-11">
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleQuickPrompt(prompt)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Chat messages */}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      msg.role === "assistant"
                        ? "gradient-premium shadow-soft"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "gradient-premium text-primary-foreground rounded-2xl rounded-tr-md"
                        : "bg-card border border-border text-foreground rounded-2xl rounded-tl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0 [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground [&_code]:text-primary [&_code]:bg-primary/10 [&_code]:px-1 [&_code]:rounded">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg gradient-premium flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft">
                    <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2 inline-block">
                    {error}
                  </p>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="px-4 pb-4 pt-2 border-t border-border bg-card/40">
              <div className="flex items-center gap-2 bg-secondary/50 border border-border rounded-2xl px-4 py-2 focus-within:border-primary/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-foreground text-sm placeholder:text-muted-foreground outline-none disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-xl gradient-premium flex items-center justify-center text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-medium transition-shadow flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 text-center mt-2">
                Powered by FlowLayer AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
