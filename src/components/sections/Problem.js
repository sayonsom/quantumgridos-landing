"use client";

import Card from "../ui/Card";
import FadeInSection from "../ui/FadeInSection";
import QuantumArrow from "../ui/QuantumArrowThree";
import ScrollColorText from "../ui/ScrollColorText";

export default function Problem() {
  const problems = [
    {
      title: "Exponential Scale",
      description: "Millions of DERs create optimization problems classical computers cannot solve efficiently.",
      stat: "10,000+",
      statLabel: "devices"
    },
    {
      title: "Real-Time Demands",
      description: "Sub-second decisions required across exponentially growing device combinations.",
      stat: "10⁶",
      statLabel: "combinations"
    },
    {
      title: "Legacy Systems",
      description: "New solutions must integrate with existing SCADA, historians, and simulators.",
      stat: "<100ms",
      statLabel: "windows"
    }
  ];

  return (
    <section className="py-24 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollColorText>
            <h2 className="text-3xl md:text-4xl font-thin max-w-4xl mx-auto leading-relaxed">
              Solve for future power systems challenges
            </h2>
          </ScrollColorText>
        </div>

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center">
          {/* Animated Component - First on mobile, Second on desktop */}
          <div className="lg:w-1/2 lg:order-2 mb-8 lg:mb-0">
            <FadeInSection delay={100}>
              {/* Mobile: smaller height */}
              <div className="block lg:hidden">
                <QuantumArrow height={200} />
              </div>
              {/* Desktop: larger height */}
              <div className="hidden lg:block">
                <QuantumArrow height={400} />
              </div>
            </FadeInSection>
          </div>

          {/* Problem Cards - Stacked vertically */}
          <div className="lg:w-1/2 lg:order-1 space-y-4">
            {problems.map((problem, index) => (
              <FadeInSection key={index} delay={index * 150} animation="float-up">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl md:text-3xl font-bold text-[#ea580b]">{problem.stat}</div>
                      <div className="text-xs text-[#737373] uppercase tracking-wider">{problem.statLabel}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
