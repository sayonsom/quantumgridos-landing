export default function Credibility() {
  const timeline = [
    { year: "2023", event: "First quantum-grid interface" },
    { year: "2024", event: "R&D 100 Finalist" },
    { year: "2025", event: "Commercial launch" }
  ];

  const stats = [
    { number: "975+", label: "Citations", description: "Peer-reviewed foundation" },
    { number: "20 MW", label: "Scale", description: "Validated at utility voltage" },
    { number: "10,000", label: "Devices", description: "Tested with real hardware" }
  ];

  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Proven Research
          </h2>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#ea580b]/20 border-2 border-[#ea580b] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#ea580b] font-bold text-lg">{item.year}</span>
                </div>
                <p className="text-white font-semibold">{item.event}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute w-24 h-0.5 bg-[#ea580b]/30 mt-8" style={{ marginLeft: '100%' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-[#111111] border border-[#262626] rounded-xl">
              <div className="text-4xl font-bold text-[#ea580b] mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-[#a3a3a3] text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Facility Validation */}
        <div className="bg-gradient-to-r from-[#ea580b]/10 to-[#dc2626]/10 border border-[#ea580b]/30 rounded-xl p-8 text-center">
          <p className="text-[#a3a3a3] leading-relaxed max-w-3xl mx-auto">
            Tested with 9 RTDS simulators at 34 kV and 20 MW capacity in operational environments.
          </p>
        </div>
      </div>
    </section>
  );
}
