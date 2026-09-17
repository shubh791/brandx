import { cn } from "@/lib/utils";

export function Skeleton({ className = "", rounded = "rounded-md", ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-[#f0f0f0]",
        rounded,
        className
      )}
      {...props}
    />
  );
}
