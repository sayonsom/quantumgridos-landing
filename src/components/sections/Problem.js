import Card from "../ui/Card";

export default function Problem() {
  const problems = [
    {
      title: "Exponential Scale",
      description: "Millions of DERs create optimization problems classical computers cannot solve efficiently.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Real-Time Demands",
      description: "Sub-second decisions required across exponentially growing device combinations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Legacy Systems",
      description: "New solutions must integrate with existing SCADA, historians, and simulators.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Classical Computing Hits Its Limits
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index}>
              <div className="text-[#ea580b] mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#111111] border border-[#262626] rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatItem number="10,000+" label="devices" />
            <StatItem number="10⁶" label="combinations" />
            <StatItem number="<100ms" label="windows" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-[#ea580b] mb-2">{number}</div>
      <div className="text-[#a3a3a3] uppercase text-sm tracking-wider">{label}</div>
    </div>
  );
}
