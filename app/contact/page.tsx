import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | The Frankfurt Nanny Agency",
  description:
    "Tell us about your family and we will schedule a call to find the right nanny for your household in Frankfurt am Main.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Dear Parents" title="Please contact us" />

      <section className="px-6 md:px-12 py-20">
        <p className="max-w-2xl mx-auto text-center text-sm md:text-base leading-relaxed text-ink/80">
          To provide you with a tailored service, please email us your
          specific expectations. We will then schedule a call to discuss them
          and strive to combine your international experience with the German
          culture. Kindly include important details such as the number of
          children, their ages, accommodation and daycare addresses,
          preferred languages, and complete contact information. We look
          forward to assisting you in finding the perfect candidates for your
          family.
        </p>

        <ContactForm />

        <div className="mt-16 text-center flex flex-col items-center gap-2">
          <a
            href="mailto:info@frankfurtnanny.de"
            className="font-label text-xs tracking-[0.2em] uppercase border-b border-rust text-rust pb-1"
          >
            info@frankfurtnanny.de
          </a>
          <p className="text-sm text-ink/60 mt-4 leading-relaxed">
            AC Nanny &amp; Property Agency UG (haftungsbeschränkt)
            <br />
            Amöneburger Str. 29, 60433 Frankfurt am Main, Germany
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
