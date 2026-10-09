import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Bengal Tigers — Celebrity Cricket League",
  description: "Genesis Sports is the Official Marketing Partner of Bengal Tigers, a team in the Celebrity Cricket League.",
};

const BLOCKS = [
  ["Marketing", "Positioning Bengal Tigers as a distinctive, engaging celebrity cricket property across every touchpoint."],
  ["Sponsorship", "Developing meaningful sponsorship inventory that connects brands with the team and its audience."],
  ["Commercial Opportunities", "Identifying and managing commercial opportunities across matches, content and activations."],
  ["Brand Partnerships", "Building partnerships between the property and brands that deliver value on and off the field."],
];

export default function BengalTigersPage() {
  return (
    <>
      <section className="relative h-[75svh] flex items-end grain">
        <Image
          src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2000&auto=format&fit=crop"
          alt="Batsman playing a shot in a cricket match"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 pb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent">Celebrity Cricket League</p>
          <h1 className="mt-4 text-[clamp(3rem,12vw,10rem)] leading-[0.92] font-black uppercase tracking-tight">
            Bengal Tigers
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20">
        <p className="max-w-3xl text-xl md:text-2xl leading-relaxed">
          Genesis Sports is the Official Marketing Partner of Bengal Tigers, one of the teams
          participating in the Celebrity Cricket League.
        </p>
        <p className="mt-6 max-w-3xl text-mist leading-relaxed">
          Our association focuses on the team&apos;s marketing, sponsorship and commercial
          opportunities, helping connect the property with brands and audiences.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24 grid gap-px bg-white/10 md:grid-cols-2 border border-white/10">
        {BLOCKS.map(([t, d]) => (
          <Reveal key={t}>
            <div className="bg-ink p-10 md:p-16 h-full">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">{t}</h2>
              <p className="mt-4 text-mist text-sm leading-relaxed max-w-sm">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection copy="Interested in associating with the Bengal Tigers property?" ctaLabel="Let's Talk About Partnerships" />
    </>
  );
}
