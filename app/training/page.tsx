"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function TrainingPage() {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <SiteHeader />

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-40 text-center gap-6">
        <p className="font-label text-xs tracking-[0.25em] uppercase text-rust">
          Guest Area
        </p>
        <h1 className="font-heading italic text-3xl md:text-4xl">
          TFNA Training
        </h1>
        <p className="text-sm text-ink/70 max-w-sm">
          Please enter the password below. This section is restricted to
          enrolled nannies and members.
        </p>
        <form
          className="flex gap-2 mt-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-transparent border border-ink/20 rounded px-4 py-2 text-sm text-ink"
          />
          <button
            type="submit"
            className="font-label text-xs tracking-[0.2em] uppercase bg-rust text-cream px-6 py-2 rounded-sm hover:opacity-90 transition-opacity"
          >
            Go
          </button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
