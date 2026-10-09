import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Club Fitness Challenge — Genesis Sports",
  description: "Club Fitness Challenge is a premium inter-club fitness and entertainment property.",
};

const BLOCKS = [
  ["Fitness", "Structured challenges that bring members of leading clubs into meaningful competition."],
  ["Competition", "Inter-club formats that reward performance, consistency and team spirit."],
  ["Entertainment", "Events and experiences that make every fixture feel like a premium occasion."],
  ["Community", "A shared platform for clubs, members and partners to come together."],
  ["Brand Opportunities", "Sponsorship and activation opportunities for brands looking to reach fitness-focused audiences."],
];

export default function ClubFitnessPage() {
  return (
    <>
      <section className="relative h-[75svh] flex items-end grain">
        <Image
          src="/club-fitness-event.jpg"
          alt="Club Fitness Challenge night event with participants on the field under floodlights"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 pb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent">Genesis Sports</p>
          <h1 className="mt-4 text-[clamp(3rem,12vw,10rem)] leading-[0.92] font-black uppercase tracking-tight">
            Club Fitness<br />Challenge
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20">
        <p className="max-w-3xl text-xl md:text-2xl leading-relaxed">
          Club Fitness Challenge is a premium inter-club fitness and entertainment property
          bringing together leading clubs through competition, fitness and engaging experiences.
        </p>
        <p className="mt-6 max-w-3xl text-mist leading-relaxed">
          The property combines fitness challenges, entertainment and club participation to create
          a distinctive sporting experience.
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

      <CTASection copy="Bring your brand into the Club Fitness Challenge ecosystem." ctaLabel="Explore Partnership Opportunities" />
    </>
  );
}
