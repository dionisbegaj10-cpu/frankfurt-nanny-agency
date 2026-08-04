import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Enhance Skills with Our Nanny Training Course | Frankfurt Nanny",
};

const courses = [
  {
    title: "TFNA Private Child Care Guideline Course",
    status: "Ended",
    price: "€250",
  },
  {
    title: "Leitfaden für private Kinderbetreuung",
    status: "Ended",
    price: "€250",
  },
];

export default function BookOnlinePage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Book Courses"
        title="Welcome to our Private Child Care Guideline Course"
      />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-ink/80 text-center">
        <p>
          Developed in collaboration with professional child carers, our
          course empowers nannies, au pairs and caregivers with essential
          skills and knowledge to provide top-notch care for your children.
        </p>
        <p>
          Enroll your nanny today to elevate her skills and ensure smoother
          interactions at home. Invest in her professional development for
          enhanced child care quality and peace of mind.
        </p>
        <p>Join us in shaping the future of private child care in Frankfurt.</p>
        <p className="font-heading italic text-lg text-rust">
          Enroll your nanny or au pair now!
        </p>
      </section>

      <section className="px-6 pb-24">
        <h2 className="font-heading italic text-2xl text-center mb-10">
          Find our courses here
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {courses.map((c) => (
            <div
              key={c.title}
              className="border border-ink/15 rounded-sm p-6 flex flex-col gap-2 text-center"
            >
              <h3 className="font-heading italic text-lg text-rust">
                {c.title}
              </h3>
              <p className="text-xs font-label uppercase tracking-[0.1em] text-ink/50">
                {c.status}
              </p>
              <p className="text-sm text-ink/80">{c.price}</p>
              <span className="font-label text-xs tracking-[0.15em] uppercase text-rust border-b border-rust self-center pb-0.5 mt-2 cursor-pointer">
                View Course
              </span>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
