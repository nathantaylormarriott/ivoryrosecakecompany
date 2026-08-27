import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function scrollToSection(id: string, immediate = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { immediate, offset: -80 });
  } else {
    el.scrollIntoView({ behavior: immediate ? "instant" : "smooth", block: "start" });
  }
  history.pushState(null, "", `#${id}`);
}

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
  return null;
}
