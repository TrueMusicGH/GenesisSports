import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Sporting properties, partnerships and experiences — a look at Genesis Sports projects.",
};

export default function OurProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Portfolio</p>
        <h1 className="text-[clamp(3rem,11vw,10rem)] leading-[0.92] font-black uppercase tracking-tight">
          Our Projects
        </h1>
        <p className="mt-8 text-mist text-lg tracking-[0.2em] uppercase">
          Sporting properties. <span className="text-[#c9a24b]">Partnerships.</span> Experiences.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24">
        <ProjectsSection />
      </section>

      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight">More to come.</h2>
          <p className="mt-6 max-w-2xl text-mist text-lg leading-relaxed">
            Genesis Sports is continuously developing new sporting properties, partnerships and
            experiences across sports and entertainment.
          </p>
        </div>
      </section>

      <CTASection copy="Have a property or partnership in mind?" ctaLabel="Let's Talk" />
    </>
  );
}
