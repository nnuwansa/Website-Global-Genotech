const CLIENTS = [
  "Finlytic",
  "Marlin Logistics",
  "Bloomcart",
  "Verdant Health",
  "Coral Bank",
  "Skyline Retail",
  "Orbit Media",
  "Northstar Labs",
];

export default function LogoStrip() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <div className="overflow-hidden border-y border-slate-100 bg-[color:var(--color-cloud)] py-6">
      <div className="flex w-max animate-marquee gap-14">
        {loop.map((name, i) => (
          <span
            key={name + i}
            className="font-display text-lg font-semibold tracking-tight text-[color:var(--color-slate-500)]/60"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
