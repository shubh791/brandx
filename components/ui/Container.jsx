import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-7xl",
  full: "max-w-[1400px]",
  fluid: "max-w-none",
};

export function Container({
  as: Component = "div",
  size = "full",
  className = "",
  noPadding = false,
  children,
  ...props
}) {
  const appliedSize = sizeClasses[size] || sizeClasses.full;
  const paddingClass = noPadding ? "" : "px-4 sm:px-6 md:px-8 lg:px-10";

  return (
    <Component
      className={cn("mx-auto w-full", appliedSize, paddingClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
