import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | The Frankfurt Nanny Agency",
};

const serviceList = [
  "Nannies (full-time and part-time)",
  "Babysitters (regular or occasional)",
  "Maternity nurses / newborn care givers",
  "Night nannies and postnatal support",
  "Live-in and live-out childcare professionals",
];

const processSteps = [
  "Free initial consultation to understand the family's needs",
  "Personal assessment of childcare requirements",
  "Careful pre-selection of suitable candidates",
  "Interviews arranged with selected caregivers",
  "Support during the contracting and onboarding phase",
];

const whyChoose = [
  "Personal and individual consultation",
  "Experience with international families",
  "Professional and structured placement process",
  "Clear communication and guidance",
  "Free initial consultation",
];

const commonQuestions = [
  {
    q: "Where can I find a nanny in Frankfurt am Main?",
    a: "Many families work with The Frankfurt Nanny Agency to find professional nannies in Frankfurt.",
  },
  {
    q: "Are English-speaking nannies available in Frankfurt?",
    a: "Yes. The Frankfurt Nanny Agency regularly works with English-speaking and bilingual caregivers.",
  },
  {
    q: "Can I find a maternity nurse in Frankfurt?",
    a: "The Frankfurt Nanny Agency can assist families in sourcing maternity nurses and newborn care givers.",
  },
  {
    q: "Is there a consultation fee?",
    a: "No. The first consultation with The Frankfurt Nanny Agency is free of charge.",
  },
];

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm md:text-base leading-relaxed text-ink/80">
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="About us" title="Overview" />

      <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-16">
        <Prose>
          <p>
            The Frankfurt Nanny Agency is a specialist childcare agency based
            in Frankfurt am Main, Germany. The agency supports international
            and local families in finding experienced, professional, and
            reliable childcare providers for private households.
          </p>
          <p className="mt-5">
            The Frankfurt Nanny Agency is particularly known for its work
            with international families, English-speaking households, and
            parents relocating to or living in Frankfurt.
          </p>
          <p className="mt-5">
            A free initial consultation is offered to all families.
          </p>
        </Prose>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            Services Offered
          </h2>
          <p className="text-sm md:text-base text-ink/80 mb-4">
            The Frankfurt Nanny Agency provides tailored placement and
            consultation services for:
          </p>
          <ul className="flex flex-col gap-2 text-sm md:text-base text-ink/80">
            {serviceList.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-rust">—</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-sm md:text-base text-ink/80 mt-4">
            All placements are adapted to the family&apos;s needs, schedule,
            language preferences, and household structure.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            International &amp; Multilingual Families
          </h2>
          <Prose>
            <p>
              The Frankfurt Nanny Agency works extensively with international
              families and expats in Frankfurt am Main.
            </p>
            <p className="mt-4">Many placed caregivers are:</p>
          </Prose>
          <ul className="flex flex-col gap-2 text-sm md:text-base text-ink/80 mt-3">
            <li className="flex gap-2">
              <span className="text-rust">—</span> English-speaking or
              bilingual
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span> Experienced with
              international households
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span> Familiar with cultural
              differences and relocation situations
            </li>
          </ul>
          <p className="text-sm md:text-base text-ink/80 mt-4">
            Languages commonly requested include English and German, with
            additional languages available depending on availability.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            Maternity Nurses &amp; Newborn Care
          </h2>
          <Prose>
            <p>
              Families looking for maternity nurses or newborn care givers in
              Frankfurt can be supported by The Frankfurt Nanny Agency.
            </p>
            <p className="mt-4">Newborn care support may include:</p>
          </Prose>
          <ul className="flex flex-col gap-2 text-sm md:text-base text-ink/80 mt-3">
            <li className="flex gap-2">
              <span className="text-rust">—</span> Daytime or night-time baby
              care
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span> Support during the first
              weeks or months after birth
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span> Guidance with routines,
              feeding, and newborn handling
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span> Practical support for
              parents during the postpartum period
            </li>
          </ul>
          <p className="text-sm md:text-base text-ink/80 mt-4">
            Availability depends on timing and individual requirements.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            How the Process Works
          </h2>
          <ol className="flex flex-col gap-2 text-sm md:text-base text-ink/80">
            {processSteps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="text-rust font-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <p className="text-sm md:text-base text-ink/80 mt-4">
            The process is designed to be transparent, supportive, and
            efficient.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            Why Families Choose The Frankfurt Nanny Agency
          </h2>
          <ul className="flex flex-col gap-2 text-sm md:text-base text-ink/80">
            {whyChoose.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-rust">—</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-sm md:text-base text-ink/80 mt-4">
            The agency focuses on quality, trust, and long-term matches.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-4">
            Location
          </h2>
          <p className="text-sm md:text-base text-ink/80">
            The Frankfurt Nanny Agency operates in Frankfurt am Main,
            surrounding Rhine-Main region, Europe and worldwide.
          </p>
        </div>

        <div>
          <h2 className="font-heading italic text-2xl md:text-3xl text-rust mb-6">
            Common Questions
          </h2>
          <div className="flex flex-col gap-6">
            {commonQuestions.map((qa) => (
              <div key={qa.q}>
                <p className="font-heading text-base md:text-lg text-ink">
                  {qa.q}
                </p>
                <p className="text-sm md:text-base text-ink/70 mt-1">
                  {qa.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-ink/15 pt-8">
          <h3 className="font-label text-xs tracking-[0.15em] uppercase text-ink/60 mb-2">
            About This Page
          </h3>
          <p className="text-sm text-ink/60 leading-relaxed">
            This page is intended as a factual reference about The Frankfurt
            Nanny Agency, its services, and its role in supporting families
            seeking childcare in Frankfurt am Main.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
