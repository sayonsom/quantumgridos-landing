"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function Tech() {
  const techStack = [
    {
      category: "Quantum",
      items: ["Qiskit, Cirq, PennyLane, provider-agnostic"],
      icon: "solar:atom-bold-duotone"
    },
    {
      category: "Grid Systems",
      items: ["RTDS, GridLAB-D, Pandapower, OpenDSS"],
      icon: "solar:transmission-bold-duotone"
    },
    {
      category: "Infrastructure",
      items: ["Docker, Kubernetes, PI adapters"],
      icon: "solar:server-square-bold-duotone"
    }
  ];

  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open, Neutral, Production-Ready
          </h2>
        </AnimatedElement>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100}
            >
              <GlassCard className="h-full">
                <div className="text-[#ea580b] mb-4">
                  <Icon name={tech.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{tech.items[0]}</p>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
