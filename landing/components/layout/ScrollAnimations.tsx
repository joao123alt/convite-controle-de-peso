"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-fadeInUp, .animate-fadeIn, .animate-float"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "none";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => {
      // Only apply initial hidden state to non-hero elements
      const isInHero = el.closest("#hero");
      if (!isInHero) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(24px)";
        (el as HTMLElement).style.transition =
          "opacity 0.65s ease, transform 0.65s ease";
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
