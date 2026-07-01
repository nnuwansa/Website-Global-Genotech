import { Check } from "lucide-react";
import Eyebrow from "./Eyebrow.jsx";

const POINTS = [
  "Senior engineers only — no bench-warming juniors learning on your budget.",
  "Fixed sprint cadence with demos you can actually see progress in.",
  "Your tools, your repo, your timezone overlap — we embed, not outsource.",
  "Transparent pricing with no surprise change-request invoices.",
];

export default function WhyUs() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <Eyebrow>Why teams choose us</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
          Engineering that behaves like an in-house team
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--color-slate-500)]">
          Most agencies optimize for billable hours. We optimize for the
          product working — so we build the way your best in-house team
          would, just faster.
        </p>

        <ul className="mt-8 space-y-4">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-yellow-500)]">
                <Check size={14} strokeWidth={3} className="text-[color:var(--color-navy)]" />
              </span>
              <span className="text-[15px] leading-relaxed text-[color:var(--color-slate-600)]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-[color:var(--color-yellow-500)]/10" />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[color:var(--color-navy)] p-1 shadow-2xl shadow-blue-900/10">
          <div className="flex items-center gap-1.5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <pre className="overflow-x-auto px-5 pb-6 pt-1 font-mono text-[13px] leading-relaxed text-blue-100">
{`> Global Genotech deploy --env production

✓ build passed        212 tests
✓ type check          0 errors
✓ security scan       clean
✓ deployed            api.client.io

release v4.2.0 is live · 41ms p95`}
          </pre>
        </div>
      </div>
    </div>
  );
}
