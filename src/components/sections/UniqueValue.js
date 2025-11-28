"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function UniqueValue() {
  const innovations = [
    {
      title: "Physics-Preserving Quantum States",
      description: "No other quantum library has this: maintain physical laws (Kirchhoff, power flow) within quantum superposition states.",
      icon: "solar:cpu-bolt-bold-duotone"
    },
    {
      title: "Topology-Aware Eigenvalue Algorithm",
      description: "Exploits unique grid connectivity patterns to accelerate quantum eigensolvers beyond generic quantum computing libraries.",
      icon: "solar:routing-bold-duotone"
    },
    {
      title: "Superposition Contingency Analysis",
      description: "Exponential speedup for cascading failure scenarios by evaluating all N-k contingencies in quantum superposition simultaneously.",
      icon: "solar:bolt-circle-bold-duotone"
    },
    {
      title: "Uncertainty-Modeling via Decoherence",
      description: "Turns hardware limitations into features: quantum decoherence naturally models grid uncertainty and forecast error.",
      icon: "solar:graph-up-bold-duotone"
    }
  ];

  return (
    <section className="py-24 relative" id="unique-value">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes QuantumGrid OS Truly Unique
            </h2>
            <p className="text-lg text-[#a3a3a3] max-w-3xl mx-auto">
              Four breakthrough innovations that no other quantum computing library offers
            </p>
          </div>
        </AnimatedElement>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100}
            >
              <GlassCard className="h-full">
                <div className="text-[#ea580b] mb-4">
                  <Icon name={innovation.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {innovation.title}
                </h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  {innovation.description}
                </p>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedElement animation="scale-blur-in" delay={500}>
          <div className="mt-12 text-center">
            <GlassCard hover={false} className="inline-block">
              <div className="px-2 py-2">
                <p className="text-[#a3a3a3] text-lg mb-2">
                  <span className="text-white font-semibold">Not just another quantum library.</span>
                </p>
                <p className="text-[#a3a3a3]">
                  Purpose-built for power grids with innovations that turn theoretical quantum advantage into practical reality.
                </p>
              </div>
            </GlassCard>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
