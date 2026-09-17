import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ClockIcon, ChevronRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function PolicyHero({
  title,
  eyebrow,
  subtitle,
  lastUpdated,
  breadcrumbs = [],
  className = "",
}) {
  return (
    <section
      aria-label={`${title} Header`}
      className={cn(
        "w-full bg-[#f8f7f5] border-b border-[#eceae6] py-8 sm:py-10 lg:py-12 select-none",
        className
      )}
    >
      <Container size="full">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#737373] mb-4 overflow-x-auto whitespace-nowrap"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={crumb.label} className="flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRightIcon className="w-3 h-3 text-[#999999] flex-shrink-0" />
                  )}
                  {isLast ? (
                    <span className="font-semibold text-[#111111]">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#111111] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start max-w-3xl">
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#737373]">
                {eyebrow}
              </span>
            )}
            <h1 className="text-[26px] sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#111111] mt-2 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2.5 text-sm sm:text-[15px] lg:text-base text-[#555555] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {lastUpdated && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e4e2dc] rounded-[3px] text-xs text-[#666666] flex-shrink-0 shadow-xs">
              <ClockIcon className="w-3.5 h-3.5 text-[#888888]" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
