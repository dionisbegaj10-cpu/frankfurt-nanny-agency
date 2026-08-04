import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Open Positions | The Frankfurt Nanny Agency",
};

const positions = [
  {
    title: "Maternity Nurse",
    desc: "We are seeking caring and professional maternity nurse",
  },
  {
    title: "Full Time Nanny",
    desc: "We are seeking a bilingual and caring professional nanny for a full time position",
  },
  {
    title: "Part Time Nanny",
    desc: "We are seeking a bilingual and caring professional nanny for a part time position",
  },
  {
    title: "Night Nanny",
    desc: "We are seeking a caring and professional night nanny",
  },
];

export default function OpenPositionsPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Open Positions" title="Positions" />

      <section className="px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {positions.map((p) => (
            <div
              key={p.title}
              className="border border-ink/15 rounded-sm p-6 flex flex-col gap-2 text-center"
            >
              <h3 className="font-heading italic text-xl text-rust">
                {p.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{p.desc}</p>
              <a
                href="/nanny-applications"
                className="font-label text-xs tracking-[0.15em] uppercase text-rust border-b border-rust self-center pb-0.5 mt-2"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
