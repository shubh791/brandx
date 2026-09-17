import Link from "next/link";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-[#000000] text-white hover:bg-[#222222] active:bg-[#000000] shadow-xs",
  secondary:
    "bg-[#f5f5f5] text-[#111111] hover:bg-[#ebebeb] active:bg-[#e0e0e0]",
  outline:
    "border border-[#e5e5e5] bg-white text-[#111111] hover:border-[#111111] hover:bg-[#fafafa] active:bg-[#f5f5f5]",
  ghost:
    "bg-transparent text-[#111111] hover:bg-[#f5f5f5] active:bg-[#ebebeb]",
  link:
    "bg-transparent text-[#111111] underline-offset-4 hover:underline p-0 h-auto",
  accent:
    "bg-[#e11d48] text-white hover:bg-[#be123c] active:bg-[#9f1239] shadow-xs",
};

const sizeClasses = {
  sm: "h-8 px-3 text-xs tracking-wider",
  md: "h-10 px-4 text-sm tracking-normal",
  lg: "h-12 px-6 text-base tracking-normal",
  xl: "h-14 px-8 text-base tracking-wide uppercase font-semibold",
  icon: "h-10 w-10 p-0",
  "icon-sm": "h-8 w-8 p-0",
  "icon-lg": "h-12 w-12 p-0",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

  const appliedVariant = variantClasses[variant] || variantClasses.primary;
  const appliedSize = sizeClasses[size] || sizeClasses.md;
  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = cn(
    baseClasses,
    appliedVariant,
    appliedSize,
    widthClass,
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && (
        <span className="shrink-0 leading-none">{leftIcon}</span>
      )}
      {children && <span>{children}</span>}
      {!isLoading && rightIcon && (
        <span className="shrink-0 leading-none">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
