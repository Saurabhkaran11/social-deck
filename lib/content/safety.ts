/* Protect & Comply: defensive security awareness only. Recognition, prevention, recovery and reporting. */

export const SCAM_STATS: [string, string, string][] = [
  ["$2.1B", "lost to scams that started on social media in 2025 (US)", "https://www.ftc.gov/news-events/news/press-releases/2026/04/new-ftc-data-show-people-have-lost-billions-social-media-scams"],
  ["8×", "higher than in 2020", "https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2026/04/reported-losses-scams-social-media-eight-times-higher-2020"],
  ["$1.1B", "of it from investment scams", "https://www.ftc.gov/news-events/news/press-releases/2026/04/new-ftc-data-show-people-have-lost-billions-social-media-scams"],
  ["$20.9B", "total internet-crime losses reported to the FBI in 2025", "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"],
];

export type Scam = { name: string; how: string; signs: string[]; doThis: string };
export const SCAMS: Scam[] = [
  { name: "Fake brand deal", how: "An email offers a paid sponsorship and asks you to open a 'contract' or install an app to see the brief.",
    signs: ["Attachment is .exe, .scr, .zip or a 'viewer' app", "Free email address or look-alike domain", "Rushed deadline, unusually high pay"], doThis: "Verify on the brand's official website and with a real employee on LinkedIn. Only open documents in a browser preview." },
  { name: "Fake copyright strike / 'Meta Support'", how: "A DM or email says your account will be deleted unless you 'appeal' via a link.",
    signs: ["Threat of deletion within 24–48 hours", "Link to a non-official domain", "Asks for your password or 2FA code"], doThis: "Check alerts only inside the app or Studio. Platforms never ask for your password in a DM." },
  { name: "Verification offer", how: "Someone offers a blue check for a fee or asks you to 'confirm' your account.",
    signs: ["Payment via gift cards or crypto", "Request for login codes"], doThis: "Use only the official verification flow inside the app (Meta Verified, X Premium)." },
  { name: "Impersonation and fake giveaways", how: "A copycat account of you (or a brand) tells your followers they won a prize.",
    signs: ["Slightly different username", "Asks winners to pay shipping or click a link"], doThis: "Report the account, pin a post saying you never DM winners, and warn your audience." },
  { name: "Investment 'mentor' / crypto", how: "A friendly expert promises guaranteed returns and moves you to WhatsApp or Telegram.",
    signs: ["Guaranteed profits", "Pressure to move to private chat", "Pay to withdraw"], doThis: "Never invest through someone you met on social media. Report to the FTC and IC3." },
  { name: "Deepfake voice or video", how: "A cloned voice of a boss, client or family member asks for urgent money or codes.",
    signs: ["Urgency and secrecy", "New payment details"], doThis: "Hang up and call back on a known number. Agree a family or team code word." },
  { name: "Fake job or UGC opportunity", how: "A 'job' asks you to pay for training, equipment or to deposit a check.",
    signs: ["You pay to start", "Overpayment then 'please refund the difference'"], doThis: "Real employers don't charge you to work. Research the company independently." },
  { name: "QR code phishing", how: "A QR code in a post, flyer or email leads to a fake login page.",
    signs: ["Login page after scanning", "Shortened or odd URL"], doThis: "Check the address before entering anything; log in by typing the site yourself." },
];

export type CheckItem = { id: string; group: string; text: string; link?: string };
export const CHECKLIST: CheckItem[] = [
  { id: "pm", group: "Logins", text: "Use a password manager with a unique password for every account" },
  { id: "passkey", group: "Logins", text: "Turn on passkeys or an authenticator app (not SMS) everywhere", link: "https://safety.google/authentication/" },
  { id: "backup", group: "Logins", text: "Store backup codes offline" },
  { id: "email", group: "Logins", text: "Use a separate admin email for account recovery" },
  { id: "apps", group: "Access", text: "Review connected third-party apps monthly" },
  { id: "sessions", group: "Access", text: "Check active sessions and log out unknown devices" },
  { id: "roles", group: "Access", text: "Give team members their own role-based access (no shared passwords)" },
  { id: "meta-check", group: "Platforms", text: "Run Meta Security Checkup", link: "https://www.facebook.com/help/799880743466869" },
  { id: "yt-2sv", group: "Platforms", text: "Turn on 2-Step Verification for YouTube (required for YPP)", link: "https://support.google.com/youtube/answer/76187" },
  { id: "x-2fa", group: "Platforms", text: "Turn on X two-factor authentication", link: "https://help.x.com/en/managing-your-account/two-factor-authentication" },
  { id: "files", group: "Habits", text: "Never run files sent by new 'sponsors'; preview documents in a browser" },
  { id: "dm-links", group: "Habits", text: "Never log in from a link in a DM or email" },
  { id: "verify-deals", group: "Habits", text: "Verify every brand deal through the official domain" },
  { id: "plan", group: "Recovery", text: "Write down how to recover each account and who does it" },
  { id: "report", group: "Recovery", text: "Bookmark ReportFraud.ftc.gov and IC3.gov", link: "https://reportfraud.ftc.gov/" },
];

