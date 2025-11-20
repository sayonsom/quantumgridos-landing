"use client";

import { useState } from "react";

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions from Engineers
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden transition-all hover:border-[#ea580b]/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#ea580b] transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-[#a3a3a3] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
