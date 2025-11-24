"use client";

import { useState } from "react";
import { event } from "../../lib/analytics";

const CURRENT_YEAR = new Date().getFullYear();

const citations = {
  ieee: `S. Chanda, "QuantumGridOS: A Python Library for Quantum Computing in Power Systems," Saral Systems, ${CURRENT_YEAR}. [Online]. Available: https://quantumgridos.com. [Accessed: ${new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '')}].`,
  apa: `Chanda, S. (${CURRENT_YEAR}). QuantumGridOS: A Python library for quantum computing in power systems [Computer software]. Saral Systems. https://quantumgridos.com`,
  bibtex: `@software{chanda${CURRENT_YEAR}quantumgridos,
  author = {Chanda, Sayonsom},
  title = {QuantumGridOS: A Python Library for Quantum Computing in Power Systems},
  year = {${CURRENT_YEAR}},
  publisher = {Saral Systems},
  url = {https://quantumgridos.com},
  note = {Open-source Python library, Apache 2.0 License}
}`,
};

export default function Citation() {
  const [activeFormat, setActiveFormat] = useState("ieee");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeFormat]);
    setCopied(true);
    event({
      action: "copy",
      category: "engagement",
      label: `Copy Citation - ${activeFormat.toUpperCase()}`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const formats = [
    { key: "ieee", label: "IEEE" },
    { key: "apa", label: "APA" },
    { key: "bibtex", label: "BibTeX" },
  ];

  return (
    <section id="citation" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cite QuantumGridOS
          </h2>
          <p className="text-[#a3a3a3] text-lg">
            If you use QuantumGridOS in your research, please cite it using one of the formats below.
          </p>
        </div>

        {/* Format Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {formats.map((format) => (
            <button
              key={format.key}
              onClick={() => setActiveFormat(format.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeFormat === format.key
                  ? "bg-[#ea580b] text-white"
                  : "bg-[#1a1a1a] text-[#a3a3a3] hover:bg-[#262626] hover:text-white"
                }`}
            >
              {format.label}
            </button>
          ))}
        </div>

        {/* Citation Box */}
        <div className="relative bg-[#0a0a0a] border border-[#262626] rounded-xl p-6 hover:border-[#ea580b]/30 transition-colors">
          <pre className="text-sm md:text-base text-[#e5e5e5] whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
            {citations[activeFormat]}
          </pre>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] rounded-lg transition-all"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 text-[#22c55e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-[#22c55e]">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-[#a3a3a3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-[#a3a3a3]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-[#737373] mt-6">
          QuantumGridOS is open-source software licensed under{" "}
          <a
            href="https://opensource.org/licenses/Apache-2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ea580b] hover:underline"
          >
            Apache 2.0
          </a>
        </p>
      </div>
    </section>
  );
}
