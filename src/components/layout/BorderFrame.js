"use client";

export default function BorderFrame() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #ea580b 0%, #ea580b 35%, #ea580b 42%, #a855f7 50%, #ea580b 58%, #ea580b 65%, #ea580b 100%)',
          backgroundSize: '200% 200%',
          animation: 'border-shine 16s ease-in-out infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '20px'
        }}
      />
    </div>
  );
}
