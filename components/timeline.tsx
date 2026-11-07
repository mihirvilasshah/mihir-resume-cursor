"use client";

import { Code2, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { timeline, type Track } from "@/lib/data";
import { Reveal } from "./reveal";

const filters: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "Full track" },
  { id: "code", label: "Pro coder" },
  { id: "lead", label: "Team leader" },
];

export function Timeline() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const items = useMemo(
    () => timeline.filter((item) => filter === "all" || item.track === filter),
    [filter],
  );

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <p className="font-mono text-xs text-[var(--accent)]">03 — Split-track career</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-5xl">
          One spine. Two crafts: systems and people.
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Four promotions inside Tricon Infotech. Code-heavy architecture on the left of every
          decision; mentoring, sprint ownership, and cross-functional delivery on the right.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === f.id
                ? "bg-[var(--ink)] text-[var(--bg)]"
                : "border border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="relative mt-12">
        <div className="absolute left-[15px] top-0 h-full w-px bg-[var(--line)] sm:left-1/2" />
        <div className="space-y-8">
          {items.map((item, i) => {
            const lead = item.track === "lead";
            return (
              <Reveal key={`${item.title}-${item.year}`} delay={i * 40}>
                <article
                  className={`relative grid gap-4 sm:grid-cols-2 ${
                    i % 2 === 0 ? "" : "sm:[&>*:first-child]:col-start-2 sm:[&>*:first-child]:row-start-1"
                  }`}
                >
                  <div
                    className={`glass rounded-[28px] p-6 transition duration-500 hover:shadow-glow ${
                      i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {lead ? <Users size={14} /> : <Code2 size={14} />}
                      {lead ? "Leadership" : "Engineering"}
                    </div>
                    <p className="mt-3 font-mono text-xs text-[var(--accent)]">{item.year}</p>
                    <h3 className="mt-1 font-display text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.org}</p>
                    <p className="mt-3 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <span className="absolute left-[9px] top-8 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] sm:left-[calc(50%-7px)]" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
