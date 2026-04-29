# FlowLayer AI

**FlowLayer AI** is a high-performance automation agency for local service contractors — solar installers, roofers, HVAC, plumbing, electrical, and home-services operators who can't afford to miss a lead.

We build done-for-you AI lead follow-up systems that run 24/7 on autopilot, qualify inbound leads in seconds, and hand off hot opportunities to the sales team while they're still warm.

- **Website:** [flowlayerai.com](https://flowlayerai.com)
- **Founder:** Evan Koenke — Sarasota, FL
- **Book a call:** [calendly.com/evankoenke/30min](https://calendly.com/evankoenke/30min)

---

## What's in this repo

```
flowlayer-automations/
├── src/                       # Vite + React + TypeScript marketing site
│   ├── components/            # Hero, Features, Pricing, FAQ, Chatbot, etc.
│   ├── pages/                 # Index, Blog, BlogPost, NotFound
│   ├── integrations/supabase/ # Supabase client (chat assistant)
│   └── config/site.ts         # Brand + domain config
├── supabase/functions/chat/   # Edge function backing the on-site chatbot
├── workflows/            # Live n8n workflow JSON exports
│   ├── PROD_Receipt_Engine.json
│   └── PROD_Solar_Lead_Engine.json
├── DEPLOYMENT_KEYS.md         # Wiring diagram: forms → n8n webhooks
└── public/                    # Static assets
```

The marketing site deploys to **Vercel** at flowlayerai.com. The AI workflows in `workflows/` run on a self-hosted **n8n** instance and are triggered via POST webhooks from the website forms.

---

## Local development

Requires **Node 18+** (or Bun) and npm.

```sh
git clone https://github.com/evanRkoenke/flowlayer-automations.git
cd flowlayer-automations
npm install
cp .env.example .env   # fill in Supabase + webhook URLs
npm run dev            # http://localhost:8080
```

Other scripts:

```sh
npm run build       # production build
npm run preview     # serve the production build locally
npm run lint        # eslint
npm test            # vitest
```

---

## Deployment

The site is deployed to **Vercel** with the `flowlayerai.com` apex domain.

1. Push to `main` → Vercel auto-builds.
2. Environment variables are set in the Vercel dashboard (see `DEPLOYMENT_KEYS.md`).
3. The n8n production workflows live on the n8n host; their webhook URLs are wired into the site through the `VITE_*_WEBHOOK_URL` env vars.

See **`DEPLOYMENT_KEYS.md`** for the full wiring diagram between the website forms and the AI workflows.

---

## Stack

- **Frontend:** Vite, React 18, TypeScript, Tailwind CSS, shadcn-ui, Framer Motion
- **Backend:** Supabase (auth + edge function chatbot)
- **Automation:** n8n (POST-webhook-triggered AI workflows)
- **Hosting:** Vercel (web), self-hosted n8n (workflows)

---

## License

Proprietary © FlowLayer AI. All rights reserved.
