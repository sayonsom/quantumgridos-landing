import Card from "../ui/Card";
import Button from "../ui/Button";

export default function POC({ onBetaAccessClick }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Quantum Journey
          </h2>
        </div>

        {/* POC Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-4">Research Access</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#22c55e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#a3a3a3]">Open-source codebase</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#22c55e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#a3a3a3]">Technical docs & community support</span>
              </li>
            </ul>
            <Button
              variant="secondary"
              onClick={() => window.open("https://github.com/quantumgrid/os", "_blank")}
              className="w-full"
              trackingEvent={{
                action: 'click',
                category: 'engagement',
                label: 'Clone Repository - POC',
              }}
            >
              Clone Repository
            </Button>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-white mb-4">Full Partnership</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#22c55e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#a3a3a3]">Binary installation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#22c55e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#a3a3a3]">Integration assistance & dedicated compute</span>
              </li>
            </ul>
            <Button
              variant="primary"
              onClick={onBetaAccessClick}
              className="w-full"
              trackingEvent={{
                action: 'click',
                category: 'conversion',
                label: 'Apply for Partnership - POC',
              }}
            >
              Apply for Partnership
            </Button>
          </Card>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-r from-[#ea580b]/10 to-[#dc2626]/10 border border-[#ea580b]/30 rounded-xl p-6 text-center">
          <p className="text-[#a3a3a3] leading-relaxed">
            Access to real-time simulator, defined problem, engineering commitment (2-3 people, 3-6 months).
          </p>
        </div>
      </div>
    </section>
  );
}
