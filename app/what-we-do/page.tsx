import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Genesis Sports works across multiple areas of the sports ecosystem — sports marketing, sponsorship, activations, property management, talent, events and digital content.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Services</p>
        <h1 className="text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] font-black uppercase tracking-tight">
          From the game<br />to the business<br /><span className="text-[#c9a24b]">around it.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-mist text-lg leading-relaxed">
          Genesis Sports works across multiple areas of the sports ecosystem, helping sporting
          properties, brands, talent and organisations create meaningful commercial and audience
          opportunities.
        </p>
      </section>

      {SERVICES.map((s) => (
        <section key={s.no} className="border-t border-white/5 py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-10 md:grid-cols-2 items-center">
            <Reveal>
              <p className="text-accent text-xs tracking-[0.3em] uppercase">{s.no}</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1]">
                {s.title}
              </h2>
              <p className="mt-6 text-mist leading-relaxed max-w-md">{s.desc}</p>
              <a href="/contact" className="mt-8 inline-block text-[11px] tracking-[0.25em] uppercase border-b border-white/20 pb-1 hover:border-bone transition-colors">
                Enquire →
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection copy="Let's find the right opportunity for you." ctaLabel="Start a Conversation" />
    </>
  );
}
