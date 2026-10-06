import Image from "next/image";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceList from "@/components/ServiceList";
import ProjectsSection from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { MARQUEE_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-svh flex items-end grain">
        <Image
          src="/genesis-banner-v3.jpg"
          alt="Genesis Sports — official banner with gold GS emblem, cricket silhouette and stadium"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center bg-ink"
        />
        <h1 className="sr-only">Genesis Sports | Sports Marketing, Sponsorship & Brand Partnerships</h1>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 pb-24 md:pb-32">
          <p className="sr-only">
            Genesis Sports — We build opportunities where sport, entertainment and brands come
            together. Sports Marketing, Sponsorship, Brand Activation, Talent, Events, Experiences.
          </p>
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 z-10 text-mist text-[10px] tracking-[0.3em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* WE SEE SPORT DIFFERENTLY */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-28 md:py-44">
        <Reveal>
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Our Point of View</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-black uppercase tracking-tight max-w-5xl">
            We see sport <span className="text-accent">differently.</span>
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20 grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xl md:text-2xl leading-relaxed">
              Sport is more than a game.
              <span className="block mt-4 text-mist text-base md:text-lg">
                It is a platform for brands. It is a stage for talent. It is an experience for
                audiences. It is an opportunity for businesses.
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-mist leading-relaxed md:text-lg">
              Genesis Sports works at the intersection of all four. We create, develop and manage
              opportunities across sports, entertainment and brand partnerships — bringing together
              strategy, creativity and execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-28 md:pb-40">
        <SectionHeading kicker="Capabilities" title="What We Do" sub="Creating opportunities across the sports ecosystem." />
        <ServiceList />
      </section>

      {/* OUR WORK */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-28 md:pb-40">
        <SectionHeading kicker="Selected" title="Our Work" sub="Sporting properties. Partnerships. Experiences." />
        <ProjectsSection />
      </section>

      <CTASection
        copy="Whether you are a brand looking for the right sporting property, a sporting organisation looking to unlock new opportunities, or talent looking to build meaningful partnerships, Genesis Sports is here to create the connection."
      />
    </>
  );
}
