import PageHeader from "../components/PageHeader.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import StatsBar from "../components/StatsBar.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { Target, HeartHandshake, Gauge, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We measure success by what shipped and worked, not hours logged.",
  },
  {
    icon: HeartHandshake,
    title: "Radical transparency",
    desc: "You get access to our board, our standups, and our honest opinion — even when it's inconvenient.",
  },
  {
    icon: Gauge,
    title: "Bias for speed",
    desc: "We'd rather ship a working version this week than a perfect one next quarter.",
  },
  {
    icon: ShieldCheck,
    title: "Own the outcome",
    desc: "If something breaks in production, we're the ones who get paged — not just you.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Global Genotech "
        title="A studio built by engineers who got tired of bad handoffs"
        description="Global Genotech started in 2014 as a three-person team fixing other agencies' unfinished projects. Today we're 80+ engineers, designers and product leads working with teams across South Asia, Europe and North America."
      />

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto -mt-32 max-w-5xl">
          <StatsBar />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              From a two-desk office to a distributed engineering team
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
              <p>
                We were freelancers before we were a company — three
                engineers taking on the projects bigger agencies had
                over-promised and under-delivered. Word travelled faster than
                our invoicing could keep up with.
              </p>
              <p>
                A decade later, the founding instinct hasn&apos;t changed:
                small senior teams, direct communication, and code we&apos;d
                be comfortable maintaining ourselves. We&apos;ve just gotten
                better resourced to do it at scale.
              </p>
              <p>
                Today our engineers sit inside client Slack channels from
                Colombo to Stockholm, shipping everything from fintech
                platforms to logistics dashboards used by thousands of
                drivers daily.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[color:var(--color-navy)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-slate-500)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              We're judged by what we ship
            </h2>
          </div>
          <div className="mt-14">
            <Testimonials />
          </div>
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
