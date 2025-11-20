export default function Card({ children, className = "", hover = true }) {
  const hoverStyles = hover
    ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580b]/10"
    : "";

  return (
    <div
      className={`bg-[#111111] border border-[#262626] rounded-xl p-6 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
