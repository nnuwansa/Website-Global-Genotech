// import { NavLink } from "react-router-dom";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import NodeField from "../components/NodeField.jsx";
// import StatsBar from "../components/StatsBar.jsx";
// import LogoStrip from "../components/LogoStrip.jsx";
// import Eyebrow from "../components/Eyebrow.jsx";
// import ServicesGrid from "../components/ServicesGrid.jsx";
// import WhyUs from "../components/WhyUs.jsx";
// import ProcessSteps from "../components/ProcessSteps.jsx";
// import Testimonials from "../components/Testimonials.jsx";
// import CTABanner from "../components/CTABanner.jsx";

// export default function Home() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[color:var(--color-navy)] px-6 pb-28 pt-20 text-white lg:px-10 lg:pt-28">
//         <NodeField />
//         <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-[color:var(--color-blue-600)] opacity-30 blur-3xl" />
//         <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--color-yellow-500)] opacity-10 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-yellow-500)]">
//             <Sparkles size={13} />
//             Software studio · Colombo &amp; remote
//           </span>

//           <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
//             We build software that
//             <br className="hidden sm:block" /> your users don&apos;t
//             <span className="text-[color:var(--color-yellow-500)]"> notice —</span>
//             <br className="hidden sm:block" /> because it just works.
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
//             Global Genotech designs, engineers and scales web, mobile and
//             cloud products for teams who need senior engineering without
//             hiring a full department.
//           </p>

//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <NavLink
//               to="/contact"
//               className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-yellow-500)] px-7 py-3.5 text-[15px] font-semibold text-[color:var(--color-navy)] transition-transform hover:-translate-y-0.5"
//             >
//               Start a project
//               <ArrowUpRight size={16} />
//             </NavLink>
//             <NavLink
//               to="/work"
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
//             >
//               See our work
//             </NavLink>
//           </div>
//         </div>

//         <div className="relative z-10 mx-auto -mb-24 mt-16 max-w-5xl">
//           <StatsBar />
//         </div>
//       </section>

//       <div className="h-12 bg-[color:var(--color-cloud)] sm:h-14" />

//       <LogoStrip />

//       {/* Services preview */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
//             <div>
//               <Eyebrow>What we do</Eyebrow>
//               <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//                 One team, every layer of the stack
//               </h2>
//             </div>
//             <NavLink
//               to="/services"
//               className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-[color:var(--color-blue-600)]"
//             >
//               View all services
//               <ArrowUpRight size={15} />
//             </NavLink>
//           </div>

//           <div className="mt-12">
//             <ServicesGrid compact />
//           </div>
//         </div>
//       </section>

//       {/* Why us */}
//       <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <WhyUs />
//         </div>
//       </section>

//       {/* Process */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <Eyebrow>How we work</Eyebrow>
//             <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//               Four steps from idea to production
//             </h2>
//           </div>
//           <div className="mt-14">
//             <ProcessSteps />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <Eyebrow>Client stories</Eyebrow>
//             <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//               Teams  that trust us with their systems
//             </h2>
//           </div>
//           <div className="mt-14">
//             <Testimonials />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <CTABanner />
//         </div>
//       </section>
//     </>
//   );
// }



// import { NavLink } from "react-router-dom";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import NodeField from "../components/NodeField.jsx";
// import StatsBar from "../components/StatsBar.jsx";
// import LogoStrip from "../components/LogoStrip.jsx";
// import Eyebrow from "../components/Eyebrow.jsx";
// import ServicesGrid from "../components/ServicesGrid.jsx";
// import WhyUs from "../components/WhyUs.jsx";
// import ProcessSteps from "../components/ProcessSteps.jsx";
// import Testimonials from "../components/Testimonials.jsx";
// import CTABanner from "../components/CTABanner.jsx";

// export default function Home() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[color:var(--color-navy)] px-6 pb-28 pt-20 text-white lg:px-10 lg:pt-28">
//         <NodeField />
//         <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-[color:var(--color-blue-600)] opacity-30 blur-3xl" />
//         <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--color-yellow-500)] opacity-10 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-yellow-500)]">
//             <Sparkles size={13} />
//             Software studio · Colombo &amp; remote
//           </span>

//           <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
//             Software Development, POS and MIS
//             <br className="hidden sm:block" /> systems that
//             <span className="text-[color:var(--color-yellow-500)]"> just work —</span>
//             <br className="hidden sm:block" /> every single day.
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
//             We design, build and support custom software, point-of-sale and
//             management information systems for businesses that need
//             reliable technology without hiring a full in-house team.
//           </p>

