export function PageHero({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="bg-cream text-ink px-6 md:px-12 pt-40 pb-16 text-center border-b border-ink/10">
      <p className="font-label text-xs tracking-[0.25em] uppercase text-rust mb-4">
        {eyebrow}
      </p>
      <h1 className="font-heading italic text-3xl md:text-5xl max-w-3xl mx-auto leading-snug">
        {title}
      </h1>
    </section>
  );
}
