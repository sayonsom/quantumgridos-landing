"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { event } from "../../lib/analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ea580b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect Power Grids to <TypingAnimation text="Quantum Computing" />
              </h1>
              <p className="text-lg text-[#a3a3a3] leading-relaxed">
                Open-source bridge connecting quantum algorithms to real-time energy infrastructure.
              </p>
            </div>

            {/* Installation Command */}
            <div className="flex flex-col items-center gap-4">
              <InstallCommand command="pip install quantumgridos" />
              <Button
                variant="secondary"
                onClick={() => window.open("https://saralsystems.github.io/quantumgridos/", "_blank")}
                trackingEvent={{
                  action: 'click',
                  category: 'engagement',
                  label: 'View Documentation - Hero',
                }}
              >
                View Documentation
              </Button>
            </div>

            {/* Supported Platforms */}
            <div className="space-y-3">
              <p className="text-sm text-[#a3a3a3]">Supports:</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <PlatformLogo src="/imbq-logo.webp" alt="IBM Quantum" />
                <PlatformLogo src="/rigetti-logo.webp" alt="Rigetti" />
                <PlatformLogo src="/aws-braket-logo.webp" alt="AWS Braket" />
                <PlatformLogo src="/ionq-logo.webp" alt="IonQ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypingAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

function InstallCommand({ command }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    event({
      action: 'copy',
      category: 'engagement',
      label: 'Copy Install Command',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center justify-between bg-[#0a0a0a] border-2 border-[#ea580b]/30 rounded-xl px-4 md:px-6 py-3 md:py-4 hover:border-[#ea580b]/50 transition-colors">
        <code className="text-base md:text-xl lg:text-2xl font-mono text-white break-all">
          {command}
        </code>
        <button
          onClick={handleCopy}
          className="ml-2 md:ml-4 p-2 hover:bg-[#ea580b]/10 rounded-lg transition-colors flex-shrink-0"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#a3a3a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

function PlatformLogo({ src, alt }) {
  return (
    <div className="flex items-center justify-center px-4 py-2 bg-[#111111]/30 rounded-lg backdrop-blur-sm hover:opacity-80 transition-opacity">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={40}
        className="object-contain"
      />
    </div>
  );
}
