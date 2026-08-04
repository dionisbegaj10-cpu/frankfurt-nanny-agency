export function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[650px] overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-family.mp4"
        poster="/images/hero-family-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-x-0 bottom-[20%] flex flex-col items-center gap-3 text-center text-cream px-6">
        <div className="w-16 h-px bg-cream/80 mb-2" />
        <p className="font-heading text-sm md:text-base tracking-[0.15em] uppercase max-w-2xl leading-snug">
          High-profile family nanny services
        </p>
        <p className="font-heading text-sm md:text-base tracking-[0.15em] uppercase">
          Rooted in Frankfurt am Main
        </p>
      </div>

      <div className="absolute bottom-[3%] inset-x-0 text-center pointer-events-none px-4">
        <p className="font-heading italic text-cream/80 text-base md:text-lg mb-1">
          Welcome to
        </p>
        <h1 className="font-heading text-cream leading-none text-[7vw] md:text-[4.2vw] tracking-tight uppercase">
          The Frankfurt Nanny Agency
        </h1>
      </div>
    </section>
  );
}
