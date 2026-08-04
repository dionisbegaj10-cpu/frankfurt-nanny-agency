"use client";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-xs tracking-[0.15em] uppercase text-ink/70 mb-3">
      {children}
    </p>
  );
}

function RadioRow({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm text-ink/80 cursor-pointer">
      <input type="radio" name={name} className="accent-rust w-4 h-4" value={label} />
      {label}
    </label>
  );
}

function CheckboxRow({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm text-ink/80 cursor-pointer">
      <input type="checkbox" className="accent-rust w-4 h-4" value={label} />
      {label}
    </label>
  );
}

const positions = [
  "Full time Nanny (25-35hrs)",
  "International Nanny",
  "Part time Nanny (12-24 hrs)",
  "Babysitting (10-12hrs)",
  "Maternity Nurse",
  "Night Nanny",
  "Au Pair",
];

const languages = ["English", "German", "French", "Spanish", "Italian"];
const experience = [
  "Twins",
  "Allergic child",
  "Diabetic child",
  "Handicapped child",
  "ADHD child",
];
const availability = ["Mornings", "Afternoons", "Full day"];

export function JobApplicationForm() {
  return (
    <form
      className="mt-12 max-w-xl mx-auto flex flex-col gap-8 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <FieldLabel>Select Position Type</FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {positions.map((p) => (
            <CheckboxRow key={p} label={p} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Can you write invoices?</FieldLabel>
        <div className="flex flex-col gap-2">
          <RadioRow name="invoices" label="Yes, just help me how" />
          <RadioRow name="invoices" label="No, I don't have a Gewerbeschein" />
        </div>
      </div>

      <div>
        <FieldLabel>European work permit?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="permit" label="Yes" />
          <RadioRow name="permit" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Help with household?</FieldLabel>
        <div className="flex flex-col gap-2">
          <RadioRow name="household" label="Yes, no problem" />
          <RadioRow name="household" label="Only light household" />
        </div>
      </div>

      <div>
        <FieldLabel>Languages you speak *</FieldLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {languages.map((l) => (
            <CheckboxRow key={l} label={l} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Experience with</FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {experience.map((e) => (
            <CheckboxRow key={e} label={e} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Newborn experience?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="newborn" label="Yes" />
          <RadioRow name="newborn" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>1st Aid certificate?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="firstaid" label="Yes" />
          <RadioRow name="firstaid" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Working with other agencies?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="otheragencies" label="Yes" />
          <RadioRow name="otheragencies" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Are you a student?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="student" label="Yes" />
          <RadioRow name="student" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Driver&apos;s licence?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="license" label="Yes" />
          <RadioRow name="license" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Willing to live in?</FieldLabel>
        <div className="flex gap-6">
          <RadioRow name="livein" label="Yes" />
          <RadioRow name="livein" label="No" />
        </div>
      </div>

      <div>
        <FieldLabel>Available Time</FieldLabel>
        <div className="flex flex-col gap-2">
          {availability.map((a) => (
            <CheckboxRow key={a} label={a} />
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Upload CV</FieldLabel>
        <input
          type="file"
          className="w-full text-sm text-ink/70 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-rust file:text-cream file:font-label file:text-xs file:uppercase file:tracking-[0.15em]"
        />
        <p className="text-xs text-ink/50 mt-1">Max 15MB</p>
      </div>

      <label className="flex items-start gap-2 text-sm text-ink/80">
        <input type="checkbox" className="accent-rust w-4 h-4 mt-0.5" />
        I accept terms &amp; conditions
      </label>

      <button
        type="submit"
        className="self-center font-label text-xs tracking-[0.2em] uppercase bg-rust text-cream px-10 py-3 rounded-sm hover:opacity-90 transition-opacity"
      >
        Submit
      </button>
    </form>
  );
}
