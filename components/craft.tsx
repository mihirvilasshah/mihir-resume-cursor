"use client";

import {
  certifications,
  education,
  languages,
  publication,
  skills,
} from "@/lib/data";
import { Reveal } from "./reveal";

const groups: { title: string; items: readonly string[] }[] = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Data", items: skills.data },
  { title: "Cloud & delivery", items: skills.cloud },
  { title: "A11y & AI", items: skills.a11yAi },
];

export function Craft() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="font-mono text-xs text-[var(--accent)]">05 — Stack & credentials</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Deep frontend mastery, with the adjacent systems to own the whole path.
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 50}>
            <article className="glass h-full rounded-[24px] p-5">
              <h3 className="font-display text-lg">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[color-mix(in_srgb,var(--ink)_6%,transparent)] px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="glass rounded-[28px] p-6">
            <h3 className="font-display text-xl">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((ed) => (
                <li key={ed.school} className="border-t border-[var(--line)] pt-4 first:border-0 first:pt-0">
                  <p className="text-sm font-medium">{ed.school}</p>
                  <p className="text-sm text-[var(--muted)]">{ed.credential}</p>
                  <p className="mt-1 font-mono text-[11px] text-[var(--accent)]">
                    {ed.via} · {ed.dates}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <div className="space-y-4">
          <Reveal delay={80}>
            <article className="glass rounded-[28px] p-6">
              <h3 className="font-display text-xl">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <a href={c.href} target="_blank" rel="noreferrer" className="text-sm font-medium underline-offset-4 hover:underline">
                      {c.name}
                    </a>
                    <p className="text-xs text-[var(--muted)]">
                      {c.issuer} · {c.dates}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="glass rounded-[28px] p-6">
              <h3 className="font-display text-xl">Publication</h3>
              <p className="mt-3 text-sm">{publication.title}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">{publication.venue}</p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="glass rounded-[28px] p-6">
              <h3 className="font-display text-xl">Languages</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {languages.map((l) => (
                  <li key={l.name}>
                    {l.name}
                    <span className="block text-xs text-[var(--muted)]">{l.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
