/* Tools catalogue. Prices from vendor pages (✓) or third-party reviews (verify before relying on them). */
export type Kind = "free" | "freemium" | "paid" | "oss";
/** [name, url, price, kind, description, verifiedOnVendorPage] */
export type Tool = [string, string, string, Kind, string, boolean?];
export type ToolGroup = { id: string; name: string; desc: string; tools: Tool[] };

export const TOOL_GROUPS: ToolGroup[] = [
  { id: "schedule", name: "Scheduling & publishing", desc: "Plan and publish posts in batches.", tools: [
    ["Meta Business Suite", "https://business.facebook.com/", "Free", "free", "Facebook + Instagram scheduling, inbox and insights"],
    ["Buffer", "https://buffer.com/pricing", "Free (3 channels) · from $5/channel/mo", "freemium", "Simple multi-platform scheduler", true],
    ["Metricool", "https://metricool.com/pricing/", "Free plan (1 brand)", "freemium", "Scheduling + analytics; free plan excludes LinkedIn and X"],
    ["Publer", "https://publer.com/plans", "Free (3 accounts)", "freemium", "Scheduler with recycling and AI assist"],
    ["Later", "https://later.com/pricing/", "From ~$25/mo", "paid", "Visual planner, strong for Instagram and TikTok"],
    ["Hootsuite", "https://www.hootsuite.com/plans", "From $99/user/mo (annual)", "paid", "Team scheduling, listening and approvals", true],
    ["Sprout Social", "https://sproutsocial.com/pricing/", "Premium", "paid", "Enterprise management, listening and reporting"],
    ["Postiz", "https://github.com/gitroomhq/postiz-app", "Open-source", "oss", "Self-hosted social scheduler"],
    ["Mixpost", "https://github.com/inovector/mixpost", "Open-source", "oss", "Self-hosted Buffer alternative"],
  ]},
  { id: "automation", name: "Automation", desc: "Connect apps and remove busywork.", tools: [
    ["Zapier", "https://zapier.com/pricing", "Free (100 tasks/mo) · from $19.99/mo", "freemium", "Easiest no-code automation", true],
    ["Make", "https://www.make.com/en/pricing", "Free (1,000 credits/mo) · Core $9/mo", "freemium", "Visual automation with more control"],
    ["n8n", "https://n8n.io/pricing/", "Free self-hosted · Cloud from €20/mo", "oss", "Open-source automation with AI agent nodes"],
    ["ManyChat", "https://manychat.com/pricing", "Pro from $29/mo (annual)", "freemium", "Instagram, Messenger and WhatsApp DM flows (official APIs)", true],
  ]},
  { id: "video", name: "Video editing & clipping", desc: "Edit, caption and clip videos.", tools: [
    ["CapCut", "https://www.capcut.com/", "Free · Pro varies by region", "freemium", "Mobile and desktop short-form editor"],
    ["DaVinci Resolve", "https://www.blackmagicdesign.com/products/davinciresolve", "Free · Studio one-time purchase", "freemium", "Professional editing, free version is powerful"],
    ["Descript", "https://www.descript.com/pricing", "Free (1 hr/mo) · from ~$16/mo", "freemium", "Edit video by editing text"],
    ["OpusClip", "https://www.opus.pro/pricing", "Free credits · from ~$15/mo", "freemium", "AI clips from long videos"],
    ["Adobe Premiere Pro", "https://www.adobe.com/products/premiere.html", "Subscription", "paid", "Industry-standard editor"],
  ]},
  { id: "design", name: "Design & thumbnails", desc: "Graphics, carousels and thumbnails.", tools: [
    ["Canva", "https://www.canva.com/pricing/", "Free · Pro ~$120/yr", "freemium", "Templates for every platform"],
    ["Adobe Express", "https://www.adobe.com/express/", "Free tier", "freemium", "Quick graphics and short videos"],
    ["Midjourney", "https://www.midjourney.com/", "Paid only", "paid", "AI images (label realistic AI)"],
  ]},
  { id: "ai", name: "AI writing, voice & avatars", desc: "Research, scripts, captions, voice and translation.", tools: [
    ["Claude", "https://claude.ai/", "Free tier · paid plans", "freemium", "Research, scripts and editing"],
    ["ChatGPT", "https://chatgpt.com/", "Free tier · paid plans", "freemium", "Ideas, scripts and captions"],
    ["Gemini", "https://gemini.google.com/", "Free tier · paid plans", "freemium", "Research with Google tools"],
    ["ElevenLabs", "https://elevenlabs.io/pricing", "Free (no commercial use) · from ~$6/mo", "freemium", "AI voice and dubbing (get consent)"],
    ["HeyGen", "https://www.heygen.com/pricing", "Free tier · paid plans", "freemium", "AI avatars and video translation (label it)"],
  ]},
  { id: "analytics", name: "Analytics & listening", desc: "Measure results and track conversations.", tools: [
    ["Looker Studio", "https://lookerstudio.google.com/", "Free", "free", "Free dashboards from many data sources"],
    ["Google Alerts", "https://www.google.com/alerts", "Free", "free", "Email alerts for brand mentions"],
    ["Brand24", "https://brand24.com/", "Paid", "paid", "Social listening and sentiment"],
  ]},
  { id: "sell", name: "Sell & get paid", desc: "Products, newsletters, shops and payments.", tools: [
    ["Gumroad", "https://gumroad.com/", "Fee per sale", "freemium", "Sell digital products"],
    ["Substack", "https://substack.com/", "Free · % of paid subs", "freemium", "Newsletters with paid tiers"],
    ["beehiiv", "https://www.beehiiv.com/", "Free plan", "freemium", "Newsletter with ad network"],
    ["TikTok Shop", "https://seller-us.tiktok.com/", "Commission per sale", "freemium", "Sell and earn affiliate commission in TikTok"],
    ["Kajabi", "https://kajabi.com/", "Paid", "paid", "Courses, communities and coaching"],
  ]},
];

export const KIND_LABEL: Record<Kind, string> = { free: "Free", freemium: "Free to start", paid: "Paid", oss: "Free · open-source" };
