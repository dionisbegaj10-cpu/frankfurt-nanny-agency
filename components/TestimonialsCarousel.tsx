"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "They went above and beyond to find us a wonderful nanny who our daughter adores.",
    author: "K. A-H",
  },
  { quote: "Made my life in Frankfurt so much easier.", author: "T. B." },
  {
    quote: "A calm, reliable presence for our family from day one.",
    author: "M. R.",
  },
  {
    quote: "Discreet, professional, and truly cared for our children.",
    author: "S. K.",
  },
  {
    quote: "Alexandra understood exactly what our family needed.",
    author: "L. H.",
  },
  {
    quote: "The perfect match — we couldn't recommend them more.",
    author: "J. P.",
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeIndex];

  function showPrevious() {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section className="bg-cream text-ink px-6 md:px-12 py-24 text-center border-y border-ink/10">
      <p className="font-label text-xs tracking-[0.25em] uppercase text-rust mb-6">
        Testimonials
      </p>

      <div className="relative max-w-4xl mx-auto px-8 md:px-16">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-rust text-3xl leading-none hover:opacity-60 transition-opacity"
        >
          &larr;
        </button>

        <div key={activeIndex} className="min-h-36 flex flex-col justify-center">
          <blockquote className="font-heading italic text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-label text-xs tracking-[0.15em] uppercase text-ink/60 mt-4">
            {testimonial.author}
          </p>
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-rust text-3xl leading-none hover:opacity-60 transition-opacity"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3" role="tablist" aria-label="Choose testimonial">
        {testimonials.map((item, index) => (
          <button
            key={`${item.author}-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-rust" : "bg-ink/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
