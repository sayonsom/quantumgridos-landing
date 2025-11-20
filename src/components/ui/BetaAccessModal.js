"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { conversions } from "../../lib/analytics";

export default function BetaAccessModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    challenge: "",
    backend: "",
    timeline: ""
  });

  // Track modal open
  useEffect(() => {
    if (isOpen) {
      conversions.betaAccessModalOpen();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Track form submission attempt
    conversions.betaAccessSubmit(formData);

    try {
      const response = await fetch('/api/beta-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSubmitted(true);

      // Track successful submission
      conversions.betaAccessSuccess();
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    setLoading(false);
    setError(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      title: "",
      challenge: "",
      backend: "",
      timeline: ""
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-8">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Request Beta Access</h2>
            <p className="text-[#a3a3a3] mb-6">
              Join the waitlist for QuantumGrid OS beta program.
            </p>

            {error && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Current Challenge *
                </label>
                <textarea
                  name="challenge"
                  required
                  rows={3}
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Quantum Backend
                </label>
                <select
                  name="backend"
                  value={formData.backend}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                >
                  <option value="">Select backend</option>
                  <option value="ibm">IBM Quantum</option>
                  <option value="atom">Atom Computing</option>
                  <option value="ionq">IonQ</option>
                  <option value="dwave">D-Wave</option>
                  <option value="simulator">Simulator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#ea580b] transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6+months">6+ months</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#22c55e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
            <p className="text-[#a3a3a3] mb-6">
              Installation instructions sent to {formData.email}. Binary download available in 24 hours.
            </p>
            <Button onClick={handleClose} variant="primary">
              Close
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
