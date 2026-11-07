"use client";

import { useEffect, useState } from "react";

const DOTS = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 29) % 100}%`,
  delay: `${(i % 12) * 0.35}s`,
  size: i % 5 === 0 ? 3 : 2,
}));

export function Background() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <div
        className="absolute -left-24 top-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] blur-2xl"
        style={{ transform: `translate3d(0, ${offset * 0.4}px, 0)` }}
      />
      <div
        className="absolute right-[-8%] top-[28%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-2)_55%,transparent),transparent_70%)] blur-2xl opacity-70"
        style={{ transform: `translate3d(0, ${-offset * 0.25}px, 0)` }}
      />
      <div className="absolute inset-0 animate-matrix-drift opacity-70">
        {DOTS.map((dot) => (
          <span
            key={dot.id}
            className="absolute rounded-full bg-[var(--accent)] animate-pulseGlow"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              animationDelay: dot.delay,
              boxShadow: "0 0 12px var(--accent)",
            }}
          />
        ))}
      </div>
      <div className="noise absolute inset-0 opacity-[0.07] mix-blend-overlay dark:opacity-[0.12]" />
    </div>
  );
}
