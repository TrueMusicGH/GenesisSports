export default function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 md:mb-20">
      {kicker && (
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a24b] mb-5">{kicker}</p>
      )}
      <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
        {title}
      </h2>
      {sub && <p className="mt-6 text-mist text-lg md:text-xl max-w-2xl">{sub}</p>}
    </div>
  );
}
