import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Figtree, JetBrains_Mono, Sora } from "next/font/google";
import Nav from "@/components/Nav";
import { StoreProvider } from "@/lib/store";
import { LAST_VERIFIED } from "@/lib/content";
import "./globals.css";

const display = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--f-display" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-mono" });

export const metadata: Metadata = {
  title: { default: "Social Deck · Learn social media, safely and profitably", template: "%s · Social Deck" },
  description: "A free, plain-English path to social media marketing, content creation, automation and the creator business, starting with account security and the rules.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#f7f4f0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="mesh" aria-hidden="true" />
        <StoreProvider>
          <Nav />
          <main className="page">{children}</main>
          <footer className="foot">
            <p>Social Deck · Free resources first. Facts last checked {LAST_VERIFIED}; platform rules change often.</p>
            <nav aria-label="More">
              <Link href="/glossary">Glossary</Link>
              <Link href="/youtube">Learn on YouTube</Link>
              <Link href="/certificates">Certificates</Link>
              <Link href="/calculators">Calculators</Link>
              <Link href="/launch">Launch guide</Link>
            </nav>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
