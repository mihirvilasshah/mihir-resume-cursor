"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { useTheme } from "./theme-provider";

const links = [
  { href: "#work", label: "Work" },
  { href: "#timeline", label: "Timeline" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 shadow-card">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] font-display text-xs font-bold text-[var(--bg)]">
            MS
          </span>
          <span className="hidden text-sm font-medium sm:block">
            {profile.shortName}
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition hover:bg-[color-mix(in_srgb,var(--ink)_6%,transparent)] hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-[color-mix(in_srgb,var(--ink)_6%,transparent)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-3 py-3 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
