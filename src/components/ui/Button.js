import { event } from "../../lib/analytics";

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  trackingEvent = null,
  ...props
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5";

  const variants = {
    primary: "bg-[#ea580b] text-white hover:bg-[#dc2626] shadow-lg shadow-[#ea580b]/20",
    secondary: "bg-transparent border-2 border-[#ea580b] text-[#ea580b] hover:bg-[#ea580b] hover:text-white",
    ghost: "bg-transparent text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a]"
  };

  const handleClick = (e) => {
    // Track the event if tracking info is provided
    if (trackingEvent) {
      event(trackingEvent);
    }

    // Call the original onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
