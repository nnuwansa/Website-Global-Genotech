import { ArrowUpRight, Laptop, Plane, GraduationCap, HeartPulse } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import CTABanner from "../components/CTABanner.jsx";

const PERKS = [
  { icon: Laptop, title: "Remote-first", desc: "Work from anywhere with async-friendly rituals." },
  { icon: Plane, title: "Team offsites", desc: "Annual company trip, fully covered." },
  { icon: GraduationCap, title: "Learning budget", desc: "$1,500/year for courses, books and conferences." },
  { icon: HeartPulse, title: "Health cover", desc: "Full medical insurance for you and your family." },
];

const ROLES = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote · Sri Lanka" },
  { title: "Product Designer", team: "Design", location: "Colombo (hybrid)" },
  { title: "DevOps Engineer", team: "Platform", location: "Remote" },
  { title: "Engagement Manager", team: "Delivery", location: "Colombo" },
];

export default function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build the software behind the software"
        description="We hire slowly, promote from within, and give engineers real ownership over what they ship."
      />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-[color:var(--color-navy)]">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--color-slate-500)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
            Currently hiring
          </h2>

          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {ROLES.map((role) => (
              <a
                key={role.title}
                href="mailto:globalgenotechsl@gmail.com"
                className="group flex flex-col items-start justify-between gap-2 px-6 py-5 transition-colors hover:bg-[color:var(--color-blue-50)]/50 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-display text-base font-semibold text-[color:var(--color-navy)]">
                    {role.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[color:var(--color-slate-500)]">
                    {role.team} · {role.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-blue-600)]">
                  Apply
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-[color:var(--color-slate-500)]">
            Don&apos;t see your role?{" "}
            <a href="mailto:globalgenotechsl@gmail.com" className="font-semibold text-[color:var(--color-blue-600)]">
              Send us your CV anyway
            </a>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
