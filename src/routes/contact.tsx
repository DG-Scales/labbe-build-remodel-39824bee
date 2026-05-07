import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Labbe Build + Remodel" },
      { name: "description", content: "Request a free consultation or quote from Kevin Labbe. Serving the North Shore for 30+ years." },
      { property: "og:title", content: "Book a Consultation — Labbe Build + Remodel" },
      { property: "og:description", content: "Request a free quote or consultation today." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(60),
  lastName: z.string().trim().min(1, "Last name required").max(60),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone required").max(20),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  projectType: z.string().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const subject = encodeURIComponent(`Consultation request — ${d.firstName} ${d.lastName}`);
    const body = encodeURIComponent(
      `Name: ${d.firstName} ${d.lastName}\nEmail: ${d.email}\nPhone: ${d.phone}\nCity: ${d.city || "-"}\nProject: ${d.projectType || "-"}\n\n${d.message || ""}`
    );
    window.location.href = `mailto:kevin@labbebuild.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field = "w-full bg-card border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <>
      <section className="bg-brand-black text-primary-foreground py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">Let's Build · 30+ Years</p>
          <h1 className="text-5xl md:text-6xl font-display uppercase">Book Your Consultation</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Free quotes. Honest answers. Tell us about your project and Kevin will be in touch.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <aside className="space-y-6">
          <a href="tel:+16179539498" className="block bg-gradient-yellow text-brand-black p-6 rounded-lg shadow-yellow hover:brightness-110 transition">
            <Phone className="h-6 w-6 mb-2" />
            <div className="font-display text-2xl uppercase">Call Now</div>
            <div className="text-sm">(617) 953-9498</div>
          </a>
          <a href="mailto:kevin@labbebuild.com" className="block bg-brand-black text-primary-foreground p-6 rounded-lg shadow-bold hover:bg-foreground transition">
            <Mail className="h-6 w-6 mb-2 text-accent" />
            <div className="font-display text-2xl uppercase">Email</div>
            <div className="text-sm text-primary-foreground/70">kevin@labbebuild.com</div>
          </a>
          <div className="bg-secondary p-6 rounded-lg">
            <MapPin className="h-6 w-6 mb-2" />
            <div className="font-display text-xl uppercase">Service Area</div>
            <div className="text-sm text-muted-foreground">The North Shore</div>
          </div>
        </aside>

        <div className="md:col-span-2">
          {sent ? (
            <div className="bg-card p-10 rounded-lg shadow-bold text-center">
              <CheckCircle2 className="h-12 w-12 mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-display uppercase">Email Drafted!</h2>
              <p className="text-muted-foreground mt-2">Your email app should be opening with your consultation request. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card p-8 rounded-lg shadow-bold space-y-4" noValidate>
              <h2 className="text-2xl font-display uppercase mb-2">Request a Quote</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">First Name *</label>
                  <input name="firstName" maxLength={60} className={field} />
                  {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">Last Name *</label>
                  <input name="lastName" maxLength={60} className={field} />
                  {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">Email *</label>
                  <input name="email" type="email" maxLength={255} className={field} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">Phone *</label>
                  <input name="phone" type="tel" maxLength={20} className={field} />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">City <span className="text-muted-foreground normal-case font-normal">(optional)</span></label>
                  <input name="city" maxLength={80} className={field} />
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wide">Project Type</label>
                  <select name="projectType" className={field} defaultValue="">
                    <option value="">Select…</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                    <option>Addition</option>
                    <option>Siding</option>
                    <option>Trim / Millwork</option>
                    <option>Deck</option>
                    <option>Basement</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase font-bold tracking-wide">Tell us about your project</label>
                <textarea name="message" rows={5} maxLength={1000} className={field} />
              </div>
              <button type="submit" className="w-full bg-brand-black text-primary-foreground py-4 rounded-md font-bold uppercase tracking-wide hover:bg-foreground transition">
                Send Consultation Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}