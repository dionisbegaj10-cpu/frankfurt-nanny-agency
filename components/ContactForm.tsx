"use client";

const nannyTypes = [
  "Full time Nanny (20-35 hrs)",
  "Part time Job (15-19 hrs)",
  "Mini Job (max 10 hrs)",
  "Maternity Nurse Job",
  "Night Nanny Job",
  "Rota Nanny Job",
  "Travel Nanny Job",
];

const languages = ["English", "German", "French", "Spanish", "Other"];

const tasks = [
  "Pick up the kids",
  "Do some light household",
  "Travel with us",
  "Sleep over time to time",
  "Others",
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-xs tracking-[0.15em] uppercase text-ink/70 mb-3">
      {children}
    </p>
  );
}

function CheckboxRow({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm text-ink/80 cursor-pointer">
      <input
        type="checkbox"
        className="accent-rust w-4 h-4"
        name="field"
        value={label}
      />
      {label}
    </label>
  );
}

export function ContactForm() {
  return (
    <form
      className="mt-12 max-w-xl mx-auto flex flex-col gap-8 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <FieldLabel>Select Type of Nanny needed</FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {nannyTypes.map((t) => (
            <CheckboxRow key={t} label={t} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Preferred Language *</FieldLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {languages.map((l) => (
            <CheckboxRow key={l} label={l} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Nanny Tasks *</FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tasks.map((t) => (
            <CheckboxRow key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Birthday of Child 1</FieldLabel>
          <input
            type="date"
            className="w-full bg-transparent border border-ink/20 rounded px-3 py-2 text-sm text-ink"
          />
        </div>
        <div>
          <FieldLabel>Birthday of Child 2</FieldLabel>
          <input
            type="date"
            className="w-full bg-transparent border border-ink/20 rounded px-3 py-2 text-sm text-ink"
          />
        </div>
      </div>

      <div>
        <FieldLabel>How did you hear from us?</FieldLabel>
        <input
          type="text"
          className="w-full bg-transparent border border-ink/20 rounded px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <FieldLabel>Did you inquire other agencies? If yes, which one?</FieldLabel>
        <input
          type="text"
          className="w-full bg-transparent border border-ink/20 rounded px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <FieldLabel>Message (further details)</FieldLabel>
        <textarea
          rows={5}
          className="w-full bg-transparent border border-ink/20 rounded px-3 py-2 text-sm text-ink resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-center font-label text-xs tracking-[0.2em] uppercase bg-rust text-cream px-10 py-3 rounded-sm hover:opacity-90 transition-opacity"
      >
        Send Now
      </button>
    </form>
  );
}
