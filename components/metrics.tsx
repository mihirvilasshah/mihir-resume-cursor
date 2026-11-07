"use client";

import { marquee, metrics } from "@/lib/data";
import { Reveal } from "./reveal";

export function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8">
      <Reveal>
        <p className="font-mono text-xs text-[var(--accent)]">02 — Executive summary</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Impact, parsed from eight years of ownership.
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <article className="glass group relative overflow-hidden rounded-3xl p-5 transition duration-500 hover:shadow-glow">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_55%)]" />
              <p className="font-display text-4xl tracking-tight">{item.value}</p>
              <p className="mt-2 text-sm font-medium">{item.label}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-full border border-[var(--line)] py-3">
        <div className="flex w-max animate-marquee gap-8 pr-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8">
              {item}
              <span className="text-[var(--accent)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
