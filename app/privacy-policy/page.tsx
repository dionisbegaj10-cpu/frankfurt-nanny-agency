import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | The Frankfurt Nanny Agency",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-6 text-sm leading-relaxed text-ink/80">
        <p>
          Welcome to The Frankfurt Nanny Agency UG (haftungsbeschränkt)
          privacy policy. Please read through carefully.
        </p>
        <p>
          This privacy policy describes how and why we obtain, store and
          process data which can identify you directly or indirectly. This
          policy applies where we are acting as a data controller for the
          personal information of any individual or group of individuals who
          use or participate in our childcare and household staff matchmaker
          service (the &ldquo;Service&rdquo;) or visit our Site.
        </p>
        <p>
          The Frankfurt Nanny Agency UG (haftungsbeschränkt) is registered in
          Frankfurt, Germany with registration number 90337186455, registered
          at Fallerslebenstrasse 12, 60320 Frankfurt (&ldquo;we&rdquo;,
          &ldquo;us&rdquo; and &ldquo;our&rdquo;).
        </p>
        <p>
          Our website address is www.frankfurtnanny.de (the &ldquo;Site&rdquo;).
          If you would like to get in touch, you can contact us by email to{" "}
          <a href="mailto:info@frankfurtnanny.de" className="text-rust underline">
            info@frankfurtnanny.de
          </a>
          .
        </p>
        <p>
          We do update this policy from time to time so please do review it
          regularly.
        </p>

        <h2 className="font-heading italic text-xl text-rust mt-4">
          Introduction
        </h2>
        <p>
          References to the processing of information includes the
          collection, use, storage and protection of data. For your security,
          personal information collected by us will only be processed in
          accordance with this privacy policy. We have created this privacy
          policy in compliance with Regulation (EU) 2016/679 of the European
          Parliament and of the Council of 27 April 2016 on the protection of
          natural persons with regards to the processing of personal
          information and on the free movement of such data, known as the
          General Data Protection Regulation (GDPR).
        </p>

        <h2 className="font-heading italic text-xl text-rust mt-4">
          Your Security
        </h2>
        <p>
          We take your privacy and data security very seriously. We will
          ensure that any information obtained from you is treated as private
          and confidential by us and anyone else involved in delivering our
          Service.
        </p>
        <p>
          To prevent unauthorised access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to
          safeguard and secure the data we process. Anyone processing
          personal information in our team or on our behalf must do so in
          accordance with this policy and on the basis that we are satisfied
          that they can and will adhere to our high standards for data
          protection and security.
        </p>
        <p>
          The transmission of information over the internet is inherently
          insecure, and we cannot guarantee the security of data sent over the
          internet. You are responsible for keeping any username and password
          you use for accessing our Site confidential.
        </p>

        <h2 className="font-heading italic text-xl text-rust mt-4">
          Personal Information We Collect
        </h2>
        <p>
          We may collect the following types of information from you, some of
          which is considered personal information under GDPR: if you are a
          child carer (e.g. a nanny, nanny housekeeper, maternity nurse, night
          nanny, governess or similar) or another type of household staff
          (e.g. a personal assistant or house cleaner) — your name, address,
          email address, phone number, profession and employment history,
          personal identification (such as a passport or drivers license),
          visa if applicable, DBS check, first aid certifications, medical /
          health conditions which you provide as part of any application.
        </p>

        <p className="text-ink/50 text-xs pt-6 border-t border-ink/10 mt-6">
          This is a summary of our full privacy policy. For the complete,
          legally binding text, please contact us at{" "}
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
