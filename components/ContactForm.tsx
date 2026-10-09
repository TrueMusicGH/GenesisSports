"use client";

import { useState } from "react";

type Errors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    looking: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email)) e.email = "Please enter a valid email.";
    if (!values.looking) e.looking = "Please select an option.";
    if (values.message.trim().length < 10)
      e.message = "Tell us a little more (min 10 characters).";
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company_website: "" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  function update(key: string, v: string) {
    setValues((s) => ({ ...s, [key]: v }));
    setErrors((s) => ({ ...s, [key]: undefined }));
  }

  const inputCls =
    "w-full bg-transparent border-b border-white/15 py-4 text-bone placeholder:text-mist/60 focus:border-bone outline-none transition-colors";

  if (submitted) {
    return (
      <div className="border border-white/10 p-10">
        <h3 className="text-2xl font-black uppercase">Thank you.</h3>
        <p className="mt-4 text-mist">
          Your message has been sent. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {[
        ["name", "Name", "text", true],
        ["company", "Company", "text", false],
        ["email", "Email", "email", true],
        ["phone", "Phone", "tel", false],
      ].map(([key, label, type, req]) => (
        <div key={key as string}>
          <input
            id={key as string}
            type={type as string}
            placeholder={`${label}${req ? " *" : ""}`}
            value={values[key as keyof typeof values]}
            onChange={(e) => update(key as string, e.target.value)}
            className={inputCls}
            aria-invalid={!!errors[key as string]}
          />
          {errors[key as string] && (
            <p className="mt-2 text-xs text-accent">{errors[key as string]}</p>
          )}
        </div>
      ))}

      <div>
        <select
          aria-label="What are you looking for?"
          value={values.looking}
          onChange={(e) => update("looking", e.target.value)}
          className="w-full bg-ink border-b border-white/15 py-4 text-bone focus:border-bone outline-none"
        >
          <option value="">What are you looking for? *</option>
          <option>Brand partnership</option>
          <option>Sponsorship</option>
          <option>Sports property management</option>
          <option>Talent representation</option>
          <option>Events & activations</option>
          <option>Something else</option>
        </select>
        {errors.looking && <p className="mt-2 text-xs text-accent">{errors.looking}</p>}
      </div>

      <div>
        <textarea
          rows={5}
          placeholder="Message *"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-2 text-xs text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="self-start border border-white/15 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#c9a24b] hover:bg-[#c9a24b] hover:text-ink transition-colors duration-300 disabled:opacity-50 disabled:cursor-wait"
      >
        {sending ? "Sending…" : "Start a Conversation"}
      </button>
      {serverError && (
        <p role="alert" className="text-sm text-accent">
          {serverError}
        </p>
      )}
    </form>
  );
}
