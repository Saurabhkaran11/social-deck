# Social Deck

A free, plain-English web app for learning **social media marketing, content creation, automation and the creator business**, with a **Protect & Comply** module first (account security, scam spotting, ad disclosures, AI labels).

It has three tracks: **Creator**, **Small business** and **Agency & freelancer**.

Built with Next.js 14 (App Router), React 18 and TypeScript. It has no database: progress, notes and checklists are saved in the visitor's browser.

## What's inside

| Page | What it does |
|---|---|
| `/` | Hero, track picker, the 9 levels, featured business ideas and YouTube channels |
| `/learn` | 9 levels and 38 lessons; filter by track; progress bar; a first-week plan for each track |
| `/learn/[id]` | Lesson: simple explanation, why it matters, steps, free resources, best paid option, videos, notes, mark complete |
| `/platforms` | 11 platforms: audience, what the feed rewards, formats, cadence, payout rules with "last checked" dates and sources |
| `/safety` | Scam statistics, a 15-item security checklist (saved), an 8-question scam-spotter quiz, scam patterns, free training, reporting links |
| `/tools` | 34 tools (scheduling, automation, editing, design, AI, analytics, selling), free first, with search |
| `/certificates` | Free certificates first, then the best paid ones, filterable by track |
| `/careers` | 11 job tracks with a typical day, skills, pay benchmark, free-first course path and starter project |
| `/ideas` | 27 business ideas in collapsible cards (problem, offer, revenue, cost, steps, tools, launch links) |
| `/calculators` | Engagement rate, CTR, CPM, CPA, ROAS, creator earnings, LTV and X API cost |
| `/glossary` | 50 terms in plain English |
| `/youtube` | Free learning channels; 💰 marks channels that teach revenue |
| `/launch` | An end-to-end launch guide inside the app (the same steps as below) |

## Setup (about 10 minutes)

**You need:**
- Node.js 18.17 or newer (LTS recommended): https://nodejs.org/
- Git: https://git-scm.com/downloads
- A code editor such as VS Code: https://code.visualstudio.com/

```bash
node -v          # check Node is installed
cd social-deck
npm install      # install packages
npm run dev      # start → open http://localhost:3000
```

## Build and run (production)

```bash
npm run check-links   # checks every link in lib/content (bot-protected sites are reported as "blocked", which is fine)
npm run build         # production build (fails if a lesson id is wrong)
npm start             # serve the production build on http://localhost:3000
```

## Launch it on the internet (free)

1. **Push to GitHub.** Create an empty repository at https://github.com/new, then run:
   ```bash
   git init && git add -A && git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/<your-username>/social-deck.git
   git push -u origin main
   ```
2. **Deploy on Vercel.** Go to https://vercel.com/new, import the repository and click **Deploy**. Every `git push` redeploys automatically.
3. **Custom domain (optional).** Buy a domain (Cloudflare Registrar or Namecheap, about $10–15 a year). Add it in Vercel under **Settings → Domains** and follow the DNS steps.
4. **Analytics and SEO.** Turn on Vercel Web Analytics (free on the Hobby plan) and add the site to Google Search Console (https://search.google.com/search-console).

## Edit the content

All content is plain data in `lib/content/` (no React). The same files can power the planned iOS app.

```
lib/content/
  types.ts        shared types + LAST_VERIFIED date
  levels.ts       9 levels and 3 tracks (Creator, Small business, Agency)
  topics-a.ts     lessons for levels 0–3
  topics-b.ts     lessons for levels 4–8
  platforms.ts    platform guide with payout rules, sources and "verified" dates
  tools.ts        tools catalogue (✓ = price checked on the vendor page)
  certs.ts        certificates (free first)
  careers.ts      11 job tracks
  ideas.ts        27 business ideas
  safety.ts       scam stats, checklist, quiz, training, reporting links
  extras.ts       YouTube channels, glossary, launch guide, troubleshooting
  index.ts        exports everything and checks that every lesson id exists
```

- **Add a lesson:** add an object to `topics-a.ts` or `topics-b.ts`, then add its `id` to a level in `levels.ts`.
- **Keep it accurate:** platform payout rules, prices and fees change often. Re-check them every quarter, then update `LAST_VERIFIED` in `types.ts` and the `verified` field on each platform. Known upcoming change: YouTube's Partner Program threshold rises on **Feb 1, 2027**.

## Project structure

```
app/            one folder per page (Next.js App Router)
components/     Home, LearnPath, TopicPage, Platforms, Safety, Catalog (tools, certs, careers, ideas),
                Resources (calculators, glossary, YouTube, launch), Nav, Bits
lib/store.tsx   progress, notes, checklist and track (localStorage)
lib/content/    all content (shared with the future iOS app)
scripts/        check-links.mjs
docs/IOS_PLAN.md  plan for the iOS app
```

## Responsible use

- The security content is **defensive only**: it covers recognition, prevention, recovery and reporting.
- Automation lessons use **official APIs** and include a human approval step.
- The app never teaches automated follows, likes or comments, or buying engagement. The FTC bans fake engagement, and the platforms ban inauthentic behavior.

## Sources

The main sources are:
- Pew Research Center (2025)
- DataReportal (2026)
- FTC Data Spotlight (April 2026)
- FBI IC3 2025 report
- Official platform help centers (YouTube, Instagram/Meta, TikTok, X, LinkedIn, Pinterest, Snap)
- Goldman Sachs Research
- Influencer Marketing Hub

Each lesson and platform card links to its source.
