"use client";

import { Instagram, Linkedin } from "lucide-react";
import { profile, socialCards } from "@/lib/data";
import { Reveal } from "./reveal";

export function Social() {
  return (
    <section id="studio" className="mx-auto max-w-6xl px-5 py-10">
      <Reveal>
        <p className="font-mono text-xs text-[var(--accent)]">06 — Social & personality sandbox</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-5xl">
          LinkedIn for the professional edge. Instagram for the human texture.
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Community days at Tricon, advocacy in pink, school-kit drives—and off-hours cinema,
          travel, calligraphy, badminton, and markets.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm"
          >
            <Linkedin size={14} /> linkedin.com/in/mihirvilasshah
          </a>
          <a
            href={profile.instagram}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm"
          >
            <Instagram size={14} /> @mihirvilasshah
          </a>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socialCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 60}>
            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="glass group block h-full rounded-[28px] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                <span>{card.network}</span>
                <span className="rounded-full border border-[var(--line)] px-2 py-0.5">{card.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl">{card.title}</h3>
              <p className="mt-1 text-xs text-[var(--accent)]">{card.tone}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.body}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
