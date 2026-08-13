export function VideoPageHero({
  title,
  src,
  poster,
}: {
  title: string;
  src: string;
  poster: string;
}) {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream px-6 pt-16">
        <h1 className="font-heading italic text-3xl md:text-5xl max-w-3xl leading-snug">
          {title}
        </h1>
      </div>
    </section>
  );
}
