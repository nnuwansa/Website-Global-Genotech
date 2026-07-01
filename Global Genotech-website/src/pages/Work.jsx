import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import CTABanner from "../components/CTABanner.jsx";

const CASES = [
  {
    tag: "Fintech",
    title: "Finlytic — real-time trading dashboard",
    desc: "Rebuilt a legacy trading console into a real-time React platform handling 40k events per second.",
    metric: "63% faster load time",
    color: "bg-[color:var(--color-blue-600)]",
  },
  {
    tag: "Logistics",
    title: "Marlin — fleet routing engine",
    desc: "Designed a route-optimization engine and driver app used across 1,200 vehicles daily.",
    metric: "18% lower fuel cost",
    color: "bg-[color:var(--color-navy)]",
  },
  {
    tag: "E-commerce",
    title: "Bloomcart — headless storefront",
    desc: "Migrated a monolithic store to a headless Next.js front end with a custom checkout flow.",
    metric: "2.1x conversion rate",
    color: "bg-[color:var(--color-yellow-600)]",
  },
  {
    tag: "Healthtech",
    title: "Verdant Health — patient portal",
    desc: "Built a HIPAA-aligned patient portal connecting 40+ clinics to a single scheduling system.",
    metric: "30k+ monthly patients",
    color: "bg-[color:var(--color-blue-700)]",
  },
  {
    tag: "Banking",
    title: "Coral Bank — mobile onboarding",
    desc: "Cut digital account opening from 14 steps to 4 with a redesigned KYC flow.",
    metric: "9 min avg. onboarding",
    color: "bg-[color:var(--color-navy)]",
  },
  {
    tag: "Media",
    title: "Orbit Media — subscriber platform",
    desc: "Built a subscription and paywall system now powering three newsroom brands.",
    metric: "120k active subscribers",
    color: "bg-[color:var(--color-blue-600)]",
  },
];

export default function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Products we've taken from spec to production"
        description="A handful of the platforms we've designed, built and continue to operate alongside our clients."
      />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className={`relative h-40 ${c.color} p-6`}>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {c.tag}
                </span>
                <ArrowUpRight
                  size={20}
                  className="absolute right-6 top-6 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-semibold text-[color:var(--color-navy)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
                  {c.desc}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-[color:var(--color-blue-50)] px-3 py-1 text-xs font-semibold text-[color:var(--color-blue-600)]">
                  {c.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
