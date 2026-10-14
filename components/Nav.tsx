"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Bits";

const TOP = [
  ["/learn", "Learn"], ["/platforms", "Platforms"], ["/safety", "Safety"], ["/tools", "Tools"],
  ["/certificates", "Certificates"], ["/careers", "Careers"], ["/ideas", "Ideas"], ["/calculators", "Calculators"],
] as const;
const TABS = [
  ["/learn", "Learn", Icon.learn], ["/platforms", "Platforms", Icon.platforms], ["/safety", "Safety", Icon.safety],
  ["/tools", "Tools", Icon.tools], ["/ideas", "Ideas", Icon.ideas],
] as const;

export default function Nav() {
  const path = usePathname() || "/";
  const on = (href: string) => path.startsWith(href);
  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <Link href="/" className="logo" aria-label="Social Deck home">
            <span className="logo-mark" aria-hidden="true">✦</span>Social <span>Deck</span>
          </Link>
          <nav className="toplinks" aria-label="Main">
            {TOP.map(([href, label]) => (
              <Link key={href} href={href} className={on(href) ? "on" : ""} aria-current={on(href) ? "page" : undefined}>{label}</Link>
            ))}
          </nav>
          <Link href="/launch" className="btn solid sm">Launch guide</Link>
        </div>
      </header>
      <nav className="tabbar" aria-label="Main">
        {TABS.map(([href, label, icon]) => (
          <Link key={href} href={href} className={on(href) ? "on" : ""} aria-current={on(href) ? "page" : undefined}>{icon}<span>{label}</span></Link>
        ))}
      </nav>
    </>
  );
}
