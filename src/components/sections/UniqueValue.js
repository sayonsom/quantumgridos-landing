"use client";

import Card from "../ui/Card";
import FadeInSection from "../ui/FadeInSection";

export default function UniqueValue() {
  const innovations = [
    {
      title: "Physics-Preserving Quantum States",
      description: "No other quantum library has this: maintain physical laws (Kirchhoff, power flow) within quantum superposition states.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Topology-Aware Eigenvalue Algorithm",
      description: "Exploits unique grid connectivity patterns to accelerate quantum eigensolvers beyond generic quantum computing libraries.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Superposition Contingency Analysis",
      description: "Exponential speedup for cascading failure scenarios by evaluating all N-k contingencies in quantum superposition simultaneously.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Uncertainty-Modeling via Decoherence",
      description: "Turns hardware limitations into features: quantum decoherence naturally models grid uncertainty and forecast error.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 relative" id="unique-value">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes QuantumGrid OS Truly Unique
            </h2>
            <p className="text-lg text-[#a3a3a3] max-w-3xl mx-auto">
              Four breakthrough innovations that no other quantum computing library offers
            </p>
          </div>
        </FadeInSection>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Card className="h-full">
                <div className="text-[#ea580b] mb-4">{innovation.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {innovation.title}
                </h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  {innovation.description}
                </p>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={500}>
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#111111] border border-[#262626] rounded-xl px-8 py-6">
              <p className="text-[#a3a3a3] text-lg mb-2">
                <span className="text-white font-semibold">Not just another quantum library.</span>
              </p>
              <p className="text-[#a3a3a3]">
                Purpose-built for power grids with innovations that turn theoretical quantum advantage into practical reality.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
