import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Book Consultation" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Labbe Build + Remodel" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent-foreground transition-colors"
              activeProps={{ className: "text-accent-foreground border-b-2 border-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+12075550100"
            className="inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-4 py-2 rounded-md text-sm font-bold uppercase hover:bg-foreground transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase">
                {n.label}
              </Link>
            ))}
            <a href="tel:+12075550100" className="inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-4 py-2 rounded-md text-sm font-bold uppercase w-fit">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}