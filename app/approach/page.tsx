import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "Understand, strategise, create, execute, build. Genesis Sports connects properties, brands, talent, audiences and experiences.",
};

const STAGES = [
  ["01", "Understand", "We begin by understanding the property, the brand, the audience and the objective."],
  ["02", "Strategise", "We identify the right opportunities and build a strategy around them."],
  ["03", "Create", "We develop ideas, partnerships and experiences that connect brands with audiences through sport."],
  ["04", "Execute", "We take ideas from strategy and presentations to real-world implementation."],
  ["05", "Build", "We focus on creating relationships and opportunities that can grow beyond a single campaign or event."],
];

export default function ApproachPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Our Approach</p>
        <h1 className="text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] font-black uppercase tracking-tight">
          We connect<br /><span className="text-[#c9a24b]">the dots.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-mist text-lg leading-relaxed">
          Genesis Sports brings these elements together to create commercially relevant and
          creatively driven opportunities.
        </p>
      </section>

      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <div className="flex flex-col items-center gap-4 text-3xl md:text-6xl font-black uppercase tracking-tight">
            {["Property", "Brand", "Talent", "Audience", "Experience"].map((w, i, arr) => (
              <span key={w} className="flex flex-col items-center gap-4">
                {w}
                {i < arr.length - 1 && <span className="text-accent text-2xl">↓</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24">
        {STAGES.map(([no, title, desc]) => (
          <div key={no} className="grid md:grid-cols-12 gap-6 py-12 border-b border-white/10">
            <p className="md:col-span-2 text-accent text-xs tracking-[0.3em]">{no}</p>
            <h2 className="md:col-span-4 text-3xl md:text-5xl font-black uppercase tracking-tight">{title}</h2>
            <p className="md:col-span-6 text-mist leading-relaxed md:pt-3 max-w-xl">{desc}</p>
          </div>
        ))}
      </section>

      <CTASection copy="Ready to connect the dots?" ctaLabel="Let's Talk" />
    </>
  );
}
