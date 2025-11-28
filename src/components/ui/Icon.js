"use client";

export default function Icon({ name, className = "", size = 24 }) {
  return (
    <iconify-icon
      icon={name}
      width={size}
      height={size}
      class={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
}
