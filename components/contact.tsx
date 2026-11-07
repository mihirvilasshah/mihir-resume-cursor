"use client";

import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";
import { Reveal } from "./reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Could not send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("The message could not be posted. Email directly and it will land.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs text-[var(--accent)]">07 — Contact engine</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-5xl">
            Build something ambitious together.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Principal-level conversations, staff-plus architecture, or a product that needs a
            lead who still writes the critical path. Bengaluru-based; remote-fluent.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} />
              {profile.location}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <div className="glass relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            {status === "sent" ? (
              <div className="grid min-h-[360px] place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)] text-[var(--bg)] animate-checkpop">
                    <Check size={28} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">Message locked in.</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    I&apos;ll reply from {profile.email}. If it&apos;s urgent, call.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-sm underline underline-offset-4"
                    onClick={() => setStatus("idle")}
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <Field name="name" label="Name" autoComplete="name" required />
                <Field name="email" label="Email" type="email" autoComplete="email" required />
                <Field name="company" label="Company / team" />
                <div className="float-label relative">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder=" "
                    className="w-full resize-none rounded-2xl border border-[var(--line)] bg-transparent px-4 pb-3 pt-6 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_var(--glow)]"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-[var(--muted)] transition">
                    What should we build?
                  </label>
                </div>
                {error && <p className="text-sm text-rose-500">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)] disabled:opacity-60"
                >
                  {status === "sending" ? "Transmitting…" : "Send the brief"}
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="float-label relative">
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder=" "
        className="peer w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 pb-3 pt-6 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_var(--glow)]"
      />
      <label className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-[var(--muted)] transition">
        {label}
      </label>
    </div>
  );
}
