/* Job tracks. Pay figures are US government medians for the closest occupation (BLS, May 2024 data); verify on the linked page.
   Social media titles vary widely on job boards, so treat these as a benchmark, not a promise. */
export type Role = {
  id: string; role: string; day: string[]; skills: string[]; pay: string; payUrl: string;
  path: [string, string, string][]; // [course, url, cost]
  starter: string;
};

const HUB: [string, string, string] = ["HubSpot Social Media Marketing certificate", "https://academy.hubspot.com/courses/social-media", "Free"];
const META: [string, string, string] = ["Meta Blueprint courses", "https://www.facebook.com/business/learn", "Free"];
const SKILL: [string, string, string] = ["Google Skillshop (Ads + Analytics)", "https://skillshop.withgoogle.com/", "Free"];

export const ROLES: Role[] = [
  { id: "smm", role: "Social Media Manager", day: ["Plan the content calendar", "Publish and reply", "Report results", "Align with the team or client"],
    skills: ["Strategy", "Copywriting", "Analytics", "Scheduling tools"], pay: "Closest BLS benchmark: public relations specialists", payUrl: "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
    path: [HUB, META, ["LinkedIn Marketing Labs", "https://training.marketing.linkedin.com/", "Free"], SKILL, ["Hootsuite Social Marketing Certification", "https://education.hootsuite.com/", "~$199 (verify)"]],
    starter: "Run social for one local business for free for 60 days and document results." },
  { id: "creator", role: "Content Creator / Influencer", day: ["Find ideas", "Film and edit", "Engage the community", "Pitch and deliver brand deals"],
    skills: ["On-camera skills", "Editing", "Storytelling", "Negotiation"], pay: "No BLS category; income is highly uneven (about 4% of creators earn over $100K, Goldman Sachs)", payUrl: "https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027",
    path: [["TikTok Creator Academy", "https://www.tiktok.com/creator-academy", "Free"], ["YouTube Creators hub", "https://www.youtube.com/creators/", "Free"], HUB, ["Canva Design School", "https://www.canva.com/designschool/", "Free"]],
    starter: "Post 30 videos in 30 days in one niche and track retention." },
  { id: "editor", role: "Short-form Video Editor", day: ["Cut raw footage", "Add captions and hooks", "Make versions per platform", "Deliver on deadline"],
    skills: ["CapCut / Premiere / Resolve", "Pacing", "Captions", "Thumbnails"], pay: "BLS: film and video editors", payUrl: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm",
    path: [["DaVinci Resolve training", "https://www.blackmagicdesign.com/products/davinciresolve/training", "Free"], ["Canva Design School", "https://www.canva.com/designschool/", "Free"], ["TikTok Creator Academy", "https://www.tiktok.com/creator-academy", "Free"]],
    starter: "Re-edit 5 long podcasts into shorts and use them as your portfolio." },
  { id: "community", role: "Community Manager", day: ["Moderate and reply", "Run events and lives", "Spot issues early", "Share feedback with the team"],
    skills: ["Empathy", "Moderation policy", "Writing", "Discord / groups"], pay: "Closest BLS benchmark: public relations specialists", payUrl: "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
    path: [HUB, ["Discord Community Guidelines", "https://discord.com/guidelines", "Free"], ["Phishing Quiz", "https://phishingquiz.withgoogle.com/", "Free"]],
    starter: "Moderate a niche Discord or Facebook group and grow weekly activity." },
  { id: "paid", role: "Paid Social / Performance Marketer", day: ["Build campaigns", "Test creatives", "Watch CPA and ROAS", "Report spend and results"],
    skills: ["Ads Manager", "Tracking (pixels)", "Testing", "Spreadsheets"], pay: "BLS: advertising, promotions and marketing managers (senior)", payUrl: "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
    path: [META, ["TikTok Academy", "https://ads.tiktok.com/business/en/academy", "Free"], SKILL, ["Meta Certified Media Buying Professional", "https://www.facebook.com/business/learn/certification", "~$150 (verify)"]],
    starter: "Run a $5/day test for a friend's business and write up the results." },
  { id: "influencer-mgr", role: "Influencer Marketing Manager", day: ["Find and vet creators", "Negotiate contracts", "Check disclosures", "Measure campaign ROI"],
    skills: ["Negotiation", "FTC rules", "Creator vetting", "Reporting"], pay: "BLS: advertising, promotions and marketing managers", payUrl: "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
    path: [HUB, ["FTC Disclosures 101", "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers", "Free"], META],
    starter: "Plan a 5-creator campaign for a local brand with a written brief." },
  { id: "analyst", role: "Social Media Analyst", day: ["Build dashboards", "Run social listening", "Find insights", "Present recommendations"],
    skills: ["Spreadsheets / SQL", "Looker Studio", "Statistics basics", "Storytelling with data"], pay: "BLS: market research analysts", payUrl: "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
    path: [SKILL, ["Looker Studio", "https://lookerstudio.google.com/", "Free"], ["Semrush Academy", "https://www.semrush.com/academy/", "Free"], ["Google Digital Marketing & E-commerce Certificate", "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce", "Coursera subscription"]],
    starter: "Build a public dashboard comparing 5 brands in one niche." },
  { id: "ugc", role: "UGC Creator", day: ["Read brand briefs", "Script and film", "Edit raw and finished versions", "Invoice and follow up"],
    skills: ["Filming on a phone", "Scripting", "Lighting and sound", "Client communication"], pay: "Freelance; per-video pricing (no BLS category)", payUrl: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers",
    path: [["TikTok Creator Academy", "https://www.tiktok.com/creator-academy", "Free"], ["Canva Design School", "https://www.canva.com/designschool/", "Free"], HUB],
    starter: "Make 3 sample ads for products you own and build a one-page portfolio." },
  { id: "copy", role: "Social Copywriter", day: ["Write captions and scripts", "Write ad copy variations", "Edit for brand voice"],
    skills: ["Copy frameworks (AIDA, PAS)", "Brand voice", "Research", "Editing"], pay: "BLS: writers and authors", payUrl: "https://www.bls.gov/ooh/media-and-communication/writers-and-authors.htm",
    path: [HUB, ["HubSpot Content Marketing", "https://academy.hubspot.com/", "Free"], ["Semrush Academy", "https://www.semrush.com/academy/", "Free"]],
    starter: "Rewrite 10 real ads and explain why your versions should perform better." },
  { id: "automation", role: "Social Media Automation Specialist", day: ["Build Zapier/Make/n8n flows", "Connect official APIs", "Monitor failures", "Document for clients"],
    skills: ["APIs and JSON", "No-code tools", "Platform policies", "Troubleshooting"], pay: "Closest BLS benchmark: web developers", payUrl: "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
    path: [["Zapier Learn", "https://zapier.com/learn", "Free"], ["n8n docs", "https://docs.n8n.io/", "Free"], ["Instagram content publishing API", "https://developers.facebook.com/docs/instagram-platform/content-publishing", "Free"]],
    starter: "Automate a weekly report and post-approval flow for one client." },
  { id: "trust-safety", role: "Trust & Safety / Security Awareness Specialist", day: ["Review scam and abuse reports", "Write policies", "Train teams", "Run phishing drills (with consent)"],
    skills: ["Investigations", "Policy writing", "Security basics", "Clear communication"], pay: "BLS: information security analysts", payUrl: "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
    path: [["CISA Secure Our World", "https://www.cisa.gov/secure-our-world", "Free"], ["SANS OUCH! newsletter", "https://www.sans.org/newsletters/ouch/", "Free"], ["KnowBe4 free tools", "https://www.knowbe4.com/free-cybersecurity-tools", "Free"], ["CompTIA Security+", "https://www.comptia.org/certifications/security", "Paid exam"]],
    starter: "Write a 1-page account security playbook for a small business." },
];
