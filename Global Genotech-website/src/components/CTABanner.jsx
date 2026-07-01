import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-navy)] px-8 py-14 text-center sm:px-16">
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--color-yellow-500)] opacity-20 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[color:var(--color-blue-600)] opacity-40 blur-3xl animate-drift" />

      <div className="relative">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Got a product that needs shipping?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
          Tell us about it. We'll reply with a straight answer on timeline,
          team shape and cost — usually within a day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-yellow-500)] px-7 py-3 text-[15px] font-semibold text-[color:var(--color-navy)] transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight size={16} />
          </NavLink>
          <NavLink
            to="/work"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            See our work
          </NavLink>
        </div>
      </div>
    </div>
  );
}
