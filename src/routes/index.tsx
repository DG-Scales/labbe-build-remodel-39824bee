import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Calendar, Hammer, Shield, Award, ArrowRight } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import kitchen from "@/assets/gallery-kitchen-1.jpg";
import bath from "@/assets/gallery-bath-1.jpg";
import addition from "@/assets/gallery-addition-1.jpg";
import siding from "@/assets/gallery-siding-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Labbe Build + Remodel — Licensed & Insured Contractor" },
      { name: "description", content: "Kitchens, baths, additions, siding & trim by Kevin Labbe. Licensed and insured craftsmanship. Book your free consultation today." },
      { property: "og:title", content: "Labbe Build + Remodel" },
      { property: "og:description", content: "Kitchens, baths, additions, siding & trim — licensed and insured." },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { title: "Kitchens", img: kitchen, desc: "Custom kitchens built to last." },
  { title: "Bathrooms", img: bath, desc: "Spa-quality bath renovations." },
  { title: "Additions", img: addition, desc: "Add the space you've always wanted." },
  { title: "Siding & Trim", img: siding, desc: "Beautiful exteriors and millwork." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 h-screen min-h-[640px] w-full overflow-hidden">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          poster={addition}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <img
            src={logoWhite}
            alt="Labbe Build + Remodel"
            className="w-[min(540px,85vw)] h-auto drop-shadow-2xl mb-10 animate-[fadeIn_1s_ease-out]"
          />
          <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] mb-3">
            Licensed · Insured · Trusted
          </p>
          <h1 className="sr-only">Labbe Build + Remodel</h1>
          <p className="text-white text-xl md:text-2xl font-display max-w-2xl">
            Building & Remodeling Done Right.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+12075550100"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:brightness-110 shadow-yellow transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="mailto:kevin@labbebuild.com"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" /> Email Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-black px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-brand-yellow transition"
            >
              <Calendar className="h-5 w-5" /> Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-black text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {[
            { icon: Shield, title: "Fully Insured", text: "100% licensed & insured for your peace of mind." },
            { icon: Hammer, title: "Master Craftsmanship", text: "Decades of hands-on building expertise." },
            { icon: Award, title: "Locally Trusted", text: "Owner-operated by Kevin Labbe." },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-brand-yellow text-brand-black p-3 rounded-md"><b.icon className="h-6 w-6" /></div>
              <div>
                <div className="font-display uppercase">{b.title}</div>
                <div className="text-sm text-primary-foreground/70">{b.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Our Craft</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold uppercase text-sm hover:text-accent-foreground">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <Link to="/gallery" key={s.title} className="group relative overflow-hidden rounded-lg shadow-bold aspect-[4/5]">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="font-display text-2xl uppercase">{s.title}</div>
                <div className="text-sm text-white/80">{s.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-yellow py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-black">Ready to start your project?</h2>
          <p className="mt-4 text-brand-black/80 text-lg">Free consultations and quotes — no pressure, just honest answers.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-8 py-4 rounded-md font-bold uppercase tracking-wide hover:bg-foreground transition">
            Book Your Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
