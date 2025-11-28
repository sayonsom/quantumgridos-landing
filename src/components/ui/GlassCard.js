"use client";

import { useRef, useState } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  animationDelay = 0,
  animationClass = ""
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !hover) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (hover) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const spotlightStyle = isHovering ? {
    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 11, 0.12), transparent 40%)`,
  } : {};

  const borderGlowStyle = isHovering ? {
    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 11, 0.6), transparent 40%)`,
  } : {};

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative group rounded-xl p-[1px]
        transition-transform duration-300 ease-out
        ${hover ? "hover:-translate-y-1" : ""}
        ${animationClass}
        ${className}
      `}
      style={{
        animationDelay: animationDelay ? `${animationDelay}ms` : undefined,
      }}
    >
      {/* Border glow layer */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={borderGlowStyle}
      />

      {/* Static border */}
      <div className="absolute inset-0 rounded-xl bg-[#262626]/50" />

      {/* Glass card content */}
      <div className="relative rounded-xl bg-[#111111]/80 backdrop-blur-xl border border-white/[0.05] p-6 h-full overflow-hidden">
        {/* Spotlight effect on background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={spotlightStyle}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
