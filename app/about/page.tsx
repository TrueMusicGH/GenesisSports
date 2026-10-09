import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Genesis Sports is a sports marketing and management company built around one simple idea: sport has the power to create connections that go beyond the game.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Who We Are</p>
        <h1 className="text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] font-black uppercase tracking-tight">
          We see sport<br /><span className="text-[#c9a24b]">differently.</span>
        </h1>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <p className="text-xl leading-relaxed">
            Genesis Sports is a sports marketing and management company built around one simple idea:
            sport has the power to create connections that go beyond the game.
          </p>
          <p className="text-mist leading-relaxed">
            We work at the intersection of sport, entertainment, brands and people, creating
            opportunities that deliver value for every side of the equation. From developing
            sponsorship opportunities and brand partnerships to managing sporting properties,
            activations and experiences, we bring together strategy, creativity and execution to
            make sports properties more commercially powerful and brands more relevant.
          </p>
        </div>
        <p className="mt-20 text-3xl md:text-5xl font-black uppercase tracking-tight">
          We don&apos;t just market sport.<br />
          <span className="text-mist">We build what happens around it.</span>
        </p>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">What Drives Us</h2>
          <p className="text-mist leading-relaxed md:text-lg">
            The sports industry is evolving rapidly. Audiences are becoming more connected, brands are
            looking for deeper engagement and sporting properties are becoming powerful platforms for
            entertainment, culture and business. Genesis Sports aims to be at the centre of this
            evolution. We work to create partnerships that are relevant to the audience, valuable to
            the brand and meaningful to the sporting property.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Our Vision</p>
          <h2 className="text-[clamp(2.2rem,6vw,5rem)] leading-[1] font-black uppercase tracking-tight max-w-4xl">
            To build the next generation of sports business.
          </h2>
          <p className="mt-10 max-w-3xl text-mist leading-relaxed md:text-lg">
            Our vision is to build Genesis Sports into a leading sports marketing and management
            company, creating and managing opportunities across sports, entertainment and brand
            partnerships. We aim to create an ecosystem where sporting properties become stronger
            brands, brands become more deeply connected with audiences, and athletes and talent find
            meaningful commercial opportunities.
          </p>
          <Reveal delay={0.1}>
            <div className="relative mt-14 aspect-[16/10] md:aspect-[21/9] overflow-hidden">
              <Image
                src="/vision.jpg"
                alt="Premium stadium hospitality lounge overlooking a floodlit cricket ground at sunset"
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-[clamp(2.2rem,6vw,5rem)] leading-[1] font-black uppercase tracking-tight">
            Sport is more than a game.
          </h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 border border-white/10">
            {[
              ["01", "It is a community."],
              ["02", "It is entertainment."],
              ["03", "It is culture."],
              ["04", "It is business."],
              ["05", "It is an experience."],
            ].map(([no, text]) => (
              <div key={no} className="bg-ink p-8 md:p-12">
                <p className="text-[#c9a24b] text-xs tracking-[0.3em]">{no}</p>
                <p className="mt-4 text-xl md:text-3xl font-medium">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl md:text-4xl font-black uppercase">
            And when the right people come together, it becomes an opportunity.<br />
            <span className="text-mist">That&apos;s where we come in.</span>
          </p>
        </div>
      </section>

      <CTASection copy="Let's create what happens around sport." ctaLabel="Get In Touch" />
    </>
  );
}
