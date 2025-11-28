"use client";

import { useState } from "react";
import AnimatedElement from "../ui/AnimatedElement";
import Icon from "../ui/Icon";

export default function FAQ() {
  const faqs = [
    {
      question: "Need quantum hardware?",
      answer: "No. Use cloud providers or simulators for development and testing."
    },
    {
      question: "Learning curve?",
      answer: "Python familiarity required. Grid engineers adapt quickly with provided examples."
    },
    {
      question: "SCADA integration?",
      answer: "Standard protocols supported. Custom adapters available for partnerships."
    },
    {
      question: "Quantum advantage?",
      answer: "Scales with problem size. Benefits clear beyond 1,000+ decision variables."
    },
    {
      question: "Data security?",
      answer: "Local processing default. Cloud quantum calls use encrypted channels."
    },
    {
      question: "Hardware requirements?",
      answer: "Standard Linux server. 16GB RAM, 8 cores recommended."
    },
    {
      question: "Vendor support?",
      answer: "Protocol-based integration. Works with major SCADA/DMS/historian vendors."
    },
    {
      question: "Fallback behavior?",
      answer: "Automatic classical optimization when quantum approaches fail or timeout."
    },
    {
      question: "POC cost?",
      answer: "Open source free. Full partnership requires compute and engineering commitment."
    },
    {
      question: "Commercial support?",
      answer: "Available for production deployments. Contact for enterprise agreements."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedElement animation="fade-slide-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions from Engineers
          </h2>
        </AnimatedElement>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedElement
              key={index}
              animation="blur-slide-in"
              delay={index * 50}
            >
              <div
                className="relative group rounded-xl p-[1px] transition-all duration-300"
              >
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ea580b]/0 via-[#ea580b]/0 to-[#ea580b]/0 group-hover:from-[#ea580b]/20 group-hover:via-[#ea580b]/40 group-hover:to-[#ea580b]/20 transition-all duration-300" />

                {/* Static border */}
                <div className="absolute inset-0 rounded-xl bg-[#262626]/50" />

                {/* Content */}
                <div className="relative rounded-xl bg-[#111111]/80 backdrop-blur-xl border border-white/[0.05] overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-white font-semibold flex items-center gap-3">
                      <Icon
                        name="solar:question-circle-bold-duotone"
                        size={20}
                        className="text-[#ea580b]"
                      />
                      {faq.question}
                    </span>
                    <Icon
                      name={openIndex === index ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone"}
                      size={20}
                      className="text-[#ea580b] transition-transform"
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 pl-14">
                      <p className="text-[#a3a3a3] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
