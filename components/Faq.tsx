"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can you help with finding a nanny for a high-profile family?",
    a: "Absolutely. We have extensive experience working with high-profile families and understand the importance of discretion, reliability, and tailored childcare solutions.",
  },
  {
    q: "What is The Frankfurt Nanny Agency?",
    a: "The Frankfurt Nanny Agency is a leading international nanny service based in Frankfurt am Main, Germany, dedicated to providing exceptional childcare solutions for high-profile families and business owners.",
  },
  {
    q: "How does The Frankfurt Nanny Agency work?",
    a: "The agency matches families with carefully vetted, highly qualified caregivers who align with their individual needs and values through a meticulous selection process.",
  },
  {
    q: "How long does it take to find a nanny in Frankfurt?",
    a: "The time frame varies depending on the family's specific requirements, but the agency strives to provide matches as quickly as possible while ensuring quality.",
  },
  {
    q: "What makes The Frankfurt Nanny Agency different from other agencies?",
    a: "The agency emphasizes creating a nurturing and supportive environment, prioritizing emotional well-being, and fostering long-term relationships between caregivers and children.",
  },
  {
    q: "What types of nannies do you offer in Frankfurt?",
    a: "The agency offers a variety of nannies, including live-in, live-out, bilingual, and specialized caregivers such as newborn specialists and maternity nurses.",
  },
  {
    q: "What is the difference between a live-in and live-out nanny?",
    a: "A live-in nanny resides with the family and provides round-the-clock care, while a live-out nanny commutes to the family's home and works set hours.",
  },
  {
    q: "Can you find a bilingual or English-speaking nanny in Frankfurt?",
    a: "Yes, the agency specializes in providing bilingual and English-speaking nannies to cater to the needs of international families.",
  },
  {
    q: "Do you provide nannies for international travel?",
    a: "Yes, the agency can arrange for nannies who are experienced and available for international travel.",
  },
  {
    q: "What is a newborn specialist / maternity nurse?",
    a: "A newborn specialist or maternity nurse is a caregiver with expertise in newborn care, providing support and guidance to families during the early stages of a baby's life.",
  },
  {
    q: "Can I hire a part-time or occasional babysitter?",
    a: "Yes, the agency offers options for part-time or occasional babysitting services to meet diverse family needs.",
  },
  {
    q: "How much does a nanny cost in Frankfurt?",
    a: "The cost of a nanny in Frankfurt depends on factors such as experience, qualifications, and the type of care required.",
  },
  {
    q: "What are the agency fees for finding a nanny?",
    a: "The agency charges a fee for its services, which covers the selection process, background checks, and matching families with suitable nannies.",
  },
  {
    q: "What is the average nanny salary in Germany?",
    a: "The average nanny salary in Germany varies based on experience, location, and job responsibilities, but the agency can provide guidance on competitive rates.",
  },
  {
    q: "How do you vet and screen your nannies?",
    a: "The agency conducts in-depth interviews, reference checks, and specialized training to ensure nannies are highly qualified and trustworthy.",
  },
  {
    q: "Are your nannies background-checked?",
    a: "Yes, all nannies undergo thorough background checks as part of the agency's vetting process.",
  },
  {
    q: "What qualifications do your nannies have?",
    a: "The nannies have diverse qualifications, including childcare certifications, first aid training, and experience in specialized areas like newborn care.",
  },
  {
    q: "Do your nannies have first aid training?",
    a: "Yes, the agency ensures that all nannies have up-to-date first aid training to handle emergencies effectively.",
  },
  {
    q: "Do you work with international and expat families in Frankfurt?",
    a: "Yes, the agency specializes in serving international and expat families, providing tailored childcare solutions to meet their unique needs.",
  },
  {
    q: "Can you find a nanny who speaks English, French, or Spanish?",
    a: "Yes, the agency can match families with nannies who speak English, French, Spanish, or other languages as required.",
  },
  {
    q: "Do you help families relocating to Frankfurt?",
    a: "Yes, the agency assists families relocating to Frankfurt by providing childcare solutions and support during the transition.",
  },
  {
    q: "Which areas do you cover outside Frankfurt?",
    a: "We support families in Frankfurt, the Rhine-Main region, and selected placements across Germany and Europe, depending on the role and your family's needs. If you are relocating or need support beyond the city, we are happy to discuss the best options with you.",
  },
];

export function Faq({ showHeading = true }: { showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-12 py-24 max-w-3xl mx-auto">
      {showHeading && (
        <div className="text-center mb-12">
          <p className="font-label text-xs tracking-[0.25em] uppercase text-rust mb-2">
            Common Questions
          </p>
          <h2 className="font-heading italic text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
      )}

      <div className="flex flex-col">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className="border-b border-ink/15">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-heading text-base md:text-lg text-ink">
                  {item.q}
                </span>
                <span className="font-label text-rust text-lg shrink-0">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <p className="pb-5 text-sm text-ink/70 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
