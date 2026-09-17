import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function FaqStillNeedHelp({ className = "" }) {
  return (
    <section
      aria-label="Contact Support Callout"
      className={cn("w-full bg-[#111111] text-white py-10 sm:py-12 select-none", className)}
    >
      <Container size="full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Heading & Description */}
          <div className="flex flex-col max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Still need help?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400">
              Can&apos;t find what you&apos;re looking for? Get in touch with our support team.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold text-xs sm:text-[13px] rounded-[2px] hover:bg-neutral-200 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/track-order"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-700 text-white font-medium text-xs sm:text-[13px] rounded-[2px] hover:border-neutral-500 hover:text-white transition-all whitespace-nowrap"
            >
              <span>Track Order</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
