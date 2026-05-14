import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Calendar, Hammer, Shield, Award, ArrowRight, Star, ExternalLink, MapPin, MessageSquare, PencilRuler, ClipboardCheck, KeyRound } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import kitchen from "@/assets/gallery-kitchen-1.jpg";
import bath from "@/assets/gallery-bath-1.jpg";
import addition from "@/assets/gallery-addition-1.jpg";
import siding from "@/assets/gallery-siding-2.jpg";
import heroSiding from "@/assets/gallery-siding-1.jpg";
import heroAddition2 from "@/assets/gallery-addition-2.jpg";
import heroKitchen2 from "@/assets/gallery-kitchen-waterfront-real.jpg";
import heroBath2 from "@/assets/gallery-bath-2.jpg";
import heroTrim from "@/assets/gallery-trim-2.jpg";
import { useEffect, useState } from "react";

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

const REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJZWXnge4V44kRQxWU-I9tEyI";

const SERVICES = [
  { title: "Kitchens", img: kitchen, desc: "Custom kitchens built to last." },
  { title: "Bathrooms", img: bath, desc: "Spa-quality bath renovations." },
  { title: "Additions", img: addition, desc: "Add the space you've always wanted." },
  { title: "Siding & Trim", img: siding, desc: "Beautiful exteriors and millwork." },
];

const HERO_IMAGES = [
  heroSiding,
  heroKitchen2,
  heroBath2,
  heroAddition2,
  heroTrim,
  siding,
];

function Index() {
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-screen min-h-[640px] w-full overflow-hidden">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={img}
            src={img}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out will-change-[opacity] ${
              i === heroIdx ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "scale(1.05)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <div className="mb-6 inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-yellow">
            <Star className="h-3.5 w-3.5 fill-brand-black" /> 30+ Years of Craftsmanship
          </div>
          <img
            src={logoWhite}
            alt="Labbe Build + Remodel"
            className="w-[min(380px,70vw)] h-auto mb-8 animate-[fadeIn_1s_ease-out] drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
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
              href="tel:+16179539498"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:brightness-110 shadow-yellow transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="mailto:kevinlabbe@comcast.net"
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
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-white/90 hover:text-brand-yellow text-sm font-semibold uppercase tracking-wide underline-offset-4 hover:underline"
          >
            <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" /> Leave us a 5-Star Review <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-black text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {[
            { icon: Shield, title: "Fully Insured", text: "100% licensed & insured for your peace of mind." },
            { icon: Hammer, title: "30+ Years Experience", text: "Three decades of hands-on building expertise." },
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

      {/* PROCESS */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Our Process</h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
              From the first phone call to the final walk-through — a clear, honest path from idea to finished project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, step: "01", title: "Consult", desc: "Free in-home consultation to understand your goals, timeline, and budget." },
              { icon: PencilRuler, step: "02", title: "Plan & Quote", desc: "A detailed, line-by-line quote with materials, scope, and a clear schedule." },
              { icon: Hammer, step: "03", title: "Build", desc: "Our crew handles every phase with daily site cleanup and weekly updates." },
              { icon: KeyRound, step: "04", title: "Walk-Through", desc: "Final inspection together — we don't leave until you're 100% happy." },
            ].map((s) => (
              <div key={s.title} className="group bg-card rounded-lg p-6 shadow-bold border-2 border-transparent hover:border-brand-yellow transition">
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-brand-black text-brand-yellow p-3 rounded-md group-hover:bg-brand-yellow group-hover:text-brand-black transition">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl text-foreground/15 group-hover:text-brand-yellow transition">{s.step}</span>
                </div>
                <div className="font-display text-xl uppercase mb-2">{s.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
            <ClipboardCheck className="h-5 w-5 text-accent-foreground" />
            <span className="uppercase tracking-wider font-semibold">Licensed, Insured & Permitted on every job.</span>
          </div>
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

      {/* SERVICE AREA */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Where We Work</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Proudly serving the North Shore.</h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Labbe Build + Remodel is based on Massachusetts' North Shore and works with homeowners across the region — from coastal capes to inland new builds. If your project is in or near the towns below, we'd love to hear about it.
            </p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wide text-foreground/80">
              {["Salem", "Beverly", "Marblehead", "Swampscott", "Danvers", "Peabody", "Lynn", "Lynnfield", "Wenham", "Hamilton", "Manchester", "Gloucester", "Rockport", "Ipswich", "Topsfield"].map((t) => (
                <li key={t} className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent-foreground" /> {t}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Don't see your town? Give us a call — we cover the entire North Shore region.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+16179539498" className="inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-foreground transition">
                <Phone className="h-4 w-4" /> (617) 953-9498
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:brightness-110 shadow-yellow transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-bold border-4 border-brand-black">
            <iframe
              title="Labbe Build + Remodel — North Shore service area"
              src="https://www.google.com/maps?q=North+Shore,+Massachusetts&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="bg-brand-black text-primary-foreground py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-2">5-Star Rated</p>
          <h2 className="text-3xl md:text-5xl font-display uppercase">Trusted by homeowners for 30+ years.</h2>
          <p className="mt-5 text-primary-foreground/70 max-w-2xl mx-auto italic">
            "Kevin and his crew transformed our outdated kitchen into a dream space. Three decades of experience really shows — every detail was perfect."
          </p>
          <p className="mt-3 text-sm uppercase tracking-wider text-primary-foreground/60">— Sarah M., Kitchen Remodel</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 bg-white text-brand-black [&]:text-brand-black px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-brand-yellow transition">
              <span className="text-brand-black text-slate-800">Read All Reviews</span> <ArrowRight className="lucide lucide-arrow-right h-4 w-4 text-brand-black text-slate-950" />
            </Link>
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:brightness-110 shadow-yellow transition">
              <Star className="h-4 w-4 fill-brand-black" /> Leave a 5-Star Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
