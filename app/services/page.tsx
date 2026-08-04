import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Luxury Nanny Agency in Frankfurt | Expert Childcare Solutions for Families",
};

const services = [
  {
    title: "Nanny / Governess sourcing",
    desc: "We find the right Nanny for your child and family.",
  },
  {
    title: "Maternity Nurse sourcing",
    desc: "We find the right maternity nurse to assist you right after giving birth.",
  },
  {
    title: "Part time nanny sourcing",
    desc: "We find the right part time Help for your child and occasion.",
  },
  {
    title: "Alternative Advice",
    desc: "Tax & salary advice & others.",
  },
  {
    title: "Night Nanny sourcing",
    desc: "We find the right night nanny to help you and the baby sleep.",
  },
  {
    title: "Playground",
    desc: "Play dates for members - coming soon.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="What we offer"
        title="Luxury Nanny Agency Services Tailored for Families in Frankfurt"
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 text-center">
        <p className="text-sm md:text-base leading-relaxed text-ink/80">
          Our luxury nanny agency in Frankfurt is your trusted partner for
          tailored childcare solutions. We specialize in connecting families
          with experienced nannies and caregivers, ensuring your child&apos;s
          well-being and your peace of mind. Whether you need a full-time
          nanny, maternity nurse, or occasional caregiver, our agency is
          dedicated to providing a seamless placement process. Embrace the
          premium service and reliability that our luxury nanny agency
          offers. Your family&apos;s needs are our priority.
        </p>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 text-center">
              <h3 className="font-heading italic text-xl text-rust">
                {s.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center pb-20">
        <Link
          href="/"
          className="font-label text-xs tracking-[0.2em] uppercase border-b border-rust text-rust pb-1"
        >
          Back Home
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
