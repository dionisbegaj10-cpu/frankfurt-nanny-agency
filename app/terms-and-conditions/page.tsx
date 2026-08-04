import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions | Frankfurt Nanny | Germany",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Legal" title="Terms and Conditions" />

      <section className="max-w-xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6">
        <p className="text-sm md:text-base text-ink/80">
          Please find our Terms and Conditions here.
        </p>
        <a
          href="/legal/terms-and-conditions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-xs tracking-[0.2em] uppercase bg-rust text-cream px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
        >
          Download PDF
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
