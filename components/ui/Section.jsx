import { cn } from "@/lib/utils";

const spacingClasses = {
  none: "py-0",
  xs: "py-4 sm:py-6",
  sm: "py-6 sm:py-8 md:py-10",
  md: "py-10 sm:py-12 md:py-16",
  lg: "py-12 sm:py-16 md:py-20 lg:py-24",
  xl: "py-16 sm:py-20 md:py-28 lg:py-32",
};

export function Section({
  as: Component = "section",
  spacing = "lg",
  bordered = false,
  className = "",
  children,
  ...props
}) {
  const appliedSpacing = spacingClasses[spacing] || spacingClasses.lg;
  const borderClass = bordered ? "border-b border-[#e5e5e5]" : "";

  return (
    <Component
      className={cn("w-full relative bg-white", appliedSpacing, borderClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
