export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/5 py-5" aria-hidden>
      <div className="inline-flex animate-marquee gap-10">
        {row.concat(row).map((item, i) => (
          <span
            key={i}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-mist flex items-center gap-10"
          >
            {item} <span className="text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
