import { cn } from "@/lib/utils";

const variantClasses = {
  sale: "bg-[#e11d48] text-white font-semibold",
  new: "bg-[#111111] text-white font-semibold",
  neutral: "bg-[#f5f5f5] text-[#222222]",
  outline: "border border-[#e5e5e5] text-[#222222] bg-white",
  accent: "bg-amber-100 text-amber-900 border border-amber-200",
};

const sizeClasses = {
  sm: "text-[10px] px-2 py-0.5 tracking-wider uppercase",
  md: "text-xs px-2.5 py-1 tracking-wider uppercase",
  lg: "text-sm px-3 py-1.5",
};

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  rounded = "rounded-full",
  className = "",
  ...props
}) {
  const appliedVariant = variantClasses[variant] || variantClasses.neutral;
  const appliedSize = sizeClasses[size] || sizeClasses.sm;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium leading-none select-none transition-colors",
        appliedVariant,
        appliedSize,
        rounded,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
