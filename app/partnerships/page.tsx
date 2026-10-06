import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "We work with brands, sporting properties, talent and organisations.",
};

const CATS = [
  ["01", "Brands", "We help brands connect with sports audiences through relevant sponsorships, activations, content and experiences."],
  ["02", "Sporting Properties", "We work with teams, leagues, tournaments and sporting organisations to strengthen their marketing and commercial potential."],
  ["03", "Talent", "We create meaningful opportunities for athletes, celebrities and personalities to build partnerships with brands and sporting properties."],
  ["04", "Organisations", "We work with clubs, corporates and organisations to develop sporting experiences, events and engagement opportunities."],
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Partnerships</p>
        <h1 className="text-[clamp(3rem,11vw,10rem)] leading-[0.92] font-black uppercase tracking-tight">
          We work <span className="text-[#c9a24b]">with.</span>
        </h1>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24">
        {CATS.map(([no, t, d]) => (
          <div key={no} className="grid md:grid-cols-12 gap-6 py-12 border-t border-white/10">
            <p className="md:col-span-2 text-accent text-xs tracking-[0.3em]">{no}</p>
            <h2 className="md:col-span-4 text-3xl md:text-5xl font-black uppercase tracking-tight">{t}</h2>
            <p className="md:col-span-6 text-mist leading-relaxed md:pt-3 max-w-xl">{d}</p>
          </div>
        ))}
      </section>
      <CTASection copy="Let's build the right partnership." ctaLabel="Get In Touch" />
    </>
  );
}
