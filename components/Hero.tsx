export function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[650px] overflow-hidden bg-black">
      {/* Portrait cut for phones, landscape cut for tablet and up. */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        src="/videos/hero-mobile.mp4"
        poster="/images/hero-mobile-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/videos/hero-desktop.mp4"
        poster="/images/hero-desktop-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none px-4">
        <h1 className="font-heading text-cream leading-none text-[7vw] md:text-[4.2vw] tracking-tight uppercase">
          The Frankfurt Nanny Agency
        </h1>
      </div>
    </section>
  );
}
