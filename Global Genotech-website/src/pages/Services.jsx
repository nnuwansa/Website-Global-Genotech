import PageHeader from "../components/PageHeader.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import CTABanner from "../components/CTABanner.jsx";

const MODELS = [
  {
    title: "Dedicated team",
    price: "From $18k / month",
    desc: "A fixed squad of engineers, a designer and a lead — embedded in your roadmap full-time.",
    features: ["Weekly sprint demos", "Direct Slack access", "Fixed monthly cost"],
    highlight: true,
  },
  {
    title: "Fixed-scope build",
    price: "Custom quote",
    desc: "Clear spec, clear deadline, clear price. Best for MVPs and well-defined feature builds.",
    features: ["Detailed proposal upfront", "Milestone-based billing", "2-week delivery cadence"],
    highlight: false,
  },
  {
    title: "Staff augmentation",
    price: "From $3.2k / engineer / month",
    desc: "Individual senior engineers who plug directly into your existing team and process.",
    features: ["Vetted senior hires only", "Flexible ramp up or down", "No recruiting overhead"],
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every layer of the stack, one accountable team"
        description="From first sketch to production monitoring, we cover the parts of software delivery that usually fall between agencies, freelancers and in-house teams."
      />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <ServicesGrid />
        </div>
      </section>

      {/* <section className="bg-[color:var(--color-cloud)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Engagement models</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              Pick the shape of team you need
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {MODELS.map((m) => (
              <div
                key={m.title}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  m.highlight
                    ? "border-[color:var(--color-navy)] bg-[color:var(--color-navy)] text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {m.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--color-yellow-500)] px-3 py-1 text-xs font-bold text-[color:var(--color-navy)]">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    m.highlight ? "text-[color:var(--color-yellow-500)]" : "text-[color:var(--color-blue-600)]"
                  }`}
                >
                  {m.price}
                </p>
                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    m.highlight ? "text-white/70" : "text-[color:var(--color-slate-500)]"
                  }`}
                >
                  {m.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-sm ${
                        m.highlight ? "text-white/80" : "text-[color:var(--color-slate-600)]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          m.highlight ? "bg-[color:var(--color-yellow-500)]" : "bg-[color:var(--color-blue-500)]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Engagement flow</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              What happens after you reach out
            </h2>
          </div>
          <div className="mt-14">
            <ProcessSteps />
          </div>
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
