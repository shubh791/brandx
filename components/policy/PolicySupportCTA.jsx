import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeadsetIcon, HelpCircleIcon, ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function PolicySupportCTA({
  heading = "Need further clarification on our policies?",
  subheading = "Our customer care team is here to assist with any questions regarding orders, deliveries, or exchanges.",
  className = "",
}) {
  return (
    <section
      aria-label="Customer Care Callout"
      className={cn(
        "w-full bg-[#111111] text-white py-8 sm:py-10 select-none border-t border-neutral-800",
        className
      )}
    >
      <Container size="full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Copy */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-[3px] bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
              <HeadsetIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {heading}
              </h3>
              <p className="mt-1 text-xs sm:text-[13.5px] text-neutral-400 max-w-xl leading-relaxed">
                {subheading}
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-xs sm:text-[13px] rounded-[2px] hover:bg-neutral-200 active:scale-[0.98] transition-all whitespace-nowrap shadow-xs cursor-pointer"
            >
              <span>Contact Customer Care</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 text-white font-medium text-xs sm:text-[13px] rounded-[2px] hover:bg-neutral-800 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <HelpCircleIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span>Browse FAQs</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
