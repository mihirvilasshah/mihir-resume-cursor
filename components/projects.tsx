"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "./reveal";

const kinds = ["All", "Leadership", "AI", "Education", "Commerce", "Open Source"] as const;

export function Projects() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("All");
  const list = useMemo(
    () => projects.filter((p) => kind === "All" || p.kind === kind),
    [kind],
  );

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-10">
      <Reveal>
        <p className="font-mono text-xs text-[var(--accent)]">04 — Product grid</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-5xl">
          Platforms shipped for classrooms, merchants, and markets.
        </h2>
      </Reveal>
      <div className="mt-8 flex flex-wrap gap-2">
        {kinds.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              kind === k
                ? "bg-[var(--ink)] text-[var(--bg)]"
                : "border border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {list.map((project, i) => (
          <Reveal key={project.name} delay={(i % 4) * 60}>
            <article className="group glass relative overflow-hidden rounded-[28px] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-glow">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent)]/0 blur-3xl transition duration-500 group-hover:bg-[var(--accent)]/25" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {project.kind} · {project.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{project.name}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{project.client}</p>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line)] transition group-hover:border-[var(--accent)]"
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)]">
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed">{project.blurb}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)] transition group-hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] group-hover:text-[var(--ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
