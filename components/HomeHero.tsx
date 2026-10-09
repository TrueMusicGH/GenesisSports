"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HomeHero() {
  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden grain">
      <Image
        src="/home-hero.jpg"
        alt="Cricket batsman silhouette at sunset in a floodlit stadium"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center"
      />
      {/* legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />

      <h1 className="sr-only">
        Genesis Sports | Sports Marketing, Sponsorship & Brand Partnerships
      </h1>

      <div className="relative z-10 flex-1 flex items-center mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-28 pb-10">
        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-[11px] tracking-[0.4em] uppercase text-[#c9a24b] mb-6"
          >
            Genesis Sports
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[1.02] tracking-wide text-bone"
          >
            WHERE SPORT
            <br />
            MEETS <span className="text-[#c9a24b]">POSSIBILITY.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-md text-mist text-base md:text-lg leading-relaxed"
          >
            Creating meaningful connections between sport, brands, talent and
            audiences.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/our-projects"
              className="inline-flex items-center gap-3 bg-[#c9a24b] text-ink px-7 py-3.5 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-bone transition-colors duration-300"
            >
              Explore Our Projects <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#c9a24b]/60 text-bone px-7 py-3.5 text-[11px] tracking-[0.25em] uppercase hover:bg-[#c9a24b]/10 transition-colors duration-300"
            >
              Let&apos;s Talk <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 pb-8 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-bone">01</span>
          <span className="text-xs tracking-[0.2em] text-mist">/</span>
          <span className="text-xs tracking-[0.2em] text-mist">03</span>
          <span className="ml-2 block h-px w-24 md:w-36 bg-white/15 relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-1/3 bg-[#c9a24b]" />
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-mist">
          Scroll
          <span className="block w-px h-8 bg-mist/40" />
        </div>
      </div>
    </section>
  );
}
