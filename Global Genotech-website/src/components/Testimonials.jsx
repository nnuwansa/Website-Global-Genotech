// const QUOTES = [
//   {
//     quote:
//       "Global Genotech slotted into our sprint process in a week. Eighteen months later, half our roadmap has their fingerprints on it.",
//     name: "Ishara Perera",
//     role: "VP Engineering, Finlytic",
//   },
//   {
//     quote: 
//       "We came for extra hands during a crunch and stayed because the code quality was better than what we were shipping ourselves.",
//     name: "Daniel Voss",
//     role: "CTO, Marlin Logistics",
//   },
//   {
//     quote:
//       "The rebuild they led cut our page load times by more than half and our support tickets dropped almost overnight.",
//     name: "Amara Silva",
//     role: "Head of Product, Bloomcart",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <div className="grid gap-6 lg:grid-cols-3">
//       {QUOTES.map((t) => (
//         <figure
//           key={t.name}
//           className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7"
//         >
//           <blockquote className="font-display text-[17px] leading-relaxed text-[color:var(--color-navy)]">
//             “{t.quote}”
//           </blockquote>
//           <figcaption className="mt-6 flex items-center gap-3">
//             <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-blue-50)] font-display text-sm font-bold text-[color:var(--color-blue-600)]">
//               {t.name.split(" ").map((w) => w[0]).join("")}
//             </span>
//             <div>
//               <p className="text-sm font-semibold text-[color:var(--color-navy)]">{t.name}</p>
//               <p className="text-xs text-[color:var(--color-slate-500)]">{t.role}</p>
//             </div>
//           </figcaption>
//         </figure>
//       ))}
//     </div>
//   );
// }



const QUOTES = [
  {
    quote:
      "They understood our workflow before writing a single line of code. The leave management system they built is now used across every department.",
    name: "Ishara Perera",
    role: "HR Manager",
  },
  {
    quote:
      "We needed a POS system that could handle multiple branches without headaches. It's been running smoothly since day one.",
    name: "Daniel Fernando",
    role: "Operations Manager",
  },
  {
    quote:
      "The team was responsive, explained things clearly, and delivered our online store ahead of schedule. Would work with them again.",
    name: "Amara Silva",
    role: "Business Owner",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {QUOTES.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7"
        >
          <blockquote className="font-display text-[17px] leading-relaxed text-[color:var(--color-navy)]">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-blue-50)] font-display text-sm font-bold text-[color:var(--color-blue-600)]">
              {t.name.split(" ").map((w) => w[0]).join("")}
            </span>
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-navy)]">{t.name}</p>
              <p className="text-xs text-[color:var(--color-slate-500)]">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}