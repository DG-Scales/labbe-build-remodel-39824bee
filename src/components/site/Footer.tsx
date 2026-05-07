import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-brand-black text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Labbe Build + Remodel" className="h-20 w-auto mb-4" />
          <p className="text-sm text-primary-foreground/70 max-w-xs">
            Licensed & insured remodeling and construction. Quality craftsmanship you can trust.
          </p>
        </div>
        <div>
          <h4 className="text-accent text-sm uppercase tracking-widest mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /><a href="tel:+12075550100" className="hover:text-accent">(207) 555-0100</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /><a href="mailto:kevin@labbebuild.com" className="hover:text-accent">kevin@labbebuild.com</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /><span>Serving Maine & New England</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-accent text-sm uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Kevin</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Book Consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Labbe Build + Remodel — Licensed & Insured. All rights reserved.
      </div>
    </footer>
  );
}