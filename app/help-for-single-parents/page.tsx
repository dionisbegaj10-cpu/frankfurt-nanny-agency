import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Find a Nanny Germany - Expert Help for Families in Frankfurt",
};

const support = [
  "School or daycare drop-offs and pick-ups",
  "Afternoons, evenings, or shared-custody days",
  "Grocery shopping and meal preparation for you and your children",
  "Light household support related to the children",
  "Creating calm, consistent routines at home",
];

export default function SingleParentsPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Separated & Single Parenting"
        title="Expert Services for Single Parents in Frankfurt"
      />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-ink/80">
        <p>
          Are you a single or separated parent in Frankfurt looking for
          reliable support to make everyday life with your children more
          manageable?
        </p>
        <p>
          Balancing work, household responsibilities, and quality time with
          your kids can be challenging, especially when you&apos;re doing it
          on your own. At The Frankfurt Nanny Agency, we support parents who
          want structure, reliability, and peace of mind.
        </p>
        <p>
          We carefully match you with a nanny who fits your family&apos;s
          routine and values. Depending on your needs, support can include:
        </p>
        <ul className="flex flex-col gap-2">
          {support.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-rust">—</span>
              {s}
            </li>
          ))}
        </ul>
        <p>
          Sometimes, the right support isn&apos;t more hours, it&apos;s better
          structure.
        </p>
        <p className="font-heading italic text-lg text-rust">
          A nanny can significantly ease your daily life and give you back
          time and energy for what matters most: your children.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
