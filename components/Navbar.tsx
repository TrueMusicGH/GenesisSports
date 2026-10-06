"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";
import MobileMenu from "./MobileMenu";

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

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
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

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border border-white/15 px-5 py-2.5 hover:border-[#c9a24b] hover:text-[#c9a24b] transition-colors duration-300"
          >
            Let&apos;s Talk
          </Link>

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
