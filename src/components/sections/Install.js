"use client";

import { useState } from "react";
import Code from "../ui/Code";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";
import { conversions } from "../../lib/analytics";

export default function Install() {
  const [activeTab, setActiveTab] = useState("docker");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    conversions.installMethodSelect(tab);
  };

  const installations = {
    docker: { code: "docker pull quantumgrid/os:latest", icon: "solar:box-bold-duotone" },
    python: { code: "pip install quantumgridos", icon: "solar:code-square-bold-duotone" },
    source: { code: "git clone https://github.com/saralsystems/quantumgridos", icon: "solar:code-file-bold-duotone" }
  };

  const steps = [
    { label: "Configure simulator", icon: "solar:settings-bold-duotone" },
    { label: "Define problem", icon: "solar:document-add-bold-duotone" },
    { label: "Select backend", icon: "solar:server-bold-duotone" },
    { label: "Run", icon: "solar:play-bold-duotone" },
    { label: "Monitor", icon: "solar:chart-bold-duotone" }
  ];

  return (
    <section className="py-24 bg-[#111111]/50" id="install">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deploy in Minutes
          </h2>
        </AnimatedElement>

        {/* Tab Interface */}
        <AnimatedElement animation="scale-blur-in" delay={100}>
          <div className="mb-6">
            <div className="flex space-x-2 border-b border-[#262626]">
              {Object.keys(installations).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-3 font-semibold capitalize transition-all flex items-center gap-2 ${
                    activeTab === tab
                      ? "text-[#ea580b] border-b-2 border-[#ea580b]"
                      : "text-[#a3a3a3] hover:text-white"
                  }`}
                >
                  <Icon name={installations[tab].icon} size={20} />
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Code Display */}
        <AnimatedElement animation="blur-slide-in" delay={200}>
          <div className="mb-12">
            <Code language="bash">{installations[activeTab].code}</Code>
          </div>
        </AnimatedElement>

        {/* Steps */}
        <AnimatedElement animation="scale-blur-in" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center space-x-2 bg-[#111111]/80 backdrop-blur-sm border border-[#262626]/50 rounded-lg px-4 py-2 hover:border-[#ea580b]/30 transition-colors group">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-[#ea580b]/20">
                    {index + 1}
                  </span>
                  <Icon name={step.icon} size={18} className="text-[#ea580b] group-hover:scale-110 transition-transform" />
                  <span className="text-[#a3a3a3]">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <Icon name="solar:alt-arrow-right-bold-duotone" size={20} className="text-[#ea580b] mx-2" />
                )}
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
