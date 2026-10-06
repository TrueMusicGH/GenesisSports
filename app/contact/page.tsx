import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Genesis Sports — sports marketing, sponsorship and brand partnerships.",
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-28 mx-auto max-w-[1400px] px-5 md:px-10">
      <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-8">Contact</p>
      <h1 className="text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] font-black uppercase tracking-tight">
        Let&apos;s build<br />something<br /><span className="text-[#c9a24b]">around sport.</span>
      </h1>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <div>
          <ul className="space-y-5 text-xl md:text-2xl leading-relaxed">
            <li>Have a brand looking for the right sporting opportunity?</li>
            <li>Are you a sporting property looking to unlock new commercial opportunities?</li>
            <li>Are you looking to build a sports-led event, activation or experience?</li>
          </ul>
          <p className="mt-10 text-2xl font-black uppercase">Let&apos;s start a conversation.</p>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="font-black uppercase tracking-tight">Genesis Sports</p>
            <p className="mt-2 text-mist text-sm">Kolkata, India</p>
            <p className="mt-1 text-mist text-sm">
              <span className="text-[#c9a24b]">Address:</span> 422 Lake Gardens, Kolkata, West Bengal
            </p>
            <p className="mt-1 text-mist text-sm">
              <span className="text-[#c9a24b]">Contact:</span>{" "}
              <a href="tel:+9147726162" className="hover:text-[#c9a24b] transition-colors">+91 47726162</a>
            </p>
            <a
              href="mailto:sb@genesissports.co.in"
              className="mt-2 inline-block hover:text-mist transition-colors"
            >
              sb@genesissports.co.in
            </a>
          </div>
        </div>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>

      <div className="mt-20 border border-white/10 overflow-hidden">
        <iframe
          title="Genesis Sports location — 422 Lake Gardens, Kolkata"
          src="https://www.google.com/maps?q=422+Lake+Gardens,+Kolkata,+West+Bengal&output=embed"
          className="w-full h-[320px] md:h-[420px] border-0 grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-xs text-mist">
        <a
          href="https://www.google.com/maps/search/?api=1&query=422+Lake+Gardens,+Kolkata,+West+Bengal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c9a24b] transition-colors"
        >
          Open in Google Maps →
        </a>
      </p>
    </section>
  );
}
