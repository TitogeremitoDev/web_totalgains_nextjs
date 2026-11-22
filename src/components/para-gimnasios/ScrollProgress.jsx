"use client";

import { useEffect, useRef } from "react";

/* ───────────────────────────────────────────────────────────
   Scroll progress bar at top of page
   ─────────────────────────────────────────────────────────── */
export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    function onScroll() {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = h > 0 ? st / h : 0;
      el.style.transform = `scaleX(${ratio})`;
      ticking = false;
    }
    function handler() {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return <div ref={ref} className="pg-scroll-progress" aria-hidden="true" />;
}
