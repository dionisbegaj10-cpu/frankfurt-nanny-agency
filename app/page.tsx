import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const services = [
  {
    title: "Nanny / Babysitter sourcing",
    desc: "We find the right nanny for your child and family.",
  },
  {
    title: "Maternity Nurse sourcing",
    desc: "We find the right maternity nurse/doula for you and your partner.",
  },
  {
    title: "Part time nanny sourcing",
    desc: "We find the right part time nanny for your child and occasion.",
  },
  {
    title: "Alternative Advise",
    desc: "Tax & salary advise. Doctors & others.",
  },
  {
    title: "Night Nanny sourcing",
    desc: "We find the right night nanny to help you and the baby sleep.",
  },
  {
    title: "Playdate club",
    desc: "Play dates for members — coming soon.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-xs tracking-[0.25em] uppercase text-rust">
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-label text-xs tracking-[0.2em] uppercase border-b border-rust text-rust pb-1"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader overlay />
      <Hero />

      {/* Welcome — short intro, full story lives on /about */}
      <section className="max-w-3xl mx-auto text-center px-6 py-24">
        <SectionLabel>Welcome</SectionLabel>
        <h2 className="font-heading italic text-3xl md:text-4xl mt-4 leading-snug">
          The Frankfurt Nanny Agency
        </h2>

        <div className="mt-10 mx-auto w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border border-rust/30">
          <Image
            src="/images/founder-alexandra.jpg"
            alt="Alexandra, founder of The Frankfurt Nanny Agency"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col gap-5 text-sm md:text-base leading-relaxed text-ink/80">
          <p>
            At Frankfurt Nanny, we understand the importance of finding the
            right caregiver for your family. With our expertise and local
            knowledge in Frankfurt am Main, we simplify the process — our
            tailored services ensure you find a nanny who matches your needs,
            providing exceptional care and support for your child.
          </p>
          <p>
            We are more than just a service — we are your partner in your
            parenting journey. Let us take care of the search, so you can
            focus on what matters most: cherishing time with your little ones,
            knowing they are in the best hands.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="font-heading italic text-lg text-rust">
            With warmth and expertise,
          </p>
          <p className="font-heading italic text-xl text-rust">Alexandra</p>
          <p className="font-label text-xs tracking-[0.15em] uppercase text-ink/60">
            Founder of The Frankfurt Nanny Agency
          </p>
        </div>

        <div className="mt-10">
          <TextLink href="/about">Read our full story</TextLink>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 pb-24">
        <div className="text-center mb-10">
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="font-heading italic text-3xl md:text-4xl mt-2">
            Services
          </h2>
        </div>
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
        <div className="text-center mt-12">
          <TextLink href="/services">View all services</TextLink>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Contact CTA — full form lives on /contact */}
      <section id="contact" className="px-6 md:px-12 py-24 text-center">
        <SectionLabel>Dear Parents</SectionLabel>
        <h2 className="font-heading italic text-3xl md:text-4xl mt-4">
          Please contact us
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-ink/80">
          Tell us about your family and we will schedule a call to discuss
          your expectations — the number of children, their ages, preferred
          languages, and the support you need at home.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="font-label text-xs tracking-[0.2em] uppercase bg-rust text-cream px-10 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            Start your enquiry
          </Link>
          <TextLink href="/faq">Read our FAQ</TextLink>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
