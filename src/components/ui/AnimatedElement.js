"use client";

import { useRef, useEffect, useState } from "react";

export default function AnimatedElement({
  children,
  animation = "blur-slide-in",
  delay = 0,
  className = "",
  as: Component = "div",
  threshold = 0.1,
  once = true
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once]);

  const animationClass = `animate-${animation}`;

  return (
    <Component
      ref={ref}
      className={`${animationClass} animate-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
