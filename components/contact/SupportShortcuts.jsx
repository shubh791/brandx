import Link from "next/link";
import { SUPPORT_SHORTCUTS, APPROVED_SUPPORT_INFO } from "@/data/contact";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function SupportShortcuts({ className = "" }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      
      {/* 1. "Before You Send" Helper Box */}
      <div className="bg-[#faf9f7] p-5 sm:p-7 rounded-[2px] border border-[#e8e6e1]">
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
          Before you send
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#666666]">
          Save time by checking our quick self-service options:
        </p>

        {/* Shortcut Rows */}
        <div className="mt-4 flex flex-col divide-y divide-[#ece9e2]">
          {SUPPORT_SHORTCUTS.map((shortcut) => (
            <div
              key={shortcut.question}
              className="py-3.5 flex items-center justify-between gap-3 first:pt-0 last:pb-0"
            >
              <span className="text-sm sm:text-[14.5px] text-[#333333] font-medium">
                {shortcut.question}
              </span>
              <Link
                href={shortcut.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#e11d48] transition-colors whitespace-nowrap group"
              >
                <span>{shortcut.actionText}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQs Callout */}
        <div className="mt-5 pt-4.5 border-t border-[#e5e3dc] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm text-[#555555]">
            You may also find your answer in our FAQs.
          </span>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:underline underline-offset-4"
          >
            <span>View FAQs</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 2. Direct Support Information */}
      <div className="bg-white p-5 sm:p-7 rounded-[2px] border border-[#e8e6e1]">
        <h4 className="text-xs uppercase font-bold tracking-wider text-[#111111] mb-3.5">
          Direct Support
        </h4>

        <dl className="flex flex-col gap-3 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-[#f0eee9]">
            <dt className="text-[#777777]">Support Email:</dt>
            <dd>
              <a
                href={`mailto:${APPROVED_SUPPORT_INFO.email}`}
                className="font-medium text-[#111111] hover:text-[#e11d48] transition-colors"
              >
                {APPROVED_SUPPORT_INFO.email}
              </a>
            </dd>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-[#f0eee9]">
            <dt className="text-[#777777]">Toll-Free Phone:</dt>
            <dd>
              <a
                href={`tel:${APPROVED_SUPPORT_INFO.phone.replace(/\s+/g, "")}`}
                className="font-medium text-[#111111] hover:text-[#e11d48] transition-colors"
              >
                {APPROVED_SUPPORT_INFO.phone}
              </a>
            </dd>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
            <dt className="text-[#777777]">Support Hours:</dt>
            <dd className="font-medium text-[#111111]">
              {APPROVED_SUPPORT_INFO.hours}
            </dd>
          </div>
        </dl>
      </div>

    </div>
  );
}
