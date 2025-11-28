"use client";

import Code from "../ui/Code";
import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Ingest",
      description: "Real-time data from your systems",
      icon: "solar:download-minimalistic-bold-duotone"
    },
    {
      number: "2",
      title: "Translate",
      description: "Power state to quantum variables",
      icon: "solar:translation-bold-duotone"
    },
    {
      number: "3",
      title: "Optimize",
      description: "QAOA/VQE execution",
      icon: "solar:tuning-square-bold-duotone"
    },
    {
      number: "4",
      title: "Return",
      description: "Classical control signals",
      icon: "solar:upload-minimalistic-bold-duotone"
    }
  ];

  const codeExample = `import quantumgridos as qgo

# Quick test
network = qgo.PowerNetwork.from_ieee_case(14)
optimizer = qgo.MaxCutOptimizer(network)
result = optimizer.solve()
print(f"Partition: {result['partition']}")`;

  return (
    <section className="py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Classical to Quantum in Four Steps
          </h2>
        </AnimatedElement>

        {/* Steps Flow */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 100}
            >
              <div className="relative h-full">
                <GlassCard className="h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#ea580b]/20">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="text-[#ea580b] mb-3">
                    <Icon name={step.icon} size={28} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-[#a3a3a3] text-sm">{step.description}</p>
                </GlassCard>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="solar:alt-arrow-right-bold-duotone" size={24} className="text-[#ea580b]" />
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Code Example */}
        <AnimatedElement animation="scale-blur-in" delay={500}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Code Example</h3>
            <Code language="python">{codeExample}</Code>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
