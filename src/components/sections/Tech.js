import Card from "../ui/Card";

export default function Tech() {
  const techStack = [
    {
      category: "Quantum",
      items: ["Qiskit, Cirq, PennyLane, provider-agnostic"]
    },
    {
      category: "Grid Systems",
      items: ["RTDS, GridLAB-D, Pandapower, OpenDSS"]
    },
    {
      category: "Infrastructure",
      items: ["Docker, Kubernetes, PI adapters"]
    }
  ];

  return (
    <section className="py-24 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open, Neutral, Production-Ready
          </h2>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{tech.items[0]}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
