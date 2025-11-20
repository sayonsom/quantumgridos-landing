"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up"
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
