"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollColorText({ children, className = "" }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position in viewport
      // When element enters from bottom: progress starts at 0
      // When element is in center: progress is 1
      // When element exits from top: progress goes back to 0

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Distance from viewport center (normalized)
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;

      // Progress: 1 when at center, 0 when at edges
      const rawProgress = 1 - (distanceFromCenter / maxDistance);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Interpolate color from grey (#a3a3a3) to white (#ffffff)
  const greyValue = 163; // #a3a3a3 = rgb(163, 163, 163)
  const whiteValue = 255;
  const currentValue = Math.round(greyValue + (whiteValue - greyValue) * progress);
  const color = `rgb(${currentValue}, ${currentValue}, ${currentValue})`;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        color,
        transition: "color 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
