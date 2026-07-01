const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We map your goals, users and constraints, then define what success actually looks like.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Architecture, UX and technical planning happen together, so nothing gets rebuilt twice.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Two-week sprints, working demos, and a Slack channel that never goes quiet.",
  },
  {
    n: "04",
    title: "Launch & scale",
    desc: "We ship, monitor, and stay on to tune performance as real traffic arrives.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-slate-200 lg:block" />
      {STEPS.map((step) => (
        <div key={step.n} className="relative">
          <div className="relative z-10 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-[color:var(--color-navy)] bg-white font-display text-sm font-bold text-[color:var(--color-navy)]">
            {step.n}
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--color-navy)]">
            {step.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
