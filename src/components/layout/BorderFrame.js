"use client";

export default function BorderFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute inset-0 border-2 border-[#ea580b]"
        style={{
          animation: "pulse-border 3s ease-in-out infinite",
          boxSizing: "border-box"
        }}
      />
    </div>
  );
}
