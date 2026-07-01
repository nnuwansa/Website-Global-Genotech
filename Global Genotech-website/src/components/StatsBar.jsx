const STATS = [
  { value: "2+", label: "years building software" },
  { value: "96%", label: "client retention" },
  // { value: "80+", label: "engineers on the bench" },
  { value: "10+", label: "products" },
];

export default function StatsBar({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm"
        >
          <span className="font-display text-base font-bold text-[color:var(--color-navy)]">
            {stat.value}
          </span>
          <span className="text-sm text-[color:var(--color-slate-500)]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
