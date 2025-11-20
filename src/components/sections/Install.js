"use client";

import { useState } from "react";
import Code from "../ui/Code";
import { conversions } from "../../lib/analytics";

export default function Install() {
  const [activeTab, setActiveTab] = useState("docker");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    conversions.installMethodSelect(tab);
  };

  const installations = {
    docker: "docker pull quantumgrid/os:latest",
    python: "pip install quantumgrid-os",
    source: "git clone https://github.com/quantumgrid/os"
  };

  const steps = [
    "Configure simulator",
    "Define problem",
    "Select backend",
    "Run",
    "Monitor"
  ];

  return (
    <section className="py-24 bg-[#111111]/50" id="install">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deploy in Minutes
          </h2>
        </div>

        {/* Tab Interface */}
        <div className="mb-6">
          <div className="flex space-x-2 border-b border-[#262626]">
            {Object.keys(installations).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "text-[#ea580b] border-b-2 border-[#ea580b]"
                    : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="mb-12">
          <Code language="bash">{installations[activeTab]}</Code>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center space-x-2 bg-[#111111] border border-[#262626] rounded-lg px-4 py-2">
                <span className="w-6 h-6 bg-[#ea580b] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-[#a3a3a3]">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <svg className="w-6 h-6 text-[#ea580b] mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
