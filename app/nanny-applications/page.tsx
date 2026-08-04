import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { JobApplicationForm } from "@/components/JobApplicationForm";

export const metadata: Metadata = {
  title: "Join Frankfurt's Leading Nanny Community | The Frankfurt Nanny Agency",
};

const tasks = [
  "Stimulating the child's physical, intellectual, and social development.",
  "Ensuring the child's safety and well-being.",
  "Reading and singing to the child.",
  "Encouraging writing and reading skills.",
  "Organizing creative play activities, educational outings, and social events.",
  "Assisting with nutritious meal preparation.",
  "Transporting the child to and from daycare/school and other activities.",
  "Maintaining cleanliness in the child's room and home.",
  "Keeping a record of the child's activities.",
  "Maintaining open communication with parents regarding the child's welfare.",
];

export default function NannyApplicationsPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Nanny Applications"
        title="Explore Premier Childcare Opportunities with Nanny Agency Germany"
      />

      <section className="max-w-2xl mx-auto px-6 pt-16 text-center">
        <p className="text-sm md:text-base leading-relaxed text-ink/80">
          The Frankfurt Nanny Agency is your gateway to becoming part of the
          most trusted nanny agency in Germany. Our community is dedicated to
          empowering nannies, babysitters, and au pairs to thrive in their
          caregiving roles. By joining us, you&apos;ll connect with families
          seeking top-quality childcare, providing a rewarding and impactful
          experience. As a renowned nanny agency Germany, we support your
          journey with opportunities to grow and make a difference in
          children&apos;s lives. Apply today and start your fulfilling career
          in childcare.
        </p>

        <h2 className="font-heading italic text-2xl text-rust mt-12 mb-4">
          A nanny&apos;s role encompasses a range of enjoyable tasks
        </h2>
        <ul className="flex flex-col gap-2 text-sm md:text-base text-ink/80 text-left">
          {tasks.map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-rust">—</span>
              {t}
            </li>
          ))}
        </ul>

        <p className="text-sm md:text-base leading-relaxed text-ink/80 mt-8">
          Join us as a nanny and embark on a rewarding journey of fostering
          children&apos;s growth, making a positive impact, and creating
          lasting memories.
        </p>
      </section>

      <section className="px-6 py-20">
        <h2 className="font-heading italic text-3xl text-center mb-4">
          Job Application
        </h2>
        <JobApplicationForm />
      </section>

      <SiteFooter />
    </div>
  );
}
