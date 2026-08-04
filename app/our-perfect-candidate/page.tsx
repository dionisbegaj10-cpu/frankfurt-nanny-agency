import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Find Your Dream Nanny Job in Frankfurt - Apply Now at TFNA!",
};

export default function PerfectCandidatePage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Our Perfect Candidate"
        title="Explore Nanny Opportunities in Frankfurt with TFNA"
      />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-ink/80 text-center">
        <p>
          At TFNA, we connect dedicated individuals with rewarding nanny
          opportunities in Frankfurt. Our agency emphasizes professionalism
          and trust through our nanny confidentiality agreement, ensuring a
          secure experience for both nannies and families. If you&apos;re
          passionate about childcare and have excellent references, TFNA is
          the perfect platform for you.
        </p>
        <p>
          Join a community that values your skills and provides opportunities
          to connect with caring, international families. Embrace the chance
          to make a difference in children&apos;s lives while enjoying a
          supportive environment. Learn more about our nanny confidentiality
          agreement and become part of the TFNA community today!
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
