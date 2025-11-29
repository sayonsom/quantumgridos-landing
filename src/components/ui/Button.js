import { event } from "../../lib/analytics";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  trackingEvent = null,
  ...props
}) {
  const baseStyles = "font-semibold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "relative group rounded-full p-[1px] overflow-hidden shadow-[0_0_20px_rgba(234,88,11,0.3)] hover:shadow-[0_0_30px_rgba(234,88,11,0.5)]",
    secondary: "px-6 py-3 rounded-lg bg-transparent border-2 border-[#ea580b] text-[#ea580b] hover:bg-[#ea580b] hover:text-white",
    ghost: "px-6 py-3 rounded-lg bg-transparent text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base"
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
      {variant === 'primary' ? (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#ffffff_50%,#0000_100%)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className={`relative flex items-center justify-center w-full h-full bg-gradient-to-b from-[#ea580b] to-[#c2410c] text-white rounded-full ${sizes[size]}`}>
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
