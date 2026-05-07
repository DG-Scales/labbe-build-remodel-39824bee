import { createFileRoute, Link } from "@tanstack/react-router";
import kevin from "@/assets/kevin-labbe.jpeg";
import { Hammer, Heart, Shield, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kevin Labbe — 30+ Years of Craftsmanship" },
      { name: "description", content: "Meet Kevin Labbe — owner and master craftsman behind Labbe Build + Remodel. 30+ years of licensed, insured construction." },
      { property: "og:title", content: "About Kevin Labbe" },
      { property: "og:description", content: "Owner-operator. Master craftsman. 30+ years. Licensed & insured." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-brand-black text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">Meet the Owner</p>
          <h1 className="text-5xl md:text-6xl font-display uppercase">Kevin Labbe</h1>
          <p className="mt-3 text-primary-foreground/70">30+ years building & remodeling homes across New England.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-yellow rounded-lg -z-10 rotate-2" />
          <img src={kevin} alt="Kevin Labbe, owner of Labbe Build + Remodel" className="rounded-lg shadow-bold w-full aspect-[4/5] object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">30+ years of building integrity into every home.</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              For more than three decades, Kevin Labbe has built his reputation on a simple promise:
              do honest work, for fair prices, and treat every home like it's his own. From his first
              hammer swing to today's complex remodels and additions, that mindset hasn't changed.
            </p>
            <p>
              A New England native, Kevin brings hands-on experience to every job site — framing,
              finish carpentry, custom kitchens and baths, additions, siding and everything in between.
              When you hire Labbe Build + Remodel, you're hiring Kevin and his trusted crew, not a
              subcontracted middleman.
            </p>
            <p>
              Fully licensed and insured, Kevin takes personal pride in clean job sites, clear
              communication, and delivering the home you've been dreaming of.
            </p>
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-foreground transition">
            Book a Consultation
          </Link>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Licensed & Insured" },
            { icon: Hammer, title: "30+ Years Experience" },
            { icon: Users, title: "Owner-Operated Crew" },
            { icon: Heart, title: "Treats Your Home Like His Own" },
          ].map((v) => (
            <div key={v.title} className="bg-card p-6 rounded-lg shadow-bold text-center">
              <div className="inline-flex p-3 rounded-md bg-gradient-yellow text-brand-black mb-3"><v.icon className="h-6 w-6" /></div>
              <div className="font-display uppercase">{v.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}