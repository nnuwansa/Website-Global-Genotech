import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  // { to: "/careers", label: "Careers" },
];

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Global Genotech home">
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0A1834" />
        <circle cx="11" cy="16" r="3.2" fill="#FFC800" />
        <circle cx="21" cy="9" r="2.6" fill="#3B82F6" />
        <circle cx="21" cy="23" r="2.6" fill="#3B82F6" />
        <path
          d="M13.5 14.5L18.5 10.5M13.5 17.5L18.5 21.5"
          stroke="#3B82F6"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[19px] font-bold tracking-tight text-[color:var(--color-navy)]">
        Global<span className="text-[color:var(--color-blue-500)]"> Genotech</span>
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-slate-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[color:var(--color-blue-600)]"
                    : "text-[color:var(--color-slate-600)] hover:text-[color:var(--color-navy)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[18px] left-0 h-[3px] w-full rounded-full bg-[color:var(--color-yellow-500)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-navy)] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[color:var(--color-blue-600)]"
          >
            Talk to us
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[color:var(--color-navy)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    isActive
                      ? "bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]"
                      : "text-[color:var(--color-slate-600)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--color-navy)] px-5 py-2.5 text-[15px] font-semibold text-white"
            >
              Talk to us
              <ArrowUpRight size={16} />
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
