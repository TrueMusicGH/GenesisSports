import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-8">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.1}>
          <Link
            href={`/our-work/${p.slug}`}
            className="group relative block overflow-hidden"
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
              <Image
                src={p.image}
                alt={`${p.title} — ${p.tag}`}
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent">
                  Project {p.no} — {p.tag}
                </p>
                <h3 className="mt-3 text-3xl md:text-6xl font-black uppercase tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm md:text-base text-mist leading-relaxed">
                  {p.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-bone border-b border-white/20 pb-1 group-hover:border-bone transition-colors">
                  Explore {p.title} <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
