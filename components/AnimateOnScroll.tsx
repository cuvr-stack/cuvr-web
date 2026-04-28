"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: string;
  delay?: string;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          element.classList.add(animation);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animation]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
