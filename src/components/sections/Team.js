"use client";

import GlassCard from "../ui/GlassCard";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function Team() {
  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quantum × Grid Expertise
          </h2>
        </AnimatedElement>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedElement animation="blur-slide-in" delay={0}>
            <GlassCard className="h-full">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#ea580b]/20">
                  <Icon name="solar:user-bold-duotone" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chief Scientist</h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  R&D 100 Award Finalist, 11+ years power systems, 975+ citations
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Icon name="solar:medal-star-bold-duotone" size={20} className="text-[#ea580b]" />
                  <Icon name="solar:document-text-bold-duotone" size={20} className="text-[#ea580b]" />
                  <Icon name="solar:cpu-bolt-bold-duotone" size={20} className="text-[#ea580b]" />
                </div>
              </div>
            </GlassCard>
          </AnimatedElement>

          <AnimatedElement animation="blur-slide-in" delay={100}>
            <GlassCard className="h-full">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#ea580b]/20">
                  <Icon name="solar:users-group-rounded-bold-duotone" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Technical Advisors</h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Leading utility operators and quantum computing researchers
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Icon name="solar:atom-bold-duotone" size={20} className="text-[#ea580b]" />
                  <Icon name="solar:transmission-bold-duotone" size={20} className="text-[#ea580b]" />
                  <Icon name="solar:lightbulb-bolt-bold-duotone" size={20} className="text-[#ea580b]" />
                </div>
              </div>
            </GlassCard>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
