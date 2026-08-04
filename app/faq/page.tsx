import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The Frankfurt Nanny Agency",
  description:
    "Answers about nanny placement, costs, vetting, languages and relocation support in Frankfurt am Main.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Common Questions"
        title="Everything families ask us before they begin"
      />
      <Faq showHeading={false} />
      <SiteFooter />
    </div>
  );
}
