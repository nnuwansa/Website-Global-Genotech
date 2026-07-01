import NodeField from "./NodeField.jsx";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy)] px-6 pb-20 pt-24 text-white lg:px-10 lg:pb-24 lg:pt-32">
      <NodeField />
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[color:var(--color-blue-600)] opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-yellow-500)]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
