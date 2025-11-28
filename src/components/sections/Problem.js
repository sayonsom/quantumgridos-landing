"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import QuantumArrow from "../ui/QuantumArrowThree";
import ScrollColorText from "../ui/ScrollColorText";
import Icon from "../ui/Icon";

export default function Problem() {
  const problems = [
    {
      title: "Exponential Scale",
      description: "Millions of DERs create optimization problems classical computers cannot solve efficiently.",
      stat: "100 M+",
      statLabel: "devices",
      icon: "solar:chart-bold-duotone"
    },
    {
      title: "Real-Time Demands",
      description: "Sub-second decisions required across exponentially growing device combinations.",
      stat: "1,000+",
      statLabel: "grid states",
      icon: "solar:clock-circle-bold-duotone"
    },
    {
      title: "Legacy Systems",
      description: "New solutions must integrate with existing SCADA, historians, and simulators.",
      stat: "<90ms",
      statLabel: "windows",
      icon: "solar:server-square-cloud-bold-duotone"
    }
  ];

  return (
    <section className="py-24 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-12 md:mb-16">
          <ScrollColorText>
            <h2 className="text-3xl md:text-4xl font-thin max-w-4xl mx-auto leading-relaxed">
              Solve for future power systems challenges
            </h2>
          </ScrollColorText>
        </AnimatedElement>

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center">
          {/* Animated Component - First on mobile, Second on desktop */}
          <div className="lg:w-1/2 lg:order-2 mb-8 lg:mb-0">
            <AnimatedElement animation="scale-blur-in" delay={100}>
              {/* Mobile: smaller height */}
              <div className="block lg:hidden">
                <QuantumArrow height={200} />
              </div>
              {/* Desktop: larger height */}
              <div className="hidden lg:block">
                <QuantumArrow height={400} />
              </div>
            </AnimatedElement>
          </div>

          {/* Problem Cards - Stacked vertically */}
          <div className="lg:w-1/2 lg:order-1 space-y-4">
            {problems.map((problem, index) => (
              <AnimatedElement
                key={index}
                animation="blur-slide-in"
                delay={index * 100}
              >
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl md:text-3xl font-bold text-[#ea580b]">{problem.stat}</div>
                      <div className="text-xs text-[#737373] uppercase tracking-wider">{problem.statLabel}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={problem.icon} size={20} className="text-[#ea580b]" />
                        <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                      </div>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
