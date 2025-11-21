"use client";

export default function SaralBadge() {
  return (
    <a
      href="https://saralsystems.co"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
    >
      {/* Gradient border wrapper */}
      <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-[shimmer_3s_ease-in-out_infinite]">
        {/* Inner content */}
        <div className="flex items-center gap-2.5 px-4 py-2 bg-black rounded-full backdrop-blur-sm">
          <svg
            className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[11px] font-semibold text-white/80 group-hover:text-white transition-colors tracking-wider">
            BUILT BY <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SARAL</span>
          </span>
        </div>
      </div>

      {/* Custom shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </a>
  );
}
