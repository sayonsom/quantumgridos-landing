import Card from "../ui/Card";

export default function Team() {
  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quantum × Grid Expertise
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">CS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chief Scientist</h3>
              <p className="text-[#a3a3a3] leading-relaxed">
                R&D 100 Award Finalist, 11+ years power systems, 975+ citations
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ea580b] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">TA</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technical Advisors</h3>
              <p className="text-[#a3a3a3] leading-relaxed">
                Leading utility operators and quantum computing researchers
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
