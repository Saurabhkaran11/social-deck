import type { Topic } from "./types";

/* Levels 4–8. */
export const TOPICS_B: Topic[] = [
  /* ---------------- Level 4: Audience psychology ---------------- */
  { id: "persuasion-principles", level: 4, title: "The 7 principles of persuasion", time: "40 min",
    simple: "Robert Cialdini's research shows people say yes because of reciprocity, commitment, social proof, authority, liking, scarcity and unity. Use them honestly.",
    why: "These principles explain why some posts and offers work and others are ignored.",
    steps: [
      "Reciprocity: give real value first (free tips, templates)",
      "Commitment: ask for small steps (save, comment, join the list) before big ones",
      "Social proof: share genuine results and testimonials, with permission",
      "Authority: show credentials and proof of work",
      "Liking and unity: be relatable and build a shared identity",
      "Scarcity: only when it's true (real deadlines, real stock)",
    ],
    free: [["The 7 principles of persuasion", "https://www.influenceatwork.com/7-principles-of-persuasion/", "Influence at Work · Free"]],
    paid: [["Influence, New and Expanded (book)", "https://www.influenceatwork.com/", "Robert Cialdini"]] },

  { id: "behavioral-economics", level: 4, title: "Behavioral economics in marketing", time: "35 min",
    simple: "People use mental shortcuts: anchoring on the first price, fearing losses more than wanting gains, and picking the default. Good marketing makes the right choice easy.",
    why: "Small changes in how you present offers can change results a lot.",
    steps: [
      "Anchoring: show the full value before the price",
      "Loss aversion: show what people miss by waiting, honestly",
      "Defaults: pre-select the option that's best for most customers",
      "Decoy effect: a middle package makes comparison easier",
      "Curiosity gap: open a question your content actually answers",
    ],
    free: [["Cognitive biases library", "https://thedecisionlab.com/biases", "The Decision Lab · Free"]] },

  { id: "dark-patterns", level: 4, title: "Where persuasion becomes manipulation", time: "30 min",
    simple: "Dark patterns trick people: fake countdown timers, fake reviews, hidden costs, guilt-tripping 'no thanks' buttons and subscription traps. They're unethical and often illegal.",
    why: "Regulators in the US and EU are acting on dark patterns, and audiences punish brands that trick them.",
    steps: [
      "Rule of thumb: if a tactic only works because people don't understand it, don't use it",
      "Make cancelling as easy as signing up",
      "Show the full price up front",
      "Never invent scarcity, reviews or 'people viewing now' counts",
      "Be extra careful with content and ads aimed at minors",
    ],
    free: [
      ["Bringing Dark Patterns to Light", "https://www.ftc.gov/reports/bringing-dark-patterns-light", "FTC staff report · 2022"],
      ["The Digital Services Act", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package", "European Commission"],
    ],
    watch: "The EU Digital Services Act bans dark-pattern design on online platforms and profiling-based ads to minors." },

  { id: "community-building", level: 4, title: "Build a community, not just an audience", time: "35 min",
    simple: "A community talks to each other, not just to you. Give people a shared identity, regular rituals and recognition.",
    why: "Communities buy more, churn less and defend your brand.",
    steps: [
      "Give your community a name and a clear 'who this is for'",
      "Run a weekly ritual: a live stream, a Q&A thread or a challenge",
      "Reply to comments in the first hour after posting",
      "Feature member content and wins",
      "Set clear rules and moderate consistently",
    ],
    free: [
      ["Discord Community Guidelines", "https://discord.com/guidelines", "Discord"],
      ["HubSpot Academy", "https://academy.hubspot.com/", "Free courses"],
    ] },

  /* ---------------- Level 5: Social media marketing ---------------- */
  { id: "smm-strategy", level: 5, title: "Social media marketing strategy", time: "1 hour",
    simple: "Set a goal, know your customer, choose platforms and content, measure results and adjust. Frameworks like SOSTAC and See-Think-Do-Care keep it simple.",
    why: "Strategy turns posting into customers.",
    steps: [
      "Write SMART goals (e.g. 30 leads a month from Instagram by March)",
      "Map your funnel: awareness → consideration → conversion → loyalty",
      "Match content pillars to each funnel stage",
      "Choose 2–3 metrics per stage",
      "Review monthly and reallocate time and budget",
    ],
    free: [
      ["Social Media Marketing certification", "https://academy.hubspot.com/courses/social-media", "HubSpot Academy · Free certificate"],
      ["Meta Blueprint courses", "https://www.facebook.com/business/learn", "Meta · Free"],
      ["Semrush Academy", "https://www.semrush.com/academy/", "Semrush · Free courses"],
    ],
    paid: [["Google Digital Marketing & E-commerce Certificate", "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce", "Coursera subscription"]],
    videos: [["HubSpot Marketing", "https://www.youtube.com/@HubSpotMarketing", "Official"], ["Neil Patel", "https://www.youtube.com/@neilpatel", "Marketing and SEO"]] },

  { id: "paid-social", level: 5, title: "Paid social ads", time: "1.5 hours",
    simple: "Ads on Meta, TikTok, LinkedIn and YouTube let you pay to reach exact audiences. Start small, boost what already works, and measure cost per result.",
    why: "Paid ads scale what organic proves.",
    steps: [
      "Install the Meta Pixel / Conversions API or TikTok Pixel to track results",
      "Pick one objective (leads or sales), one audience and 3 creatives",
      "Promote posts that already perform well organically or creator posts (Spark Ads, partnership ads)",
      "Start with a small daily budget and judge on CPA and ROAS, not likes",
      "Turn off losers, scale winners slowly",
    ],
    free: [
      ["Meta Blueprint", "https://www.facebook.com/business/learn", "Meta · Free courses"],
      ["TikTok Academy (ads)", "https://ads.tiktok.com/business/en/academy", "TikTok · Free"],
      ["Google Skillshop (YouTube & Google Ads)", "https://skillshop.withgoogle.com/", "Google · Free certifications"],
      ["LinkedIn Marketing Labs", "https://training.marketing.linkedin.com/", "LinkedIn · Free"],
    ],
    paid: [["Meta Certification exams", "https://www.facebook.com/business/learn/certification", "Associate ~$99, Professional ~$150 (verify)"]],
    videos: [["Ben Heath (Meta ads)", "https://www.youtube.com/@BenHeath", "Paid social"], ["Meta for Business", "https://www.youtube.com/@MetaforBusiness", "Official"], ["Google Ads", "https://www.youtube.com/@googleads", "Official"]],
    see: [["/calculators", "ROAS and CPA calculators"]] },

  { id: "influencer-marketing", level: 5, title: "Influencer and creator marketing", time: "45 min",
    simple: "Pay creators your customers already trust to make content about you. Micro creators often deliver better results per dollar than celebrities.",
    why: "Influencer marketing was worth about $32.55B in 2025 (Influencer Marketing Hub).",
    steps: [
      "Find creators whose audience matches your customers",
      "Check real engagement and audience location, not just follower count",
      "Write a clear brief, deliverables, usage rights and timeline in a contract",
      "Require clear #ad / Paid partnership disclosure",
      "Turn the best content into ads with Spark Ads or partnership ads",
    ],
    free: [
      ["Influencer Marketing Benchmark Report", "https://influencermarketinghub.com/influencer-marketing-benchmark-report/", "Influencer Marketing Hub"],
      ["TikTok Creator Marketplace / TikTok One", "https://ads.tiktok.com/business/en/academy", "TikTok"],
      ["FTC Disclosures 101", "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers", "FTC"],
    ],
    tips: ["Rough rule of thumb: $100–$500 per 10K followers per post, plus extra for usage rights and exclusivity. Prices vary a lot by niche."] },

  { id: "listening-social-seo", level: 5, title: "Social listening and social search", time: "35 min",
    simple: "Track what people say about you and your competitors, and use keywords so people find your content when they search on TikTok, YouTube, Instagram and Google.",
    why: "Younger audiences search on social apps, and Reddit and YouTube results appear in Google.",
    steps: [
      "Set up free Google Alerts and native platform searches for your brand and competitors",
      "Reply to mentions within hours",
      "Put keywords in captions, on-screen text and spoken audio",
      "Find questions people ask and answer them in content",
    ],
    free: [
      ["Google Alerts", "https://www.google.com/alerts", "Google · Free"],
      ["Semrush Academy", "https://www.semrush.com/academy/", "Free"],
    ],
    paid: [["Brand24", "https://brand24.com/", "Social listening"], ["Sprout Social", "https://sproutsocial.com/", "Listening + management"]] },

  /* ---------------- Level 6: Automation ---------------- */
  { id: "scheduling", level: 6, title: "Scheduling tools", time: "30 min",
    simple: "Schedule posts in advance so you can create in batches and post at the right times. Most tools have a free plan.",
    why: "Scheduling turns social media from a daily chore into a weekly task.",
    steps: [
      "Start with Meta Business Suite (free for Facebook and Instagram)",
      "Add a multi-platform tool: Buffer, Metricool or Publer free plans",
      "Batch-schedule one week of posts at a time",
      "Still reply to comments live; don't schedule and disappear",
    ],
    free: [
      ["Meta Business Suite", "https://business.facebook.com/", "Free"],
      ["Buffer", "https://buffer.com/pricing", "Free: 3 channels, 10 scheduled posts each"],
      ["Metricool", "https://metricool.com/pricing/", "Free plan"],
      ["Publer", "https://publer.com/plans", "Free plan"],
    ],
    paid: [["Hootsuite", "https://www.hootsuite.com/plans", "From $99/user/month (annual)"]],
    see: [["/tools", "All scheduling tools and prices"]] },

  { id: "no-code-automation", level: 6, title: "No-code automation", time: "1 hour",
    simple: "Connect apps so routine tasks happen on their own: new blog post → social draft, new lead from a form → CRM and email, weekly stats → report.",
    why: "Automation saves hours every week and is a sellable service.",
    steps: [
      "List repetitive tasks you do weekly",
      "Build one simple flow in Zapier, Make or n8n",
      "Add a human approval step before anything posts publicly",
      "Log every run so you can spot failures",
    ],
    free: [
      ["Zapier", "https://zapier.com/pricing", "Free: 100 tasks/month"],
      ["Make", "https://www.make.com/en/pricing", "Free: 1,000 credits/month"],
      ["n8n (self-hosted community edition)", "https://github.com/n8n-io/n8n", "Free · open source"],
    ],
    videos: [["n8n", "https://www.youtube.com/@n8n-io", "Official"], ["Zapier", "https://www.youtube.com/@Zapier", "Official"]] },

  { id: "apis-dm-automation", level: 6, title: "Official APIs and DM automation", time: "1 hour",
    simple: "Platforms offer official APIs for posting and reading stats, with limits and approval steps. DM tools like ManyChat must use official integrations and follow messaging rules.",
    why: "Unofficial bots get accounts banned; official APIs keep you safe.",
    steps: [
      "Instagram Graph API: business/creator accounts, with a 24-hour publishing cap",
      "YouTube Data API: 10,000 quota units a day by default; uploads use a lot of them",
      "TikTok Content Posting API: needs an app audit before posts can be public",
      "X API: pay-per-use since February 2026 (posts with links cost more)",
      "DM automation: reply-based flows only, inside Meta's 24-hour messaging window",
    ],
    free: [
      ["Instagram content publishing", "https://developers.facebook.com/docs/instagram-platform/content-publishing", "Meta for Developers"],
      ["YouTube Data API: getting started", "https://developers.google.com/youtube/v3/getting-started", "Google"],
      ["TikTok Content Posting API", "https://developers.tiktok.com/doc/content-posting-api-get-started", "TikTok for Developers"],
      ["X API pricing", "https://docs.x.com/x-api/getting-started/pricing", "X Developers"],
      ["LinkedIn Marketing APIs", "https://learn.microsoft.com/en-us/linkedin/marketing/", "Microsoft Learn"],
    ],
    paid: [["ManyChat Pro", "https://manychat.com/pricing", "From $29/month (annual)"]],
    watch: "Never automate follows, likes or comments. Meta, X and YouTube ban inauthentic behavior, and the FTC bans fake engagement.",
    see: [["/calculators", "X API cost calculator"]] },

  { id: "ai-agents-social", level: 6, title: "AI agents for social media", time: "45 min",
    simple: "AI agents can draft replies, summarize comments, propose content ideas and prepare reports. A person approves anything that goes public.",
    why: "Agents handle the busywork so you can focus on ideas and relationships.",
    steps: [
      "Start with a read-only agent: weekly comment summary and content ideas",
      "Add drafting: reply suggestions for you to approve",
      "Connect through official APIs or n8n/Make AI nodes",
      "Keep logs and a human approval step",
    ],
    free: [
      ["Postiz (open-source scheduler)", "https://github.com/gitroomhq/postiz-app", "GitHub · Free"],
      ["Mixpost (self-hosted)", "https://github.com/inovector/mixpost", "GitHub · Free"],
      ["n8n AI agents", "https://n8n.io/", "Free self-hosted"],
    ] },

  /* ---------------- Level 7: Make money ---------------- */
  { id: "monetization-programs", level: 7, title: "Platform payout programs", time: "40 min",
    simple: "YouTube, TikTok, Facebook, Instagram, X and Snapchat share some ad or subscription revenue with eligible creators. Rules change often, so check dates.",
    why: "Payouts are a nice base, but rarely enough on their own.",
    steps: [
      "YouTube: expanded tier at 500 subs; full Partner Program at 1,000 subs + 4,000 watch hours or 10M Shorts views (rising Feb 2027)",
      "TikTok Creator Rewards: 18+, 10K followers, 100K views in 30 days; only videos over 1 minute earn",
      "Facebook Content Monetization: still invite-only",
      "X: Original Content Rewards replaced revenue sharing in September 2026",
      "Compare all current rules on the Platforms page",
    ],
    free: [
      ["YouTube Partner Program overview", "https://support.google.com/youtube/answer/72851", "YouTube Help"],
      ["X Creator Revenue Sharing (retired)", "https://help.x.com/en/using-x/creator-revenue-sharing", "X Help"],
      ["Facebook for creators", "https://www.facebook.com/creators", "Meta"],
      ["Snapchat for creators", "https://creators.snap.com/", "Snap"],
    ],
    see: [["/platforms", "Current payout rules with dates"]] },

  { id: "brand-deals-ugc", level: 7, title: "Brand deals and UGC", time: "50 min",
    simple: "Brands pay creators to feature products (sponsorships) or to make videos the brand posts itself (UGC). UGC doesn't need a big audience.",
    why: "Brand deals are the biggest income source for most mid-sized creators.",
    steps: [
      "Make a one-page media kit: audience, reach, engagement, past results, rates",
      "Price usage rights, exclusivity and whitelisting as add-ons",
      "Use a written contract with deliverables, deadlines and payment terms",
      "Build a UGC portfolio of 3–5 sample videos",
      "Verify every brand before signing (official domain, real people)",
    ],
    free: [
      ["TikTok Creator Academy", "https://www.tiktok.com/creator-academy", "Free"],
      ["FTC Disclosures 101", "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers", "FTC"],
    ],
    videos: [["Think Media", "https://www.youtube.com/@ThinkMediaTV", "Creator income"]],
    watch: "Fake brand deals are the most common scam targeting creators. Never run files a 'sponsor' sends." },

  { id: "affiliate-commerce", level: 7, title: "Affiliate and social commerce", time: "40 min",
    simple: "Earn a commission when people buy through your links, or sell inside apps with TikTok Shop, Instagram/Facebook Shops and YouTube Shopping.",
    why: "Affiliate income works at small audience sizes and grows with trust.",
    steps: [
      "Join programs that fit your niche (Amazon Associates, TikTok Shop affiliate, LTK, brand programs)",
      "Only recommend products you've used",
      "Disclose every affiliate link",
      "Use comparison and tutorial content; it converts best",
    ],
    free: [
      ["TikTok Shop Seller Center (US)", "https://seller-us.tiktok.com/", "TikTok"],
      ["Amazon Associates", "https://affiliate-program.amazon.com/", "Amazon"],
    ] },

  { id: "products-memberships", level: 7, title: "Digital products and memberships", time: "40 min",
    simple: "Sell templates, guides, courses, coaching or paid communities to the audience you've built. You keep most of the revenue and own the customer list.",
    why: "Your own products are the most stable income stream.",
    steps: [
      "Find a repeated question your audience asks",
      "Make a small paid product first (template or guide)",
      "Pre-sell before building something big",
      "Collect emails on every sale",
      "Add a membership or community once demand is proven",
    ],
    free: [
      ["Gumroad", "https://gumroad.com/", "Pay as you sell"],
      ["Substack", "https://substack.com/", "Paid newsletters"],
    ],
    paid: [["Kajabi", "https://kajabi.com/", "Courses and communities"]],
    videos: [["Ali Abdaal", "https://www.youtube.com/@aliabdaal", "Creator business and products"]] },

  { id: "agency-business", level: 7, title: "Run a social media agency", time: "1 hour",
    simple: "Sell social media management, editing, ads or automation as packaged monthly services to businesses in one niche.",
    why: "A focused niche agency can reach steady income with a handful of clients.",
    steps: [
      "Pick one niche and one core service",
      "Create 3 packages (e.g. starter, growth, ads add-on) with clear deliverables",
      "Use a contract, onboarding checklist and secure access (no shared passwords)",
      "Report monthly in plain English: what happened, why, what's next",
      "Upsell a security audit and automation once you have trust",
    ],
    free: [
      ["HubSpot Academy", "https://academy.hubspot.com/", "Free certificates"],
      ["Upwork", "https://www.upwork.com/", "Find first clients"],
    ],
    tips: ["Common market range for small-business organic management: about $500–$5K+/month depending on scope (check local competitors)."] },

  /* ---------------- Level 8: Measure & scale ---------------- */
  { id: "analytics-reporting", level: 8, title: "Analytics and reporting", time: "45 min",
    simple: "A good report answers three questions: what happened, why, and what we'll do next. Use free native analytics and a simple dashboard.",
    why: "Reports win client renewals and show you where to focus.",
    steps: [
      "Pick 5 metrics tied to goals (reach, engagement rate, clicks, leads, revenue)",
      "Pull data monthly from native analytics",
      "Build a free dashboard in Looker Studio",
      "Write 3 insights and 3 actions every month",
    ],
    free: [
      ["Looker Studio", "https://lookerstudio.google.com/", "Google · Free"],
      ["Google Analytics certification", "https://skillshop.withgoogle.com/", "Free"],
    ],
    see: [["/calculators", "Metric calculators"]] },

  { id: "experiments", level: 8, title: "Testing and experiments", time: "30 min",
    simple: "Change one thing at a time (hook, thumbnail, posting time, offer) and compare results. Keep what wins.",
    why: "Small, steady tests beat guessing and trend-chasing.",
    steps: [
      "Write a hypothesis: 'A question hook will raise 3-second retention'",
      "Change one variable and keep the rest the same",
      "Run long enough to get meaningful numbers",
      "Log results in a simple spreadsheet",
    ],
    free: [["YouTube Studio: test thumbnails and titles", "https://www.youtube.com/creators/", "YouTube"]] },

  { id: "team-security-program", level: 8, title: "Team roles and a security program", time: "45 min",
    simple: "As you grow, give everyone their own access, write down who recovers which account, train the team and verify payment changes by phone.",
    why: "Business email compromise caused about $3B in reported losses in 2025 (FBI IC3).",
    steps: [
      "List every account, owner and admin",
      "Enforce passkeys or authenticator apps for everyone",
      "Write a 1-page incident plan: who does what if an account is hacked",
      "Train new people on day one, then quarterly",
      "Verify any bank or payment change with a call to a known number",
    ],
    free: [
      ["NIST Cybersecurity Framework 2.0", "https://www.nist.gov/cyberframework", "NIST · Free"],
      ["Secure Our World", "https://www.cisa.gov/secure-our-world", "CISA · Free"],
      ["Free cybersecurity tools", "https://www.knowbe4.com/free-cybersecurity-tools", "KnowBe4 · Free"],
      ["2025 Internet Crime Report", "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf", "FBI IC3"],
    ] },
];
