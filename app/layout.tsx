import type { Metadata } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Reveal from "@/components/Reveal";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mnsomalis.com"),
  title: {
    default: "MN Somalis — Who are Somali Minnesotans? The facts, from public data.",
    template: "%s — MN Somalis",
  },
  description:
    "A reference site on Minnesota's Somali community, built entirely from public data — U.S. Census Bureau, Minnesota state agencies, and published research. Every number cited.",
  openGraph: {
    title: "MN Somalis",
    description:
      "Who are Somali Minnesotans? The facts, from public data. Every number cited.",
    url: "https://mnsomalis.com",
    siteName: "MN Somalis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MN Somalis",
    description: "Who are Somali Minnesotans? The facts, from public data.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <nav className="nav">
          <div className="wrap nav-inner">
            <Link href="/" className="nav-logo">
              MN<span className="dot">·</span>Somalis
            </Link>
            <div className="nav-links">
              <Link href="/population">Population</Link>
              <Link href="/economy">Economy</Link>
              <Link href="/history">History</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/about">About</Link>
            </div>
            <MobileNav />
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="wrap footer-inner">
            <div>
              <div className="f-brand">
                MN<span className="dot">·</span>Somalis
              </div>
              <p>
                An independent public reference about Minnesota&apos;s Somali
                community. Every statistic links to its original source.
              </p>
            </div>
            <div className="f-links">
              <Link href="/population">Population &amp; Geography</Link>
              <Link href="/economy">Economy &amp; Work</Link>
              <Link href="/history">History &amp; Timeline</Link>
              <Link href="/methodology">Methodology &amp; Sources</Link>
              <Link href="/about">About</Link>
              <a href="mailto:hello@mnsomalis.com">Contact</a>
            </div>
          </div>
          <div className="wrap f-mono">
            Data: U.S. Census Bureau · MN State Demographic Center · MN Compass ·
            MN Chamber Foundation · Minnesota Historical Society
          </div>
        </footer>
        <Reveal />
      </body>
    </html>
  );
}
