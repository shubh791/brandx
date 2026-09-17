import { cn } from "@/lib/utils";

export function PolicySection({
  id,
  index,
  title,
  content = [],
  highlight,
  className = "",
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-48 py-6 sm:py-8 border-b border-[#f0eee9] last:border-b-0",
        className
      )}
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {typeof index === "number" && (
          <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] bg-[#f0eee9] text-xs sm:text-sm font-bold text-[#111111] flex-shrink-0 mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h2 className="text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight text-[#111111] leading-snug">
          {title}
        </h2>
      </div>

      <div className="space-y-3 sm:space-y-3.5 pl-0 sm:pl-11">
        {content.map((paragraph, pIdx) => (
          <p
            key={pIdx}
            className="text-[14.5px] sm:text-[15.5px] text-[#444444] leading-relaxed"
          >
            {paragraph}
          </p>
        ))}

        {highlight && (
          <div className="mt-3 p-4 bg-[#f8f7f5] border-l-2 border-[#111111] rounded-r-[2px] text-xs sm:text-sm text-[#333333] leading-relaxed">
            {highlight}
          </div>
        )}
      </div>
    </section>
  );
}
