"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "./icons";
import { DecorativeBorderFrame } from "./DecorativeBorder";

const menuItems = [
  { n: "01.", label: "Home", href: "/" },
  { n: "02.", label: "About", href: "/about" },
  { n: "03.", label: "Services", href: "/services" },
  { n: "04.", label: "Contact", href: "/contact" },
  { n: "05.", label: "Nanny Applications", href: "/nanny-applications" },
];

const moreLinks = [
  { label: "Our Standards", href: "/our-standards" },
  { label: "FAQ", href: "/faq" },
  { label: "Separated & Single Parenting", href: "/help-for-single-parents" },
  { label: "Our Perfect Candidate", href: "/our-perfect-candidate" },
  { label: "Book Courses", href: "/book-online" },
  { label: "Open Positions", href: "/open-positions" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!overlay) return;
    function onScroll() {
      setVisible(window.scrollY < 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <>
      <div
        className={`fixed top-0 inset-x-0 z-50 transition-opacity duration-300 ease-out ${
          overlay && !visible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <header
          className={`flex items-center justify-between px-7 py-6 ${
            overlay
              ? "bg-transparent text-cream"
              : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-ink"
          }`}
        >
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 font-label text-xs tracking-[0.2em] uppercase"
          >
            <HamburgerIcon className="w-5 h-3.5" />
            Menu
          </button>

          <Link
            href="/contact"
            className="font-label text-xs tracking-[0.2em] uppercase"
          >
            Contact
          </Link>
        </header>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center overflow-y-auto py-8">
          <div className="w-full max-w-[740px] mx-4">
            <DecorativeBorderFrame>
              <div className="bg-cream px-10 py-10">
                <div className="flex items-center justify-between">
                  <span className="font-heading italic text-3xl text-rust">
                    FN
                  </span>
                  <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                    <CloseIcon className="w-5 h-5 text-rust" />
                  </button>
                </div>

                <div className="mt-8 border-t border-rust/40">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-6 border-b border-rust/40 py-6 cursor-pointer"
                    >
                      <span className="font-label text-xs text-rust">{item.n}</span>
                      <span className="font-heading italic text-3xl text-rust">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  {moreLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-label text-xs tracking-[0.15em] uppercase text-rust"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </DecorativeBorderFrame>
          </div>
        </div>
      )}
    </>
  );
}
