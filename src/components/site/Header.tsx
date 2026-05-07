import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Book Consultation" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-end h-20">
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide text-white hover:text-brand-yellow transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              activeProps={{ className: "text-brand-yellow" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+16179539498"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-4 py-2 rounded-md text-sm font-bold uppercase hover:brightness-110 transition shadow-yellow"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-brand-black/95 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase text-white hover:text-brand-yellow">
                {n.label}
              </Link>
            ))}
            <a href="tel:+16179539498" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-4 py-2 rounded-md text-sm font-bold uppercase w-fit">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}