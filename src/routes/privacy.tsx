import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Labbe Build + Remodel" },
      { name: "description", content: "How Labbe Build + Remodel collects, uses, and protects information submitted through our website." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-black text-primary-foreground py-20 pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-display uppercase">Privacy Policy</h1>
          <p className="mt-4 text-primary-foreground/70">Last updated: May 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-foreground">
        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Labbe Build + Remodel is a residential construction and remodeling company owned by Kevin Labbe, serving the North Shore. You can reach us at (617) 953-9498 or kevinlabbe@comcast.net.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit our consultation or quote form, we collect the information you provide: first and last name, email address, phone number, optional city, and any project details you share. We do not sell or rent this information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
            <li>To respond to consultation requests, quotes, and questions.</li>
            <li>To schedule and coordinate on-site visits and project work.</li>
            <li>To send follow-up communication related to your project.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            We don't sell your personal information. We may share limited details with trusted subcontractors or suppliers only when necessary to deliver your project, and only what's needed for the job.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Cookies & Analytics</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may use basic analytics to understand how visitors find and use our pages. No personally identifying information is sold to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Your Choices</h2>
          <p className="text-muted-foreground leading-relaxed">
            You can request that we delete the contact information you've submitted at any time by emailing kevinlabbe@comcast.net. We'll confirm the request and remove your information from our active records.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about this policy? Call <a className="text-accent-foreground underline" href="tel:+16179539498">(617) 953-9498</a> or email <a className="text-accent-foreground underline" href="mailto:kevinlabbe@comcast.net">kevinlabbe@comcast.net</a>.
          </p>
        </div>
      </section>
    </>
  );
}