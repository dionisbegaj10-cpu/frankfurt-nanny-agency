import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Premium Nanny Services | Frankfurt Nanny Agency | Trusted Childcare Solutions in Germany",
};

const qualities = [
  "Thoroughly vetted through our sourcing ritual",
  "Passionate and proficient in multiple languages",
  "Excellent references and clean criminal records",
  "Adaptability to different situations",
];

export default function OurStandardsPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Our Standards" title="Our Sourcing Standards" />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-8 text-sm md:text-base leading-relaxed text-ink/80">
        <p>
          At The Frankfurt Nanny Agency, we prioritize selecting the best
          nannies for your children. Through meticulous interviews and a
          careful selection process, we choose individuals with professional
          experience, genuine character, and a caring nature.
        </p>

        <div>
          <h2 className="font-heading italic text-2xl text-rust mb-4">
            Key qualities shared by our nannies
          </h2>
          <ul className="flex flex-col gap-2">
            {qualities.map((q) => (
              <li key={q} className="flex gap-2">
                <span className="text-rust">—</span>
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl text-rust mb-4">
            Violence Prevention &amp; Handling Training
          </h2>
          <p>
            We believe every child deserves a safe, nurturing, and respectful
            environment. That&apos;s why all our hired candidates undergo
            specialized Violence Prevention and Handling Training. This
            training equips nannies with the tools to recognize early signs
            of emotional or physical stress, de-escalate challenging
            situations with empathy, and respond to conflict in ways that
            promote emotional safety and trust.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl text-rust mb-4">
            Tailored Onboarding
          </h2>
          <p>
            Upon selection, we offer dedicated support as the caregiver
            transitions into their role, including access to our exclusive
            TFNA Nanny Behaviour Onboarding Program — a framework designed to
            align caregivers with your family&apos;s values and expectations.
          </p>
        </div>

        <p>
          Our focus extends beyond caregiving, emphasizing emotional
          well-being, positive guidance, and long-term growth.
        </p>

        <p className="font-heading italic text-lg text-rust">
          Choose The Frankfurt Nanny Agency for a partner in your child&apos;s
          development and a lasting, positive bond.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
