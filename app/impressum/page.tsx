import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum | Frankfurt Nanny",
};

export default function ImpressumPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Legal" title="Impressum" />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-6 text-sm leading-relaxed text-ink/80">
        <div>
          <p className="font-label text-xs tracking-[0.15em] uppercase text-ink/50 mb-2">
            Anbieter dieser Internetseite ist
          </p>
          <p>
            The Frankfurt Nanny Agency
            <br />
            AC Nanny &amp; Property Agency UG (haftungsbeschränkt)
            <br />
            Amöneburger Strasse 29
            <br />
            D-60433 Frankfurt
            <br />
            Telefon: +49 1726565552
            <br />
            E-Mail:{" "}
            <a href="mailto:info@frankfurtnanny.de" className="text-rust underline">
              info@frankfurtnanny.de
            </a>
          </p>
        </div>

        <p>
          Wirtschafts-Identifikationsnummer: 0472463776 / HRB 122794
          <br />
          Inhaltlich Verantwortlicher gemäß § 55 Abs. 1 RStV: Alexandra
          Coorssen
          <br />
          Anschrift w.o.
        </p>

        <h2 className="font-heading italic text-xl text-rust mt-4">
          Haftungsausschluss (Disclaimer)
        </h2>

        <div>
          <h3 className="font-label text-xs tracking-[0.15em] uppercase text-ink/60 mb-2">
            Haftung für Inhalte
          </h3>
          <p>
            The Frankfurt Nanny Agency ist als Diensteanbieter gemäß § 7
            Abs.1 TMG für eigene Inhalte auf diesen Internetseiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG ist The
            Frankfurt Nanny Agency als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen
            zu monitoren oder nach Umständen zu forschen, die auf
            rechtswidrige Handlungen hinweisen. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen wird The Frankfurt Nanny Agency
            diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h3 className="font-label text-xs tracking-[0.15em] uppercase text-ink/60 mb-2">
            Haftung für Links
          </h3>
          <p>
            Unser Angebot enthält Verknüpfungen / Links zu externen Websites
            Dritter, auf deren Inhalte The Frankfurt Nanny Agency keinen
            Einfluss hat. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei
            Bekanntwerden von Rechtsverletzungen wird The Frankfurt Nanny
            Agency derartige Links umgehend entfernen.
          </p>
        </div>

        <div>
          <h3 className="font-label text-xs tracking-[0.15em] uppercase text-ink/60 mb-2">
            Urheberrecht
          </h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads
            und Kopien dieser Website sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend löschen.
          </p>
        </div>

        <p className="text-ink/50 text-xs pt-6 border-t border-ink/10 mt-6">
          This page summarizes the legally required Impressum. For the
          complete Datenschutz (data protection) section, please contact us
          at{" "}
          <a href="mailto:info@frankfurtnanny.de" className="text-rust underline">
            info@frankfurtnanny.de
          </a>
          .
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
