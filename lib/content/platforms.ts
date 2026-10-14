/* Platform guide. Monetization rules change often: every platform carries a "verified" date and a source link.
   Re-check quarterly. Upcoming changes go in `change`. */

export type Platform = {
  id: string;
  name: string;
  color: string;
  reachUS: string;          // share of US adults who use it (Pew 2025)
  bestFor: string;
  ranking: string[];
  formats: string[];
  cadence: string;
  money: [string, string][]; // [program, requirement]
  change?: string;
  hub: [string, string];
  source: string;
  verified: string;
};

export const PLATFORMS: Platform[] = [
  { id: "youtube", name: "YouTube", color: "#e1352b", reachUS: "84%",
    bestFor: "Searchable tutorials, long-form stories and Shorts. Most reliable ad revenue share.",
    ranking: ["Clicks on thumbnail and title", "Watch time and retention", "Viewer satisfaction signals"],
    formats: ["Long-form video", "Shorts", "Live", "Podcasts"],
    cadence: "1 long video + 2–3 Shorts a week (starting point)",
    money: [
      ["Expanded Partner Program", "500 subscribers, 3 uploads in 90 days, and 3,000 watch hours (12 months) or 3M Shorts views (90 days). Unlocks memberships, Supers, Shopping."],
      ["Full Partner Program (ads)", "1,000 subscribers and 4,000 watch hours (12 months) or 10M Shorts views (90 days). 2-Step Verification, no active strikes, AdSense."],
    ],
    change: "From Feb 1, 2027: new applicants need 8,000 watch hours or 20M Shorts views. Existing partners need 10M Shorts views in 90 days to keep Shorts ad revenue.",
    hub: ["YouTube Creators", "https://www.youtube.com/creators/"],
    source: "https://support.google.com/youtube/answer/72851", verified: "Oct 2026" },
  { id: "instagram", name: "Instagram", color: "#d6337a", reachUS: "50%",
    bestFor: "Reels for reach, carousels for saves, Stories and DMs for loyal followers.",
    ranking: ["Watch time", "Likes per reach (followers)", "Sends per reach (non-followers)"],
    formats: ["Reels", "Carousels", "Stories", "Broadcast channels"],
    cadence: "3–5 Reels a week + Stories most days",
    money: [["Subscriptions, gifts, partnership ads, affiliate", "Eligibility varies by country; bonuses are invite-only."]],
    change: "Hashtags are capped at 5 per post (Dec 2025) and don't improve reach, per Instagram's head.",
    hub: ["Instagram for Creators", "https://creators.instagram.com/"],
    source: "https://about.instagram.com/blog/announcements/instagram-ranking-explained", verified: "Oct 2026" },
  { id: "tiktok", name: "TikTok", color: "#111111", reachUS: "37%",
    bestFor: "Fast discovery with short video, TikTok Shop and live selling.",
    ranking: ["Completion and rewatches", "Shares and comments", "Interest match"],
    formats: ["Short video", "Videos over 1 minute (for Rewards)", "LIVE", "Photo posts"],
    cadence: "3–5 videos a week",
    money: [
      ["Creator Rewards Program", "18+, 10,000 followers, 100,000 views in 30 days, personal account. Only original videos over 1 minute earn."],
      ["TikTok Shop affiliate, Subscriptions, LIVE gifts", "Lower thresholds; vary by country."],
    ],
    change: "US operations moved to TikTok USDS Joint Venture LLC in January 2026. The US algorithm is being retrained, with no published timeline.",
    hub: ["TikTok Creator Academy", "https://www.tiktok.com/creator-academy"],
    source: "https://www.tiktok.com/creator-academy", verified: "Oct 2026" },
  { id: "facebook", name: "Facebook", color: "#1877f2", reachUS: "71%",
    bestFor: "Local businesses, groups, 30+ audiences and Marketplace.",
    ranking: ["Connections and groups", "Comments and shares", "Original content"],
    formats: ["Reels", "Videos", "Photos", "Text posts", "Groups"],
    cadence: "3–5 posts a week + active groups",
    money: [
      ["Content Monetization (beta)", "Invite-only; express interest in your Professional Dashboard."],
      ["Creator Fast Track (Mar 2026)", "For creators established elsewhere: about $1,000/month for 3 months at 100K+ followers, $3,000 at 1M+ (reported)."],
    ],
    change: "Old thresholds you see online (10K followers + 600K minutes) belong to retired programs.",
    hub: ["Facebook for Creators", "https://www.facebook.com/creators"],
    source: "https://www.facebook.com/creators", verified: "Oct 2026" },
  { id: "linkedin", name: "LinkedIn", color: "#0a66c2", reachUS: "Professionals",
    bestFor: "B2B, consultants, agencies, hiring and personal brand.",
    ranking: ["Relevance to your network", "Meaningful comments", "Expertise"],
    formats: ["Text posts", "Document carousels", "Short video", "Newsletters"],
    cadence: "2–3 posts a week",
    money: [["No ad revenue share", "Earn through clients, consulting, jobs and newsletter audience."]],
    hub: ["LinkedIn Marketing Labs", "https://training.marketing.linkedin.com/"],
    source: "https://business.linkedin.com/marketing-solutions", verified: "Oct 2026" },
  { id: "x", name: "X (Twitter)", color: "#1d1d1f", reachUS: "17%",
    bestFor: "News, tech, finance and real-time conversation.",
    ranking: ["Engagement from verified users", "Replies and reposts", "Recency"],
    formats: ["Posts", "Threads", "Video", "Spaces"],
    cadence: "Daily",
    money: [["Original Content Rewards", "Reported: Premium, 500 verified followers, 500K verified home-timeline impressions in 90 days. Paid every 2 weeks, $30 minimum."]],
    change: "Creator Revenue Sharing closed Sept 7, 2026. Undisclosed AI videos of armed conflict lose payouts for 90 days (since Mar 2026).",
    hub: ["X Help: Original Content Rewards", "https://help.x.com/en/using-x/original-content-rewards"],
    source: "https://help.x.com/en/using-x/creator-revenue-sharing", verified: "Oct 2026" },
  { id: "pinterest", name: "Pinterest", color: "#e60023", reachUS: "Visual search",
    bestFor: "Shops, blogs, recipes, home, fashion and affiliate traffic.",
    ranking: ["Keyword relevance", "Fresh pins", "Saves and clicks"],
    formats: ["Standard pins", "Video pins", "Boards"],
    cadence: "Several fresh pins a week",
    money: [["No general revenue share", "Earn through affiliate links, shopping and brand partnerships."]],
    hub: ["Pinterest Academy", "https://business.pinterest.com/pinterest-academy/"],
    source: "https://business.pinterest.com/", verified: "Oct 2026" },
  { id: "snapchat", name: "Snapchat", color: "#f5c400", reachUS: "24%",
    bestFor: "Under-30 audiences, Stories and Spotlight.",
    ranking: ["Views and completion", "Shares", "Friend connections"],
    formats: ["Spotlight", "Stories", "Snaps"],
    cadence: "Daily Stories, several Spotlights a week",
    money: [["Unified monetization / Snap Star", "Eligible creators earn from Spotlight and Stories ads. Check current thresholds."]],
    hub: ["Snapchat for Creators", "https://creators.snap.com/"],
    source: "https://creators.snap.com/", verified: "Oct 2026" },
  { id: "reddit", name: "Reddit", color: "#ff4500", reachUS: "26%",
    bestFor: "Niche communities, honest feedback and Google search visibility.",
    ranking: ["Upvotes in each subreddit", "Comment quality", "Recency"],
    formats: ["Text posts", "Comments", "AMAs"],
    cadence: "Participate daily, promote rarely",
    money: [["No creator payouts", "Use for research, community and traffic within subreddit rules."]],
    hub: ["Reddit for Business", "https://www.business.reddit.com/"],
    source: "https://www.business.reddit.com/", verified: "Oct 2026" },
  { id: "threads", name: "Threads & Bluesky", color: "#6b5bd6", reachUS: "8% / 4%",
    bestFor: "Text conversation and niche communities (Bluesky custom feeds).",
    ranking: ["Replies", "Follows", "Topic interest"],
    formats: ["Text posts", "Images", "Short video"],
    cadence: "Daily, if it's an active audience for you",
    money: [["No broad payout program", "Use for community and links."]],
    hub: ["Bluesky", "https://bsky.social/about"],
    source: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/", verified: "Oct 2026" },
  { id: "whatsapp", name: "WhatsApp & Telegram channels", color: "#25a244", reachUS: "32% (WhatsApp)",
    bestFor: "Broadcasting offers and updates directly to followers.",
    ranking: ["No feed ranking: followers see your updates"],
    formats: ["Channel updates", "Polls", "Links"],
    cadence: "A few updates a week",
    money: [["No payouts", "Drive sales, community and loyalty."]],
    change: "WhatsApp is a top platform for investment and impersonation scams (FTC 2026). Warn your followers about fake copies of your channel.",
    hub: ["Telegram", "https://telegram.org/"],
    source: "https://www.ftc.gov/news-events/news/press-releases/2026/04/new-ftc-data-show-people-have-lost-billions-social-media-scams", verified: "Oct 2026" },
];
