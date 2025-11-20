"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { conversions } from "../../lib/analytics";

export default function Header({ onBetaAccessClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    conversions.navigationClick(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-white font-bold text-xl">QuantumGrid OS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#solution"
              className="text-[#a3a3a3] hover:text-white transition-colors"
              onClick={() => handleNavClick('Solution')}
            >
              Solution
            </a>
            <a
              href="#use-cases"
              className="text-[#a3a3a3] hover:text-white transition-colors"
              onClick={() => handleNavClick('Use Cases')}
            >
              Use Cases
            </a>
            <a
              href="#install"
              className="text-[#a3a3a3] hover:text-white transition-colors"
              onClick={() => handleNavClick('Install')}
            >
              Install
            </a>
            <a
              href="https://github.com/quantumgrid/os"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-white transition-colors"
              onClick={() => conversions.githubClick('Header')}
            >
              GitHub
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              onClick={onBetaAccessClick}
              trackingEvent={{
                action: 'click',
                category: 'conversion',
                label: 'Request Beta Access - Header',
              }}
            >
              Request Beta Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#262626]">
            <nav className="flex flex-col space-y-4">
              <a
                href="#solution"
                className="text-[#a3a3a3] hover:text-white transition-colors"
                onClick={() => handleNavClick('Solution')}
              >
                Solution
              </a>
              <a
                href="#use-cases"
                className="text-[#a3a3a3] hover:text-white transition-colors"
                onClick={() => handleNavClick('Use Cases')}
              >
                Use Cases
              </a>
              <a
                href="#install"
                className="text-[#a3a3a3] hover:text-white transition-colors"
                onClick={() => handleNavClick('Install')}
              >
                Install
              </a>
              <a
                href="https://github.com/quantumgrid/os"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-white transition-colors"
                onClick={() => {
                  conversions.githubClick('Mobile Menu');
                  setIsOpen(false);
                }}
              >
                GitHub
              </a>
              <Button
                variant="primary"
                onClick={onBetaAccessClick}
                className="w-full"
                trackingEvent={{
                  action: 'click',
                  category: 'conversion',
                  label: 'Request Beta Access - Mobile Menu',
                }}
              >
                Request Beta Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
