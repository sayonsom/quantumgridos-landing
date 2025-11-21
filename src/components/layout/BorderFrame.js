"use client";

export default function BorderFrame() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute border-[20px] border-[#ea580b]"
        style={{
          animation: "pulse-border 3s ease-in-out infinite",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}
