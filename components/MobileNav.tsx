"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/population", label: "Population" },
  { href: "/economy", label: "Economy" },
  { href: "/history", label: "History" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <div id="mobile-nav-links" className={`nav-links-mobile${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
