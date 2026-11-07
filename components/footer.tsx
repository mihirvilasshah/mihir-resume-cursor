import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-12">
      <div className="glass flex flex-col gap-4 rounded-[28px] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          © 2026 {profile.name}. Principal Engineer at {profile.company}.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={profile.github}>GitHub</a>
          <a href={profile.instagram}>Instagram</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
