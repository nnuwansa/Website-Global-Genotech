import { NavLink } from "react-router-dom";
import { ArrowUpRight, Globe, Link2, MessageCircle } from "lucide-react";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/work", label: "Our work" },
      // { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Software Development" },
      { to: "/services", label: "MIS & ERP systems" },
      { to: "/services", label: "POS systems" },
      // { to: "/services", label: "Team augmentation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--color-navy)] text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--color-blue-600)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[color:var(--color-yellow-500)] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FFC800" />
                <circle cx="11" cy="16" r="3.2" fill="#0A1834" />
                <circle cx="21" cy="9" r="2.6" fill="#0A1834" />
                <circle cx="21" cy="23" r="2.6" fill="#0A1834" />
                <path
                  d="M13.5 14.5L18.5 10.5M13.5 17.5L18.5 21.5"
                  stroke="#0A1834"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-display text-lg font-bold">Global Genotech</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              We design, engineer and scale digital products for teams who
              refuse to ship average software.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Link2, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[color:var(--color-yellow-500)] hover:text-[color:var(--color-yellow-500)]"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={link.label + i}>
                    <NavLink
                      to={link.to}
                      className="text-sm text-white/80 transition-colors hover:text-[color:var(--color-yellow-500)]"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Start a project
            </h4>
            <p className="mt-4 text-sm text-white/70">
              Tell us what you&apos;re building — we usually reply within one
              business day.
            </p>
            <a
              href="mailto:globalgenotechsl@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-yellow-500)]"
            >
              globalgenotechsl@gmail.com
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Global Genotech (Private) Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
