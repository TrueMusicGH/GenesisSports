"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] bg-ink md:hidden flex flex-col"
        >
          <div className="h-16 px-5 flex items-center justify-between border-b border-white/5">
            <span className="font-black tracking-tight text-sm uppercase">
              Genesis Sports
            </span>
            <button aria-label="Close menu" onClick={onClose} className="p-2">
              <span className="relative block w-6 h-5">
                <span className="absolute top-2 w-6 h-px bg-bone rotate-45" />
                <span className="absolute top-2 w-6 h-px bg-bone -rotate-45" />
              </span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.45 }}
              >
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="block text-4xl font-black uppercase tracking-tight py-1 hover:text-[#c9a24b] transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="p-8 text-xs tracking-widest uppercase text-mist">
            Kolkata, India · sb@genesissports.co.in
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
