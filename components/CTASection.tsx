import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({
  heading = ["Let's Build", "Something", "Around Sport."],
  copy,
  ctaLabel = "Get In Touch",
  href = "/contact",
}: {
  heading?: string[];
  copy?: React.ReactNode;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-28 md:py-44">
        <Reveal>
          <h2 className="text-[clamp(3rem,10vw,9rem)] leading-[0.92] font-black uppercase tracking-tight">
            {heading.map((line, i) => (
              <span key={line} className={`block ${i === heading.length - 1 ? "text-[#c9a24b]" : ""}`}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        {copy && (
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-mist text-base md:text-xl leading-relaxed">
              {copy}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.25}>
          <Link
            href={href}
            className="mt-12 inline-flex items-center gap-3 border border-white/15 px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#c9a24b] hover:bg-[#c9a24b] hover:text-ink transition-colors duration-300"
          >
            {ctaLabel} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
