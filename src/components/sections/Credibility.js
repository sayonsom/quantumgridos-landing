"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function Credibility() {
  const timeline = [
    { year: "2023", event: "First quantum-grid interface", icon: "solar:star-bold-duotone" },
    { year: "2024", event: "R&D 100 Finalist", icon: "solar:medal-ribbons-star-bold-duotone" },
    { year: "2025", event: "Commercial launch", icon: "solar:rocket-bold-duotone" }
  ];

  const stats = [
    { number: "975+", label: "Citations", description: "Peer-reviewed foundation", icon: "solar:document-text-bold-duotone" },
    { number: "20 MW", label: "Scale", description: "Validated at utility voltage", icon: "solar:bolt-bold-duotone" },
    { number: "10,000", label: "Devices", description: "Tested with real hardware", icon: "solar:cpu-bolt-bold-duotone" }
  ];

  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Proven Research
          </h2>
        </AnimatedElement>

        {/* Timeline */}
        <AnimatedElement animation="scale-blur-in" delay={100}>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 bg-[#ea580b]/20 border-2 border-[#ea580b] rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <span className="text-[#ea580b] font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="text-[#ea580b] mb-2">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <p className="text-white font-semibold">{item.event}</p>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(100%+0.5rem)] w-8">
                      <Icon name="solar:arrow-right-bold-duotone" size={24} className="text-[#ea580b]/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100 + 200}
            >
              <GlassCard className="text-center">
                <div className="text-[#ea580b] mb-3">
                  <Icon name={stat.icon} size={32} />
                </div>
                <div className="text-4xl font-bold text-[#ea580b] mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-[#a3a3a3] text-sm">{stat.description}</div>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>

        {/* Facility Validation */}
        <AnimatedElement animation="scale-blur-in" delay={600}>
          <GlassCard hover={false} className="bg-gradient-to-r from-[#ea580b]/10 to-[#dc2626]/10">
            <div className="text-center py-2">
              <div className="text-[#ea580b] mb-3">
                <Icon name="solar:verified-check-bold-duotone" size={32} />
              </div>
              <p className="text-[#a3a3a3] leading-relaxed max-w-3xl mx-auto">
                Tested with 9 RTDS simulators at 34 kV and 20 MW capacity in operational environments.
              </p>
            </div>
          </GlassCard>
        </AnimatedElement>
      </div>
    </section>
  );
}
