/* Certificates: free first, then the best paid options. Fees marked "verify" come from third-party guides. */
export type Cert = { name: string; by: string; url: string; cost: string; free: boolean; track: string[]; note: string };

export const CERTS: Cert[] = [
  { name: "Social Media Marketing Certification", by: "HubSpot Academy", url: "https://academy.hubspot.com/courses/social-media", cost: "Free", free: true, track: ["creator", "business", "agency"], note: "Best first certificate for strategy and content." },
  { name: "Meta Blueprint courses", by: "Meta", url: "https://www.facebook.com/business/learn", cost: "Free", free: true, track: ["business", "agency"], note: "Facebook and Instagram ads and organic." },
  { name: "Google Ads & Analytics certifications", by: "Google Skillshop", url: "https://skillshop.withgoogle.com/", cost: "Free", free: true, track: ["business", "agency"], note: "YouTube ads, Google Ads and GA4." },
  { name: "TikTok Academy (ads)", by: "TikTok", url: "https://ads.tiktok.com/business/en/academy", cost: "Free", free: true, track: ["business", "agency"], note: "TikTok ads, Spark Ads and creative." },
  { name: "TikTok Creator Academy", by: "TikTok", url: "https://www.tiktok.com/creator-academy", cost: "Free", free: true, track: ["creator"], note: "Creating, growing and earning on TikTok." },
  { name: "LinkedIn Marketing Labs", by: "LinkedIn", url: "https://training.marketing.linkedin.com/", cost: "Free badges", free: true, track: ["business", "agency"], note: "B2B ads and content on LinkedIn." },
  { name: "Pinterest Academy", by: "Pinterest", url: "https://business.pinterest.com/pinterest-academy/", cost: "Free", free: true, track: ["business", "creator"], note: "Pinterest strategy and ads." },
  { name: "Semrush Academy", by: "Semrush", url: "https://www.semrush.com/academy/", cost: "Free courses", free: true, track: ["business", "agency"], note: "SEO, content and social search." },
  { name: "Canva Design School", by: "Canva", url: "https://www.canva.com/designschool/", cost: "Free", free: true, track: ["creator", "agency"], note: "Design basics for social graphics." },
  { name: "Phishing Quiz", by: "Google + Jigsaw", url: "https://phishingquiz.withgoogle.com/", cost: "Free", free: true, track: ["creator", "business", "agency"], note: "10-minute security practice." },
  { name: "Meta Certified Digital Marketing Associate", by: "Meta", url: "https://www.facebook.com/business/learn/certification", cost: "~$99 (verify)", free: false, track: ["business", "agency"], note: "Entry-level paid Meta credential." },
  { name: "Meta Certified Media Buying Professional", by: "Meta", url: "https://www.facebook.com/business/learn/certification", cost: "~$150 (verify)", free: false, track: ["agency"], note: "For paid social specialists." },
  { name: "Hootsuite Social Marketing Certification", by: "Hootsuite Academy", url: "https://education.hootsuite.com/", cost: "~$199 (verify)", free: false, track: ["agency"], note: "Recognized by many agencies." },
  { name: "Google Digital Marketing & E-commerce Certificate", by: "Google · Coursera", url: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce", cost: "Coursera subscription", free: false, track: ["business", "agency"], note: "Best paid generalist program." },
];
