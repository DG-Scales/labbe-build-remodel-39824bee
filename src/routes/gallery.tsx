import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import k1 from "@/assets/gallery-kitchen-1.jpg";
import k2 from "@/assets/gallery-kitchen-2.jpg";
import b1 from "@/assets/gallery-bath-1.jpg";
import b2 from "@/assets/gallery-bath-2.jpg";
import s1 from "@/assets/gallery-siding-1.jpg";
import s2 from "@/assets/gallery-siding-2.jpg";
import t1 from "@/assets/gallery-trim-1.jpg";
import t2 from "@/assets/gallery-trim-2.jpg";
import a1 from "@/assets/gallery-addition-1.jpg";
import a2 from "@/assets/gallery-addition-2.jpg";
import d1 from "@/assets/gallery-deck-1.jpg";
import bs1 from "@/assets/gallery-basement-1.jpg";
import bathTileReal from "@/assets/gallery-bath-tile-real.jpg";
import deckRailingReal from "@/assets/gallery-deck-railing-real.jpg";
import deckFullReal from "@/assets/gallery-deck-full-real.jpg";
import trimBuiltinsReal from "@/assets/gallery-trim-builtins-real.jpg";
import kitchenWaterfrontReal from "@/assets/gallery-kitchen-waterfront-real.jpg";
import deckWaterfrontReal from "@/assets/gallery-deck-waterfront-real.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Labbe Build + Remodel" },
      { name: "description", content: "Browse our portfolio of kitchens, baths, siding, trim, additions, decks and basements." },
      { property: "og:title", content: "Gallery — Labbe Build + Remodel" },
      { property: "og:description", content: "Real projects: kitchens, baths, additions, siding, trim and more." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Kitchens" | "Baths" | "Siding" | "Trim" | "Additions" | "Decks" | "Basements";
const categoryBlurbs: Record<Exclude<Cat, "All">, string> = {
  Kitchens: "Full kitchen remodels — custom cabinetry, stone counters, and layouts that actually work for the way you cook and entertain.",
  Baths: "Master suites and family baths built for everyday comfort: tiled showers, custom vanities, and clean, lasting waterproofing.",
  Siding: "Cedar shingle, clapboard, and board & batten replacements built to handle North Shore weather year after year.",
  Trim: "Finish carpentry that elevates a room — crown, wainscoting, coffered ceilings, and built-ins fit on site.",
  Additions: "Sunrooms, dormers, and full second-story additions, blended seamlessly into the original home.",
  Decks: "Composite and cedar decks, pergolas, and outdoor living spaces designed for New England summers.",
  Basements: "Finished basements with proper framing, insulation, and egress — added living space done right.",
};
const items: { src: string; cat: Exclude<Cat, "All">; title: string; caption: string }[] = [
  { src: k1, cat: "Kitchens", title: "Marble Island Kitchen", caption: "Open-concept remodel with a waterfall marble island and custom inset cabinetry." },
  { src: k2, cat: "Kitchens", title: "White Shaker Kitchen", caption: "Bright shaker kitchen with quartz counters, brass pendants, and a subway tile backsplash." },
  { src: kitchenWaterfrontReal, cat: "Kitchens", title: "Waterfront Kitchen", caption: "Open coastal kitchen with a marbled quartz island, brass fixtures, and panoramic water views." },
  { src: b1, cat: "Baths", title: "Spa Master Bath", caption: "Curbless tile shower, freestanding tub, and heated floors for a true spa feel." },
  { src: b2, cat: "Baths", title: "Modern Walnut Bath", caption: "Floating walnut vanity paired with large-format porcelain tile and matte black fixtures." },
  { src: bathTileReal, cat: "Baths", title: "Large-Format Tile Bath", caption: "Polished large-format porcelain floor and curb-set shower base — laid level and watertight before finish." },
  { src: s1, cat: "Siding", title: "Cape Shingle Siding", caption: "Full re-side in white cedar shingles with new trim, shutters, and weather-tight flashing." },
  { src: s2, cat: "Siding", title: "Board & Batten Exterior", caption: "Modern farmhouse facade with vertical board & batten siding and crisp white trim details." },
  { src: t1, cat: "Trim", title: "Wainscoting & Crown", caption: "Custom wainscoting, baseboards, and crown molding throughout a formal living room." },
  { src: t2, cat: "Trim", title: "Built-in Fireplace Surround", caption: "Painted built-in bookcases flanking a custom mantel — cut, fit, and finished on site." },
  { src: trimBuiltinsReal, cat: "Trim", title: "Custom Built-In Bar", caption: "Painted built-in bar with floating shelves, glass uppers, and integrated wine fridge — finish carpentry from end to end." },
  { src: a1, cat: "Additions", title: "Sunroom Addition", caption: "Year-round sunroom addition with insulated glass and a vaulted tongue-and-groove ceiling." },
  { src: a2, cat: "Additions", title: "Two-Story Addition", caption: "Two-story addition adding a primary suite above and an expanded family room below." },
  { src: d1, cat: "Decks", title: "Composite Deck & Pergola", caption: "Low-maintenance composite deck with a cedar pergola and integrated bench seating." },
  { src: deckFullReal, cat: "Decks", title: "Pressure-Treated Deck", caption: "New pressure-treated deck with custom railings, lattice skirt, and matching stair stringers." },
  { src: deckRailingReal, cat: "Decks", title: "Custom Railing Detail", caption: "Hand-built balusters and chamfered post caps — railing details that hold up over time." },
  { src: deckWaterfrontReal, cat: "Decks", title: "Waterfront Composite Deck", caption: "Composite decking installed over a steel-frame oceanfront landing — built to handle salt air and weather." },
  { src: bs1, cat: "Basements", title: "Finished Basement", caption: "Full basement build-out with media area, wet bar, and code-compliant egress." },
];
const cats: Cat[] = ["All", "Kitchens", "Baths", "Siding", "Trim", "Additions", "Decks", "Basements"];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const open = lightboxIdx !== null;
  const current = open ? filtered[lightboxIdx!] : null;

  const close = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered.length]);

  return (
    <>
      <section className="bg-brand-black text-primary-foreground py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-display uppercase">Project Gallery</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            A look at recent kitchens, baths, additions, siding, trim and more — built by the Labbe crew.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition ${
                filter === c ? "bg-brand-black text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filter !== "All" && (
          <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-10">
            {categoryBlurbs[filter]}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((i, idx) => (
            <figure key={i.title} className="group overflow-hidden rounded-lg shadow-bold bg-card flex flex-col">
              <button
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="relative aspect-[4/3] overflow-hidden block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Open ${i.title}`}
              >
                <img src={i.src} alt={i.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </button>
              <figcaption className="p-5">
                <div className="text-xs uppercase tracking-widest text-accent-foreground/70">{i.cat}</div>
                <div className="font-display text-xl uppercase mt-1">{i.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Dialog open={open} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 bg-brand-black border-brand-black sm:rounded-none flex flex-col">
          {current && (
            <>
              <div className="relative flex-1 min-h-0 flex items-center justify-center">
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-h-full max-w-full object-contain"
                />
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </div>
              <div className="px-6 py-5 text-primary-foreground border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent">{current.cat}</div>
                    <div className="font-display text-xl uppercase mt-1">{current.title}</div>
                    <p className="text-sm text-primary-foreground/70 mt-2 leading-relaxed max-w-3xl">{current.caption}</p>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60 shrink-0">
                    {(lightboxIdx ?? 0) + 1} / {filtered.length}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}