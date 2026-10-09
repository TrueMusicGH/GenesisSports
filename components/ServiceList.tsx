"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function ServiceList() {
  const [active, setActive] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <>
      {/* Desktop: interactive editorial rows */}
      <ul className="hidden md:block divide-y divide-white/10 border-b border-white/10">
        {SERVICES.map((s) => (
          <li
            key={s.no}
            onMouseEnter={() => setActive(s.no)}
            onMouseLeave={() => setActive(null)}
            className="group relative grid grid-cols-12 items-center gap-6 py-8 cursor-pointer transition-colors"
          >
            <span
              className={`col-span-1 text-xs tracking-widest transition-all duration-300 ${
                active === s.no ? "text-accent -translate-y-1" : "text-mist"
              }`}
            >
              {s.no}
            </span>
            <h3
              className={`col-span-6 text-2xl lg:text-4xl font-black uppercase tracking-tight transition-transform duration-300 ${
                active === s.no ? "translate-x-4 text-bone" : "text-mist"
              }`}
            >
              {s.title}
            </h3>
            <p
              className={`col-span-5 text-sm text-mist transition-opacity duration-300 ${
                active === s.no ? "opacity-100" : "opacity-0"
              }`}
            >
              {s.desc}
            </p>
            <AnimatePresence>
              {active === s.no && (
                <motion.img
                  src={s.image}
                  alt=""
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 0.35, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  style={{ objectPosition: s.position ?? "50% 50%" }}
                  className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Mobile: accordion */}
      <ul className="md:hidden divide-y divide-white/10 border-b border-white/10">
        {SERVICES.map((s) => {
          const open = openMobile === s.no;
          return (
            <li key={s.no}>
              <button
                onClick={() => setOpenMobile(open ? null : s.no)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
                aria-expanded={open}
              >
                <span className="text-xs text-mist mr-3">{s.no}</span>
                <span className="flex-1 text-lg font-black uppercase tracking-tight">{s.title}</span>
                {open ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-mist leading-relaxed">{s.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </>
  );
}
