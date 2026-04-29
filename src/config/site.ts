export const siteConfig = {
  name: "FlowLayer AI",
  domain: "flowlayerai.com",
  url: "https://flowlayerai.com",
  description:
    "FlowLayer AI builds done-for-you AI lead follow-up automations for local service contractors.",
  contact: {
    email: "evankoenke@gmail.com",
    phone: "+19412841742",
    location: "Sarasota, Florida",
  },
} as const;

export type SiteConfig = typeof siteConfig;
