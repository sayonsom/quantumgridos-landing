"use client";

import Button from "../ui/Button";

export default function Hero({ onBetaAccessClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ea580b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect Power Grids to Quantum Computing
              </h1>
              <p className="text-lg text-[#a3a3a3] leading-relaxed">
                Open-source bridge connecting quantum algorithms to RTDS, SCADA, and real-time energy infrastructure.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={onBetaAccessClick}
                trackingEvent={{
                  action: 'click',
                  category: 'conversion',
                  label: 'Request Beta Access - Hero',
                }}
              >
                Request Beta Access
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.location.href = "#docs"}
                trackingEvent={{
                  action: 'click',
                  category: 'engagement',
                  label: 'View Documentation - Hero',
                }}
              >
                View Documentation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <TrustBadge
                icon={<TrophyIcon />}
                text="R&D 100 Finalist"
              />
              <TrustBadge
                icon={<BoltIcon />}
                text="Open Source"
              />
              <TrustBadge
                icon={<PlugIcon />}
                text="RTDS Compatible"
              />
              <TrustBadge
                icon={<GlobeIcon />}
                text="Vendor Neutral"
              />
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-[500px]">
            <QuantumGridVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-[#111111]/50 rounded-lg border border-[#262626] backdrop-blur-sm">
      <div className="text-[#ea580b] mb-2">{icon}</div>
      <span className="text-xs text-[#a3a3a3]">{text}</span>
    </div>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4m8-4v4M5 9h14m-7 4v8m-4 0h8" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function QuantumGridVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Quantum Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ea580b] rounded-full animate-pulse"
            style={{
              top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
              left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Layer */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#262626"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" />

          {/* Connection Lines */}
          <g className="animate-pulse">
            <line x1="200" y1="100" x2="200" y2="300" stroke="#ea580b" strokeWidth="2" opacity="0.3" />
            <line x1="100" y1="200" x2="300" y2="200" stroke="#ea580b" strokeWidth="2" opacity="0.3" />
          </g>

          {/* Center Node */}
          <circle cx="200" cy="200" r="20" fill="#ea580b" opacity="0.2" className="animate-pulse" />
          <circle cx="200" cy="200" r="10" fill="#ea580b" />
          <text x="200" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Q</text>
        </svg>
      </div>

      {/* Floating Text */}
      <div className="absolute top-4 left-4 text-xs text-[#22c55e] font-mono opacity-50">
        QUANTUM
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-[#ea580b] font-mono opacity-50">
        GRID
      </div>
    </div>
  );
}
