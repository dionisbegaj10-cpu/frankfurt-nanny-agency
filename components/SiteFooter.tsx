import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/our-standards", label: "Our Standards" },
];

const moreLinks = [
  { href: "/nanny-applications", label: "Nanny Applications" },
  { href: "/help-for-single-parents", label: "Separated & Single Parenting" },
  { href: "/our-perfect-candidate", label: "Our Perfect Candidate" },
  { href: "/book-online", label: "Book Courses" },
  { href: "/open-positions", label: "Open Positions" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/impressum", label: "Impressum" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-cream text-ink border-t border-ink/10">
      {/* Full footer — tablet and up */}
      <div className="hidden md:block px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 font-label text-xs tracking-[0.15em] uppercase text-ink/70">
            {primaryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-rust">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 font-label text-xs tracking-[0.15em] uppercase text-ink/70">
            {moreLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-rust">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="font-heading italic text-2xl text-rust">
              The Frankfurt Nanny Agency
            </div>
            <p className="text-sm text-ink/60 leading-relaxed">
              AC Nanny &amp; Property Agency UG (haftungsbeschränkt)
              <br />
              Amöneburger Str. 29
              <br />
              60433 Frankfurt am Main, Germany
            </p>
            <a
              href="mailto:info@frankfurtnanny.de"
              className="text-sm text-ink/60 hover:text-rust"
            >
              info@frankfurtnanny.de
            </a>
          </div>

          <div className="flex flex-col gap-3 font-label text-xs tracking-[0.15em] uppercase text-ink/70">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-rust">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-ink/40 mt-12">
          Copyright © 2024 · All Rights Reserved by frankfurtnanny.de
        </p>
      </div>

      {/* Compact footer — mobile only */}
      <div className="md:hidden px-6 py-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-4 font-label text-xs tracking-[0.1em] uppercase text-ink/70">
          <Link href="/impressum" className="hover:text-rust">
            Impressum
          </Link>
          <span className="text-ink/30">·</span>
          <Link href="/privacy-policy" className="hover:text-rust">
            Datenschutz
          </Link>
        </div>
        <p className="text-center text-[11px] text-ink/40">
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
