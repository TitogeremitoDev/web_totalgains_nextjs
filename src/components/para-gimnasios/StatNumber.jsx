"use client";

import { useState, useEffect, useRef } from "react";

/* ───────────────────────────────────────────────────────────
   Stat counter with IntersectionObserver
   ─────────────────────────────────────────────────────────── */
export default function StatNumber({ value, style }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Los early-return no tocan el estado: `display` ya arranca en `value`.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const m = value.match(/^(\d+)(.*)$/);
    if (!m || value.indexOf("-") !== -1) return;
    const target = parseInt(m[1], 10);
    const suffix = m[2] || "";
    if (target === 0) return;

    let observed = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !observed) {
            observed = true;
            io.unobserve(el);
            const dur = 1100;
            const t0 = performance.now();
            function tick(now) {
              const p = Math.min((now - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased) + suffix);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={style}>
      {display}
    </span>
  );
}
