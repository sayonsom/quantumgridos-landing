"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function UseCases() {
  const cases = [
    {
      title: "EV Coordination",
      description: "Optimal charging station assignment during grid stress events.",
      icon: "solar:bolt-bold-duotone"
    },
    {
      title: "Feeder Switching",
      description: "Real-time reconfiguration for outage restoration and load balancing.",
      icon: "solar:round-transfer-horizontal-bold-duotone"
    },
    {
      title: "DER Dispatch",
      description: "Coordinate millions of distributed resources for voltage and economics.",
      icon: "solar:planet-bold-duotone"
    },
    {
      title: "Cyber Response",
      description: "Rapid pattern recognition and optimal recovery sequencing.",
      icon: "solar:shield-keyhole-bold-duotone"
    }
  ];

  return (
    <section className="py-24" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Validated for Utility Operations
          </h2>
        </AnimatedElement>

        {/* Use Case Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100}
            >
              <GlassCard className="h-full">
                <div className="text-[#ea580b] mb-4">
                  <Icon name={useCase.icon} size={48} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{useCase.description}</p>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
