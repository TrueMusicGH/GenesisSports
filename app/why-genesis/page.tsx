import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Genesis",
  description: "Strategy, creativity, execution, connections and long-term thinking — the Genesis Sports principles.",
};

const PRINCIPLES = [
  ["01", "Strategy", "Understanding the property, the brand and the audience before building the opportunity."],
  ["02", "Creativity", "Creating ideas that make sports partnerships more engaging, relevant and memorable."],
  ["03", "Execution", "Taking ideas from concept to implementation with a focus on detail and delivery."],
  ["04", "Connections", "Bringing together brands, sporting properties, talent and audiences to create meaningful opportunities."],
  ["05", "Long-Term Thinking", "Building partnerships that can evolve and create value beyond a single event or campaign."],
];

export default function WhyGenesisPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Why Genesis</p>
        <h1 className="text-[clamp(3rem,11vw,10rem)] leading-[0.92] font-black uppercase tracking-tight">
          Why<br /><span className="text-[#c9a24b]">Genesis.</span>
        </h1>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24">
        {PRINCIPLES.map(([no, title, desc]) => (
          <div key={no} className="grid md:grid-cols-12 gap-6 py-12 border-t border-white/10">
            <p className="md:col-span-2 text-accent text-xs tracking-[0.3em]">{no}</p>
            <h2 className="md:col-span-4 text-3xl md:text-5xl font-black uppercase tracking-tight">{title}</h2>
            <p className="md:col-span-6 text-mist leading-relaxed md:pt-3 max-w-xl">{desc}</p>
          </div>
        ))}
      </section>
      <CTASection copy="Work with a partner that thinks beyond the campaign." ctaLabel="Get In Touch" />
    </>
  );
}
