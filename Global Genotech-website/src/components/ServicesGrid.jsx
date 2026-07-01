import { Code2, Cloud, BrainCircuit, Users2, Smartphone, ShieldCheck } from "lucide-react";

export const SERVICES = [
  {
    icon: Code2,
    title: "Product engineering",
    desc: "Full-stack web and backend systems built on architecture that survives contact with real users.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    desc: "Native and cross-platform apps for iOS and Android, from prototype to App Store launch.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure and GCP infrastructure, CI/CD pipelines, and observability that keeps you shipping fast.",
  },
  {
    icon: BrainCircuit,
    title: "AI & data",
    desc: "LLM integrations, data pipelines and applied ML that turn your data into a working feature.",
  },
  {
    icon: Users2,
    title: "Team augmentation",
    desc: "Dedicated engineers embedded in your team, your tools, your timezone, and your standups.",
  },
  {
    icon: ShieldCheck,
    title: "QA & security",
    desc: "Automated testing, penetration testing and code audits so launches don't turn into incidents.",
  },
];

export default function ServicesGrid({ compact = false }) {
  const items = compact ? SERVICES.slice(0, 3) : SERVICES;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--color-blue-500)]/40 hover:shadow-xl hover:shadow-blue-500/5"
        >
          <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-[color:var(--color-yellow-500)]/0 transition-colors group-hover:bg-[color:var(--color-yellow-500)]/15" />
          <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
            <Icon size={22} strokeWidth={2} />
          </div>
          <h3 className="relative mt-5 font-display text-lg font-semibold text-[color:var(--color-navy)]">
            {title}
          </h3>
          <p className="relative mt-2 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
