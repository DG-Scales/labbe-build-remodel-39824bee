import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
const items: { src: string; cat: Exclude<Cat, "All">; title: string }[] = [
  { src: k1, cat: "Kitchens", title: "Marble Island Kitchen" },
  { src: k2, cat: "Kitchens", title: "Navy Farmhouse Kitchen" },
  { src: b1, cat: "Baths", title: "Spa Master Bath" },
  { src: b2, cat: "Baths", title: "Modern Walnut Bath" },
  { src: s1, cat: "Siding", title: "Cape Shingle Siding" },
  { src: s2, cat: "Siding", title: "Board & Batten Exterior" },
  { src: t1, cat: "Trim", title: "Coffered Ceiling Living Room" },
  { src: t2, cat: "Trim", title: "Custom Built-in Bookcase" },
  { src: a1, cat: "Additions", title: "Sunroom Addition" },
  { src: a2, cat: "Additions", title: "Two-Story Addition" },
  { src: d1, cat: "Decks", title: "Deck & Pergola" },
  { src: bs1, cat: "Basements", title: "Finished Basement" },
];
const cats: Cat[] = ["All", "Kitchens", "Baths", "Siding", "Trim", "Additions", "Decks", "Basements"];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((i) => (
            <figure key={i.title} className="group relative overflow-hidden rounded-lg shadow-bold aspect-[4/3]">
              <img src={i.src} alt={i.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent">{i.cat}</div>
                  <div className="font-display text-xl uppercase">{i.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}