export function VideoBand() {
  return (
    <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/band-family.mp4"
        poster="/images/band-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream px-6 gap-4">
        <div className="w-16 h-px bg-cream/80" />
        <p className="font-heading italic text-2xl md:text-4xl max-w-2xl leading-snug">
          Care that grows with your family
        </p>
        <p className="font-label text-xs tracking-[0.2em] uppercase text-cream/80">
          Frankfurt am Main &amp; the Rhine-Main region
        </p>
      </div>
    </section>
  );
}
