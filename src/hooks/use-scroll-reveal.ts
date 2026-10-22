import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".section-enter, .stagger-item");
    if (!items?.length) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealAll = () => items.forEach((item) => item.classList.add("visible"));
    if (motion.matches || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    const handleMotionChange = () => {
      if (motion.matches) {
        revealAll();
        observer.disconnect();
      }
    };
    items.forEach((item) => observer.observe(item));
    motion.addEventListener("change", handleMotionChange);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return ref;
}