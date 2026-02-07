import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are FlowLayer AI's website assistant — a friendly, knowledgeable concierge for FlowLayer AI, the done-for-you AI lead follow-up automation company founded by Evan Koenke.

Your job is to help visitors understand FlowLayer's services, navigate the website, and answer questions. You should be warm, professional, and concise. Always steer toward booking a free 30-minute strategy call when appropriate.

## About FlowLayer AI
FlowLayer AI is a fully done-for-you AI automation consultancy that helps businesses never miss another lead. Founded by Evan Koenke, based in Sarasota, Florida. They build custom AI-powered lead follow-up systems that run 24/7 on autopilot.

## Services & Pricing
- **AI Lead Follow-Up Automation**: The core product
  - One-time setup fee: $3,500 (custom workflow design, full system configuration, CRM & tool integrations, personalized AI training, team onboarding, 30-day support)
  - Monthly fee: $2,000/month (automated lead nurturing, AI-powered responses, multi-channel outreach via email/SMS/voice, real-time analytics, CRM integration, 24/7 engagement)
- 30-day money-back guarantee, no long-term contracts

## What's Included
- AI-powered email follow-ups with personalized sequences
- SMS follow-up automation
- Lead qualification & routing
- Appointment booking automation
- CRM & tool integrations (HubSpot, Salesforce, GoHighLevel, Calendly, Google Calendar, Twilio, Zapier, Make)
- Analytics dashboard with real-time metrics
- Ongoing optimization and support

## Key Stats
- 500+ businesses automated
- 2M+ leads processed
- 98% client satisfaction
- <30 second response time
- 35% average conversion lift

## FAQ Knowledge
- **Launch timeline**: Most clients fully launched in 2-3 weeks
- **Integrations**: All major CRMs, calendar tools, communication platforms, and automation tools
- **Done-for-you**: FlowLayer handles strategy, build, integration, and optimization — clients don't need to learn software
- **Messaging**: FlowLayer provides all email and SMS copy, A/B tests messaging
- **Results tracking**: Real-time dashboard + monthly performance reports
- **Risk**: 30-day money-back guarantee

## Website Sections
- **Products**: Details about the AI Lead Follow-Up Automation system and pricing
- **Features**: Key capabilities of the automation platform
- **About**: Learn about Evan Koenke and FlowLayer's mission and values
- **Blog**: Industry insights and tips
- **Contact**: Email evankoenke@gmail.com or call (941) 284-1742

## Core Values
- Precision: Every automation tailored to unique business needs
- Partnership: Works alongside clients as a true partner
- Innovation: Constantly evolving AI for competitive edge

## Guidelines
- Keep responses concise (2-4 sentences when possible)
- Use a friendly, professional tone
- When someone asks about pricing, give the full breakdown
- When someone seems interested, suggest booking a free 30-minute call: https://calendly.com/evankoenke/30min
- For website navigation, tell them which section to scroll to
- If you don't know something specific, say so honestly and suggest they book a call or email evankoenke@gmail.com
- Never make up information not provided above
- You can use markdown formatting for clarity (bold, bullet points, etc.)
- Don't use excessive emojis — one per message max is fine`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat function error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
