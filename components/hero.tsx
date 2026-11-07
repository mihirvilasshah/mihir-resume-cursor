"use client";

import { ArrowDownRight, Github, Linkedin, TerminalSquare } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { profile, terminalLines } from "@/lib/data";

export function Hero() {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = terminalLines[line];
    const speed = deleting ? 18 : 34;
    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) {
          window.setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = full.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setLine((i) => (i + 1) % terminalLines.length);
        }
      }
    }, speed);
    return () => window.clearTimeout(timer);
  }, [text, deleting, line]);

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:pt-40">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Available for principal / staff conversations
        </span>
        <span>{profile.location}</span>
      </div>

      <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-xs text-[var(--accent)]">01 — Hero canvas</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
            >
              View the system
              <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_40%,transparent)] px-5 py-3 text-sm font-medium backdrop-blur"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-8 h-24 w-24 animate-float-y rounded-full bg-[var(--accent)]/20 blur-2xl" />
          <div className="glass overflow-hidden rounded-[28px] shadow-glow">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
                <TerminalSquare size={14} />
                mihir@principal:~ leadership.sh
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
            </div>
            <div className="space-y-3 px-5 py-5 font-mono text-[13px] leading-6">
              <p className="text-[var(--muted)]">$ whoami</p>
              <p>
                {profile.shortName} · {profile.title}
              </p>
              <p className="text-[var(--muted)]">$ cat mission.txt</p>
              <p className="min-h-[4.5rem] text-[var(--accent)]">
                {text}
                <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-[var(--accent)] align-middle" />
              </p>
              <p className="text-[var(--muted)]">$ git log --oneline -1</p>
              <p>8+ yrs · 18 products · WCAG 2.1 AA · AI + Angular cores</p>
            </div>
            <div className="flex items-center gap-3 border-t border-[var(--line)] px-5 py-4">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={44}
                height={44}
                className="rounded-full object-cover"
                unoptimized
                priority
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{profile.name}</p>
                <p className="truncate text-xs text-[var(--muted)]">
                  {profile.company} · {profile.location}
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <a
                  href={profile.linkedin}
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)]"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href={profile.github}
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)]"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
