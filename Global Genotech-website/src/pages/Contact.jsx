// import { useState } from "react";
// import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
// import PageHeader from "../components/PageHeader.jsx";

// const INFO = [
//   { icon: Mail, label: "Email", value: "globalgenotechsl@gmail.com" },
//   { icon: Phone, label: "Phone", value: "+94 70 233 8866" },
//   { icon: MapPin, label: "Office", value: "Level 13, Maga One, Narahenpita Road, Colombo 00500" },
// ];

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <PageHeader
//         eyebrow="Contact"
//         title="Let's talk about what you're building"
//         description="Share a few details and a member of our team will get back to you within one business day."
//       />

//       <section className="px-6 py-24 lg:px-10">
//         <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
//           <div>
//             <h2 className="font-display text-2xl font-bold text-[color:var(--color-navy)]">
//               Get in touch
//             </h2>
//             <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
//               Prefer email or a call? Reach us directly — we read every
//               message ourselves.
//             </p>

//             <div className="mt-8 space-y-5">
//               {INFO.map(({ icon: Icon, label, value }) => (
//                 <div key={label} className="flex items-start gap-3.5">
//                   <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
//                     <Icon size={18} />
//                   </span>
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
//                       {label}
//                     </p>
//                     <p className="mt-0.5 text-sm font-medium text-[color:var(--color-navy)]">
//                       {value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
//               <div className="flex items-center gap-1.5 bg-[color:var(--color-navy)] px-4 py-3">
//                 <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
//               </div>
//               <div className="bg-[color:var(--color-cloud)] p-6">
//                 <p className="font-mono text-xs text-[color:var(--color-slate-500)]">response_time.log</p>
//                 <p className="mt-2 font-display text-3xl font-bold text-[color:var(--color-navy)]">
//                   &lt; 24 hrs
//                 </p>
//                 <p className="mt-1 text-sm text-[color:var(--color-slate-500)]">
//                   average first reply time this quarter
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center py-16 text-center">
//                 <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-yellow-500)]/20 text-[color:var(--color-yellow-600)]">
//                   <CheckCircle2 size={28} />
//                 </span>
//                 <h3 className="mt-5 font-display text-xl font-bold text-[color:var(--color-navy)]">
//                   Message sent
//                 </h3>
//                 <p className="mt-2 max-w-sm text-sm text-[color:var(--color-slate-500)]">
//                   Thanks, {form.name.split(" ")[0] || "there"}. We'll reply to{" "}
//                   {form.email || "your email"} within one business day.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <Field label="Full name" name="name" value={form.name} onChange={handleChange} placeholder="Nadini Perera" required />
//                   <Field label="Work email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="nadini@company.com" required />
//                 </div>
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
//                   <div>
//                     <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
//                       Budget range
//                     </label>
//                     <select
//                       name="budget"
//                       value={form.budget}
//                       onChange={handleChange}
//                       className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
//                     >
//                       <option value="">Select a range</option>
//                       <option>Under $10k</option>
//                       <option>$10k – $50k</option>
//                       <option>$50k – $150k</option>
//                       <option>$150k+</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
//                     Project details
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     placeholder="Tell us what you're building, your timeline, and anything else that helps us prepare."
//                     className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[color:var(--color-navy)] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[color:var(--color-blue-600)] sm:w-auto"
//                 >
//                   Send message
//                   <ArrowUpRight size={16} />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
//   return (
//     <div>
//       <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
//       />
//     </div>
//   );
// }




import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import emailjs from "@emailjs/browser";

// TODO: EmailJS dashboard eken meka replace krnna (https://www.emailjs.com)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const INFO = [
  { icon: Mail, label: "Email", value: "globalgenotechsl@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 70 233 8866" },
  { icon: MapPin, label: "Office", value: "Level 13, Maga One, Narahenpita Road, Colombo 00500" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          budget: form.budget || "Not specified",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description="Share a few details and a member of our team will get back to you within one business day."
      />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-[color:var(--color-navy)]">
              Get in touch
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-slate-500)]">
              Prefer email or a call? Reach us directly — we read every
              message ourselves.
            </p>

            <div className="mt-8 space-y-5">
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-blue-50)] text-[color:var(--color-blue-600)]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[color:var(--color-navy)]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 bg-[color:var(--color-navy)] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="bg-[color:var(--color-cloud)] p-6">
                <p className="font-mono text-xs text-[color:var(--color-slate-500)]">response_time.log</p>
                <p className="mt-2 font-display text-3xl font-bold text-[color:var(--color-navy)]">
                  &lt; 24 hrs
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-slate-500)]">
                  average first reply time this quarter
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-yellow-500)]/20 text-[color:var(--color-yellow-600)]">
                  <CheckCircle2 size={28} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-[color:var(--color-navy)]">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-[color:var(--color-slate-500)]">
                  Thanks, {form.name.split(" ")[0] || "there"}. We'll reply to{" "}
                  {form.email || "your email"} within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" value={form.name} onChange={handleChange}  required />
                  <Field label="Work email" name="email" type="email" value={form.email} onChange={handleChange}  required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                  <div>
                    {/* <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
                      Budget range
                    </label> */}
                    {/* <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
                    >
                      <option value="">Select a range</option>
                      <option>Under $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k – $150k</option>
                      <option>$150k+</option>
                    </select> */}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what you're building, your timeline, and anything else that helps us prepare."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[color:var(--color-navy)] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[color:var(--color-blue-600)] disabled:opacity-60 sm:w-auto"
                >
                  {sending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-slate-500)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[color:var(--color-navy)] outline-none transition-colors focus:border-[color:var(--color-blue-500)]"
      />
    </div>
  );
}