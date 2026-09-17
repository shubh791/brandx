import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "text-xl tracking-tight",
  md: "text-2xl sm:text-[28px] tracking-tight",
  lg: "text-3xl tracking-tight",
  xl: "text-4xl tracking-tighter",
};

export function Logo({
  href = "/",
  size = "md",
  className = "",
  showLocation = true,
  isDark = false,
  ...props
}) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={cn("inline-flex flex-col select-none", className)} {...props}>
      <span
        className={cn(
          "font-bold lowercase leading-none tracking-tight",
          sizeClass,
          isDark ? "text-white" : "text-[#111111]"
        )}
      >
        brand<span className="text-[#e11d48] font-black">x</span>
      </span>
      {showLocation && (
        <span
          className={cn(
            "text-[7.5px] sm:text-[8.5px] uppercase font-medium tracking-[0.24em] mt-[2.5px] leading-none select-none",
            isDark ? "text-neutral-400" : "text-[#737373]"
          )}
        >
          SAMALKHA
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="BrandX Home — Samalkha" className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
