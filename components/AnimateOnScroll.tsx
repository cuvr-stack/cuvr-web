"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: string;
  delay?: string;
  className?: string;
  /**
   * If true, the element will animate again every time it scrolls into view.
   * Defaults to false (animate once and stay visible).
   */
  repeat?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay,
  className = "",
  repeat = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If the user prefers reduced motion, just reveal the content.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      element.classList.remove("pre-animate");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("pre-animate");
          element.classList.add(animation);
          if (!repeat) observer.unobserve(element);
        } else if (repeat) {
          element.classList.add("pre-animate");
          element.classList.remove(animation);
        }
      },
      {
        // a small threshold + a slightly negative bottom rootMargin
        // gives a nice "as it enters the viewport" feel without being jumpy
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, repeat]);

  return (
    <div
      ref={ref}
      className={`pre-animate ${className}`.trim()}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