export type QuizItem = { id: string; msg: string; from: string; scam: boolean; why: string };
/* Recognition practice with made-up examples (no real brands or people). */
export const QUIZ: QuizItem[] = [
  { id: "q1", from: "partnerships@glowskin-brand-collab.net", scam: true,
    msg: "Hi! We love your content and want to offer $4,500 for 2 videos. Please download our Campaign Viewer (CampaignBrief.scr) to see the brief before tomorrow.",
    why: "A .scr file is a program, not a document, plus a look-alike domain and a rushed deadline. Classic malware brand deal." },
  { id: "q2", from: "In-app notification inside YouTube Studio", scam: false,
    msg: "A copyright claim was made on your video. Review the claim in YouTube Studio > Content > Restrictions.",
    why: "Shown inside the official app with no external link. Check it directly in Studio." },
  { id: "q3", from: "DM from @meta.support.team.help", scam: true,
    msg: "Your page violated our policies and will be deleted in 24 hours. Appeal now: meta-appeal-center.co/login",
    why: "Platforms don't contact you through DMs from random accounts, and the link isn't an official domain." },
  { id: "q4", from: "Your bank's app", scam: false,
    msg: "You turned on a new passkey for your account. If this wasn't you, open the app and go to Security.",
    why: "It points you to the app itself and doesn't contain a link or ask for codes." },
  { id: "q5", from: "WhatsApp, unknown number", scam: true,
    msg: "I'm a trading mentor. My students make 30% a month guaranteed. Join my private group, first deposit only $250.",
    why: "Guaranteed returns and a move to a private chat are top signs of an investment scam." },
  { id: "q6", from: "A follower who comments on your post", scam: true,
    msg: "Congrats, you won our giveaway! Pay $9.99 shipping at this link to claim your prize.",
    why: "Real giveaways don't charge winners. This is often an impersonation account." },
  { id: "q7", from: "Email from a creator platform you use, sent to your admin address", scam: false,
    msg: "Your monthly payout statement is ready. Sign in to your dashboard to view it.",
    why: "No link to click is needed: you can sign in by typing the site yourself. Still, never log in from the email link." },
  { id: "q8", from: "Phone call that sounds like your manager", scam: true,
    msg: "I'm in a meeting, I need you to buy 5 gift cards for a client right now and send me the codes. Keep it quiet.",
    why: "Urgency, secrecy and gift cards: likely a deepfake or impersonation. Call back on a known number." },
];

export const TRAINING: [string, string, string][] = [
  ["Secure Our World", "https://www.cisa.gov/secure-our-world", "CISA · Free"],
  ["OUCH! newsletter", "https://www.sans.org/newsletters/ouch/", "SANS · Free"],
  ["Phishing Quiz", "https://phishingquiz.withgoogle.com/", "Google + Jigsaw · Free"],
  ["Free cybersecurity tools", "https://www.knowbe4.com/free-cybersecurity-tools", "KnowBe4 · Free"],
  ["Consumer scam alerts", "https://consumer.ftc.gov/scams", "FTC · Free"],
  ["NIST Cybersecurity Framework 2.0", "https://www.nist.gov/cyberframework", "For business programs"],
];

export const REPORT_LINKS: [string, string][] = [
  ["Report fraud to the FTC", "https://reportfraud.ftc.gov/"],
  ["Report internet crime to the FBI (IC3)", "https://www.ic3.gov/"],
];
