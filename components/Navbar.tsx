"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";
import MobileMenu from "./MobileMenu";

function SocialIcon({ paths }: { paths: string[] }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bengaltigers.ccl",
    paths: [
      "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      "M17.5 6.5h.01",
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
    ],
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bengal-tigers-ccl/",
    paths: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", "M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"],
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/bengaltigersteamofficial?mibextid=wwXIfr&rdid=mmOCdKBnMNxkyvVC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HRtoBdhDM%2F%3Fmibextid%3DwwXIfr#",
    paths: ["M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-white/5"
            : "bg-gradient-to-b from-ink/70 to-transparent"
        } hover:border-b hover:border-[#c9a24b]/40 hover:shadow-[0_10px_50px_rgba(201,162,75,0.18)] hover:bg-ink/85 hover:backdrop-blur-xl cursor-default`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/genesis-logo.png" alt="Genesis Sports logo" width={32} height={32} className="object-cover" />
            <span className="font-black tracking-tight text-sm md:text-base uppercase">
              <span className="text-[#c9a24b]">Genesis</span> <span className="text-mist">Sports</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            <nav className="flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] tracking-[0.2em] uppercase text-mist hover:text-[#c9a24b] transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a24b] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <span className="h-5 w-px bg-white/10" aria-hidden />

            <div className="flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-mist hover:text-[#c9a24b] transition-colors"
                >
                  <SocialIcon paths={s.paths} />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border border-white/15 px-5 py-2.5 hover:border-[#c9a24b] hover:text-[#c9a24b] transition-colors duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
          >
            <span className="block w-6 h-px bg-bone mb-1.5" />
            <span className="block w-6 h-px bg-bone" />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
