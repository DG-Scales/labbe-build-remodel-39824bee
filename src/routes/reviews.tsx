import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "5-Star Reviews — Labbe Build + Remodel" },
      { name: "description", content: "Read what homeowners say about Kevin Labbe and the Labbe Build + Remodel crew. 30+ years of 5-star craftsmanship." },
      { property: "og:title", content: "Customer Reviews — Labbe Build + Remodel" },
      { property: "og:description", content: "30+ years of 5-star reviews from happy homeowners." },
    ],
  }),
  component: ReviewsPage,
});

const REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJZWXnge4V44kRQxWU-I9tEyI";

const REVIEWS = [
  { name: "Sarah M.", project: "Kitchen Remodel", text: "Kevin and his crew transformed our outdated kitchen into a dream space. The craftsmanship is unreal — every detail was perfect. Communication was top notch the entire project." },
  { name: "Mike R.", project: "Home Addition", text: "30+ years of experience really shows. Kevin walked us through every decision, kept the job site clean, and finished on time and on budget. Couldn't be happier with our new family room." },
  { name: "Jennifer T.", project: "Master Bathroom", text: "Absolutely stunning work. The tile work, the trim, the fixtures — all flawless. Kevin treated our home like it was his own. Highly recommend Labbe Build + Remodel." },
  { name: "David & Lisa P.", project: "Siding & Trim", text: "Our house looks brand new. The crew was respectful, professional, and the quality is unmatched. You can tell these guys have been doing this for decades." },
  { name: "Tom H.", project: "Finished Basement", text: "Best contractor experience we've ever had. No surprises, no excuses — just incredible work delivered exactly when promised. Already booked Kevin for our deck next spring." },
  { name: "Amanda K.", project: "Custom Built-ins", text: "The custom millwork Kevin built for our living room is honestly a work of art. Real craftsman, real integrity. Worth every penny." },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-brand-black text-primary-foreground py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">30+ Years · Trusted</p>
          <h1 className="text-5xl md:text-6xl font-display uppercase">5-Star Reviews</h1>
          <div className="flex justify-center gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Three decades of happy homeowners across the North Shore.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <article key={r.name} className="bg-card p-7 rounded-lg shadow-bold relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/30" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-5">"{r.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-display uppercase">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.project}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-yellow py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-brand-black text-brand-black" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-black">Loved Working With Us?</h2>
          <p className="mt-4 text-brand-black/80 text-lg">Your review helps other homeowners find quality, honest craftsmanship.</p>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-brand-black text-primary-foreground px-8 py-4 rounded-md font-bold uppercase tracking-wide hover:bg-foreground transition"
          >
            Leave a 5-Star Review <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}