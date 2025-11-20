import Code from "../ui/Code";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Ingest",
      description: "Real-time data from your systems"
    },
    {
      number: "2",
      title: "Translate",
      description: "Power state to quantum variables"
    },
    {
      number: "3",
      title: "Optimize",
      description: "QAOA/VQE execution"
    },
    {
      number: "4",
      title: "Return",
      description: "Classical control signals"
    }
  ];

  const codeExample = `from quantumgrid import QuantumOptimizer

optimizer = QuantumOptimizer(
    rtds="your-server",
    backend="ibm_quantum"
)

solution = optimizer.optimize_dispatch(
    objective="minimize_cost"
)`;

  return (
    <section className="py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Classical to Quantum in Four Steps
          </h2>
        </div>

        {/* Steps Flow */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 text-center hover:border-[#ea580b] transition-colors">
                <div className="w-12 h-12 bg-[#ea580b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-[#a3a3a3] text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-[#ea580b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Code Example</h3>
          <Code language="python">{codeExample}</Code>
        </div>
      </div>
    </section>
  );
}