//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <NavLink
//               to="/contact"
//               className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-yellow-500)] px-7 py-3.5 text-[15px] font-semibold text-[color:var(--color-navy)] transition-transform hover:-translate-y-0.5"
//             >
//               Start a project
//               <ArrowUpRight size={16} />
//             </NavLink>
//             <NavLink
//               to="/work"
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
//             >
//               See our work
//             </NavLink>
//           </div>
//         </div>

//         <div className="relative z-10 mx-auto -mb-24 mt-16 max-w-5xl">
//           <StatsBar />
//         </div>
//       </section>

//       <div className="h-12 bg-[color:var(--color-cloud)] sm:h-14" />

//       <LogoStrip />

//       {/* Services preview */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
//             <div>
//               <Eyebrow>What we do</Eyebrow>
//               <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//                 One team, every system your business needs
//               </h2>
//             </div>
//             <NavLink
//               to="/services"
//               className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-[color:var(--color-blue-600)]"
//             >
//               View all services
//               <ArrowUpRight size={15} />
//             </NavLink>
//           </div>

//           <div className="mt-12">
//             <ServicesGrid compact />
//           </div>
//         </div>
//       </section>

//       {/* Why us */}
//       <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <WhyUs />
//         </div>
//       </section>

//       {/* Process */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <Eyebrow>How we work</Eyebrow>
//             <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//               Four steps from idea to production
//             </h2>
//           </div>
//           <div className="mt-14">
//             <ProcessSteps />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <Eyebrow>Client stories</Eyebrow>
//             <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
//               Businesses that trust us with their systems
//             </h2>
//           </div>
//           <div className="mt-14">
//             <Testimonials />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto max-w-6xl">
//           <CTABanner />
//         </div>
//       </section>
//     </>
//   );
// }


import { NavLink } from "react-router-dom";
import { ArrowUpRight, Sparkles, FileClock, Truck, Gavel, Mail, ShoppingCart, LayoutGrid } from "lucide-react";
import NodeField from "../components/NodeField.jsx";
import StatsBar from "../components/StatsBar.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import WhyUs from "../components/WhyUs.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTABanner from "../components/CTABanner.jsx";

const UNIQUE_BUILDS = [

  {
    icon: ShoppingCart,
    title: "Custom POS systems",
    desc: "Multi-branch, retail, or hospitality — POS built around your workflow, not the other way around.",
  },
  {
    icon: LayoutGrid,
    title: "Purpose-built MIS platforms",
    desc: "When off-the-shelf software doesn't fit, we design and build the exact system your business needs from scratch.",
  },
  
  {
    icon: Gavel,
    title: "Arbitration case management",
    desc: "A rare, purpose-built system for tracking cases, hearings, documents and status — built for legal and arbitration workflows.",
  },
 
  
  
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--color-navy)] px-6 pb-28 pt-20 text-white lg:px-10 lg:pt-28">
        <NodeField />
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-[color:var(--color-blue-600)] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--color-yellow-500)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-yellow-500)]">
            <Sparkles size={13} />
            Software studio · Colombo &amp; remote
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
            We build the systems
            <br className="hidden sm:block" /> businesses
            <span className="text-[color:var(--color-yellow-500)]"> forget they're using —</span>
            <br className="hidden sm:block" /> because they just work.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Every system we build is unique and exclusive to you — designed from scratch, never templated, never generic.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-yellow-500)] px-7 py-3.5 text-[15px] font-semibold text-[color:var(--color-navy)] transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight size={16} />
            </NavLink>
            <NavLink
              to="/work"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              See our work
            </NavLink>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mb-24 mt-16 max-w-5xl">
          <StatsBar />
        </div>
      </section>

      <div className="h-12 bg-[color:var(--color-cloud)] sm:h-14" />

      <LogoStrip />

      {/* Services preview */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
                One team, every system your business needs
              </h2>
            </div>
            <NavLink
              to="/services"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-[color:var(--color-blue-600)]"
            >
              View all services
              <ArrowUpRight size={15} />
            </NavLink>
          </div>

          <div className="mt-12">
            <ServicesGrid compact />
          </div>
        </div>
      </section>

      {/* Unique / Exclusive builds */}
      <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What sets us apart</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              Systems most agencies have never even built
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
              Beyond standard software and POS work, we've built niche,
              purpose-specific systems that most teams wouldn't know where
              to start on.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UNIQUE_BUILDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--color-navy)]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <WhyUs />
        </div>
      </section>

      {/* Process */}
      <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              Four steps from idea to production
            </h2>
          </div>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Client stories</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              Businesses that trust us with their systems
            </h2>
          </div>
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <CTABanner />
        </div>
      </section>
    </>
  );
}