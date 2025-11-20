import Card from "../ui/Card";

export default function Solution() {
  const capabilities = [
    {
      title: "Quantum Ready",
      items: ["QAOA & VQE algorithms", "IBM, Atom, IonQ, D-Wave support"]
    },
    {
      title: "Legacy Integration",
      items: ["RTDS, SCADA, PI Historian", "DNP3, Modbus, IEC protocols"]
    },
    {
      title: "Intelligent Fallback",
      items: ["Auto quantum/classical triage", "HPC when quantum hits limits"]
    }
  ];

  return (
    <section className="py-24 bg-[#111111]/50" id="solution">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Missing Integration Layer
          </h2>
          <p className="text-lg text-[#a3a3a3] max-w-3xl mx-auto">
            QuantumGrid OS bridges quantum processors and power system hardware. Built on R&D 100 Award-finalist research.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center space-x-4 text-center">
            <ArchBox label="Quantum" />
            <Arrow />
            <ArchBox label="QuantumGrid OS" primary />
            <Arrow />
            <ArchBox label="Your Systems" />
          </div>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <ul className="space-y-2">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-[#22c55e] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#a3a3a3]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchBox({ label, primary = false }) {
  return (
    <div className={`px-6 py-4 rounded-lg border-2 ${primary ? 'border-[#ea580b] bg-[#ea580b]/10' : 'border-[#262626] bg-[#111111]'}`}>
      <span className={`font-semibold ${primary ? 'text-[#ea580b]' : 'text-white'}`}>
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="w-8 h-8 text-[#ea580b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
