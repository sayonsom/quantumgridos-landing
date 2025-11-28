"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function Solution() {
  const capabilities = [
    {
      title: "Quantum Ready",
      items: ["QAOA & VQE algorithms", "IBM, Atom, IonQ, D-Wave support"],
      icon: "solar:atom-bold-duotone"
    },
    {
      title: "Legacy Integration",
      items: ["RTDS, SCADA, PI Historian", "DNP3, Modbus, IEC protocols"],
      icon: "solar:programming-bold-duotone"
    },
    {
      title: "Intelligent Fallback",
      items: ["Auto quantum/classical triage", "HPC when quantum hits limits"],
      icon: "solar:refresh-circle-bold-duotone"
    }
  ];

  return (
    <section className="py-24 bg-[#111111]/50" id="solution">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Missing Integration Layer
            </h2>
            <p className="text-lg text-[#a3a3a3] max-w-3xl mx-auto">
              QuantumGrid OS bridges quantum processors and power system hardware.
            </p>
          </div>
        </AnimatedElement>

        {/* Architecture Diagram */}
        <AnimatedElement animation="scale-blur-in" delay={200}>
          <div className="mb-12 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center">
              <ArchBox label="Quantum" icon="solar:atom-bold-duotone" />
              <div className="transform rotate-90 lg:rotate-0">
                <Arrow />
              </div>
              <ArchBox label="QuantumGrid OS" primary icon="solar:cpu-bolt-bold-duotone" />
              <div className="transform rotate-90 lg:rotate-0">
                <Arrow />
              </div>
              <ArchBox label="Your Systems" icon="solar:server-bold-duotone" />
            </div>
          </div>
        </AnimatedElement>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100 + 300}
            >
              <GlassCard className="h-full">
                <div className="text-[#ea580b] mb-4">
                  <Icon name={capability.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Icon name="solar:check-circle-bold-duotone" size={20} className="text-[#22c55e] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#a3a3a3]">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchBox({ label, primary = false, icon }) {
  return (
    <div className={`px-6 py-4 rounded-lg border-2 flex items-center gap-3 ${primary ? 'border-[#ea580b] bg-[#ea580b]/10' : 'border-[#262626] bg-[#111111]/80 backdrop-blur-sm'}`}>
      <Icon name={icon} size={24} className={primary ? 'text-[#ea580b]' : 'text-[#a3a3a3]'} />
      <span className={`font-semibold ${primary ? 'text-[#ea580b]' : 'text-white'}`}>
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <Icon name="solar:arrow-right-bold-duotone" size={32} className="text-[#ea580b]" />
  );
}
